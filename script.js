const cards = [...document.querySelectorAll(".card-item")];
cards.map((card) => {
  card.addEventListener("click", () => {
    cards.map((card) => card.classList.remove("card-active"));
    card.classList.toggle("card-active");
  });
});

//heder
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.pageYOffset > 250 && screen.width > 1024) {
    header.style.background = "rgb(15, 23, 42)";
  } else {
    header.removeAttribute("style");
  }
});

//burger-menu
function openNav() {
  document.getElementById("brg_btn1").classList.toggle("hidden");
  document.getElementById("brg_btn2").classList.toggle("hidden");
  if (document.getElementById("brg").classList.contains("hidden")) {
    document.getElementById("brg").classList.add("block");
    document.getElementById("brg").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("brg").classList.remove("-translate-y-[120%]");
      document.getElementById("brg").classList.remove("opacity-0");
    }, 400);
  } else {
    document.getElementById("brg").classList.add("-translate-y-[120%]");
    document.getElementById("brg").classList.add("opacity-0");
    setTimeout(() => {
      document.getElementById("brg").classList.remove("block");
      document.getElementById("brg").classList.add("hidden");
    }, 400);
  }
}

//slider
let defaultTransform = 380;
function goNext() {
  defaultTransform = defaultTransform - 380;
  var slider = document.getElementById("slider");
  if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.3)
    defaultTransform = 0;
  slider.style.transform = "translateX(" + defaultTransform + "px)";
}
next.addEventListener("click", goNext);
function goPrev() {
  var slider = document.getElementById("slider");
  if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
  else defaultTransform = defaultTransform + 380;
  slider.style.transform = "translateX(" + defaultTransform + "px)";
}
prev.addEventListener("click", goPrev);



//masage
const menuBody = document.querySelector(".faq");

const menuList = {
  "Какие условия работы": [
    "Организация должна осуществлять работу в удобное для клиентов время. Режим работы VR центра должен быть следующим: - Рабочие часы с 10:00 до 22:00 с понедельника по воскресенье без перерывов и выходных дней.",
  ],
  "Какое должно быть помещения": [
    "VR центр должен иметь следующие особенности: - Площадь помещения должна быть не менее 80-100 квадратных метров. - Наличие удобных и просторных зон отдыха для посетителей.",
    "- Наличие специальных зон регистрации, кассы и гардеробной.",
    "- Наличие выделенной зоны для игроков, оснащенной подходящим оборудованием.",
    "- Доступ к Wi-Fi и высокоскоростному мобильному интернету.",
  ],
  "Какое должно быть необходимое оборудование": [
    " Для проведения проекта необходим следующий список оборудования:",
    "- Компьютеры высокой производительности для работы виртуальной реальности.",
    "- VR-шлемы (HTC Vive, Oculus Rift, Samsung Gear, PlayStation VR и др).",
    "- Руль, педали и геймпады для симуляторов вождения.",
    "- Контроллеры движений для игр.",
  ],
  "Что вы представляете": [
    " VR центр представляет собой современное мультимедийное помещение,где посетители могут испытать на себе уникальные впечатления, используя виртуальную реальность. Целью проекта является создание инновационного развлекательного комплекса, который предложит посетителям отличную возможность погрузиться в мир виртуальной реальности и испытать настоящие эмоции.",
  ],
  "Вредны ли очки виртуальной реальности для здоровья?": [
    " Достоверных исследований, подтверждающих либо опровергающих причинение VR-устройствами вреда здоровью, нет. Ученые сходятся во мнении, что использование подобных гаджетов вряд ли приведет к значительным негативным последствиям – потенциальный вред сопоставим, например, с обычным телевизором или монитором компьютера.",
  ],
  "Как снизить негативное воздействие VR-устройств на здоровье?": [
    "Уменьшить вероятность появления побочных эффектов от использования очков виртуальной реальности просто –достаточно соблюдать меры предосторожности, заявленные производителями VR-гаджетов: контролируйте собственные ощущения; начинайте с малого при знакомстве с миром VR (от 30-60 мин.);выбирайте жанры фильмов и игр с учетом возрастных ограничений; освободите максимальное количество места вокруг – так точно ничего не сломаете и не причините себе травму;выбирайте качественный контент без распада на пиксели и размыва картинки;настройте гаджет под себя, чтобы он не сильно сдавливал голову и переносицу, а звук был комфортным;детям младше 12 лет лучше пользоваться очками и шлемами в сопровождении родителей.",
  ],
};
for (list in menuList) {
  const newItem = document.createElement("div");
  newItem.classList = "faq";
  menuBody.appendChild(newItem);
  const newItemList = document.createElement("ul");
  const newItemTitle = document.createElement("span");
  const newItemButton = document.createElement("button");

  newItemButton.innerHTML =
    '<span class=" rotate-0"><img class="w-8 h-8" src="./icons/chevron-down-svgrepo-com.png"></span>';
  newItemButton.addEventListener("click", () => {
    newItemList.classList.toggle("menuActive");
    if (newItemList.classList.contains("menuActive")) {
      newItemList.style.display = "block";
      newItemList.classList.add("bg-slate-800");
      newItemList.style.opacity = "1";
      newItemButton.innerHTML =
        '<span class=" rotate-180"><img class="w-8 h-8" src="./icons/chevron-down-svgrepo-com.png"></span>';
    } else {
      newItemList.style.opacity = "1";
      newItemList.classList.remove("bg-slate-800");
      newItemList.style.display = "none";
      newItemButton.innerHTML =
        '<span class=" rotate-0"><img class="w-8 h-8" src="./icons/chevron-down-svgrepo-com.png"></span>';
    }
  });

  newItemTitle.innerHTML = `${list}`;
  newItemTitle.appendChild(newItemButton);
  newItem.appendChild(newItemTitle);
  newItem.appendChild(newItemList);

  menuList[list].map((name) => {
    newItemList.innerHTML += `<li class = "p-4 ease-out">${name}</li>`;
  });
}
