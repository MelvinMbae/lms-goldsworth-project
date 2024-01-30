import React from 'react';

function DownloadButton(){

  const downloadDocument = () => {

    const documentUrl = 'your_document_url';
    
    const link = document.createElement('a');
    
    link.href = documentUrl;
    
    link.download = 'downloaded_document.pdf';
    
    document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
  };

  return (
      <button onClick={downloadDocument} className='button'>Download</button>
  );
};

export default DownloadButton;