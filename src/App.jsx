
import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">FV Studios</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Serviços</a>
          <a href="#pricing">Contrate</a>
          <a href="#faq">FAQ</a>
          <a href="https://wa.me/5547996311903?text=Estou%20interessado%20no%20Marketing%20de%20Conte%C3%BAdo%20%26%20Performance" target="_blank" className="cta">Let’s Begin</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <h1><span>Strategy, Content</span> and Execution.</h1>
        <p>Everything your brand needs to grow with consistency.</p>
        <p className="sub">Deep diagnosis. Custom plan. Precise execution. We turn ideas into real results.</p>
        <a className="btn" href="https://wa.me/5547996311903?text=Estou%20interessado%20no%20Marketing%20de%20Conte%C3%BAdo%20%26%20Performance">Let’s Begin →</a>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <h2>O que fazemos</h2>
        <ul className="cards">
          <li>Diagnóstico de Negócio</li>
          <li>Plano Estratégico</li>
          <li>Consultoria Individual</li>
          <li>Criação de Conteúdo</li>
          <li>Dashboard com Resultados</li>
          <li>Escalonamento Contínuo</li>
        </ul>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section pricing">
        <h2>Plano de Contratação</h2>
        <p><strong>Mês 1:</strong> R$1.499 – Diagnóstico & Estratégia</p>
        <p><strong>Meses 2 a 4:</strong> R$3.499/mês – Execução</p>
        <a className="btn" href="https://wa.me/5547996311903?text=Estou%20interessado%20no%20Marketing%20de%20Conte%C3%BAdo%20%26%20Performance">Vamos começar →</a>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <h2>Dúvidas Frequentes</h2>
        <ul className="faq">
          <li><strong>Por que minha marca não engaja?</strong> Porque você não tem estratégia e consistência de comunicação alinhada ao seu público.</li>
          <li><strong>Preciso aparecer nos vídeos?</strong> Não necessariamente. Temos soluções personalizadas para cada perfil de negócio.</li>
          <li><strong>Vocês produzem o conteúdo?</strong> Sim, cuidamos de toda a execução após o diagnóstico e plano estratégico.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} FV Studios • Todos os direitos reservados</p>
        <a href="/login" className="login-link">Área do Cliente</a>
      </footer>
    </div>
  );
}
