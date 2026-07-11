import React, { useState } from 'react';
import { Wallet, verifyMessage } from 'ethers';

export default function App() {
  const [wallet, setWallet] = useState(null);
  const [message, setMessage] = useState('');
  const [signature, setSignature] = useState('');
  const [verified, setVerified] = useState(null);

  const createWallet = () => {
    const w = Wallet.createRandom();
    setWallet({ address: w.address, privateKey: w.privateKey, _wallet: w });
    setSignature('');
    setVerified(null);
  };

  const importPrivateKey = (pk) => {
    try {
      const w = new Wallet(pk);
      setWallet({ address: w.address, privateKey: w.privateKey, _wallet: w });
      setSignature('');
      setVerified(null);
    } catch (e) {
      alert('Invalid private key');
    }
  };

  const sign = async () => {
    if (!wallet) return alert('Create or import a wallet first');
    const sig = await wallet._wallet.signMessage(message || 'Hello from Fox Wallet');
    setSignature(sig);
    setVerified(null);
  };

  const verify = async () => {
    try {
      const signer = verifyMessage(message || 'Hello from Fox Wallet', signature);
      setVerified(signer === wallet.address);
    } catch (e) {
      setVerified(false);
    }
  };

  const downloadKey = () => {
    if (!wallet) return;
    const blob = new Blob([wallet.privateKey], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fox-wallet-${wallet.address}.key.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero__copy">
          <h1>Fox Wallet</h1>
          <p className="hero__text">A simple client-side wallet demo to generate keys and sign messages.</p>
          <div className="hero__actions">
            <button className="button button--primary" onClick={createWallet}>Generate Wallet</button>
            <button className="button button--secondary" onClick={() => {
              const pk = prompt('Paste private key (0x...)');
              if (pk) importPrivateKey(pk.trim());
            }}>Import Private Key</button>
          </div>
        </div>

        <div className="hero__panel">
          <h2>Quick actions</h2>
          <p>Generate a new wallet or import an existing private key for demo purposes only.</p>
          <ul>
            <li>Never use real funds with this demo wallet.</li>
            <li>Designed for local demos and GrantFox submission showcase.</li>
          </ul>
        </div>
      </header>

      <main>
        <section className="metrics">
          <article className="card">
            <p className="metric-label">Address</p>
            <h3>{wallet ? wallet.address : '—'}</h3>
            <p>Public address derived from the private key.</p>
          </article>
          <article className="card">
            <p className="metric-label">Private key</p>
            <h3>{wallet ? (wallet.privateKey.slice(0, 10) + '...') : '—'}</h3>
            <p>Keep this private — use the download button to save it locally.</p>
          </article>
          <article className="card">
            <p className="metric-label">Actions</p>
            <h3>Sign & Verify</h3>
            <p>Sign a message and verify the signature.</p>
          </article>
        </section>

        <section className="content-grid">
          <div className="panel">
            <div className="panel__header">
              <div>
                <p className="eyebrow">Sign</p>
                <h2>Sign a message</h2>
              </div>
            </div>

            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message to sign" rows={4} style={{width: '100%', padding: '0.6rem', borderRadius:8}} />
            <div style={{display:'flex', gap:8, marginTop:8}}>
              <button className="button button--primary" onClick={sign}>Sign Message</button>
              <button className="button button--secondary" onClick={verify}>Verify Signature</button>
              <button className="button" onClick={downloadKey} style={{background:'#ff9f43', color:'#140b05'}}>Download Key</button>
            </div>

            <div style={{marginTop:12}}>
              <p className="metric-label">Signature</p>
              <pre style={{whiteSpace:'break-spaces', background:'rgba(255,255,255,0.03)', padding:12, borderRadius:8}}>{signature || '—'}</pre>
              <p style={{marginTop:8}}>Verified: {verified === null ? '—' : verified ? 'Yes' : 'No'}</p>
            </div>
          </div>

          <div className="panel">
            <div className="panel__header">
              <div>
                <p className="eyebrow">Demo notes</p>
                <h2>Usage & safety</h2>
              </div>
            </div>

            <p>This demo runs entirely in your browser and does not send keys to any server. It's intended for showcasing signing flows in a GrantFox submission.</p>
            <ul>
              <li>Do not use real funds with keys generated here.</li>
              <li>Use the "Download Key" button to save your private key locally.</li>
              <li>Importing a key is supported for local testing only.</li>
            </ul>

          </div>
        </section>
      </main>
    </div>
  );
}
