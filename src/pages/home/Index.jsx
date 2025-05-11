import Main from "./main/Main";
import Hero from "./hero/Hero";
import { useEffect, useState } from "react";
import { DiscountModal } from "../../components/DiscountModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero />
      <Main />
      <DiscountModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
