import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styles from "../styles/components/Menu.module.css";
import InputAgency from './InputAgency';

const Menu = (props) => {


    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);



    return (
        <div className={styles.MenuContainer}>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="me-auto" >Menu</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/AddEquip">Adicionar Equipamento</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/RemoveEquip">Remover Equipamento</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/AddAgency">Adicionar Agência</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/GerarPDF">Gerar Relatório</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>



    );
}
export default Menu;