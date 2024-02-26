import "../index.css"
import { Link } from "react-router-dom"
export default function Navbar(){
   
    
    return(
        <div>
          <div className="Container">
            <div className="NavChild1">
           <Link to="/"> <img className="logo" src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" /></Link>
           <Link className="dec" to="/"> <h2 className="KB">Kalvium Books</h2></Link>
            </div>
        </div>
        
        </div>
        
    )
}