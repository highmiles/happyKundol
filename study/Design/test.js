function req () {
    return function () {
      setTimeout(() => (console.log(`request가 시작됩니다. `), 5000))
    }
  }
  const reqL = req()
  //로직
  reqL();
 