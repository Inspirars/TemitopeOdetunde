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
    },
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

const nav = document.getElementById('nav');

var sticky = nav.offsetTop

const getScroll = ()=>{
  console.log(sticky)
  console.log(window.scrollY)
  if(window.scrollY > sticky){
    nav.classList.add('sticky')
    return
  }else{
    nav.classList.remove('sticky')
  }
  // nav.style.cssText = "background-color: #fff;"
    nav.classList.remove('sticky')

}

window.addEventListener('scroll',getScroll)

anime({
  targets : '.Temi path',
  strokeDashoffset : [anime.setDashoffset,0],
  easing: 'easeInOutSine',
  duration: 1000,
  delay: function(el, i) { return i * 95 },
  direction: 'alternate',
  loop: true
})

const loader = document.getElementById("loader")
const myDiv = document.getElementById("myDiv")

const dee = ()=>{
  setTimeout(function showPage() {
    if(loader && myDiv){
      loader.style.display = "none";
      myDiv.style.display = "block";
    }
    
  },3500)
}




