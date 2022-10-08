import Head from "next/head";
import { useRouter } from "next/router";
import ReadersNav from "../../components/ReadersNav";
import ArticleMain from "../../components/ArticleMain";
import Recommendations from "../../components/Recommendations";
import { useState, useEffect, useContext } from "react";
import { MediumContext } from "../../context/MediumContext";

const styles = {
  wrapper: ``,
  content: `flex`,
};

const Post = () => {
  const router = useRouter();
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);
  const { posts, users } = useContext(MediumContext);

  useEffect(() => {
    if (posts.length === 0) {
      return;
    }
    setPost(posts.find((post) => post.id === router.query.slug));

    setAuthor(users.find((user) => user.id === post.data?.author));
  }, [post]);

  return (
    <div>
      <main className={styles.content}>
        <Head>
          <title>Medium | Harshal Savaliya</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ReadersNav author={author} />
        <ArticleMain post={post} author={author} />
        <Recommendations author={author} />
      </main>
    </div>
  );
};

export default Post;
