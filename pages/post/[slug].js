import Head from "next/head";
import { useRouter } from "next/router";
import ReadersNav from "../../components/ReadersNav";
import ArticleMain from "../../components/ArticleMain";
import Recommendations from "../../components/Recommendations";

const styles = {
  wrapper: ``,
  content: `flex`,
};

const Post = () => {
  const router = useRouter();
  const author = "Harshal Savaliya";

  return (
    <div>
      <main className={styles.content}>
        <Head>
          <title>Medium | Harshal Savaliya</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ReadersNav />
        <ArticleMain />
        <Recommendations author={author} />
      </main>
    </div>
  );
};

export default Post;
