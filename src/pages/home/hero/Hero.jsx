import HomeBG from "../../../assets/hombg.png";
import HomeBg from "../../../assets/hombg2.svg";
import Steps from "../../../assets/steps.svg";
import Container from "../../../UI/Container";
export default function Hero() {
  return (
    <div className="flex flex-col space-y-10">
      <Section1 />
      <Container>
        <Section2 />
        <Section3 />
      </Container>
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="flex justify-between bg-[#FBFBFB]">
      <div className="flex flex-col gap-4 md:gap-1 items-start mt-12 md:mt-4 mx-[70px] md:mx-4">
        <h1 className="text-6xl md:text-xl font-bold ">Auto Parts</h1>
        <p className="font-bold text-lg md:text-sm mt-2 md:mt-0 w-64 md:w-40">
          We scan the market, compare prices, and recommend the best deals
        </p>
        <button className="text-xs bg-Brand hover:bg-red-600 text-white py-2 md:py-1 px-6 md:px-4 rounded-3xl">
          Inquire Now
        </button>
      </div>
      <div>
        <img src={HomeBG} className="w-full h-96 md:h-40 object-contain" />
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex gap-12 md:gap-0 md:flex-col">
      {/* Text Section */}
      <div className="flex flex-col items-start md:items-center md:text-center gap-4">
        <h1 className="text-2xl font-bold ">
          Your One-Stop Shop For
          <br /> Auto Parts In the UAE
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry.
        </p>
        <p className="w-[470px] md:w-[320px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
      </div>
      <div className="flex justify-center items-center w-full">
        <img
          src={HomeBg}
          className=" h-[110px] object-contain"
          alt="Home background"
        />
      </div>
    </div>
  );
};
const Section3 = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-2xl font-bold mt-8">How this work</h1>
      <div className="flex md:flex-col">
        <div className="flex justify-center items-center shrink-0">
          <img
            src={Steps}
            className="h-[300px] object-contain"
            alt="Home background"
          />
        </div>
        <div className="flex flex-col md:items-center md:text-center gap-4 mt-10">
          <p>
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry.
          </p>
          <p className="w-[470px] md:w-[300px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
      </div>
    </div>
  );
};
