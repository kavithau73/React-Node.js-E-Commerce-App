
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container=styled.div`
    width:100vw;
    height:100vh;
    background:url("https://wallpaperaccess.com/full/1640132.jpg");
     background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
    
`;
const Wrapper=styled.div`
    width:40%;
    padding:20px;
    background-color:white;
    margin-right:40%;
    ${mobile({ width: "80%" })}
`;
const Title=styled.form`
    font-size:24px;
    font-weight:1000;
`;
const Form=styled.h1``;
const Input=styled.input`
    flex:1;
    min-width:60%;
    margin:20px 10px 0px 0px;
    padding:10px;
`;
const Button=styled.button`
    min-width:60%;
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
`;


const Register = () => {
  return (
    <Container>
     <Wrapper>
       <Title>CREATE AN ACCOUNT</Title>
       <Form>
        <Input placeholder="name"/>
        <Input placeholder="last name"/>
        <Input placeholder="username"/>
        <Input placeholder="email"/>
        <Input placeholder="password"/>
        <Input placeholder="confirm password"/>
        <Button>CREATE</Button>
        </Form>    
    </Wrapper> 
    </Container>
  )
}

export default Register
