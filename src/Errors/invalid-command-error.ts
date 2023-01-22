class InvalidCommandError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidCommandError';
    }
}

export default InvalidCommandError;
