// 16ms(60FPS)나 25ms(40FPS)같은 specific interval을 정하는게 아니라
// 자동적으로 next repaint이전에 메소드를 실행함
// → More smooth screenshot

const boxInterval = document.getElementById('boxInterval')

let intervalAngle = 0

function animateWithInterval() {
  boxInterval.style.transform = "rotate(" + intervalAngle + "deg)"
  intervalAngle += 2
}

// start the animation
setInterval(animateWithInterval, 16) // approx 60FPS
// ↑ setInterval로 돌리기


const boxAnimationFrame = document.getElementById('boxAnimationFrame')

let animationFrameAngle = 0
let previousTime = 0
function animateWithAnimationFrame(currentTime) {
  // timestamp in ms, default args
  console.log('1FPS', currentTime - previousTime);
  previousTime = currentTime
  boxAnimationFrame.style.transform = "rotate(" + animationFrameAngle + "deg)"
  animationFrameAngle += 2
  // base case가 없는 재귀(무한)
  requestAnimationFrame(animateWithAnimationFrame)
}

// 한번만 실행하기 때문에 재귀적으로 실행해야 한다
// device의 주사율에 맞춰 다음 렌더에 실행한다
requestAnimationFrame(animateWithAnimationFrame)