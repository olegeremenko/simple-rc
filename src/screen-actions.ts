import {mouse, Region, screen} from "@nut-tree/nut-js";
import Jimp = require("jimp");

const SCREENSHOT_WIDTH = 200;
const SCREENSHOT_HEIGHT = 200;

const getScreenRegion = async (): Promise<string> => {
    const mousePosition = await mouse.getPosition();
    const screenRegion = await screen.grabRegion(
        new Region(
            Math.max(0, mousePosition.x - SCREENSHOT_WIDTH / 2),
            Math.max(0, mousePosition.y - SCREENSHOT_HEIGHT / 2),
            SCREENSHOT_WIDTH,
            SCREENSHOT_HEIGHT
        )
    );

    const screenRegionRgb = await screenRegion.toRGB();
    const image = new Jimp({...screenRegionRgb});
    const imageBuffer = await image.getBufferAsync(Jimp.MIME_PNG);

    return imageBuffer.toString('base64');
}

export {
    getScreenRegion
}
