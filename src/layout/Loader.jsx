import Lottie from "lottie-react";

import loader from "../assets/loader.json";

export default function Loader() {
  return (
    <div
      className={`flex justify-center items-center fixed inset-0 z-[1000000] bg-white`}
    >
      <Lottie animationData={loader} loop={true} />
    </div>
  );
}
