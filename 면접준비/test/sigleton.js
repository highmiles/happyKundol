// # 싱글턴 패턴
class UserStore {
    constructor() {
        this._data = [];
    }
    add(item) {
        this._data.push(item);
    }
    get(id) {
        return this._data.find(d => d.id === id);
    }
}

const instance = new UserStore();
const instance2 = new UserStore(); 
console.log(instance === instance2)
/*
 # const 와 object.freeze()의 차이
 const는 변수의 재할당을 막지만 원시적인 Number, String에 한해서 입니다. 왜냐하면 객체의 경우에는 주소값이 할당되고 이 주소값은 바뀌지 않지만 그 값은 바뀔 수 있기 때문입니다. 따라서 const로 선언을 하면 객체의 값은 수정됩니다.  
 하지만 object.freeze()는 객체의 값이 바뀌는 것을 아예막기 때문에 수정되지 않습니다. 
*/

const instance3 = {"a" : 1}
const instance4 = {"a" : 1}
console.log(instance3 === instance4)
instance3.a = 2; 
Object.freeze(instance4)
instance4.a = 2; 
console.log(instance3)
console.log(instance4)
