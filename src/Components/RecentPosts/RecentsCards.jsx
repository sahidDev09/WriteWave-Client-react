/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import RecentSingleCard from "./RecentSingleCard";

const RecentsCards = ({ blogs }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full container mx-auto"
    >
      <p className="text-center my-8 text-gray-500 md:w-[80%] flex mx-auto">
        Discover Fresh Perspectives: Explore Our Recent Blog Posts! Delve into a
        treasure trove of insights and stories with our latest blog updates.
        From captivating tales to expert opinions, there's something for every
        curious mind. Stay informed, entertained, and inspired – dive into our
        recent blog section today!
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <RecentSingleCard blogs={blog}></RecentSingleCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentsCards;
