// exporting all functions and constants from original file
export * from 'SourceComponent/Form/Form.config.js';
// specifically exporting default (as it is not included in "*")
export { default } from 'SourceComponent/Form/Form.config.js';
// re-exporting the overriden variable
export const MIN_PASSWORD_LENGTH = 6;