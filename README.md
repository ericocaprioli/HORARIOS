# siteHorario

Site estático para hospedar os PDFs dos horários da escola no GitHub Pages.

## Como usar

1. Adicione seus arquivos PDF na pasta `pdfs/`.
2. Use os mesmos nomes de arquivo sempre que quiser substituir um PDF existente.
3. Abra `pdfs.js` e garanta que cada item use o mesmo `filename` do PDF correspondente.
4. Faça commit e envie para o GitHub. O GitHub Pages atualizará os PDFs com os novos arquivos se os nomes forem iguais.

### Exemplo de entrada em `pdfs.js`

```js
{
  title: 'Horário 1A',
  description: 'Turma 1A',
  filename: '1A.pdf'
}
```

### Observação

- Se você colocar um arquivo novo com o mesmo nome de um PDF antigo, o novo arquivo sobrescreverá o antigo após o commit e o deploy.
- Mantenha a pasta `pdfs/` no repositório para que o site continue funcionando.
