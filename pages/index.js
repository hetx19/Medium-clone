import Banner from "../components/Banner";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import Head from "next/head";

const styles = {
  wrapper: `mx-auto`,
  main: `flex justify-center`,
  container: `max-w-7xl flex-1`,
  postsList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`,
};

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Medium | Harshal Savaliya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.postsList}>
              <PostCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
