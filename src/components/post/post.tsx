import * as React from "react";
import styles from "./post.module.scss";
import { IPost } from "../../containers/postContainer/postContainer";

export interface IProps {
  post: IPost;
}

export interface IState {}

class Post extends React.Component<IProps, IState> {
  render() {
    return (
      <article className={styles.post}>
        <h2 className={styles.title}>{this.props.post.title}</h2>
        <h3 className={styles.article}>{this.props.post.article}</h3>
        <p className={styles.poster}>{this.props.post.poster}</p>
      </article>
    );
  }
}

export default Post;
