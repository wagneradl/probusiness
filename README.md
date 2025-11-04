# Blueprint Executivo - SEBRAE Pró Business 2025

Projeto Next.js (App Router) com shadcn/ui e Tailwind CSS, otimizado para deploy estático no GitHub Pages.

## 🎯 Visão Geral

Este é um blueprint executivo completo para o evento SEBRAE Pró Business 2025, componentizado em React com:

- **Framework:** Next.js 14 (App Router)
- **UI:** shadcn/ui + Radix UI
- **Estilização:** Tailwind CSS
- **TypeScript:** Strict mode
- **Deploy:** GitHub Pages (static export)

## 🚀 Getting Started

### Instalação

```bash
git clone https://github.com/wagneradl/probusiness.git
cd probusiness
pnpm install
```

### Desenvolvimento

```bash
pnpm dev
```

Abra [http://localhost:3000/probusiness](http://localhost:3000/probusiness) no navegador.

### Build

```bash
pnpm build
```

## 🌐 Deploy no GitHub Pages

### Deploy Automático (Recomendado)

Este projeto está configurado com GitHub Actions para deploy automático a cada push na branch `main`.

**Passos para ativar:**

1. Acesse as configurações do repositório: https://github.com/wagneradl/probusiness/settings/pages
2. Em **"Source"**, selecione: **GitHub Actions**
3. Clique em **Save**

O site ficará disponível em: **https://wagneradl.github.io/probusiness**

### Deploy Manual (Local)

Se preferir fazer deploy manual:

```bash
# 1. Build do projeto
pnpm build

# 2. O diretório `out/` contém o site estático
# 3. Faça upload desse diretório para qualquer servidor web
```

## 🎨 Componentes

- PageHeader, SectionTitle
- Alert, Card, Table, Badge
- FlowDiagram, Timeline, Checklist
- TechStackGrid, BudgetTotal

## 📄 Licença

SEBRAE Pró Business 2025

**Desenvolvido por Wagner Lima** | 03/11/2025
