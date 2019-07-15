import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Button, message, notification} from 'antd';
import {urls, isTokenExist, storageTokenKey} from '../../common/constants';

export default function Navigation() {
    const isLoggedIn = () =>!isTokenExist && message.error('You have to log in!!');
    const signOut = () => {
        localStorage.removeItem(storageTokenKey);
        notification.info({message:'Signed out'});
        window.location.reload();
    };

    const {Item} = Menu;

    return (
        <Menu mode={'horizontal'} onClick={()=>isLoggedIn()}>
            <Item> <Link to={urls.routes.main}>Main</Link> </Item>
            <Item> <Link to={urls.routes.about}>About </Link> </Item>
            {isTokenExist && <Button onClick={()=>signOut()}>Sign out</Button>}
        </Menu>

    )
}
