const pdfLinks = [
  { title: 'Horário 1A', description: 'Turma 1A', filename: '1A.pdf' },
  { title: 'Horário 2A', description: 'Turma 2A', filename: '2a.pdf' },
  { title: 'Horário 3A', description: 'Turma 3A', filename: '3a.pdf' },
  { title: 'Horário 6A', description: 'Turma 6A', filename: '6a.pdf' },
  { title: 'Horário 6B', description: 'Turma 6B', filename: '6b.pdf' },
  { title: 'Horário 7A', description: 'Turma 7A', filename: '7a.pdf' },
  { title: 'Horário 7B', description: 'Turma 7B', filename: '7b.pdf' },
  { title: 'Horário 8A', description: 'Turma 8A', filename: '8a.pdf' },
  { title: 'Horário 8B', description: 'Turma 8B', filename: '8b.pdf' },
  { title: 'Horário 9A', description: 'Turma 9A', filename: '9a.pdf' },
  { title: 'Horário 9B', description: 'Turma 9B', filename: '9b.pdf' },
  { title: 'Visualização geral por turmas', description: 'Visão geral por turmas', filename: 'Visualização geral por turmars.pdf' },
  { title: 'Atividades Adrielí', description: 'Professora Adrielí', filename: 'adrieli.pdf' },
  { title: 'Atividades Alessandra', description: 'Professora Alessandra', filename: 'alessandra.pdf' },
  { title: 'Atividades Andreia F.', description: 'Professora Andreia F.', filename: 'andreia f.pdf' },
  { title: 'Atividades Andreia M.', description: 'Professora Andreia M.', filename: 'andreia m.pdf' },
  { title: 'Atividades Camila', description: 'Professora Camila', filename: 'camila.pdf' },
  { title: 'Atividades Débora', description: 'Professora Débora', filename: 'debora.pdf' },
  { title: 'Atividades Doraci', description: 'Professora Doraci', filename: 'doraci.pdf' },
  { title: 'Atividades Éder', description: 'Professor Éder', filename: 'eder.pdf' },
  { title: 'Atividades Edilaine', description: 'Professora Edilaine', filename: 'edilaine.pdf' },
  { title: 'Atividades Edione', description: 'Professora Edione', filename: 'edione.pdf' },
  { title: 'Atividades Emília', description: 'Professora Emília', filename: 'emilia.pdf' },
  { title: 'Atividades Erenice', description: 'Professora Erenice', filename: 'erenice.pdf' },
  { title: 'Atividades Fabiana', description: 'Professora Fabiana', filename: 'fabiana.pdf' },
  { title: 'Atividades Flávia', description: 'Professora Flávia', filename: 'flavia.pdf' },
  { title: 'Atividades Ivair', description: 'Professor Ivair', filename: 'ivair.pdf' },
  { title: 'Atividades Maiza', description: 'Professora Maiza', filename: 'maiza.pdf' },
  { title: 'Atividades Marciele', description: 'Professora Marciele', filename: 'marciele.pdf' },
  { title: 'Atividades Marcos', description: 'Professor Marcos', filename: 'marcos.pdf' },
  { title: 'Atividades Marizete', description: 'Professora Marizete', filename: 'marizete.pdf' },
  { title: 'Atividades Otávio', description: 'Professor Otávio', filename: 'otavio.pdf' },
  { title: 'Atividades Rosa', description: 'Professora Rosa', filename: 'rosa.pdf' },
  { title: 'Atividades Silvana', description: 'Professora Silvana', filename: 'silvana.pdf' },
  { title: 'Atividades Valdriano', description: 'Professor Valdriano', filename: 'valdriano.pdf' },
  { title: 'Atividades Valmir', description: 'Professor Valmir', filename: 'valmir.pdf' }
];

// Para adicionar novos horários:
// 1. Coloque o arquivo PDF dentro da pasta "pdfs/"
// 2. Adicione um novo item no array acima com title, description e filename
// 3. Exemplo:
// { title: 'Horário 3º Ano C - 2026', description: 'Noite', filename: '3anoC-2026.pdf' }
