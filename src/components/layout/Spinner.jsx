import React from 'react'
function Spinner() {
    return (
        <div className="loading-container flex flex-col items-center justify-center">
            <div className="spinner"></div>
            <div className="loading-text">Loading...</div>
        </div>
    )
}

export default Spinner