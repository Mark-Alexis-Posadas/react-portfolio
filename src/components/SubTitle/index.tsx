import React from "react";

interface Type {
  subTitleText: string;
  classNames: string;
}

const SubTitle: React.FC<Type> = ({ subTitleText, classNames }) => {
  return <h2 className={classNames}>{subTitleText}</h2>;
};

export default SubTitle;
