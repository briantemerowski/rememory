import SequenceLearner from "./components/SequenceLearner";
import { Heading } from "evergreen-ui";

const App = () => {
  const taleOfTwo = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.".split(
    " "
  );
  return (
    <div>
      <div>
        <Heading
          size={700}
          style={{
            position: "absolute",
            left: "10%",
            top: "5%",
            transform: "translate(-50%, -50%)",
          }}
        >
          rememory
        </Heading>
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "25%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <SequenceLearner content={taleOfTwo} slider_lb={1} slider_ub={10} />
      </div>
    </div>
  );
};

export default App;
