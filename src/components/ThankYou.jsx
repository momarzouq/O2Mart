import { MdDone } from "react-icons/md";

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 mt-40">
      <div className="text-3xl bg-Brand py-8 text-white px-8 rounded-full">
        <MdDone className="size-20" />
      </div>
      <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
      <p className="text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  );
}
