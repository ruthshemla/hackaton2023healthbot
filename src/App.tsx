import React from "react";
import {
  Button,
  ButtonProps,
  Input,
  Title1,
  CompoundButton,
  Spinner,
  Subtitle1,
  Subtitle2,
} from "@fluentui/react-components";
import { Home48Regular, MicRegular } from "@fluentui/react-icons";
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

const EmailsBot = () => {
  const [emailString, setEmailString] = React.useState("");
  const [response, setResponse] = React.useState<
    { title?: string; content: string } | undefined
  >();
  const [isLoading, setIsLoading] = React.useState(false);

  const emailRequest = async (requestString: string) => {
    console.log(requestString);
    const requestData = {
      question: requestString,
      chat_history: "[]",
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer F1rC3IibCP681YQu5S7LsASj0u1SxWWZ",
    };

    const url =
      "https://corsproxy.io/?https://amigpt-mailer.eastus2.inference.ml.azure.com/score";

    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        console.log(data);
        if (data.answer.content.plainText && data.answer.content.subject) {
          setResponse({
            content: data.answer.content.plainText,
            title: data.answer.content.subject,
          });
        } else {
          setResponse({ content: JSON.stringify(data.answer) });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <div className="inputForm">
        <Input
          contentAfter={<MicButton aria-label="Enter by voice" />}
          style={{ width: 400, height: 40 }}
          placeholder="Enter your email request"
          onChange={(e) => setEmailString(e.target.value)}
        />
        <Button
          appearance="primary"
          onClick={() => {
            emailRequest(
              emailString.length
                ? emailString
                : "let me daughter know that llm is awesome"
            );
            setIsLoading(true);
          }}
        >
          Send
        </Button>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        response && (
          <div
            style={{
              marginTop: 8,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              borderRadius: 8,
              justifyContent: "center",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              width: 700,
            }}
          >
            <Subtitle1
              style={{ display: "flex", justifyContent: "center", padding: 30 }}
            >
              {response?.title}
            </Subtitle1>

            <Subtitle2
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {response?.content}
            </Subtitle2>
          </div>
        )
      )}
    </div>
  );
};

const ChatBot: React.FC = () => {
  return (
    <iframe
      style={{
        width: 1100,
        height: 600,
        borderStyle: "inherit",
        padding: 24,
      }}
      src="https://app-backend-jsgfoz7rj5uvy.azurewebsites.net/"
    ></iframe>
  );
};
const ImagesBot: React.FC = () => {
  const [searchString, setSearchString] = React.useState("");
  const [response, setResponse] = React.useState<string>();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (requestString: string) => {
    try {
      const requestData = {
        question: requestString,
        chat_history: "[]",
      };

      // Define request headers
      const headers = new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer shhUI7E1xsUD5mKDw3OZ2cIu6iB6vLaq",
      });

      // Define the request URL
      const url =
        "https://corsproxy.io/?https://amigpt-imagegen.eastus2.inference.ml.azure.com/score";

      // Make the POST request
      fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data (in this case, the image data)
          console.log(data);
          setResponse(data.answer);
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => setIsLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="inputForm">
        <Input
          contentAfter={<MicButton aria-label="Enter by voice" />}
          style={{ width: 400, height: 40 }}
          placeholder="Enter your image search string"
          onChange={(e) => setSearchString(e.target.value)}
        />
        <Button
          appearance="primary"
          onClick={() => {
            handleSubmit(
              searchString.length
                ? searchString
                : "I want an ice cream on a sunny day"
            );
            setIsLoading(true);
          }}
        >
          Search
        </Button>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        response && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={response} alt="d" width={500} />
          </div>
        )
      )}
    </div>
  );
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
      <Stepper setSelectedButton={setSelectedButton} />
      <img src={centerBg} className="centerBgLogo" alt="center maccabi Logo" />
      <div className="rectangle">
        {selectedButton === 0 && (
          <Title1>Hi, Shoshana what will we do today?</Title1>
        )}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: selectedButton === 0 ? "row" : "column",
          }}
        >
          {selectedButton === 1 ? (
            <>
              <Title1
                style={{
                  textAlign: "center",
                }}
              >
                Health bot
              </Title1>
              <iframe
                style={{
                  width: 1100,
                  height: 600,
                  borderStyle: "inherit",
                  padding: 24,
                }}
                src="https://healthcare-bot-3hr56khbhfp6u.azurewebsites.net"
              ></iframe>
            </>
          ) : selectedButton === 2 ? (
            <>
              <Title1
                style={{
                  textAlign: "center",
                }}
              >
                Image bot
              </Title1>
              <ImagesBot />
            </>
          ) : selectedButton === 3 ? (
            <ChatBot />
          ) : selectedButton === 4 ? (
            <>
              <Title1
                style={{
                  textAlign: "center",
                }}
              >
                Email bot
              </Title1>
              <EmailsBot />
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
        icon={<Home48Regular />}
        style={stepperBtnStyles}
        onClick={() => setSelectedButton(0)}
      />
      <Button
        icon={<img width={20} src={group} alt="d" />}
        style={stepperBtnStyles}
        onClick={() => setSelectedButton(1)}
      />
      <Button
        icon={<img width={20} src={gallery} alt="d" />}
        style={stepperBtnStyles}
        onClick={() => setSelectedButton(2)}
      />
      <Button
        icon={<img width={20} src={msgs} alt="d" />}
        style={stepperBtnStyles}
        onClick={() => setSelectedButton(3)}
      />
      <Button
        icon={<img width={20} src={emails} alt="d" />}
        style={stepperBtnStyles}
        onClick={() => setSelectedButton(4)}
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
        icon={<Home48Regular />}
      />
      <CompoundButton
        style={buttonStyles}
        onClick={() => {
          setSelectedButton(1);
        }}
        icon={<img src={group} alt="d" />}
      />
      <CompoundButton
        style={buttonStyles}
        onClick={() => {
          setSelectedButton(2);
        }}
        icon={<img src={gallery} alt="d" />}
      />
      <CompoundButton
        style={buttonStyles}
        onClick={() => {
          setSelectedButton(3);
        }}
        icon={<img src={msgs} alt="d" />}
      />
      <CompoundButton
        style={buttonStyles}
        onClick={() => {
          setSelectedButton(4);
        }}
        icon={<img src={emails} alt="d" />}
      />
    </>
  );
};
