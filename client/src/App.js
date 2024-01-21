import React from 'react';

const DocumentDownload = () => {
  const downloadDocument = async () => {
    try {
//input the actual url
  const documentUrl = 'Doc.url';
      const response = await fetch(documentUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch document. Status: ${response.status}`);
      }
          const blob = await response.blob();

        const link = document.createElement('a');

      // to create a Blob URL for the fetched document
      const blobUrl = window.URL.createObjectURL(blob);

      // to set the link's href and download attributes
      link.href = blobUrl;
      link.download = 'downloaded_document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading document:', error);
    }
  };

  return (
    <div>
      <h1>Document Download</h1>
      <button onClick={downloadDocument}>Download Document</button>
    </div>
  );
};

export default DocumentDownload;
