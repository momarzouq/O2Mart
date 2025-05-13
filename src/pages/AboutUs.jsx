import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import Container from "../UI/Container";
import { Breadcrumb } from "../UI/Breadcrumb";
import CarsBrand from "../assets/Cars-Brand.svg";
import HomeBG from "../assets/hombg.png";
import { RiWhatsappFill } from "react-icons/ri";
export default function AboutUs() {
  return (
    <div>
      <Container>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Container>
    </div>
  );
}

const Section1 = () => {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <div className="flex lg:flex-col gap-8 mt-10">
        <div className="flex-[4] flex-col items-start space-y-4 ">
          <h3 className="text-3xl font-bold text-[#333232]">
            The Easiest Way to Find Auto Parts
          </h3>

          <p className="text-xs font-semibold text-[#5F5D5D] ">
            Tired of the endless search for the right auto parts? Let us do the
            heavy lifting for you! Just tell us what you need, and our team will
            track down the best deals and quality auto parts across the UAE.
          </p>
          <p className="text-xs font-semibold text-[#5F5D5D] ">
            We compare prices, verify suppliers, and make sure you get exactly
            what you ordered. No more driving all over several emirates or
            sifting through suppliers.
          </p>
          <p className="text-xs font-semibold text-[#5F5D5D] ">
            From tiny sensors to complete engine parts, we've got your back!
          </p>
          <button className="text-Brand border border-Brand py-2 px-10 text-xs font-semibold rounded-md">
            Shop Now
          </button>
        </div>
        <div className="flex-[2] lg:w-full w-[200px] h-[230px] lg:h-[300px]">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

const Section2 = () => {
  const CarsBrandData = [
    { id: 1, image: CarsBrand },
    { id: 2, image: CarsBrand },
    { id: 3, image: CarsBrand },
  ];

  return (
    <div className="flex w-full justify-center items-center">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        loop={true}
      >
        {CarsBrandData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-full flex items-center justify-center">
              <img
                src={item.image}
                alt={`Slide ${item.id}`}
                className="object-contain rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className="  bg-[#FBFBFB] items-center">
      <div className="relative w-full flex justify-end mt-4 md:mt-0">
        <div className="w-full flex flex-col gap-4 px-10 md:px-2 py-4">
          <h1 className="text-5xl md:text-xl font-medium text-[#333232]">
            Why We Started O2Mart?
          </h1>
          <p className="w-full text-[#808080] font-medium text-sm md:text-sm">
            Ever spent hours driving between Sharjah, Dubai, and Abu Dhabi
            looking for a specific car part? And did you usually
            <span className="md:hidden">
              <br /> end up with very different offers, completely confused?
              <br /> We’ve been there too. That’s exactly why we started O2Mart!
              <br />
              We used to face a lot of difficulties trying to find the right
              auto part, often ending up with wildly different price quotes,
              <br /> and burning through tanks of fuel driving all over several
              emirates just to get the job done.
              <br /> We thought, “There has to be a better way.” Turns out,
              there wasn’t—so we created one. We <br />
              built the platform we wished existed when we were in your shoes.
            </span>
          </p>
          <button className="w-40 text-xs text-Brand border border-Brand py-3 px-10 md:py-1  md:px-4 rounded font-bold">
            Send Inquire
          </button>
        </div>

        <img src={HomeBG} className="max-w-[400px] h-[300px] object-contain" />
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className="space-y-2 mt-8 mb-14">
      <h3 className="text-2xl font-bold">Need a Part ASAP?</h3>
      <p className="text-[#5F5D5D] font-semibold ">
        Hit us up! Our friendly team is ready to start hunting down exactly what
        you need. No hassle, no runaround - just straight-up efficient service.
      </p>
      <button className="flex items-center gap-1 text-[#5ED467] text-sm font-semibold border border-[#5ED467] py-2 px-4 rounded">
        <RiWhatsappFill size={25} />
        Whatsapp Us
      </button>
    </div>
  );
};
