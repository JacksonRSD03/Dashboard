import { useState } from "react";
import { Forms, Container, Title, AreaInput} from "../../../styles/styles.signin";
import {Formik, Field, Form} from "formik"
import * as  yup from "yup"

export const SignIn =()=>{
  
  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[error, setError] = useState("");
   

 const handleSignUp = (values) => 
    {
     return console.log(values);
   };
  const validationLogin = yup.object().shape({
    email: yup
    .string()
    .min(8)
    .required(),

    password: yup
    .string()
    .min(8)
    .required(),
  })
    return(
        <>
        <Container>
        <AreaInput>
        <Title>Login</Title>
        <Formik
              initialValues={{}}  
              onSubmit={handleSignUp}
              validationSchema={validationLogin}                     
          >

        <Form className="login-form">
            
          <Field
            name="email"
            placeholder="Digite seu CPF"
            className="form-field"
          />
         
          <Field
            name="password"
            placeholder="Senha"
            className="form-field"
          />
          <button type="submit">Entrar </button>
          <hr />
          
        </Form>
        </Formik>
        </AreaInput>
      </Container>
      </>
    )
}