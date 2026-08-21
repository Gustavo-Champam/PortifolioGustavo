import Image from "next/image";

const secondaryProjects = [
  {
    number: "03",
    visual: "pulse",
    title: "Pulse",
    label: "Leadership Evaluation",
    description:
      "Avaliações semanais com hierarquia organizacional, regras imutáveis e consultas recursivas protegidas no backend.",
    stack: ["Next.js", "FastAPI", "SQLite", "Docker"],
    href: "https://github.com/Gustavo-Champam/Pulse-Leadership-Evaluation",
  },
  {
    number: "04",
    visual: "meditrack",
    title: "MediTrack",
    label: "Medication API",
    description:
      "API para estoque de medicamentos, agendas recorrentes, próximas doses e preferências de cada usuário.",
    stack: ["NestJS", "TypeScript", "MongoDB", "JWT"],
    href: "https://github.com/Gustavo-Champam/nestjs-meditrack-BackEnd",
  },
  {
    number: "05",
    visual: "product",
    title: "Product.AI",
    label: "Totem interativo",
    description:
      "Experiência vertical de compra conectada ao Gemini, com fallback local para a jornada nunca parar.",
    stack: ["React", "Gemini", "Zustand", "Motion"],
    href: "https://github.com/Gustavo-Champam/GravaAiTotem",
  },
  {
    number: "06",
    visual: "approver",
    title: "NextApprover",
    label: "Automação LATAM",
    description:
      "Automação para localizar usuários inativos e atualizar responsáveis e aprovadores entre sistemas.",
    stack: ["Power Apps", "Automate", "Dataverse", "Teams"],
    href: "https://github.com/Gustavo-Champam/NextApprover-PowerApps",
  },
];

const experiences = [
  {
    number: "03",
    period: "jun/2025 — agora",
    company: "VOLL S.A.",
    role: "Desenvolvimento de Software",
    description:
      "Backends, APIs REST, automações internas e integrações com Node.js, Express e MongoDB.",
  },
  {
    number: "02",
    period: "fev/2025 — jun/2025",
    company: "Prysmian",
    role: "TI LATAM",
    description:
      "Automação de fluxos e sincronização de dados com Power Platform, Dataverse, SharePoint e Teams.",
  },
  {
    number: "01",
    period: "mar/2023 — jan/2025",
    company: "ZF do Brasil",
    role: "Engenharia de Aplicação & Projetos",
    description:
      "Projetos de veículos pesados, cronogramas, documentação técnica e colaboração multidisciplinar.",
  },
];

