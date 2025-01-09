import React, { useState } from 'react';

const CHUNK_SIZE = 5 * 1024 * 1024; 

const FileUpload = () => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const handleFileUpload = async (file) => {
        const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
        setIsUploading(true);

        for (let i = 0; i < totalChunks; i++) {
            const start = i * CHUNK_SIZE;
            const end = Math.min(file.size, start + CHUNK_SIZE);
            const chunk = file.slice(start, end);

            const formData = new FormData();
            formData.append('chunk', chunk);

            await fetch('http://localhost:3001/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'fileName': file.name,
                    'chunkIndex': i,
                    'totalChunks': totalChunks
                },
                body: chunk
            });

            setUploadProgress(Math.round(((i + 1) / totalChunks) * 100));
        }

        // Merge chunks
        await fetch('http://localhost:3001/merge', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fileName: file.name,
                totalChunks: totalChunks
            })
        });

        setIsUploading(false);
        setUploadProgress(100);
        alert(' File uploaded successfully!');
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            handleFileUpload(file);
        }
    };

    const preventDefault = (event) => {
        event.preventDefault();
    };

    return (
        <div
            style={{
                border: '2px dashed #ccc',
                borderRadius: '10px',
                padding: '20px',
                textAlign: 'center',
                width: '400px',
                margin: '50px auto'
            }}
            onDrop={handleDrop}
            onDragOver={preventDefault}
            onDragEnter={preventDefault}
        >
            <h3>📂 Drag & Drop File Here</h3>
            <p>or</p>
            <input
                type="file"
                onChange={(e) => handleFileUpload(e.target.files[0])}
                disabled={isUploading}
            />
            {isUploading && (
                <div>
                    <p>Uploading... {uploadProgress}%</p>
                    <progress value={uploadProgress} max="100"></progress>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
