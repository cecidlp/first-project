import React from "react"
import Photo from "../ceci-photo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"


export default function Info() {
    return (
        <div className="profile-info">
            <img className="profile-photo" src={Photo} alt="Cecilia" />
            <h1 className="profile-name">Cecilia de la Parra</h1>
            <h2 className="profile-job">Photographer</h2>
            <a href="www.ceciparra.com">Ceci Parra website</a>
            <form action="https://mail.google.com/" method="get" target="_blank">
                <button className="mail-button" type="submit">
                    <FontAwesomeIcon icon={faEnvelope} className="mail-icon" />Email
                </button>
            </form>

        </div>
    )
}