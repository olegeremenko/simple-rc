import * as WebSocket from 'ws';
import {resolveCommand} from "./command-resolver";
import doAction from "./action-controller";
import {createWebSocketStream} from "ws";

const GREETING_MESSAGE = 'Welcome!';

const createServer = (): WebSocket.Server => {
    return new WebSocket.Server({
        port: Number(process.env['SERVER_PORT'] || 8081)
    });
}

const serverHandler = async (webSocket: WebSocket) => {
    webSocket.send(GREETING_MESSAGE);

    const wedSocketStream = createWebSocketStream(webSocket, {
        decodeStrings: false,
        defaultEncoding: 'utf8'
    });

    wedSocketStream.on('data', async (message: string) => {
        try {
            const command = await resolveCommand(message.toString());
            const response = command ? await doAction(command) : '';
            webSocket.send(response);
        } catch (error) {
            const errorMessage = (error as Error).toString();
            webSocket.send('Error: ' + errorMessage);
        }
    });
}

const startServer = (): void => {
    const webSocketServer = createServer();
    webSocketServer.on('connection', serverHandler);
    process.on('SIGINT', () => {
        webSocketServer.close();
        process.exit(0);
    });
}

export default startServer;
