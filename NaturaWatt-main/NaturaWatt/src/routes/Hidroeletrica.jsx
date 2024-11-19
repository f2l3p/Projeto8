import React from 'react';
import '../App.css';

function Hidroelettrica() {
  return (
    <div>
      {/* Corpo principal */}
      <main>
        <section className="projeto">
          <div className="interface">
            <div className="flex">
              <div className="txt-projeto">
                <h2>Um Futuro Sustentável <span>com Energia Hidrelétrica.</span></h2>
                
                {/* Importância da Energia Hidrelétrica */}
                <p><h3>A Importância da Energia Hidrelétrica</h3> A energia hidrelétrica é uma das fontes mais importantes e utilizadas para a geração de eletricidade no mundo. Através da força da água, ela proporciona uma solução eficiente e confiável para atender à crescente demanda por energia. Além de ser renovável e de baixo impacto ambiental, a energia hidrelétrica tem um papel crucial na estabilidade das redes elétricas, oferecendo uma fonte de energia contínua e controlada.</p>
                
                {/* Benefícios da Energia Hidrelétrica */}
                <h4>Benefícios da Energia Hidrelétrica</h4>
                <ul className="objetivos-lista">
                  <li><strong>Fonte Renovável:</strong> A energia hidrelétrica utiliza o ciclo da água, um recurso renovável, para gerar eletricidade, garantindo uma produção de energia de longo prazo.</li>
                  <li><strong>Baixo Custo de Produção:</strong> Após a construção da usina, o custo de operação e manutenção da energia hidrelétrica é relativamente baixo, tornando-a uma opção econômica.</li>
                  <li><strong>Armazenamento de Energia:</strong> Usinas hidrelétricas podem armazenar energia em reservatórios, permitindo a produção de eletricidade conforme a necessidade, especialmente durante picos de demanda.</li>
                  <li><strong>Redução das Emissões de CO2:</strong> A produção de energia hidrelétrica gera praticamente nenhuma emissão de gases de efeito estufa, contribuindo para a luta contra as mudanças climáticas.</li>
                </ul>
                
                {/* Impacto da Energia Hidrelétrica no Mundo */}
                <p><h5>O Impacto da Energia Hidrelétrica no Mundo</h5> A energia hidrelétrica tem um impacto profundo no desenvolvimento energético global. Ela não apenas oferece uma fonte de eletricidade limpa e renovável, mas também contribui para a segurança energética e o crescimento econômico. Além disso, ao fornecer uma alternativa para fontes de energia mais poluentes, as usinas hidrelétricas desempenham um papel essencial na mitigação das mudanças climáticas e na criação de um futuro mais sustentável para o planeta.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Hidroelettrica;
