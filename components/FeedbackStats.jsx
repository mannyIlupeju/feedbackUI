import React from 'react'

const FeedbackStats = ({feedback}) => {

  //calculate Ratings average
  let average = feedback.reduce((acc, curr)=>{
      return acc + curr.rating
  }, 0) / feedback.length

  //reduce the average amount to a 1 decimal figure, use replace(/[.,]0$/,'') to remove zero. 
  average = average.toFixed(1).replace(/[.,]0$/,'')


  return (
    <div className = "feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
