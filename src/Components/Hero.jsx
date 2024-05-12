import Lottie from "lottie-react";
import heroAnim from "../assets/heroLottie.json";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 items-center gap-5 container mx-auto mt-10">
      <div>
        <h1 className=" lg:text-7xl md:text-6xl text-4xl font-black italic text-center md:text-start">
          Let your <br />
          <span className="strockText lg:text-8xl text-5xl uppercase text-red-400">
            imagination
          </span>
          <br />
          <span className=" lg:text-6xl font-bold text-gray-700">
            set sail on the endless horizon of WriteWave!
          </span>
        </h1>
      </div>

      <div>
        <Lottie animationData={heroAnim}></Lottie>
      </div>
    </div>
  );
};

export default Hero;
