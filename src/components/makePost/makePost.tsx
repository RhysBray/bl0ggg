import * as React from "react";
import styles from "./makePost.module.scss";
import { toggleMakePost } from "../../reducers/generalReducer";
import { IStore } from "../../reducers";
import { connect } from "react-redux";
import { firestore } from "../../firebase";

export interface IOwnProps {}

export interface IStateProps {
  toggleMakePost: () => void;
  isHidden: boolean;
}

export interface IState {}

class MakePost extends React.Component<IOwnProps & IStateProps, IState> {
  render() {
    let showOrNot;
    this.props.isHidden ? (showOrNot = "") : (showOrNot = styles.show);

    let title = "";
    let article = "";
    let user = "Anon";

    const postBlog = () => {
      if (title.length > 0 && article.length > 0) {
        let blogPost = {
          title: title,
          article: article,
          poster: user
        };
        firestore
          .collection("posts")
          .doc()
          .set({
            blogPost
          })
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
      }
    };
    const handleClick = () => {
      this.props.toggleMakePost();
      postBlog();
    };

    return (
      <div className={`${styles.container} ${showOrNot}`}>
        <article className={styles.post}>
          <div className={styles["exit-area"]}>
            <div onClick={this.props.toggleMakePost} className={styles.exit}>
              X
            </div>
          </div>
          <label>Title: </label>
          <input
            onChange={event => {
              title = event.target.value;
            }}
            className={styles.title}
          />
          <label>What do you want to say? </label>
          <textarea
            onChange={event => {
              article = event.target.value;
            }}
            className={styles.article}
          />
          <div className={styles["post-button"]} onClick={handleClick}>
            Post Blog!
          </div>
        </article>
      </div>
    );
  }
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return { isHidden: state.storeState.isHidden };
};

const mapDispatchToProps = { toggleMakePost };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MakePost);
