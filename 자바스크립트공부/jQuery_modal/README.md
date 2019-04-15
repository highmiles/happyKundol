## 분석방법
1. jquery.dialog.js >> 핵심적인 요소만 추리기[완료]
2. jquery >> vanilaJS로 만들기[완료]
3. ES5 >> ES6로 만들기[완료]
4. 실제 모듈에 적용하기 - 디자인 수정[완료] 
### jQuery 를 VanilaJS로 포팅하기 좋은 사이트
http://youmightnotneedjquery.com/

## 질문정리
### 왜 mask와 scrollContainer 두가지 나눠서 했을까?
scrollContainer = overflow : auto; 
mask : 그러한게 없음
mask가 구현이 될 때 body에 overflow : hidden이 추가됨. 

###data -[action타입]
예) data-dialog-action으로 이벤트 처리방법을 정의했는데 이걸 안 이용하고는 어떻게 할 수 있는가.  

### e.stopImmediatePropagation(); 에 대한 질문
같은 요소에 관한 이벤트들을 차단하는 것으로 알려져 있는데 그런 경우가 언제일까요? 
div
div 
이렇게 되어있을 때 div를 클릭한다고 해서 옆에 있는 div의 이벤트 핸들러가 작동하는 걸까요? 
event prevent에 관한 함수 정리
|     | stop bubbling | prevent default action |  prevent "same element" event handlers | 
|:--------|:--------|:--------|:--------|
| return false   | Yes | Yes | No |
| preventDefault | No | Yes | No |  
| stopPropagation | Yes | No | No |  
| stopImmediatePropagation | Yes | No | Yes | 

### this.$mask[0].clientHeight 이런식으로 DOM높이에 접근을 해도 리플로우가 생길까요?
파이어폭스에 repaint를 하기 위해서는 clientHeight란 property에 접근해서 강제로 repaint를 날릴 수 있다. 
force repaint for firefox: http://stackoverflow.com/a/12089264
```
console.log("this.$mask[0].clientHeight", this.$mask[0].clientHeight)
this.$mask
.data('forceRepaint', this.$mask[0].clientHeight)
.addClass('dialog-mask-active');
```