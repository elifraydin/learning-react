import Slider from "react-slick";
import { useState, useEffect } from "react";
import Banners from '../api/banners.json'
import Title from "./ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function NextBtn({ className, style, onClick }) {
  return (
      <button className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
          <IoIosArrowForward size={22} />
     </button>
  )
}

function PrevBtn({ className, style, onClick }) {
  return (
      <button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
          <IoIosArrowBack size={22} />
      </button>
  )
}


function Campaigns() {

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,//sayfada 3 tane görünür
    slidesToScroll: 1, //birer birer kayar
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
		prevArrow: <PrevBtn />,

  };


  return (
    <div className="container mx-auto py-8">
      <Title>Kampanyalar</Title>
      <Slider className="-mx-2" {...settings}>
        {banners.length && banners.map((banner) => (
          <div key={banner.id}>
            <picture className=" block px-2">
              <img
                alt="banner"
                className="w-full object-cover rounded-lg"
                src={banner.image}
              />
            </picture>
          </div>
        ))}

      </Slider>
    </div>
  )
}
export default Campaigns