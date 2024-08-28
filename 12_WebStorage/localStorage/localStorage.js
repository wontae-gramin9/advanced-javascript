// browser에서만 사용가능(nodeJs에서 불가)5MB가 최대
// 해당 origin에 저장합니다 (protocol+host+port)
// persist합니다.
localStorage.setItem('myKey', 'myValue')
// getItem('myKey')
// removeItem('myKey')
// clear()

// 모든 값은 string type으로 변환되어 저장된다
// 브라우저에 값을 보내는 것이니, (de)serializaiton이 된다
// JSON.stringify(serializaiton) / JSON.parse(deserializaiton)
const nums = [1, 2, 3, 4]
localStorage.setItem('nums', nums) // 이러면 '1,2,3,4'가 됨
localStorage.setItem('nums', JSON.stringify(nums)) // '[1, 2, 3, 4]'가 되고
JSON.parse(localStorage.getItem('nums')) // 로 deserializaiton를 받아와서 array로 돌려받는다

// 무엇을 저장할 수 있고, 저장할 수 없나?
// 클라이언트 script에서 접근할수 있으므로 민감한 정보는 담지 않는다.

// userPreferences(dark/light mode)
// state(userHistory, productViewHistory, interactions(form 기억하기)
// shopping card data, caching data(reduce load time), analytic dada, add trackings


