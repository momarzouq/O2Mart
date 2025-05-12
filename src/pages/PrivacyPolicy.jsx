import React from "react";
import Container from "../UI/Container";
import { Breadcrumb } from "../UI/Breadcrumb";

export default function PrivacyPolicy() {
  return (
    <Container>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <div className="mt-12 mb-4 space-y-6 ">
        <h3 className="text-4xl font-bold">Privacy and Cookies Policy</h3>
        <div>
          <p className="text-sm text-[#444444] mb-6">
            O2Mart [LLC] referred to hereafter as
            <span className="text-Brand">www.o2mart.net</span> is incorporated
            in the United Arab Emirates under license number [LICENSE NUMBER],
            operating the website www.o2mart.net. Our registered office is
            located in [REGISTERED ADDRESS], the United Arab Emirates. 
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">Privacy Policy</h3>
          <p className="text-sm text-[#444444] mb-6">
            <span className="text-Brand">www.o2mart.net</span> is committed to
            ensuring that your privacy is protected. Should we ask you to
            provide certain information by which you can be identified when
            using this website, then you can be assured that it will only be
            used in accordance with this privacy statement.
          </p>
          <p className="text-sm text-[#444444] mb-6">
            www.o2mart.net may change this policy from time to time by updating
            this page. You should check this page from time to time to ensure
            that you are up-to-date with any changes.
          </p>
          <p className="text-sm text-[#444444] mb-6">
             We collect personal information that you voluntarily provide to us
            when you:
          </p>
          <ul className="list-disc list-inside text-sm text-[#444444] space-y-2 mt-4">
            <li> Register on our website</li>
            <li>Place orders for auto parts</li>
            <li>Submit direct requests for specific parts</li>
            <li>Make payments through our platform</li>
            <li>Contact our customer service</li>
          </ul>
          <p className=" text-[#444444] font-bold mt-4">
            This information may include but is not limited to:
          </p>
          <ul className="list-disc list-inside text-sm text-[#444444] space-y-2 mt-4">
            <li>
              Full name and contact details (email address, phone number,
              delivery address)
            </li>
            <li>Payment information</li>
            <li>Vehicle information (make, model, year, VIN number)</li>
            <li>Account login credentials</li>
            <li>Communication preferences</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold mb-4">
            Automatically Collected Information
          </h3>
          <p className="text-sm text-[#444444] ">
            When you visit our website, we automatically collect certain
            information about your device and usage patterns, including:
          </p>
          <ul className="list-disc list-inside text-sm text-[#444444] space-y-2">
            <li> IP address and device identifiers</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and browsing patterns</li>
            <li>Time spent on pages</li>
            <li>Access times and dates</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold mb-4">
            How We Use Your Information
          </h3>
          <p className="text-sm text-[#444444] ">
            We require this information to understand your needs and provide you
            with a better service, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-sm text-[#444444] space-y-2">
            <li>Process and fulfill your auto parts orders</li>
            <li>Manage your account and provide customer support</li>
            <li>Send order confirmations and updates</li>
            <li>Process payments and prevent fraud</li>
            <li>Internal record keeping</li>
            <li>Improve our product catalog and services</li>
            <li>Customize your shopping experience</li>
            <li>Send relevant marketing communications (with your consent)</li>
            <li>To ensure we comply with legal obligations</li>
          </ul>
          <p className="text-sm text-[#444444] ">
            From time to time, we may also use your information to contact you
            for market research purposes. We may contact you by email, phone,
            fax or mail. We may use the information to customize the website
            according to your interests.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold mb-4">Data Security</h3>
          <p className="text-sm text-[#444444] ">
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorized access or disclosure, we have put in
            place suitable physical, electronic, and managerial procedures to
            safeguard and secure the information we collect online.
          </p>
          <p className="text-sm text-[#444444] ">
            Your contact information including but not limited to name, email,
            telephone, and company are given with your full consent to store
            them in our records.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold mb-4">Cookies Policy</h3>
          <p className="text-sm text-[#444444] ">
            A cookie is a small file which asks permission to be placed on your
            computer’s hard drive. The file is added and the cookie helps
            analyze web traffic or lets you know when you visit a particular
            site. Cookies allow web applications to respond to you as an
            individual. The web application can tailor its operations to your
            needs, likes and dislikes by gathering and remembering information
            about your preferences.
          </p>
          <p className="text-sm text-[#444444] ">
            We use traffic log cookies to identify which pages are being used.
            This helps us analyze data about web page traffic and improve our
            website in order to tailor it to customer needs. We only use this
            information for statistical analysis purposes and then the data is
            removed from the system.
          </p>
          <p className="text-sm text-[#444444] ">
            Most web browsers automatically accept cookies, but you can usually
            modify your browser settings to decline cookies if you prefer. This
            may prevent you from taking full advantage of the website.
          </p>
          <p className=" text-[#444444] font-bold mt-4">
            Links to other websites
          </p>
          <p className="text-sm text-[#444444] ">
            Our website contains links to other websites of interest. However,
            once you have used these links to leave our site, you should note
            that we do not have any control over that other website. Therefore,
            we cannot be responsible for the protection and privacy of any
            information which you provide whilst visiting such sites and such
            sites are not governed by this privacy statement. You should
            exercise caution and look at the privacy statement applicable to the
            website in question.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold mb-4">
            Controlling your personal information
          </h3>
          <p className="text-sm text-[#444444] ">
            If you have previously agreed to us using your personal information
            for direct marketing purposes, you may change your mind at any time
            by writing to or emailing us.
          </p>
          <p className="text-sm text-[#444444] ">
            We will not sell, distribute, or lease your personal information to
            third parties unless we have your permission or are required by law
            to do so. We may use your personal information to send you
            promotional information about third parties which we think you may
            find interesting if you tell us that you wish this to happen.
          </p>
          <p className="text-sm text-[#444444] ">
            You may request details of personal information which we hold about
            you. A small fee will be payable. If you would like a copy of the
            information held on you please contact us through this form
            www.o2mart.net
          </p>
          <p className="text-sm text-[#444444] ">
            If you believe that any information we are holding on you is
            incorrect or incomplete, please write to or email us as soon as
            possible at the above address. We will promptly correct any
            information found to be incorrect.
          </p>
          <p className=" text-[#444444] font-bold mt-4">
            Links to other websites
          </p>
          <p className="text-sm text-[#444444] ">
            If there are any questions regarding this privacy policy, please
            contact us using this contact form on our website:
            <span className="text-Brand ">https://o2mart.net/contact-us</span>
          </p>
        </div>
      </div>
    </Container>
  );
}
