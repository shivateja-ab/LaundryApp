import {home,addon,list} from '../assets'

function Sidebar(){
    return(<div className="vertical-bar" >
            <div class="w3-sidebar w3-light-grey w3-bar-block" Style=" height:100vh; background-color:#5861AE; display: flex;
        flex-direction: column;">
              <img id="home" src={home} alt="home" Style="padding: 10px; margin-bottom: 20px; margin-top: 10px; "/>
              <img id="addon" src={addon} alt="addon" Style="padding: 10px; margin-bottom: 20px;" />
              <img id="list" src={list} alt="list" Style="background-color:white; padding: 5px; margin-bottom: 20px;"/>
            </div>
          </div>)}
    export default Sidebar;