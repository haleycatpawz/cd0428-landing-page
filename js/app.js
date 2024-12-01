/// creating the array of portfolio item's individual text & image data
// to be added in the project section
const portfolioItems = [
  {
    name: "Leopard Print Is Purrrfect",
    image: "/assets/fashionCatDefaultImage1.png",
  },
  {
    name: "What Humans Don't Know",
    image: "/assets/fashionCatDefaultImage2.png",
  },
  {
    name: "Whiskers and Wardrobes",
    image: "/assets/fashionCatDefaultImage1.png",
  },
  {
    name: "From Alley Cat To Catwalk",
    image: "/assets/fashionCatDefaultImage2.png",
  },
  {
    name: "Tails and Trends",
    image: "/assets/fashionCatDefaultImage1.png",
  },
  {
    name: "How To Purrr-suade Your Human",
    image: "/assets/fashionCatDefaultImage2.png",
  },
  {
    name: "Paw Print: Why You Must Wear It",
    image: "/assets/fashionCatDefaultImage1.png",
  },
  {
    name: "How To Look Like a Cool Cat",
    image: "/assets/fashionCatDefaultImage2.png",
  },
];

// get nav list and all sections
const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
// get the projectcontainer from project section to put portfolio items in
const projectContainer = document.getElementById("projectContainer");
// get the back to top button
const backToTopButton = document.querySelector(".backToTopButton");

// build the nav/adding the top nav buttons to the page
// creating the nav items
for (let i = 0; i < sections.length; i++) {
  const section = sections[i];
  const listItem = document.createElement("li");
  listItem.innerHTML = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;

  // add event listener to section/nav list buttons
  listItem.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
  // appending nav list buttons/items to the navigation bar
  navList.appendChild(listItem);
}

// logic to add active css classes to nav items if the user is in that section
function makeActive() {
  // logic to add active css classes to sections if user is in that section
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    // find value that works best
    const value = 150; // >= -value
    if (box.top <= value && box.bottom >= value) {
      // apply active state on current section and corresponing nav link
      section.classList.add("your-active-class");
      document
        .querySelector(`a[href="#${section.id}"]`)
        .classList.add("active");
    } else {
      // remove active state from other section/nav link
      section.classList.remove("your-active-class");
      document
        .querySelector(`a[href="#${section.id}"]`)
        .classList.remove("active");
    }
  }
  // logic for deciding if to show the back to top button or make it invisible
  const rect = sections[0].getBoundingClientRect();
  if (rect.top >= -5) {
    // if user is below the top section, button will be invisible,
    backToTopButton.classList.add("invisible");
  }
  // if user is above the top section, button will be visible
  else {
    backToTopButton.classList.remove("invisible");
  }

  
}

document.addEventListener("scroll", makeActive);
//backToTopButton.classList.add("invisible");
//  backToTopButton.classList.add("invisible");
backToTopButton.addEventListener("click", function (e) {
  e.preventDefault();
  const targetId = e.target.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);
  targetSection.scrollIntoView({ behavior: "smooth" });
});

// creating the the portfolio items in the project section
for (let i = 0; i < 8; i++) {
  const portfolioItem = document.createElement("div");
  portfolioItem.innerHTML = `<div class="boxContainer">
                      <img class="postImages" src="${portfolioItems[i].image}"></img>
                      <div id="bottomBox"><h3>${portfolioItems[i].name}</h3>
                      </div></div>`;
  // add portfolio items to the project section/container
  projectContainer.appendChild(portfolioItem);
}
