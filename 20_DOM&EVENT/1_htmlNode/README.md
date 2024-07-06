# 노드 접근/부모,자식,형제 노드

```js
document.querySelectorAll("p"); // 한번 저장된 값을 계속 사용함. 노드가 실시간으로 변화해도 변화를 감지하지 못함
const red = document.getElementById("#red");
red.childNodes; // 실시간 변화 감지
```

Return Type: NodeList
모든 타입의 노드가 가져와짐

```js
document.getElementsByTagName("p");
```

Return Type: HTMLCollection (element, 즉 태그만 가져옵니다.)
노드의 변화를 실시간으로 감지함

부모노드

```js
const red = document.getElementById("#red");
red.parentNode; // 부모노드 반환
red.parentElement; // 부모노드 중 element만 반환
```

document.documentElement는 html자체를 가져옵니다.
document.documentElement.parentNode = #document
document.documentElement.parentElement = null

Node에는 다양한 타입이 있는데,
element는 <>태그만을 의미함
attribute
text: html의 가독성을 높이기 위한 띄어쓰기, 공백들이 다 들어감
comment
document

ul.childNodes는 모든 타입을 반환
ul.children은 태그만 반환
![methods](./element%20methods.png)

# 생성/추가

textContent는 <>마크업을 싹다 날려버린다.
혹 ul.textContent = '<p>tag</p>'를 써도 마크업이 살려서 복원되는게 아닌 저 스트링 그대로가 들어갑니다. 마크업을 살리려면 innerHTML을 쓰는게 맞다.
ul.innerHTML = '<p>tag</p>'처럼.
그러나 이는 마크업을 일일히 써줘야하는 단점이 있다.
그렇기 때문에 아래 둘 중 하나의 방법을 사용한다.

```js
const newLi = document.createElement("li");
newLi.innerHTML = "green";
ul.appendChild(newLi);
```

```js
const newLi2 = document.createElement("li");
const newText = document.createTextNode("newText");
// newText: "newText"
newLi2.appendChild(newText);
ul.appendChild(newLi2);
```

apappendChild()는 append()에서 있듯이 맨 마지막 순서에 추가된다.
만약 추가되는 위치를 정하고싶다면 insertBefore(insert, before)를 사용한다.

```js
const newLi3 = document.createElement("li");
const red = document.getElementById("#red");
ul.insertBefore(newLi3, red);
```

# 복제

```js
const newRed = red.cloneNode(default=false); // 얕은복사. 자기자신만 복사
const newRed2 = red.cloneNode(true); // 깊은복제 true. 자식노드까지 복사
```

# 삭제

```js
ui.removeChild(newRed); // 삭제된 node를 리턴
```
