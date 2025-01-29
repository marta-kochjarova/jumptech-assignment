import React, { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { User } from "../types/User";
import { Team } from "../types/Team";
import { getTeams } from "../api/teams";
import { getUsers } from "../api/users";

interface PageFiltersProps {
  selectedUser: User | null;
  setSelectedUser: Dispatch<SetStateAction<User | null>>;
}

const PageFilters: React.FC<PageFiltersProps> = ({
  selectedUser,
  setSelectedUser,
}) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [teamId, setTeamId] = useState<number | null>(null);

  useEffect(() => {
    getTeams(setTeams);
  }, []);

  useEffect(() => {
    if (teamId) {
      getUsers(teamId, setUsers);
    } else {
      getUsers(null, setUsers);
    }
  }, [teamId]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userId = Number(formData.get("user")) || null;

    if (!userId) {setSelectedUser(null)}

    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser || null);
  };

  return (
    <div className="px-3 py-1">
      <div>
        <form onSubmit={handleSubmit} className="d-flex">
          <div className="form-group">
            <label htmlFor="team">Team:</label>
            <select
              name="team"
              id="team"
              onChange={(e) => setTeamId(Number(e.target.value) || null)}
            >
              <option value="">All teams</option>
              {teams &&
                teams.map((team) => (
                  <option key={team.id} value={team.id}>
                    {team.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="user">User:</label>
            <select name="user" id="user">
              <option value="">-</option>
              {users &&
                users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.firstName} {user.lastName} ({user.username})
                  </option>
                ))}
            </select>
          </div>
          {/* For consistent user experience I would personally avoid the Change button and 
              refreshed the data after selecting the user, same as selecting a team refreshes data in the user select,
              but for the purpose of replicating the screenshot I kept the Change button.  */}
          <button type="submit" className="px-05 h-100">
            CHANGE
          </button>
        </form>
      </div>
      <span className="fs-09">
        Focused user:{" "}
        {selectedUser &&
          `${selectedUser.firstName} ${selectedUser.lastName} (${selectedUser.username}) - ${selectedUser.roles.join(", ")}`}
      </span>
    </div>
  );
};

export default PageFilters;
