# 📁 Estrutura do Projeto

## Visão Geral

```
edyt-turismo-reveillon/
├── index.html                    # Página principal
├── css/
│   └── styles.css               # Estilos e design
├── js/
│   └── script.js                # Funcionalidades JavaScript
├── images/
│   ├── logo.jpg                 # Logo EDY Turismo
│   ├── edyt(1).png              # Imagem Réveillon 2026
│   └── beach-fireworks.jpg      # Fundo praia com fogos
├── README.md                    # Documentação principal
├── GITHUB_PAGES_GUIA.md         # Guia completo GitHub Pages
├── DEPLOY.md                    # Instruções rápidas
├── ESTRUTURA_PROJETO.md         # Este arquivo
├── .gitignore                   # Arquivos ignorados pelo Git
└── LICENSE                      # Licença MIT
```

---

## 📄 Descrição de Cada Arquivo

### `index.html`

**Propósito**: Página principal do site

**Conteúdo**:
- Header com logo e navegação
- Seção hero com praia e fogos
- Informações da viagem
- Tabela de preços
- Formulário de reserva
- Seção de contato
- Footer

**Tecnologia**: HTML5 semântico

**Tamanho**: ~8KB

---

### `css/styles.css`

**Propósito**: Estilos visuais do site

**Conteúdo**:
- Variáveis de cores (azul, dourado, preto)
- Reset CSS
- Estilos do header
- Estilos da seção hero
- Cards de informação
- Tabela de preços
- Formulário de reserva
- Seção de contato
- Animações
- Media queries (responsividade)

**Características**:
- Gradientes lineares
- Flexbox e Grid
- Animações suaves
- Responsivo (mobile-first)

**Tamanho**: ~20KB

---

### `js/script.js`

**Propósito**: Interatividade do site

**Funcionalidades**:
- Mostrar/ocultar campos de casadinha
- Validação de formulário
- Máscara de telefone
- Mensagem de sucesso
- Scroll suave
- Animações de entrada

**Eventos**:
- `change`: Seleção de tipo de passagem
- `submit`: Envio do formulário
- `input`: Formatação de telefone

**Tamanho**: ~4KB

---

### `images/logo.jpg`

**Propósito**: Logo da empresa EDY Turismo

**Dimensões**: 1000x400px (aproximadamente)

**Formato**: JPEG

**Tamanho**: ~114KB

**Uso**: Header do site

---

### `images/edyt(1).png`

**Propósito**: Imagem "Réveillon 2026"

**Dimensões**: 1000x1200px (aproximadamente)

**Formato**: PNG com transparência

**Tamanho**: ~307KB

**Uso**: Decoração (atualmente oculta com `display: none`)

---

### `images/beach-fireworks.jpg`

**Propósito**: Fundo da seção hero

**Dimensões**: 1920x1080px (aproximadamente)

**Formato**: JPEG otimizado

**Tamanho**: ~293KB

**Conteúdo**: Praia com fogos de artifício coloridos

**Uso**: Background da seção hero

---

### `README.md`

**Propósito**: Documentação principal do projeto

**Conteúdo**:
- Descrição do projeto
- Características
- Como implantar no GitHub Pages
- Estrutura de arquivos
- Tecnologias utilizadas
- Instruções de desenvolvimento local
- Solução de problemas

**Formato**: Markdown

**Tamanho**: ~5KB

---

### `GITHUB_PAGES_GUIA.md`

**Propósito**: Guia completo e detalhado para GitHub Pages

**Conteúdo**:
- Pré-requisitos
- Criar conta GitHub
- Instalar Git
- Criar repositório
- Upload de arquivos
- Ativar GitHub Pages
- Acessar site
- Próximas atualizações
- Solução de problemas
- Recursos úteis

**Público**: Iniciantes

**Tamanho**: ~8KB

---

### `DEPLOY.md`

**Propósito**: Instruções rápidas de deployment

**Conteúdo**:
- 5 passos rápidos
- Arquivos necessários
- Como atualizar
- FAQ

**Público**: Usuários com experiência

**Tamanho**: ~2KB

---

