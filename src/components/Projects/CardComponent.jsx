import React from "react";
import { Paragraph } from "../../styles/createGlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const CardComponent = ({ propData, Card }) => {
  return (
    <>
      {propData.map((data) => {
        const { id, pageTitle, description, source, demo } = data;
        return (
          <Card key={id}>
            <header>
              <h1>{pageTitle}</h1>
            </header>
            <Paragraph className="lg-font-size my-1">{description}</Paragraph>
            <ul className="mb-1">
              {data.buttons.map((button, idx) => {
                let href = "";
                if (button === "Demo") {
                  href = demo;
                } else if (button == "Source") {
                  href = source;
                }
                return (
                  <li key={idx}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {button}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </li>
                );
              })}
            </ul>

            <ul>
              <li>
                {data.tags.map((tag, idx) =>
                  idx === data.tags.length - 1 ? tag : tag + ", "
                )}
              </li>
            </ul>
          </Card>
        );
      })}
    </>
  );
};

export default CardComponent;
