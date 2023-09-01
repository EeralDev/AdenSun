import React from 'react';
import AccountNavbar from './NAV/AccountNavbar';
import { Outlet } from 'react-router-dom'

function AccountPage() {
    return (
        <>
            <AccountNavbar></AccountNavbar>
            <p>Page mon compte</p>
            <Outlet />
        </>
    );
}

export default AccountPage;