### `ESTRUTURA_PROJETO.md`

**Propósito**: Explicação da estrutura do projeto

**Conteúdo**: Este arquivo

**Público**: Desenvolvedores

**Tamanho**: ~4KB

---

### `.gitignore`

**Propósito**: Especificar arquivos ignorados pelo Git

**Conteúdo**:
- Arquivos do SO (.DS_Store, Thumbs.db)
- Arquivos de editor (.vscode, .idea)
- Node modules
- Arquivos temporários
- Logs

**Formato**: Texto simples

**Tamanho**: <1KB

---

### `LICENSE`

**Propósito**: Licença do projeto

**Tipo**: MIT License

**Conteúdo**:
- Permissões
- Limitações
- Isenção de responsabilidade

**Tamanho**: <1KB

---

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Azul Escuro | `#003d82` | Primary, Headers |
| Azul Claro | `#0066cc` | Secondary, Accents |
| Dourado | `#ffc107` | Highlights, Emphasis |
| Preto | `#000000` | Text, Borders |
| Branco | `#ffffff` | Background, Text |
| Cinza Claro | `#f5f5f5` | Backgrounds |

---

## 📐 Responsividade

### Breakpoints

| Dispositivo | Largura | Aplicação |
|-------------|---------|-----------|
| Celular | < 480px | Mobile-first |
| Tablet | 480px - 768px | Médio |
| Desktop | > 768px | Completo |

### Media Queries

```css
@media (max-width: 768px) { /* Tablet */ }
@media (max-width: 480px) { /* Celular */ }
```

---

## 🔄 Fluxo de Dados do Formulário

```
Usuário preenche formulário
         ↓
Seleciona tipo de passagem
         ↓
Se "Casadinha" → Mostrar campos adicionais
         ↓
Validar dados
         ↓
Exibir mensagem de sucesso
         ↓
Limpar formulário
```

---

## 📊 Tamanhos de Arquivo

| Arquivo | Tamanho | Tipo |
|---------|---------|------|
| index.html | ~8KB | HTML |
| styles.css | ~20KB | CSS |
| script.js | ~4KB | JavaScript |
| logo.jpg | ~114KB | Imagem |
| edyt(1).png | ~307KB | Imagem |
| beach-fireworks.jpg | ~293KB | Imagem |
| **Total** | **~746KB** | - |

---

## 🚀 Performance

### Otimizações Implementadas

- ✅ CSS minificado
- ✅ Imagens otimizadas
- ✅ Lazy loading (praia com fogos)
- ✅ Sem dependências externas
- ✅ Sem bibliotecas pesadas

### Tempo de Carregamento

- Primeira visita: ~2-3 segundos
- Visitas subsequentes: <1 segundo (cache)

---

## 🔐 Segurança

- ✅ Sem dados sensíveis hardcoded
- ✅ Validação de formulário no cliente
- ✅ Sem requisições externas perigosas
- ✅ HTTPS automático no GitHub Pages

---

## 📝 Convenções de Código

### HTML
- Semântica HTML5
- Indentação de 4 espaços
- IDs em snake_case
- Classes em kebab-case

### CSS
- Variáveis CSS para cores
- Mobile-first approach
- BEM methodology para classes
- Comentários para seções

### JavaScript
- Nomes descritivos
- Funções pequenas e reutilizáveis
- Comentários para lógica complexa
- Sem console.log em produção

---

## 🔧 Como Modificar

### Adicionar Nova Seção

1. Edite `index.html` e adicione HTML
2. Edite `css/styles.css` e adicione estilos
3. Se necessário, edite `js/script.js`

### Trocar Cores

Edite as variáveis CSS em `styles.css`:

```css
:root {
    --color-primary-blue: #003d82;
    --color-secondary-blue: #0066cc;
    --color-gold: #ffc107;
    /* ... */
}
```

### Atualizar Imagens

1. Substitua os arquivos em `images/`
2. Mantenha os mesmos nomes
3. Ou atualize os caminhos no HTML/CSS

---

## 📚 Referências

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Can I Use](https://caniuse.com/)

---

**Desenvolvido com ❤️ para EDY Turismo**

