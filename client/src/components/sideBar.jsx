import React, { useState, useEffect } from "react";
import user1 from "../assets/images/img1.jpg";
import user2 from "../assets/images/img2.jpg";
import user3 from "../assets/images/img3.jpg";
import user4 from "../assets/images/img4.jpg";
import user5 from "../assets/images/img5.jpg";

const users = [
  { id: 1, name: "John Doe", profileImage: user1 }, 
  { id: 2, name: "Marie Davis", profileImage: user2 },
  { id: 3, name: "Daenerys Targaryen", profileImage: user3 },
  { id: 4, name: "Michael Njogu", profileImage: user4 },
  { id: 5, name: "Ted Lasso", profileImage: user5 }
  // ... add more users as needed
];


function SideBar() {
  const [isTyping, setIsTyping] = useState(false);
  const [lastMessage, setLastMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${hours >= 12 ? "pm" : "am"}`;
  };

  useEffect(() => {
    // Simulate receiving a new message
    // In a real application, you would update lastMessage when a new message is received
    setLastMessage("Hey, how are you?");
  }, [isTyping]);

  const fetchChatHistory = async (userName) => {
    // Simulate fetching data from an API or database
    // Replace this with your actual data fetching logic
    return new Promise((resolve) => {
      // Simulating a delay for fetching data
      setTimeout(() => {
        // Placeholder data, replace with actual chat history
        const dummyChatHistory = [
          { sender: 'You', message: 'Hey there!', timestamp: new Date() },
          { sender: userName, message: 'Hello!', timestamp: new Date() },
          // Add more messages as needed
        ];

        resolve(dummyChatHistory);
      }, 1000); // Simulated delay of 1 second
    });
  };

  const handleUserClick = async (userName) => {
    try {
      const userChatHistory = await fetchChatHistory(userName);
      setSelectedUser(userName);
      setChatHistory(userChatHistory);
    } catch (error) {
      console.error('Error fetching chat history:', error.message);
    }
  };

  return (
    <section className="sidebar-section px-4 py-3">
      {users.map((user) => (
        <div key={user.id} className="chat d-flex justify-content-start gap-3 px-4 align-items-center flex-nowrap my-2" onClick={() => handleUserClick(user.name)}>
          <div className="profile">
            <img className="profile-img" src={user.profileImage} alt="profile" />
          </div>
          <div className="chat-preview d-flex flex-column b-2 justify-content-center align-items-start">
            <h6 className="text-start fw-bold">{user.name}</h6>
            {isTyping ? (
              <p className="mb-0 typing">Typing...</p>
            ) : (
              <p className="mb-0">{lastMessage}</p>
            )}
          </div>
          <div className="chat-time d-flex flex-column align-self-start mt-3 ">
            <p className="fs-6 mb-2">{getCurrentTime()}</p>
            <span className="message-pill align-item-start">{chatHistory.length}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SideBar;
