import React from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import {v4 as uuidv4} from 'uuid'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Card from './components/shared/Card'
import Post from './components/Post'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {

    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item)=> item.id !== id))
    }
  }

  const addFeedback=(newFeedback)=> {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Router>
      <Header/>
      <div className="container">
      <Routes>
        <Route 
          exact path='/' 
          element={
          <>
            <FeedbackForm 
             handleAdd = {addFeedback}/>
            <FeedbackStats feedback = {feedback}/>
            <FeedbackList 
             feedback={feedback} 
             handleDelete = {deleteFeedback}
            />
          </>
          }
        ></Route>

        <Route path='/about' element={<AboutPage />} />

        {/* using /* to create nested route for /show */}
        <Route path='/post/*' element={<Post />} />
      </Routes>

      {/* Navlink example */}
      {/* <Card>
        <NavLink to = '/' activeClassName = 'active'>
           Home
        </NavLink>
        <NavLink to = '/about' activeClassName="active">
          About
        </NavLink>
      </Card> */}

      <AboutIconLink/>
      </div>
    </Router>

  );
}

//Another way of declaring props 
// Header.defaultProps = {
//   text: "Hello World"
// }



export default App;
