const openMenuListItems = document.querySelector(".header-menu");
const blockIconsHeader = document.querySelector(".header-block-icons");
const header = document.querySelector(".header");

function updateMenuState() {
  const isMobule = window.innerWidth <= 509;

  // Проверяем, что меню открыто
  if (openMenuListItems.open) {
    if (isMobule) {
      // На мобилках  убираем иконку
      blockIconsHeader.style.display = "none";
      header.style.borderBottom = "none";
    } else {
      // На десктопе убираем
      blockIconsHeader.style.display = "";
      header.style.borderBottom = "";
    }
  } else {
    // Если меню закрыто - всегда убираем
    blockIconsHeader.style.display = "";
    header.style.borderBottom = "";
  }
}
// Событие при открытии/закрытии меню
openMenuListItems.addEventListener("toggle", updateMenuState);

// Обновляем при изменении размера окна
window.addEventListener("resize", function () {
  updateMenuState();
});
