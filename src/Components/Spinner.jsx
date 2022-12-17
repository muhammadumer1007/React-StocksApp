import React from 'react'

function Spinner() {
    return (
        <>
            <div style={{ textAlign: 'center' }} className=' mt-5'>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

        </>
    )
}

export default Spinner