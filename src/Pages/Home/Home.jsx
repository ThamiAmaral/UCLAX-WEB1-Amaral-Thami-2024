import styled from "styled-components";

import Inset from "@/Common/PagesLayout/Inset.jsx";
import Slideshow from "./Slideshow/Slideshow";
import Tabbed from "./Tabbed/Tabbed";
import ReactPlayer from "react-player";

const Home = () => {
    return (
        <HomeStyled>
            <h1>Home</h1>
            <Slideshow />
            <Inset>
                <Tabbed />
                <p>
                    <ReactPlayer url="https://www.youtube.com/watch?v=XNFuGQzwUq4" />{" "}
                </p>
            </Inset>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h1 {
        display: none;
    }
`;
