
import { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);
  const [visivel, setVisivel] = useState(false);
  const [nome, setNome] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(true);

  function aumentar() {
    setContador((valorAnterior) =>
      valorAnterior < 10 ? valorAnterior + 1 : valorAnterior
    );
  }

  function diminuir() {
    setContador((valorAnterior) => valorAnterior - 1);
  }

  function zerar() {
    setContador(0);
  }

  return (
    <main className="container">
      <header className="cabecalho">
        <h1>Atividade de useState</h1>
        <p>Praticando estados e eventos no React.</p>
      </header>

      <section className="cartao">
        <h2>1. Contador</h2>
        <p className="valor">Valor atual: {contador}</p>

        <div className="botoes">
          <button onClick={aumentar}>Aumentar</button>
          <button className="secundario" onClick={diminuir}>
            Voltar um
          </button>
          <button className="secundario" onClick={zerar}>
            Zerar
          </button>
        </div>

        {contador === 10 && (
          <p className="mensagem">Meta atingida!</p>
        )}
      </section>

      <section className="cartao">
        <h2>2. Mostrar e esconder aviso</h2>

        <button onClick={() => setVisivel(!visivel)}>
          {visivel ? "Esconder aviso" : "Mostrar aviso"}
        </button>

        {visivel && (
          <p className="mensagem">O aviso está visível.</p>
        )}
      </section>

      <section className="cartao">
        <h2>3. Saudação com campo de texto</h2>

        <input
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Digite seu nome"
        />

        <p>Olá, {nome || "visitante"}!</p>
      </section>

      <section className="cartao">
        <h2>4. Cartão de boas-vindas</h2>

        <input
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Digite seu nome"
        />

        <button
          onClick={() => setMostrarSaudacao(!mostrarSaudacao)}
        >
          {mostrarSaudacao ? "Esconder saudação" : "Mostrar saudação"}
        </button>

        {mostrarSaudacao && (
          <div className="boas-vindas">
            <h3>Seja bem-vindo!</h3>
            <p>Olá, {nome || "visitante"}!</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
