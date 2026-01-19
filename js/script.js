
// responsive navbar script
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const hamburgerIcon = document.querySelector(".hamburger i");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
    if (!navMenu.classList.contains("active")) {
      hamburgerIcon.classList.remove("fa-times");
      hamburgerIcon.classList.add("fa-bars");
    }
    else {
      hamburgerIcon.classList.remove("fa-bars");
      hamburgerIcon.classList.add("fa-times");
    }
});



// Product section script Start

// Product Left image slider script Start
const images = [
  "assets/perfume/perfume.png",
  "assets/perfume/perfume_child1.png",
  "assets/perfume/perfume_child2.png",
  "assets/perfume/perfume_child3.png",
  "assets/perfume/perfume_child4.png",
  "assets/perfume/perfume_child1.png",
  "assets/perfume/perfume_child2.png",
  "assets/perfume/perfume_child3.png",
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const thumbnails = document.querySelectorAll("#thumbnails img");
const dotsContainer = document.getElementById("dots");

/* Dynamic  script dot's */
images.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.dataset.index = index;
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

/* UI Script for Product gallery */
function updateGallery(index) {
  mainImage.classList.add("fade-out");

  setTimeout(() => {
    currentIndex = index;
    mainImage.src = images[currentIndex];

    thumbnails.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    thumbnails[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");

    mainImage.classList.remove("fade-out");
    mainImage.classList.add("fade-in");
  }, 150);
}


/* ARROWS */
nextBtn.addEventListener("click", () => {
  const next = (currentIndex + 1) % images.length;
  updateGallery(next);
});

prevBtn.addEventListener("click", () => {
  const prev = (currentIndex - 1 + images.length) % images.length;
  updateGallery(prev);
});

/* THUMBNAILS */
thumbnails.forEach(thumb => {
  thumb.addEventListener("click", () => {
    updateGallery(Number(thumb.dataset.index));
  });
});

/* dots */
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    updateGallery(Number(dot.dataset.index));
  });
});

/* initial Index */
updateGallery(0);


// Product Left image slider script Start End


// Product right subscription toggle script

const subscriptionRadios = document.querySelectorAll(
  'input[name="subscription"]'
);

const singleCard = document.getElementById("singleCard");
const doubleCard = document.getElementById("doubleCard");
const border = document.querySelector(".empty-border");
const bordertwo = document.querySelector(".empty-border-two");

subscriptionRadios.forEach(radio => {
  radio.addEventListener("change", () => {


    document.querySelectorAll(".radio-card").forEach(card => {
      card.classList.remove("active");
    });

    radio.closest(".radio-card").classList.add("active");

    // toggle single & double subscription cards
    if (radio.value === "single") {
      singleCard.classList.remove("hidden");
      doubleCard.classList.add("hidden");
    } else {
      singleCard.classList.add("hidden");
      doubleCard.classList.remove("hidden");
    }


    // Border remove script 
    if(radio.value==="single"){
      border.classList.remove('hidden')
    }else{
        border.classList.add('hidden')
    }

    if(radio.value==="double"){
        bordertwo.classList.remove("hidden");
    }else{
        bordertwo.classList.add("hidden");
    }


  });
});
// Product section script End


// collection section script

/* Faq script */
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const icon = btn.querySelector("i");
    const isOpen = item.classList.contains("active");

    // Close all faq items
    document.querySelectorAll(".faq-item").forEach(i => {
      i.classList.remove("active");
      const ic = i.querySelector("i");
      ic.classList.remove("fa-minus");
      ic.classList.add("fa-plus");
    });

    // Open clicked item 
    if (!isOpen) {
      item.classList.add("active");
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    }
  });
});





/* Counter script  start*/
const counters = document.querySelectorAll(".count");
let started = false;

window.addEventListener("scroll", () => {
  const section = document.querySelector(".stats-section");
  const position = section.getBoundingClientRect().top;

  if (position < window.innerHeight && !started) {
    started = true;

    counters.forEach(counter => {
      let target = +counter.dataset.target;
      let count = 0;

      const interval = setInterval(() => {
        count++;
        counter.textContent = count + "%";
        if (count === target) clearInterval(interval);
      }, 50);
    });
  }
});

/* counter script end */

