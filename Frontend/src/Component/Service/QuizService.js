import axios from 'axios';

const userSignUp = ()=>{
    return axios.post("http://localhost:8080/users/signup");
}

const userSignIn = ()=>{
    return axios.post("http://localhost:8080/users/signin",);
}