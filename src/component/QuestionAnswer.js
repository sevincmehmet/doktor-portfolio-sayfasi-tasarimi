import { useState } from "react";
import { Accordion } from "react-bootstrap";
import CommentBox from "./CommentBox";
import "./CommentBox"
const QuestionAnswer = ({
    id,
    title,
    date,
    questions,
    feedBack
}) => {
    const [accordionActive, setAccordionActive] = useState(false)

    return (
    
                <Accordion.Item eventKey={id}>
                <Accordion.Header onClick={() => { setAccordionActive(!accordionActive) }} className={!accordionActive ? "accordion-active accordion-header" : "border-b accordion-header"}>
                    <div className="h3"><span className="numberColor">0{id}.</span> {title}</div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="row row-10 row-content">
                        <div className="col-md-12  questions-title">
                            <p>
                                {questions}
                            </p>
                        </div>
                    </div>
                    <div className="row row-10 row-content">
                        <CommentBox
                            date={date}
                            feedBack={feedBack}
                        />
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        
    );
}

export default QuestionAnswer;