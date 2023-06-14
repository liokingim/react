import React from 'react';

const isMobileDevice = () => {
    return (typeof window.orientation !== "undefined")
        || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

const App = () => {
    const isMobile = isMobileDevice();

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