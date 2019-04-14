## 분석방법
1. jquery.dialog.js >> 핵심적인 요소만 추리기[완료]
2. jquery >> vanilaJS로 만들기
3. ES5 >> ES6로 만들기
4. 실제 모듈에 적용하기 - 디자인 수정
5. 함수형으로 만들 수 있을까 고민하기

## 의문점
왜 mask와 scrollContainer 두가지 나눠서 했는가. 
scrollContainer = overflow : auto; 
mask : 그러한게 없음
mask가 구현이 될 때 body에 overflow : hidden이 추가됨. 

data-dialog-action으로 이벤트 처리방법을 정의했는데 이걸 안 이용하고는 어떻게 할 수 있는가. 

append란? 보아하니 func가 섞인 것도 하던데 그냥 추가하는 것 아니였나? 

.off는 뭐지? 

두개 이상의 모달창을 만들 때 재귀적으로 함수날리는 것 정말 신기하다. 
if (typeof(body) === 'function') {
				this.createMask(true);

				body.call(this, function(body) {
					self.render(body);
				});
			} else {
				self.render(body);
			}
self.render(body)  엥 그냥 render을 해도 된다.. 

아래 두개의 차이점은 뭘까? 
1. self.render(body)
2. body.call(this, function(body) {
					self.render(body);
				});

두개를 동시에 쓰는 이유란 무엇일까? 
e.preventDefault();
e.stopImmediatePropagation();

self.hide('escape');
hide에 매개변수를 넣는 이유는 무엇일까
## 새로운 점
파이어폭스에 repaint를 하기 위해서는 clientHeight란 property에 접근해서 강제로 repaint를 날릴 수 있다. 
force repaint for firefox: http://stackoverflow.com/a/12089264
```
console.log("this.$mask[0].clientHeight", this.$mask[0].clientHeight)
this.$mask
.data('forceRepaint', this.$mask[0].clientHeight)
.addClass('dialog-mask-active');
```