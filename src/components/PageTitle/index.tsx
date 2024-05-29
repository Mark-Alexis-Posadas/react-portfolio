import React from "react";
import { TitleType } from "../../types/PageTitle";

const PageTitle: React.FC<TitleType> = ({ pageTitle }) => {
  return (
    <h1 className="font-bold text-[28px] lg:text-4xl mb-4">{pageTitle}</h1>
  );
};

export default PageTitle;
