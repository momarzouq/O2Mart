import { FaLocationDot } from "react-icons/fa6";
import Contactus from "../assets/contactus.png";
import Message from "../assets/message.svg";
import Container from "../UI/Container";
import { AiOutlineMail } from "react-icons/ai";
export default function ContactUs() {
  return (
    <div>
      <div>
        {/* Hero */}
        <img src={Contactus} className="object-cover w-full" />
      </div>
      {/* Main */}
      <Container>
        <div className="flex flex-col items-center justify-center my-8 space-y-4 ">
          <h3 className="text-4xl font-medium lg:text-center lg:text-2xl">Welecom to O2Mart</h3>
          <p className="w-1/2 text-center text-sm text-gray-500">
            Lorem ipsum dolor sit Ut enim ad minim veniam, quis nostrud
            exercitation amet, consectetur adidunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
        <div>
          {/* CONTACT RUBINO */}
          <div className="flex lg:flex-col gap-8 my-8">
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="text-lg font-medium">CONTACT RUBINO</h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet praesent molestie Etiam quis risus
                tincidunt non risus et, eget luctus elementum sociis vestibulum
                interdum parturient vel cursus. Consequat etiam non nec odio
                imperdi an volutpat phasellus pretium quis nostrum
                exercitationem.
              </p>
              <div className="flex lg:flex-col lg:gap-4 justify-around">
                <div className="flex flex-col items-center">
                  <FaLocationDot size={20} color="#EC221F" />
                  <h4 className="font-medium">ADDRESS</h4>
                  <p className="text-xs text-gray-500 text-center">
                    100 Main Street, California, United State
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={Message} className="h-6 w-6" />
                  <h4 className="font-medium">ADDRESS</h4>
                  <p className="text-xs text-gray-500 text-center">
                    (206) 315-3010
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start lg:justify-center mt-8 lg:mt-2 custom-margin">
                <div className="flex flex-col items-center ">
                  <AiOutlineMail size={20} color="#EC221F" />
                  <h4 className="font-medium">EMAIL</h4>
                  <p className="text-xs text-gray-500 text-center underline">
                    info@o2mart.net
                  </p>
                </div>
              </div>
            </div>

            {/* SEND A MESSAGE */}
            <div className="flex-1  flex flex-col gap-6">
              <h4 className="text-lg font-medium">CONTACT RUBINO</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet praesent molestie Etiam quis risus
                tincidunt non risus et, eget luctus elementum sociis vestibulum
                interdum parturient vel cursus. Consequat etiam non nec odio
                imperdi an volutpat phasellus pretium quis nostrum
                exercitationem.
              </p>
              <div className="w-full flex flex-col gap-4">
                <div className="w-full flex gap-6 lg:gap-2">
                  <div className="flex flex-col flex-[1] lg:w-[49%]">
                    <label className="text-sm font-medium  mb-1">
                      Your Name
                    </label>
                    <input className="block border border-gray-400 py-2 px-4 rounded outline-none" />
                  </div>
                  <div className="flex flex-col flex-[3] lg:w-[49%]">
                    <label className="text-sm font-medium  mb-1">Email</label>
                    <input className="block border border-gray-400 py-2 px-4 rounded outline-none" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium  mb-1">Subject</label>
                  <select className="w-full block border border-gray-400 py-2 px-4 rounded outline-none">
                    <option value=""></option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium  mb-1">
                    Your Message
                  </label>
                  <textarea className="w-full block border border-gray-400 py-12 px-4 rounded outline-none"></textarea>
                </div>
              </div>

              <div className="flex justify-start ">
                <button className="text-white text-sm bg-Brand py-1.5 px-10 rounded-sm">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
