// 같은 세션에서는 새로고침해도 값을 저장할 수 있다.
const searchField = document.querySelector("#searchField");
searchField.addEventListener("input", (e) => {
  sessionStorage.setItem("searchField", e.target.value);
});

// 새로고침했을 때 이전 세션의 input value를 가져오는 것
const populateSearch = () => {
  const previousSearch = sessionStorage.getItem("searchField");
  searchField.value = previousSearch;
};

populateSearch();

// form을 기입할때 새로고침해서 없어지면 짜증남.
const form = document.querySelector("#checkoutForm");
// 이벤트 버블링으로 부모에서 감지하기
form.addEventListener("input", (e) => {
  const { name, value } = e.target;

  const formData = JSON.parse(sessionStorage.getItem("formData")) ?? {};
  formData[name] = value;
  sessionStorage.setItem("formData", JSON.stringify(formData));
});

const populateForm = () => {
  const formData = JSON.parse(sessionStorage.getItem("formData")) ?? {};
  console.log(formData);
  for (let field in formData) {
    // obj의 key에 접근
    form.elements[field].value = formData[field];
  }
};
populateForm();
