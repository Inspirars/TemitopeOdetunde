import aimlogo from "/images/aimlogo.svg"
import { visions,values } from "../constants"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import Enhance from "../components/Enhance"

const Taim = () => {
  return (
    <div>
        <Navbar/>
        <section className="px-5 md:px-14 lg:px-20 pt-28 md:pt-40 lg:pt-52 pb-10 md:pb-14 lg:pb-[105px] flex">
<main className=" flex flex-col lg:pl-[clamp(100px,12.08vw,174px)] gap-10">
    <div className="flex flex-col items-center md:flex-row md:items-center">
        <h1 className="text-[#231F20] text-3xl md:text-5xl lg:text-[clamp(45px,5vw,72px)] font-bold lg:leading-[80px] lg:w-[55vw] text-center md:text-left ">
            Ambassador In The Marketplace (AIM)
        </h1>
        <img src={aimlogo} alt=""/>
    </div>
    <div className="space-x-4">
        <Link to="https://chat.whatsapp.com/JPA5BEZCojOFQNYHrK8OVy" target="_blank" className="text-xs md:text-lg px-3 py-2 md:px-5 md:py-4 rounded-lg font-semibold bg-purple text-white border border-purple hover:bg-grey-100 hover:text-purple transition-all duration-700">
            Join Community
        </Link>
        <Link to="https://www.linkedin.com/newsletters/ambassador-in-the-marketplace-7173037519788302336/" target="_blank" className="text-xs md:text-lg px-3 py-2 md:px-5 md:py-4 rounded-lg font-semibold  text-purple border border-purple hover:bg-grey-100 hover:text-purple transition-all duration-700">
            AIM Newsletter Highlights
        </Link>
    </div>
</main>
</section>
<section className="flex items-center  px-5 md:px-14 lg:px-20 pb-10 lg:pb-14">
  <iframe className="w-full h-[480px] lg:h-[520px]" src="https://www.youtube.com/embed/4EXMxSLHNOc" title="Interview with Dr. Olaniyi Opaleye Special Constable, Kent Police" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</section>
<section className="bg-[#000] px-5 py-14 md:py-24 md:px-24 lg:py-[clamp(100px,13.33vw,191px)] lg:px-[clamp(150px,14.44vw,208px)]">
  <h1 className="pb-14 lg:pb-24 text-[#E0E0E0] font-bold text-2xl md:text-4xl lg:text-[clamp(45px,3.88vw,56px)] lg:leading-[62px] lg:w-[58vw]">
    The vision of The Ambassador in the Marketplace (AIM) is to:
  </h1>
  <div className="grid md:grid-cols-2 text-white gap-y-7 md:gap-x-14 md:gap-y-14 lg:gap-y-[clamp(80px,7.5vw,108px)] lg:gap-x-[clamp(150px,17vw,261px)] justify-center">
    {visions.map(vision =>( 
      <p className="font-medium text-balance text-base lg:text-[clamp(18px,1.6vw,24px)]">{vision} </p>)
    )}
  </div>
</section>

<section className="bg-purple text-white p-5 py-10 md:p-14 lg:py-[clamp(100px,10.97vw,158px)] lg:px-[clamp(95px,8.81vw,127px)] flex flex-col lg:flex-row lg:items-start gap-7 md:gap-11 lg:gap-36">
<h1 className="text-3xl md:text-4xl lg:text-[clamp(50px,5.694vw,83px)] font-extrabold lg:leading-none text-center lg:text-left">
  AIM MISSION
</h1>
<p className=" text-lg md:text-xl lg:text-[clamp(25px,2.222vw,32px)] lg:leading-9 font-medium">
  The Ambassador in the Marketplace (AIM) is an initiative founded by Temitope Odetunde committed to challenging beliefs, correcting misconceptions, and equipping by showcasing Authentic Born-Again Christians who are occupying their place in their area of influence and advancing God's kingdom.
</p>
</section>
<section className="bg-white py-10 md:py-14 lg:py-[clamp(70px,6.94vw,100px)] lg:px-[clamp(100px,7vw,161px)] px-5 md:px-24">
  <header className="flex flex-col lg:flex-row gap-10 items-center lg:gap-[clamp(100px,12vw,175px)] mb-10 md:mb-12 lg:mb-24">
    <div className="flex flex-row items-center md:flex-row md:items-center md:gap-5">
        <h1 className="text-[#231F20] text-3xl md:text-5xl lg:text-[clamp(45px,5.83vw,84px)] font-bold lg:leading-[80px] w-fit ">
          AIM Value <br/> & Believe
        </h1>
        <div >
          <img src="/images/aimlogo.svg" alt="" className="w-fit"/>
        </div>
    </div>
    <div className="flex gap-5">
        <Link to="https://chat.whatsapp.com/JPA5BEZCojOFQNYHrK8OVy" target="_blank" className="text-lg px-3 py-2 md:px-5 md:py-4 rounded font-semibold bg-purple text-white border border-purple hover:bg-grey-100 hover:text-purple transition-all duration-700">
            Join Community
        </Link>
        <Link to="https://www.youtube.com/@AmbassadorTemitope" target="_blank" className="text-lg px-3 py-2 md:px-5 md:py-4 rounded font-semibold border border-purple hover:bg-grey-100 text-purple transition-all duration-700">
          Visit Youtube
      </Link>
    </div>
</header>
<div className="grid lg:grid-cols-2 lg:gap-x-[clamp(75px,6.66vw,96px)] lg:gap-y-20 gap-10 w-full">
  {values.map(value =>(<div className="flex items-start gap-5">
      <img src="/images/Verified.png" alt="" className="w-8"/>
      <p className="font-medium text-[#667185] text-base lg:text-[clamp(18px,1.6vw,24px)]">{value}</p>
    </div>)
  )}
</div>
</section>
      <Enhance/>
      <Footer/>
    </div>
  )
}

export default Taim