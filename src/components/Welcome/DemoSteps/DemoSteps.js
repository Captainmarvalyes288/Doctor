import { useState } from "react";
import AuthenticationAnimatedImage from "./7e8f9698371d551c82f3a74e8cc301fd.png";
import "./DemoSteps.css";
import AccordionSteps from "./AccordionSteps/AccordionSteps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, faTablets } from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    step: "1",
    title: "Registration and Authentication",
    text: [
      "New users can create an account, providing basic information and health preferences.",
      "Authentication ensures the security of users' personal data.",
    ],
    icon: <FontAwesomeIcon icon={fa1} />,
  },
  {
    step: "2",
    title: "Complete your profile",
    text: [
      "Enter or update basic information such as first name, last name, gender, and date of birth.",
      "Don't forget to save your changes after you finish editing your profile.",
    ],
    icon: <FontAwesomeIcon icon={fa2} />,
  },
  {
    step: "3",
    title: "Start using the site",
    text: [
      "Browse through the different sections and categories of the site to understand what possibilities it offers.",
      "Once you're familiar with the basic functions, simply start using the site and enjoy the provided features.",
    ],
    icon: <FontAwesomeIcon icon={fa3} />,
  },
];

const DemoSteps = () => {
  return (
    <section className="steps-demo-section">
      <div className="steps-demo-div-wrapper">
        <div className="steps-demo-div-content">
          <FontAwesomeIcon className='steps-demo-pill-svg' icon={faTablets} />
          <FontAwesomeIcon className='steps-demo-pill-svg' icon={faTablets} />
          <div className=" text-center">
            <h1>How does it work?</h1>
          </div>
          <div className="row steps-demo-div-info">
            <img src={AuthenticationAnimatedImage} className="col-sm-4" alt="Authentication Animated" />
            <ul className="col-sm-4">
              {steps.map((data) => {
                return (
                  <li key={data.step}>
                    <AccordionSteps
                      title={data.title}
                      content={data.text}
                      icon={data.icon}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="steps-demo-div-wrapper-border"></div>
      </div>
    </section> 
  );
};

export default DemoSteps;