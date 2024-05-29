import React from "react";
import { SubTitleType } from "../../types/SubTitle";

const SubTitle: React.FC<SubTitleType> = ({ subTitleText, classNames }) => {
  return <h2 className={classNames}>{subTitleText}</h2>;
};

export default SubTitle;
