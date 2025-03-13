import React from "react";
import '../Css/Footer.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div id="contact-section" className= "footer">
            <center><hr style={{ borderWidth: "3px", color: "#B415FF", }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <p className="by"> All &copy; copyrights reserved to me || 2025</p>
                    <p className="by">Designed & Developed By Er. Ved Prakash <Link to='/admin' style={{textDecoration:"none"}}>❤️</Link></p>
                </div></center>
        </div>
    )
}
export default Footer;  