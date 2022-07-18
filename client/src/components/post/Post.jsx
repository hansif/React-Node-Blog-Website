import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo ?  (<a className="link" href={`/post/${post._id}`}> <img className="postImg" src=  {PF+post.photo} alt="" /></a>):(<a className="link" href={`/post/${post._id}`}> <img className="postImg" src="https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg" alt="" /></a>)}
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">{post.categories}</span>
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
