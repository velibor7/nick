import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import { useForm } from "../../shared/hooks/form-hook";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";

import "./Auth.css";

const Auth = () => {
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: true,
      },
      password: {
        value: "",
        isValid: true,
      },
    },
    true
  );

  const firebase = useFirebaseApp();
  const history = useHistory();
  const loginHandler = async (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(
        formState.inputs.email.value,
        formState.inputs.password.value
      )
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Card className="auth__container">
        <form onSubmit={loginHandler}>
          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            onInput={inputHandler}
          />

          <Button type="submit" disabled={!formState.isValid}>
            LOGIN
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default Auth;
