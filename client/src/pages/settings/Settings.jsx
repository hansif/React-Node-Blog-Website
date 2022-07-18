import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {

  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorr, setErrorr] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  function myError() {
    setSuccess(false);
    setErrorr(false);
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      setTimeout(myError, 6000);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
      setErrorr(true);
      setTimeout(myError, 6000);

    }
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`/users/${user._id}`, {
        data: { username: user.username },
        data: {email : user.email},
        data: {password : user.password}
      });
      window.location.replace("/");
    } catch (err) { }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div >
          <a className="settingsTitle" href={`/?user=${user.username}`} >Display My Posts</a>
        </div>
        <label className="self settingtitle">Your Details</label>
        <div className="settingDetails" >
          <img className="settingsDetailPP"
            src={file ? URL.createObjectURL(file) : ((user.profilePic) ? PF + user.profilePic : "https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png?1592828498")}
            alt=""
          />
          <div className="settingDetailsinner">
            <div className="detailtitle">Username</div>
            <div className="detailuser">{user.username}</div>
          </div>
          <div className="settingDetailsinner">
            <div className="detailtitle">Email</div>
            <div className="detailuser">{user.email}</div>
          </div>
        </div>


        <label className="end">
          <div className="settingDelete"> ACCOUNT DELETE</div>
          <i
            className="singlePostIcon far fa-trash-alt"
          onClick={handleDelete}
          ></i>
        </label>
        <label ><span className="settingsTitleUpdate self">Update Your Account</span> </label>
        {success && (
          <div className="hidden"
            style={{ color: "green"  }}
          >
            Profile has been updated...
          </div>
        )}
        {errorr && (
          <div  className="hidden"
            style={{ color: "red" }}
          >
           Username (or) Email is already taken......Try with new one
          </div>
        )}

        <form className="settingsForm" onSubmit={handleSubmit}>


          <div className="settingsPP">

            <img
              src={file ? URL.createObjectURL(file) : ((user.profilePic) ? PF + user.profilePic : "https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png?1592828498")}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={(e) => setFile(e.target.files[0])}

            />


          </div>



          <label>Username</label>
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <label>Email</label>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>

        </form>
      </div>
      <Sidebar />
    </div>
  );
}