import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// components
import Inset from "@/Common/PagesLayout/Inset.jsx";
import SubmissionList from "./SubmissionList";
import Form from "./Form";

const Contact = () => {
    const [submissions, setSubmissions] = useState([]);

    const getSubmissions = async () => {
        const { data } = await axios.get("http://localhost:4059/submissions");
        setSubmissions(data);
    };

    useEffect(() => {
        getSubmissions();
    }, []);

    return (
        <ContactStyled>
            <Inset>
                <h1>Contact</h1>
                <p>
                    {" "}
                    Reach out to us for an estimate! At Da Silva Paint, we offer
                    expert painting services including whole car paint, parts,
                    doors, bumpers, fenders, and roofs, as well as repairs after
                    accidents. We also accept insurance for your convenience.
                    Contact us at 973-313-0000 or email dasilvapaint@dasilva.com
                    to get the perfect finish for your vehicle!.
                </p>
                <Form getSubmissions={getSubmissions} />
                <SubmissionList submissions={submissions} />
            </Inset>
        </ContactStyled>
    );
};

export default Contact;

const ContactStyled = styled.div`
    h1 {
        color: #031f2e;
    }
`;
