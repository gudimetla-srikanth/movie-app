import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
export default function Home({ resData }) {
    const navigate = useNavigate()
    return (
        <div className="home">
            <h1>Shows for you</h1>
            <div className="home_shows">
                {resData?.map((item, index) => {
                    return <div className="show_cards" key={index} onClick={() => navigate('/showDetails', { state: item })}>
                        <img src={item?.show?.image?.original} alt="" />
                        <div className="show_item"><span>Show name</span> : {item.show.name}</div>
                        <div className="show_item"><span>Status</span> : {item.show.status}</div>
                        <div className="show_item"><span>Language</span> : {item.show.language}</div>
                    </div>
                })}
            </div>
        </div>
    )
}
