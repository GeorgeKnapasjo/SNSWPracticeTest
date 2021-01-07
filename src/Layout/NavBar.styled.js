import styled from 'styled-components/macro';

export const Logo = styled.img`
    height: 40vmin;
    pointer-events: none;
`;

export const NavBarStyled = styled.div`
    height:100px;
    display:flex;
    border-bottom:1px solid #cdd5d7;
    box-shadow:0 0 4px 2px #dee3e5;
    a{
        text-decoration:none;
        color:black;  
        padding:1rem;
        margin:1rem;
        font-size:20px;
        display:flex;
        align-items:center;
    }
    a:hover{
        cursor:pointer;
    }
    img{
        padding:1rem;
        padding-left:2rem;
    }
`;

