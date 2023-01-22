import {Command} from "./command-resolver";
import {getMousePosition, moveMouseDown, moveMouseLeft, moveMouseRight, moveMouseUp} from "./mouse-control-actions";

enum Commands {
    MOUSE_POSITION = 'mouse_position',
    MOUSE_UP = 'mouse_up',
    MOUSE_DOWN = 'mouse_down',
    MOUSE_LEFT = 'mouse_left',
    MOUSE_RIGHT = 'mouse_right',
}

const getFirstParamAsNumber = (command: Command): number => {
    return command ? Number(command.params[0]) : 0;
}

const doAction = async (command: Command): Promise<string> => {
    let response: string = command.cmd;
    const firstParam = getFirstParamAsNumber(command);

    switch (command.cmd) {
        case Commands.MOUSE_POSITION:
            response = await getMousePosition();
            break;
        case Commands.MOUSE_UP:
            await moveMouseUp(firstParam);
            break;
        case Commands.MOUSE_DOWN:
            await moveMouseDown(firstParam);
            break;
        case Commands.MOUSE_LEFT:
            await moveMouseLeft(firstParam);
            break;
        case Commands.MOUSE_RIGHT:
            await moveMouseRight(firstParam);
            break;
    }

    return response;
}

export default doAction;
