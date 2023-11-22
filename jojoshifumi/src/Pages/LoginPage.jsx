import React from "react";

export default function LoginPage({onSubmit}) {

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.currentTarget);
    
        onSubmit({
            "username": "monpseudo",
            "password": "mypassword"
        });
    
        event.currentTarget.reset();
    };
    return(
        <form className="form-login" onSubmit={handleSubmit}>
            <input type="text" placeholder="Identifiant" className="input-field"/>
            <input type="text" placeholder="Mot de passe" className="input-field"/>
            <button className="connexion-button" type="submit">Se connecter</button>
        </form>
    )
}