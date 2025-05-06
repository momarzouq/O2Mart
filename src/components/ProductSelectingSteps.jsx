import { SlArrowRight } from "react-icons/sl";

export const SelectingSteps = ({ steps }) => {
  return (
    <div className="flex md:flex-col md:w-fit md:items-start justify-around mx-auto gap-4 py-8 font-semibold mb-10">
      {steps.map((step, i) => (
        <SelectingStep
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
      <img src={img} alt="Step1" />
      <div className="w-28">
        <span className="text-Brand">{order}.</span> {title.toUpperCase()}
      </div>
      {!isLast && <SlArrowRight className="size-12 text-gray-300" />}
    </div>
  );
};
