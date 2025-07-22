// Importar os módulos necessários
const express = require('express');
const path = require('path');

// Criar uma instância do Express
const app = express();
const port = process.env.PORT || 3000; // A porta em que o servidor vai rodar

// Configurar o EJS como o motor de visualização (template engine)
app.set('view engine', 'ejs');

// Configurar o middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para processar dados de formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurar o Express para encontrar os arquivos de visualização na pasta 'views'
app.set('views', path.join(__dirname, 'views'));

// Base de dados simulada dos produtos Red Dragon
const produtosRedDragon = [
  {
    id: 1,
    nome: 'Red Dragon Smartphone X1',
    preco: 'R$ 1.299,99',
    categoria: 'Smartphones',
    imagem: '/img/smartphone-x1.svg',
    descricao: 'Smartphone Red Dragon com tela de 6.5" AMOLED, 128GB de armazenamento e câmera tripla de 64MP.'
  },
  {
    id: 2,
    nome: 'Red Dragon Notebook Pro',
    preco: 'R$ 3.499,99',
    categoria: 'Notebooks',
    imagem: '/img/notebook-pro.svg',
    descricao: 'Notebook ultra-fino com processador Intel i7, 16GB RAM e SSD de 512GB. Ideal para trabalho e jogos.'
  },
  {
    id: 3,
    nome: 'Red Dragon Headset Gamer',
    preco: 'R$ 299,99',
    categoria: 'Gaming',
    imagem: '/img/headset-gamer.svg',
    descricao: 'Headset gamer com som surround 7.1, microfone retrátil e iluminação RGB personalizável.'
  },
  {
    id: 4,
    nome: 'Red Dragon Mouse Gaming',
    preco: 'R$ 159,99',
    categoria: 'Gaming',
    imagem: '/img/mouse-gaming.svg',
    descricao: 'Mouse gamer de alta precisão com 12.000 DPI, 8 botões programáveis e iluminação RGB.'
  },
  {
    id: 5,
    nome: 'Red Dragon Teclado Mecânico',
    preco: 'R$ 399,99',
    categoria: 'Gaming',
    imagem: '/img/teclado-mecanico.svg',
    descricao: 'Teclado mecânico com switches Red Dragon, retroiluminação RGB e teclas anti-ghosting.'
  },
  {
    id: 6,
    nome: 'Red Dragon Monitor 4K',
    preco: 'R$ 1.899,99',
    categoria: 'Monitores',
    imagem: '/img/monitor-4k.svg',
    descricao: 'Monitor 27" 4K UHD com HDR10, taxa de atualização de 144Hz e tecnologia FreeSync.'
  }
];

// Definir uma rota principal (GET /)
app.get('/', (req, res) => {
  // Produtos em destaque (3 primeiros)
  const produtosDestaque = produtosRedDragon.slice(0, 3);

  const dados = {
    titulo: 'Red Dragon Store - Tecnologia de Ponta',
    mensagem: 'Bem-vindo à Red Dragon Store! Descubra os melhores produtos tecnológicos.',
    produtosDestaque: produtosDestaque
  };

  res.render('index', dados);
});

// Definir uma rota para a página de produtos (GET /produtos)
app.get('/produtos', (req, res) => {
  const categoria = req.query.categoria;
  let produtosFiltrados = produtosRedDragon;

  if (categoria) {
    produtosFiltrados = produtosRedDragon.filter(produto =>
      produto.categoria.toLowerCase() === categoria.toLowerCase()
    );
  }

  const dados = {
    titulo: 'Nossos Produtos - Red Dragon Store',
    produtos: produtosFiltrados,
    categoriaAtual: categoria || 'Todos'
  };

  res.render('produtos', dados);
});

// Rota para exibir detalhes de um produto específico
app.get('/produto/:id', (req, res) => {
  const produtoId = parseInt(req.params.id);
  const produto = produtosRedDragon.find(p => p.id === produtoId);

  if (!produto) {
    return res.status(404).render('404', {
      titulo: 'Produto não encontrado',
      mensagem: 'O produto solicitado não foi encontrado.'
    });
  }

  const dados = {
    titulo: `${produto.nome} - Red Dragon Store`,
    produto: produto
  };

  res.render('produto-detalhes', dados);
});

// Rota para exibir o formulário de contato
app.get('/contato', (req, res) => {
  res.render('contato', { titulo: 'Fale Conosco - Red Dragon Store' });
});

// Rota para processar os dados do formulário de contato
app.post('/contato', (req, res) => {
  const dadosRecebidos = {
    titulo: 'Mensagem Recebida! - Red Dragon Store',
    nome: req.body.nome,
    email: req.body.email,
    mensagem: req.body.mensagem
  };

  res.render('contato-sucesso', dadosRecebidos);
});

// Rota sobre a empresa
app.get('/sobre', (req, res) => {
  res.render('sobre', {
    titulo: 'Sobre a Red Dragon - Nossa História'
  });
});

// Middleware para tratamento de rotas não encontradas (404)
app.use((req, res) => {
  res.status(404).render('404', {
    titulo: 'Página não encontrada',
    mensagem: 'A página que você está procurando não existe.'
  });
});

// Iniciar o servidor e fazê-lo escutar na porta definida
app.listen(port, () => {
  console.log(`🐉 Red Dragon Store rodando em http://localhost:${port}`);
  console.log(`🚀 Ambiente: ${process.env.NODE_ENV || 'development'}`);
});
