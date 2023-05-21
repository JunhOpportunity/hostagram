import Image from "next/image";
import AfterLogin from "./components/AfterLogin";
import BeforeLogin from "./components/BeforeLogin";

export default function Home() {
  return (
    <>
      <BeforeLogin />
      <AfterLogin />
    </>
  );
}
