import { DefaultLogger } from "@/util/log"; // 确保路径正确

// 模拟 dayjs 模块
jest.mock("dayjs", () => {
  return jest.fn(() => ({
    format: jest.fn(() => "2023-01-01 12:00:00"), // 返回模拟的时间格式
  }));
});

describe("DefaultLogger", () => {
  let logger: DefaultLogger;

  beforeEach(() => {
    logger = new DefaultLogger();
    jest.clearAllMocks(); // 清除之前的 mock
  });

  it("should log info messages correctly with blue color and current timestamp", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    const message = "This is an info message";
    logger.info(message);

    expect(consoleSpy).toHaveBeenCalledWith(
      `${String.fromCharCode(0x1b)}[34m[2023-01-01 12:00:00] [info] ${message}${String.fromCharCode(0x1b)}[39m`,
    );

    consoleSpy.mockRestore(); // 恢复原始的 console.log
  });

  it("should log warn messages correctly with yellow color and current timestamp", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    const message = "This is a warning message";
    logger.warn(message);

    expect(consoleSpy).toHaveBeenCalledWith(
      `${String.fromCharCode(0x1b)}[33m[2023-01-01 12:00:00] [warn] ${message}${String.fromCharCode(0x1b)}[39m`,
    );

    consoleSpy.mockRestore();
  });

  it("should log error messages correctly with red color and current timestamp", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    const message = "This is an error message";
    logger.error(message);

    expect(consoleSpy).toHaveBeenCalledWith(
      `${String.fromCharCode(0x1b)}[31m[2023-01-01 12:00:00] [error] ${message}${String.fromCharCode(0x1b)}[39m`,
    );

    consoleSpy.mockRestore();
  });
});
