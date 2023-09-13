import React from "react";
import {
  Button,
  ButtonProps,
  Input,
  Title1,
  ToggleButton,
} from "@fluentui/react-components";
import { Add12Filled, MicRegular } from "@fluentui/react-icons";
import centerBg from "./centerBg.png";
import bgImage from "./bgImage.png";
import "./App.css";

const buttonStyles = {
  width: 200,
  maxWidth: 200,
  height: 176,
  flexShrink: 0,
  borderRadius: 10,
  background: "#FFF",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)",
};

const stepperBtnStyles = {
  width: 40,
  minWidth: 20,
  height: 40,
  borderRadius: 8,
};

const App = () => {
  const [selectedButton, setSelectedButton] = React.useState(0);
  return (
    <>
      <img
        src={bgImage}
        className="bgImage"
        alt="logo"
        width="100"
        height="100"
      />
      <Stepper
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <img src={centerBg} className="centerBgLogo" alt="center maccabi Logo" />
      <div className="rectangle">
        <Title1>Hi, Shoshana what will we do today?</Title1>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {selectedButton === 1 ? (
            <iframe
              style={{
                width: 1100,
                height: 600,
                borderStyle: "inherit",
                padding: 24,
              }}
              src="https://healthcare-bot-3hr56khbhfp6u.azurewebsites.net"
            ></iframe>
          ) : selectedButton === 2 ? (
            <>
              <Input
                contentAfter={<MicButton aria-label="Enter by voice" />}
                style={{ width: 400, height: 40 }}
                placeholder="Enter your image search string"
              />
            </>
          ) : (
            <>
              <ToggleButton
                checked={selectedButton === 0}
                onClick={() => {
                  setSelectedButton(0);
                  setDisplayBot(true);
                }}
                style={buttonStyles}
                icon={<Add12Filled />}
              />
              <ToggleButton
                style={buttonStyles}
                onClick={() => {
                  setSelectedButton(1);
                }}
                checked={selectedButton === 1}
                icon={<Add12Filled />}
              />
              <ToggleButton
                style={buttonStyles}
                onClick={() => {
                  setSelectedButton(2);
                }}
                checked={selectedButton === 2}
                icon={<Add12Filled />}
              />
              <ToggleButton
                style={buttonStyles}
                onClick={() => {
                  setSelectedButton(3);
                }}
                checked={selectedButton === 3}
                icon={<Add12Filled />}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;

const MicButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      appearance="transparent"
      icon={<MicRegular />}
      size="small"
    />
  );
};
const Stepper: React.FC<{
  selectedButton: number;
  setSelectedButton: React.Dispatch<React.SetStateAction<number>>;
}> = ({ selectedButton, setSelectedButton }) => {
  // 4 buttons which enable to route to different pages
  return (
    <div className="stepper">
      <Button
        style={stepperBtnStyles}
        onClick={() => setSelectedButton(0)}
        appearance={selectedButton === 0 ? "primary" : "secondary"}
      >
        1
      </Button>
      <Button
        style={stepperBtnStyles}
        onClick={() => setSelectedButton(1)}
        appearance={selectedButton === 1 ? "primary" : "secondary"}
      >
        2
      </Button>
      <Button
        style={stepperBtnStyles}
        onClick={() => setSelectedButton(2)}
        appearance={selectedButton === 2 ? "primary" : "secondary"}
      >
        3
      </Button>
      <Button
        style={stepperBtnStyles}
        onClick={() => setSelectedButton(3)}
        appearance={selectedButton === 3 ? "primary" : "secondary"}
      >
        4
      </Button>
    </div>
  );
};
