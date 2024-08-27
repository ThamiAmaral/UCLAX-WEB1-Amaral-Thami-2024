import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2 className="essays-title">Essays</h2>

            <SingleEssay
                question={`E1: Explain the difference between HTML, CSS and JavaScript.`}
            >
                <ul>
                    <li>
                        HTML: Defines the structure and content of a webpage,
                        using elements like headings, paragraphs, and images.{" "}
                    </li>
                    <li>
                        CSS: Controls the visual presentation and layout of the
                        webpage, such as colors, fonts, and spacing.{" "}
                    </li>
                    <li>
                        JavaScript: Adds interactivity and dynamic behavior to
                        the webpage, enabling features like form validation,
                        animations, and real-time updates.{" "}
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`E2: What is the difference between Git and Github?`}
            >
                <ul>
                    <li>
                        GIT: Is a version control system that tracks changes in
                        code and allows multiple people to work on a project
                        simultaneously.{" "}
                    </li>
                    <li>
                        GitHub: Is a web-based platform that hosts Git
                        repositories, providing collaboration tools, version
                        control, and project management features in the cloud.{" "}
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`E3: What is the difference between JQuery and React?`}
            >
                <ul>
                    <li>
                        JQuery: Is a lightweight JavaScript library that
                        simplifies tasks like DOM manipulation, event handling,
                        and animations with a concise syntax.{" "}
                    </li>
                    <li>
                        React: Is a JavaScript library for building user
                        interfaces, particularly single-page applications, using
                        a component-based architecture that efficiently manages
                        UI state and updates.{" "}
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`E4: What is the difference between a Front-End and Back-End Developer?`}
            >
                <ul>
                    <li>
                        Front-End: Developers focus on the visual and
                        interactive aspects of a website, working with HTML,
                        CSS, and JavaScript to create the user interface.{" "}
                    </li>
                    <li>
                        Back-End: Developers handle the server-side logic,
                        databases, and application functionality, using
                        languages like Python, Java, or Node.js to manage data
                        and support the front-end.{" "}
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`E5: In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                <ul>
                    <li>
                        Root Relative: Starts from the root of domain or
                        application.aths start from the root of the project, so
                        they are consistent across all files.{" "}
                    </li>
                    <li>
                        Document Relative: ../ ./ Starts from the document you
                        are in. Paths are relative to the current file's
                        location, so the path changes depending on where the
                        file is located. .{" "}
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`E6: What is the difference between JPG, GIF, PNG and SVG images?`}
            >
                <ul>
                    <li>
                        JPG: It's a compression format best for photos with many
                        colors; it reduces file size but may lose image quality.{" "}
                    </li>
                    <li>
                        GIF: Supports animation and a limited 256-color palette,
                        making it ideal for simple graphics and short
                        animations.{" "}
                    </li>
                    <li>
                        PNG: A lossless compression format that supports
                        transparency, best for high-quality images,
                        illustrations, logos and graphics with text.{" "}
                    </li>
                    <li>
                        SVG: A vector format that scales infinitely without
                        losing quality, ideal for logos, icons, and
                        illustrations.{" "}
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`E7: Define the following Agile roles: Product Manager, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps.`}
            >
                <ul>
                    <li>
                        Product Manager: Defines the product vision, prioritizes
                        features, and manages the product roadmap.{" "}
                    </li>
                    <li>
                        Scrum Master: Facilitates Agile processes, removes
                        roadblocks, and ensures the team follows Scrum
                        practices.{" "}
                    </li>
                    <li>
                        UX Designer: Focuses on user experience, creating
                        designs that are user-friendly and visually appealing.{" "}
                    </li>
                    <li>
                        Developer/Engineer: Writes and maintains code,
                        implementing features and functionality.{" "}
                    </li>
                    <li>
                        QA/SDET: Ensures product quality through testing,
                        automating tests, and identifying defects.{" "}
                    </li>
                    <li>
                        DevOps: Manages deployment, infrastructure, and
                        continuous integration/continuous deployment - CI/CD -
                        processes, bridging development and operations.{" "}
                    </li>
                </ul>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div`
    .essays-title {
        color: #b70c0c;
    }
`;
