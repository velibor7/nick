import React, { useState, useContext, Fragment } from "react";

import Card from "../../shared/components/UIElements/Card";
import Spinner from "../../shared/components/UIElements/Spinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import { AuthContext } from "../../shared/context/auth-context";
import { useForm } from "../../shared/hooks/form-hook";

import axios from "../../axios";

import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);

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

  const loginHandler = async (event) => {
    event.preventDefault();
    // console.log(event);
    try {
      axios
        .post(
          "/users.json",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          })
        )
        .then((res) => {
          auth.login(res.userId, res.token);
        })
        .catch((err) => console.log(err));

      auth.login();
    } catch (err) {}
  };

  return (
    <Fragment>
      <Card>
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
