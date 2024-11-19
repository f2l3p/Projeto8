import React from 'react';
import '../App.css';

function Eolica() {
  return (
    <div>
      {/* Corpo principal */}
      <main>
        <section className="projeto">
          <div className="interface">
            <div className="flex">
              <div className="txt-projeto">
                <h2>Um Futuro Sustentável <span>com Energia Eólica.</span></h2>
                
                {/* Importância da Energia Eólica */}
                <p><h3>A Importância da Energia Eólica</h3> A energia eólica é uma das fontes de energia renovável mais promissoras e limpas. Utilizando a força do vento para gerar eletricidade, a energia eólica tem um enorme potencial global. É uma solução sustentável que pode ser utilizada em várias regiões do mundo, sem a necessidade de grandes impactos ambientais, e desempenha um papel fundamental na redução da dependência de fontes não-renováveis e poluentes.</p>
                
                {/* Benefícios da Energia Eólica */}
                <h4>Benefícios da Energia Eólica</h4>
                <ul className="objetivos-lista">
                  <li><strong>Renovável e Limpa:</strong> A energia eólica é uma fonte renovável que não emite poluentes, contribuindo para a redução das emissões de CO2 e o combate às mudanças climáticas.</li>
                  <li><strong>Redução de Custos de Energia:</strong> O custo de geração da energia eólica tem caído significativamente nos últimos anos, tornando-se uma das fontes de energia mais competitivas no mercado global.</li>
                  <li><strong>Uso de Recursos Naturais:</strong> Aproveitar o vento, um recurso abundante e disponível em muitas regiões, sem causar danos ao meio ambiente, é uma das grandes vantagens da energia eólica.</li>
                  <li><strong>Geração de Empregos:</strong> A indústria de energia eólica gera milhares de empregos em setores como fabricação, instalação e manutenção de turbinas eólicas.</li>
                </ul>
                
                {/* Impacto da Energia Eólica no Mundo */}
                <p><h5>O Impacto da Energia Eólica no Mundo</h5> A energia eólica tem um impacto significativo na forma como geramos eletricidade. Ela contribui para a diversificação das fontes de energia, reduzindo a dependência de combustíveis fósseis e melhorando a segurança energética. Ao promover uma geração de energia limpa, a energia eólica tem um papel central na luta contra as mudanças climáticas, além de ser uma alternativa viável para regiões que não possuem acesso a outras formas de energia renovável, como a solar ou hidrelétrica.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Eolica;
