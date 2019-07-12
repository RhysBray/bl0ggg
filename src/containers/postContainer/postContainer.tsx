import * as React from "react";
import Post from "../../components/post";
// import { posts } from "../../fake-data";
import { firestore } from "../../firebase";

export interface IProps {}

export interface IState {
  posts: IPost[];
}

export interface IPost {
  title: string;
  article: string;
  poster: string;
}

class PostContainer extends React.Component<IProps, IState> {
  state = { posts: [] };

  public getPosts = () => {
    let blogPosts: IPost[];
    blogPosts = [];
    firestore
      .collection("posts")
      .get()
      .then(blogs => {
        blogs.forEach(post => {
          blogPosts.push(post.data().blogPost);
          this.setState({ posts: blogPosts });
        });
      });
  };

  public componentDidMount = () => {
    this.getPosts();
  };
  // public componentDidUpdate = () => {
  //   this.getPosts();
  //   console.log("updated");
  //   setTimeout("5000ms");
  // };

  render() {
    return this.state.posts.map((post, index) => (
      <Post key={index} post={post} />
    ));
  }
}

export default PostContainer;
