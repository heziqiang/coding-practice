// 防抖 debounce 和 节流 throttle

/*
共同点: 都是为了限制执行频率
区别:
debounce，延迟一段时间执行, 中间重复调用会重新计时, 采用最后一次。
用于: Input搜索联想词、按钮点击请求。

throttle，延迟一段时间执行, 中间重复调用会被忽略, 采用首次。
用于: 滚动、拖拽、缩放、动画。
*/

function debounce(fn, time) {
  let timer = null;
  return (...args) => {
    // 重复执行会清空计时器
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
}

function throttle(fn, time) {
  let timer = null;
  return (...args) => {
    // 上锁期间 重复执行会被忽略
    if (timer) return;
    timer = setTimeout(() => {
      timer = null; // 释放锁
      fn.apply(this, args);
    }, time);
  };
}
