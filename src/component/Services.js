import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import QuestionAnswer from "./QuestionAnswer";
import Questions from "./ArrQuestions";
import WOW from "wowjs"
import { Link } from "react-router-dom";


import "./Services.css";
const Services = () => {
    const [questionsData, setQuestionsData] = useState(Questions)

    useEffect(() => {

    }, [questionsData])

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();

    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-10 col-xl-11 col-md-11 col-sm-12 m-auto">
                        <div className="container">
                            <h2 className="services-title" style={{ padding: "0" }}>
                                Sorular ve Cevaplarla
                                Medikal Hizmetler</h2>
                            <br />
                            <Accordion defaultActiveKey="1">
                                {questionsData.map((element, index) => {

                                    return (

                                        <div
                                            data-wow-delay={`0.${index}`}
                                            className="wow fadeInDown" key={index}
                                        >
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

                            <div className="accordion"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Services;
