import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { BrowserRouter,Routes,Route,useNavigate, useLocation } from 'react-router-dom';
import '../App.css';
const API_URL = '' 

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfData, setPdfData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };


  return (
    <div>
    <input type="file" accept=".pdf" onChange={handleFileChange} />

    {selectedFile && (
      <div>
        <h3>File Details:</h3>
        <p>Name: {selectedFile.name}</p>
        <p>Size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
      </div>
    )}

    {selectedFile && (
      <div>
        <Document file={selectedFile} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={index} pageNumber={index + 1} />
            ))}
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    )}
  </div>
  );
}

export default Home;