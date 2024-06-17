import { useEffect } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  useEffect(()=>{
    const mobMenu = document.querySelector<HTMLElement>('#mobby')!
  const ham = document.querySelector<HTMLElement>('#ham')
  const mobUl = document.querySelector<HTMLElement>(".mobUl")
  const closeIcon = document.querySelector(".closeIcon")

  ham?.addEventListener('click',()=>{
    mobMenu.classList.add('open')
    mobMenu.style.animation = "mymove 1s 1"
	if(mobMenu.classList.contains('open')){
		document.body.classList.add('bodyStiff')
	}else{
		document.body.classList.remove('bodyStiff')
	}
  })

  mobMenu?.addEventListener('click', (e)=>{
    e.stopPropagation()
    mobMenu.classList.toggle('open')
    document.body.classList.remove('bodyStiff')
    
  })

  mobUl?.addEventListener('click', (e)=>{
    e.stopPropagation()
  })

  closeIcon?.addEventListener('click', ()=>{
    mobMenu.style.animation = "mymoveopposite 1s 1"
    setTimeout(()=>{
      mobMenu.classList.toggle('open')
      document.body.classList.remove('bodyStiff')
    },1000)
  })
  })
  return (
    <section className="flex justify-between items-center py-3 px-4 md:px-10 md:pt-8 lg:px-20 bg-grey-100 fixed z-40 w-full " id="nav">
        <nav className="lg:flex lg:justify-between lg:items-center lg:font-inter lg:w-full"  >
          <div className=" lg:flex items-center gap-[72px]" >
              <Link to="/"><img src="/images/logo.svg" alt="Temitope svg"/></Link>
              <div id="mobby" className=" hidden lg:block ">
                <ul className="hidden lg:flex list-none lg:gap-11 text-base text-black-200 font-normal mobUl" >
                  <div className="flex justify-end">
                    <img src="/images/close.png" alt="" className="closeIcon lg:hidden"/>
                  </div>
                  <Link to="/" className="flex lg:hidden">
                    <li>Home</li>
                  </Link>
                  <Link to="/about">
                    <li>About</li>
                  </Link>
                  <Link to="/books">
                    <li>Book</li>
                  </Link>
                  <Link to="https://www.etsy.com/uk/shop/RIOSINFLUENCIA?ref=hpsh" target="_blank">
                    <li>Shop</li>
                  </Link>
                  <Link to="/aim">
                    <li>AIM</li>
                  </Link>
                  <Link to="/blog">
                    <li>Blog</li>
                  </Link>
                  <Link to="/gallery">
                    <li>Gallery</li>
                  </Link>
                  <Link to="https://chat.whatsapp.com/JPA5BEZCojOFQNYHrK8OVy" className=" lg:hidden text-lg px-4 py-3 md:px-5 md:py-4 rounded font-semibold bg-purple text-white border border-purple hover:bg-grey-100 hover:text-purple transition-all duration-700 text-center">
                    Join Community
                  </Link>
                </ul>
              </div>
          </div>
          <div className="hidden lg:flex" >
              <Link to="https://chat.whatsapp.com/JPA5BEZCojOFQNYHrK8OVy" target="_blank" className="text-lg md:px-5 md:py-4  rounded font-semibold bg-purple text-white border border-purple hover:bg-grey-100 hover:text-purple transition-all duration-700 text-center">
                  Join Community
              </Link>
          </div>
        </nav>
        <img src="/images/hamburger.png" alt="" className="lg:hidden" id="ham"/>
      </section>
  )
}

export default Navbar
