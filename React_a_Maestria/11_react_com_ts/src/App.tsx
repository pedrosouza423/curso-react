// import FirstComponent from './components/FirstComponent';
// import SecondComponent from './components/SecondComponent';
// import Destructuring from './components/Destructuring';
import State from './components/State';

function App() {
  // 1- variaveis
  // const nome: string = "Pedro";
  // const age: number = 20;
  // const isWorking: boolean = false;

  // // 2- function
  // const greeting = (nome: string) : string => {
  //   return `Olá, ${nome} `
  // }
  
  return (
    <div className="App">
      <State />
      {/* <h1>Hello TypeScript</h1>
      <h2>Nome: {nome}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando</p>}
      <h3>{greeting(nome)}</h3>
      <FirstComponent/>
      <SecondComponent nome="Segundo" />
      <p>----------------------------------------------------------</p>
      <Destructuring 
      title="Destructuring" 
      content="Conteúdo"
      commentsQty={3} 
      tags={["Tag1", "Tag2", "Tag3"]} 
      />
      <Destructuring 
      title="Segundo post" 
      content="Mais um conteúdo"
      commentsQty={2} 
      tags={["Exemplo", "Exemplo2", "Exemplo3"]} 
      /> */}
    </div>
  );
}

export default App;
