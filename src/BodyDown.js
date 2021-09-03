import React from 'react'
import './BodyDown.css'
import Card from './Card'
import { thumblist } from './tdata'
const BodyDown = () => {
    return (
        <div className="bodydown">
            <div className="videos">
                {
                    thumblist.map((item) => <Card item={item} key={item.id} />)
                }
            </div>
        </div>
    )
}

export default BodyDown
