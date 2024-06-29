import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext(undefined);

export const ImageProvider = ({ children }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    return (
        <ImageContext.Provider value={{ selectedFile, setSelectedFile, preview, setPreview }}>
            {children}
        </ImageContext.Provider>
    );
};

export const useImage = () => {
    const context = useContext(ImageContext);
    if (context === undefined) {
        throw new Error('useImage must be used within an ImageProvider');
    }
    return context;
};
