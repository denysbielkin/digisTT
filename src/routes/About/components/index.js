import React, {Component} from 'react';
import {StyledAboutPage, StyledAboutBlock} from './styled';

export default class About extends Component {


    preparedSummary() {
        let summary =
            ' • Strong skills in Front-End programming' +
            ' • Strong understanding Scrum' +
            ' • Solid experience in ES6+' +
            ' • Solid experience with Git' +
            ' • Solid experience with React + Redux' +
            ' • Good practical understanding of OOP principles' +
            ' • Good experience with MacOS' +
            ' • Some experience with Babel, Gulp' +
            ' • Some experience with Webpack' +
            ' • Some experience with MongoDB' +
            ' • Some experience with Node.js, Express' +
            ' • English – Intermediate';

        const breakChar = '•';

        summary = summary.split(' ');
        summary = summary.map((item) => {
            if (item === breakChar) {
                return <span>
                    <br/>
                    {item}
                </span>
            } else return item + ' ';
        });

        return <div>{summary}</div>
    }

    render() {
        return (
            <StyledAboutPage>

                <h2>
                    Denys Bielkin - Front-end Developer
                </h2>

                <div>
                    <StyledAboutBlock>
                        <h3>Summary:</h3>
                        {this.preparedSummary()}
                    </StyledAboutBlock>


                    <StyledAboutBlock>
                        <h3>Languages & Technologies:</h3>
                        <div style={{width: '500px'}}>
                            <i>
                                AJAX; Babel; Bootstrap; CSS3; Datepicker.js; Express; Git; Gulp; HTML5; JavaScript;
                                jQuery;
                                jQuery-ui; js-md5; JSON; jsonwebtoken; Lodash.js; Moments.js; MongoDB; Node.js;
                                password-hash;
                                React-Bootstrap; React-Router; ReactJS; Redux; Scrum; styled-components; webpack; XML;
                                React-Table;
                                LESS; SASS; Font-Awesome; Jest; Enzyme; React-Redux-UI-Tools; React-DOM;
                                React-Router-DOM;
                                redux-form; Styled Component; Styled-Icons; Memoize-One; antd; React-Redux; Jira;
                            </i>
                        </div>
                    </StyledAboutBlock>
                    <StyledAboutBlock>
                        <h3>Work Experience:</h3>

                        <StyledAboutBlock>
                            <div> October 2018-June 2019</div>
                            <div> Junior Front-End Developer in AB-Soft</div>
                        </StyledAboutBlock>
                        <StyledAboutBlock>
                            <div> July-September 2018</div>
                            <div> Successfully completed the traineeship in AB-Soft</div>
                        </StyledAboutBlock>
                        <StyledAboutBlock>
                            <div>June-July 2018</div>
                            <div>Successfully completed the traineeship "Lohika JS Coding Camp" in Lohika</div>
                        </StyledAboutBlock>
                        <StyledAboutBlock>
                            <div> 1 Year of developing sites in academic goals.</div>
                            <div>Made a lot of medium and small size applications (among them CRUD applications), sites
                                with
                                adaptive markup in academic goals
                            </div>
                        </StyledAboutBlock>
                    </StyledAboutBlock>
                </div>


            </StyledAboutPage>
        )
    }
}