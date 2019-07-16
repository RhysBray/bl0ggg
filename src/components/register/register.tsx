import * as React from "react";
import styles from "./register.module.scss";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";

export interface IOwnProps {}

export interface IStateProps {}

export interface IState {
  email: string;
  password: string;
  confirmPassword: string;
}

class Register extends React.Component<IOwnProps & IStateProps, IState> {
  public state = { email: "", password: "", confirmPassword: "" };
  private handleClick = () => {
    if (
      this.state.password === this.state.confirmPassword &&
      this.state.password !== "" &&
      this.state.email !== ""
    ) {
      auth
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          alert(
            "User with email " +
              this.state.email +
              " has been successfully registered."
          );
        })
        .catch(error => {
          alert(
            "There was an error registering your account, please check if your email is already registered with us. Thank you."
          );
        });
    } else {
      alert("The passwords do not match");
    }
  };
  public render() {
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <h1>Register a new account!</h1>
          <label>Email: </label>
          <input
            type="email"
            onChange={event => {
              this.setState({ email: event.target.value });
              console.log(this.state.email);
            }}
            className={styles.input}
            placeholder="*"
          />
          <label>Password: </label>
          <input
            type="password"
            onChange={event => {
              this.setState({ password: event.target.value });
              console.log(this.state.password);
            }}
            className={styles.input}
            placeholder="*"
          />
          <label>Confirm Password: </label>
          <input
            type="password"
            onChange={event => {
              this.setState({ confirmPassword: event.target.value });
              console.log(this.state.confirmPassword);
            }}
            className={styles.input}
            placeholder="*"
          />
          <div className={styles.buttons}>
            <NavLink
              className={styles.link}
              to="/login"
              onClick={this.handleClick}
            >
              <div className={styles.button}>Register</div>
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

export default Register;
