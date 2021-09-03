import React from 'react'
import './BodyRight.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
const BodyRight = () => {
    const cat = ['All', 'Lives', 'Mixes', 'Music', 'Games', 'CSS', 'HTML', 'Python', 'Java', 'Racing', 'ASMR', 'Scene', 'Photography', 'Thrillers', 'Alan', 'Conservation', 'T Series', 'GTA V', 'Trailers']
    return (
        <div className="bodyRight">
            <ArrowBackIosIcon />
            <div className="cat">
                {
                    cat.map((item) => <p>{item}</p>)
                }
            </div>
            <KeyboardArrowRightIcon className="svg2" />
        </div>
    )
}

export default BodyRight
