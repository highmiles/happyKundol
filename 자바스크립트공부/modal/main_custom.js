window.onload = () => {
    'use strict'; 
    const $ = dom => document.querySelector(dom) ;
    const log = a => console.log(a)  
    // 전체적인 삭제버튼에 대해서 click 이벤트
    const _template = () => `
        <div><div>
    `
    let k_modal = {}
    k_modal.hide = (sel)=>{
        document.querySelector(sel).remove();
    } 
    k_modal.createDom = (obj) =>{
        `<div class="k_modal">
            <h2>${obj.title}</h2>
            
        </div>`
        //버튼이 여러개있을 때 추가와 그 추가됬을 때 add Event는 어떻게 집어 넣어야 하는가. 
    }
    k_modal.show = (obj) =>{ 
        this.createMask(); 
        
        document.append >> obj
    }
    k_modal.createMask = () =>{
        const _div = document.createElement("div");
        _div.className = "k_mask"
        document.appendChild(_div) 
    }
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode("Water");         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList" x
    // 삭제버튼 > dialog > click func > click func
    //                 > close > remove  
    $(".content button.kundol").addEventListener("click", e =>{
        k_modal.active({
            title: '알림창', 
            width: 500,
            height: 500, 
            body: $('button').text('Launch another dialog')
        }) 
    })
     
    // log($('.content button')) 
    // $('.content button').addEventListener("click", function(){
    //     console.log(1)
    // }) 
    // $('#stacked').click(function () { 
    //     $.dialog({
    //         title: 'Dialog #1',
    //         show: true,
    //         modal: true,
    //         width: 500,
    //         height: 500,  
}