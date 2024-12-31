namespace js example // JavaScript 命名空间
namespace py example // Python 命名空间
namespace java example // Java 命名空间

// 1. 枚举
enum UserStatus {
    ACTIVE = 1,
    INACTIVE = 2,
    SUSPENDED = 3
}

// 2. 结构体
struct User {
    1: i32 id, // 用户 ID
    2: string name, // 用户姓名
    3: UserStatus status (json_name = "userStatus") // 用户状态，带注解
}

// 3. 异常
exception UserNotFound {
    1: string message (required = true) // 必须提供的消息
}

// 4. 服务
service UserService {
    // 4.1 方法
    User getUser(1: i32 userId) throws (1: UserNotFound notFound) (
        // 注解示例：用于文档生成
        documentation = "Retrieve a user by userId"
    );

    // 4.2 方法重载
    void createUser(1: User user) throws (1: UserNotFound notFound) (
        documentation = "Create a new user"
    );

    // 4.3 方法返回值为 void
    void deleteUser(1: i32 userId) throws (1: UserNotFound notFound) (
        documentation = "Delete a user by userId"
    );
}

// 5. 结构体中的嵌套结构
struct Group {
    1: i32 groupId,
    2: string groupName,
    3: list<User> members (json_name = "groupMembers") // 用户列表，带注解
}

// 6. map 和 list
struct GroupInfo {
    1: map<i32, User> userMap (json_name = "userMap"), // 用户 ID 到用户对象的映射
    2: list<Group> groups // 群组列表
}

// 7. 复杂数据类型
struct ComplexData {
    1: i64 timestamp (json_name = "timeStamp"),
    2: string message,
    3: map<string, string> metadata (json_name = "metaData") // 元数据
}