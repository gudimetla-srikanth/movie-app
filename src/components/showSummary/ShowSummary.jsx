import React, { useState } from 'react'
import './ShowSummary.css'
import { useLocation } from 'react-router-dom'
export default function ShowSummary() {
    const { state } = useLocation()
    const [data, setData] = useState({

    })
    const [formTab, setFormTab] = useState(false)
    console.log(state)
    const handle = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const dataHandle = (e) => {
        console.log(data)
        e.preventDefault()
        setFormTab(!formTab)
    }
    return (
        <div className="showsummary">
            <div className="showDetail">
                <div><img src={state?.show?.image?.original} alt="" /></div>
                <div><div className="showS_item"><span>Show Name</span> : {state.show.name}</div>
                    <div className="showS_item"><span>Show Language</span> : {state.show.language}</div>
                    <div className="showS_item"><span>Score</span> : {state.score}</div>
                    <div className="showS_item"><span>Show Avergae Runtime</span> : {state.show.averageRuntime}</div>
                    <div className="showS_item"><span>Show Rating</span> : {state.show.rating.average}</div>
                    <div className="showS_item"><span>Show Summary</span> : {state.show.summary}</div>
                    <div className="showS_item"><span>Show Status</span> : {state.show.status}</div>
                    <div className="showS_item"><span>Show url</span> : {state.show.url}</div>
                    <div className="showS_item"><span>Show type</span> : {state.show.type}</div>
                    <div className="form_button" onClick={() => setFormTab(!formTab)}>Book your Show</div></div>
            </div>
            {formTab && <div className="form"><form onSubmit={dataHandle}>
                <h1>Book your seat</h1>
                <div className="form_item">
                    <span>Show Name</span> <input type="text" placeholder={state.show.name} disabled />
                </div>
                <div className="form_item">
                    <span>Show language</span> <input type="text" placeholder={state.show.language} disabled />
                </div>
                <div className="form_item">
                    <span>Show rating average</span>  <input type="text" placeholder={state.show.rating.average} disabled />
                </div>
                <div className="form_item">
                    <span>Audien Name</span>  <input type="text" placeholder='Enter Your Name' required onChange={handle} />
                </div>
                <div className="form_item">
                    <span>Number of seats</span>  <input type="number" onChange={handle} placeholder='1' required />
                </div>
                <div className="form_item">
                    <span>location</span>   <input type="text" placeholder='Enter your location' onChange={handle} />
                </div>
                <div className="form_item">
                    <button type='submit'>submit</button>
                </div>
            </form></div>}
        </div>
    )
}
