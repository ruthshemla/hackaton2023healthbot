import React from "react";
import {
  Button,
  ButtonProps,
  Input,
  Title1,
  CompoundButton,
} from "@fluentui/react-components";
import { MicRegular } from "@fluentui/react-icons";
import centerBg from "./centerBg.png";
import group from "./icons/group.png";
import msgs from "./icons/msgs.png";
import gallery from "./icons/gallery.png";
import emails from "./icons/emails.png";
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
            <QuickActions setSelectedButton={setSelectedButton} />
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
  setSelectedButton: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setSelectedButton }) => {
  // 4 buttons which enable to route to different pages
  return (
    <div className="stepper">
      <Button
        icon={<img width={20} src={emails} alt="d" />}
        style={stepperBtnStyles}
        onClick={() => setSelectedButton(0)}
      />
      <Button
        icon={<img width={20} src={gallery} alt="d" />}
        style={stepperBtnStyles}
        onClick={() => setSelectedButton(1)}
      />
      <Button
        icon={<img width={20} src={msgs} alt="d" />}
        style={stepperBtnStyles}
        onClick={() => setSelectedButton(2)}
      />
      <Button
        icon={<img width={20} src={group} alt="d" />}
        style={stepperBtnStyles}
        onClick={() => setSelectedButton(3)}
      />
    </div>
  );
};
const QuickActions: React.FC<{
  setSelectedButton: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setSelectedButton }) => {
  return (
    <>
      <CompoundButton
        onClick={() => {
          setSelectedButton(0);
        }}
        style={buttonStyles}
        icon={<img src={emails} alt="d" />}
      />
      <CompoundButton
        style={buttonStyles}
        onClick={() => {
          setSelectedButton(1);
        }}
        icon={<img src={gallery} alt="d" />}
      />
      <CompoundButton
        style={buttonStyles}
        onClick={() => {
          setSelectedButton(2);
        }}
        icon={<img src={msgs} alt="d" />}
      />
      <CompoundButton
        style={buttonStyles}
        onClick={() => {
          setSelectedButton(3);
        }}
        icon={<img src={group} alt="d" />}
      />
    </>
  );
};
