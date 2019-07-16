import * as React from "react";
import styles from "./forgotPassword.module.scss";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";

export interface IOwnProps {}

export interface IStateProps {}

export interface IState {
  email: string;
}

class ForgotPassword extends React.Component<IOwnProps & IStateProps, IState> {
  public state = { email: "" };

  private handleClick = () => {
    if (this.state.email !== "") {
      auth
        .sendPasswordResetEmail(this.state.email)
        .then(() => alert("Password reset email has been sent"))
        .catch(error => {
          alert("Invalid email, please try again.");
        });
    }
  };

  public render() {
    let email = "";
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <h1>Enter the email of your account!</h1>
          <label>Email: </label>
          <input
            type="email"
            onChange={event => {
              this.setState({ email: event.target.value });
              console.log(email);
            }}
            className={styles.input}
            placeholder="*"
          />
          <div className={styles.buttons}>
            <NavLink className={styles.link} to="/login">
              <div className={styles.button} onClick={this.handleClick}>
                Send Email
              </div>
            </NavLink>
            <NavLink className={styles.link} to="/login">
              <div className={`${styles.button} ${styles.secondary}`}>Back</div>
            </NavLink>
          </div>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
