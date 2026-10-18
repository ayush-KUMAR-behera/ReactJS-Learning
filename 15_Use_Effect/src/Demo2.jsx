import React, { useState, useEffect } from 'react';

const Demo2 = () => {
  const [text, setText] = useState('');

  // Side Effect: Updating the real browser tab title
  useEffect(() => {
    const charCount = text.length;
    document.title = `(${charCount}) Characters Typed`;

    // Try looking at your browser tab at the very top of Chrome!
  }, [text]); // Runs whenever 'text' changes

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        backgroundColor: '#1e293b',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #334155',
        width: '320px'
      }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#38bdf8' }}>
          Document Title Sync
        </h2>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '16px' }}>
          Watch your browser tab name change as you type!
        </p>

        <input
          type="text"
          placeholder="Start typing..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#0f172a',
            border: '1px solid #475569',
            borderRadius: '6px',
            color: 'white',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />

        <p style={{ marginTop: '12px', fontSize: '0.9rem', color: '#34d399' }}>
          Total Characters: <strong>{text.length}</strong>
        </p>
      </div>
    </div>
  );
};

export default Demo2;
