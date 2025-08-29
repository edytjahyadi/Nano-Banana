/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// NOTE: AI functionality has been disabled as requested to prevent API key errors.
// To re-enable, you will need to restore the API calls and ensure your
// environment has the API_KEY variable set.

/**
 * Converts a File object to a data URL string.
 * @param file The file to convert.
 * @returns A promise that resolves with the data URL.
 */
const fileToDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
};

const disabledApiWarning = "AI feature disabled: No API key found. Returning original image. Please set the API_KEY environment variable to enable AI features.";

/**
 * [API DISABLED] This function would normally generate an edited image.
 * It now returns the original image to prevent API key errors.
 */
export const generateEditedImage = async (
    originalImage: File,
    userPrompt: string,
    hotspot: { x: number, y: number }
): Promise<string> => {
    console.warn(disabledApiWarning, { userPrompt, hotspot });
    return fileToDataURL(originalImage);
};

/**
 * [API DISABLED] This function would normally generate a filtered image.
 * It now returns the original image to prevent API key errors.
 */
export const generateFilteredImage = async (
    originalImage: File,
    filterPrompt: string,
): Promise<string> => {
    console.warn(disabledApiWarning, { filterPrompt });
    return fileToDataURL(originalImage);
};

/**
 * [API DISABLED] This function would normally generate an adjusted image.
 * It now returns the original image to prevent API key errors.
 */
export const generateAdjustedImage = async (
    originalImage: File,
    adjustmentPrompt: string,
): Promise<string> => {
    console.warn(disabledApiWarning, { adjustmentPrompt });
    return fileToDataURL(originalImage);
};
