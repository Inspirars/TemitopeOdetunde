import { Link } from "react-router-dom"
import Enhance from "../components/Enhance"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const About = () => {
  return (
    <div>
        <Navbar/>
        <section className="pt-28 md:pt-40 lg:pt-48 px-5 md:px-14 lg:px-[86px] flex justify-center pb-12 lg:pb-16">
    <div className="w-[100%] md:w-3/4 lg:w-[60%]">
        <h1 className="flex items-center font-medium text-[#231F20] text-2xl md:text-3xl lg:text-[clamp(35px,2.77vw,40px)] lg:leading-10">
            Hi<div className="animate-wiggle">👋🏻</div>I'm Temitope Odetunde 
        </h1>
        <p className="font-normal text-sm md:text-sm lg:text-[clamp(16px,1.388vw,20px)] lg:leading-7 pt-6">
        Temitope Odetunde is a Pharmacist by profession, with extensive experience across various roles within the healthcare system. She has worked as a Clinical Pharmacist in Acute Hospital settings, a Pharmacy Practice Lecturer at NHS 111 Academia, a CQC Inspector, and the Head of Medicines Management in Community Services. Temitope brings a wealth of knowledge and expertise to her professional endeavors.
        Beyond her professional achievements, Temitope believes in authentic Christianity, which she defines as a journey that begins with receiving Christ (salvation), knowing the truth (transformation), and experiencing the freedom that comes from this truth. She emphasizes that only through this complete process can one be an authentic Christian.
        She is the voice behind Ambassador in the Marketplace, a broadcast where she interviews Christians making a difference in the marketplace. She also has AIM merchandise on Etsy.
        </p>
    </div>
  </section>
    <section className="px-5 md:px-14 lg:px-[86px]">
        <div className="img gap-4 grid grid-cols-1 lg:grid-cols-4 bg-[#F9F4FF] rounded-md p-4">
          <div className="hidden md:grid md:col-start-1 md:col-end-2  gap-4">
            <img src="/images/aboutImages/about1.png" alt="about one"/>
            <img src="/images/aboutImages/about2.png" alt="about one"/>
            <img src="/images/aboutImages/about3.png" alt="about one"/>
          </div>
          <div className="md:col-start-2 md:col-end-4 grid gap-4">
            <img src="/images/aboutImages/about4.png" className="block" loading="eager" alt="about one" />
            <img src="/images/aboutImages/about5.png" className="block" loading="eager" alt="about one" />
          </div>
          <div className="md:col-start-4 md:col-end-5 hidden md:grid gap-4">
            <img src="/images/aboutImages/about6.png" alt="about one"/>
            <img src="/images/aboutImages/about7.png" alt="about one"/>
          </div>
        </div>
    </section>
    <section className="px-5 md:px-14 lg:px-[86px]">
      <section className="py-14 md:py-20 lg:py-[138px] lg:px-28 flex flex-col gap-7 md:flex-row items-start md:items-center md:gap-16 lg:gap-[clamp(85px,6.52vw,94px)]">
        <p className=" text-lg md:text-2xl lg:text-[clamp(24px,2.22vw,32px)] text-[#667185] lg:leading-10 font-normal md:w-[60%] lg:w-[70%] text-balance ">
          She wrote her first book <span className="text-purple font-medium">“Worship Brings Rain”</span> in 2019, which originate from her arduous pursuit to establish the direction in which God was guiding her. She is enthusiastic about serving God and his people in her local church and local people.
        </p>
        <button className="bg-black-200 border border-black-200 text-white hover:bg-white hover:text-black-200 transition-all duration-700 py-2 px-3 md:py-4 md:px-5 rounded text-xs md:text-lg">
          Visit Book Store
      </button>
      </section>
    </section>
    <section className="pb-20 md:pb-20 lg:pb-36 px-5 md:px-14 lg:px-[86px]">
      <header className="pb-10 lg:pb-14 text-2xl md:text-[clamp(30px,2.77vw,40px)] text-[#000]">
        My Professional Services
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-y-24">
        <div className="relative">
          <img src="/images/services/service1.png" alt="My service 1" className="lg:w-[35.96vw]"/>
          <div className="absolute bg-[#FFF6E9] bottom-[-30px] rounded right-0 md:right-24 lg:bottom-[-30px] lg:right-4 w-[90%] md:w-[50vw] lg:w-[32.5vw] p-5 lg:p-10">
            <h3 className="text-lg md:text-2xl lg:text-[clamp(24px,2.22vw,32px)] text-[#231F20] lg:leading-9 font-medium  pb-4">
              Workshops and Training
            </h3>
            <p className="text-sm lg:text-[clamp(18px,1.66vw,24px)] lg:leading-8 text-[#667185]">
              Harness the Power of Excellence In Your Professional
              Practice With Workshops And Training Sessions Led by Temitope Odetunde
            </p>
          </div>
        </div>
        <div className="relative ">
          <img src="images/services/service2.png" alt="My service 2" className="lg:w-[35.97vw]"/>
          <div className="absolute bg-[#F6EDFF] bottom-[-30px] rounded right-0 md:right-24 lg:bottom-[-30px] lg:right-4 w-[90%] md:w-[50vw] lg:w-[34vw] p-5 lg:p-10">
            <h3 className="text-lg md:text-2xl lg:text-[clamp(24px,2.22vw,32px)] text-[#231F20] lg:leading-9 font-medium  pb-4">
              Healthcare Consulting
            </h3>
            <p className="text-sm lg:text-[clamp(18px,1.66vw,24px)] lg:leading-8 text-[#667185]">
              With Extensive Pharmacist Experience Temitope Offers Strategic Guidance To Elevate Pharmaceutical Services, & Streamline Medicine Management.
            </p>
          </div>
        </div>
        <div className="lg:col-start-1 lg:col-end-3 relative h ">
          <img src="/images/services/service3.png" alt="My service 3" className="w-[100%] h-[70vw] object-cover md:h-fit lg:w-[78.8888vw]"/>
          <div className="absolute bg-[#E5E6E7] bottom-[-70px] md:bottom-[-30px] rounded right-0 md:right-0 lg:bottom-[-30px] lg:right-4 w-[90%] md:w-[50vw] lg:w-[36.5vw] p-5 lg:p-10">
            <h3 className="text-lg md:text-2xl lg:text-[clamp(24px,2.22vw,32px)] text-[#231F20] lg:leading-9 font-medium  pb-4">
              Coaching and Mentoring
            </h3>
            <p className="text-sm lg:text-[clamp(18px,1.66vw,24px)] lg:leading-8 text-[#667185]">
              Whether Navigating Career Transitions, Aligning Faith With Profession, or Striving For Excellence, Temitope Provides Tailored Guidance For Your Fullest Potential.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="px-5 md:px-14 lg:px-[86px] lg:flex lg:justify-center">
      <section className="py-14 md:py-20 lg:pt-0 lg:pb-[138px] lg:px-36 flex flex-col gap-7 md:flex-row items-start md:items-center md:gap-12 lg:gap-[clamp(50px,4.583vw,66px)]">
        <p className="text-lg md:text-2xl lg:text-[clamp(24px,2.22vw,32px)] text-[#000] lg:leading-10 font-normal md:w-[60%] lg:w-[70%] text-balance ">
        I run a consulting firm called RIOS-INFLUENCIA which offers consulting, training, and education services to healthcare professionals, and facilities, with the aim of bridging hospital and home care to offer holistic patient centric care, improve patient outcomes, and break the cycle of revolving door patients.
        </p>
        <Link to='https://www.rios-influencia.com/' target="_blank" className="bg-purple text-white rounded px-4 py-3 md:py-4 md:px-5"> 
          Visit RIOS
        </Link>
      </section>
    </section>
    <Enhance/>
    <Footer/>
      
    </div>
  )
}

export default About
