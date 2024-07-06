import { expect } from 'chai';
import GoogleGenAiService from '../../../src/services/GenAi/GoogleGenAiService';
import IPersona from '../../../src/models/IPersona';
import GenAiServiceError from '../../../src/services/GenAi/GenAiServiceError';

describe('GoogleGenAiService', () => {
    let googleGenAiService: GoogleGenAiService;
    let persona: IPersona;

    beforeEach(() => {
        googleGenAiService = new GoogleGenAiService();
        persona = { id: '1', name: 'Test Persona', text: 'a helpful assistant' };
    });

    describe('getTextContent', () => {
        it('should throw if persona.name is missing', async () => {
            persona.name = '';
            try {
                await googleGenAiService.getTextContent(persona, 'Test context');
                throw new Error('Expected method to reject.');
            } catch (err) {
                expect(err).to.be.instanceOf(GenAiServiceError);
                expect((err as Error).message).to.equal('persona.name is required to make a prompt.');
            }
        });

        it('should throw if persona.text is missing', async () => {
            persona.text = '';
            try {
                await googleGenAiService.getTextContent(persona, 'Test context');
                throw new Error('Expected method to reject.');
            } catch (err) {
                expect(err).to.be.instanceOf(GenAiServiceError);
                expect((err as Error).message).to.equal('persona.text is required to make a prompt.');
            }
        });

        it('should throw if promptContext is missing', async () => {
            try {
                await googleGenAiService.getTextContent(persona, '');
                throw new Error('Expected method to reject.');
            } catch (err) {
                expect(err).to.be.instanceOf(GenAiServiceError);
                expect((err as Error).message).to.equal('promptContext is required to make a prompt.');
            }
        });

        it('should return content for a valid persona and promptContext without throwing an exception', async () => {
            let content: string | undefined;
            let error: Error | undefined;

            try {
                content = await googleGenAiService.getTextContent(persona, 'Test context');
            } catch (err) {
                error = err as Error;
            }

            expect(error).to.be.undefined;
            expect(content).to.be.a('string').and.have.length.greaterThan(0);
        });
    });
});
