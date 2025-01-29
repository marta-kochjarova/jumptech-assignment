import React, { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import PageFilters from '../components/PageFilters';
import Table from '../components/Table';
import { vacationTableColumns } from '../utils/vacationTableColumns';
import { getVacations } from '../api/vacations';
import { User } from '../types/User';
import { Vacation } from '../types/Vacation';
import { vacationsTableMapper } from '../utils/tableMappers';

const Vacations: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [vacations, setVacations] = useState<Vacation[]>([]);

  useEffect(() => {
    getVacations(null, setVacations);    
  }, []);

  return (
    <>
      <PageTitle title="Vacation" />
      <PageFilters setSelectedUser={setSelectedUser}/>
      <Table withAddNew={true} columns={vacationTableColumns} data={vacationsTableMapper(vacations)}/>
    </>
  )
};

export default Vacations;
