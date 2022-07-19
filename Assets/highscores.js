var storageNameEl = document.getElementById("input-name");
var storedName = localStorage.getItem("Name");
var text = document.getElementById("text");
var button = document.getElementById("input-submit");

var saveName = () => {
  localStorage.setItem("Name", text.textContent);
};

storageNameEl.addEventListener("input", (letter) => {
  text.textContent = letter.target.value;
});

button.addEventListener("click", saveName);

if (storageNameEl) {
  text.textContent = storedName;
}
