// import { dropdownProps } from "./components/Dropdown";
import Router from "./routes";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const options: dropdownProps["options"] = [
  //   { text: "Opção 01", onClick: () => alert("Cliquei na opção 01") },
  //   { text: "Opção 02", onClick: () => alert("Cliquei na opção 02") },
  //   { text: "Opção 03", onClick: () => alert("Cliquei na opção 03") },
  //   { text: "Opção 04", onClick: () => alert("Cliquei na opção 04") },
  // ];
  return (
    <div className="App">
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
    </div>
  );
}

export default App;
