import React from 'react'

function Loader() {
    return (
        <div className='mt-5'>
            <div className="d-flex justify-content-center">
                <div className="spinner-border mt-5" role="status" style={{ width: "100px", height: "100px" }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Loader
