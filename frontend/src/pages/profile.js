import '@fontsource/roboto';
import './profile.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import { AiOutlineLeft, AiOutlineEllipsis } from 'react-icons/ai';
import image1 from '../images/clocktower.jpg'
import image2 from '../images/gorge.jpg'


function Profile() {
  return (
    <>
    <div className="profileTop">
      <AiOutlineLeft size={18} color={"white"}/>
      <h4>Profile</h4>
      <AiOutlineEllipsis size={23} color={"white"}/>

    </div>

    	<div className="container">

    		<div className="profile">

    			<div className="profile-image">

    				<img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />

    			</div>

    			<div className="profile-user-settings">

    				<h1 className="profile-user-name">Angela Chen</h1>
            <h3 >About me: A student in Ithaca, enjoys going out for food and activities.</h3>

    			</div>

    			<div className="profile-stats">

    				<ul>
    					<li><span className="profile-stat-count">164</span> posts</li>
    					<li><span className="profile-stat-count">188</span> followers</li>
    					<li><span className="profile-stat-count">206</span> following</li>
    				</ul>
            <div className="buttonWrapper1">
              <button className="profileButton1">Follow</button>
            </div>
            <div className="buttonWrapper2">
              <button className="profileButton2">Message</button>
            </div>

            <div className="bigView">
              <img src={image1} />
              <img src={image2} />
            </div>
    		  </div>



    		</div>

    	</div>
    </>
  );
}

export default Profile;
