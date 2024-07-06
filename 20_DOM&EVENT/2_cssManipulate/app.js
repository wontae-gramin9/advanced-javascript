const box = document.getElementById("box");
box.style.width = "100px";
box.style.height = "100px";
console.log("box.style: ", box.style);

// Class
console.log("box.className: ", box.className);

box.className = "bg-red";
box.className = "bg-blue";
box.classList.remove("bg-blue");
// className은 className을 덮어버리기때문에 class가 여러개 있을 때 사용하기 불편하다
// 따라서 classList를 사용한다
console.log("box.classList: ", box.classList);

box.classList.add("text-white");
box.classList.remove("text-white");
box.classList.remove("text-white");
box.classList.add("text-yellow", "bg-green");
box.classList.replace("bg-green", "bg-blue");

setInterval(() => {
  box.classList.toggle("bg-blue");
}, 1000);

const color = document.getElementById("color");
color.onclick = (e) => {
  const target = e.target;
  if (target.tagName !== "LI") return;
  target.classList.toggle("text-pink");
};
