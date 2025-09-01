# 🚀 Portfolio Pessoal - Luiz Eduardo

## 🌐 Disponível em: [www.luizeduardo.dev.br](https://www.luizeduardo.dev.br)

Um portfólio moderno e responsivo desenvolvido com React e Vite, apresentando projetos, habilidades e serviços de desenvolvimento web. Inclui sistema completo de temas (claro/escuro) e tradução bilíngue (Português/Inglês).

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Como Executar](#️-como-executar)
- [Responsividade](#-responsividade)
- [Componentes](#-componentes)
- [Sistema de Temas](#-sistema-de-temas)
- [Sistema de Tradução](#-sistema-de-tradução)
- [Customização](#-customização)
- [Deploy](#-deploy)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Autor](#-autor)

## 🎯 Sobre o Projeto

Este é um portfólio pessoal criado para apresentar projetos, habilidades e serviços profissionais. O site foi desenvolvido com foco em performance, responsividade e experiência do usuário, incluindo efeitos visuais modernos, sistema de temas dinâmico e suporte completo a idiomas.

### ✨ Destaques
- **Design moderno e minimalista** com temas claro/escuro
- **Sistema bilíngue** (Português/Inglês) com persistência
- **Animações fluidas** e efeitos visuais
- **Totalmente responsivo** (Desktop, Tablet, Mobile)
- **Performance otimizada** com Vite
- **Código limpo** e bem estruturado com padrões modernos

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **Vite 7.0.6** - Build tool rápida e moderna
- **CSS3** - Estilização com variáveis CSS, flexbox, grid e animações
- **JavaScript ES6+** - Linguagem de programação
- **Context API** - Gerenciamento de estado global para temas e idiomas

### Funcionalidades Avançadas
- **Sistema de Temas** - Alternância dinâmica entre modo claro/escuro
- **Internacionalização** - Suporte bilíngue com Context API e hooks personalizados
- **Persistência Local** - localStorage para preferências do usuário
- **Responsividade Total** - Design adaptável para todos os dispositivos

### Ferramentas de Desenvolvimento
- **ESLint** - Linting e análise de código
- **Git** - Controle de versão
- **npm** - Gerenciador de pacotes

## 🌟 Funcionalidades

### 🎨 Sistema de Temas
- **Modo Escuro/Claro** com alternância dinâmica
- **Detecção automática** do tema do sistema
- **Persistência** das preferências do usuário
- **Transições suaves** entre temas
- **Variáveis CSS** para consistência visual

### 🌍 Sistema Bilíngue
- **Português/Inglês** com toggle de bandeiras
- **Tradução completa** de todo o conteúdo
- **Context API** para gerenciamento global
- **Hook personalizado** `useTranslation` para fácil uso
- **Persistência** da linguagem selecionada

### 🎯 Interface Visual
- **Design moderno** com glassmorphism
- **Efeito de estrelas cadentes** no plano de fundo
- **Hover effects** em cards e botões
- **Animações CSS** suaves e responsivas
- **Backdrop filter** e blur effects

### 📱 Responsividade Completa
- **Desktop** (1024px+) - Layout de 3 colunas
- **Tablet** (810px) - Layout adaptado com 2 colunas
- **Mobile** (390px) - Layout de coluna única
- **Menu responsivo** com hamburger menu

### 🧭 Navegação
- **Menu de navegação** fixo com blur background
- **Scroll suave** entre seções
- **Links internos** para navegação rápida
- **Botões de ação** para tema e idioma

### 📄 Seções do Portfolio
1. **Home** - Apresentação principal
2. **Sobre** - Informações pessoais e profissionais
3. **Serviços** - Área de atuação profissional
4. **Projetos** - Portfólio de trabalhos realizados
5. **Contato** - Informações para contato

## 📁 Estrutura do Projeto

```
portfolio_luiz/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── components/
│   │   │   ├── About/
│   │   │   │   ├── index.jsx
│   │   │   │   └── index.css
│   │   │   ├── BackgroundDots/
│   │   │   │   ├── index.jsx
│   │   │   │   └── index.css
│   │   │   ├── Contact/
│   │   │   │   ├── index.jsx
│   │   │   │   └── index.css
│   │   │   ├── Footer/
│   │   │   │   ├── index.jsx
│   │   │   │   └── index.css
│   │   │   ├── Header/
│   │   │   │   ├── index.jsx
│   │   │   │   └── index.css
│   │   │   ├── LanguageToggle/          # 🆕 Novo
│   │   │   │   ├── index.jsx
│   │   │   │   └── index.css
│   │   │   ├── MainHome/
│   │   │   │   ├── index.jsx
│   │   │   │   └── index.css
│   │   │   ├── ProjectSection/
│   │   │   │   ├── index.jsx
│   │   │   │   └── index.css
│   │   │   ├── ServiceSection/
│   │   │   │   ├── index.jsx
│   │   │   │   └── index.css
│   │   │   ├── Skill/
│   │   │   │   ├── index.jsx
│   │   │   │   └── index.css
│   │   │   ├── ThemeToggle/             # 🆕 Novo
│   │   │   │   ├── index.jsx
│   │   │   │   └── index.css
│   │   │   └── WaveEffect/
│   │   │       ├── index.jsx
│   │   │       └── index.css
│   │   ├── images/
│   │   └── svg/
│   │       ├── flag-br.svg              # 🆕 Novo
│   │       └── flag-us.svg              # 🆕 Novo
│   ├── contexts/                        # 🆕 Nova pasta
│   │   ├── LanguageContext.jsx          # 🆕 Novo
│   │   └── ThemeContext.jsx             # 🆕 Novo
│   ├── hooks/                           # 🆕 Nova pasta
│   │   └── useTranslation.js            # 🆕 Novo
│   ├── utils/                           # 🆕 Nova pasta
│   │   └── translations.js              # 🆕 Novo
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css                        # ✨ Atualizado com variáveis CSS
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Instalação

### Pré-requisitos
- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Git**

### Passos para instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/LuizEdu-AR/portfolio_luiz.git
```

2. **Navegue para o diretório:**
```bash
cd portfolio_luiz
```

3. **Instale as dependências:**
```bash
npm install
```

## ▶️ Como Executar

### Desenvolvimento
```bash
npm run dev
```
- Inicia o servidor de desenvolvimento
- Acesse: `http://localhost:5173`
- Hot reload ativado

### Build para Produção
```bash
npm run build
```
- Gera build otimizada na pasta `dist/`

### Preview da Build
```bash
npm run preview
```
- Visualiza a build de produção localmente

### Linting
```bash
npm run lint
```
- Executa ESLint para verificar qualidade do código

## 📱 Responsividade

O projeto foi desenvolvido com **mobile-first** e conta com 3 breakpoints principais:

### 🖥️ Desktop (Padrão)
- Layout de 3 colunas para cards
- Espaçamentos maiores
- Fontes em tamanho padrão

### 📱 Tablet (max-width: 810px)
- Layout de 2 colunas adaptado
- Redução de espaçamentos
- Ajuste de tamanhos de fonte
- Quebras de linha em textos específicos

### 📱 Mobile (max-width: 390px)
- Layout de coluna única
- Espaçamentos mínimos
- Fontes reduzidas
- Centralização de conteúdo
- Menu responsivo

## 🧩 Componentes

### Header
- **Função:** Navegação principal do site
- **Recursos:** Menu responsivo, botões de tema e idioma
- **Responsividade:** Menu colapsável em mobile com blur background
- **🆕 Novos recursos:** Integração com toggles de tema e idioma

### ThemeToggle (🆕 Novo)
- **Função:** Alternância entre tema claro e escuro
- **Recursos:** Ícones sol/lua, transições suaves
- **Tecnologia:** Context API + localStorage
- **Design:** Botão circular com glassmorphism

### LanguageToggle (🆕 Novo)
- **Função:** Alternância entre português e inglês
- **Recursos:** Bandeiras do Brasil e EUA em SVG
- **Tecnologia:** Context API + useTranslation hook
- **Design:** Botão circular combinando com ThemeToggle

### MainHome
- **Função:** Seção de apresentação principal
- **Recursos:** Introdução pessoal, call-to-action
- **🆕 Atualizado:** Textos traduzidos dinamicamente
- **Efeitos:** Animações de entrada

### About
- **Função:** Informações pessoais e profissionais
- **Recursos:** Biografia, objetivos
- **🆕 Atualizado:** Conteúdo bilíngue completo
- **Layout:** Cards informativos

### ServiceSection
- **Função:** Apresentação dos serviços oferecidos
- **Recursos:** Cards com ícones e descrições
- **🆕 Atualizado:** Textos traduzidos
- **Especial:** Quebras de linha responsivas em textos

### ProjectSection
- **Função:** Portfólio de projetos
- **Recursos:** Cards clicáveis, imagens, descrições
- **🆕 Atualizado:** Nomes e descrições traduzidos
- **Navegação:** Links para projetos externos

### Skill
- **Função:** Exibição de habilidades técnicas
- **Recursos:** Grade de tecnologias
- **🆕 Atualizado:** Título traduzido
- **Visual:** Ícones e percentuais

### Contact
- **Função:** Informações de contato
- **Recursos:** Links para redes sociais
- **🆕 Atualizado:** Textos de contato traduzidos
- **Layout:** Cards organizados

### Footer
- **Função:** Rodapé do site
- **Recursos:** Copyright e informações básicas
- **🆕 Atualizado:** Copyright traduzido

### BackgroundDots/FallingStars
- **Função:** Efeito visual de fundo
- **Recursos:** Animação de estrelas cadentes
- **Tecnologia:** CSS animations com clip-path

## 🎨 Sistema de Temas

### Estrutura
O sistema de temas utiliza **Context API** e **CSS Variables** para uma alternância fluida:

```jsx
// ThemeContext.jsx
const ThemeContext = createContext()

// CSS Variables (index.css)
:root {
  --bg-primary: #171717;
  --text-primary: #ffffff;
}

.light-theme {
  --bg-primary: #ffffff;
  --text-primary: #212529;
}
```

### Funcionalidades
- ✅ **Detecção automática** do tema do sistema
- ✅ **Persistência** no localStorage
- ✅ **Transições suaves** entre temas
- ✅ **Compatibilidade total** com todos os componentes
- ✅ **Botão circular** com ícones sol/lua

## 🌍 Sistema de Tradução

### Arquitetura
Sistema completo de internacionalização com **Context API** e hooks personalizados:

```jsx
// LanguageContext.jsx - Gerenciamento global do idioma
// useTranslation.js - Hook para acessar traduções
// translations.js - Arquivo centralizado de traduções

// Uso nos componentes:
const { t } = useTranslation()
return <h1>{t('welcomeMessage')}</h1>
```

### Funcionalidades
- ✅ **Português/Inglês** completo
- ✅ **Toggle visual** com bandeiras dos países
- ✅ **Persistência** da linguagem escolhida
- ✅ **Tradução dinâmica** de todo o conteúdo
- ✅ **Hook personalizado** para fácil implementação
- ✅ **Bandeiras SVG** para melhor compatibilidade

### Conteúdo Traduzido
- 🔹 **Navegação:** Menu e links
- 🔹 **Seção Principal:** Saudação e apresentação
- 🔹 **Sobre:** Biografia completa
- 🔹 **Serviços:** Descrições dos serviços
- 🔹 **Habilidades:** Título da seção
- 🔹 **Projetos:** Nomes e tipos de projetos
- 🔹 **Contato:** Formulário e textos
- 🔹 **Rodapé:** Copyright

## 🎨 Customização

### Temas
As variáveis CSS para temas estão em `src/index.css`:

```css
/* Tema Escuro (Padrão) */
:root {
  --bg-primary: #171717;
  --bg-secondary: #212121;
  --bg-card: rgba(255, 255, 255, 0.05);
  --text-primary: #ffffff;
  --text-secondary: #4f4f4f;
  --text-accent: #27ae60;
}

/* Tema Claro */
.light-theme {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-card: rgba(248, 249, 250, 0.9);
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --text-accent: #27ae60;
}
```

### Idiomas
Para adicionar novos idiomas, edite `src/utils/translations.js`:

```javascript
export const translations = {
  pt: {
    welcomeMessage: "Bem-vindo!",
    // ... outras traduções
  },
  en: {
    welcomeMessage: "Welcome!",
    // ... outras traduções
  },
  // Adicione novos idiomas aqui
  es: {
    welcomeMessage: "¡Bienvenido!",
    // ... traduções em espanhol
  }
}
```

### Breakpoints
Os breakpoints responsivos estão definidos como:
- **Tablet:** `@media (max-width: 810px)`
- **Mobile:** `@media (max-width: 390px)`

### Componentes Personalizados
Cada componente possui seu próprio arquivo CSS para fácil customização:
- **Glassmorphism:** `backdrop-filter: blur(10px)`
- **Transições:** `transition: all 0.3s ease`
- **Hover Effects:** `transform: scale(1.05)`

## 🌐 Deploy

### Opções recomendadas:
1. **Vercel** (Recomendado)
2. **Netlify**
3. **GitHub Pages**
4. **Firebase Hosting**

### Deploy na Vercel:
```bash
npm install -g vercel
vercel --prod
```

## 🤝 Contribuição

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Luiz Eduardo**
- **Portfolio:** [luizeduardo.dev.br](https://www.luizeduardo.dev.br)
- **GitHub:** [@LuizEdu-AR](https://github.com/LuizEdu-AR)
- **LinkedIn:** [luiz-eduardoar](https://www.linkedin.com/in/luiz-eduardoar/)
- **Email:** luizedu.btiufersa@gmail.com

### 🚀 Últimas Atualizações (2025)
- ✅ **Sistema de Temas** completo (claro/escuro)
- ✅ **Tradução bilíngue** (Português/Inglês)
- ✅ **Context API** para gerenciamento de estado
- ✅ **Persistência** de preferências do usuário
- ✅ **Componentes modernos** com glassmorphism
- ✅ **Bandeiras SVG** para melhor compatibilidade
- ✅ **Hooks personalizados** para reutilização
- ✅ **Responsividade aprimorada** em mobile

---

⭐ Se este projeto te ajudou, deixe uma estrela no repositório!

🌟 **Funcionalidades Premium:**
- 🎨 **Dual Theme System** - Tema automático baseado no sistema
- 🌍 **i18n Complete** - Tradução total PT/EN
- 📱 **Mobile First** - Design responsivo avançado
- 🎭 **Modern UI/UX** - Glassmorphism e micro-interações
