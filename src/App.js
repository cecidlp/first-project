import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
import "./style.css"

export default function App(){
    return (
        <div className="full-page">
        <Info />
        <div className="central-content">
        <About />
        <Interests />
        </div>
        <Footer />
        </div>
    )
}