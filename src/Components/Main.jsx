import React, { useState, useEffect } from 'react'
import AutoComplete from './AutoComplete'
import { API_URL, API_KEY } from '../Api/Api'
import Favourites from './Favourites'

function Main() {
    const [SearchValue, setSearchValue] = useState('')
    const [Data, setData] = useState([])
    const [Loader, setLoader] = useState(false)
    const [Responses, setResponses] = useState([])
    const [FavouiteStock, setFavouiteStock] = useState(JSON.parse(localStorage.getItem('FavouiteStock')))

    const fetchSearchData = async () => {
        try {
            let data = await fetch(`${API_URL}search?q=${SearchValue}${API_KEY}`);
            let response = await data.json();
            setData(response.result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchSearchData()
        checkFavourites()
    }, [])

    useEffect(() => {
        fetchDefaultfavouriteStocks()
    }, [FavouiteStock])


    const checkFavourites = () => {
        if (!FavouiteStock) {
            localStorage.setItem('FavouiteStock', JSON.stringify([
                { description: 'TOYOTA MOTOR CORP', symbol: 'TOYOF' },
                { description: 'COINBASE 1INCH/USD', symbol: 'COINBASE:1INCH-USD' },
                { description: 'ALPHABET INC-CL C', symbol: 'GOOG' }
            ]))
            setFavouiteStock(JSON.parse(localStorage.getItem('FavouiteStock')))
        }
    }

    const fetchDefaultfavouriteStocks = async () => {
        setLoader(true)
        let Favourites = FavouiteStock ? FavouiteStock : [
            { description: 'TOYOTA MOTOR CORP', symbol: 'TOYOF' },
            { description: 'COINBASE 1INCH/USD', symbol: 'COINBASE:1INCH-USD' },
            { description: 'ALPHABET INC-CL C', symbol: 'GOOG' }
        ]
        let responses = await Promise.all(Favourites.map((e) => {
            return fetch(`https://finnhub.io/api/v1/quote?symbol=${e.symbol}&token=ce870qiad3i4pjr52st0ce870qiad3i4pjr52stg`)
                .then(response => response.json())
        }))
        setResponses(responses)
        setLoader(false)
    }

    const DeleteFavourites = (i) => {
        let DeleteArray = FavouiteStock;
        DeleteArray.splice(i, 1)
        localStorage.setItem('FavouiteStock', JSON.stringify(DeleteArray))
        setFavouiteStock(JSON.parse(localStorage.getItem('FavouiteStock')))
        fetchDefaultfavouriteStocks()
    }
    return (
        <>
            <div className="container">
                <AutoComplete SearchValue={SearchValue} setSearchValue={setSearchValue}
                    fetchSearchData={fetchSearchData} Data={Data} setFavouiteStock={setFavouiteStock}
                    FavouiteStock={FavouiteStock}
                />
                <Favourites Responses={Responses} DeleteFavourites={DeleteFavourites}
                    FavouiteStock={FavouiteStock} Loader={Loader} />
            </div>
        </>
    )
}

export default Main