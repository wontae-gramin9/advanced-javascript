// Debouncing은 마지막 calling만,
// Throottling은 그래도 일정 기간동안 적어도 한번은 불리도록 하는 것

function getRandomColor() {
  const palette = [
    "#FFADAD",
    "#FFC3A0",
    "#FF677D",
    "#392F5A",
    "#31A2AC",
    "#61C0BF",
    "#6B4226",
    "#D9BF77",
    "#ACD8AA",
    "#FFE156",
    "#6A0572",
    "#AB83A1",
  ];

  const randomIndex = Math.floor(Math.random() * palette.length);
  return palette[randomIndex];
}
const content = document.getElementById("content");

function loadMoreItems() {
  const scrollDistanceToBottom =
    document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

  if (scrollDistanceToBottom < 200) {
    console.log("LOADING DATA FROM AN API!!!");
    for (let i = 0; i < 10; i++) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.textContent = "Item " + (content.children.length + 1);
      item.style.backgroundColor = getRandomColor();
      content.appendChild(item);
    }
  }
}

let isThrottled = false
window.addEventListener("scroll", () => {
  if (!isThrottled) {
    loadMoreItems();
    isThrottled = true
    // 매번 이벤트가 일어날 때 !isThrottled라면 isThrottled는 false가 된다.
    setTimeout(() => {
      isThrottled = false
    }, 200)
  }
});
// ↑ 이 코드의 단점
// 스크롤이 맨 끝까지 되었다면, 더이상 scroll이벤트가 일어나지 않기 때문에
// 스크롤을 한번 위로 했다가 다시 아래로 내려야 동작한다는 것


// 이 코드는 이해만 할 수 있으면 됨
// callback 하나당 executeCallback이 생성되고 각자의 lexcial scope에 따라
// 변수의 값이 달라진다는 것을 알면 로직을 이해할 수 있다.
function throttle(callback, delay = 500) {
  let isThrottled = false
  let savedArgs = null

  const executeCallback = () => {
    if (savedArgs === null) { // no additonal function calls have been made during the delay
      isThrottled = false  // 그래서 safely하게 false로 만들 수 있다.
    } else {
      callback(...savedArgs)
      savedArgs = null
      setTimeout(executeCallback, delay)
    }
  }

  return (...arguments) => {
    if (isThrottled) {
      savedArgs = arguments
      return // if throttled, call no functions(do nothing)
    }

    callback(...arguments)
    isThrottled = true
    setTimeout(executeCallback, delay)
  }
}

const throttledLoadItems = throttle(loadMoreItems, 300);

window.addEventListener("scroll", () => {
  throttledLoadItems();
});

// Initial load
loadMoreItems();
