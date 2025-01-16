import React from 'react'
import "./Dashboard.scss"
import CapsuleLogo from '/capsulelogo.png'
import Img1 from '../assets/Page1.svg'
import Img2 from '../assets/Page2.svg'
import Img3 from '../assets/Page3.svg'
import Img4 from '../assets/Page4.svg'
import Img5 from '../assets/Page5.svg'
import Img6 from '../assets/Page6.svg'
import Img7 from '../assets/Page7.svg'
import Img8 from '../assets/Page8.svg'
import Navbar from './Navbar'
import Pages from './Pages'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <div className='container mainDashboard flex flex-row'>
            <div className="left ">
                <div className="img">
                    <img src={CapsuleLogo} alt="" />
                </div>
                <div className="pages pl-2 flex flex-row">
                    <ul className="navigationItem">
                        <li className='mb-1' ><img src={Img1} alt="" /></li>
                        <li className='mb-1'><img src={Img2} alt="" /></li>
                        <li className='mb-1'><img src={Img3} alt="" /></li>
                        <li className='mb-1'><img src={Img4} alt="" /></li>
                        <li className='mb-1'><img src={Img5} alt="" /></li>
                        <li className='mb-1'><img src={Img6} alt="" /></li>
                        <li className='mb-1'><img src={Img7} alt="" /></li>
                        <li className='mb-1'><img src={Img8} alt="" /></li>
                    </ul>
                    <div className="itemsDetails px-4">
                        <h1>Settings</h1>
                        <ul >
                            <li><Link className='itemsDetails-link'>Profile</Link></li>
                            <li><Link className='itemsDetails-link'>Staff</Link></li>
                            <li><Link className='itemsDetails-link'>Clinics</Link></li>
                            <li><Link className='itemsDetails-link'>Job Settings</Link></li>
                            <li><Link className='itemsDetails-link'>Lookup Values</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="right">
                <Navbar />
                <div className="pages">
                    <Pages />
                </div>
            </div>
        </div>
    )
}

export default Dashboard