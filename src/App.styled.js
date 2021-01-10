import styled from 'styled-components/macro';

export const LinkContainer = styled.div`
display:flex;
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
`;

export const NavBarStyled = styled.div`
    height:100px;
    display:flex;
    border-bottom:1px solid #cdd5d7;
    box-shadow:0 0 4px 2px #dee3e5;

    img{
        padding:1rem;
        padding-left:2rem;
        height:55px;
        width:auto;
    }
    @media(max-width:900px){
        a{
            font-size:14px;
        }
    }
    @media(max-width:750px){
        ${LinkContainer}{
            display:none;
        }
    }
    @media(max-width:750px){
        height:auto;
        padding:1rem;
    img{
        height:35px;
        padding:0;
    }
    div :nth-child(1){
        margin:auto;
    }
}
`;

