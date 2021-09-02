import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import img1 from './image/img1.jpg';
import img2 from './image/img2.jpg';
import img3 from './image/img3.jpg';
import img4 from './image/img4.jpg';
import img5 from './image/img5.jpg';
import img6 from './image/img6.jpg';
import img7 from './image/img7.png';
import img8 from './image/img8.png';
import img9 from './image/img9.png';



// import img from './image/img1.png';
function Post(props) {
  return <div className="main-div">
    <p><img src={props.img1} align='bottom' className='img'/><span className='name'><strong>{props.name}</strong></span>
    <br/><span className='time'>Time:{new Date().toLocaleString().slice(11)}</span>
    </p>
    <p>{props.message}</p>
    <img src={props.img4} className='img2' width="100%" height="200px"/>
    <div className='bottomDiv'>
    <p><img src={img7} align='bottom' className='imgIcon'/>Like
    <img src={img8} align='bottom' className='imgIcon icon'/>Comment
    <img src={img9} align='bottom' className='imgIcon icon'/>Share</p>
    </div>
  </div>;
}

ReactDOM.render(
  <div>
  <Post 
  img1={img1} 
  name="Muhammad Bariq" 
  message="This is my awesome post" 
  img4={img4}/>
  <Post 
  img1={img2} 
  name="Bariq" 
  message="This is my awesome post" 
  img4={img5}/>
  <Post 
  img1={img3} 
  name="Siddiqui Sahab" 
  message="This is my awesome post" 
  img4={img6}/>
  </div>,
  document.querySelector('#root'));