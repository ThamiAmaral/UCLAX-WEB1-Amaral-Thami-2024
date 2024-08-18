import styled from 'styled-components';
import PropTypes from "prop-types";

// components
import Submission from './Submission';

const Submissionlist = ({ submissions }) => {
    return <SubmissionlistStyled>
        
            {
                submissions.map((sub) => {
                    return <Submission key={ sub.id } sub={ sub } />;
                })
            }

        </SubmissionlistStyled>;
};

export default Submissionlist;

// prop-types
Submissionlist.propTypes = {
    submissions: PropTypes.array.isRequired,
};

const SubmissionlistStyled = styled.div`
    margin: 20px 0px;
`;