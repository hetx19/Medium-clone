import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import ReplitLogo from "../static/replit.png";
import TutorialImg from "../static/tutorial.jpg";
import CPLogo from "../static/cp.png";
import Qazi from "../static/qazi.jpg";
import JSLogo from "../static/jsLogo.png";

const styles = {
  wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
  accentedButton: `flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full`,
  searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full`,
  searchInput: `border-none outline-none bg-none w-full`,
  authorContainer: `my-[2rem]`,
  authorProfileImageContainer: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
  authorName: `font-semibold mb-[.2rem] mt-[1rem]`,
  authorFollowing: `text-[#787878]`,
  authorActions: `flex gap-[.6rem] my-[1rem]`,
  actionButton: `bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm`,
  recommendationContainer: ``,
  title: `my-[1rem]`,
  articlesContainer: ``,
  articleContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
  articleContent: `flex-[4]`,
  recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
  recommendationAuthorProfileImageContainer: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  recommendationAuthorName: `text-sm`,
  recommendationTitle: `font-bold`,
  recommendationThumbnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
  recommendationThumbnail: `object-cover`,
};

const Recommendations = ({ author }) => {
  return (
    <div className={styles.wrapper}>
      <div></div>
      Recommendations
    </div>
  );
};

export default Recommendations;
