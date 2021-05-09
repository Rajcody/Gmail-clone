import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import{useDispatch} from 'react-redux'
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
 const dispatch = useDispatch();
    return (
        <div className='sidebar'>
                <Button onClick={()=>dispatch(openSendMessage())}
                className='sidebar__compose' 
                startIcon={<AddIcon font-size='large' />}>
                    Compose
                </Button>
                < SidebarOption 
                Icon={InboxIcon} title='Inbox'  number={54} selected={true}/>
                < SidebarOption 
                Icon={StarIcon} title='Starred'  number={54}/>
                < SidebarOption 
                Icon={AccessTimeIcon} title='Snoozed'  number={54}/>
                < SidebarOption 
                Icon={LabelImportantIcon} title='Important'  number={54}/>
                < SidebarOption 
                Icon={SendIcon} title='Sent'  number={54}/>
                < SidebarOption 
                Icon={NoteIcon} title='Drafts'  />
                < SidebarOption 
                Icon={ExpandMoreIcon} title='More' />

                <div className='sidebar__footer'>
                    <div className='sidebar__footerIcons'>
                        <IconButton>
                            <PersonIcon/>

                        </IconButton>
                        <IconButton>
                            <DuoIcon/>
                        </IconButton>
                    </div>
                </div>
                
            
        </div>
    )
}

export default Sidebar