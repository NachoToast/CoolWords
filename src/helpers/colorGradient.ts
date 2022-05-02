/** Valid values are from 0 to 255 (inclusive) */
export interface Colour {
    red: number;
    blue: number;
    green: number;
}

export const std_red: Colour = { red: 240, green: 128, blue: 128 };
export const std_yellow: Colour = { red: 255, green: 214, blue: 0 };
export const std_green: Colour = { red: 144, green: 238, blue: 144 };

/** Calculates an intermediary colour between 2 or 3 colours.
 * @returns {Colour} Object with red, green, and blue number fields.
 * @author NachoToast
 * @see {@link https://gist.github.com/NachoToast/df41aec040d7c52ed8143d2ce656bdba| GitHub Gist}
 */
export default function ColourGradient(
    min: number,
    max: number,
    current: number,
    colorA: Colour,
    colorB: Colour,
    colorC?: Colour,
): Colour {
    let color_progression;
    if (current >= max) color_progression = 1;
    else color_progression = (current - min) / (max - min); // Standardize as decimal [0-1 (inc)].
    if (colorC) {
        color_progression *= 2;
        if (color_progression >= 1) {
            color_progression -= 1;
            colorA = colorB;
            colorB = colorC;
        }
    }

    const newRed = colorA.red + color_progression * (colorB.red - colorA.red);
    const newGreen = colorA.green + color_progression * (colorB.green - colorA.green);
    const newBlue = colorA.blue + color_progression * (colorB.blue - colorA.blue);

    const red = Math.floor(newRed);
    const green = Math.floor(newGreen);
    const blue = Math.floor(newBlue);

    return { red, green, blue };
}
