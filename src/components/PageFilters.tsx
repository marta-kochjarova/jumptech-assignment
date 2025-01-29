import React from "react";
import { Dispatch, SetStateAction } from "react";
import { User } from "../types/User";

interface PageFiltersProps {
  setSelectedUser: Dispatch<SetStateAction<User | null>>;
}

const PageFilters: React.FC<PageFiltersProps> = ({ setSelectedUser }) => {
  return (
    <div className="px-3 py-1">
      <div>
        <form action="" className="d-flex">
          <div className="form-group">
            <label htmlFor="team">Team:</label>
            <select name="team" id="team">
              <option value="">All teams</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="user">User:</label>
            <select name="user" id="user">
              <option value="">-</option>
              <option value="1">Meno Priezvisko</option>
              <option value="2">Meno Priezvisko2</option>
            </select>
          </div>
          <button type="submit" className="p-05">
            CHANGE
          </button>
        </form>
      </div>
      <span>Focused user</span>
    </div>
  );
};

export default PageFilters;
