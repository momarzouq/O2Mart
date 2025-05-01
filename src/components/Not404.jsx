import React from "react";
import NotFound from "../assets/404.svg";
import homepage from "../assets/homepage.png";
import Container from "../UI/Container";
export default function Not404() {
  return (
    <Container>
      <div className="flex justify-center gap-20 md:gap-0 items-center mt-28">
        <div className="flex flex-col gap-4 md:gap-2 items-start justify-start">
          <h3 className="text-6xl md:text-3xl text-red-600">Oops!</h3>
          <p className="text-3xl md:text-xs">Page Not Found</p>
          <img src={homepage} alt="Home Page" />
        </div>
        <div className="max-w-[600px] md:max-w-[250px] shrink-0">
          <img src={NotFound} alt="NotFound" />
        </div>
      </div>
    </Container>
  );
}
