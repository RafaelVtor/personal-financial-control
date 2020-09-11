import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function TableMonth() {

    // const [day, setDay] = useState([])
    // const [category, setCategory] = useState([])
    // const [description, setDescription] = useState([])
    // const [value, setValue] = useState([])
    // const [type, setType] = useState([])

    const [transactions, setTransactions] = useState([])

    const mesAno = "2020-09"
    useEffect(() => {
        axios.get(`http://localhost:3001/api/transaction/period/${mesAno}`).then((transaction) => {
            console.log(transaction.data)
            setTransactions(transaction.data)
        })
    }, [])

    return (
        <div>
            {transactions.map((transaction) => {
                return (
                    <fieldset>
                        <b>{transaction.day}</b>
                        <div>
                            <b>{transaction.category}</b>
                            <label>{transaction.description}</label>
                        </div>
                        <b>{transaction.value}</b>
                        <div>editar/excluir</div>
                    </fieldset>
                )
            })}
        </div>
    )

}
