import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard.jsx';
import Services from './pages/Services.jsx';
import Agents from './pages/Agents.jsx';
import Memory from './pages/Memory.jsx';

const TABS = ['Dashboard', 'Services', 'Agents', 'Memory'];

export default function App() {
  const [tab, setTab] = useState('Dashboard');
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch('/health').then(r => r.json()).then(setHealth).catch(() => {});
  }, []);

  return (
    <div className="app">
      <nav className="sidebar">
        <h1>🧠 Heady</h1>
        <p className="version">v3.2 Orion</p>
        {TABS.map(t => (
          <button key={t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
        <div className="health-dot" data-status={health?.status || 'unknown'} />
      </nav>
      <main className="content">
        {tab === 'Dashboard' && <Dashboard />}
        {tab === 'Services'  && <Services />}
        {tab === 'Agents'    && <Agents />}
        {tab === 'Memory'    && <Memory />}
      </main>
    </div>
  );
}
