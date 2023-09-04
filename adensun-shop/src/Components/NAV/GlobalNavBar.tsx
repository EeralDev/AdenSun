import { useLocation, useNavigate } from 'react-router-dom';
import LoginLogout_BTN from '../BTN/LoginLogout_BTN';
import { useContext, useEffect, useState } from 'react';
import { LoginModalContext } from '../../Context/LoginModalContext';
import { UserContext } from '../../Context/UserContext';
import {  MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler } from 'mdb-react-ui-kit';
import { ICategory } from '../../DTO/DTOs';
import React from 'react';


function GlobalNavBar() {

    /*Hook permettant de recupérer le chemin courant */
    const location = useLocation();

    /*Hook permettant de gérer la navigation*/
    const navigate = useNavigate();

    /*Récupération du context² d'affichage de la modale*/
    const loginModal = useContext(LoginModalContext);
    const user = useContext(UserContext);

    /*Etats nécessaire a la NavBar */

    const [categoryList, setCategoryList] = useState <ICategory[]>([]);
    const [showNavBar, setShowNavBar] = useState(false);

    /*Use Effect de début de page */

    useEffect(() =>
    {
        fetch(`https://localhost:44316/api/Public/Category/0`).then((res) => res.json())
            .then(data => {
                const tmpCategoryList: ICategory[] = []
                data.forEach((item) => tmpCategoryList.push(item.Root.Category));
                setCategoryList(tmpCategoryList);
            });
    }, [])

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>

                    <MDBNavbarBrand href='/'>Aden's Sun</MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavBar(!showNavBar)}
                    >
                        <MDBIcon icon='caret-down' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showNavBar}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

                            <MDBNavbarItem>
                                <MDBNavbarLink active={true} aria-current='page' href='/'>
                                    Accueil
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                        Nos Produits
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        {
                                            categoryList.map((category, index) =>
                                            {
                                                return ((index + 1 !== categoryList.length) ?
                                                    <React.Fragment key={`RC_${category.CategoryID}`}>
                                                        <MDBDropdownItem key={`MDBDropdownItem_${category.CategoryID}`} link href={`/Item/${category.CategoryID}/1`}>{category.Name}</MDBDropdownItem>
                                                    </React.Fragment> :
                                                    <React.Fragment key={`RC_${category.CategoryID}`}>
                                                        <MDBDropdownItem key={`MDBDropdownItem_${category.CategoryID}`} link href={`/Item/${category.CategoryID}/1`}>{category.Name}</MDBDropdownItem>
                                                        <MDBDropdownItem key={`MDBDropdownItem_divider`} divider />
                                                        <MDBDropdownItem key={`MDBDropdownItem_all`} link href='/Item/0/1'>Tous nos produits</MDBDropdownItem>
                                                    </React.Fragment>                                                  

                                            )
                                            })
                                        }
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink onClick={() => { (user.user === null) ? loginModal.OpenModal() : navigate('/ShoppingCart') }}>Mon Panier</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink onClick={() => { (user.user === null) ? loginModal.OpenModal() : navigate('/Account') }}>Mon Compte</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink href='/About' >A propos</MDBNavbarLink>
                            </MDBNavbarItem>

                        </MDBNavbarNav>

                        <LoginLogout_BTN />
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}

export default GlobalNavBar;