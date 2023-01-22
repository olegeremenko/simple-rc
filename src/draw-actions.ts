import {Button, down, left, mouse, Point, right, up} from "@nut-tree/nut-js";

const drawPath = async (path: Point[]): Promise<void> => {
    const mousePosition = await mouse.getPosition();

    if (path.length === 0) {
        return;
    }

    /** @ts-ignore */
    await mouse.setPosition(path[0]);
    await mouse.pressButton(Button.LEFT);
    await mouse.move(path);
    await mouse.releaseButton(Button.LEFT);
    await mouse.setPosition(mousePosition);
}

const drawCircle = async (radius: number): Promise<void> => {
    const { x: mouseX, y: mouseY } = await mouse.getPosition();

    let step: number = 1.0 / radius;
    let circlePath: Point[] = [];

    for (let n: number = 0; n < 2 * Math.PI; n+= step) {
        circlePath.push(
            new Point(
                Math.round(mouseX + radius * Math.cos(n)),
                Math.round(mouseY + radius * Math.sin(n))
            )
        );
    }

    await drawPath(circlePath);
}

const drawRectangle = async (width: number, length: number): Promise<void> => {
    await mouse.pressButton(Button.LEFT);
    await mouse.move(right(width));
    await mouse.move(down(length));
    await mouse.move(left(width));
    await mouse.move(up(length));
    await mouse.releaseButton(Button.LEFT);
}

export {
    drawRectangle,
    drawPath,
    drawCircle
}
