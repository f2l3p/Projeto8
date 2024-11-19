import React from 'react';
import '../App.css';

function Energia() {
  return (
    <div>
      {/* Corpo principal */}
      <main>
        <section className="energia">
          <div className="interface">
            <h2 className="titulo">THE BIG <span className="span">TREES</span>.</h2>
            <div className="flex">
              <div className="energia-box">
                <a href="/Solar"><i className="bi bi-sun solar-icon"></i></a>
                <h3>ENERGIA SOLAR</h3>
                <p>Lorem ipsum dolor sit amet...</p>
              </div>
              <div className="energia-box">
                <a href="Hidroelettrica"><i className="bi bi-cloud-lightning-rain hidreletrica-icon"></i></a>
                <h3>ENERGIA HIDRELÉTRICA</h3>
                <p>Lorem ipsum dolor sit amet...</p>
              </div>
              <div className="energia-box">
                <a href="Eolica"><i className="bi bi-wind eolica-icon"></i></a>
                <h3>ENERGIA EÓLICA</h3>
                <p>Lorem ipsum dolor sit amet...</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Energia;
