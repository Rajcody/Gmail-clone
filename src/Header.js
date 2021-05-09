import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css'
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useHistory } from 'react-router';

function Header() {
    const history=useHistory();
    const user = useSelector(selectUser);
    const dispatch= useDispatch();
    const signOut=()=>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })
        

    }
    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton>
                    <MenuIcon/>
                </IconButton> 
                <img className='image'
                    onClick={()=>history.push('/')}
                 src='https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg'
                  alt='Gmail'/>

            </div>
            <div className='header__middle'>
                <SearchIcon/>
                <input placeholder='Search mail' type='text'/>
                <ArrowDropDownIcon className='header__input'/>

            </div>
            <div className='header__right'>
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>

                </IconButton>
                <IconButton>
                    <Avatar className='avatar' onClick={signOut} src={user?.photoUrl} />
                </IconButton>

            </div>

        
            
        </div>
    )
}

export default Header
