import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://euumovpwxxkmgplpntwp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1dW1vdnB3eHhrbWdwbHBudHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNzQyNDIsImV4cCI6MjA2OTc1MDI0Mn0.xNLh8LN0q1_uCuIcyUMD7ktqKhgOPWZo7Zn00ZKx89k';
const supabase = createClient(supabaseUrl, supabaseKey);

const STATUS = [
  { key: 'novo', label: 'Novo' },
  { key: 'em_contato', label: 'Em contato' },
  { key: 'fechado', label: 'Fechado' },
];

const KanbanCRM = () => {
  const [user, setUser] = useState(null);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900 drop-shadow">CRM de Leads</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATUS.map((col) => (
            <div
              key={col.key}
              className="bg-white rounded-xl shadow-lg p-4 flex flex-col min-h-[500px] border border-gray-100"
              onDrop={(e) => onDrop(e, col.key)}
              onDragOver={onDragOver}
            >
              <h2 className="text-xl font-bold mb-4 text-gray-700">{col.label}</h2>
              <div className="flex flex-col gap-4">
                {leads.filter((l) => (l.status || 'novo') === col.key).map((lead) => (
                  <div
                    key={lead.id}
                    className="bg-gray-50 rounded-lg shadow p-4 border border-gray-200 cursor-move hover:bg-gray-100 transition"
                    draggable
                    onDragStart={(e) => onDragStart(e, lead.id)}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base font-bold text-gray-800">{lead.nome}</span>
                      <span className="ml-auto text-xs text-gray-400">{lead.data_entrada ? new Date(lead.data_entrada).toLocaleString() : ''}</span>
                    </div>
                    <div className="text-sm text-gray-600"><span className="font-semibold">Email:</span> {lead.email}</div>
                    <div className="text-sm text-gray-600"><span className="font-semibold">Telefone:</span> {lead.telefone}</div>
                    <div className="text-sm text-gray-600"><span className="font-semibold">Empresa:</span> {lead.empresa}</div>
                    <div className="text-sm text-gray-600"><span className="font-semibold">Fonte:</span> {lead.fonte}</div>
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

export default KanbanCRM;
