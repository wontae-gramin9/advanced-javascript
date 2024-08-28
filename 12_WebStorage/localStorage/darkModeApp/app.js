const toggleButton = document.querySelector("#toggleMode");

const toogleTheme = () => {
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark-mode");
    toggleButton.textContent = "Enable dark mode";
  } else {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "Enable light mode";
  }
};

toggleButton.addEventListener("click", () => {
  toogleTheme(); // toggle되고, localStorage에 toggle값을 넣는것까지 완성
});

// 새로고침/처음 접근했을 때 기존의 theme을 localStorage에서 가져와야 함
const applySavedTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "Enable light mode";
  } else {
    document.body.classList.remove("dark-mode");
    toggleButton.textContent = "Enable dark mode";
  }
};

applySavedTheme();

window.addEventListener("storage", (e) => {
  if (e.key === "theme") {
    applySavedTheme();
  }
});
