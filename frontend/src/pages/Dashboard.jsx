import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/dashboard/status')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData({ error: 'Failed to load' }));
  }, []);

  return (
    <div className="page">
      <h2>Dashboard</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
