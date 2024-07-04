import { Router } from 'express';
import * as controller from '../controllers/AuthController';

const AuthRouter = Router();

AuthRouter.get('/uid',  controller.getSessionUser); 
AuthRouter.post('/gid', controller.loginGoogleUser);

AuthRouter.get('/threads', controller.authorizeThreadsUser);

export default AuthRouter;
