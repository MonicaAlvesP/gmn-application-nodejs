## 📖 Sobre o Desenvolvimento

Este projeto foi inicialmente inspirado por um tutorial em vídeo da plataforma **Google Skills Boost**, com o objetivo de aprender os fundamentos do Node.js com Express e EJS.

Durante todo o desenvolvimento, o **Gemini Code Assist** foi utilizado como assistente de programação. O escopo do projeto foi intencionalmente expandido para além do tutorial original — transformando-o na loja temática **Red Dragon Store** — com o principal intuito de explorar e aprender a interagir de forma eficaz com a IA, extraindo o máximo de seu potencial para acelerar e aprimorar o processo de desenvolvimento.

## ✨ Funcionalidades

### 🛍️ Loja Virtual Completa

- **Página Inicial**: Apresentação da marca com produtos em destaque
- **Catálogo de Produtos**: Listagem completa com filtros por categoria
- **Detalhes do Produto**: Página individual para cada produto com informações detalhadas
- **Sistema de Categorias**: Gaming, Smartphones, Notebooks, Monitores

### 🎨 Interface Moderna

- **Design Responsivo**: Adaptável a dispositivos móveis, tablets e desktop
- **Tema Red Dragon**: Identidade visual com cores vermelho e preto
- **Animações CSS**: Efeitos de hover e transições suaves
- **Ícones Font Awesome**: Interface rica e intuitiva

### 📞 Sistema de Contato

- **Formulário de Contato**: Envio de mensagens diretamente pelo site
- **Página de Confirmação**: Feedback visual do envio da mensagem
- **Informações de Contato**: Telefone, email e endereço

### 📱 Recursos Adicionais

- **Menu Mobile**: Navegação otimizada para dispositivos móveis
- **Footer Informativo**: Links rápidos, redes sociais e informações da empresa
- **Página Sobre**: História e valores da empresa
- **Página 404**: Tratamento elegante de páginas não encontradas

## 🚀 Tecnologias Utilizadas

- **Backend**: Node.js + Express.js
- **Template Engine**: EJS (Embedded JavaScript)
- **Estilização**: CSS3 com Flexbox e Grid
- **Ícones**: Font Awesome 6.0
- **Responsividade**: CSS Media Queries

## 📦 Estrutura do Projeto

```
red-dragon-store/
├── app.js                 # Servidor principal
├── package.json          # Dependências e scripts
├── .gitignore           # Arquivos ignorados pelo Git
├── README.md            # Documentação do projeto
├── public/              # Arquivos estáticos
│   ├── css/
│   │   └── style.css   # Estilos principais
│   └── img/            # Imagens dos produtos
└── views/              # Templates EJS
    ├── partials/       # Componentes reutilizáveis
    │   ├── header.ejs  # Cabeçalho e navegação
    │   └── footer.ejs  # Rodapé
    ├── index.ejs       # Página inicial
    ├── produtos.ejs    # Lista de produtos
    ├── produto-detalhes.ejs # Detalhes do produto
    ├── contato.ejs     # Formulário de contato
    ├── contato-sucesso.ejs # Confirmação de envio
    ├── sobre.ejs       # Sobre a empresa
    └── 404.ejs         # Página de erro
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Passo a passo

1. **Clone o repositório**

   ```bash
   git clone https://github.com/MonicaAlvesP/gmn-application-nodejs.git
   cd gmn-application-nodejs
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o projeto**

   ```bash
   npm start
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 🎯 Produtos Disponíveis

A loja conta com uma variedade de produtos tecnológicos organizados por categorias:

### 📱 Smartphones

- Red Dragon Smartphone X1 - R$ 1.299,99

### 💻 Notebooks

- Red Dragon Notebook Pro - R$ 3.499,99

### 🎮 Gaming

- Red Dragon Headset Gamer - R$ 299,99
- Red Dragon Mouse Gaming - R$ 159,99
- Red Dragon Teclado Mecânico - R$ 399,99

### 🖥️ Monitores

- Red Dragon Monitor 4K - R$ 1.899,99

## 🌐 Rotas da Aplicação

- `GET /` - Página inicial
- `GET /produtos` - Lista de produtos (com filtros por categoria)
- `GET /produto/:id` - Detalhes do produto
- `GET /contato` - Formulário de contato
- `POST /contato` - Processamento do formulário
- `GET /sobre` - Página sobre a empresa
- `404` - Página de erro para rotas não encontradas

## 🎨 Características do Design

### Paleta de Cores

- **Principal**: #dc2626 (Vermelho Red Dragon)
- **Secundária**: #1f2937 (Cinza escuro)
- **Acentos**: #f59e0b (Dourado)

### Tipografia

- **Fonte**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Hierarquia**: Títulos em destaque, texto legível

### Layout

- **Grid System**: CSS Grid para layouts flexíveis
- **Flexbox**: Para alinhamentos e distribuição
- **Mobile First**: Design responsivo priorizando mobile

## 🔧 Scripts Disponíveis

```bash
npm start    # Inicia o servidor em produção
npm run dev  # Inicia o servidor em desenvolvimento (mesmo comando por ora)
```

## 🚀 Deploy

### Variáveis de Ambiente

O projeto utiliza a variável `PORT` para definir a porta do servidor:

- **Desenvolvimento**: 3000 (padrão)
- **Produção**: Utiliza `process.env.PORT`


## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
