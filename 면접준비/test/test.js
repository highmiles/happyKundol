function constant$1(x) {
    return function() {
      return x;
    };
  }
const ret = constant$1(1)
console.log(ret.call()); 