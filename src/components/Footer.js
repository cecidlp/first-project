import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faFacebookSquare, faGithubSquare, faTwitterSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
    return(
        <footer className="footer-section">
            <a href="https://www.linkedin.com/in/ceciliadelaparra/"><FontAwesomeIcon className="icon-rrss" icon={faLinkedin} /></a>
            <a href="https://www.facebook.com"><FontAwesomeIcon className="icon-rrss" icon={faFacebookSquare} /></a>
            <a href="https://github.com/cecidlp"><FontAwesomeIcon className="icon-rrss" icon={faGithubSquare} /></a>
            <a href="https://www.twitter.com"><FontAwesomeIcon className="icon-rrss" icon={faTwitterSquare} /></a>
            <a href="https://www.instagram.com/ceciparrafotografia/"><FontAwesomeIcon className="icon-rrss" icon={faInstagramSquare} /></a>
        </footer>
       
    )
}