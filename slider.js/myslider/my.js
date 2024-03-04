
// ======================================================

let clutter = ''

arr = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1546426658-b0be33197bd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    des: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1546427943-18ebac83aacf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    des: "Lorem ipsum.Lorem ipsum dolor sit amet."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1546433274-2275b5370a85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    des: "sit amet.Lorem ipsum dolor sit amet."
  }
]

arr.forEach((yash) => {
  clutter += ` <div class="slide active radius">
                  <div class="slide">
                    <img src="${yash.image}" />
                  </div>
                  <p>${yash.des}</p>
                </div>`
})


document.getElementById("myslide").innerHTML = clutter








// ======================================================
let activeSlide = 0;
const slides = document.querySelectorAll('.slide');

let left = document.querySelector('#click-left');

left.onclick = function () {
  updatePrevSlide()
}


let right = document.querySelector('#click-right');

right.onclick = function () {
  updateNextSlide();
}

function updateNextSlide() {
  slides[activeSlide].classList.add("prev");
  let nextSlide = (activeSlide < slides.length - 1) ? activeSlide + 1 : 0;
  slides[nextSlide].classList.remove("prev");
  slides[nextSlide].classList.remove("next");
  slides[nextSlide].classList.add("active");

  if (nextSlide < slides.length - 1) {
    slides[nextSlide + 1].classList.add("next");
    slides[nextSlide + 1].classList.remove("prev");
  }
  else {
    slides[0].classList.remove("prev");
    slides[0].classList.add("next");
  }
  activeSlide = nextSlide;
}


function updatePrevSlide() {
  slides[activeSlide].classList.add("next");
  let prevSlide = (activeSlide > 0) ? activeSlide - 1 : slides.length - 1;
  slides[prevSlide].classList.remove("next");
  slides[prevSlide].classList.remove("prev");
  slides[prevSlide].classList.add("active");

  if (prevSlide > 0) {
    slides[prevSlide - 1].classList.add("prev");
    slides[prevSlide - 1].classList.remove("next");
  }
  else {
    slides[slides.length - 1].classList.remove("next");
    slides[slides.length - 1].classList.add("prev");
  }

  activeSlide = prevSlide;
}