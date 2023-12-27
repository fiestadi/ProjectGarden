import React from 'react';
import { useParams } from 'react-router-dom';

const Section = () => {
  const { sectionId } = useParams();

  let sectionContent;

  switch (sectionId) {
    case 'main':
      sectionContent = <MainSection />;
      break;
    case 'categories':
      sectionContent = <CategoriesSection />;
      break;
    default:
      sectionContent = <DefaultSection />;
  }

  return (
    <div>
      <h2>Section: {sectionId}</h2>
      {sectionContent}
    </div>
  );
};

const MainSection = () => {
  return <div>Main Section Content</div>;
};

const CategoriesSection = () => {
  return <div>Categories Section Content</div>;
};

const DefaultSection = () => {
  return <div>Default Section Content</div>;
};

export default Section;