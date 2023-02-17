import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  styled  from "styled-components"
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container=styled.div`
    width:100vw;
    height:100vh;
    background:url("https://wallpaperaccess.com/full/1640152.jpg")center;
    background-size:cover;
    display:flex;
     align-items:center;
    justify-content:flex-end;
`;
const Wrapper=styled.div`
    width:40%;
    padding:20px;
    background-color: white;
    margin-right:10px;
    ${mobile({ width: "60%" })}
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
    min-width:40%;
    width:20%;
    border:none;
    padding:10px;
    background-color:teal;
    color:white;
    cursor:pointer;
    align-item:center;
    justify-content:center;
    margin-bottom:10px;
    &:disabled{
        color:green;
        cursor:not-allowed;
    }
`;

const Link=styled.div`
    font-weight:150;
    font-size:15px;
    margin:5px 0px;
    text-decoration:underline;
    cursor:pointer;
`;
const Error=styled.span`
     color:red;
     font-size:15px;
`

const Login = () => {
    const[username,setUsername]=useState();
    const[password,setPassword]=useState();
    const dispatch=useDispatch()
    const{isFetching, error} = useSelector((state)=>state.user);
     
const handleClick=(e)=>{
    e.preventDefault();
    login(dispatch,{username,password});
}
  return (
    <Container>
     <Wrapper>
       <Title>SIGN IN</Title>
       <Form>
        <Input placeholder="user name"
        onChange={(e)=>setUsername(e.target.value)}
        />
        <Input placeholder="password"
        type="password"
        onChange={(e)=>setPassword(e.target.value)}
        />
        <Button onClick={handleClick} disabled={isFetching}>
            LOG IN
        </Button>
        {error && <Error>Something went wrong...</Error>}
        <Link>DO NOT REMEMBER THE PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
        </Form>    
    </Wrapper>  
    </Container>
  )
}

export default Login
