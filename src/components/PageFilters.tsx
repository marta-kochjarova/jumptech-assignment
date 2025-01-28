import React from 'react';

interface PageFiltersProps {
  
}

const PageFilters: React.FC<PageFiltersProps> = ({  }) => {
  return (
     <div className='px-3 py-1'>
          <div>
               <span>filter</span>
          </div>
          <span>Focused user</span>
     </div> 
  );
};

export default PageFilters;
