import Main from "./main/Main";
import Hero from "./hero/Hero";
import { DiscountModal } from "../../components/DiscountModal";
import { useDiscountModalStore } from "../../store/useDiscountModalStore";

export default function Home() {
  const { showModal } = useDiscountModalStore();
  return (
    <>
      <Hero />
      <Main />
      {showModal && <DiscountModal />}
    </>
  );
}
