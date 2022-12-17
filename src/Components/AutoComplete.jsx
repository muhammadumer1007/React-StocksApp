import React, { useEffect } from 'react'

function AutoComplete({ SearchValue, setSearchValue, fetchSearchData, Data, setFavouiteStock }) {
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }

    const AddToFavourites = (e) => {
        e.preventDefault()
        let symbol = SearchValue;
        let AddArr = JSON.parse(localStorage.getItem('FavouiteStock'))
        let TrimedSymbol = symbol.slice(symbol.indexOf('(') + 1, symbol.length - 1)
        let TrimedDescription = symbol.slice(0, symbol.indexOf('(') - 1)
        setFavouiteStock([...AddArr, {
            description: TrimedDescription, symbol: TrimedSymbol
        }])
        localStorage.setItem('FavouiteStock', JSON.stringify([...AddArr, {
            description: TrimedSymbol, symbol: TrimedDescription
        }]))
        setSearchValue('')
    }
    useEffect(() => {
        fetchSearchData()
    }, [SearchValue])


    return (
        <>
            <form action="" onSubmit={AddToFavourites} className='d-flex align-items-end justify-content-center'>

                <div className='w-100'>
                    <input className="form-control" list="datalistOptions" id="exampleDataList" required placeholder="Type to search Stocks..."
                        value={SearchValue} onChange={handleSearchChange}
                    />
                    <datalist id="datalistOptions">
                        {
                            Data.map((e, i) => {
                                return (
                                    <option key={i} value={`${e.description} (${e.symbol})`} />
                                )
                            })
                        }
                    </datalist>
                </div>

                <input type="submit" value="Add" className='btn btn-primary mx-1' />
            </form>
        </>
    )
}

export default AutoComplete