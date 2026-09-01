const openMenuListItems = document.querySelector(".header-menu");
const blockIconsHeader = document.querySelector(".header-block-icons");
const headerNav = document.querySelector(".header-menu-list-item");
const header = document.querySelector(".header");
const layoutHero = document.querySelector(".hero");

function updateMenuState() {
  const isMobule = window.innerWidth <= 509;

  // Проверяем, что меню открыто
  if (openMenuListItems.open) {
    if (isMobule) {
      // На мобилках  убираем иконку
      blockIconsHeader.style.display = "none";
      header.style.borderBottom = "none";
      layoutHero.style.paddingTop = "280px";
    } else {
      // На десктопе убираем
      blockIconsHeader.style.display = "";
      header.style.borderBottom = "";
      layoutHero.style.paddingTop = "";
    }
  } else {
    // Если меню закрыто - всегда убираем
    blockIconsHeader.style.display = "";
    header.style.borderBottom = "";
    layoutHero.style.paddingTop = "";
  }
}
// Событие при открытии/закрытии меню
openMenuListItems.addEventListener("toggle", updateMenuState);

// Обновляем при изменении размера окна
window.addEventListener("resize", function () {
  updateMenuState();
});

//открыть и закрыть поиск
const headerInputSearch = document.querySelector(".search-block");
const IconSearch = document.querySelector(".icon-search");
IconSearch.addEventListener("click", function () {
  if (headerInputSearch.style.display === "block") {
    headerInputSearch.style.display = "none";
  } else {
    headerInputSearch.style.display = "block";
  }
});

//удалить введеные поиск пользователей
const input = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", function () {
  input.value = "";
  input.focus();
});
