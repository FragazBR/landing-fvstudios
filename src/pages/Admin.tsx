import React, { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';


const STATUS = [
  { key: 'novo', label: 'Novo' },
  { key: 'qualificado', label: 'Qualificado' },
  { key: 'em_contato', label: 'Em contato' },
  { key: 'proposta', label: 'Proposta enviada' },
  { key: 'fechado', label: 'Fechado' },
];

const Admin = () => {
  const [user, setUser] = useState(null);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate('/login');
      } else {
        setUser(data.session.user);
        fetchLeads();
      }
    });
  }, []);


  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('leads').select('*').order('data_entrada', { ascending: false });
    if (error) setError('Erro ao buscar leads: ' + error.message);
    else setLeads(data || []);
    setLoading(false);
  };

  const onDragStart = (e, leadId) => {
    e.dataTransfer.setData('leadId', leadId);
  };

  const onDrop = async (e, status) => {
    const leadId = e.dataTransfer.getData('leadId');
    await supabase.from('leads').update({ status }).eq('id', leadId);
    fetchLeads();
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  if (loading) return <div className="p-8 text-center text-lg font-semibold animate-pulse">Carregando...</div>;
  if (error) return <div className="p-8 text-center text-red-600 font-semibold">{error}</div>;

  return (
    <div className="min-h-screen bg-background py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gradient heading-tight drop-shadow">CRM de Leads</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STATUS.map((col) => (
            <div
              key={col.key}
              className="glass-card flex flex-col min-h-[500px] border border-glass"
              onDrop={(e) => onDrop(e, col.key)}
              onDragOver={onDragOver}
            >
              <h2 className="text-xl font-bold mb-4 text-primary heading-tight text-gradient text-center">{col.label}</h2>
              <div className="flex flex-col gap-4">
                {leads.filter((l) => (l.status || 'novo') === col.key).map((lead) => (
                  <div
                    key={lead.id}
                    className="glass-card cursor-move hover:shadow-2xl transition relative flex flex-col min-h-[170px] border border-glass"
                    draggable
                    onDragStart={(e) => onDragStart(e, lead.id)}
                  >
                    {col.key !== 'fechado' && (
                      <button
                        className="absolute top-2 right-2 text-primary hover:text-primary-dark p-1 rounded"
                        title="Excluir lead"
                        onClick={async (e) => {
                          e.stopPropagation();
                          await supabase.from('leads').delete().eq('id', lead.id);
                          fetchLeads();
                        }}
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                    <div className="flex flex-col gap-1 mb-2">
                      <span className="text-lg font-bold text-primary leading-tight">{lead.nome}</span>
                      <span className="text-sm text-accent font-semibold">{lead.empresa}</span>
                    </div>
                    <div className="flex flex-col gap-0.5 flex-1">
                      <span className="text-sm text-foreground"><span className="font-semibold">Email:</span> {lead.email}</span>
                      <span className="text-sm text-foreground"><span className="font-semibold">Telefone:</span> {lead.telefone}</span>
                      <span className="text-sm text-muted-foreground"><span className="font-semibold">Fonte:</span> {lead.fonte}</span>
                    </div>
                    <div className="mt-3 text-xs text-muted-foreground text-right">
                      {lead.data_entrada ? new Date(lead.data_entrada).toLocaleString() : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
