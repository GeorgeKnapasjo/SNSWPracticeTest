import styled from 'styled-components/macro';

export const VehicleWrapper = styled.div`
    margin:auto;
    margin-top:2rem;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    h1{
        width:90vw;
        margin:auto;
        padding:2rem;
        margin-bottom:1rem;
    }   
`;

export const VehicleContainer = styled.div`
    width:80vw;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin:auto;
    padding:1rem;
    padding-bottom:2rem;
    border-radius:15px;
    box-shadow:0 0 4px 2px #dee3e5;
    border: 1px solid #d5d5d5;
    @media(max-width:890px){
        flex-direction:column;
    }

`;

export const DetailsContainer = styled.div`
    width:25vw;
    margin-left:auto;
    margin-right:auto;
    h2{
        width:100%;
        padding-top:2rem;
        padding-bottom:1.5rem;
        padding-left:3rem;
    }
    p{
        display:inline-block;
        width:100%;
        margin-bottom:0;
    }
    h4{
        display:inline-block;
    }
    @media(max-width:890px){
        width:50vw;
        h2{
            padding-left:0;
            text-align:center;
        }
    }
    
`;
