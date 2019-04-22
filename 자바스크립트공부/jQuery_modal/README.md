## jQuery Modal 분석
jQuery Modal을 우연히 길을 걷다 발견하여 분석을 해보았습니다. 

<center>
<img src="https://github.com/wnghdcjfe/happyKundol/blob/master/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EA%B3%B5%EB%B6%80/jQuery_modal/img.png" width="700px">
</center>

## 분석방법
- [x] jquery.dialog.js >> 핵심적인 요소만 추리기
- [x] jquery >> vanilaJS로 만들기
- [x] ES5 >> ES6로 만들기 - JQuery 좀 귀찮아서 남김
- [x] 실제 모듈에 적용하기 - 디자인 수정
### jQuery 를 VanilaJS로 포팅할 때 참고하기 사이트
http://youmightnotneedjquery.com/

## 질문정리
### 왜 mask와 scrollContainer 두가지 나눠서 했을까?
`scrollContainer = overflow : auto;`
mask : 그러한게 없음

mask가 구현이 될 때 body에 `overflow : hidden`을 추가해서 드래그 이벤트를 막음

### data이벤트정의
`data-dialog-action`으로 이벤트 처리방법을 정의하는데 이걸 안 이용하고는 어떻게 할 수 있을까?  