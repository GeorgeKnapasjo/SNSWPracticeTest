import styled from 'styled-components/macro';

export const BannerWrapper = styled.div`
    display:flex;
    img{
        width:100vw;
        position:absolute;

    }
    h1{
        color:white;
        position:relative;
        margin:0;
        margin-top:6rem;
        margin-left:4rem;
    }
    h3{
        color:white;
        position:relative;
        margin:0;
        margin-top:1rem;
        margin-left:4rem;
    }
    @media(max-width:1000px){
        h1{
            margin-top:2rem;
            margin-left:2rem;
        }
        h3{
            margin-left:2rem;
        }
    }
    @media(max-width:750px){
        h1{
            font-size:18px;
        }
        h3{
            font-size:16px;
        }
    }
    @media(max-width:500px){
        h1{
            margin-left:1rem;
            margin-top:1rem;
        }
        h3{
            display:none;
        }
    }
`;

export const PopularPages = styled.div`
    
`;