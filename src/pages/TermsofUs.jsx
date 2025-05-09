import React from "react";
import Container from "../UI/Container";
import { Breadcrumb } from "../UI/Breadcrumb";

export default function TermsofUs() {
  return (
    <Container>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Terms of Us" }]}
      />
      <div className="mt-4 space-y-6">
        <h3 className="text-4xl font-bold">Terms of Us</h3>
        <div>
          <h3 className="text-3xl font-bold mb-4">Company Information</h3>
          <p className="text-sm text-[#444444] mb-6">
            O2Mart [LLC] is incorporated in the United Arab Emirates under
            license number [LICENSE NUMBER], operating the website
            www.o2mart.net. Our registered office is located at [REGISTERED
            ADDRESS], the United Arab Emirates.
          </p>
          <p className="text-sm text-[#444444] my-2">
            Throughout these terms, “O2Mart,” “we,” “us,”, “our”, “
            <span className="text-Brand">www.o2mart.me</span>”, or “Website”
            refers to O2Mart LLC. When we refer to “you” or “user,” we mean any
            user of our website or
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">Disclaimer</h3>
          <p className="text-sm text-[#444444] mb-6">
            These terms and conditions govern the use of www.o2mart.net (the
            “Website”) and our digital marketplace services. By accessing or
            using our Website, you enter into a legally binding agreement with
            O2Mart. Your continued use of the Website constitutes acceptance of
            these terms and conditions, dated from your first use. If you
            disagree with any part of these terms, you must immediately
            discontinue using our Website.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">Modifications to Terms</h3>
          <p className="text-sm text-[#444444] mb-6">
            We reserve the right to modify these terms and conditions at our
            discretion. Changes become effective immediately upon posting to the
            Website. Your continued use following any modifications indicates
            acceptance of such changes. We may display additional terms for
            specific promotions, sales, or services, which will take precedence
            if they conflict with these general terms.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold mb-4">
            Website Information and Accuracy
          </h3>
          <p className="text-sm text-[#444444] ">
            While O2Mart strives to maintain accurate product information,
            specifications, and pricing on the Website, we make no guarantees or
            warranties, express or implied, regarding:
          </p>
          <ul className="list-disc list-inside text-sm text-[#444444] space-y-2">
            <li>– The reliability, accuracy, or completeness of information</li>
            <li>– The availability of products</li>
            <li>– The timeliness of updates</li>
            <li>– The suitability of products for specific purposes</li>
          </ul>
          <p className="text-sm text-[#444444] ">
            Users access and use the Website at their own risk. The Website is
            provided on an “AS IS, AS AVAILABLE” basis without warranties of any
            kind.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold mb-4">
            Website Information and Accuracy
          </h3>
          <p className="text-sm text-[#444444] font-bold">
            O2Mart and its affiliates, employees, agents, or content providers
            shall not be liable for:
          </p>
          <ul className="list-disc list-inside text-sm text-[#444444] space-y-2">
            <li>
              – Direct, indirect, special, consequential, or incidental damages
            </li>
            <li>– Data loss or system failures</li>
            <li>– Damages resulting from product use or misuse</li>
            <li>– Technical issues or website unavailability</li>
            <li>– Actions or omissions of third parties</li>
            <li>
              – Equipment damage or personal injury arising from Website use
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">Intellectual Property</h3>
          <p className="text-sm text-[#444444] mb-6">
            All Website content, including but not limited to text, graphics,
            logos, images, product descriptions, and software, is the exclusive
            property of O2Mart. You may view content for personal shopping
            purposes only. Any reproduction, modification, or distribution of
            Website content without written permission is strictly prohibited.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">
            Third-Party Content and Links
          </h3>
          <p className="text-sm text-[#444444] mb-6">
            O2Mart may display third-party content or provide links to external
            websites. We assume no responsibility for third-party content
            accuracy or external website availability. References to third-party
            products or services do not constitute endorsement by O2Mart.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">
            Privacy and Data Protection
          </h3>
          <p className="text-sm text-[#444444] mb-6">
            Your use of our Website is also governed by our Privacy Policy. By
            using the Website, you consent to our collection and use of personal
            information as outlined in the Privacy Policy.
          </p>
          <p className="text-sm text-[#444444] mb-6">Prohibited Activities</p>
          <p className="text text-[#444444] mb-6 font-bold">
            You agree not to:
          </p>
          <ul className="list-disc list-inside text-sm text-[#444444] space-y-2">
            <li>– Use the Website for unlawful purposes</li>
            <li>– Upload malicious code or harmful content</li>
            <li>– Attempt to gain unauthorized access to our systems</li>
            <li>– Scrape or harvest data from the Website</li>
            <li>– Interfere with the Website’s operation</li>
            <li>– Impersonate other users or entities</li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">Termination</h3>
          <p className="text-sm text-[#444444] mb-6">
            We may terminate or suspend access to our Website immediately,
            without prior notice, for conduct that we believe violates these
            terms or is harmful to other users, us, or third parties, or for any
            other reason at our discretion.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">Governing Law</h3>
          <p className="text-sm text-[#444444] mb-6">
            These terms shall be governed by and construed in accordance with
            the laws of the United Arab Emirates. Any disputes arising from
            these terms or Website use shall be subject to the exclusive
            jurisdiction of the courts of the UAE.
          </p>
          <p className="text text-[#444444] mb-6 font-bold">
            Contact Information
          </p>
          <p className="text text-[#444444] mb-6 ">
            For questions regarding these terms and conditions, please contact
            us (<span className="text-Brand">www.o2mart.net/contact-us</span>)
          </p>
        </div>
      </div>
    </Container>
  );
}
