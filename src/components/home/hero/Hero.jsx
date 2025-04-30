import HomeBG from "../../../assets/hombg.png";
import HomeBg from "../../../assets/hombg2.svg";
import Steps from "../../../assets/steps.svg";
export default function Hero() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="flex justify-between bg-[#FBFBFB]">
      <div className="flex flex-col items-start ml-[70px] gap-4 mt-12">
        <h1 className="text-6xl font-bold ">Auto Parts</h1>
        <p className="font-bold text-lg mt-2">
          We scan the market,
          <br /> compare prices,
          <br /> and recommend the best deals
        </p>
        <button className="text-xs bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-3xl">
          Inquire Now
        </button>
      </div>
      <div>
        <img src={HomeBG} className="w-full h-96 object-contain" />
      </div>
    </div>
  );
};
const Section2 = () => {
  return (
    <div className="flex justify-baround">
      {/* Text Section */}
      <div className="flex flex-col items-start ml-[70px] gap-4 mt-12">
        <h1 className="text-2xl font-bold ">
          Your One-Stop Shop For
          <br /> Auto Parts In the UAE
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry.
        </p>
        <p className="w-[470px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center shrink-0">
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
    <div className="flex items-center justify-center">
      {/* Image Section */}
      <div className="flex justify-center items-center shrink-0">
        <img
          src={Steps}
          className="h-[300px] object-contain"
          alt="Home background"
        />
      </div>
      {/* Text Section */}
      <div className="flex flex-col items-start ml-[70px] gap-4 mt-12">
        <h1 className="text-2xl font-bold ">
         How this work
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry.
        </p>
        <p className="w-[470px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
      </div>
    </div>
  );
};
