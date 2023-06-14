import React, { useState, useEffect } from 'react';

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth;
};

const App = () => {
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth <= 768; // 768px 미만이면 모바일로 판단

    return (
        <div>
            {isMobile ? (
                <div>This is the mobile view</div>
            ) : (
                <div>This is the desktop view</div>
            )}
        </div>
    );
};

export default App;