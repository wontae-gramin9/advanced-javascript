async function postData() {
  const payload = {
    title: 'I am in love with someone',
    userId: 5,
  }

  const headers = new Headers({ "content-type": "application/json" })
  try {
    const res = await fetch('https://dummyjson.com/posts/add',
      {
        method: "POST", // 기본값 GET
        headers,
        body: JSON.stringify(payload) // serialization
      }
    )
    const data = await res.json()
    console.log('data: ', data);
  } catch (e) {
    console.log('Error posting data: ', e);
  }
}
// console.log('postData: ', postData());

async function updateData() {
  const payload = {
    title: 'I think I should shift to the moon',
    // PUT할때는 전체수정이니까 userId도 있어야 함
  }

  const headers = new Headers({ "content-type": "application/json" })
  try {
    const res = await fetch('https://dummyjson.com/posts/252',
      {
        method: "PATCH", // PATCH는 일부분만 수정가능, PUT은 전체수정
        headers,
        body: JSON.stringify(payload) // serialization
      }
    )
    const data = await res.json()
    console.log('data: ', data);
  } catch (e) {
    console.log('Error posting data: ', e);
  }
}
// console.log('updateData: ', updateData());

async function deleteData() {

  const headers = new Headers({ "content-type": "application/json" })
  try {
    const res = await fetch('https://dummyjson.com/posts/252',
      {
        method: "DELETE",
        headers, // authentication이 필요할 수 있음
      }
    )
    const data = await res.json()
    console.log('data: ', data);
  } catch (e) {
    console.log('Error posting data: ', e);
  }
}
// console.log('deleteData: ', deleteData());

// 각각 chaining이 안되서 순서가 보장이 안됨
// 실제로 252번에 저장이 안되나 봅니다...
postData().then(() => updateData()).then(() => deleteData())