const sayHello = () => {
  alert("Hello");
};
const btn = document.getElementById("btn");
btn.onclick = sayHello;
// addEventListener를 사용하지 않고 event를 직접 변경하면
// 적용되지 않는 경우가 있어 항상 addEventListener를 쓰는게 맞다.

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", sayHello);

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundColor = "#f7eff0";
});

const input = document.getElementById("input");
input.addEventListener("keyup", (e) => console.log(e.key));

// Event Bubble/Delegation

const box = document.getElementById("box");
const list = document.getElementById("list");
const red = document.getElementById("red");

document.body.addEventListener("click", () => {
  // console.log("1. body");
});
box.addEventListener("click", () => {
  // console.log("2. div");
});
list.addEventListener("click", () => {
  // console.log("3. ul");
});
red.addEventListener("click", () => {
  // console.log("4. li");
});

// 대부분 이벤트는 버블링으로 전파되지만, 전파되지 않는 이벤트들이 있다.
// focus, blur(focus를 잃을 때), mouseenter, mouseleave
// 버블링을 허용하려면
// focusin, focusout, mouseover, mouseout
// 위 이벤트는 버블링만 다르고 동작에는 차이가 없다.
document.body.addEventListener("focusin", () => {
  // console.log("focusin 1. body");
  // 버블링 된다.
});
input.addEventListener("focusin", (e) => {
  e.stopPropagation();
  // focusin이었을때의 버블링을 인위적으로 막는 법
  // 이벤트 버블링을 막아야 하는 경우는 거의 없으므로 자주 사용하지는 않는다
  // console.log("focusin 2. input");
});

// 이벤트 버블링으로 이벤트 위임(내 이벤트를 다른 요소에 전달)이 가능
const colors = list.children;
const clickHandler = (e) => {
  console.log("e.target, 클릭된 요소 ", e.target);
  console.log(
    "e.currentTarget, 이벤트를 위임받은 이벤트핸들러가 있는 요소 ",
    e.currentTarget
  );
  // 위임을 하지 않았다면 target와 currentTarget은 같다.

  let t = e.target;
  if (t.tagName === "A") {
    t = t.parentElement;
    console.log("<a>태그일때는 타겟 위로 올림, e.target: ", t);
  } else if (t === e.currentTarget) {
    // Ul이 클릭되면 on 클래스가 추가되지 않게 함
    return;
  }

  for (let c of colors) {
    c.classList.remove("on");
  }
  t.classList.add("on");
};

// document.getElementById("red").addEventListener("click", clickHandler);
// document.getElementById("blue").addEventListener("click", clickHandler);
// document.getElementById("green").addEventListener("click", clickHandler);
// document.getElementById("pink").addEventListener("click", clickHandler);
// 이렇게 li각각에 이벤트핸들러를 달 수 없다
// ↓ ...
// 부모노드에 이벤트핸들러를 달고 이벤트를 위임한다
document.getElementById("list").addEventListener("click", clickHandler);
// 버블링 덕분에 클릭된 li의 이벤트가 ul로 올라가 이벤트를 실행시켜주기 때문이다

// 만약 텍스트라 <a>태그, 즉 링크라면?
// 여백이 아니라 <a>태그를 클릭하면 배경의 색이 바뀌지 않는다.
// 1-1
