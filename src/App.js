import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowSummary from './components/showSummary/ShowSummary'
import Home from './components/home/Home'
export default function App() {
  const [resData, setResData] = useState([])
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all').then(data => data.json()).then(data =>
      setResData(data)).catch(err => console.log(err))
  }, [])
  if (resData.length === 0) return <h1>Loading...</h1>
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home resData={resData} />} />
          <Route path='/showDetails' element={<ShowSummary />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
