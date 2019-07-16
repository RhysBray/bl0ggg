import * as React from "react";
import styles from "./login.module.scss";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";

export interface IOwnProps {}

export interface IStateProps {}

export interface IState {
  path: string;
  email: string;
  password: string;
}

class Login extends React.Component<IOwnProps & IStateProps, IState> {
  public state = { path: "", email: "", password: "" };
  private handleChange = () => {
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({ path: "/bl0gggg" });
      })
      .catch(error => {
        this.setState({ path: "/" });
      });
    console.log(this.state.path);
  };

  private handleClick = () => {
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        alert("Successful sign in");
      })
      .catch(error => {
        alert("Your Email or Password are incorrect, please try again");
      });
    console.log(this.state.path);
  };
  public render() {
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <h1>Login below!</h1>
          <label>Email: </label>
          <input
            type="email"
            onChange={event => {
              this.setState({ email: event.target.value }, () =>
                this.handleChange()
              );
            }}
            className={styles.input}
            placeholder="*"
          />
          <label>Password: </label>
          <input
            type="password"
            onChange={event => {
              this.setState({ password: event.target.value }, () =>
                this.handleChange()
              );
            }}
            className={styles.input}
            placeholder="*"
          />
          <div className={styles.buttons}>
            <NavLink className={styles.link} to={this.state.path}>
              <div className={styles.button} onClick={this.handleClick}>
                Login
              </div>
            </NavLink>
            <NavLink className={styles.link} to="/registration">
              <div className={`${styles.button} ${styles.secondary}`}>
                Register
              </div>
            </NavLink>
          </div>
          <NavLink className={styles.link} to="/forgotten-password">
            <div className={`${styles.button} ${styles.tertiary}`}>
              Forgot Password...
            </div>
          </NavLink>
        </form>
      </div>
    );
  }
}

export default Login;
