import React from 'react'

const AccomCard = (props) => {

    const { onClick, accom } = props;
    const { id, name, starRating, img } = accom;

    return (
        <div className="accom_card" style={{ backgroundColor: 'gray', cursor: 'pointer' }} onClick={onClick}>
            
                <img src={img} alt={'accom_image' + id}/>
                
                <div className="details row">
                    <h3>{name}</h3>
                    <p>{starRating} stars</p>
                </div>
        </div>
    )   
}

export default AccomCard;