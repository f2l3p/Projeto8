import React from 'react';
import '../App.css';

function Solar() {
  return (
    <div>
      {/* Corpo principal */}
      <main>
        <section className="projeto">
          <div className="interface">
            <div className="flex">
              <div className="txt-projeto">
                <h2>Um Futuro Sustentável <span>com Energia Solar.</span></h2>
                
                {/* Importância da Energia Solar */}
                <p><h3>A Importância da Energia Solar</h3> A energia solar desempenha um papel fundamental na transformação do sistema energético global. Como fonte renovável e abundante, ela oferece uma alternativa limpa e eficiente, reduzindo a dependência de fontes poluentes e promovendo a sustentabilidade. A adoção da energia solar é essencial para alcançar as metas de redução de emissões de carbono e para garantir um futuro energético mais seguro e acessível para todos.</p>
                
                {/* Benefícios da Energia Solar */}
                <h4>Benefícios da Energia Solar</h4>
                <ul className="objetivos-lista">
                  <li><strong>Redução de Custos:</strong> A energia solar pode reduzir significativamente as contas de eletricidade, pois, após o investimento inicial, ela gera energia praticamente gratuita.</li>
                  <li><strong>Baixo Impacto Ambiental:</strong> Ao utilizar uma fonte limpa e renovável, a energia solar contribui para a diminuição da poluição e dos gases de efeito estufa.</li>
                  <li><strong>Independência Energética:</strong> Ao instalar painéis solares, você pode gerar sua própria eletricidade, tornando-se menos dependente das redes elétricas e das flutuações de preços de energia.</li>
                  <li><strong>Criação de Empregos:</strong> A indústria de energia solar está crescendo rapidamente, criando novas oportunidades de trabalho em várias áreas, desde a instalação até a manutenção de sistemas solares.</li>
                </ul>
                
                {/* Impacto da Energia Solar no Mundo */}
                <p><h5>O Impacto da Energia Solar no Mundo</h5> A energia solar não é apenas uma solução energética; ela é uma força transformadora. Ao reduzir as emissões de carbono, ajudar a combater as mudanças climáticas e promover a sustentabilidade, a energia solar tem um impacto direto no meio ambiente e na sociedade. Cada projeto de energia solar é uma contribuição para um mundo mais limpo, saudável e economicamente estável, beneficiando gerações presentes e futuras.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Solar;
