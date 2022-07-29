import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../components/URL/BASE_URL";


export const Login = (email, password) => {

    axios
      .post(
        `${BASE_URL}/users/login`,
        {
          email: email,
          password: password,
        }
      )
      .then((response) => {
        window.localStorage.setItem("token", response.data.token)
      })
      .catch((err) => {
        alert("senha errada")
        console.log(err);
      });
  };



export const outraCoisa = (body) => {

    const token = window.localStorage.getItem("token")

    axios
      .post(
        `${BASE_URL}`,
        body,{auth: token}
        )
  
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  export const GetPost = () => {

    const token = window.localStorage.getItem("token")

    const [getTripsList, setGetTripsList]  = useState([])

    useEffect(() => {

    axios
      .get(
        `${BASE_URL}/posts`,{headers : {Authorization: token}}
        )
      .then((response) => {
        setGetTripsList(response.data)
      })
      .catch((err) => {
        console.log(err);
      });

    },[] )

  return getTripsList

}

export const GetPostComments = () => {

  const token = window.localStorage.getItem("token")

  const id =  window.localStorage.getItem("IdPost")


  const [getTripsList, setGetTripsList]  = useState([])

  useEffect(() => {

  axios
    .get(
      `${BASE_URL}/posts/${id}/comments`,{headers : {Authorization: token}}
      )
    .then((response) => {
      setGetTripsList(response.data)
    })
    .catch((err) => {
      console.log(err);
    });

  },[] )

return getTripsList

}


export const CreatePost = (dados) => {

  const token = window.localStorage.getItem("token")


  const title = dados.title

  const post = dados.comentario


  useEffect(() => {

  axios
    .post(
      `${BASE_URL}/posts`, {body:{title: title, body: post}},{headers : {Authorization: token}}
      )
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err);
    });

  },[] )


}



export const CreateComment = (dados) => {

  const token = window.localStorage.getItem("token")

  const id =  window.localStorage.getItem("IdPost")


  const [getTripsList, setGetTripsList]  = useState([])

  useEffect(() => {

  axios
    .get(
      `${BASE_URL}/posts/${id}/comments`,{body:{ body: dados.comentario}},{headers : {Authorization: token}}
      )
    .then((response) => {
      setGetTripsList(response.data)
    })
    .catch((err) => {
      console.log(err);
    });

  },[] )

return getTripsList

}
