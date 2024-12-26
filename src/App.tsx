import { useEffect, useState } from 'react'
import heartGif from './assets/heart.gif'
import './App.css'
import AgeForm from './components/AgeForm'
import { AgeProvider } from './contexts/AgeContext'
import HeartZoneTable from './components/HeartZoneTable'

function App() {
  return (
    <>
      <div>
        <span>
          <h1>Heart Rate Zone Calculator</h1>
        </span>
        <span>
          <img className="heart-gif" src={heartGif} alt="heart gif"></img>
       </span>
      </div>
      <div>
      </div>
      <AgeProvider>
        <AgeForm/>
        <HeartZoneTable/>
      </AgeProvider>
    </>
  )
}

export default App
