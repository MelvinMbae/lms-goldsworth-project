import React, { useState } from 'react';
import './UploadContent.css'; // Import CSS file

function UploadContent() {
  const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  function handleFile(event) {
    setFile(event.target.files[0]);
  }

  function handleUpload(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    fetch(
      'url', // Replace 'url' with the actual upload endpoint
      {
        method: "POST",
        body: formData
      }
    )
    .then((response) => response.json())
    .then((result) => {
      console.log('File uploaded successfully:', result);
      setUploadedFile(result); // Save uploaded file details
    })
    .catch(error => {
      console.log("Error uploading file:", error);
    });
  }

  function handleEdit() {
    // Handle edit functionality (not implemented in this example)
    console.log('Edit button clicked');
  }

  function handleDelete() {
    // Check if a file has been uploaded
    if (!uploadedFile) {
      console.log('No file uploaded to delete');
      return;
    }

    // Perform delete request to delete the uploaded file
    fetch(
      `url/${uploadedFile.id}`, // Replace 'url' with the actual delete endpoint
      {
        method: "DELETE"
      }
    )
    .then((response) => response.json())
    .then((result) => {
      console.log('File deleted successfully:', result);
      setUploadedFile(null); // Clear uploaded file details
    })
    .catch(error => {
      console.log("Error deleting file:", error);
    });
  }

  return (
    <div className="upload-container"> {/* Apply container class */}
      <h2>File uploading in React JS</h2>
      <form onSubmit={handleUpload}>
        <input type="file" name="file" onChange={handleFile} />
        <button type="submit">Upload Content</button>
        <button type="button" onClick={handleEdit}>Edit</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
}

export default UploadContent;



