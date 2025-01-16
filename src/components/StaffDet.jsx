import React from 'react'
import './StaffDet.scss'
import { useState, useRef, useEffect } from 'react';


function StaffDet(props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  const statusClass = props.status === 'inactive' ? 'red-status':'green-status';
  return (
    <div>
      <div className="staff-dets-info-wrap grid grid-cols-12">
        <div className="user flex items center col-span-5">
          <img src={props.image} alt="" />
          <div className="details flex flex-col">
            <p className='staff-name'>{props.name}</p>
            <p className='staff-email'>{props.email}</p>
          </div>
        </div>
        <div className="status col-span-2">
          <div className="status-wrap flex items-center justify-center">
            <p className={statusClass} >{props.status}</p>
          </div>
        </div>
        <div className="joined col-span-2">{props.date}</div>
        <div className="type col-span-2">
          <div className="type-wrap">
            <p>{props.type}</p>
          </div>
        </div>
        <div className="dropdown relative inline-block text-left" ref={dropdownRef}>
          <div className='btn-wrap flex justify-center'>
            <button type="button"
              className="dropdown-btn inline-flex  justify-center gap-x-1.5 rounded-md  px-3 py-2 shadow-xs focus:outline-none  focus:ring-0" id="menu-button" aria-expanded="true" aria-haspopup="true"
              onClick={toggleDropdown}
              // aria-expanded ={isOpen}
              // aria-haspopup="true"
            >
              <div className="dropdown-wrap">
                <img src="/MenuDots.png" alt="" />
              </div>
            </button>
          </div>

          {isOpen && (
            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div className="py-1" role="none">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Assign Job</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Send Invite</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">Message</a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default StaffDet