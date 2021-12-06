import { Mail, Person } from "@material-ui/icons"
import "./topbar.scss"

export default function Topbar({menuOpen ,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
                <div className="wrapper">
                        <div className="left">
                            <a href="#intro" className="logo">genius :)</a>
                            <div className="itemContainer">
                                <Person className="icon"/>
                                <span>+92-316-0336768</span>           
                            </div>
                            <div className="itemContainer">
                                <Mail className="icon"/>
                                <span>hubealii1570@gmail.com</span>        
                            </div>
                        </div>
                        <div className="right">
                                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                                        <span className="line1"></span>
                                        <span className="line2"></span>
                                        <span className="line3"></span>
                                </div>
                        </div>
                        
                </div>
        </div>
    )
}
