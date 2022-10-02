import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { MediumContext } from "../context/MediumContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const styles = {
  wrapper: `w-[70rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll`,
  title: `my-[2rem] font-bold text-3xl`,
  smallField: `w-full flex justify-between gap-[1rem]`,
  largeField: ``,
  fieldTitle: `flex-1 text-end`,
  inputContainer: `flex-[5] h-min border-2 border-[#787878]`,
  inputField: `w-full border-0 outline-none bg-transparent`,
  accentedButton: `bg-black text-white py-2 px-4 rounded-full`,
};

const UploadModal = () => {
  const router = useRouter();
  const { currentUser } = useContext(MediumContext);

  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [category, setCategory] = useState("");
  const [postLength, setPostedLength] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [body, setBody] = useState("");

  const addPostToFirebase = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "articles"), {
      bannerImage: bannerImage,
      body: body,
      category: category,
      brief: brief,
      postedOn: serverTimestamp(),
      postLength: Number(postLength),
      title: title,
      author: currentUser.email,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Create a New Post</div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Title</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Brief</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
            type="text"
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Banner Image URL</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            value={bannerImage}
            onChange={(e) => setBannerImage(e.target.value)}
            type="text"
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Category</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>
          Estimated Read Lenght (in minutes)
        </span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            value={postLength}
            onChange={(e) => setPostedLength(e.target.value)}
            type="text"
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Article Text</span>
        <span className={styles.inputContainer}>
          <textarea
            className={styles.inputField}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={12}
          />
        </span>
      </div>

      <button onClick={addPostToFirebase} className={styles.accentedButton}>
        Submit
      </button>
    </div>
  );
};

export default UploadModal;
