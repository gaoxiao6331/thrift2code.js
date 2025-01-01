import { throwError } from "@/util/error";
import { defaultLogger, DefaultLogger } from "@/util/log";

describe("throwError", () => {
  it("should log the error message and throw it", () => {
    const loggerErrorSpy = jest
      .spyOn(defaultLogger, "error")
      .mockImplementation();

    const message = "This is an error message";

    // 使用 expect.assertions 确保我们期望的断言被调用
    expect.assertions(2);

    try {
      throwError(message);
    } catch (e) {
      expect(loggerErrorSpy).toHaveBeenCalledWith(message); // 验证 logger.error 被调用
      expect(e).toBe(message); // 验证抛出的错误消息
    }

    loggerErrorSpy.mockRestore();
  });

  it("should log the error message using a custom logger", () => {
    const customLogger = new DefaultLogger();

    const loggerErrorSpy = jest
      .spyOn(customLogger, "error")
      .mockImplementation();

    const message = "This is an error message";

    // 使用 expect.assertions 确保我们期望的断言被调用
    expect.assertions(2);

    try {
      throwError(message, customLogger);
    } catch (e) {
      expect(loggerErrorSpy).toHaveBeenCalledWith(message); // 验证 logger.error 被调用
      expect(e).toBe(message); // 验证抛出的错误消息
    }
  });
});
