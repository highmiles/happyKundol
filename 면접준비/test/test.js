var arr = [1, 2, 3, 4]
function a(){
    function b(val){
        i = 10
        console.log(i)
        return val * i
    }
    for(var i = 0; i < arr.length; i++){
        arr[i] = b(arr[i])
    }
    return arr; 
}
console.log(a())
//10
//[ 10, 2, 3, 4 ]