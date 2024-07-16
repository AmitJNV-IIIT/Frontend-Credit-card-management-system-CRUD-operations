import React from 'react'
import Userheader from '../components/UserHeader/Userheader'
import Card from '../components/Card/Card'
import Tagline from '../components/Tagline/Tagline'
import TransactionList from '../components/Transactions/TransactionList'
import './UserProfile.css'
import UserProfileItem from '../components/UserProfile/UserProfileItem'
import ToggleSwitch from '../components/ToggleSwitch/ToggleSwitch'

const UserProfile = () => {
    const tabData = [
        { label: "Tab 1" },
        { label: "Tab 2" }
    ];
  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <source src="/assets/4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Userheader/>

      <div className="profilepage">
        <div className="left-content">
          <UserProfileItem/>
        </div>
        <div className="right-content">
          <ToggleSwitch tabs={tabData}/>
          
        </div>
      </div>

    </>
  )
}

export default UserProfile
