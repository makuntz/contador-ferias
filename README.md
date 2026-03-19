# Contador de Férias - Maíra 🏖️

Um contador regressivo simples e bonito mostrando quantos dias faltam para as férias da Maíra (2 de março de 2026).

## Tecnologias

- React 18
- TypeScript
- Vite

## Como executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto em modo desenvolvimento:
```bash
npm run dev
```

3. Abra o navegador em `http://localhost:5173`

## Build para produção

```bash
npm run build
```

## Preview da build

```bash
npm run preview
```

## Deploy no GitHub Pages

1. Certifique-se de que o repositório está no GitHub e que você tem um repositório remoto configurado.

2. Execute o comando de deploy:
```bash
npm run deploy
```

3. O comando irá:
   - Fazer o build do projeto
   - Fazer deploy para a branch `gh-pages` no GitHub4. Configure o GitHub Pages:
   - Vá em Settings > Pages no seu repositório GitHub
   - Selecione a branch `gh-pages` como source
   - Seu site estará disponível em: `https://seu-usuario.github.io/contador-ferias/`

**Nota:** Se o nome do seu repositório for diferente de `contador-ferias`, você precisa atualizar o `base` no arquivo `vite.config.ts` para corresponder ao nome do repositório.
