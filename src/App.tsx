import { Dropdown, dropdownProps } from "./components/Dropdown";
import { GlobalStyle } from "./styles/global";

function App() {
  const options: dropdownProps["options"] = [
    { text: "Opção 01", onClick: () => alert("Cliquei na opção 01") },
    { text: "Opção 02", onClick: () => alert("Cliquei na opção 02") },
    { text: "Opção 03", onClick: () => alert("Cliquei na opção 03") },
    { text: "Opção 04", onClick: () => alert("Cliquei na opção 04") },
  ];
  return (
    <div className="App">
      <Dropdown options={options} alignments="left">
        Esquerda
      </Dropdown>
      <Dropdown options={options} alignments="right">
        Direita
      </Dropdown>
      <GlobalStyle />
    </div>
  );
}

export default App;
