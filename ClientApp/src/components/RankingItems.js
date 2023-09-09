import React, { useEffect, useState } from 'react'

const RankingItems = () => {
    const [items, setItems] = useState([])
    const dataType = 1

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setItems(data)
            })
    }, [])

    return (
        <main>
            {items !== null ? items.map(item => <h3>{item.title}</h3>):<div>Loading...</div>}
        </main>
    )
}

export default RankingItems