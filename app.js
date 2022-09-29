const bar = document.querySelector("#bar");
const opaBack = document.querySelector(".opa-back");
const mobNav = document.querySelector(".mob-nav");
const mobNavItems = document.querySelectorAll(".mob-nav a");

bar.addEventListener("click", (e) => {
  mobNav.style.display = "flex";
  opaBack.style.display = "flex";
  document.body.style.overflowY = "hidden";
});

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-bar")) {
    mobNav.style.display = "none";
    opaBack.style.display = "none";
    document.body.style.overflowY = "auto";
  }
});

mobNavItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    mobNav.style.display = "none";
    opaBack.style.display = "none";
    document.body.style.overflowY = "auto";
  });
});

const photos = document.querySelectorAll(".photos img");
let i = 0;
photos.forEach((ph, index) => {
  ph.style.left = `${i}rem`;
  i += 2;
});

//recepis
const recipes = [
  {
    img: "/img/meals/meal-1.jpg",
    type: "vegetarian",
    header: "Japanese Gyzoas",
    info: {
      one: {
        first: "650",
        second: "calories",
      },
      two: {
        first: "NutriScore",
        second: "74",
      },
      three: {
        first: "4.9",
        second: "rating(537)",
      },
    },
  },
  {
    img: "/img/meals/meal-1.jpg",
    type: "vegetarian",
    header: "Japanese Gyzoas",
    info: {
      one: {
        first: "650",
        second: "calories",
      },
      two: {
        first: "NutriScore",
        second: "74",
      },
      three: {
        first: "4.9",
        second: "rating(537)",
      },
    },
  },
];

const recipesSection = document.querySelector(".recipes");

// recipes.map((id) => {
//   recipesSection.innerHTML += `
//      <div class="recipe-card fl fl-col justify-left">
//                     <div class="recipe-img-div w-100">
//                         <img src="${id.img}" alt="" class="w-100">
//                     </div>
//                     <div class="recipe-content w-100">
//                         <div class="recipe-type">
//                             <p style="background-color:var(--green-color);" class="upp-txt">${id.type}</p>
//                             <h3>${id.header}</h3>
//                         </div>
//                         <div>
//                             <div style="margin-top:1rem;gap:1rem;" class="fl fl-row justify-left w-100">
//                                 <i class="fa-solid fa-fire"></i>
//                                 <p style="margin:0;">

//                                     <span>${id.info.one.first}</span>
//                                     ${id.info.one.second}
//                                 </p>
//                             </div>
//                             <div style="margin-top:1rem;gap:1rem;" class="fl fl-row justify-left w-100">
//                                 <i class="fa-solid fa-utensils"></i>
//                                 <p style="margin:0;">

//                                     ${id.info.two.first} <span>${id.info.two.second}</span>
//                                 </p>
//                             </div>

//                             <div style="margin-top:1rem;gap:1rem;" class="fl fl-row justify-left w-100"><i
//                                     class="fa-solid fa-star"></i>
//                                 <p style="margin:0;">

//                                     <span>${id.info.three.first}</span>
//                                     ${id.info.three.second}
//                                 </p>
//                             </div>

//                         </div>
//                     </div>

//                 </div>
//     `;
// });

const sections = document.querySelectorAll(".nav-section");
const navItems = document.querySelectorAll("ul a:not(#try)");
const mobileNavItems = document.querySelectorAll(".mob-nav a:not(#try)");

window.onscroll = function () {
  for (let i = 0; i < sections.length; i++) {
    navItems.forEach((li) => {
      li.classList.remove("active-list");
    });
    mobileNavItems.forEach((li) => {
      li.classList.remove("active-list");
    });
    if (i === sections.length - 1) {
      break;
    }
    if (
      window.scrollY > sections[i].offsetTop - 200 &&
      window.scrollY < sections[i + 1].offsetTop - 200
    ) {
      navItems[i].classList.add("active-list");
      mobileNavItems[i].classList.add("active-list");
      break;
    }
  }
};

document.querySelector("#copyright").textContent = new Date().getFullYear();
