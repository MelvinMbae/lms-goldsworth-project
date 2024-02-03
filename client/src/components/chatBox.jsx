import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import user1 from "../assets/images/img1.jpg";
import user2 from "../assets/images/img2.jpg";
import user3 from "../assets/images/img3.jpg";
import user4 from "../assets/images/img4.jpg";
import user5 from "../assets/images/img5.jpg";
import send from "../assets/images/send.png";
import ChatBar from "./ChatBar";

const users = [
	{ id: 1, name: "John Doe", profileImage: user1 },
	{ id: 2, name: "Marie Davis", profileImage: user2 },
	{ id: 3, name: "Michael Lawson", profileImage: user3 },
	{ id: 4, name: "Melvin Mbae", profileImage: user4 },
	{ id: 5, name: "Ted Lasso", profileImage: user5 },
	// ... add more users as needed
];

const ChatBox = () => {
	useEffect(() => {
		const socket = io("http://localhost:5555"); // Change the URL to match your Flask server

		socket.on("connect", () => {
			console.log("Connected to server");
		});

		socket.on("server_message", (data) => {
			console.log("Message from server:", data.message);
		});

		socket.on("disconnect", () => {
			console.log("Disconnected from server");
		});

		// Clean up the socket connection when the component is unmounted
		return () => {
			socket.disconnect();
		};
	}, []);

	const [message, setMessage] = useState("");
	const [allMessages, setAllMessages] = useState([]);
	const [selectedUser, setSelectedUser] = useState(users[0]); // Default user
	const [cameraStream, setCameraStream] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const messagesContainerRef = useRef(null);
	const videoRef = useRef(null);

	const getCurrentTime = () => {
		const now = new Date();
		const hours = now.getHours();
		const minutes = now.getMinutes();
		return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${
			hours >= 12 ? "pm" : "am"
		}`;
	};

	useEffect(() => {
		if (messagesContainerRef.current) {
			messagesContainerRef.current.scrollTop =
				messagesContainerRef.current.scrollHeight;
		}
	}, [allMessages]);

	useEffect(() => {
		if (videoRef.current && cameraStream) {
			videoRef.current.srcObject = cameraStream;
		}
	}, [cameraStream]);

	const handleMessageChange = (e) => setMessage(e.target.value);

	const handleSendMessage = (e) => {
		e.preventDefault();

		const trimmedMessage = message.trim();
		if (!trimmedMessage && !selectedFile) return;

		const currentTime = getCurrentTime();
		const newMessage = {
			sender: "You",
			message: trimmedMessage,
			timestamp: currentTime,
			file: selectedFile,
		};

		setAllMessages((prev) => [...prev, newMessage]);
		setMessage("");
		setSelectedFile(null);
	};

	const handleFileUpload = (files) => {
		// Handle file upload logic
		const file = files[0]; // Assuming only one file is selected
		setSelectedFile(file);
	};

	const openCamera = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ video: true });

			setCameraStream(stream);
		} catch (error) {
			console.error("Error accessing camera:", error.message);
		}
	};

	const closeCamera = () => {
		if (cameraStream) {
			const tracks = cameraStream.getTracks();
			tracks.forEach((track) => track.stop());
			setCameraStream(null);
		}
	};

	const takePicture = () => {
		if (videoRef.current) {
			const canvas = document.createElement("canvas");
			const context = canvas.getContext("2d");

			canvas.width = videoRef.current.videoWidth;
			canvas.height = videoRef.current.videoHeight;

			context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

			const imageDataURL = canvas.toDataURL("image/png");

			const downloadLink = document.createElement("a");
			downloadLink.href = imageDataURL;
			downloadLink.download = "captured_image.png";
			document.body.appendChild(downloadLink);
			downloadLink.click();
			document.body.removeChild(downloadLink);

			const currentTime = getCurrentTime();
			const newMessage = {
				sender: "You",
				message: "",
				timestamp: currentTime,
				image: imageDataURL,
			};

			// Add the new message to the chat
			setAllMessages((prev) => [...prev, newMessage]);
		}
	};

	const onSelectUser = (user) => {
		setSelectedUser(user);
		// Close the camera when switching users
		closeCamera();
		// Clear existing messages when switching users
		setAllMessages([]);
	};

	return (
		<div className="app">
			<ChatBar
				users={users}
				selectedUser={selectedUser}
				onSelectUser={onSelectUser}
			/>
			{/* Main Chat Box */}
			<section className="chat-box">
				<header className="py-1 chat-header navbar nav sticky-top">
					<div className="chat-header-user d-flex justify-content-start gap-3 px-4 align-items-center flex-nowrap">
						<div className="profile">
							<img
								className="profile-img"
								src={selectedUser.profileImage}
								alt="profile"
							/>
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
				<section
					className="messages-container px-2 position-relative w-100"
					ref={messagesContainerRef}>
					{/* Display the camera feed */}
					{cameraStream && (
						<video
							ref={videoRef}
							autoPlay
							playsInline
							muted
							style={{ maxWidth: "100%" }}
						/>
					)}
					<div className="messages-inner d-flex flex-column justify-content-end align-items-center w-100 h-auto">
						{allMessages.map((msg, index) => (
							<div
								key={index}
								className={
									msg.sender === "You"
										? "sent-message"
										: "received-message px-2 py-3 my-3 ml-4"
								}>
								{msg.image ? (
									<img
										src={msg.image}
										alt="captured"
										style={{
											maxWidth: "200px",
											maxHeight: "200px",
											objectFit: "cover",
										}} // Adjust these values as needed
									/>
								) : (
									<p className="p-0 m-0">{msg.message}</p>
								)}
								{msg.file && (
									<div>
										<p>File: {msg.file.name}</p>
										<p>Size: {msg.file.size} bytes</p>
									</div>
								)}
								<span className="message-time">
									<p>{msg.timestamp}</p>
								</span>
							</div>
						))}
					</div>
					<form className="chat-input mx-4 py-2" onSubmit={handleSendMessage}>
						<div className="inner-input flex-row justify-content-end gap-2 m-0 ">
							<label htmlFor="fileInput" className="upload-btn">
								<input
									type="file"
									id="fileInput"
									style={{ display: "none" }}
									onChange={(e) => handleFileUpload(e.target.files)}
									EncType=""
								/>
								📎
							</label>
							<textarea
								value={message}
								onChange={handleMessageChange}
								className="form-control px-4"
								id="messageinput"
								placeholder="Type your message"
								autoComplete="off"
							/>
							<button
								type="button"
								className="camera-btn"
								onClick={cameraStream ? closeCamera : openCamera}>
								{cameraStream ? "📷" : "📷"}
							</button>
							<button
								type="button"
								className="camera-btn"
								onClick={takePicture}>
								📸
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
};

export default ChatBox;
