import home from "../../assets/home-run (1).svg"
import addon from "../../assets/white more.svg" 
import list from "../../assets/blue list.svg"
import {Link} from 'react-router-dom';

function Sidebar(){
    return(<div className="vertical-bar" >
            <div class="w3-sidebar w3-light-grey w3-bar-block" Style=" height:100vh; background-color:#5861AE; display: flex;
        flex-direction: column;">
             <img id="home" src={home} alt="home" Style="padding: 10px; margin-bottom: 20px; margin-top: 10px; "/>
              <Link to='/createorder'><img id="addon" src={addon} alt="addon" Style=" padding: 10px; margin-bottom: 20px;" /></Link>
              <Link to='/orders'><img id="list" src={list} alt="list" Style=" background-color:white; padding: 8px; margin-bottom: 20px;"/></Link>
            </div>
          </div>
          )
        }
export default Sidebar;