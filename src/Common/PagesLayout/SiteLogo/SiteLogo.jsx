import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/
import logoUrl from "./car-logo.png";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="Car Logo" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #bb1e13;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: auto;
    }
`;
