import { Dispatch, SetStateAction } from "react";
import { currentUser } from "../utils/dummyData/currentUser";
import { users } from "../utils/dummyData/users";
import { User } from "../types/user";

export const getUsers = async (teamId: number | null) => {
  try {
    if (teamId === null) {
      return users;
    } else {
      return users.filter((user) => user.teams.includes(teamId));
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const getUserById = async (userId: number) => {
  try {
    return users.find((user) => user.id === userId);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

export const getCurrentUser = async (setCurrentUser: Dispatch<SetStateAction<User | null>>) => {
  try {
    setCurrentUser(currentUser);
  } catch (error) {
    console.error("Error fetching current user:", error);
  }
};
