import { Dispatch, SetStateAction } from "react";
import { currentUser } from "../utils/dummyData/currentUser";
import { users } from "../utils/dummyData/users";
import { User } from "../types/User";

export const getUsers = async (teamId: number | null, setUsers: Dispatch<SetStateAction<User[]>>) => {
  try {
    if (teamId === null) {
      setUsers(users);
    } else {
      setUsers(users.filter((user) => user.teams.includes(teamId)));
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const getCurrentUser = async (setCurrentUser: Dispatch<SetStateAction<User | null>>) => {
  try {
    setCurrentUser(currentUser);
  } catch (error) {
    console.error("Error fetching current user:", error);
  }
};
