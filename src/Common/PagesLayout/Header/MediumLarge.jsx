import styled from "styled-components";
import { NavLink } from "react-router-dom";

/* Components ---------------------------*/
import Inset from "../Inset.jsx";
import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import MainMenu from "./MainMenu.jsx";

const MediumLarge = () => {
    return (
        <MediumLargeStyled className="MediumLarge">
            <Inset>
                <div className="inset">
                    <div className="logo">
                        <SiteLogo />
                    </div>
                    <div className="menus">
                        <MainMenu />
                    </div>
                </div>
            </Inset>
        </MediumLargeStyled>
    );
};

export default MediumLarge;

const MediumLargeStyled = styled.div`
    background-color: #ffffff;
    color: var(--primary-color);

    .logo {
        .SiteLogo {
            width: 25%;
            margin: auto;
            padding: 20px 0px;
        }
    }

    nav {
        text-align: center;
        a {
            width: 80px;
            display: inline-block;

            line-height: 30px;
            margin: 0px 0px 20px 5px;
            border-bottom: solid 3px #031f2e;

            text-align: center;
            font-size: 12px;
            opacity: 0.8;
            color: #031f2e;
            font-weight: bold;
            text-decoration: none;
            text-transform: uppercase;

            &:hover,
            &:active,
            &:focus {
                opacity: 1;
            }

            &.active {
                color: #b70c0c;
                border-bottom-color: white;
            }
        }
    }
`;
