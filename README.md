# 🚀 Portfolio Pessoal - Luiz Eduardo

## 🌐 Disponível  em: [www.luizeduardo.dev.br](https://www.luizeduardo.dev.br)

Um portfólio moderno e responsivo desenvolvido com React e Vite, apresentando projetos, habilidades e serviços de desenvolvimento web.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Como Executar](#️-como-executar)
- [Responsividade](#-responsividade)
- [Componentes](#-componentes)
- [Customização](#-customização)
- [Deploy](#-deploy)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Autor](#-autor)

## 🎯 Sobre o Projeto

Este é um portfólio pessoal criado para apresentar projetos, habilidades e serviços profissionais. O site foi desenvolvido com foco em performance, responsividade e experiência do usuário, incluindo efeitos visuais modernos como estrelas cadentes animadas.

### ✨ Destaques
- Design moderno e minimalista
- Animações fluidas e efeitos visuais
- Totalmente responsivo (Desktop, Tablet, Mobile)
- Performance otimizada com Vite
- Código limpo e bem estruturado

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **Vite** - Build tool rápida e moderna
- **CSS3** - Estilização com flexbox, grid e animações
- **JavaScript ES6+** - Linguagem de programação

### Ferramentas de Desenvolvimento
- **ESLint** - Linting e análise de código
- **Git** - Controle de versão
- **npm** - Gerenciador de pacotes

## 🌟 Funcionalidades

### 🎨 Interface Visual
- **Tema escuro moderno** com paleta de cores profissional
- **Efeito de estrelas cadentes** no plano de fundo
- **Hover effects** em cards e botões
- **Animações CSS** suaves e responsivas

### 📱 Responsividade Completa
- **Desktop** (1024px+) - Layout de 3 colunas
- **Tablet** (810px) - Layout adaptado com 2 colunas
- **Mobile** (390px) - Layout de coluna única

### 🧭 Navegação
- **Menu de navegação** fixo e responsivo
- **Scroll suave** entre seções
- **Links internos** para navegação rápida

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
│   │   │   ├── MainHome/
│   │   │   │   ├── index.jsx
│   │   │   │   └── index.css
│   │   │   ├── ProjectSection/
│   │   │   │   ├── index.jsx
│   │   │   │   └── index.css
│   │   │   ├── ServiceSection/
│   │   │   │   ├── index.jsx
│   │   │   │   └── index.css
│   │   │   └── Skill/
│   │   │       ├── index.jsx
│   │   │       └── index.css
│   │   ├── images/
│   │   └── svg/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
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
- **Recursos:** Menu responsivo, links de navegação
- **Responsividade:** Menu colapsável em mobile

### MainHome
- **Função:** Seção de apresentação principal
- **Recursos:** Introdução pessoal, call-to-action
- **Efeitos:** Animações de entrada

### About
- **Função:** Informações pessoais e profissionais
- **Recursos:** Biografia, objetivos
- **Layout:** Cards informativos

### ServiceSection
- **Função:** Apresentação dos serviços oferecidos
- **Recursos:** Cards com ícones e descrições
- **Especial:** Quebras de linha responsivas em textos

### ProjectSection
- **Função:** Portfólio de projetos
- **Recursos:** Cards clicáveis, imagens, descrições
- **Navegação:** Link para projeto externo (Ecop)

### Skill
- **Função:** Exibição de habilidades técnicas
- **Recursos:** Grade de tecnologias
- **Visual:** Ícones e percentuais

### Contact
- **Função:** Informações de contato
- **Recursos:** Links para redes sociais
- **Layout:** Cards organizados

### Footer
- **Função:** Rodapé do site
- **Recursos:** Copyright e informações básicas

### BackgroundDots/FallingStars
- **Função:** Efeito visual de fundo
- **Recursos:** Animação de estrelas cadentes
- **Tecnologia:** CSS animations com clip-path

## 🎨 Customização

### Cores
As cores principais podem ser alteradas no arquivo `src/index.css`:
```css
:root {
  --primary-color: #27ae60;
  --secondary-color: #fff;
  --background-color: #1a1a1a;
  --card-color: #212121;
  --text-color: #515151;
}
```

### Breakpoints
Os breakpoints responsivos estão definidos como:
- **Tablet:** `@media (max-width: 810px)`
- **Mobile:** `@media (max-width: 390px)`

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
- GitHub: [@LuizEdu-AR](https://github.com/LuizEdu-AR)
- LinkedIn: [Meu LinkedIn](https://www.linkedin.com/in/luiz-eduardoar/)

---

⭐ Se este projeto te ajudou, deixe uma estrela no repositório!
