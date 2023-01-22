type Command = {
    cmd: string,
    params: string[]
}

const resolveCommand = async (rawCommand: string): Promise<Command | null> => {
    const cmdParts: string[] = rawCommand.split(' ');

    if (cmdParts.length === 0 || !cmdParts[0]) {
        return null;
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
