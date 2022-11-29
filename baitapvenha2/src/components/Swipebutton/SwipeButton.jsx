import React from "react";
import { MdReplay, MdClose, MdStar } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import "./Swipebutton.css";
import { IconButton } from "@mui/material";


const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
        <div className="icons">
            <IconButton className="swipeButtons_repeat">
                <MdReplay fontSize="large" />
            </IconButton>
        </div>
        <div className="icons">
            <IconButton className="swipeButtons_left">
                <MdClose fontSize="large" />
            </IconButton>
        </div>
        <div className="icons">
            <IconButton className="swipeButtons_star">
                <MdStar fontSize="large" />
            </IconButton>
        </div>
        <div className="icons">
            <IconButton className="swipeButtons_right">
                <IoMdHeart fontSize="large" />
            </IconButton>
        </div>
        <div className="icons">
            <IconButton className="swipeButtons_lightning">
                <AiFillThunderbolt fontSize="large" />
            </IconButton>
        </div>
    </div>
  );
};

export default SwipeButtons;