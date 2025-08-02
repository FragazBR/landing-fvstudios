const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <p className="text-lg font-medium mb-2">Tem interesse?</p>
            <p className="text-muted-foreground mb-4">Clique no botão abaixo e entre para a fila de espera</p>
            <button className="btn-primary text-base px-8 py-3 mb-6" onClick={() => window.scrollTo({top: document.getElementById('hire-us')?.offsetTop || 0, behavior: 'smooth'})}>QUERO APLICAR</button>
          </div>
          <div className="flex flex-col items-center mb-2">
            <img src="/Logotipo-FVstudios-Branco.png" alt="Logo fvstudios" className="h-8 lg:h-10 w-auto mb-4" />
            <p className="text-xs text-muted-foreground font-semibold mb-1">FVSTUDIOS LTDA.</p>
            <p className="text-xs text-muted-foreground">CNPJ: 52.102.987/0001-59</p>
          </div>
          <p className="text-muted-foreground">
            Consultoria em Crescimento Estratégico
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;