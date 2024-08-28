async function showMeHeaders() {
  const headers = new Headers({ "content-type": "application/json" });
  try {
    // 2번째 argument로 header를 넣는데,
    // 생 객체({})로 넣어도 되지만 Headers객체를 이용하면 오타도 잡을 수 있겠다.
    const res = await fetch("http://localhost:3001/showmeheaders", { headers });
    // { headers: headers } 인 것, 다시 말하면 headers말고 method, body같은 key도 올 수 있다(POST)
    const data = await res.json();
    console.log("DATA ", data);
  } catch (e) {
    console.log(e);
  }
}

showMeHeaders();

