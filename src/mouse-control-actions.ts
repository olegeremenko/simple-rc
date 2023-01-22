import {mouse, Point, straightTo} from "@nut-tree/nut-js";

const moveMouse = async (dx: number, dy: number) => {
    const mousePosition = await mouse.getPosition();
    await mouse.move(straightTo(new Point(mousePosition.x + dx, mousePosition.y + dy)));
}

const getMousePos = async (): Promise<Point> => {
    return await mouse.getPosition();
}

const getMousePosition = async (): Promise<string> => {
    const mousePosition = await getMousePos();
    return `mouse_position ${mousePosition.x},${mousePosition.y}`;
}

const moveMouseUp = async (step: number): Promise<void> => {
    await moveMouse(0, -step);
}

const moveMouseDown = async (step: number): Promise<void> => {
    await moveMouse(0, step);
}

const moveMouseLeft = async (step: number): Promise<void> => {
    await moveMouse(-step, 0);
}

const moveMouseRight = async (step: number): Promise<void> => {
    await moveMouse(step, 0);
}

export {
    getMousePosition,
    moveMouseUp,
    moveMouseDown,
    moveMouseLeft,
    moveMouseRight
}
