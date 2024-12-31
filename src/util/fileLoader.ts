import { promises as fs } from "fs";
import { resolve } from "path";
import { throwError } from "./error";
import { homedir } from "os";

export async function readFileContent(filePath: string): Promise<string> {
  let absolutePath = resolve(filePath);

  // 替换 ~ 为用户主目录
  if (filePath.startsWith("~")) {
    absolutePath = filePath.replace("~", homedir());
  }

  try {
    return await fs.readFile(absolutePath, "utf-8");
  } catch (error) {
    if (error.code === "ENOENT") {
      throwError(`File not found: ${absolutePath}`);
    } else if (error.code === "EACCES") {
      throwError(`Permission denied: ${absolutePath}`);
    } else {
      throwError(`Error reading file: ${error.message}`);
    }
  }
}
