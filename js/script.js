
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

/* CREATE DOTS */
images.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.dataset.index = index;
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

/* UPDATE UI */
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

/* DOTS */
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    updateGallery(Number(dot.dataset.index));
  });
});

/* INIT */
updateGallery(0);


// Product Left image slider script Start End


// Product right subscription toggle script

const subscriptionRadios = document.querySelectorAll(
  'input[name="subscription"]'
);

const singleCard = document.getElementById("singleCard");
const doubleCard = document.getElementById("doubleCard");

subscriptionRadios.forEach(radio => {
  radio.addEventListener("change", () => {

    // remove active state from all radio cards
    document.querySelectorAll(".radio-card").forEach(card => {
      card.classList.remove("active");
    });

    // add active to selected
    radio.closest(".radio-card").classList.add("active");

    // TOGGLE SUBSCRIPTION SECTIONS
    if (radio.value === "single") {
      singleCard.classList.remove("hidden");
      doubleCard.classList.add("hidden");
    } else {
      singleCard.classList.add("hidden");
      doubleCard.classList.remove("hidden");
    }
  });
});
// Product section script End





// collection section script
/* FAQ ACCORDION */
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach(i => {
      i.classList.remove("active");
      i.querySelector(".icon").textContent = "+";
    });

    if (!isOpen) {
      item.classList.add("active");
      btn.querySelector(".icon").textContent = "−";
    }
  });
});


/* COUNT UP */
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


