import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

import "./Services.css";
const Services = () => {
  
    const [accordionActive, setAccordionActive] = useState(false)
 
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-10 col-xl-11 col-md-11 col-sm-12 m-auto">
                        <div className="container">
                            <h2 className="services-title">
                                I Offer a Whole Range of
                                <br className="d-none d-md-inline" />
                                Medical Services
                            </h2>
                            <br />
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header onClick={() =>{setAccordionActive(!accordionActive)}} className={!accordionActive?"accordion-header":"border-b accordion-header"}>
                                        <div className="h3"><span className="numberColor">01.</span> Doctor's Consultation</div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="row row-10 row-content">
                                            <div className="col-md-6">
                                                <p>
                                                    The wellness physical follows a specific set up steps
                                                    approved by Medicare. As a “wellness” exam, the
                                                    primary purpose of this physical is to prevent future
                                                    medical issues.
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>
                                                    In a wellness physical, doctors follow a plan of care,
                                                    the entirety of which is covered under Medicare Part B
                                                    benefits.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row row-10 row-content">
                                            <div className="col-sm-6">
                                                <ul className="list list-marked">
                                                    <li className="list-item">A health risk assessment</li>
                                                    <li className="list-item">
                                                        A review of your family medical history
                                                    </li>
                                                    <li className="list-item">
                                                        Reviewing your current medications
                                                    </li>
                                                    <li className="list-item">
                                                        Routine measurements for height, weight, etc.
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul className="list list-marked">
                                                    <li className="list-item">
                                                        Assessing signs of memory loss or dementia
                                                    </li>
                                                    <li className="list-item">
                                                        A personalized consultation with your physician
                                                    </li>
                                                    <li className="list-item">
                                                        Health screenings and preventive care services
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header onClick={() =>{setAccordionActive(!accordionActive)}} className={!accordionActive?"accordion-header":"border-b accordion-header"}>
                                        <div className="h3"><span className="numberColor">02.</span> Diagnostic Services</div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="row row-10 row-content">
                                            <div className="col-md-6">
                                                <p>
                                                    The wellness physical follows a specific set up steps
                                                    approved by Medicare. As a “wellness” exam, the
                                                    primary purpose of this physical is to prevent future
                                                    medical issues.
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>
                                                    In a wellness physical, doctors follow a plan of care,
                                                    the entirety of which is covered under Medicare Part B
                                                    benefits.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row row-10 row-content">
                                            <div className="col-sm-6">
                                                <ul className="list list-marked">
                                                    <li className="list-item">A health risk assessment</li>
                                                    <li className="list-item">
                                                        A review of your family medical history
                                                    </li>
                                                    <li className="list-item">
                                                        Reviewing your current medications
                                                    </li>
                                                    <li className="list-item">
                                                        Routine measurements for height, weight, etc.
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul className="list list-marked">
                                                    <li className="list-item">
                                                        Assessing signs of memory loss or dementia
                                                    </li>
                                                    <li className="list-item">
                                                        A personalized consultation with your physician
                                                    </li>
                                                    <li className="list-item">
                                                        Health screenings and preventive care services
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header onClick={() =>{setAccordionActive(!accordionActive)}} className={!accordionActive?"accordion-header":"border-b accordion-header"}>
                                        <div className={"h3"}><span className="numberColor">03.</span> Urgent Care</div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="row row-10 row-content">
                                            <div className="col-md-6">
                                                <p>
                                                    The wellness physical follows a specific set up steps
                                                    approved by Medicare. As a “wellness” exam, the
                                                    primary purpose of this physical is to prevent future
                                                    medical issues.
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>
                                                    In a wellness physical, doctors follow a plan of care,
                                                    the entirety of which is covered under Medicare Part B
                                                    benefits.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row row-10 row-content">
                                            <div className="col-sm-6">
                                                <ul className="list list-marked">
                                                    <li className="list-item">A health risk assessment</li>
                                                    <li className="list-item">
                                                        A review of your family medical history
                                                    </li>
                                                    <li className="list-item">
                                                        Reviewing your current medications
                                                    </li>
                                                    <li className="list-item">
                                                        Routine measurements for height, weight, etc.
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul className="list list-marked">
                                                    <li className="list-item">
                                                        Assessing signs of memory loss or dementia
                                                    </li>
                                                    <li className="list-item">
                                                        A personalized consultation with your physician
                                                    </li>
                                                    <li className="list-item">
                                                        Health screenings and preventive care services
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header onClick={() =>{setAccordionActive(!accordionActive)}} className={!accordionActive?"accordion-header":"border-b accordion-header"}>
                                        <div className={"h3"}><span className="numberColor">04.</span> Primary Care</div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="row row-10 row-content">
                                            <div className="col-md-6">
                                                <p>
                                                    The wellness physical follows a specific set up steps
                                                    approved by Medicare. As a “wellness” exam, the
                                                    primary purpose of this physical is to prevent future
                                                    medical issues.
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>
                                                    In a wellness physical, doctors follow a plan of care,
                                                    the entirety of which is covered under Medicare Part B
                                                    benefits.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row row-10 row-content">
                                            <div className="col-sm-6">
                                                <ul className="list list-marked">
                                                    <li className="list-item">A health risk assessment</li>
                                                    <li className="list-item">
                                                        A review of your family medical history
                                                    </li>
                                                    <li className="list-item">
                                                        Reviewing your current medications
                                                    </li>
                                                    <li className="list-item">
                                                        Routine measurements for height, weight, etc.
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul className="list list-marked">
                                                    <li className="list-item">
                                                        Assessing signs of memory loss or dementia
                                                    </li>
                                                    <li className="list-item">
                                                        A personalized consultation with your physician
                                                    </li>
                                                    <li className="list-item">
                                                        Health screenings and preventive care services
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header onClick={() =>{setAccordionActive(!accordionActive)}} className={!accordionActive?"accordion-header":"border-b accordion-header"}>
                                        <div className={"h3"}><span className="numberColor">05.</span> Annual Wellness Physical</div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="row row-10 row-content">
                                            <div className="col-md-6">
                                                <p>
                                                    The wellness physical follows a specific set up steps
                                                    approved by Medicare. As a “wellness” exam, the
                                                    primary purpose of this physical is to prevent future
                                                    medical issues.
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>
                                                    In a wellness physical, doctors follow a plan of care,
                                                    the entirety of which is covered under Medicare Part B
                                                    benefits.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row row-10 row-content">
                                            <div className="col-sm-6">
                                                <ul className="list list-marked">
                                                    <li className="list-item">A health risk assessment</li>
                                                    <li className="list-item">
                                                        A review of your family medical history
                                                    </li>
                                                    <li className="list-item">
                                                        Reviewing your current medications
                                                    </li>
                                                    <li className="list-item">
                                                        Routine measurements for height, weight, etc.
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul className="list list-marked">
                                                    <li className="list-item">
                                                        Assessing signs of memory loss or dementia
                                                    </li>
                                                    <li className="list-item">
                                                        A personalized consultation with your physician
                                                    </li>
                                                    <li className="list-item">
                                                        Health screenings and preventive care services
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
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
