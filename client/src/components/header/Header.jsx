import "./header.css"
import { Link } from "react-router-dom";
import  { PicBaseUrl } from "../../imageBaseUrl";
import MapIcon from '@mui/icons-material/Map';
var BudvistaBanner = PicBaseUrl + "BudvistaBanner.jpg"


export default function Header() {
  return (
      <div className="header">
        <img className="headerImg" src={BudvistaBanner} alt="" />
        <div className="headerHead">
          <h1>Find cannis shop around you</h1>
          <Link  className="headerBtn" to="/Maps">View Map <MapIcon/></Link>
        </div>      
      </div>  
  )
}
