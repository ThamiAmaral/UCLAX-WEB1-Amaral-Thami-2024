import styled from "styled-components";
import PropTypes from "prop-types";

const Slide = ({ slide }) => {
    const { title, image } = slide;

    return (
        <SlideStyled>
            <img src={image} alt={title} />
            <p className="legend">{title}</p>
        </SlideStyled>
    );
};

export default Slide;

// prop-types
Slide.propTypes = {
    slide: PropTypes.object.isRequired,
};

const SlideStyled = styled.div`
    img {
        width: 100%; /* Ensure the image fills the container's width */
        height: 600px; /* Set a consistent height for all images */
        object-fit: cover; /* Ensure the image covers the container area without distortion */
    }
`;
