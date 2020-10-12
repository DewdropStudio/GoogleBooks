import React from "react";
import heroImage from "../Images/EssentialBooks.png";

const headerStyle = {
  "backgroundImage": `url(${heroImage})`,
  "maxWidth": "100vw",
  height: "calc(100vw * .43333)",
  "backgroundSize": "cover",
  position: "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Google Books Search</h1>
            <p>Search and Save Books of Interest</p>
        </header>
    );
}

export default Header;