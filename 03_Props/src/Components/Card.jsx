import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    <div className="card">
       <img src={props.image} alt="profile-Image" />
       <div className="card-content">
        <h2 className="card-name">{props.name},{props.age}</h2>
        <p className="card-description">
          Frontend Developer passionate about building clean, modern, and responsive user interfaces using React and CSS.
        </p>
       </div>
    </div>

  )
}

export default Card
