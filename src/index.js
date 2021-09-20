import dotenv from "dotenv";

/**
 * Using dotenv under the hood, use this to register your .env file in your app.
 * @returns {void}
 */
const config = () => dotenv.config();

/**
 * Define the env variable you want and a fallback if necessary
 * @param {string} key
 * @param {string?} defaultValue
 * @returns {string | undefined}
 */
const env = (key, defaultValue) => process.env[key] || defaultValue;

export default env;
export { config };
