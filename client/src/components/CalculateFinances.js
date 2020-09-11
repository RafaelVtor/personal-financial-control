import React, { useState, useEffect } from 'react'
// import data from '../server/server'

import axios from 'axios'


export default function CalculateFinances() {

    const [lancamentos, setLancamentos] = useState([])
    const [receitas, setReceitas] = useState()
    const [despesas, setDespesas] = useState()
    const [saldo, seSaldo] = useState()

    useEffect(() => {
        axios.get('http://localhost:3001/api/transaction/findAll').then((response) => {
            setLancamentos(response.data)
        })
    }, [])


    console.log(lancamentos)
    // console.log(data.he)
    // const { data } = datas;

    let description = "rafael"
    return (
        < div >
            <div>lançamentos:</div>
            <div>Receitas:</div>
            <div>Despesas:</div>
            <div>Saldo:</div>
            {/* <div>
                {lancamentos.map((response) => <p> {response.description} </p>)}
            </div> */}
        </div >
    )
}
