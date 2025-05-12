import React from "react";
import Container from "../UI/Container";
import { Breadcrumb } from "../UI/Breadcrumb";

export default function WarrantyReturnsPolicy() {
  return (
    <Container>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Warranty & Returns Policy" },
        ]}
      />
      <div className="my-4 space-y-6">
        <h3 className="text-4xl font-bold">Warranty & Returns Policy</h3>
        <div>
          <p className="text-sm text-[#444444] mb-6">
            Each auto part comes with specific warranty coverage and return
            conditions based on the manufacturer and supplier’s terms.
          </p>
          <p className="text-sm text-[#444444] my-2">
            Please ensure you read the warranty and return policy clearly stated
            in your quotation and order confirmation.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">Why do they vary?</h3>
          <p className="text-sm text-[#444444] mb-6">
            To get you the best deals on the widest range of auto parts, we
            partner with trusted suppliers all over the UAE. Each supplier has
            their own policies, which is why warranty and return terms can vary
            between products. Don’t worry though – you’ll see all the specific
            terms right in your quotation before you make a decision.
          </p>
        </div>
        <div>
          <p className=" text-[#444444] font-bold">Important:</p>
          <ul className="list-disc list-inside text-sm text-[#444444] space-y-2 mt-4">
            <li> Not all suppliers accept returns</li>
            <li>
              Once a part’s packaging has been opened or the part has been
              installed, we can’t accept returns
            </li>
            <li>
              Return eligibility and process will follow the specific terms
              outlined in your quotation
            </li>
            <li>
              Some parts might be final sale and ineligible for returns, this
              will be clearly marked in your quotation
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold mb-4">Got a Defective Part?</h3>
          <p className="text-sm text-[#444444] ">
            If you’ve received a defective part or are facing issues with usage,
            please:
          </p>
          <ul className="list-decimal list-inside text-sm text-[#444444] space-y-2">
            <li> Contact our customer service team right away</li>
            <li> Provide your order number and photos of the part</li>
            <li>
              Our team will guide you through the next steps based on the
              supplier’s warranty terms
            </li>
          </ul>
          <p className="text-sm text-[#444444] ">
            We’ll work with you and our suppliers to sort things out quickly.
            Our goal is to get you back on the road with minimal hassle.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold mb-4">Need Help?</h3>
          <p className="text-sm text-[#444444] ">
            Not sure if your situation qualifies for a return? Have questions
            about a specific part’s warranty? Just reach out to our team. We’re
            here to help make things right.
          </p>
        </div>
      </div>
    </Container>
  );
}
