import React from 'react'

const CourseCard = (props) => {
  return (
      <div className='course-card'>
        <div className="card-badge">{props.category}</div>
        <div className="card-icon">{props.icon}</div>
        <h3 className="card-title">{props.title}</h3>
        <p className="card-instructor">{props.instructor}</p>

        <div className="card-footer">
          <span className="card-rating">{props.rating}</span>
          <span className="card-price">₹{props.price}</span>
        </div>
    </div>
  )
}

export default CourseCard
