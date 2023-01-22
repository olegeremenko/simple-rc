import * as WebSocket from 'ws';
import {resolveCommand} from "./command-resolver";
import doAction from "./action-controller";

const GREETING_MESSAGE = 'Welcome!';

const createServer = (): WebSocket.Server => {
    return new WebSocket.Server({
        port: Number(process.env['SERVER_PORT'] || 8081)
    });
}

const serverHandler = async (webSocket: WebSocket) => {
    webSocket.send(GREETING_MESSAGE);
    webSocket.on('message', async (message: string) => {
        try {
            const command = await resolveCommand(message.toString());
            const response = command ? await doAction(command) : '';
            webSocket.send(response);
        } catch (e) {
            webSocket.send('Error: ' + e.toString());
        }

    });
}

const startServer = (): void => {
    const webSocketServer = createServer();
    webSocketServer.on('connection', serverHandler);
}

export default startServer;
