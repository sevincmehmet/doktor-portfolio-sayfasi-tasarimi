import { Accordion } from "react-bootstrap";
import CommentBox from "./CommentBox";
import "./CommentBox"
const QuestionAnswer = ({
    oKey,
    id,
    title,
    date,
    questions,
    feedBack,
    accordionActive,
    setAccordionActive
}) => {
    return (
    
                <Accordion.Item eventKey={id}>
                <Accordion.Header onClick={() => { setAccordionActive(!accordionActive) }} className={!accordionActive ? "accordion-header" : "border-b accordion-header"}>
                    <div className="h3 "><span className="numberColor">0{id}.</span> {title}</div>
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