# EDY Turismo - Réveillon 2026

Site interativo para reservas de viagem de Réveillon 2026 para Ilhéus ou Itacaré, saindo de Jequié-BA.

## 🎆 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e celular
- **Formulário Interativo**: Sistema de reservas com validação de dados
- **Funcionalidade Casadinha**: Campos dinâmicos para casais
- **Praia com Fogos de Artifício**: Fundo cinematográfico na seção principal
- **Cores Personalizadas**: Paleta de cores baseada na logo EDY Turismo
- **Animações Suaves**: Efeitos visuais profissionais

## 📋 Conteúdo do Site

1. **Seção Hero** - Apresentação com praia e fogos de artifício
2. **Informações da Viagem** - Datas, horários e locais de embarque
3. **Pacote Incluso** - Detalhes do que está incluído
4. **Tabela de Preços** - 4 lotes com valores e preços de casadinha
5. **Formulário de Reserva** - Sistema interativo de reservas
6. **Seção de Contato** - WhatsApp, Email, Facebook e Instagram

## 🚀 Como Implantar no GitHub Pages

### Pré-requisitos

- Conta no GitHub (gratuita em [github.com](https://github.com))
- Git instalado no seu computador ([git-scm.com](https://git-scm.com))

### Passo 1: Criar um Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha os dados:
   - **Repository name**: `edyt-turismo-reveillon` (ou outro nome desejado)
   - **Description**: "Site de reservas para Réveillon 2026"
   - **Public**: Marque como público (obrigatório para GitHub Pages gratuito)
   - **Initialize this repository with**: Deixe em branco
5. Clique em **"Create repository"**

### Passo 2: Clonar o Repositório Localmente

Abra o terminal/prompt de comando e execute:

```bash
git clone https://github.com/SEU_USUARIO/edyt-turismo-reveillon.git
cd edyt-turismo-reveillon
```

Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.

### Passo 3: Copiar os Arquivos do Site

Copie todos os arquivos do projeto para a pasta clonada:

```
edyt-turismo-reveillon/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
│   ├── logo.jpg
│   ├── edyt(1).png
│   └── beach-fireworks.jpg
├── README.md
├── .gitignore
└── LICENSE
```

### Passo 4: Configurar o Git

No terminal, dentro da pasta do projeto:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@example.com"
```

### Passo 5: Fazer o Primeiro Commit

```bash
git add .
git commit -m "Inicial: Site EDY Turismo Réveillon 2026"
git push -u origin main
```

Se receber um erro sobre a branch, execute:

```bash
git branch -M main
git push -u origin main
```

### Passo 6: Ativar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **"Settings"** (Configurações)
3. Vá para **"Pages"** no menu lateral esquerdo
4. Em **"Source"**, selecione **"main"** como branch
5. Clique em **"Save"**
6. Aguarde alguns minutos

Seu site estará disponível em: `https://SEU_USUARIO.github.io/edyt-turismo-reveillon`

## 📁 Estrutura de Arquivos

```
edyt-turismo-reveillon/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos e design
├── js/
│   └── script.js           # Funcionalidades interativas
├── images/
│   ├── logo.jpg            # Logo EDY Turismo
│   ├── edyt(1).png         # Imagem Réveillon 2026
│   └── beach-fireworks.jpg # Fundo de praia com fogos
├── README.md               # Este arquivo
├── .gitignore              # Arquivos a ignorar no Git
└── LICENSE                 # Licença do projeto
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Design responsivo com gradientes e animações
- **JavaScript**: Interatividade e validação de formulário
- **GitHub Pages**: Hospedagem gratuita

## 💻 Desenvolvimento Local

Para testar o site localmente:

1. Abra um terminal na pasta do projeto
2. Execute um servidor local:

```bash
# Python 3
python -m http.server 8000

# ou Python 2
python -m SimpleHTTPServer 8000
```

3. Acesse `http://localhost:8000` no navegador

## 📝 Personalizações Futuras

Para modificar o site:

1. Edite os arquivos HTML, CSS ou JavaScript
2. Faça commit das mudanças:

```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

3. O site será atualizado automaticamente no GitHub Pages

## 🔧 Solução de Problemas

### Imagens não aparecem
- Verifique se os caminhos das imagens estão corretos
- Certifique-se de que os arquivos estão na pasta `images/`

### Formulário não funciona
- O formulário é apenas visual nesta versão
- Para processar dados, será necessário um backend (Node.js, Python, etc.)

### Site não aparece após push
- Aguarde 2-5 minutos para o GitHub Pages processar
- Verifique se o repositório é público
- Confirme que a branch `main` está selecionada em Settings > Pages

## 📧 Contato

**EDY SANTOS**
- WhatsApp: 73 98838-3692
- Email: edyturismo@gmail.com
- Instagram: @edy.turismo

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

**Desenvolvido com ❤️ para EDY Turismo**

