import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrollToSection: (id: string) => void;
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
                  onClick={() => scrollToSection(sectionIds[idx])}
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
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-background/95 backdrop-blur-xl border-l border-border mobile-menu ${
        isMenuOpen ? 'open' : ''
      }`}>
        <div className="flex flex-col p-6 pt-20 space-y-6">
          {['Home', 'Services', 'Hire Us', 'About', 'FAQ'].map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item.toLowerCase().replace(' ', '-'));
                setIsMenuOpen(false);
              }}
              className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;