import styled from 'styled-components/macro';
import LoadingSpinner from './Layout/LoadingSpinner'

export const CardContainer = styled.div`
    margin:auto;
    margin-top:2rem;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    h1{
        width:90vw;
        margin:auto;
        padding:2rem;
    }
`;

export const LoadingSpinnerContainer = styled.div`
    height:120px;
    width:120px;
    margin:auto;
    margin-top:3rem;
    LoadingSpinner{
        margin:auto;
    }
`;

export const StyledCard = styled.div`
    margin:auto;
    margin-top:1rem;
    margin-bottom:1rem;
    width:600px;
    padding:1.5rem;
    box-shadow:0 0 4px 2px #dee3e5;
    border-radius:15px;
    h2{
        margin-top:0;
    }
    a{
        text-decoration:none;
        color:black;
    }
    :hover{
        background-color:#d4d4d4;
        transition: background-color .1s ease-in-out,color .1s ease-in-out;
    transition-property: background-color, color;
    transition-duration: 0.1s, 0.1s;
    transition-timing-function: ease-in-out, ease-in-out;
    transition-delay: 0s, 0s;
    }
    img{
        height:90px;
        width:90px;
        float:right;
    }
    border:1px solid #d5d5d5;
`;
