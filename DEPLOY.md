# 🚀 Instruções Rápidas de Deployment

## Resumo Executivo

Este documento fornece as instruções mais rápidas para publicar o site no GitHub Pages.

---

## ⚡ 5 Passos Rápidos

### 1️⃣ Criar Repositório no GitHub

```
Acesse: https://github.com/new
Nome: edyt-turismo-reveillon
Tipo: Public
Criar
```

### 2️⃣ Instalar Git

- **Windows**: https://git-scm.com/download/win
- **Mac**: `brew install git`
- **Linux**: `sudo apt-get install git`

### 3️⃣ Clonar e Enviar Arquivos

```bash
git clone https://github.com/SEU_USUARIO/edyt-turismo-reveillon.git
cd edyt-turismo-reveillon

# Copie os arquivos aqui

git config --global user.name "Seu Nome"
git config --global user.email "seu.email@gmail.com"
git add .
git commit -m "Inicial: Site EDY Turismo"
git push -u origin main
```

### 4️⃣ Ativar GitHub Pages

```
Repositório > Settings > Pages > Source: main > Save
```

### 5️⃣ Acessar Site

```
https://SEU_USUARIO.github.io/edyt-turismo-reveillon
```

---

## 📁 Arquivos Necessários

```
edyt-turismo-reveillon/
├── index.html
├── css/styles.css
├── js/script.js
├── images/
│   ├── logo.jpg
│   ├── edyt(1).png
│   └── beach-fireworks.jpg
├── README.md
├── .gitignore
└── LICENSE
```

---

## 🔄 Atualizar Site

```bash
# Edite os arquivos
# Depois execute:

git add .
git commit -m "Descrição das mudanças"
git push
```

---

## ❓ Dúvidas Frequentes

**P: Quanto custa?**
R: Totalmente gratuito!

**P: Quanto tempo leva para ficar online?**
R: 2-5 minutos após fazer push

**P: Posso usar domínio próprio?**
R: Sim, veja [documentação GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

**P: Como fazer backup?**
R: O GitHub mantém histórico de todas as versões

---

## 📞 Suporte

Para dúvidas sobre GitHub Pages:
- [Documentação Oficial](https://docs.github.com/en/pages)
- [Comunidade GitHub](https://github.community)

---

**Desenvolvido com ❤️ para EDY Turismo**

