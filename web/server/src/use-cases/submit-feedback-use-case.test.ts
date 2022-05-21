import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackUseCaseMock = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy },
);

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedbackUseCaseMock.handle({
            type: 'BUG',
            comment: 'nononono',
            screenshot: 'data:image/png;base64PHOTOPHOTOPHOTO'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit a feedback without a type', async () => {
        await expect(submitFeedbackUseCaseMock.handle({
            type: '',
            comment: 'nononono',
            screenshot: 'data:image/png;base64PHOTOPHOTOPHOTO'
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback without a comment', async () => {
        await expect(submitFeedbackUseCaseMock.handle({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64PHOTOPHOTOPHOTO'
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback with an invalid screenshot', async () => {
        await expect(submitFeedbackUseCaseMock.handle({
            type: 'BUG',
            comment: 'nononono',
            screenshot: 'data:image/jpeg;base64PHOTOPHOTOPHOTO'
        })).rejects.toThrow();
    });
});