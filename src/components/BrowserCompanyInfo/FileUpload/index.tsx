import React, { useState, useRef, ChangeEvent, DragEvent } from 'react';
import './styles.scss';

const FileUpload: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null); // State to hold selected file
    const fileInputRef = useRef<HTMLInputElement>(null); // Ref to hold reference to file input element

    // Function to handle file selection from file input
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            // You can handle the file here (e.g., upload to server)
        }
    };

    // Function to handle drag over event
    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        // Optionally add styles for drag over
        event.currentTarget.classList.add('dragover');
    };

    // Function to handle drag leave event
    const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        // Optionally remove styles for drag over
        event.currentTarget.classList.remove('dragover');
    };

    // Function to handle drop event
    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        // Reset drag over styles
        event.currentTarget.classList.remove('dragover');

        // Retrieve dropped files
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            setSelectedFile(file);
            // You can handle the dropped file here (e.g., upload to server)
        }
    };

    // Function to open file dialog when div is clicked
    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const clearSelectedFile = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Reset file input value to clear selection
        }
    };

    return (
        <div className="file-upload-container"
             onDragOver={handleDragOver}
             onDragLeave={handleDragLeave}
             onDrop={handleDrop}>
            <div className="file-upload-content" >
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <p><span onClick={openFileDialog} style={{color: "blue", cursor: "pointer"}}>Browse</span> &nbsp;or drag and drop to attach  files</p>
                {selectedFile && (
                    <>
                        <p>Selected file: {selectedFile.name}</p>
                        <button className='clear-btn' onClick={clearSelectedFile}>Clear</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default FileUpload;
