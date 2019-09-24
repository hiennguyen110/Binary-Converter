const chalk = require("chalk");

const success_prompt = chalk.bold.green.inverse;
const warning_prompt = chalk.bold.yellow.inverse;
const error_prompt = chalk.bold.red.inverse;
const info_prompt = chalk.bold.red.inverse;

module.exports = {
    success_prompt: success_prompt,
    warning_prompt: warning_prompt,
    error_prompt: error_prompt,
    info_prompt: info_prompt
}