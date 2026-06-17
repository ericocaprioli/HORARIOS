const pdfLinks = [
  { title: 'Visualização geral por turmas', filename: 'Visualização geral por turmars.pdf', category: 'general', theme: 'theme-general' },
  { title: '1A', filename: '1A.pdf', category: 'turma', theme: 'theme-turma' },
  { title: '2A', filename: '2a.pdf', category: 'turma', theme: 'theme-turma' },
  { title: '3A', filename: '3a.pdf', category: 'turma', theme: 'theme-turma' },
  { title: '6A', filename: '6a.pdf', category: 'turma', theme: 'theme-turma' },
  { title: '6B', filename: '6b.pdf', category: 'turma', theme: 'theme-turma' },
  { title: '7A', filename: '7a.pdf', category: 'turma', theme: 'theme-7a' },
  { title: '7B', filename: '7b.pdf', category: 'turma', theme: 'theme-turma' },
  { title: '8A', filename: '8a.pdf', category: 'turma', theme: 'theme-turma' },
  { title: '8B', filename: '8b.pdf', category: 'turma', theme: 'theme-turma' },
  { title: '9A', filename: '9a.pdf', category: 'turma', theme: 'theme-turma' },
  { title: '9B', filename: '9b.pdf', category: 'turma', theme: 'theme-turma' },
  { title: 'Adrielí', filename: 'adrieli.pdf', category: 'professor' },
  { title: 'Alessandra', filename: 'alessandra.pdf', category: 'professor' },
  { title: 'Andreia F.', filename: 'andreia f.pdf', category: 'professor' },
  { title: 'Andreia M.', filename: 'andreia m.pdf', category: 'professor' },
  { title: 'Camila', filename: 'camila.pdf', category: 'professor' },
  { title: 'Débora', filename: 'debora.pdf', category: 'professor', theme: 'theme-darker' },
  { title: 'Doraci', filename: 'doraci.pdf', category: 'professor' },
  { title: 'Éder', filename: 'eder.pdf', category: 'professor' },
  { title: 'Edilaine', filename: 'edilaine.pdf', category: 'professor' },
  { title: 'Edione', filename: 'edione.pdf', category: 'professor' },
  { title: 'Kaliandra', filename: 'kaliandra.pdf', category: 'professor', theme: 'theme-darker' },
  { title: 'Keila', filename: 'keila.pdf', category: 'professor', theme: 'theme-darker' },
  { title: 'Erenice', filename: 'erenice.pdf', category: 'professor', theme: 'theme-darker' },
  { title: 'Fabiana', filename: 'fabiana.pdf', category: 'professor' },
  { title: 'Flávia', filename: 'flavia.pdf', category: 'professor' },
  { title: 'Ivair', filename: 'ivair.pdf', category: 'professor' },
  { title: 'Maiza', filename: 'maiza.pdf', category: 'professor' },
  { title: 'Marciele', filename: 'marciele.pdf', category: 'professor' },
  { title: 'Marcos', filename: 'marcos.pdf', category: 'professor', theme: 'theme-darker' },
  { title: 'Marizete', filename: 'marizete.pdf', category: 'professor' },
  { title: 'Otávio', filename: 'otavio.pdf', category: 'professor' },
  { title: 'Rosa', filename: 'rosa.pdf', category: 'professor' },
  { title: 'Silvana', filename: 'silvana.pdf', category: 'professor' },
  { title: 'Valdriano', filename: 'valdriano.pdf', category: 'professor' },
  { title: 'Valmir', filename: 'valmir.pdf', category: 'professor', theme: 'theme-darker' }
];

// Para adicionar novos horários:
// 1. Coloque o arquivo PDF dentro da pasta "pdfs/"
// 2. Adicione um novo item no array acima com title, category e filename
// 3. Exemplo:
// { title: 'Horário 3º Ano C - 2026', category: 'turma', filename: '3anoC-2026.pdf' }
