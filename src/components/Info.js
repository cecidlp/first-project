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
            <a className="web-link" href="www.ceciparra.com">Ceci Parra website</a>
            <a className="link-button" href="https://mail.google.com/" target="blank">
                <button className="mail-button" type="submit">
                    <FontAwesomeIcon icon={faEnvelope} className="mail-icon" />Email
                </button>
            </a>

        </div>
    )
}

/*<form action="https://mail.google.com/" method="get" target="_blank"></form>*/