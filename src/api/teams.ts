import { Dispatch, SetStateAction } from "react";
import { Team } from "../types/Team";
import { teams } from "../utils/dummyData/teams";

export const getTeams = async (setTeams: Dispatch<SetStateAction<Team[]>>) => {
  try {
    setTeams(teams);
  } catch (error) {
    console.error("Error fetching teams:", error);
  }
};
