//VARIABLE SETUP TARGETS ELEMENTS
var storageNameEl = document.getElementById("input-name");
var storedName = localStorage.getItem("Name");
var text = document.getElementById("text");
var button = document.getElementById("input-submit");

//PLACES INPUT IN LOCAL STORAGE
var saveName = () => {
  localStorage.setItem("Name", text.textContent);
};

//TYPED INPUT SHOWS UP ON SCREEN
storageNameEl.addEventListener("input", (letter) => {
  text.textContent = letter.target.value;
});

//CLICK EVENT STORES INPUT IN LOCAL STORAGE
button.addEventListener("click", saveName);

if (storageNameEl) {
  text.textContent = storedName;
}
