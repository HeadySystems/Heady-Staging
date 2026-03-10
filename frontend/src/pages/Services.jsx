import React, { useState, useEffect } from 'react';

export default function Services() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/services/status')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData({ error: 'Failed to load' }));
  }, []);

  return (
    <div className="page">
      <h2>Services</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
