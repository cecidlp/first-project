import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faFacebookSquare, faGithubSquare, faTwitterSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
    return(
        <footer className="footer-section">
            <FontAwesomeIcon className="icon-rrss" icon={faLinkedin} />
            <FontAwesomeIcon className="icon-rrss" icon={faFacebookSquare} />
            <FontAwesomeIcon className="icon-rrss" icon={faGithubSquare} />
            <FontAwesomeIcon className="icon-rrss" icon={faTwitterSquare} />
            <FontAwesomeIcon className="icon-rrss" icon={faInstagramSquare} />
        </footer>
       
    )
}