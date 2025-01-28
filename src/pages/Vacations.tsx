import React from 'react';
import PageTitle from '../components/PageTitle';
import PageFilters from '../components/PageFilters';
import Table from '../components/Table';
import { vacationTableColumns } from '../utils/vacationTableColumns';

const Vacations: React.FC = () => {
  return (
    <>
      <PageTitle title="Vacation" />
      <PageFilters />
      <Table withAddNew={true} columns={vacationTableColumns} />
    </>
  )
};

export default Vacations;
