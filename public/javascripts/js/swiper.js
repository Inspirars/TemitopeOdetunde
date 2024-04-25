const swiper = new Swiper( '.swiper',{
  speed: 4000,
  autoplay: {
      delay: 1000,
      pauseOnMouseEnter : true
    },
    loop: true,
    slidesPerView : 1,
    spaceBetween : 20,
    breakpoints : {
      700 : {
        slidesPerView : 1.5,
        spaceBetween : 24,
        
      },
      1024 : {
        slidesPerView : 2.5,
        spaceBetween : 24,
        pauseOnMouseEnter : true
      }
    }
}
)