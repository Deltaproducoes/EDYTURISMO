# ❓ Perguntas Frequentes - GitHub Pages

Respostas para as dúvidas mais comuns sobre publicar o site no GitHub Pages.

---

## 💰 Custo

**P: Quanto custa publicar no GitHub Pages?**

R: Totalmente **GRATUITO**! GitHub Pages é um serviço gratuito do GitHub para hospedagem de sites estáticos.

**P: Há limite de dados ou tráfego?**

R: GitHub Pages tem limite de 100GB de armazenamento e 100GB de tráfego por mês. Para um site como este, é mais que suficiente.

**P: Preciso pagar para usar domínio customizado?**

R: Não. O domínio `seu-usuario.github.io/edyt-turismo-reveillon` é gratuito. Se quiser um domínio próprio (como `edyturismo.com.br`), você precisa comprar o domínio em outro lugar, mas a hospedagem continua gratuita.

---

## ⏱️ Tempo

**P: Quanto tempo leva para o site ficar online?**

R: Geralmente 2-5 minutos após fazer o `git push`. Às vezes pode levar até 10 minutos.

**P: Como saber se o site já está online?**

R: Vá para Settings > Pages no seu repositório. Você verá uma mensagem como:
> "Your site is ready to be published at https://seu-usuario.github.io/edyt-turismo-reveillon"

**P: Quanto tempo leva para atualizar após fazer mudanças?**

R: Geralmente 1-2 minutos após fazer `git push`.

---

## 🔧 Técnico

**P: Qual é o endereço do meu site?**

R: `https://SEU_USUARIO.github.io/edyt-turismo-reveillon`

Exemplo: `https://joao123.github.io/edyt-turismo-reveillon`

**P: Posso usar um domínio próprio?**

R: Sim! Vá para Settings > Pages > Custom domain e adicione seu domínio (ex: `edyturismo.com.br`).

**P: O site usa HTTPS?**

R: Sim! GitHub Pages fornece HTTPS gratuitamente e automático.

**P: Posso usar banco de dados?**

R: GitHub Pages só hospeda sites estáticos (HTML, CSS, JavaScript). Para usar banco de dados, você precisaria de um backend (servidor). Alternativas gratuitas: Heroku, Vercel, Netlify.

**P: Posso usar Node.js ou Python?**

R: Não diretamente. GitHub Pages só hospeda arquivos estáticos. Mas você pode usar serviços como Vercel ou Netlify que suportam Node.js.

---

## 🐛 Problemas

**P: Meu site não aparece após fazer push.**

R: Verifique:
1. Aguarde 5 minutos
2. Vá para Settings > Pages
3. Confirme que a branch `main` está selecionada
4. Confirme que o repositório é **público** (não privado)
5. Verifique se há erros no histórico de deployment

**P: As imagens não aparecem.**

R: Verifique:
1. Os arquivos estão na pasta `images/`
2. Os caminhos no HTML/CSS estão corretos
3. Os nomes dos arquivos têm maiúsculas/minúsculas corretas
4. Não há espaços nos nomes dos arquivos

**P: Erro "fatal: not a git repository"**

R: Você não está na pasta correta. Execute:
```bash
cd edyt-turismo-reveillon
```

**P: Erro de autenticação ao fazer push**

R: Gere um novo token:
1. Vá para https://github.com/settings/tokens
2. Clique em "Generate new token"
3. Marque `repo` e `workflow`
4. Copie o token
5. Use como senha no Git

**P: "fatal: 'origin' does not appear to be a 'git' repository"**

R: Você precisa clonar o repositório primeiro:
```bash
git clone https://github.com/SEU_USUARIO/edyt-turismo-reveillon.git
cd edyt-turismo-reveillon
```

---

## 📝 Conteúdo

**P: Posso editar o site depois de publicar?**

