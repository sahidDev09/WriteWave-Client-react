import Hero from "../Components/Hero";
import Marque from "../Components/Marque";
import RecentsCards from "../Components/RecentPosts/RecentsCards";

const Home = () => {
  return <divb>
    <Hero/>
    <h1 className=" text-3xl text-center my-10">Recent Blogs</h1>
    <RecentsCards/>
    <Marque></Marque>
  </divb>;
};

export default Home;
