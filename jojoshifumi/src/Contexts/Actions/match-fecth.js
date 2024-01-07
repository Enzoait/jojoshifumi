import { loginUser } from "./user-fetch";
import { getTokenFromLocalStorage } from "./user-localstorage";

export default {
    fetch: async function () {
      return fetch("http://fauques.freeboxos.fr:3000/matches", {
        headers: {
          //"Content-Type": "application/json",
          "Authorization": `Bearer ${getTokenFromLocalStorage()}`, 
        },
      }).then((res) => res.json());
    },
    delete: async function (match) {
      return fetch("http://fauques.freeboxos.fr:3000/matches/" + match.id, {
        method: "DELETE",
        headers: {
          //"Content-Type": "application/json",
          "Authorization": `Bearer ${getTokenFromLocalStorage()}`, 
        },
      }).then((res) => res.ok);
    },
    add: async function (match) {
      console.log(getTokenFromLocalStorage());
      return fetch("http://fauques.freeboxos.fr:3000/matches/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getTokenFromLocalStorage()}`, 
        },
        body: JSON.stringify(match),
      }).then((res) => res.json())
      .then((data) => data ? data._id : null);
    },
    edit: async function (oldMatch, newMatch) {
      return fetch("http://fauques.freeboxos.fr:3000/matches/" + oldMatch.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMatch),
      }).then((res) => res.json());
    },
  };