import * as React from "react";
import Header from "../../components/header";
import MakePost from "../../components/makePost";
import PostContainer from "../postContainer";

export interface IProps {}

export interface IState {}

class InnerApp extends React.Component<IProps, IState> {
  public render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <MakePost />
          <PostContainer />
        </main>
      </React.Fragment>
    );
  }
}

export default InnerApp;
