import { createContext, useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(()=>{
    fetchFeedback()
  }, [])

  //Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:5000/feedback?_sort=id_order=desc`)
    const data = await response.json()

    setFeedback(data);
    setIsLoading(false)
  }

  //delete function
  const deleteFeedback = (id) => {
  if (window.confirm('Are you sure you want to delete')) {
    setFeedback(feedback.filter((item)=> item.id !== id))
  }
  }

  //add function
  const addFeedback=(newFeedback)=> {
  newFeedback.id = uuidv4()
  setFeedback([newFeedback, ...feedback])
  }

 //Set Item to be edited and updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit:true
    })
  }

  //Update feedback item

  const updateFeedback = (id, updateItem) => {
    setFeedback(feedback.map((item)=> item.id === id ? {...item, ...updateItem} : item ))
  }

  
  return (
    <FeedbackContext.Provider value = {{
      feedback,
      deleteFeedback,
      addFeedback,
      editFeedback,
      feedbackEdit,
      updateFeedback,
      isLoading,
    }}>
  {children}
  </FeedbackContext.Provider> 
 ) 

}

export default FeedbackContext