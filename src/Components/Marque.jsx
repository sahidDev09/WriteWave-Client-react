import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div className=" my-10">
      <Marquee
        className=" md:text-7xl text-4xl font-bold italic"
        direction="left">
        Welcome to <span className=" text-green-500">WriteWave</span>, where
        words dance on the crest of creativity. Explore our digital shores,
        where every post is a journey and every reader a fellow traveler.
        Unleash your imagination, find your voice, and join our vibrant
        community of writers and readers. Lets make waves together!
      </Marquee>
      <Marquee
        className=" md:text-8xl text-5xl font-bold italic text-gray-600"
        direction="rigth">
        Embrace the rhythm of inspiration at{" "}
        <span className=" text-red-500">WriteWave</span>. Dive into a sea of
        captivating stories, thought-provoking articles, and heartfelt poetry.
        Whether you are here to share your voice or discover new perspectives,
        our platform offers a sanctuary for creativity and connection. Join us
        and let your words sail.
      </Marquee>
    </div>
  );
};

export default Marque;
