import React from 'react';
import '../App.css';

function Projeto() {
  return (
    <div>
      {/* Corpo principal */}
      <main>
        <section className="projeto">
          <div className="interface">
            <div className="flex">
              <div className="img-projeto">
                <img src="images/Projeto.png" alt="" />
              </div>

              <div className="txt-projeto">
                <h2>Um Futuro Sustentável <span>com Energia Verde.</span></h2>
                <p><h3>MISSÃO:</h3> Nossa missão é conscientizar e demonstrar como a energia verde pode ser uma alternativa mais sustentável, econômica e eficiente em comparação com fontes de energia poluentes. Através de informações detalhadas e exemplos práticos, queremos inspirar comunidades e indivíduos a adotarem práticas que contribuam para um futuro mais limpo e saudável.</p>
                <h4>OBJETIVOS:</h4>
                <ul className="objetivos-lista">
                  <li>Mostrar os benefícios da energia renovável, incluindo a energia solar, eólica e hidrelétrica.</li>
                  <li>Destacar a viabilidade econômica da energia verde, desmistificando a ideia de que é uma opção cara.</li>
                  <li>Apresentar casos de sucesso e tecnologias emergentes que comprovam a eficiência das soluções sustentáveis.</li>
                </ul>
                <p><h5>COMPROMISSO:</h5> Estamos comprometidos em ser uma fonte confiável de informação e inspiração, promovendo a adoção de tecnologias que não apenas preservem nosso ambiente, mas também melhorem a qualidade de vida das gerações atuais e futuras.</p>

                <div className="btn-projeto">
                  <a href="https://github.com/">
                    <button><i className="bi bi-github"></i></button>
                  </a>
                  <a href="https://www.google.com/intl/pt_br/gmail/about/">
                    <button><i className="bi bi-google"></i></button>
                  </a>
                  <a href="https://web.whatsapp.com/">
                    <button><i className="bi bi-whatsapp"></i></button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projeto;
