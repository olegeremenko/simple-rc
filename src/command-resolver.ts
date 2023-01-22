import InvalidCommandError from "./Errors/invalid-command-error";

type Command = {
    cmd: string,
    params: string[]
}

const resolveCommand = async (rawCommand: string): Promise<Command | null> => {
    const cmdParts: string[] = rawCommand.split(' ');

    if (cmdParts.length === 0 || !cmdParts[0]) {
        throw new InvalidCommandError('Empty command');
    }

    return {
        cmd: cmdParts[0],
        params: cmdParts.slice(1)
    }
}

export {
    resolveCommand,
    Command
};
