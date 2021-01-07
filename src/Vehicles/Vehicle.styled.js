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
    margin:auto;
    padding:1rem;
    padding-bottom:2rem;
    border-radius:15px;
    box-shadow:0 0 4px 2px #dee3e5;
    h4{
        display:inline;
    }
    h2{
        padding:1rem;
        margin-bottom:2rem;
    }
    p{
        margin-left:-4rem;
        padding-bottom:1rem;
    }
    border: 1px solid #d5d5d5
`;

export const VehicleDetails = styled.div`
    margin-left:auto;
    margin-right:auto;
`;

export const RegistrationDetails = styled.div`
    margin-left:auto;
    margin-right:auto;
`;
