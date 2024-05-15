import Hero from "../Components/Hero";
import Marque from "../Components/Marque";
import Newsletter from "../Components/Newsletter";
import RecentsCards from "../Components/RecentPosts/RecentsCards";
import OutTeam from "../Components/OutTeam";

const Home = () => {
  return (
    <div className=" m-2 md:m-0">
      <Hero />
      <h1 className=" text-3xl text-center mt-10">Recent Blogs</h1>
      <RecentsCards />
      <Marque></Marque>
      <OutTeam />
      <Newsletter />
    </div>
  );
};

export default Home;
