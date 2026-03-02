# Cristalografia

Projeto Vite + React preparado para edição local e publicação.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

O projeto já inclui:

- `netlify.toml` para deploy em Netlify
- `vercel.json` para deploy em Vercel
- `.github/workflows/deploy.yml` para GitHub Pages

### GitHub Pages

1. Fazer push do projeto para o repositório `DanielFreitas116/Cristalografia`.
2. No GitHub, abrir `Settings > Pages`.
3. Em `Build and deployment`, escolher `Source: GitHub Actions`.
4. Fazer push para `main`.
5. A action publica o site em `https://danielfreitas116.github.io/Cristalografia/`.

## Domínio personalizado

### Netlify

1. Criar um novo site a partir deste repositório.
2. Confirmar `Build command: npm run build`.
3. Confirmar `Publish directory: dist`.
4. Em `Domain management`, adicionar o teu domínio.
5. Apontar o DNS do domínio para os nameservers da Netlify.

### Vercel

1. Importar este projeto na Vercel.
2. Confirmar o preset `Vite`.
3. Em `Domains`, adicionar o teu domínio.
4. Criar os registos DNS pedidos pela Vercel no teu provedor.

## Conteúdo editável

O conteúdo principal está em `src/App.jsx`.
