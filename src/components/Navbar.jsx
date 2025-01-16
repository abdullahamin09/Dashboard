import React from 'react'
import Weather from '/weather.png'
import BellIcon from '/Bell_Icon.svg'
import ProfileImg from '/Profile.svg'
import Searchbar from '/searchbar.svg'
import Searchbar2 from '/searchbar2.png'

function Navbar() {
    return (
        <div className='navbar flex flex-row items-center justify-between'>
            <div className='morning'>
                <p>Good morning, <span>Richelle</span></p>
            </div>
            <div className="timeDetails flex flex-row items-center ml-4">
                <div className="time flex flex-col justify-center">
                    <p>08:55</p>
                    <p>Fri, 18 Oct</p>
                </div>
                <div className="weather flex items-center ml-4">
                    <div className="weather-det">
                        <p>12</p>
                        <p>°C°F</p>
                    </div>
                    <img src={Weather} alt="" />
                </div>
                <div className="searchBar ml-4">
                    <img className='serachlogo' src={Searchbar} alt="" />
                    <input className="nav_searbar pl-3" type="text" placeholder='Search' name="Search" id="Search" />
                    <img src={Searchbar2} alt="" />
                </div>
                <div className="bell-icon pl-4">
                    <img src={BellIcon} alt="" />
                </div>
                <div className="profileImg pl-4">
                    <img src={ProfileImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar