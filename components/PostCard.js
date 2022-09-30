import Image from "next/image";
import Logo from "../static/logo.png";
import Link from "next/link";
import { FiBookmark } from "react-icons/fi";

const styles = {
  wrapper: `max-w-[46rem] h-[10rem] flex items-center gap-[1rem] cursor-pointer`,
  postDetails: `flex-[2.5] flex flex-col`,
  authorContainer: `flex gap-[.4rem]`,
  authorName: `font-semibold`,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage: `object-cover`,
  title: `font-bold text-2xl`,
  briefing: `text-[#787878]`,
  detailsContainer: `flex items-center justify-between text-[#787878]`,
  articleDetails: `my-2 text-[.8rem]`,
  bookmarkContainer: `cursor-pointer`,
  category: `bg-[#F2F3F2] p-1 rounded-full`,
  thumbnailContainer: `flex-1`,
};

const PostCard = () => {
  return (
    <Link href={`/post/1`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={Logo}
                className={styles.authorImage}
                height={40}
                width={40}
                alt=""
              />
            </div>

            <div className={styles.authorName}>Harshal Savaliya</div>
          </div>

          <h1 className={styles.title}>
            7 Free Tools That Will Make You More Productive In 2022
          </h1>
          <div className={styles.briefing}>
            Porductivity is a skill that can be learned
          </div>

          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              Jun 15 · 5 min read ·
              <span className={styles.category}>Porductivity</span>
            </span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>

        <div className={styles.thumbnailContainer}>
          <Image
            //   src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
            src={Logo}
            alt="thumbnail"
            height={100}
            width={100}
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
