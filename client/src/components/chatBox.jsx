import React, { useState, useEffect, useRef } from "react";
import user1 from "../assets/images/img1.jpg";
import user2 from "../assets/images/img2.jpg";
import user3 from "../assets/images/img3.jpg";
import user4 from "../assets/images/img4.jpg";
import user5 from "../assets/images/img5.jpg";
import send from "../assets/images/send.png";
import SideBar from "./sideBar";

const users = [
  { id: 1, name: "John Doe", profileImage: user1 },
  { id: 2, name: "Marie Davis", profileImage: user2 },
  { id: 3, name: "Michael Lawson", profileImage: user3 },
  { id: 4, name: "Melvin Mbae", profileImage: user4 },
  { id: 5, name: "Ted Lasso", profileImage: user5 }
  // ... add more users as needed
];

function ChatBox() {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(users[1]); // Default user
  const messagesContainerRef = useRef(null);
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${hours >= 12 ? "pm" : "am"}`;
  }

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      messagesContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [allMessages]);

  function handleMessageChange(e) {
    e.preventDefault();
    setMessage((val) => (val = e.target.value));
  }
  function handleSendMessage(e) {
    e.preventDefault();

    const currentTime = getCurrentTime();
    const newMessage = { sender: "You", message: message, timestamp: currentTime };
    
    setAllMessages((prev) => [...prev, newMessage]);
    setMessage("");
  }
  const handleFileUpload = (files) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target.result;
      console.log("Uploaded file content:", fileContent);
    };

    reader.readAsText(files[0]);
  };

  const openCamera = () => {
    // Placeholder for opening the camera
    console.log("Opening camera...");
  };

  return (
    <div>
      <section className="chat-box">
        <header className="py-1 chat-header navbar nav sticky-top">
          <div className="chat-header-user d-flex justify-content-start gap-3 px-4 align-items-center flex-nowrap">
            <div className="profile">
              <img className="profile-img" src={selectedUser.profileImage} alt="profile" />
            </div>
            <div className="chat-preview d-flex flex-column b-2 justify-content-center align-items-start ">
              <h6 className="text-start fw-bold">{selectedUser.name}</h6>
              <div className="d-flex align-items-center gap-1">
                <div className="dot"></div>
                <p className="mb-0 new-message">Online</p>
              </div>
            </div>
          </div>
        </header>
        <section className="messages-container px-2 position-relative w-100 mb-5" ref={messagesContainerRef}>
          <div className="messages-inner d-flex flex-column justify-content-end align-items-center w-100 h-auto">
          {allMessages &&
              allMessages.map((msg, index) => (
                <div key={index} className={msg.sender === "You" ? "sent-message" : "received-message px-2 py-3 my-3 ml-4"}>
                  <p className="p-0 m-0">{msg.message}</p>
                  <span className="message-time">{msg.timestamp}</span>
                </div>
              ))}
          </div>
          <form
            className="chat-input position-relative mx-4 w-100 py-2"
            onSubmit={handleSendMessage}
          >
            <div className="inner-input  d-flex flex-row justify-content-end gap-2 m-0 ">
              <textarea
                value={message}
                onChange={handleMessageChange}
                className="form-control px-4"
                id="messageinput"
                placeholder="Type your message"
                autoComplete="off"
              />
              <label htmlFor="fileInput" className="upload-btn">
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileUpload(e.target.files)}
                />
                📎
              </label>
              <button type="button" className="camera-btn" onClick={openCamera}>
                📷
              </button>
              <button type="submit" className="send-btn">
                <img src={send} alt="send message" height={40} width={40} />
              </button>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
}

export default ChatBox;