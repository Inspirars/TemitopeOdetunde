import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { books } from "../constants"
const Book = () => {
  return (
    <div>
        <Navbar/>
      <section className="px-5 md:px-14 lg:px-24 pt-24 py-12 lg:pt-44 lg:py-28  font-satoshi flex flex-col justify-center items-center">
        <h1 className="text-[#000] text-3xl md:text-5xl lg:text-[64px] lg:leading-10 mb-3 lg:mb-5 font-bold ">
            Now Selling!
        </h1>
        <h4 className="text-[#4B587C] text-base md:text-lg lg:text-2xl lg:leading-10">
            Purchase any of my books and get a gift.
        </h4>
    </section>
    <section className=" px-5 md:px-14 py-14 md:py-28 lg:py-36 lg:px-[clamp(85px,10.277vw,148px)]">
        {books.map(book =>(
            <div className="pb-24 md:pb-36 lg:pb-48 grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
                <div className="grid grid-cols-2 gap-3 md:gap-6   justify-center">
                    <img className="book w-full " src={book.img1} alt="book cover" />
                    <img className="book w-full " src={book.img2} alt="book cover"/>
                </div>
                <div>
                    <h2 className="text-[#000] pt-9 lg:pt-0 pb-4 md:pb-6 text-2xl md:text-3xl lg:text-[40px] font-medium">
                        {book.bookName}
                    </h2>
                    <h4 className="text-[#4B587C] text-base md:text-lg lg:text-[clamp(18px,1.66vw,24px)] pb-8 md:pb-11">
                        {book.brief}
                    </h4>
                    <Link to={book.link}>
                        <button className="bg-black-200 border border-black-200 text-white hover:bg-white hover:text-black-200 transition-all duration-700 py-2 px-3 md:py-4 md:px-5 rounded text-xs md:text-lg">
                            Buy this Book
                        </button>
                    </Link>
                </div>
            </div>)
        )}
    </section>
    <Footer/>
    </div>
  )
}

export default Book
