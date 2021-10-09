import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { BiPhotoAlbum } from "react-icons/bi";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineFileGif } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import classes from "./posts.module.css";

const posts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className={classes.createPostWrapper}>
        <div className={classes.header}>
          <div className={classes.left}>
            <div className={classes.buttonWrapper}>
              <BsFillPencilFill className={classes.header_icon} />
              <h6 style={{ margin: "0", paddingLeft: "5px" }}>Compose Post</h6>
            </div>
            <div className={classes.buttonWrapper}>
              <BiPhotoAlbum className={classes.header_icon} />
              <h6 style={{ margin: "0", color: "#175ae2", paddingLeft: "5px" }}>
                Photo/Video Album
              </h6>
            </div>
            <div className={classes.buttonWrapper}>
              <AiOutlineVideoCameraAdd className={classes.header_icon} />
              <h6 style={{ margin: "0", color: "#175ae2", paddingLeft: "5px" }}>
                Live Video
              </h6>
            </div>
          </div>
          <div className={classes.right}>
            <AiOutlineClose />
          </div>
        </div>
        <form>
          <div className={classes.textArea}>
            <div className={classes.avatar}>
              <BsPersonFill style={{ fontSize: "24" }} />
            </div>

            <input
              type="text"
              placeholder="What's on your mind, XYZ?"
              className={classes.text}
            />
          </div>
          <div className={classes.button}>
            <AiOutlineFileGif style={{ fontSize: "30px", color: "#175ae2" }} />
            <p style={{ margin: "0", paddingLeft: "5px" }}>GIF</p>
          </div>
          <div className={classes.postButton}>
            <div className={classes.button}>
              <AiFillLock style={{ fontSize: "30px" }} />
              <p style={{ margin: "0", paddingLeft: "5px" }}>Only Me</p>
            </div>
            <button
              className={classes.postBtn}
              type="submit"
              onClick={handleSubmit}
            >
              POST
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default posts;
