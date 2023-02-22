import Navbar from "./Navbar"
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import QuestionAnswer from "./QuestionAnswer";
import Questions from "./Questions";
import ScrollToTop from "./ScrollToTop";

import "./AllQuestions.css"

const AllQuestions = () => {
    const [questionsData, setQuestionsData] = useState(Questions)

    useEffect(() => {
        document.getElementById('header').classList.remove('nav');
        document.getElementById('header').classList.add('navActive');
        document.getElementById('navShadow').classList.remove('nav-shadow');
        document.getElementById('sorulariniz').classList.add('active');
        for (let index = 0; index < 5; index++) {
            document.getElementsByClassName('accordion-collapse')[index].style.cssText = "display:block;"
            document.getElementsByClassName('accordion-button')[index].setAttribute('disabled', true)
        }
            
            console.log(questionsData);
    }, [questionsData])

   

    return (
        <>
        <ScrollToTop/>
            <Navbar />
            <div id="services">
                
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
                                                
                                                isActive={[{color:"#177ee5"},{display:"block"}]}
                                                oKey={1}
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