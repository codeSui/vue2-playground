function throttle(fn, delay) {
  let timer, preTime
  return function() { // 它的 this ? 执行的时候动态绑定呀
    const Arg = arguments
    const nowTime = Date.now()
    const remain = delay - (nowTime - preTime)
    if (remain > 0) {
      if (!timer) {
        timer = setTimeout(() => {
          preTime = Date.now()
          clearTimeout(timer)
          timer = null
          return fn.apply(this, Arg)
        }, remain)
      }
    } else {
      preTime = nowTime
      return fn.call(this, ...Arg)
    }
  }
}
export default throttle
