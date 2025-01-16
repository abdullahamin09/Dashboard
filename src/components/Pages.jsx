import React from 'react'
import Searchbar from '/searchbar.svg'
import StaffDet from './StaffDet'

function Pages(props) {
  return (
    <div>
      <div className="top flex justify-between items-center">
        <div className="staf-heading-wrap flex items-center">
          <div className="info-circle-wrap">
            <img src="/images/info-circle.svg" alt="" />
          </div>
          <h1 className='pl-4'>{props.name}</h1>
        </div>
        <div className="search-wrap flex items-center">
          <div className="staffSearchbar">
            <img src={Searchbar} alt="" />
            <input className='searBar_set' placeholder='Search by name, email, phone' type="text" name="" id="" />
          </div>
          <div className="active">
            <input className='checkbox' type="checkbox" name="active" id="active" />
            <p>Active</p>
          </div>
          <div className="btn-wrap">
            <button><span>+</span>Add</button>
          </div>
        </div>
      </div>
      <div className="bottom pt-4">
        <div className=" staf-dets grid grid-cols-12">
          <div className="user col-span-5">User</div>
          <div className="status col-span-2">Status</div>
          <div className="joined col-span-2">Joined at</div>
          <div className="type col-span-2">Type</div>
          <div className=""></div>
        </div>
        <div className="staff-dets-info">
          <StaffDet image="/images/Avatar1.png" name="Olivia Rhye" email="oliva.rhye@gmail.com" status="Active" date="24 Jan, 2023" type="GP" />
          <StaffDet image="/images/Avatar2.png" name="Ali Rhye" email="oliva.rhye@gmail.com" status="Active" date="24 Jan, 2023" type="GP" />
          <StaffDet image="/images/Avatar3.png" name="wahab Rhye" email="oliva.rhye@gmail.com" status="Active" date="24 Jan, 2023" type="Nurse Practitioner" />
          <StaffDet image="/images/Avatar4.png" name="rehan Rhye" email="oliva.rhye@gmail.com" status="Active" date="24 Jan, 2023" type="GP" />
          <StaffDet image="/images/Avatar5.png" name="Olivia Rhye" email="oliva.rhye@gmail.com" status="Active" date="24 Jan, 2023" type="GP" />
          <StaffDet image="/images/Avatar6.png" name="Olivia Rhye" email="oliva.rhye@gmail.com" status="inactive" date="24 Jan, 2023" type="Admin" />
          <StaffDet image="/images/Avatar7.png" name="Olivia Rhye" email="oliva.rhye@gmail.com" status="Active" date="24 Jan, 2023" type="GP" />
          <StaffDet image="/images/Avatar8.png" name="Olivia Rhye" email="oliva.rhye@gmail.com" status="Active" date="24 Jan, 2023" type="System Admin" />
          <StaffDet image="/images/Avatar9.png" name="Olivia Rhye" email="oliva.rhye@gmail.com" status="inactive" date="24 Jan, 2023" type="Practice Manager" />
          <StaffDet image="/images/Avatar1.png" name="Olivia Rhye" email="oliva.rhye@gmail.com" status="Active" date="24 Jan, 2023" type="GP" />
        </div>
      </div>
      <div className="footer flex justify-between bg-white items-center px-4 py-5">
        <div className="page-number">Page 1 of 10</div>
        <div className="btns-wrap">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Pages