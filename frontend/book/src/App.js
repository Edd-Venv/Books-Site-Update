import React from "react";
import "./App.css";
import Header from "./Header/header";
import { HeaderContextProvider } from "./contexts/headerContext/headerContext.js";
function App() {
  return (
    <div className="App">
      <p>Connected</p>
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
    </div>
  );
}
/*

const [currentState, setState] = useState([{ isLoaded: false, data: [] }]);
  const apiKey = "2n9pws7675zn9bu39htq5gjz";
  const url = `https://api.penguinrandomhouse.com/resources/v2/title/domains/SALESINTERNATIONAL/categories/1/titles?showCovers=true&api_key=${apiKey}`;
  useEffect(() => {
    console.log("RENDERING state", currentState);
  }, [currentState]);
  useEffect(
    Axios.get(url).then(response => {
      setState(() => [
        { isLoaded: true, data: response.data.data.titles.slice(0, 4) }
      ]);
    }),
    [currentState]
  );
  console.log(currentState);

*/

export default App;
