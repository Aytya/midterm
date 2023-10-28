import React from 'react';
import './share.css'
import Slider from "../Slider/Slider";
import {Posts} from "./Data"
import {EmojiEmotions, Label, PermMedia, Room, Telegram} from "@mui/icons-material";
function Share(){

    return(
        <div className="share">
            <div className="share-wrapper">
                <div className="news-container">
                    <div className="news-wrapper">
                        <div className="news-top">
                            <h1>HomePage</h1>
                        </div>
                        <div className="news-bottom">
                            <div className="news-options">
                                <button className="news-button"><PermMedia className="news-icon"/></button>
                                <button className="news-button"><Label className="news-icon"/></button>
                                <button className="news-button"><Room className="news-icon"/></button>
                                <button className="news-button"><EmojiEmotions className="news-icon"/></button>
                            </div>
                            <button className="news-button"><Telegram/></button>
                        </div>
                    </div>
                </div>
                {Posts.map((p) => (
                    <Slider key={p.id} post = {p}></Slider>
                ))}
            </div>
        </div>
    )
}
export default Share;