
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';



export default function DroppedNav() {
    
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div className='dropedBox'
        // className={clsx(classes.list, {
        //     [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        // })}
        // role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="menu1">
                <div className='title'> <hr /><p>Menue</p>

                </div>
                <div>
                    <a href="/"><h3>Acceuil</h3></a>
                    <a href="/packs"><h3>Packs</h3></a>
                    <a href="/gallery"><h3>Gallerie</h3></a>
                    <a href="/about-us"><h3>A propos</h3></a>
                </div>
            </div>
            <div className="menu2">
                <div className='title'> <hr /><p>Contact</p></div>
                <div>

                </div>
            </div>
        </div>
    );

    return (
        <div>
            {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button ><img src='./pics/icones/toggle.png' onClick={toggleDrawer(anchor, true)} className="mr-2" width='36px' height='14px' /></Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
        //