R: Sim! Edite os arquivos, faça commit e push:
```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

**P: Como adicionar uma nova página?**

R: Crie um novo arquivo HTML (ex: `sobre.html`) e adicione um link no `index.html`.

**P: Posso usar um CMS (como WordPress)?**

R: GitHub Pages não suporta CMS. Você precisa editar os arquivos manualmente ou usar um serviço como Netlify CMS.

**P: Como fazer backup do site?**

R: GitHub mantém histórico completo. Você pode clonar o repositório em outro computador:
```bash
git clone https://github.com/SEU_USUARIO/edyt-turismo-reveillon.git
```

---

## 🔒 Segurança

**P: Meu site é seguro?**

R: Sim! GitHub Pages fornece HTTPS automático. Mas lembre-se:
- Não coloque senhas ou dados sensíveis no código
- O código é público (qualquer pessoa pode ver)
- Não processe pagamentos diretamente no site

**P: Como proteger o site com senha?**

R: GitHub Pages não suporta autenticação nativa. Alternativas:
- Usar um serviço de autenticação externo
- Usar Netlify com autenticação
- Usar um backend separado

**P: Posso manter o repositório privado?**

R: Sim, mas GitHub Pages gratuito só funciona com repositórios públicos. Se quiser privado, precisa de GitHub Pro (pago).

---

## 🌍 Domínio

**P: Como usar um domínio customizado?**

R: 
1. Compre um domínio (ex: em Godaddy, Namecheap, etc.)
2. Vá para Settings > Pages > Custom domain
3. Digite seu domínio
4. Configure os DNS do seu domínio (instruções aparecem no GitHub)

**P: Quanto custa um domínio customizado?**

R: Geralmente R$ 30-50 por ano, dependendo do registrador.

**P: Posso usar subdomínio?**

R: Sim! Ex: `reveillon.edyturismo.com.br`

---

## 📊 Estatísticas

**P: Como ver quantas pessoas acessaram meu site?**

R: GitHub Pages não fornece estatísticas. Alternativas:
- Google Analytics (gratuito)
- Vercel Analytics
- Plausible Analytics

**P: Como adicionar Google Analytics?**

R: Adicione este código antes de `</head>` no `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Substitua `GA_ID` pelo seu ID do Google Analytics.

---

## 🚀 Alternativas

**P: Existem alternativas ao GitHub Pages?**

R: Sim! Outras opções gratuitas:
- **Vercel**: Melhor para React, Next.js
- **Netlify**: Ótimo para sites estáticos, com CMS
- **Surge**: Simples e rápido
- **Firebase Hosting**: Google, com mais recursos
- **AWS S3**: Amazon, mais complexo

**P: Qual é melhor para este projeto?**

R: GitHub Pages é perfeito! É simples, gratuito e adequado para sites estáticos.

---

## 🤝 Colaboração

**P: Posso trabalhar com outras pessoas no repositório?**

R: Sim! Adicione colaboradores em Settings > Collaborators.

**P: Como fazer pull requests?**

R: Crie uma branch, faça mudanças, e abra um pull request. Veja [documentação GitHub](https://docs.github.com/en/pull-requests).

---

## 📚 Recursos

**P: Onde aprender mais sobre Git?**

R: 
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Learning Lab](https://lab.github.com/)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

**P: Onde aprender mais sobre GitHub Pages?**

R:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Help](https://github.community/t/github-pages/25)

**P: Como aprender HTML, CSS e JavaScript?**

R:
- [MDN Web Docs](https://developer.mozilla.org/)
- [FreeCodeCamp](https://www.freecodecamp.org/)
- [Codecademy](https://www.codecademy.com/)

---

## 🆘 Não Encontrou Resposta?

Se sua dúvida não está aqui:

1. Veja a [documentação oficial do GitHub Pages](https://docs.github.com/en/pages)
2. Procure no [GitHub Community](https://github.community/)
3. Abra uma issue no repositório
4. Procure no Stack Overflow

---

## 📞 Contato

Para dúvidas específicas sobre o site EDY Turismo:

- **WhatsApp**: 73 98838-3692
- **Email**: edyturismo@gmail.com
- **Instagram**: @edy.turismo

---

**Desenvolvido com ❤️ para EDY Turismo**

Última atualização: Outubro 2025

