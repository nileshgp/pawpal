import React from 'react';
import "./Chats.css";
import Chat from "../Chats/Chat/Chat";

const Chats = () => {
    return (
        <div className="chats">
            <Chat
            name="Mark"
            message="YO Whats up!"
            timestamp="40 seconds ago"
            profilePic="https://i.pinimg.com/originals/d4/3f/75/d43f75fc3d2f128cf528a4802aafd6f2.jpg"
            />
            <Chat
            name="Mark"
            message="YO Whats up!"
            timestamp="40 seconds ago"
            profilePic="https://i.pinimg.com/originals/d4/3f/75/d43f75fc3d2f128cf528a4802aafd6f2.jpg"
            />
            <Chat
            name="Mark"
            message="YO Whats up!"
            timestamp="40 seconds ago"
            profilePic="https://i.pinimg.com/originals/d4/3f/75/d43f75fc3d2f128cf528a4802aafd6f2.jpg"
            />
            <Chat
            name="Mark"
            message="YO Whats up!"
            timestamp="40 seconds ago"
            profilePic="https://i.pinimg.com/originals/d4/3f/75/d43f75fc3d2f128cf528a4802aafd6f2.jpg"
            />
        </div>
    )
}

export default Chats;