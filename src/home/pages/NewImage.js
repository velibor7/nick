import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../shared/hooks/form-hook";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import ImageUpload from "../../shared/components/FormElements/ImageUpload";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import Spinner from "../../shared/components/UIElements/Spinner";
import Card from "../../shared/components/UIElements/Card";
import axios from "../../axios";

const NewImage = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: true,
      },
      description: {
        value: "",
        isValid: true,
      },
      image: {
        value: null,
        isValid: true,
      },
    },
    false
  );

  const history = useHistory();

  const imageSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const id = formState.inputs.img.value.split("/")[5];
      const directImageURL = `https://drive.google.com/uc?export=view&id=${id}`;

      const data = {
        title: formState.inputs.title.value,
        description: formState.inputs.description.value,
        img: directImageURL,
      };

      axios
        .post("/images.json", data)
        .then((res) => console.log(res))
        //.then((res) => history.push("/"))
        .catch((err) => console.log(err));
    } catch (err) {}
  };

  return (
    <Fragment>
      <Card className="cocktail-card">
        <form className="cocktail-form" onSubmit={imageSubmitHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            errorText="Please enter valid title"
            onInput={inputHandler}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            errorText="Please enter valid description"
            onInput={inputHandler}
          />
          <Input
            id="img"
            element="input"
            type="text"
            label="Image URL"
            errorText="Please enter valid title"
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            SUBMIT
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default NewImage;
