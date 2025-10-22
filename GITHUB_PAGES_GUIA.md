# 🚀 Guia Completo: Publicar Site no GitHub Pages (Gratuito)

Este guia mostra como publicar o site EDY Turismo Réveillon 2026 no GitHub Pages de forma **100% gratuita**.

## 📋 Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Criar Conta no GitHub](#criar-conta-no-github)
3. [Instalar Git](#instalar-git)
4. [Criar Repositório](#criar-repositório)
5. [Fazer Upload dos Arquivos](#fazer-upload-dos-arquivos)
6. [Ativar GitHub Pages](#ativar-github-pages)
7. [Acessar o Site](#acessar-o-site)
8. [Próximas Atualizações](#próximas-atualizações)

---

## 🔧 Pré-requisitos

Você vai precisar de:
- Um computador com Windows, Mac ou Linux
- Conexão com internet
- Uma conta de email

## 📧 Criar Conta no GitHub

### Passo 1: Acessar GitHub

1. Abra seu navegador
2. Vá para [https://github.com](https://github.com)
3. Clique em **"Sign up"** (Inscrever-se)

### Passo 2: Preencher Dados

1. **Email**: Digite seu email
2. **Senha**: Crie uma senha forte
3. **Nome de usuário**: Escolha um nome (ex: `seu_nome_edy`)
4. Clique em **"Create account"**

### Passo 3: Verificar Email

1. Abra seu email
2. Procure por mensagem do GitHub
3. Clique no link de verificação
4. Pronto! Sua conta está criada

---

## 💻 Instalar Git

Git é um programa que permite enviar seus arquivos para o GitHub.

### Windows

1. Acesse [https://git-scm.com](https://git-scm.com)
2. Clique em **"Download for Windows"**
3. Execute o arquivo baixado
4. Clique em **"Next"** até terminar a instalação
5. Reinicie o computador

### Mac

1. Abra o Terminal (Cmd + Espaço, digite "Terminal")
2. Cole este comando:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
3. Depois execute:
```bash
brew install git
```

### Linux

Abra o terminal e execute:
```bash
sudo apt-get install git
```

### Verificar Instalação

Abra o terminal/prompt e digite:
```bash
git --version
```

Se aparecer a versão, está instalado corretamente!

---

## 📁 Criar Repositório

### Passo 1: Novo Repositório no GitHub

1. Faça login no GitHub
2. Clique no **"+"** no canto superior direito
3. Selecione **"New repository"**

### Passo 2: Configurar Repositório

Preencha os campos:

| Campo | Valor |
|-------|-------|
| **Repository name** | `edyt-turismo-reveillon` |
| **Description** | `Site de reservas para Réveillon 2026` |
| **Public** | ✅ Marcar (obrigatório para GitHub Pages gratuito) |
| **Initialize with README** | Deixe em branco |

4. Clique em **"Create repository"**

### Passo 3: Copiar URL

Você verá uma tela com um link como:
```
https://github.com/SEU_USUARIO/edyt-turismo-reveillon.git
```

Copie este link (você vai usar em breve).

---

## 📤 Fazer Upload dos Arquivos

### Passo 1: Abrir Terminal

**Windows:**
- Pressione `Win + R`
- Digite `cmd`
- Pressione Enter

**Mac/Linux:**
- Abra o Terminal

### Passo 2: Clonar Repositório

No terminal, execute:

```bash
git clone https://github.com/SEU_USUARIO/edyt-turismo-reveillon.git
cd edyt-turismo-reveillon
```

Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.

### Passo 3: Copiar Arquivos do Site

Copie todos estes arquivos para a pasta `edyt-turismo-reveillon`:

```
index.html
css/styles.css
js/script.js
images/logo.jpg
images/edyt(1).png
images/beach-fireworks.jpg
README.md
.gitignore
LICENSE
```

### Passo 4: Configurar Git (Primeira Vez)

Execute no terminal:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@gmail.com"
```

### Passo 5: Enviar Arquivos

Execute estes comandos em sequência:

```bash
git add .
git commit -m "Inicial: Site EDY Turismo Réveillon 2026"
git push -u origin main
```

Se aparecer uma tela pedindo login:
- **Username**: Seu usuário do GitHub
- **Password**: Seu token (veja abaixo)

### ⚠️ Gerar Token de Acesso (Se Necessário)

Se o Git pedir senha:

1. Vá para [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Clique em **"Generate new token"**
3. Marque as opções:
   - ✅ `repo`
   - ✅ `workflow`
4. Clique em **"Generate token"**
5. **Copie o token** (aparece uma única vez!)
6. Use este token como senha no Git

---

## 🌐 Ativar GitHub Pages

### Passo 1: Ir para Configurações

1. Vá para seu repositório no GitHub
2. Clique em **"Settings"** (Configurações)

### Passo 2: Ativar Pages

1. No menu esquerdo, clique em **"Pages"**
2. Em **"Source"**, selecione **"main"** (ou `master` se for a branch padrão)
3. Clique em **"Save"**

### Passo 3: Aguardar

O GitHub vai processar (leva 2-5 minutos). Você verá uma mensagem:

> "Your site is ready to be published at https://SEU_USUARIO.github.io/edyt-turismo-reveillon"

---

## 🎉 Acessar o Site

Seu site estará disponível em:

```
https://SEU_USUARIO.github.io/edyt-turismo-reveillon
```

Exemplo: `https://joao123.github.io/edyt-turismo-reveillon`

Compartilhe este link com clientes!

---

## 📝 Próximas Atualizações

Quando quiser atualizar o site:

### Editar Arquivos

1. Edite os arquivos (HTML, CSS, JavaScript)
2. Salve as mudanças

### Enviar Mudanças

No terminal, na pasta do projeto:

```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

O site será atualizado automaticamente em alguns minutos!

---

## 🆘 Solução de Problemas

### Problema: "fatal: not a git repository"

**Solução:**
```bash
cd edyt-turismo-reveillon
```
Certifique-se de estar na pasta correta.

### Problema: Imagens não aparecem

**Solução:**
- Verifique se os arquivos estão na pasta `images/`
- Confirme que os nomes estão corretos (maiúsculas/minúsculas)

### Problema: Site não aparece após push

**Solução:**
1. Aguarde 5 minutos
2. Vá para Settings > Pages
3. Confirme que a branch `main` está selecionada
4. Confirme que o repositório é **público**

### Problema: Erro de autenticação

**Solução:**
1. Gere um novo token em [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Use o token como senha

---

## 📚 Recursos Úteis

- [Documentação GitHub Pages](https://docs.github.com/en/pages)
- [Documentação Git](https://git-scm.com/doc)
- [Tutorial GitHub Pages Oficial](https://pages.github.com/)

---

## ✅ Checklist Final

- [ ] Conta GitHub criada
- [ ] Git instalado
- [ ] Repositório criado
- [ ] Arquivos enviados
- [ ] GitHub Pages ativado
- [ ] Site acessível em `https://SEU_USUARIO.github.io/edyt-turismo-reveillon`
- [ ] Link compartilhado com clientes

---

**Pronto! Seu site está no ar! 🎉**

Para dúvidas, consulte a documentação oficial do GitHub Pages.

