import React from 'react';
import { Button } from './styles/Button.styled';
import { Container } from './styles/Container.styled';
import {Image, Logo, Nav, StyledHeader} from './styles/Header.styled'
import logo from '../images/logo.svg'
import mockupImg from '../images/illustration-mockups.svg'
import { Flex } from './styles/Flex.styled';

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src = {logo}/>
                    <Button>Try It Free</Button>                   
                </Nav>

                <Flex>
                    <div>
                    <h1>Build the community your fans will love</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corporis vel reprehenderit, aliquam sed nisi? Beatae nesciunt consectetur eveniet, aliquam rem earum iste, quas accusantium tempora eligendi cupiditate sint magnam!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, illo quam. Nesciunt dicta temporibus tenetur quis! Repellendus odio quo distinctio.
                    </p>

                    <Button bg = '#ff0099' color = '#fff'>Get Started For Free</Button>
                    </div>

                    <Image src = {mockupImg} alt= ""/>
                </Flex>

                
            </Container>
        </StyledHeader>
    );
};

export default Header;