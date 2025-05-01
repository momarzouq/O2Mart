import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import TyersSlider from "../../../assets/Tyers-Slider.png";
import Categories from "../../../assets/categories.svg";
import GetHelp from "../../../assets/GetHelp.svg";
import CarsBrand from "../../../assets/Cars-Brand.svg";
import Email from "../../../assets/email.svg";
import Article1 from "../../../assets/article1.png";
import Article2 from "../../../assets/article2.png";
import Article3 from "../../../assets/article3.png";
import Container from "../../../UI/Container";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
export default function Main() {
  return (
    <div className="mb-20">
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
  const Tyeries = [
    { id: 1, image: TyersSlider },
    { id: 2, image: TyersSlider },
    { id: 3, image: TyersSlider },
  ];

  return (
    <div className="py-8 w-full">
      <h3 className="text-center text-3xl font-bold my-4">Categories</h3>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
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
        {Tyeries.map((item) => (
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
      <div className="flex justify-center items-center max-h-[220px] object-cover my-16">
        <img src={Categories} />
      </div>
    </div>
  );
};
const Section2 = () => {
  const CarsBrandData = [
    { id: 1, image: CarsBrand },
    { id: 2, image: CarsBrand },
    { id: 3, image: CarsBrand },
  ];

  return (
    <div className="py-8 w-full">
      <h3 className="text-center text-3xl font-bold my-4">Categories</h3>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper mb-28"
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
      <div className="flex justify-center items-center  my-16 rounded">
        <img
          src={GetHelp}
          className="object-contain rounded-lg max-h-[300px]"
        />
      </div>
    </div>
  );
};

const Section3 = () => {
  const CarsBrandData = [
    {
      id: 1,
      User: "Alex Smith",
      Rating: 4.5,
      Description:
        "Mobex delivered on their promise of quality and affordability. I got an air filter for my SUV, and it fit perfectly.",
    },
    {
      id: 2,
      User: "Sarah Johnson",
      Rating: 5,
      Description:
        "Mobex delivered on their promise of quality and affordability. I got an air filter for my SUV, and it fit perfectly.",
    },
    {
      id: 3,
      User: "John Doe",
      Rating: 3,
      Description:
        "Mobex delivered on their promise of quality and affordability. I got an air filter for my SUV, and it fit perfectly.",
    },
    {
      id: 4,
      User: "John Doe",
      Rating: 3,
      Description:
        "Mobex delivered on their promise of quality and affordability. I got an air filter for my SUV, and it fit perfectly.",
    },
    {
      id: 5,
      User: "John Doe",
      Rating: 3,
      Description:
        "Mobex delivered on their promise of quality and affordability. I got an air filter for my SUV, and it fit perfectly.",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<AiFillStar key={i} className="text-[#F29F05]" />);
    }

    if (hasHalfStar) {
      stars.push(
        <AiFillStar key="half" className="text-[#F29F05] opacity-50" />
      );
    }

    while (stars.length < 5) {
      stars.push(
        <AiOutlineStar key={stars.length} className="text-[#F29F05]" />
      );
    }

    return stars;
  };

  return (
    <div className="py-8">
      <h3 className="text-center text-3xl font-bold my-4">
        What Our Customers Say?
      </h3>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper mb-28"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        spaceBetween={20}
      >
        {CarsBrandData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex justify-center items-center"
          >
            <div className="h-full p-6 bg-white rounded-lg flex items-center justify-center gap-2">
              <div>
                <h3 className="text-md font-semibold">{item.User}</h3>
                <p className="flex mb-2">{renderStars(item.Rating)}</p>
                <p className="text-gray-700 text-sm w-60">{item.Description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex md:flex-col md:space-y-4 lg:gap-2 md:text-center md:px-2 items-center justify-around bg-red-600 py-2 rounded-2xl">
        <img src={Email} alt="Email" />
        <div className="flex flex-col gap-2 text-white">
          <h3 className="text-2xl lg:text-xl">Get the Latest Deals & Updates.</h3>
          <p className="lg:text-sm">
            Stay in the loop! Subscribe to our newsletter to receive the latest
            deals,
            <br /> discounts, announcements, and expert tips on maintaining your
            car.
          </p>
        </div>
        <div className="relative flex flex-col gap-2 w-80">
          <input
            id="email"
            type="email"
            placeholder="Email address"
            className="text-sm border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-1 focus:ring-red-600"
          />
          <FaTelegramPlane className="absolute right-4 top-2 text-red-600 size-6" />
        </div>
      </div>
    </div>
  );
};

const Section4 = () => {
  const ArticleData = [
    {
      id: 1,
      img: Article1,
      desc: "What to know about changing theengine oil and oil filters",
    },
    {
      id: 2,
      img: Article2,
      desc: "Warning lights indicating activation of various systems",
    },
    { id: 3, img: Article3, desc: "The number of new cars sold over 20 years" },
    {
      id: 4,
      img: Article1,
      desc: "What to know about changing theengine oil and oil filters",
    },
  ];
  return (
    <div className="flex mt-4 md:gap-1">
      {/* Left Side */}
      <div className="flex flex-col gap-3 items-start mt-6 ">
        <h3 className="text-xl font-bold">Guides and articles</h3>
        <p className="text-sm text-gray-400 w-80 md:w-44">
          Articles and Guides that are written with the help of mechanics to
          ensure you have all the knowledge you need to make the correct
          purchase here at Mobex.
        </p>
        <button className="font-semibold border-2 border-gray-800 rounded-md py-1.5 px-8">
          Read more
        </button>
      </div>
      {/* Right Side & Swiper */}
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        spaceBetween={2}
      >
        {ArticleData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex justify-center items-center min-h-[300px]"
          >
            <div className="h-full bg-white flex items-center justify-center">
              <div>
                <img src={item.img} className="rounded-md" />
                <p className="text-sm font-semibold w-60 mt-2 md:w-48">{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
