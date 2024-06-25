import { useState } from "react";
import styled from "styled-components";
import "./accordion.scss";


const AccordionHeaderTitle = styled.div`
  color: #1d1d1d;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
`;

const CourseContentItem = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #1d1d1d;
  font-family: "Nunito Sans", sans-serif;
  margin-bottom: 13px;
`;

const Accordion = (props) => {
  const [isVisible, setIsVisible] = useState(props.isVisible);

  const {
    course: { title, meta, content },
  } = props;

  const toggle = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <div>
      <div className="accordion__header" onClick={toggle}>
        <div>
          <AccordionHeaderTitle>{title}</AccordionHeaderTitle>
          {meta && (
            <ul className="plain-list">
              {meta?.map((m, index) => (
                <li key={index}>{m}</li>
              ))}
            </ul>
          )}
        </div>
        {isVisible ? (
          <img src="./minus.svg" alt="minus" style={{ width: 16 }} />
        ) : (
          <img src="./plus.svg" alt="plus" style={{ width: 16 }} />
        )}
      </div>
      {isVisible && (
        <div className="accordion__content" isList={content?.length > 1}>
          {content?.map((t, index) => (
            <CourseContentItem key={index}>• {t}</CourseContentItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
