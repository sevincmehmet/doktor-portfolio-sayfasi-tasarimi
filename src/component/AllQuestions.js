import Navbar from "./Navbar"
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import QuestionAnswer from "./QuestionAnswer";
import Questions from "./ArrQuestions";
import ScrollToTop from "./ScrollToTop";


import "./AllQuestions.css"


const AllQuestions = ({
    scroolActive,
    setScroolActive
}) => {
    
    const questionsData = Questions


useEffect(() => {
    setScroolActive(true)
    document.getElementById('sorulariniz').classList.add('linkActive')
}, [scroolActive])



    return (
        <>
            <ScrollToTop />
            <Navbar
                scroolActive={scroolActive}
                setScroolActive={setScroolActive}
            />
            <div id="allQuestions">

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

                                <div className="accordion"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default AllQuestions;