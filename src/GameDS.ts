import { Status } from "./GamePage";

interface Video {
  id: string;
  path: string;
  name?: string;
}

interface Step {
  title: String;
  status: Status;
  sideNavTitle:string,
  progressValue: number;
  videos?: Video[] |Video;
  tips?: string[];
}

interface Quiz {
  id: string;
  question: string;
  options: string[];
  trueValue: number;
  hint: string;
}
interface Survey {
  id: string;
  question: string;
  options: string[];
}

interface Game {
  id: string;
  name: string;
  steps: Step[];
  sbPath: string;
  quizzes: Quiz[];
  gameLevel: number;
  surveys: Survey[];
}

export type { Game, Survey, Quiz, Step, Video };
