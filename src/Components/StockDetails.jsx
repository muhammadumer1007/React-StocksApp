import React from 'react'
import { useParams } from 'react-router-dom'

function StockDetails() {

    const { symbol } = useParams()
    return (
        <>
            <h2>{symbol}</h2>
            <h2>StockDetails</h2>
        </>
    )
}

export default StockDetails