import { useState } from "react";
 import { Form, Container, Title, AreaInput} from "../../../styles/styles.signin";
export const SignIn =()=>{
   


  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[error, setError] = useState("");
   

 const handleSignUp = e => {
    e.preventDefault();
    alert("Eu vou te registrar");
  };
    return(
        <>
        <Container>
        <AreaInput>
        <Title>Login</Title>
        <Form>
            
          <input
            type="text"
            placeholder="Nome de usuário"
            
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
           
          />
          <input
            type="password"
            placeholder="Senha"
            
          />
          <button type="submit">Entrar </button>
          <hr />
          
        </Form>
        </AreaInput>
      </Container>
      </>
    )
}