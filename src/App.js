import "./styles.css";
import { InliineStyle } from "./Components/InlineStyle";
import { CssModules } from "./Components/CssModules";
import { StyledJsx } from "./Components/StyledJsx";
import { StyledComponents } from "./Components/StyledComponents";
import { Emotion } from "./Components/Emotion";

export default function App() {
  return (
    <div className="App">
      <InliineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
