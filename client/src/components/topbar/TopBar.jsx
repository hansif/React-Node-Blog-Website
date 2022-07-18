import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
   const PF = "http://localhost:5000/images/" 

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }; 
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-sign-out"></i>
        

        
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <a className="link" href="/">
              HOME
            </a>
          </li>
          <li className="topListItem">
            <a className="link" href="/about">
              ABOUT US
            </a>
          </li>
          <li className="topListItem">
            <a className="link" href="/write">
              WRITE 
            </a>
          </li>
         
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <a className="link" href="/settings">
            <img
              className="topImg"
             // src={require('./kid-luffy-monkey-d-luffy-one-piece-anime-hd-wallpaper-preview.jpg')}
             src={((user.profilePic)?PF+user.profilePic:"https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png?1592828498")}
              alt=""
            />
           
          </a>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <a className="link" href="/login">
                LOGIN
              </a>
            </li>
            <li className="topListItem">
              <a className="link" href="/register">
                REGISTER
              </a>
            </li>
          </ul>
        )}
<i className="fa-solid fa-arrow-right-from-bracket"></i>
       {user && <span className="topListItem"  onClick={handleLogout}>LOGOUT</span>}
   
      </div>
    </div>
  );
}