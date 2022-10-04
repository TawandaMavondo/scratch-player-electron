import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import headerBackgroundImage from "./assets/heading.svg";
import homeIcon from "./assets/home-icon.svg";
import menuIcon from "./assets/menu-icon.svg";
import completedIcon from "./assets/completed-task-icon.svg";
import incompletedIcon from "./assets/incomplete-task-icon.svg";
import challengeIcon from "./assets/challenge-task-icon.svg";
import Player from "./Player";

enum Status {
  Completed,
  Pending,
  Challenge,
}

interface ISideNav {
  status: Status;
  title: String;
  progressValue: number;
}

const SideNavItems: Array<ISideNav> = [
  {
    status: Status.Completed,
    title: "Read the game description",
    progressValue: 10,
  },
  {
    status: Status.Pending,
    title: "Play the game.",
    progressValue: 10,
  },
  {
    status: Status.Pending,
    title: "Review the CS concepts.",
    progressValue: 10,
  },
  {
    status: Status.Pending,
    title: "Answer the game specific questions.",
    progressValue: 10,
  },
  {
    status: Status.Pending,
    title: "Write your pseudo code.",
    progressValue: 10,
  },
  {
    status: Status.Pending,
    title: "Start coding.",
    progressValue: 10,
  },
  {
    status: Status.Pending,
    title: "Complete the project steps.",
    progressValue: 10,
  },
  {
    status: Status.Challenge,
    title: "Solve the Bonus challenges.",
    progressValue: 10,
  },
  {
    status: Status.Pending,
    title: "Take the final quiz.",
    progressValue: 10,
  },
  {
    status: Status.Pending,
    title: "Complete the post game survey.",
    progressValue: 10,
  },
];

const Header = styled.div`
  padding: 0;
  width: 100%;
  position: relative;
  height: 70px;
  margin-bottom: 40px;
  height: 90px;
  background: #f9dfb7;
  
`;

const HeaderImage = styled.img`
  width: 100%;
`;

const HeaderButton = styled.button`
  background-size: cover;
  background-position: center center;
  padding: 0;
  width: 45px;
  height: 45px;
  border: none;
  background-color: transparent;
  position: absolute;
  z-index: 20;
  top: 10px;
`;

const HomeIcon = styled(HeaderButton)`
  background-image: url(${homeIcon});
  left: 30px;
`;

const MenuButton = styled(HeaderButton)`
  background-image: url(${menuIcon});
  right: 30px;
`;
const SideNav = styled(Col)`
  border-radius: 30px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 270px;
`;

const SideNavTitle = styled.h3`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #291a63;
`;

const SideNavSubTitle = styled.span`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: block;
  color: #9d9d9d;
`;
const SideNavProgressBarContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  progress[value] {
    appearance: none;
    ::-webkit-progress-value {
      background: #4c2ec5;
      color: #4c2ec5;
      border-radius: 5px;
    }
    ::-webkit-progress-bar {
      background-color: #f3f3f3;
      border-radius: 5px;
      height: 10px;
      /* display: block; */
      border: none;
    }
  }
`;

const SideNavProgressBar = styled.progress`
  width: 150px;
`;

// const SideNavItem = styled.li``;
const MainContent = styled(Col)`
  height: 100vh;
  overflow-y: auto;
`;

const MainContentSection = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h1`
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 66px;
  color: #291a63;
`;

const GamePage: React.FC = () => {
  return (
    <>
      <Header>
        <HeaderImage src={headerBackgroundImage} alt="" />
        <HomeIcon />
        <MenuButton />
      </Header>
      <Container className="mt-5">
        <Row>
          <SideNav sm={"3"}>
            <SideNavTitle>Ghost Busters</SideNavTitle>
            <SideNavSubTitle>Level 1, Game 1</SideNavSubTitle>
            <SideNavProgressBarContainer>
              <SideNavProgressBar max={100} value={10}></SideNavProgressBar>
            </SideNavProgressBarContainer>
            <div className="mt-3" style={{ overflowY: "auto" }}>
              {SideNavItems.map((it, i) => (
                <SideNavItem key={i} {...it} />
              ))}
            </div>
          </SideNav>
          <MainContent>
            <MainContentSection>
              <SectionTitle>Step 1: Game Description</SectionTitle>
              <p>
                Ghost Busters is a remake of the classic, “Whack-a-Mole” game.
                Ghosts will appear on the screen in random positions and your
                job is to click on them before they disappear. Every time you
                click a Ghost, you earn a point. How many points can you score
                in 30 seconds?
              </p>
              <p>
                Ready to get started? Click continue to start playing Ghost
                Busters.
              </p>

              <button
                className="btn btn-primary"
                style={{ backgroundColor: "#4C2EC5" }}
              >
                Continue
              </button>
            </MainContentSection>
            <MainContentSection>
              <SectionTitle>Step 2: Play the Game</SectionTitle>
              <p>
                Have fun! And when you’re done playing, press continue to move
                on.
              </p>
            </MainContentSection>
            <MainContentSection>
              <Player />
            </MainContentSection>
          </MainContent>
        </Row>
      </Container>
    </>
  );
};

const SideNavItem: React.FC<any> = (props: ISideNav) => {
  const getIcon = (status: Status) => {
    switch (status) {
      case Status.Completed:
        return completedIcon;
      case Status.Challenge:
        return challengeIcon;
      case Status.Pending:
        return incompletedIcon;
    }
  };
  return (
    <>
      <Row className="text-start justify-content-start pb-3 ">
        <Col sm={2} className={"aling-item-center"}>
          <img src={getIcon(props.status)} style={{ height: "20px" }} alt="" />
        </Col>
        <Col>
          <span style={{ fontWeight: "600" }}>{props.title}</span>
        </Col>
      </Row>
    </>
  );
};

export default GamePage;
