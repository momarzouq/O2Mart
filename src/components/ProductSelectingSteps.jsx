import { SlArrowRight } from "react-icons/sl";

export const SelectingSteps = ({ steps }) => {
  return (
    <div className=" flex lg:flex-col lg:w-fit md:items-start justify-around mx-auto  gap-4 my-2 lg:my-8 font-bold ">
      {steps.map((step, i) => (
        <SelectingStep
          key={step.title || i}
          img={step.img}
          title={step.title}
          order={i + 1}
          isLast={steps.length == i + 1}
        />
      ))}
    </div>
  );
};

const SelectingStep = ({ img, order, title, isLast }) => {
  return (
    <div className="flex items-center gap-2 text-lg">
      <img src={img} alt="Steps" />
      <div className="w-fit">
        <span className="text-Brand ">{order}.</span> {title.toUpperCase()}
      </div>
      {!isLast && <SlArrowRight className="size-12 text-gray-300" />}
    </div>
  );
};
