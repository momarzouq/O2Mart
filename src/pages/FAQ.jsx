import React, { useState } from "react";
import Container from "../UI/Container";
import FAQImg from "../assets/faq.svg";
import { Breadcrumb } from "../UI/Breadcrumb";
import FaqContent from "../components/FaqContent";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to open/close specific FAQ
  const toggleContent = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const GeneralQuestions = [
    {
      title: "Do you deliver the Next Day?",
      desc: "We do not recommend the general internal use of essential oils. Essential oils are highly concentrated and have the capacity to cause serious damage if used internally without the necessary expertise.",
    },
    {
      title: "What are your delivery options?",
      desc: "We offer multiple delivery options including standard, express, and same-day delivery.",
    },
    {
      title: "How do I know when my order has been dispatched?",
      desc: "You will receive an email with a tracking link once your order is shipped.",
    },
    {
      title: "How do I know when my order has been dispatched?",
      desc: "You will receive an email with a tracking link once your order is shipped.",
    },
  ];

  const PaymentQuestions = [
    {
      title: "Do you have my product in stock?",
      desc: "We do not recommend the general internal use of essential oils. Essential oils are highly concentrated and have the capacity to cause serious damage if used internally without the necessary expertise.",
    },
    {
      title: "Do you deliver the Next Day?",
      desc: "We do not recommend the general internal use of essential oils. Essential oils are highly concentrated and have the capacity to cause serious damage if used internally without the necessary expertise.",
    },
  ];

  const AnyQuestions = [
    {
      title: "What are your delivery options?",
      desc: "We offer multiple delivery options including standard, express, and same-day delivery.",
    },
    {
      title: "How do I know when my order has been dispatched?",
      desc: "You will receive an email with a tracking link once your order is shipped.",
    },
    {
      title: "What are your delivery options?",
      desc: "We offer multiple delivery options including standard, express, and same-day delivery.",
    },
    {
      title: "How do I know when my order has been dispatched?",
      desc: "You will receive an email with a tracking link once your order is shipped.",
    },
  ];

  const Any2Questions = [
    {
      title: "Do you have my product in stock?",
      desc: "We do not recommend the general internal use of essential oils. Essential oils are highly concentrated and have the capacity to cause serious damage if used internally without the necessary expertise.",
    },
    {
      title: "What are your delivery options?",
      desc: "We offer multiple delivery options including standard, express, and same-day delivery.",
    },
    {
      title: "Do you have my product in stock?",
      desc: "We do not recommend the general internal use of essential oils. Essential oils are highly concentrated and have the capacity to cause serious damage if used internally without the necessary expertise.",
    },
    {
      title: "What are your delivery options?",
      desc: "We offer multiple delivery options including standard, express, and same-day delivery.",
    },
  ];

  return (
    <div>
      <div>
        <img src={FAQImg} className="w-full object-cover" alt="FAQ" />
      </div>
      <Container>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
        <h3 className="text-2xl font-medium my-4">General Questions</h3>
        <div className="flex lg:flex-col gap-5 mb-40">
          <div className="flex-1">
            <div className="space-y-6">
              {GeneralQuestions.map((item, index) => (
                <FaqContent
                  key={index}
                  title={item.title}
                  desc={item.desc}
                  isOpen={openIndex === index}
                  toggleContent={() => toggleContent(index)}
                />
              ))}
            </div>
            <div className="space-y-6 mt-8">
              <h3 className="text-2xl font-medium my-4">Payment & Gift Card</h3>
              {PaymentQuestions.map((item, index) => (
                <FaqContent
                  key={index}
                  title={item.title}
                  desc={item.desc}
                  isOpen={openIndex === index + GeneralQuestions.length}
                  toggleContent={() =>
                    toggleContent(index + GeneralQuestions.length)
                  }
                />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="space-y-[88.5px] lg:space-y-6">
              <div className="space-y-6">
                {AnyQuestions.map((item, index) => (
                  <FaqContent
                    key={index}
                    title={item.title}
                    desc={item.desc}
                    isOpen={
                      openIndex ===
                      index + GeneralQuestions.length + PaymentQuestions.length
                    }
                    toggleContent={() =>
                      toggleContent(
                        index +
                          GeneralQuestions.length +
                          PaymentQuestions.length
                      )
                    }
                  />
                ))}
              </div>
              <div className="space-y-6">
                {Any2Questions.map((item, index) => (
                  <FaqContent
                    key={index}
                    title={item.title}
                    desc={item.desc}
                    isOpen={
                      openIndex ===
                      index +
                        GeneralQuestions.length +
                        PaymentQuestions.length +
                        AnyQuestions.length
                    }
                    toggleContent={() =>
                      toggleContent(
                        index +
                          GeneralQuestions.length +
                          PaymentQuestions.length +
                          AnyQuestions.length
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
