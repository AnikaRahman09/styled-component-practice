import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.footer};
    color: #fff;
    padding: 40px;
    
    ul{
        list-style: none;
    }

    ul li{
        margin-bottom: 20px;
    }

    p{
        text-align: right;
    }
`