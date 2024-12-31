import {defaultLogger} from "../../util/log";
import chalk from "chalk";

defaultLogger.error("this is an error test");
defaultLogger.info("this is an info test");
defaultLogger.warn("this is an warn test");

const a= chalk.red("11")
console.log(a)