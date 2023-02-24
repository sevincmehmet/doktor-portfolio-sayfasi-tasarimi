import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import QuestionAnswer from "./QuestionAnswer";
import Questions from "./ArrQuestions";
import { Routes, Route, Link, NavLink } from "react-router-dom"

import "./Services.css";
const Services = () => {
    const [questionsData, setQuestionsData] = useState(Questions)

    useEffect(() => {

    }, [questionsData])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-10 col-xl-11 col-md-11 col-sm-12 m-auto">
                        <div className="container">
                            <h2 className="services-title">
                                Sorular ve Cevaplarla
                                Medikal Hizmetler</h2>
                            <br />
                            <Accordion defaultActiveKey="1">
                                {questionsData.map((element, index) => {

                                    return (

                                        <div key={index}>
                                            <QuestionAnswer
                                                id={element.id}
                                                title={element.title}
                                                date={element.date}
                                                questions={element.questions}
                                                feedBack={element.feedBack}
                                            />
                                        </div>
                                    )
                                })}
                            </Accordion>
                            <Link
                                to="/allQuestions"
                                style={{ color: "white", marginLeft: "0" }}
                                id="allQuestionsBtn"
                                className="nav-link btn btn-primary"
                            >
                                Tüm Sorular
                            </Link>

                            <div className="accordion"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Services;
