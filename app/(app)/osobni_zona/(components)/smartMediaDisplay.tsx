import React, { useState } from 'react';

interface MediaItem {
    mediaUrl: string;
    alt?: string;
}

const MediaDisplay: React.FC<{ mediaItem: MediaItem }> = ({ mediaItem }) => {
    const [isVideo, setIsVideo] = useState(false);
    const fullUrl = `https://etesty2.mdcr.cz${mediaItem.mediaUrl}`;

    if (isVideo) {
        return (
            <div className="flex items-center justify-center h-full w-full">
                <video controls className="max-w-full max-h-full object-contain">
                    <source src={fullUrl} type="video/mp4" />
                </video>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center h-full w-full">
            <img
                src={fullUrl}
                alt={mediaItem.alt || ''}
                className="max-w-full max-h-full object-contain"
                onError={() => setIsVideo(true)}
            />
        </div>
    );
};

export default MediaDisplay;