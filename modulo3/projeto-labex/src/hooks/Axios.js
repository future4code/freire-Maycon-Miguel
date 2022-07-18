import axios from "axios";
import { useEffect, useState } from "react";


// funcionando lista de viagens disponiveis
export const GetTrips = () => {
  
  const [getTripsList, setGetTripsList]  = useState([])

  useEffect(() => {

    axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trips"
    )
    .then((response) => {
      setGetTripsList(response.data.trips)
    })
    .catch((err) => {
      console.log(err);
    });

  },[] )

    return getTripsList
    
};

export const GetTripsCompleto = () => {
  
  const [getTripsCompleto, setGetTripsCompleto]  = useState([])

  useEffect(() => {

    axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trips"
    )
    .then((response) => {
      setGetTripsCompleto(response.data.trips)
    })
    .catch((err) => {
      console.log(err);
    });

  },[] )

    return getTripsCompleto
    
};

export const ApplytoTrip = (body, id) => {

  useEffect(() => {
    console.log("id e body do formulario", id , body);

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon-/trips/${id}/apply`,body
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])

};

// Funcionando  detalhes de viagem na parte do admin
// export const GetTripDetail = (token, id) => {

//   console.log('O id esta chegando em ChamarGetTripDetail', id)
//     axios
//     .get(
//       `https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trip/${id}`,
//       {
//         headers: {
//           auth: token,
//         },
//       }
//     )
//     .then((response) => {
//       console.log(response)
//     })
//     .catch((err) => {
//       console.log('Estou chegando no erro')
//       console.log(err)
//     });
    
// };

// funcionando
export const CreateTrip = (body) => {
  // o body vai entra com formulario

  const token = window.localStorage.getItem("token")

  console.log(body)
  // const body = {

  //   name: "Ano novo em Mercúrio",
  //   planet: "Mercúrio",
  //   date: "31/12/2019",
  //   description: "Venha passar a virada pertinho do Sol!",
  //   durationInDays: 7
  // }
  
  axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trips",
      body,{auth: token}
      )

    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};


// Funcionando


export const DeleteTrip = (id) => {
  // o body vai entra com formulario

  const token = window.localStorage.getItem("token")

  axios
    .delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trips/${id}`,
      {
        headers: {
          auth: token
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

export const DecideCandidate = (tripId,candidateId) => {

  const token = window.localStorage.getItem("token")

  axios
    .put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/maycon/trips/${tripId}/candidates/${candidateId}/decide`,
      {auth: token}
    )
    .then((response) => {
      console.log(response)
    
    })
    .catch((err) => {
      console.log(err);
    });
};
