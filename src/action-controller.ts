import {Command} from "./command-resolver";
import {getMousePosition, moveMouseDown, moveMouseLeft, moveMouseRight, moveMouseUp} from "./mouse-control-actions";
import {drawCircle, drawRectangle} from "./draw-actions";

enum Commands {
    MOUSE_POSITION = 'mouse_position',
    MOUSE_UP = 'mouse_up',
    MOUSE_DOWN = 'mouse_down',
    MOUSE_LEFT = 'mouse_left',
    MOUSE_RIGHT = 'mouse_right',
    DRAW_CIRCLE = 'draw_circle',
    DRAW_RECTANGLE = 'draw_rectangle',
    DRAW_SQUARE = 'draw_square',
    PRINT_SCREEN = 'prnt_scrn',
}

const getFirstParamAsNumber = (command: Command): number => {
    return command && command.params.length > 0 ? Number(command.params[0]) : 0;
}

const getSecondParamAsNumber = (command: Command): number => {
    return command && command.params.length > 1 ? Number(command.params[1]) : 0;
}

const doAction = async (command: Command): Promise<string> => {
    let response: string = command.cmd;
    const firstParam = getFirstParamAsNumber(command);
    const secondParam = getFirstParamAsNumber(command);

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

        case Commands.DRAW_CIRCLE:
            await drawCircle(firstParam);
            break;
        case Commands.DRAW_RECTANGLE:
            await drawRectangle(firstParam, secondParam);
            break;
        case Commands.DRAW_SQUARE:
            await drawRectangle(firstParam, firstParam);
            break;
    }

    return response;
}

export default doAction;
