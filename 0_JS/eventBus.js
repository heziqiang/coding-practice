// 实现发布-订阅模式

class EventBus {
  constructor() {
    this.map = {};
  }
  // 发布事件
  emit(type, data) {
    (this.map[type] || []).forEach((cb) => {
      cb(data);
    });
  }
  // 订阅事件
  on(type, callback) {
    this.map[type] = this.map[type] || [];
    this.map[type].push(callback);
  }
  // 删除订阅
  remove(type, callback) {
    if (!this.map[type]?.length) return;
    let index = this.map[type].findIndex(callback);
    this.map[type].splice(index, 1);
  }
  // 只执行一次
  once(type, callback) {
    this.on(type, (data) => {
      callback(data);
      this.remove(type, callback);
    });
  }
  // 单例模式
  static getInstance() {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }
}

// Test
function sayHello(name) {
  console.log("hello", name);
}
let ins1 = EventBus.getInstance();
let ins2 = EventBus.getInstance();
ins1.on("hello", sayHello);
ins2.on("hello", sayHello);
ins1.emit("hello", "ins1 发消息的人"); // 触发两条消息
