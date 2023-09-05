import React, { useState } from 'react';
import AccountNavbar from './NAV/AccountNavbar';
import { Outlet } from 'react-router-dom'
import { MDBCol, MDBRow, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit';
import Orders from './NestedPage/Orders';
import MyAccountPage from './NestedPage/MyAccountPage';

function AccountPage() {

    const [activePage, setActivePage] = useState('MyAccount')

    const handleActiveClick = (value: string) => {
        if (value !== activePage) {
            setActivePage(value);
        }
    }

    return (
        <>
            <MDBRow>
                <MDBCol size='3'>
                    <MDBTabs pills className='flex-column text-center'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleActiveClick('MyAccount')} active={activePage === 'MyAccount'}>
                                Mon Compte
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleActiveClick('Orders')} active={activePage === 'Orders'}>
                                Mes Commandes
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                </MDBCol>
                <MDBCol size='9'>
                    <MDBTabsContent>
                        <MDBTabsPane show={activePage === 'MyAccount'}><MyAccountPage/></MDBTabsPane>
                        <MDBTabsPane show={activePage === 'Orders'}><Orders/></MDBTabsPane>
                    </MDBTabsContent>
                </MDBCol>
            </MDBRow>
        </>
    );
}

export default AccountPage;