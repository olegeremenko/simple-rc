class CommandExecureError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CommandExecureError';
    }
}

export default CommandExecureError;