function ProjectArtwork({ type }: { type: string }) {
  if (type === "pulse") {
    return (
      <div className="artwork pulse-art" aria-hidden="true">
        <header><span>PULSE / WEEK 32</span><i>LIVE</i></header>
        <strong>3.72</strong>
        <div className="pulse-chart">
          {[42, 66, 54, 82, 70, 94, 74, 88].map((height, index) => (
            <i key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
        <small>score médio · 12 líderes</small>
      </div>
    );
  }

  if (type === "meditrack") {
    return (
      <div className="artwork med-art" aria-hidden="true">
        <header><span>AGENDA / HOJE</span><i>03 DOSES</i></header>
        <div className="med-dose"><b>08:00</b><span>Losartana</span><i>feito</i></div>
        <div className="med-dose"><b>12:30</b><span>Vitamina D</span><i>agora</i></div>
        <div className="med-dose muted"><b>20:00</b><span>Próxima agenda</span><i>depois</i></div>
      </div>
    );
  }

  if (type === "Product") {
    return (
      <div className="artwork Product-art" aria-hidden="true">
        <div className="Product-orbit" />
        <div className="Product-device">
          <span>Product.AI</span>
          <strong>Crie algo<br />que é só seu.</strong>
          <i>Gemini · online</i>
        </div>
      </div>
    );
  }

  return (
    <div className="artwork approver-art" aria-hidden="true">
      <header><span>NEXT APPROVER</span><i>SYNCED</i></header>
      <div className="approval-nodes">
        <div><small>01</small><b>Usuário</b></div><i>→</i>
        <div><small>02</small><b>Validar</b></div><i>→</i>
        <div><small>03</small><b>Aprovar</b></div>
      </div>
      <p><i /> Fluxo atualizado em todos os sistemas</p>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="topbar">
        <a className="identity-mark" href="#top" aria-label="Voltar ao início">
          <span>GC</span><small>/26</small>
        </a>
        <nav className="topnav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Experiência</a>
        </nav>
        <a
          className="availability-pill"
          href="https://wa.me/5515996552533"
          target="_blank"
          rel="noreferrer"
          aria-label="Conversar com Gustavo pelo WhatsApp"
        >
          <i /> <span>WhatsApp · (15) 99655-2533</span>
        </a>
      </header>

      <section className="signal-hero">
        <div className="signal-grid" aria-hidden="true" />
        <div className="signal-orb signal-orb-one" aria-hidden="true" />
        <div className="signal-orb signal-orb-two" aria-hidden="true" />

        <div className="signal-shell">
          <div className="signal-kicker">
            <span>Gustavo Champam</span>
            <span>Backend Developer</span>
            <span>Sorocaba · SP</span>
          </div>

          <h1 className="signal-title">
            <span>Backend.</span>
            <span>Automação.</span>
            <span>Integrações.</span>
          </h1>

          <div className="hero-portrait">
            <div className="portrait-ring ring-one" aria-hidden="true" />
            <div className="portrait-ring ring-two" aria-hidden="true" />
            <Image
              src="/gustavo-color.jpg"
              alt="Gustavo Champam em uma viagem"
              width={400}
              height={400}
              sizes="(max-width: 760px) 82vw, 38vw"
              priority
            />
            <span className="portrait-chip chip-api">APIs</span>
            <span className="portrait-chip chip-auto">AUTOMAÇÃO</span>
            <span className="portrait-chip chip-data">DADOS</span>
          </div>

          <div className="signal-intro">
            <p>
              Desenvolvo APIs e ferramentas internas com Node.js, TypeScript e
              Python — do desenho da regra até a produção.
            </p>
            <div>
              <a className="signal-cta" href="#projetos">Explorar projetos <span>↘</span></a>
              <a className="signal-link" href="/curriculo-gustavo-champam.pdf" target="_blank">Currículo ↗</a>
            </div>
          </div>

          <div className="hero-proof">
            <span>Case real / Voll Bridget</span>
            <div><strong>30 min</strong><i>→</i><strong>~1 min</strong></div>
            <p>Uma nota fiscal, da leitura ao ERP.</p>
            <em><i /> fluxo online</em>
          </div>
        </div>

        <div className="tech-tape" aria-label="Tecnologias principais">
          <div>
            <span>NODE.JS</span><i>✦</i><span>TYPESCRIPT</span><i>✦</i><span>PYTHON</span><i>✦</i>
            <span>NESTJS</span><i>✦</i><span>FASTAPI</span><i>✦</i><span>MONGODB</span><i>✦</i>
            <span>DOCKER</span><i>✦</i><span>POSTGRESQL</span><i>✦</i>
            <span>NODE.JS</span><i>✦</i><span>TYPESCRIPT</span><i>✦</i><span>PYTHON</span><i>✦</i>
          </div>
        </div>
      </section>

      <section className="manifesto" id="sobre">
        <div className="wide-shell">
          <div className="section-code"><span>01</span><b>SOBRE / COMO EU PENSO</b></div>
          <h2>
            <span>Meu trabalho não começa</span>
            <strong>no código.</strong>
          </h2>
          <div className="manifesto-grid">
            <div className="principles">
              <article><span>01</span><div><h3>Entender</h3><p>Onde o tempo some, onde a regra quebra e o que realmente precisa mudar.</p></div></article>
              <article><span>02</span><div><h3>Modelar</h3><p>Transformar o problema em fluxo, contrato, dado e responsabilidade clara.</p></div></article>
              <article><span>03</span><div><h3>Entregar</h3><p>Colocar no ar, medir o impacto e deixar simples para quem vai operar.</p></div></article>
            </div>
            <div className="bio">
              <p className="bio-lead">
                Sou estudante de Engenharia da Computação na Facens e desenvolvedor
                de software na VOLL, com foco em backend, integrações e automação.
              </p>
              <p>
                Antes do software, passei por engenharia de aplicação e gestão de
                projetos. Essa trajetória me ensinou a conversar com a operação,
                organizar cenários confusos e construir com responsabilidade.
              </p>
              <div className="bio-meta">
                <div><span>Formação</span><b>Engenharia da Computação</b><small>Facens · 2023–2027</small></div>
                <div><span>Foco atual</span><b>Backend & automação</b><small>Node.js · TypeScript · Python</small></div>
              </div>
              <div className="bio-actions">
                <a href="/curriculo-gustavo-champam.pdf" target="_blank">Abrir currículo ↗</a>
                <a href="https://www.linkedin.com/in/gustavo-gutierres-champam-359b45209/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="selected-work" id="projetos">
        <div className="wide-shell">
          <div className="section-code light-code"><span>02</span><b>TRABALHO SELECIONADO / 06 CASES</b></div>
          <div className="work-heading">
            <h2>Software que deixa <em>rastro.</em></h2>
            <p>Problema, decisão e impacto. Sem projeto genérico para preencher espaço.</p>
          </div>

          <article className="flagship-case">
            <div className="case-index"><span>CASE / 01</span><b>VOLL BRIDGET</b><em>BACKEND FISCAL</em></div>
            <div className="flagship-grid">
              <div className="flagship-copy">
                <p className="case-eyebrow">DE 30 MINUTOS PARA CERCA DE 1 MINUTO</p>
                <h3>Da nota fiscal ao ERP. Um clique.</h3>
                <p>
                  NFe e NFSe chegavam em formatos diferentes. Quando existiam
                  retenções, a leitura, conferência e digitação podiam consumir
                  cerca de 30 minutos por documento.
                </p>
                <p>
                  O Voll Bridget detecta a origem, escolhe o parser, valida a
                  matemática fiscal e envia ao ERP com autenticação e rastreabilidade.
                </p>
                <div className="impact-row">
                  <div><span>ANTES</span><strong>30 min</strong></div>
                  <i>→</i>
                  <div><span>AGORA</span><strong>~1 min</strong></div>
                  <div><span>COBERTURA</span><strong>75 testes</strong></div>
                </div>
                <ul className="case-tags"><li>Node.js</li><li>TypeScript</li><li>MongoDB</li><li>OAuth2</li><li>BigInt</li></ul>
                <a className="case-link" href="https://github.com/Gustavo-Champam/nfe-parser-pipeline" target="_blank" rel="noreferrer">
                  Ver versão pública <span>↗</span>
                </a>
                <small className="name-note">No GitHub, o projeto aparece como <b>nfe-parser-pipeline</b>.</small>
              </div>

              <div className="trace-console" aria-label="Fluxo do Voll Bridget">
                <header><span><i /><i /><i /></span><b>bridget.trace</b><em>RUNNING</em></header>
                <div className="trace-doc">
                  <div><span>INPUT / 01</span><b>NFSe · ABRASF</b><small>retenções detectadas</small></div>
                  <div><span>INPUT / 02</span><b>NFe · SEFAZ</b><small>documento padrão</small></div>
                </div>
                <div className="trace-flow">
                  <div className="trace-step active"><span>01</span><b>Detectar</b><small>origem</small></div>
                  <i />
                  <div className="trace-step"><span>02</span><b>Interpretar</b><small>parser</small></div>
                  <i />
                  <div className="trace-step"><span>03</span><b>Validar</b><small>fiscal</small></div>
                  <i />
                  <div className="trace-step success"><span>04</span><b>Enviar</b><small>ERP</small></div>
                </div>
                <div className="trace-log">
                  <code><span>10:42:06</span> parser.abrasf selected</code>
                  <code><span>10:42:06</span> retention.values verified</code>
                  <code className="ok"><span>10:42:07</span> ✓ document delivered</code>
                </div>
                <footer><span>elapsed</span><b>00:47</b><span>status</span><b>200 OK</b></footer>
              </div>
            </div>
          </article>

          <article className="aidesk-case">
            <div className="case-index"><span>CASE / 02</span><b>AI DESK</b><em>PRODUTO COMERCIAL</em></div>
            <div className="aidesk-stage">
              <div className="dashboard-shot">
                <Image src="/projects/ai-desk-app.png" alt="Painel real da aplicação Sinais AI Desk" width={1280} height={607} sizes="(max-width: 800px) 92vw, 70vw" />
              </div>
              <div className="aidesk-signal"><i /> SINAIS AI DESK · ONLINE</div>
            </div>
            <div className="aidesk-copy">
              <div>
                <p className="case-eyebrow">PLATAFORMA SELF-HOSTED · CLIENTE NOS EUA</p>
                <h3>IA quando ajuda.<br />Pessoas quando importa.</h3>
              </div>
              <div>
                <p>
                  Personalização de uma plataforma de atendimento com RAG, base de
                  conhecimento, múltiplos provedores, analytics, inbox e transferência
                  humana sem perder o contexto da conversa.
                </p>
                <ul className="case-tags"><li>FastAPI</li><li>Vue</li><li>PostgreSQL</li><li>pgvector</li><li>Docker</li></ul>
                <span className="private-repo">Repositório privado / produto comercial</span>
              </div>
            </div>
          </article>

          <div className="project-bento">
            {secondaryProjects.map((project) => (
              <article className={`bento-card bento-${project.visual}`} key={project.title}>
                <div className="bento-index"><span>CASE / {project.number}</span><b>{project.label}</b></div>
                <ProjectArtwork type={project.visual} />
                <div className="bento-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="case-tags">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                  <a href={project.href} target="_blank" rel="noreferrer">Abrir no GitHub ↗</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stack-lab" id="stack">
        <div className="stack-grid-bg" aria-hidden="true" />
        <div className="wide-shell">
          <div className="section-code"><span>03</span><b>STACK / FERRAMENTAS DE TRABALHO</b></div>
          <div className="stack-heading">
            <h2>Escolho a ferramenta pelo problema.</h2>
            <p>O objetivo não é usar mais tecnologia. É construir algo confiável, legível e simples de operar.</p>
          </div>
          <div className="stack-columns">
            <article>
              <span>BACKEND / 01</span>
              <h3>Serviços e APIs</h3>
              <ul><li>Node.js</li><li>TypeScript</li><li>Express</li><li>NestJS</li><li>Python</li><li>FastAPI</li><li>OAuth2</li><li>JWT</li></ul>
            </article>
            <article>
              <span>DADOS / 02</span>
              <h3>Persistência e escala</h3>
              <ul><li>MongoDB</li><li>PostgreSQL</li><li>MySQL</li><li>Redis</li><li>pgvector</li><li>Docker</li><li>Linux</li><li>CI/CD</li></ul>
            </article>
            <article>
              <span>PRODUTO / 03</span>
              <h3>Interfaces e IA</h3>
              <ul><li>React</li><li>Next.js</li><li>Vue</li><li>RAG</li><li>LLMs</li><li>Power Apps</li><li>Power Automate</li><li>HTML/CSS</li></ul>
            </article>
          </div>
          <div className="work-values">
            <span>COMO EU TRABALHO</span>
            <p>Clareza</p><i>✦</i><p>Organização</p><i>✦</i><p>Visão de produto</p><i>✦</i><p>Responsabilidade</p>
          </div>
        </div>
      </section>

      <section className="journey" id="experiencia">
        <div className="wide-shell">
          <div className="section-code dark-code"><span>04</span><b>TRAJETÓRIA / 2023 → AGORA</b></div>
          <div className="journey-heading">
            <h2>Aprendi<br />fazendo.</h2>
            <p>Software, automação, engenharia e projetos no contexto real de empresas.</p>
          </div>
          <div className="journey-list">
            {experiences.map((experience) => (
              <article key={experience.company}>
                <span className="journey-number">{experience.number}</span>
                <p className="journey-period">{experience.period}</p>
                <div><h3>{experience.company}</h3><h4>{experience.role}</h4></div>
                <p>{experience.description}</p>
              </article>
            ))}
          </div>
          <div className="education-band">
            <span>FORMAÇÃO / EM ANDAMENTO</span>
            <h3>Engenharia da Computação</h3>
            <p>Centro Universitário Facens · 2023–2027 · 8º semestre</p>
          </div>
        </div>
      </section>

      <footer className="final-contact" id="contato">
        <div className="contact-orbit" aria-hidden="true" />
        <div className="wide-shell">
          <div className="section-code contact-code"><span>05</span><b>CONTATO / PRÓXIMO PROBLEMA</b></div>
          <p className="contact-kicker">TEM UM PROBLEMA REAL PARA RESOLVER?</p>
          <h2>Vamos<br />conversar.</h2>
          <a className="big-email" href="mailto:guti.gustavo10@gmail.com">
            <span>guti.gustavo10@gmail.com</span><i>↗</i>
          </a>
          <div className="footer-row">
            <div><span>GUSTAVO CHAMPAM</span><span>SOROCABA · SP</span><span>© 2026</span></div>
            <div>
              <a href="https://github.com/Gustavo-Champam" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/gustavo-gutierres-champam-359b45209/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="#top">Topo ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
