import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import QuestionAnswer from "./QuestionAnswer";
import Questions from "./Questions";
import "./Services.css";
const Services = () => {

    const [accordionActive, setAccordionActive] = useState(false)
    const [questionsData, setQuestionsData] = useState(Questions)

    useEffect(() => {

    }, [questionsData])

    console.log(questionsData);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-10 col-xl-11 col-md-11 col-sm-12 m-auto">
                        <div className="container">
                            <h2 className="services-title">
                                Sorular ve Cevaplarla
                                <br className="d-md-inline" />
                                Medikal Hizmetler</h2>
                            <br />
                            <Accordion defaultActiveKey="1">
                                {questionsData.map((element, index) => {
                                    
                                    return (

                                        <div key={index}>
                                            <QuestionAnswer
                                        oKey={index}
                                        id={element.id}
                                        title={element.title}
                                        date={element.date}
                                        questions={element.questions}
                                        feedBack={element.feedBack}
                                        accordionActive={accordionActive}
                                        setAccordionActive={setAccordionActive}
                                    />
                                        </div>
                                    )
                                })}

                                 {/* <QuestionAnswer
                                    id={questionsData[0].id}
                                    title={questionsData[0].title}
                                    date={questionsData[0].date}
                                    questions={questionsData[0].questions}
                                    feedBack={questionsData[0].feedBack}
                                    accordionActive={accordionActive}
                                    setAccordionActive={setAccordionActive}
                                />  */}
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
