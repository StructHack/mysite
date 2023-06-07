import React, {useState, useEffect} from 'react'
import Nav from './Nav'

function Navigation() {
    const [clicked, setClicked] = useState(false);
    const [show, setShow] = useState('hide_nav');

    useEffect(()=>{
        if(clicked == false){
            setShow('hide_nav')
        }else{
            setShow('show_nav')
        }
       
    }, [clicked])

    const clickHandler = ()=>{
        if(window.innerWidth < 600){
            setClicked(!clicked);
        }
    }


  return (
    <div className='main-nav-container'>
        <div className='mobile-nav-container'>
            <span className='logo'>WEB A MESS</span>
            <span className='ham-icon'>
                <i className="fa fa-bars" onClick={clickHandler}></i>
            </span>
        </div>
        <Nav value={show} clickhandle={clickHandler}/>
    </div>
  )
}

export default Navigation