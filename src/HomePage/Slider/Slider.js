import React, { useState } from "react";
import './slider.css'
import { Favorite, MoreVert, Person } from "@mui/icons-material";
import { Users } from "../Share/Data";

function Slider({ post }) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const [comment, setComment] = useState(post.comment);
    const [isComment, setIsComment] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState(post.comments);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    const commentHandler = () => {
        setIsComment(!isComment);
    }


    const addComment = () => {
        if (newComment.trim() !== "") {
            setComments([...comments, newComment]);
            setComment(comment + 1);
            setNewComment("");
        }
    }
    const [isEditing, setIsEditing] = useState(false);

    const [editedPost, setEditedPost] = useState(post);

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleDelete = () => {
        setIsEditing(false);
    }


    return (
        <>
            <div className="post-1">
                <div className="post-wrapper">
                    <div className="post-top">
                        <div className="post-top-left">
                            <Person />
                            <span className="post-user-name">
                                {Users.filter(u => u.id === post.userId)[0].username}
                            </span>
                            <span className="post-date"> <p>{post.date}</p></span>
                        </div>
                        <div className="post-top-right">
                            <MoreVert />
                            <button onChange={handleEdit}>Edit</button>
                            <button onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                    <div className="post-center">
                        <span className="post-text">
                            <h1><strong>{post.header}</strong></h1>
                            <img className="post-image" src={post.photo} />
                            <span>{post.desc}</span>
                        </span>
                    </div>
                    <div className="post-bottom">
                        <div className="post-bottom-left">
                            <Favorite className={"like-button " + (isLiked ? "liked" : "")} onClick={likeHandler}></Favorite>
                            <span className="post-like-counter">{like} people like it</span>
                        </div>
                        <div className="post-bottom-right">
                            <button className="post-comment" onClick={commentHandler}>{comment} comments</button>
                            {isComment && (
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Add a comment..."
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                    />
                                    <button onClick={addComment}>Comment</button>
                                </div>
                            )}
                            {/*<ul>*/}
                            {/*    {comments.map((comment, index) => (*/}
                            {/*        <li key={index}>{comment}</li>*/}
                            {/*    ))}*/}
                            {/*</ul>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Slider;
