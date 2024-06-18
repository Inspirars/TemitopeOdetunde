import { Link } from "react-router-dom"

const Gallery = () => {
  return (
    <div>
        <section className=" px-5 md:px-14 pt-24 pb-11 lg:pt-44 lg:px-[102px] py-12 lg:py-20 font-satoshi">
        <div className="flex flex-col gap-4 text-white items-center">
        <h3 className="text-2xl md:text-3xl text-[#000] lg:text-[clamp(45px,4vw,64px)] text-center font-bold lg:leading-10">My Gallery</h3>
        <p className="text-[#4B587C] text-base md:text-lg lg:text-[clamp(18px,1.666vw,24px)] w-[90%] md:w-[80%] lg:w-[60%] text-center lg:leading-10">
            Bytes and sounds from events and places I have been to
        </p>
        </div>
  </section>
  <section className="px-5 md:px-14 lg:px-[120px] py-4 lg:py-8 pb-8 md:pb-11">
    <header className="flex justify-between items-end text-[#000] font-inter lg:pb-6">
      <h1 className=" font-normal text-xl md:text-3xl lg:text-[clamp(30px,2.77vw,40px)] lg:leading-[45px] ">
        Trainings
      </h1>
      <Link to="https://temitope23.pixieset.com/trainings/" target="_blank" className="text-purple text-lg md:text-2xl">
        View More
      </Link>
    </header>
    <main className="grid grid-cols-2 items-center lg:grid-cols-3 lg:gap-10">
      <div>
        <img src="/images/Temitope/training/train1.jpg" alt="" className="w-[40vw] h-[35vw] lg:w-[25vw] lg:h-[17.667vw] object-cover rounded-md"/>
      </div>
      <div>
        <img src="/images/Temitope/training/train3.jpg" alt="" className="w-[45vw] h-[31vw] lg:w-[25vw] lg:h-[17.667vw] object-cover rounded-md"/>
      </div>
      <div className="hidden lg:block">
        <img src="/images/Temitope/training/train7.jpg" alt="" className="w-[40vw] h-[30vw] lg:w-[25vw] lg:h-[17.667vw] object-cover rounded-md"/>
      </div>
    </main>

  </section>
  <section className="px-5 md:px-14 lg:px-[120px] py-4 lg:py-8 pb-8 md:pb-11">
    <header className="flex justify-between items-end text-[#000] font-inter lg:pb-6">
      <h1 className=" font-normal text-xl md:text-3xl lg:text-[clamp(30px,2.77vw,40px)] lg:leading-[45px] ">
        Speaking Events
      </h1>
      <Link to="https://temitope23.pixieset.com/events/" target="_blank" className="text-purple text-lg md:text-2xl">
        View More
      </Link>
    </header>
    <main className="grid grid-cols-2 items-center lg:grid-cols-3 lg:gap-10">
      <div>
        <img src="/images/Temitope/training/train2.jpg" alt="" className="w-[40vw] h-[35vw] lg:w-[25vw] lg:h-[17.667vw] object-cover rounded-md" />
      </div>
      <div>
        <img src="/images/Temitope/training/train3.jpg" alt="" className="w-[45vw] h-[31vw] lg:w-[25vw] lg:h-[17.667vw] object-cover rounded-md" />
      </div>
      <div className="hidden lg:block">
        <img src="/images/Temitope/training/train8.jpg" alt="" className="w-[40vw] h-[30vw] lg:w-[25vw] lg:h-[17.667vw] object-cover rounded-md" />
      </div>
    </main>
  </section>
  <section className="px-5 md:px-14 lg:px-[120px] py-4 lg:py-8 pb-10 lg:pb-32">
    <header className="flex justify-between items-end text-[#000] font-inter lg:pb-6">
      <h1 className=" font-normal text-xl md:text-3xl lg:text-[clamp(30px,2.77vw,40px)] lg:leading-[45px]">
        Lifestyle & Work
      </h1>
      <Link to="https://temitope23.pixieset.com/lifestyle/" target="_blank" className="text-purple text-lg md:text-2xl">
        View More
      </Link>
    </header>
    <main className="grid grid-cols-2 items-center lg:grid-cols-3 lg:gap-10">
      <div>
        <img src="/images/Temitope/lifestyle/life1.jpg" alt="" className="w-[40vw] h-[35vw] lg:w-[25vw] lg:h-[17.667vw] object-cover rounded-md" />
      </div>
      <div>
        <img src="/images/Temitope/lifestyle/life2.jpg" alt="" className="w-[45vw] h-[31vw] lg:w-[25vw] lg:h-[17.667vw] object-cover rounded-md" />
      </div>
      <div className="hidden lg:block">
        <img src="/images/Temitope/lifestyle/life3.jpg" alt="" className="w-[40vw] h-[30vw] lg:w-[25vw] lg:h-[17.667vw] object-cover rounded-md" />
      </div>
    </main>

  </section>
      
    </div>
  )
}

export default Gallery
