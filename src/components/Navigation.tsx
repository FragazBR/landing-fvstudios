import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrollToSection: (id: string, opts?: { forceSectionTop?: boolean }) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'navbar-blur' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center h-full">
            <img src="/Logotipo-FVstudios-Branco.png" alt="Logo fvstudios" className="h-4 lg:h-5 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
          {['Início', 'Serviços', 'Contrate', 'Sobre', 'FAQ'].map((item, idx) => {
            const sectionIds = ['home', 'services', 'hire-us', 'about', 'faq'];
            return (
              <button
                key={item}
                onClick={() => {
                  if (item === 'Contrate') {
                    scrollToSection(sectionIds[idx], { forceSectionTop: true });
                  } else {
                    scrollToSection(sectionIds[idx]);
                  }
                }}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item}
              </button>
            );
          })}
            <button 
              onClick={() => scrollToSection('hire-us')}
              className="btn-primary"
            >
              QUERO APLICAR
            </button>
          </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden p-2 text-foreground"
        aria-label="Abrir menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
    {/* Fim do nav */}

    {/* Mobile Menu - corrigido para garantir exibição */}
    {isMenuOpen && (
      <div className="fixed inset-0 z-50 lg:hidden">
        {/* Backdrop escuro */}
        <div className="absolute inset-0 bg-black bg-opacity-70 transition-opacity" onClick={() => setIsMenuOpen(false)}></div>
        {/* Menu lateral com rolagem e sombra */}
        <aside className="absolute right-0 top-0 h-full w-full max-w-sm bg-[#18181b] border-l border-border shadow-2xl flex flex-col" style={{ overflowY: 'auto' }}>
          <nav className="flex flex-col p-6 pt-20 space-y-6">
            {[
              { label: 'Início', id: 'home' },
              { label: 'Serviços', id: 'services' },
              { label: 'Contrate', id: 'hire-us' },
              { label: 'Sobre', id: 'about' },
              { label: 'FAQ', id: 'faq' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => {
                scrollToSection('hire-us');
                setIsMenuOpen(false);
              }}
              className="btn-primary w-full mt-8"
            >
              QUERO APLICAR
            </button>
          </nav>
        </aside>
      </div>
    )}
      </div>
    </nav>
  );
};

export default Navigation;