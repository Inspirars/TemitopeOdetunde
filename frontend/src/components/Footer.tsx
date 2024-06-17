import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="py-14 px-5 md:px-14 lg:py-[77px] flex flex-col gap-6 md:flex-row items-center justify-between lg:px-36 bg-black-200">
      <img src="/images/logoWhite.svg" alt="white logo" className="w-20 md:w-36 lg:w-max"/>
    <ul className=" flex list-none lg:gap-11 gap-4 text-[10px] md:text-sm lg:text-base text-white font-normal">
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
      </ul>
</footer>
  )
}

export default Footer
