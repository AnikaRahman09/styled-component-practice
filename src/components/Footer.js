import React from 'react';
import footImg from '../images/logo_white.svg';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <img src={footImg} alt="" />
                
                <Flex>
                    <ul>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis magni minus possimus suscipit neque!</li>
                        <li>+009237729037</li>
                        <li>website@huddle.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                    
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </Flex>

                <p>@copyright 2022 huddle. All rights reserved</p>
            </Container>
        </StyledFooter>
    );
};

export default Footer;