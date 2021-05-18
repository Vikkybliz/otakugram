import React from 'react'
import './index.css'
import { Row, Col } from 'react-bootstrap'
import background from "./zero-removebg-preview.png"
import inosuke from './inosuke-removebg-preview.png'

const Home = () => {
    return (
        <div className="home">
            {/* <img className='bg' src={mine} alt="" /> */}
            <div className="welcome">
            <Row>
                <Col>
                    <h2 className='wor'>Welcome to</h2>
                    <h1 className='word wor'>Otaku Gram</h1>
                    <img className="bgot" src={background} alt="" />
                </Col>
                <Col>
                    <img  className='bgo' src={inosuke} alt="" />
                     <h4>A place for </h4>
                    <h2 className='worry'>Weebs😏</h2> 
                    <h4>to get Wallpapers and your favourite Anime Character Qoutes</h4>
                </Col>
            </Row>
            </div>
            <h5 className='text-center'>Made with ❤️️ by <a className='vikkybliz' href='https://twitter.com/vikkybliz' target='blank'>Vikkybliz</a></h5>
           {/* <img className='bg' src={mine} alt="" /> */}
        </div>
    )
}

export default Home
