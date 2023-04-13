import React from 'react'
import Nav from './Nav'
import Img1 from '../images/chae-soo-bin.jpg'
import Img2 from "../images/kim-sejeong.jpg"
import Img3 from "../images/park-minyoung-ideal-type.jpg"

const bgColor = {
    backgroundColor : "#EDEEFF"
}

export default function Home() {
    return (
        <>
            <Nav/>
            <section className='container'>
                <div className='row my-3 py-5 rounded shadow-lg' style={bgColor}>
                    <div className='col-md-6'>
                        <div className='justify-content-center d-flex'>
                            <img src={Img1 } alt='some' width="200" height="200" className='rounded shadow-lg'/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='pt-5'>
                            <p>Here, an unvisited link will be green with no underline. A visited link will be pink with no underline. An active link will be yellow and underlined. In addition, when mousing over a link (a:hover) it will become red and underlined</p>
                        </div>
                    </div>
                </div>

                <div className='row my-3 py-5'>
                    <div className='col-md-6'>
                        <div className='pt-5'>
                            <p>Here, an unvisited link will be green with no underline. A visited link will be pink with no underline. An active link will be yellow and underlined. In addition, when mousing over a link (a:hover) it will become red and underlined</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='justify-content-center d-flex'>
                            <img src={Img2 } alt='some'  width="200" height="200" className='rounded shadow-lg'/>
                        </div>
                    </div>
                </div>

                <div className='row my-3 py-5 rounded shadow-lg' style={bgColor}>
                    <div className='col-md-6'>
                        <div className='justify-content-center d-flex'>
                            <img src={Img3 } alt='some'  width="200" height="200" className='rounded shadow-lg'/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='pt-5'>
                            <p>Here, an unvisited link will be green with no underline. A visited link will be pink with no underline. An active link will be yellow and underlined. In addition, when mousing over a link (a:hover) it will become red and underlined</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
