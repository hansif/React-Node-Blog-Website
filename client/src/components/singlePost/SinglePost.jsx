import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
//import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";
//import { useHistory } from "react-router-dom";
//import { useState } from "react";

export default function SinglePost() {
  const location = useLocation()
  const [file, setFile] = useState(null);
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/"
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [cats, setCats] = useState([]);
 // const history = useHistory();
  const [t,setT]=useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setCategories(res.data.categories);
    };
    getPost();
  }, [path,t]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      
      window.location.replace("/");
    } catch (err) { } 
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      categories,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
        //console.log(post._id)
      } catch (err) { }
    }
    try {
      
        const temp= await axios.put(`/posts/${post._id}`, {
          username: user.username,
          title,
          desc,
          categories,
          photo:newPost.photo
        });
        setT(temp);

        setUpdateMode(false)
       

        console.log(t)
        //console.log(post._id)
      
    } catch (err) { 
     
    }
  };




  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {updateMode ? (<>      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}<label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} /></>
        
        ) : ((post.photo) ? (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        ):(<img src="https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg" alt="" className="singlePostImg" />))}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}

            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        {updateMode ? (
          <>
            <label for="catt">Choose a cat</label>
            <select id="cat" name="cat" onChange={e => setCategories(e.target.value)}>


              <option value="">Select the options</option>
              {cats.map((c) => (

                <option value={c.name}>{c.name}</option>

              ))}


            </select>
          </>

        ) : (
          <a className="link" href={`/?cat=${categories}`}>
            <div className="postcat">{categories}</div>
          </a>)}

        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <a className="link" href={`/?user=${post.username}`}>
                {/* <Link className="link" to="/posts?username=Safak"> */}
                {post.username}
                {/* </Link> */}
              </a>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>

        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  )
}