import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'

function Favourites({ DeleteFavourites, Responses, FavouiteStock, Loader }) {

    // const navigate = useNavigate()
    // const NavigateToStockDetails = (symbol) => {
    //     // e.stopPropogation()
    //     navigate(`StockDetails:${symbol}`)
    // }

    return (
        <>
            {
                Loader ? <Spinner /> : (
                    <div className="viewSalesSummary">
                        <div className="wrapperSalesSummary">
                            <table className="table table-hover table-bordered" id="tableS">
                                <thead >
                                    <tr>
                                        <th className="sticky-colSalesSummary first-col2SalesSummary coltm4">Name</th>
                                        <th className="coltm4">Current</th>
                                        <th className="coltm4">Change</th>
                                        <th className="coltm4">Change%</th>
                                        <th className="coltm4">High</th>
                                        <th className="coltm4">Low</th>
                                        <th className="coltm4">Open</th>
                                        <th className="coltm4">Close</th>
                                        <th className="coltm4">Options</th>
                                    </tr>
                                </thead>
                                <tbody className="some" id="dome">
                                    {
                                        Responses.map((e, i) => {
                                            return (
                                                <tr className='bg-white' key={i}>

                                                    <td className="sticky-colSalesSummary first-colSalesSummary">{FavouiteStock[i].description}</td>
                                                    <td className="text-center ind">{e.c ? e.c : 0}</td>
                                                    <td className="text-center ind">{e.d ? e.d : 0}</td>
                                                    <td className="text-center ind">{`${e.dp ? e.dp : 0} %`}</td>
                                                    <td className="text-center ind">{e.h ? e.h : 0}</td>
                                                    <td className="text-center ind">{e.l ? e.l : 0}</td>
                                                    <td className="text-center ind">{e.o ? e.o : 0}</td>
                                                    <td className="text-center ind">{e.pc ? e.pc : 0}</td>
                                                    <td className="text-center ind">
                                                        <button className='btn-danger' onClick={() => DeleteFavourites(i)}>Delete</button>
                                                    </td>

                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>



                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Favourites