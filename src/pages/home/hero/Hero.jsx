import HomeBG from "../../../assets/hombg.png";
import HomeBg from "../../../assets/hombg2.svg";
import Steps from "../../../assets/steps.svg";
import { useDiscountModalStore } from "../../../store/useDiscountModalStore";
import Container from "../../../UI/Container";
export default function Hero() {
  return (
    <div className="flex flex-col space-y-4">
      <Section1 />
      <Container>
        <Section2 />
        <Section3 />
      </Container>
    </div>
  );
}

const Section1 = () => {
  const { openModal } = useDiscountModalStore();
  return (
    <div className="flex justify-between bg-[#FBFBFB]">
      <div className="flex flex-col gap-4 md:gap-1 items-start mt-12 md:mt-4 mx-[70px] md:mx-8">
        <h1 className="text-6xl whitespace-nowrap md:text-xl font-bold ">
          Auto Parts
        </h1>
        <p className="font-bold text-lg md:text-sm mt-2 md:mt-0 w-64 md:w-40">
          We scan the market, compare prices, and recommend the best deals
        </p>
        <button
          onClick={openModal}
          className="text-xs bg-Brand hover:bg-red-600 text-white py-2 md:py-1 px-6 md:px-4 rounded-3xl"
        >
          Inquire Now
        </button>
      </div>
      <div className="flex lg:justify-center">
        <img src={HomeBG} className=" w-full h-96 md:h-40 object-contain" />
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="xl:mx-8 flex md:gap-0 md:flex-col lg:justify-center mt-8">
      {/* Text Section */}
      <div className="flex-[4] lg:w-full flex-col items-start md:text-center gap-4 space-y-4">
        <h1 className="text-2xl font-bold ">
          Your One-Stop Shop For
          <br /> Auto Parts In the UAE
        </h1>
        <p className="font-medium">
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry.
        </p>
        <p className="max-w-[600px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
      </div>
      <div className="flex-[2]  lg:w-full  justify-center items-center  mt-8">
        <img
          src={HomeBg}
          className=" h-[140px] object-contain shrink-0"
          alt="Home background"
        />
      </div>
    </div>
  );
};
const Section3 = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="hidden lg:block text-4xl font-bold text-center mt-8">
        How this work
      </h1>
      <div className="flex md:flex-col gap-6 gap-4 md:gap-2 items-center justify-between">
        <img
          src={Steps}
          className="h-[400px] object-contain"
          alt="Home background"
        />

        <div>
          <div className="mb-10">
            <h1 className=" lg:hidden text-2xl font-bold text-start mb-6">
              How this work
            </h1>
            <p className="font-medium mb-4 text-lg">
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry.
            </p>
            <p className="max-w-[450px] text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
