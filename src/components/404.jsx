import NotFound from "../assets/404.svg";
import homepage from "../assets/homepage.png";
import Container from "../UI/Container";
export default function Not404() {
  return (
    <Container>
      <div className="flex justify-center items-center mt-28">
        <div className="flex flex-col gap-4 md:gap-2 items-start justify-start">
          <h3 className="font-medium text-6xl md:text-3xl text-Brand">Oops!</h3>
          <p className="font-medium text-4xl md:text-xs">Page Not Found</p>
          <img src={homepage} alt="Home Page" />
        </div>
        <div className="max-w-[700px] md:max-w-[250px] shrink-0">
          <img src={NotFound} alt="NotFound" />
        </div>
      </div>
    </Container>
  );
}
