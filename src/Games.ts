import path from "path";
import { Game } from "./GameDS";
import { Status } from "./GamePage";

const Games: Game[] = [
  {
    id: "ff4dcc1a-66c7-4deb-a6cd-1e45625e51a8",
    name: "Apple Catcher",
    sbPath: "path/to/sb/file",
    gameLevel: 1,
    steps: [
      {
        title: "Game Description",
        status: Status.Pending,
        sideNavTitle: "Read the game description.",
        progressValue: 10,
        videos: {
          id: "d97da49e-ee21-4df2-afeb-72273cad4506",
          path: "path/to/video/file",
          name: "Explaination Video",
        },
        tips: ["Conditionals", "Selection Structures"],
      },
      {
        title: "Game Description",
        status: Status.Pending,
        sideNavTitle: "Read the game description.",
        progressValue: 10,
        videos: {
          id: "d97da49e-ee21-4df2-afeb-72273cad4506",
          path: "path/to/video/file",
          name: "Explaination Video",
        },
        tips: ["Conditionals", "Selection Structures"],
      },
    ],
    quizzes: [
      {
        id: "c2c914c8-e4dd-4936-9302-7e92ff8b386d",
        question:
          "In order to make the apple fall down the screen, did you have to change its X or Y value?",
        options: ["X Value", "Y Value"],
        trueValue: 0,
        hint: "When the green flag is clicked and the game begins, should the character be hiding or showing?",
      },
      {
        id: "c2c914c8-e4dd-4936-9302-7e92ff8b386d",
        question:
          "In order to make the apple fall down the screen, did you have to change its X or Y value?",
        options: ["X Value", "Y Value"],
        trueValue: 0,
        hint: "When the green flag is clicked and the game begins, should the character be hiding or showing?",
      },
    ],
    surveys: [
      {
        id: "bb94a40e-dcfb-4bda-94ee-fdb26891872d",
        question: "Did you enjoy playing and building Apple Catcher?",
        options: ["Yes", "No"],
      },
    ],
  },
];
