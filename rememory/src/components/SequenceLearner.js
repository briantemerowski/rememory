import React, { useState } from "react";
import {
  Text,
  TextInput,
  Button,
  VariableIcon,
  minorScale,
  Pane,
} from "evergreen-ui";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const SequenceLearner = ({ content, slider_lb, slider_ub }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [userInput, setUserInput] = useState("");
  const [currentOuput, setCurrentOutput] = useState(content[0]);
  const [stepSize, setStepSize] = useState(1);
  const marks = [{}];
  console.log(slider_ub);
  for (var i = slider_lb; i <= slider_ub; i++) {
    marks.push(i ** 2);
  }
  console.log(marks);
  function submit() {
    //check that user input matches
    if (userInput == currentOuput || userInput == currentOuput + " ") {
      setCurrentIndex(currentIndex + stepSize);
      var tmp = "";
      for (var i = currentIndex; i < currentIndex + stepSize; i++) {
        tmp += " " + content[i];
      }
      setCurrentOutput(currentOuput + tmp);
      setUserInput("");
    }
  }
  return (
    <div>
      <Pane
        elevation={1}
        height={450}
        width={450}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        backgroundColor="aquamarine"
        border="default"
      >
        <div
          style={{
            flex: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ flexWrap: "wrap" }}>{currentOuput}</Text>
          <p></p>
        </div>
        <div style={{ flex: 2 }}>
          <TextInput
            value={userInput}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                return submit();
              }
            }}
            onChange={(text) => {
              setUserInput(text.target.value);
            }}
          />
          <Button onClick={submit}>Submit</Button>
          <p></p>
          <Slider
            min={slider_lb}
            max={slider_ub}
            step={null}
            dots={true}
            marks={marks}
            onChange={setStepSize}
          />
        </div>
      </Pane>
    </div>
  );
};

export default SequenceLearner;
