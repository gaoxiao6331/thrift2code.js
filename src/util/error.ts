import { defaultLogger } from "./log";

export function throwError(msg: string, logger = defaultLogger) {
  logger.error(msg);
  throw msg;
}
