import * as React from "react";
import styles from "./forgotPassword.module.scss";
import { NavLink } from "react-router-dom";

export interface IOwnProps {}

export interface IStateProps {}

export interface IState {}

class ForgotPassword extends React.Component<IOwnProps & IStateProps, IState> {
  handleClick = () => {};
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
              email = event.target.value;
              console.log(email);
            }}
            className={styles.input}
            placeholder="*"
          />
          <div className={styles.buttons}>
            <div className={styles.button} onClick={this.handleClick}>
              Send Email
            </div>
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
