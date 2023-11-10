import React from "react";

export default function LoginPage() {
    return(
        <div className="connexion-box">
            <input type="text" placeholder="Identifiant" className="input-field"/>
            <input type="text" placeholder="Mot de passe" className="input-field"/>
            <button className="connexion-button">Se connecter</button>
        </div>
    )
}