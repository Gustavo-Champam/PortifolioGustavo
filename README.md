# Gustavo Champam — Portfólio

![Preview do portfólio](./public/og-systems-v2.png)

Portfólio pessoal desenvolvido para apresentar minha trajetória, experiências e projetos com foco em **Backend, Automação e Integrações**.

O site reúne cases reais, tecnologias que utilizo no dia a dia e projetos voltados à resolução de problemas de negócio com software.

## Sobre

Sou estudante de **Engenharia da Computação na Facens** e desenvolvedor de software, com foco em construção de APIs, integrações, automações e ferramentas internas.

Minha abordagem parte do problema antes da tecnologia: entender o processo, modelar uma solução clara e entregar algo confiável e simples de operar.

## Projetos em destaque

### Voll Bridget

Pipeline para leitura, validação e envio de documentos fiscais ao ERP.

* Redução de um processo de aproximadamente **30 minutos para cerca de 1 minuto**
* Detecção de origem e seleção automática de parser
* Validação de regras e cálculos fiscais
* Autenticação e rastreabilidade do fluxo
* Cobertura com **75 testes**

**Stack:** Node.js, TypeScript, MongoDB, OAuth2 e BigInt.

[Ver versão pública no GitHub](https://github.com/Gustavo-Champam/nfe-parser-pipeline)

### AI Desk

Personalização de uma plataforma self-hosted de atendimento com inteligência artificial para um cliente nos Estados Unidos.

A solução conta com RAG, base de conhecimento, múltiplos provedores de IA, analytics, inbox e transferência para atendimento humano preservando o contexto da conversa.

**Stack:** FastAPI, Vue, PostgreSQL, pgvector e Docker.

> Repositório privado por se tratar de um produto comercial.

### Outros projetos

* **Pulse** — avaliações de liderança e consultas hierárquicas com Next.js, FastAPI, SQLite e Docker.
* **MediTrack** — API de controle de medicamentos e agendas recorrentes com NestJS, TypeScript, MongoDB e JWT.
* **GRAVA.AI** — experiência interativa integrada ao Gemini com React, Zustand e Motion.
* **NextApprover** — automação de responsáveis e aprovadores usando Power Apps, Power Automate, Dataverse e Teams.

## Tecnologias

### Backend

`Node.js` · `TypeScript` · `Express` · `NestJS` · `Python` · `FastAPI` · `OAuth2` · `JWT`

### Dados e infraestrutura

`MongoDB` · `PostgreSQL` · `MySQL` · `Redis` · `pgvector` · `Docker` · `Linux` · `CI/CD`

### Frontend, produto e IA

`React` · `Next.js` · `Vue` · `RAG` · `LLMs` · `Power Apps` · `Power Automate` · `HTML/CSS`

## Stack deste portfólio

O portfólio utiliza uma arquitetura React full-stack compatível com Next.js através do **vinext**, com build baseado em Vite e suporte ao ambiente Cloudflare.

Principais tecnologias do projeto:

* React 19
* TypeScript
* Tailwind CSS 4
* vinext
* Vite
* Cloudflare Workers / Wrangler
* Drizzle ORM
* ESLint
* Node.js 22+

## Como executar localmente

### Pré-requisitos

* Node.js `>= 22.13.0`
* npm

### Instalação

```bash
git clone <URL_DO_REPOSITORIO>
cd PortifolioGustavo
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Build de produção

```bash
npm run build
```

### Executar build

```bash
npm run start
```

### Testes

```bash
npm test
```

### Lint

```bash
npm run lint
```

## Estrutura do projeto

```text
PortifolioGustavo/
├── app/
│   ├── globals.css        # Estilos globais do portfólio
│   ├── layout.tsx         # Layout e metadata
│   └── page.tsx           # Página principal
├── public/
│   ├── projects/          # Imagens dos projetos
│   ├── gustavo-color.jpg
│   ├── og-systems-v2.png
│   └── curriculo-gustavo-champam.pdf
├── db/                    # Configuração do Drizzle
├── worker/                # Worker da aplicação
├── tests/                 # Testes de renderização
├── vite.config.ts
├── next.config.ts
└── package.json
```

## Principais seções do site

* **Hero** — apresentação e posicionamento profissional
* **Sobre** — trajetória, formação e forma de trabalho
* **Projetos** — seis cases selecionados
* **Stack** — tecnologias e ferramentas utilizadas
* **Experiência** — histórico profissional
* **Contato** — links para GitHub, LinkedIn, currículo e e-mail

## Contato

**Gustavo Champam**
Backend Developer · Sorocaba, SP

* [GitHub](https://github.com/Gustavo-Champam)
* [LinkedIn](https://www.linkedin.com/in/gustavo-gutierres-champam-359b45209/)
* E-mail: `guti.gustavo10@gmail.com`

---

Desenvolvido por **Gustavo Champam**.
