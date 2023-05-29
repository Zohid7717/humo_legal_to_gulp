let heroSliderWrap = document.querySelector('.hero__slider_wrap')
let headerMenuItems = document.querySelector('.header__menu_items')

class Slider {
  constructor(slider, options = {}) {
    this.slider = slider,
      this.options = Object.assign(
        {
          autoPlay: false,
          interval: 5000,
          loop: false
        },
        options
      );
    this.container = this.slider.querySelector('.slider__container');
    this.slide = this.slider.querySelectorAll('.slider__slide');
    this.btnPrev = this.slider.querySelector('.slider__prev');
    this.btnNext = this.slider.querySelector('.slider__next');
    this.currentSlide = 0;
    this.intervalId = null;
    this.init();
  }
  init() {
    this.container.style.width = `${this.slide.length * 100}%`;
    this.slide.forEach((element) => {
      element.style.width = `${100 / this.slide.length}%`;
    });
    this.btnPrev.addEventListener('click', () => {
      this.prevSlide();
    });
    this.btnNext.addEventListener('click', () => {
      this.nextSlide();
    });
    if (this.options.autoPlay) {
      this.startAutoPlay()
    }
    this.slider.addEventListener('mouseover', () => {
      this.stopAutoPlay()
    })
    this.slider.addEventListener('mouseout', () => {
      this.startAutoPlay()
    })
  }
  nextSlide() {
    if (this.currentSlide === this.slide.length-1) {
      this.currentSlide=0
    } else {
      this.currentSlide++;
    };
    this.container.style.transform = `translateX(-${this.currentSlide * (100 / this.slide.length)}%)`
  };
  prevSlide() {
    if (this.currentSlide === 0 ) {
      this.currentSlide = this.slide.length - 1;
    } else {
      this.currentSlide--;
    };
    this.container.style.transform = `translateX(-${this.currentSlide * (100 / this.slide.length)}%)`;
  }
  startAutoPlay() {
    if (this.options.loop) {
      this.intervalId=setInterval(() => {
        
        this.prevSlide()
      }, this.options.interval)
    }
  }
  stopAutoPlay() {
    clearInterval(this.intervalId);
  }
}
const heroSlider = new Slider(heroSliderWrap, {
  autoPlay: true,
  interval: 5000,
  loop: false
})

// headerMenuItems.addEventListener('click', (e) => {
//   let activeMenu=e.target.parentNode
//   activeMenu.classList.add('active_menu')
// })
