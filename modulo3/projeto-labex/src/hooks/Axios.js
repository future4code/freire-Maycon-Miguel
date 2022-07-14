import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


// funcionando lista de viagens disponiveis
export const GetTrips = () => {
  axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trips"
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Funcionando  detalhes de viagem na parte do admin
export const GetTripDetail = (id) => {
  // recebe o id de login ele muda de acordo com o email da conta
  // recebe um auth do email confirmando
  // id de maycon -> h8mYDjqnWpuP9H4Qy9Ld
  // auth -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik9CNDNBWGIxY1NROXNqU3BWWjRTIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2NTc3NDM2Njd9.eMtZTpBA7tXt9wFrUMhDcDvJXOJyjdalwjQYf2TdNaU
  const token = window.localStorage.getItem("token")

  axios
    .get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trip/${id}`,
      {
        headers: {
          auth: token,
        },
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {

      console.log(err);
    });
};

// funcionando
export const CreateTrip = () => {
  // o body vai entra com formulario

  const token = window.localStorage.getItem("token")


  const body = {

    name: "Ano novo em Mercúrio",
    planet: "Mercúrio",
    date: "31/12/2019",
    description: "Venha passar a virada pertinho do Sol!",
    durationInDays: 7
  }

  axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trips",
      body,
      {
        headers: {
          auth: token
        }
      })

    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};


// Funcionando
export const ApplytoTrip = (id) => {
  // o body vai entra com formulario

  const body = {
    name: "Astrodev",
    age: 20,
    applicationText: "Quero muuuuuuito ir!!!",
    profession: "Chefe",
    country: "Brasil"
  }
  axios
    .post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trips/${id}/apply`,
      body
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};



export const DeleteTrip = (id) => {
  // o body vai entra com formulario

  const token = window.localStorage.getItem("token")


  axios
    .delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trips/${id}`,
      {
        headers: {
          auth: token,
        }
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Login = (email, password) => {

  axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/login",
      {
        email: email,
        password: password,
      }
    )
    .then((response) => {
      console.log("foi")
      window.localStorage.setItem("token", response.data.token)
    })
    .catch((err) => {
      alert("senha errada")
      console.log(err);
    });
};
