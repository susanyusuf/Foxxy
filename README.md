 # Fox Wallet

 Fox Wallet is a small, client-side demonstration wallet intended for demos and GrantFox submission. It illustrates key signing and verification flows without any server-side components. The demo is intentionally minimal and focused on teaching how signing works in browser contexts.

 Key features
 - Generate a new random keypair locally in the browser
 - Import an existing private key for deterministic testing
 - Sign arbitrary messages and verify signatures
 - Download the private key for offline testing (do not use real funds)

 Why this project
 Fox Wallet is a safe, focused educational demo that helps reviewers and contributors understand signing flows, message verification, and private key handling in a controlled environment. It is useful for prototyping wallet UX and for demonstrating cryptographic signing in GrantFox submissions.

 Quick start (local)
 ```bash
 git clone https://github.com/susanyusuf/Foxxy.git
 cd Foxxy
 npm install
 npm run dev
 # open http://localhost:3000
 ```

 Build (production)
 ```bash
 npm run build
 npm run preview
 ```

 Security notice
 - This demo runs entirely in the browser; keys are not sent to any server by design.
 - Do NOT use keys generated here with real funds or on main networks.
 - Use the download feature only for local testing and then store keys securely.

 Project structure
 - `src/` — React + Vite demo app (signing + verification UI)
 - `package.json`, `vite.config.js` — build and dependency configuration
 - `.github/workflows/gh-pages.yml` — optional GitHub Pages deploy workflow
 - `issues/` — curated issue files contributors can pick from
 - `CONTRIBUTING.md` — instructions for running and contributing

 How to contribute
 1. Fork the repo and create a branch for your changes
 2. Run the app locally, implement your change, and open a PR
 3. Use the `issues/` folder to claim an issue and reference it in your PR

 Contact and submission
 - Use `SUBMISSION_TEMPLATE.md` to copy/paste GrantFox form answers.
 - For questions, open an issue or contact the maintainer via the repository profile.

 License
 - This demo is released under the MIT License. See `LICENSE` for details.

