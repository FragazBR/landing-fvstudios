import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setError(error.message);
    else setSuccess('Login realizado! Redirecionando...');
    if (!error) window.location.href = '/admin';
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary px-4 py-16">
      <div className="max-w-md w-full glass-card p-8 flex flex-col items-center text-center gap-6 animate-fade-in">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Área Administrativa</h2>
        <p className="text-muted-foreground mb-4 text-base">Acesso restrito para administradores</p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 items-center">
          <input
            type="email"
            placeholder="E-mail"
            className="input w-full border border-border p-3 rounded-lg text-foreground placeholder-muted-foreground bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Senha"
            className="input w-full border border-border p-3 rounded-lg text-foreground placeholder-muted-foreground bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          <button type="submit" className="btn-primary w-full py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-200" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
          {error && <div className="text-red-500 text-center w-full">{error}</div>}
          {success && <div className="text-green-500 text-center w-full">{success}</div>}
        </form>
      </div>
    </section>
  );
};

export default Login;
