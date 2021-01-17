import { Section } from "../../Section/Section";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";
import { messageStatus } from "../../../services/Newsletter";
import { useState } from "react";
import { Text } from "../../Text/Text";
import "./Newsletter.scss";

export function Newsletter() {
  const inicialFormState = {
    email: "",
    name: "",
  };

  const [form, setForm] = useState(inicialFormState);
  const [isVisible, setVisible] = useState(true);
  const [isMessageVisible, setMessageVisible] = useState(false);
  const [isMessageEmailVisible, setMessageEmailVisible] = useState(false);

  function handleChange(name, value) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function onSubmit() {
    if (form.name === "") {
      setMessageVisible(true);
    } else {
      setMessageVisible(false);
      const response = await messageStatus(form);

      if (response.success === false || form.email === "") {
        setMessageEmailVisible(true);
      } else {
        setMessageEmailVisible(false);
        setVisible(false);
      }
    }
  }

  function newMessage() {
    form.name = "";
    form.email = "";

    return (
      <>
        <Text
          text="Seu e-mail foi cadastrado com sucesso!"
          className="success-text"
        />
        <Text
          text="A partir de agora você receberá as novidades e ofertas exclusivas."
          className="information-text"
        />
        <Button
          onClick={() => setVisible(true)}
          text="Cadastrar novo e-mail"
          className="btn-register"
        />
      </>
    );
  }

  function fieldMessageName() {
    return (
      <Text text="Preencha com seu nome completo" className="warning-text" />
    );
  }

  function fieldMessageEmail() {
    return (
      <Text text="Preencha com um e-mail válido" className="warning-text" />
    );
  }

  return (
    <Section className="container">
      {isVisible ? (
        <>
          <Text
            text="Participe de nossas news com promoções e novidades!"
            className="title"
          />
          <Section className="form-container">
            <Input
              type="text"
              placeholder="Digite seu nome"
              required={true}
              setValue={(value) => handleChange("name", value)}
              value={form.name}
              className="input"
            />

            <Input
              type="email"
              placeholder="Digite seu email"
              required={true}
              setValue={(value) => handleChange("email", value)}
              value={form.email}
              className="input"
            />
            <Button
              onClick={onSubmit}
              text="Eu quero!"
              className="btn-submit"
            />
          </Section>
          <Section className="container-warning">
            {isMessageVisible ? fieldMessageName() : ""}
            {isMessageEmailVisible ? fieldMessageEmail() : ""}
          </Section>
        </>
      ) : (
        newMessage()
      )}
    </Section>
  );
}
