import React from 'react';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
     <div className='page-title bg-primary text-white mt-3 mr-0 mb-15'>
          <h1>{title}</h1>
     </div>
  );
};

export default PageTitle;
