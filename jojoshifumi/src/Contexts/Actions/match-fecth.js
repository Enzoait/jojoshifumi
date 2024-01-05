import { loginUser } from "./user-fetch";
import { getTokenFromLocalStorage } from "./user-localstorage";

export default {
    fetch: async function () {
      return fetch("http://fauques.freeboxos.fr:3000/matches").then((res) => res.json());
    },
    delete: async function (match) {
      return fetch("http://fauques.freeboxos.fr:3000/matches" + match.id, {
        method: "DELETE",
      }).then((res) => res.ok);
    },
    add: async function (match) {
      return fetch("http://fauques.freeboxos.fr:3000/matches", {
        method: "POST",
        headers: {
          //"Content-Type": "application/json",
          "Authorization": `Bearer ${getTokenFromLocalStorage()}`,
        },
        body: JSON.stringify(match),
      }).then((res) => res.json());
    },
    edit: async function (oldMatch, newMatch) {
      return fetch("http://fauques.freeboxos.fr:3000/matches" + oldMatch.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMatch),
      }).then((res) => res.json());
    },
  };