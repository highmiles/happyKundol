//함수형 프로그래밍 - 두가지의 결과값이 나오는 경우의 flatMap 활용
var R = require('ramda')
var _ = require('lodash')
var Either = require('ramda-fantasy').Either

//flat map의 경우 이렇게 처리된다. 
const test_flatMap = () => {
    const duplicate = x => [x, x]
    const arr = [1, 2, 3, 4]
    console.log(_(arr).flatMap(duplicate).value());
}

//갬블러 - 틀린예제 : 파산할 경우의 예외처리를 해줄 수 없다. 
const test_Monads = () => {
    const initialMoney = 1000
    const transactions = [500, -2000, +1000]

    const final = transactions.reduce((x, y) => x + y, initialMoney)
    console.log(final)
}

//이런식으로 map으로 감싸서 컨테이너로 승급하여 쓸 수 있다. 
const test_Monads2 = () => {
    const newGambler = type => {
        let gambler = {}
        gambler.flatMap = callback =>
            gambler.type === "Playing" ? // is the gambler still playing?
            callback(gambler.money) : // if yes apply the transaction
            newGambler("Bankrupt") // otherwise return a bankrupt gambler

        if (type === "Bankrupt") { // if we initialize a bankrupt gambler we don't need other parameters
            gambler.type = "Bankrupt"
            return gambler
        } else { // if we initialize a playing gambler we need to know how much money he has so we return another function
            return money => {
                gambler.type = "Playing"
                gambler.money = money
                return gambler
            }
        }
    }

    const transaction = amount => // a transaction function getting the transaction and returning a new gambler
        gamblersMoney =>
        gamblersMoney + amount > 0 ? // does the gambler still have money after the transaction?
        newGambler("Playing")(gamblersMoney + amount) : // if so return a new gambler with the new money
        newGambler("Bankrupt") // otherwise return a bankrupt gambler

    let gambler = newGambler("Playing")(1000) // create a new Gambler with $1000
    gambler = gambler.flatMap(transaction(500)).flatMap(transaction(-2000)).flatMap(transaction(1000)) // applies all the transactions

    console.log(gambler) // returns correctly a bankrupt gambler
}

const test_TryCatch = () => {
    let a = "{'a':b}"
    a = JSON.stringify(a) 
    const b = R.tryCatch(a => JSON.parse(a), R.always('catched'))('bar') // => 'catched'  
    console.log(b)
}
test_TryCatch() 