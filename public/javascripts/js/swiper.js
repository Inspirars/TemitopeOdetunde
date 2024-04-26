const swiper = new Swiper( '.swiper',{
  speed: 4000,
  autoplay: {
      delay: 1000,
      pauseOnMouseEnter : true
    },
  zoom : {
    maxRatio : 10
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

const swiper2 = new Swiper( '.swiper2',{
  speed: 4000,
  autoplay: {
      delay: 1500,
      pauseOnMouseEnter : true
    },
    loop: true,
    slidesPerView : 1.5,
    spaceBetween : 20,
    breakpoints : {
      700 : {
        slidesPerView : 3,
        spaceBetween : 14,
      }
    }
}
)

const blogswiper = new Swiper( '.blogswiper',{
  speed: 4000,
  autoplay: {
      delay: 2500,
      pauseOnMouseEnter : true
    },
    loop: true,
    slidesPerView : 1.2,
    spaceBetween : 20,
    breakpoints : {
      700 : {
        slidesPerView : 2.1,
        spaceBetween : 14,
      },
      1024 :{
        slidesPerView : 3,
      }
    }
}
)

const merchswiper = new Swiper( '.merchswiper',{
  speed: 4000,
  autoplay: {
      delay: 2000,
      pauseOnMouseEnter : true
    },
    loop: true,
    slidesPerView : 1.2,
    spaceBetween : 20,
    breakpoints : {
      700 : {
        slidesPerView : 2.1,
        spaceBetween : 14,
      },
      1024 :{
        slidesPerView : 3,
      }
    }
}
)

