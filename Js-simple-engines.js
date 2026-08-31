const openMenuListItems = document.querySelector(".header-menu");
const blockIconsHeader = document.querySelector(".header-block-icons");
const headerNav = document.querySelector(".header-menu-list-item");

const headerInputSearch = document.querySelector(".search-block");
const IconSearch = document.querySelector(".icon-search")

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
header.style.background = "linear-gradient(to bottom, #fff 40%, #ebebeb 100%)";
      layoutHero.style.paddingTop = "280px";
    } else {
      // На десктопе убираем
      blockIconsHeader.style.display = "";
      header.style.borderBottom = "";
      header.style.background = "";
      layoutHero.style.paddingTop = "";
    }
  } else {
    // Если меню закрыто - всегда убираем
    blockIconsHeader.style.display = "";
    header.style.borderBottom = "";
    header.style.background = "";
    layoutHero.style.paddingTop = "";
  }
}
// Событие при открытии/закрытии меню
openMenuListItems.addEventListener("toggle", updateMenuState);

// Обновляем при изменении размера окна
window.addEventListener("resize", function () {
  updateMenuState();
});

IconSearch.addEventListener('click', function(){

  if (headerInputSearch.style.display === "block") {
    headerInputSearch.style.display = 'none';
  }
  else {
    headerInputSearch.style.display = 'block';
  }
})


