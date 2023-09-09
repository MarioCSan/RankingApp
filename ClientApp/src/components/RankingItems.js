import React, { useEffect, useState } from 'react'
import MovieImageArr from './MovieImages'
import RankingGrid from './RankingGrid'


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
        <main className='items-not-ranked'>
            <RankingGrid items={items} imgArr={MovieImageArr } />
            {items.length > 0 ? items.map(item =>
                <div className='unranked-cell'>
                    <img id={`item-${item.id}`} src={MovieImageArr.find(o => o.id === item.imageId)?.image} />
                </div>
            ): <div>Loading...</div> }
        </main>
    )
}

export default RankingItems