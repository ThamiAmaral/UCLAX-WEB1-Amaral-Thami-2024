import styled from "styled-components";
import PropTypes from "prop-types";

import Accolades from "./Accolades/Accolades";

const StaffMember = ({ member }) => {
    const { name, image, yearStarted, accoladTitle, accolades } = member;

    return (
        <StaffMemberStyled>
            <img src={image} alt={name} />
            <h3>{name}</h3>

            <div className="bottom">
                <p>
                    <b>Year Started:</b> {yearStarted}
                </p>

                <h4>{accoladTitle}</h4>

                <Accolades accolades={accolades} />
            </div>
        </StaffMemberStyled>
    );
};

export default StaffMember;

// prop-types
StaffMember.propTypes = {
    member: PropTypes.object.isRequired,
};

const StaffMemberStyled = styled.div`
    background-color: #eeeeee;

    img {
        width: 100%;
        display: black;
    }

    .bottom {
        padding: 20px;
    }

    h3 {
        color: white;
        background-color: #b70c0c;
        padding: 5px 10px;
        margin: 0px;
    }

    h4 {
        font-size: 14px;
        color: #031f2e;
    }
`;
