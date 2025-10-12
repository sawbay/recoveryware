# Recovery Ware
Recovery Ware that serves a browser-only tool to encrypt or decrypt sensitive text using PBKDF2 + AES-GCM, plus Web NFC helpers for Android devices*.

Hosted at: https://recoveryware.sawbay.net

* For iPhone devices, please use **NFC Tools** to write encrypted data.
## Features
- Passphrase-confirmed encryption with configurable PBKDF2 iterations (min 100k).
- Clipboard copy of the encrypted blob and NFC read/write flows when supported.
- No secrets leave the browser; the worker only returns the static HTML/JS bundle.

## Prerequisites
- Node 18+ and `npm install`
- Cloudflare Wrangler (`npm run cf-typegen` optional) and a valid API token for deploys.

## Local development
```bash
npm install
npm run dev
```
Then open the printed localhost URL; use HTTPS/Android Chrome to test Web NFC.

## Deploy
Set `CLOUDFLARE_API_TOKEN=...` and run `npm run deploy`. The worker serves `src/index.html` via `src/index.ts`.

## Notes
- After decrypting, clear plaintext from the UI manually—downloads were intentionally removed.
- Web NFC only works on compatible Android browsers; buttons auto-disable elsewhere.
