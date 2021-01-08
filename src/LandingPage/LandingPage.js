import React from 'react';
import SNSW from '../imgs/SNSW.jpg'
import { BannerWrapper } from './LandingPage.styled';

const LandingPage = () => {
    return(
        <BannerWrapper>
            <img src={SNSW}/>
            <div>
            <h1>Service NSW Registrations</h1>
            <h3>Access all your Registration information in one place</h3>
            </div>
        </BannerWrapper>
    )
}

export default LandingPage