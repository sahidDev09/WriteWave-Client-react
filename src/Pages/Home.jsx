import { useLoaderData } from "react-router-dom";
import Hero from "../Components/Hero";
import Marque from "../Components/Marque";
import Newsletter from "../Components/Newsletter";
import RecentsCards from "../Components/RecentPosts/RecentsCards";
import OutTeam from "../Components/OutTeam";

const Home = () => {
  const blogs = useLoaderData();
  console.log(blogs);

  return (
    <div>
      <Hero />
      <h1 className=" text-3xl text-center mt-10">Recent Blogs</h1>
      <RecentsCards blogs={blogs} />
      <Marque></Marque>
      <OutTeam />
      <Newsletter />
    </div>
  );
};

export default Home;
