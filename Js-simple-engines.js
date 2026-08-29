const openMenuListItems = document.querySelector(".header-menu");
const blockIconsHeader = document.querySelector(".header-block-icons");
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
