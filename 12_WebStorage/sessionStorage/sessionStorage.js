function warnUserOnce() {
  if (!sessionStorage.getItem("shownWarning")) {
    // 서비스가 닫는다는건 한번만 보여주면 되지, 사용자가 같은 웹페이지를 session이 끝나기 전에
    // 반복적으로 방문할때마다 경고를 보여주면 불편하다.
    console.log("We are shutting down this service soon.");
  }
  sessionStorage.setItem("shownWarning", "true");
}

warnUserOnce();

// Performance enhancement
// 캐싱, 매 세션마다 다시 받아오지 않고 sessionStorage에 받아놓으면 된다
// 단 최대 5MB이니까 고려하고 사용해야 한다.
