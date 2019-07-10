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
  public componentDidMount = () => {
    let blogPosts: IPost[];
    blogPosts = [];
    firestore
      .collection("posts")
      .get()
      .then(blogs => {
        blogs.forEach(post => {
          console.log(post.data());
          blogPosts.push(post.data().blogPost);
          this.setState({ posts: blogPosts });
        });
      });
  };

  //////////////////// posting works like this //////////////////////
  // posts.map(blogPost => {
  //   firestore
  //     .collection("posts")
  //     .doc()
  //     .set({
  //       blogPost
  //     })
  //     .then(function() {
  //       console.log("Document successfully written!");
  //     })
  //     .catch(function(error) {
  //       console.error("Error writing document: ", error);
  //     });
  // });
  ///////////////////////////////////////////////////////////////////

  render() {
    return this.state.posts.map((post, index) => (
      <Post key={index} post={post} />
    ));
  }
}

export default PostContainer;
