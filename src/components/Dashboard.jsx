import React, { useState } from 'react';
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
import { Link, Route, Router, Routes } from 'react-router-dom'

function Dashboard() {
    const [visibleSection, setVisibleSection] = useState('settings');

    const handleNavigationClick = (section) => {
        setVisibleSection(section);
    };
    return (
        <div className='container mainDashboard flex flex-row'>
            <div className="left ">
                <div className="img">
                    <img src={CapsuleLogo} alt="" />
                </div>
                <div className="pages pl-2 flex flex-row">
                    <ul className="navigationItem">
                        <li className='mb-1' onClick={() => handleNavigationClick('list-item1')} ><img src={Img1} alt="" /></li>
                        <li className='mb-1'><img src={Img2} alt="" /></li>
                        <li className='mb-1'><img src={Img3} alt="" /></li>
                        <li className='mb-1'><img src={Img4} alt="" /></li>
                        <li className='mb-1'><img src={Img5} alt="" /></li>
                        <li className='mb-1'><img src={Img6} alt="" /></li>
                        <li className='mb-1'><img src={Img7} alt="" /></li>
                        <li className='mb-1' onClick={() => handleNavigationClick('settings')} ><img src={Img8} alt="" /></li>
                    </ul>
                    <div className="itemsDetails px-4">
                        {visibleSection === 'settings' && (
                            <div className="settings">
                                <h1>Settings</h1>
                                <div className="settings-wrap">
                                    <Link to="/profile" className='itemsDetails-link'>Profile</Link>
                                    <Link to="/" className='itemsDetails-link'>Staff</Link>
                                    <Link to="/clinics" className='itemsDetails-link'>Clinics</Link>
                                    <Link to="/Job-settings" className='itemsDetails-link'>Job Settings</Link>
                                    <Link to="/lookup-values" className='itemsDetails-link'>Lookup Values</Link>
                                </div>
                            </div>
                        )}
                        {visibleSection === 'list-item1' && (
                            <div className="list-item1">
                                <h1>list-item1</h1>
                                <div className="settings-wrap">
                                    <Link to="/profile" className='itemsDetails-link'>Profile</Link>
                                    <Link to="/" className='itemsDetails-link'>Staff</Link>
                                    <Link to="/clinics" className='itemsDetails-link'>Clinics</Link>
                                    <Link to="/Job-settings" className='itemsDetails-link'>Job Settings</Link>
                                    <Link to="/lookup-values" className='itemsDetails-link'>Lookup Values</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="right">
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route exact path="/" element={<Pages name="Staff" />} />
                        <Route path="/profile" element={<Pages name="Profile" />} />
                        <Route path="/clinics" element={<Pages name="Clinics" />} />
                        <Route path="/job-settings" element={<Pages name="Job Settings" />} />
                        <Route path="/lookup-values" element={<Pages name="Lookup Values" />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Dashboard