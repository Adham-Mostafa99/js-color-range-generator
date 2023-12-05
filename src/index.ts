/**
 * Generates a list of colors based on the provided hueValue and colorRange.
 * @param hueValue - The hue value (number) for the HSL color.
 * @param colorRange - An array of numbers representing the color range.
 * @returns An object containing colors in hexadecimal format.
 */
function generate(hueValue: number, colorRange: number[]) {
  // Input validation
  if (
    isNaN(hueValue) ||
    !Array.isArray(colorRange) ||
    colorRange.length === 0
  ) {
    console.error('Invalid input. Please provide valid parameters.');
    return null;
  }

  const colorList: Record<number, string> = {};
  const saturation = 90; // Initial saturation value
  const lightness = 95; // Initial lightness value
  const saturationVariation = 70; // Variation in lightness and not should be bigger that saturation
  const lightnessVariation = 75; // Variation in lightness and not should be bigger that lightness
  const minRange = Math.min(...colorRange); // Minimum value for the range
  const maxRange = Math.max(...colorRange); // Maximum value for the range

  if (minRange < 0 || maxRange <= 0) {
    console.error('Invalid color range. Please provide positive values.');
    return null;
  }

  colorRange.forEach((range) => {
    const proportion = (range - minRange) / (maxRange - minRange);

    const calculatedSaturation = Math.round(
      saturation - proportion * saturationVariation
    );
    const calculatedLightness = Math.round(
      lightness - proportion * lightnessVariation
    );

    // Ensure saturation and lightness values stay within the valid HSL range (0-100)
    const finalSaturation = Math.max(
      0,
      Math.min(100, Math.round(calculatedSaturation))
    );
    const finalLightness = Math.max(
      0,
      Math.min(100, Math.round(calculatedLightness))
    );

    colorList[range] = hslToHex(hueValue, finalSaturation, finalLightness);
  });

  return colorList;
}

function hslToHex(h: number, s: number, l: number) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0'); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export { generate };
