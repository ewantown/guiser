/* Citation
 * 
 * Adapted from code commited to all CPSC 310 project repos by 310-bot (i.e. Reid Holmes et al.).
 * 
 * https://github.com/bshapka/insight-ubc/commit/1c0c9f621d4307a6baa5f8aa221f518896c3b9ee
 */
import express, {Application, Request, Response} from "express";
import * as https from "https";
import * as http from "http";
import cors from "cors";
import AuthRouter from "../routers/AuthRouter";
import cookieParser from "cookie-parser";
import postRouter from "../routers/PostRouter";
import PubRouter from "../routers/PubRouter";
import fs from 'fs';

export default class Server {
    private readonly port: number;
    private readonly httpsCert: string;
    private readonly httpsKey: string;
    private express: Application;
    private server: https.Server | http.Server | undefined;

    constructor(port: number, cert: string = '', key: string = '') {
        this.port = port;
	this.httpsCert = cert;
	this.httpsKey = key;
        this.express = express();
        this.registerMiddleware();
	this.registerRoutes();
    }

    public start(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.server !== undefined) {
                reject();
            } else if (!this.httpsCert || !this.httpsKey) {
                this.server = this.express.listen(this.port, () => {
                    resolve();
                }).on("error", (err: Error) => {
                    reject(err);
                });
            } else {
		const certBuf: Buffer = fs.readFileSync(this.httpsCert);
		const keyBuf: Buffer = fs.readFileSync(this.httpsKey);
		const httpsParams = {key: keyBuf, cert: certBuf};
		this.server = https.createServer(httpsParams, this.express).listen(this.port, () => {
		    resolve();
		}).on("error", (err: Error) => {
		    reject(err);
		});
	    }
        });
    }

    public stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.server === undefined) {
                reject();
            } else {
                this.server.close(() => {
                    resolve();
                });
            }
        });
    }

    private registerMiddleware() {
        this.express.use(express.json());
        this.express.use(cookieParser());
        this.express.use(express.urlencoded( { extended: false }));
        this.express.use(cors());
    }

    private registerRoutes() {
        this.express.get("/echo/:msg", Server.echo);
        this.express.use("/auth", AuthRouter);
        this.express.use("/post", postRouter);
	this.express.use("/pub", PubRouter);
        // Add more routing modules here
    }

    private static echo(req: Request, res: Response) {
        try {
            console.log(`Server::echo(..) - params: ${JSON.stringify(req.params)}`);
            const response = Server.performEcho(req.params.msg);
            res.status(200).json({result: response});
        } catch (err) {
            res.status(400).json({error: err});
        }
    }

    private static performEcho(msg: string): string {
        if (typeof msg !== "undefined" && msg !== null) {
            return `${msg}...${msg}`;
        } else {
            return "Message not provided";
        }
    }
}
