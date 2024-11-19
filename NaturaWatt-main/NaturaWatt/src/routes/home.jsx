import React from 'react';
import '../App.css';

function Home() {
  return (
    <div>
      {/* Corpo principal */}
      <main>
        <section className="topo-do-Site">
          <div className="interface">
            <div className="flex">
              <div className="txt-top-site">
                <h1>VIRANDO O VENTO: DO <span className="span1">CINZA</span> À ENERGIA <span className="span">VERDE</span>.</h1>
                <p>A energia verde é a chave para um futuro sustentável. Ao migrar de fontes poluentes, como o petróleo, para alternativas renováveis, como a eólica e a solar, podemos reduzir a poluição e combater as mudanças climáticas. Essa transição não apenas melhora a qualidade do ar, mas também garante um planeta mais saudável para as próximas gerações. É hora de deixar o cinza para trás e abraçar um futuro verde!</p>
                <div className="btn-contato">
                  <a href="energia"><button>Saiba Mais</button></a>
                </div>
              </div>
              <div className="img-top-site">
                <img src="images/PXE.png" alt="Imagem sobre energia verde" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
