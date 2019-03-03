class Node{
    constructor(data, next = null){
        this.data = data; 
        this.next = next;  
    }
}
class LinkedList{
    constructor(){
        this.list = {}; 
        this.head = null;
        this.tail = null 
    }
    add(data){
        const d = new Node(data);
        if(!this.head){
            this.head = d; 
            this.tail = d; 
        }else{
            this.tail.next = d; 
            this.tail = d; 
        } 
    }
    find(data){
        let h = this.head; 
        let prev = null; 
        while(h){
            if(h.data == data)return h; 
            h = h.next; 
        }
    }
}
let List = new LinkedList();
	
/* add nodes */
List.add('item #1');
List.add('item #2');
List.add('item #3');
List.add('item #4');
List.add('item #5');

const ret = List.find('item #4');
console.log(ret)