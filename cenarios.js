/* ============================================================
   SimuCare — Cenários Consolidados (Abril 2026)
   ============================================================
   80 cenários totais:
   - 40 cenários de Agendamento (AG-01 a AG-40)
     3 etapas cada: dados do paciente → agendamento → seleção de materiais
   - 40 cenários de Seleção de Materiais (MAT-01 a MAT-40)
   
   Complexidade:
   1 = Fácil
   2 = Médio
   3 = Difícil
   ============================================================ */

window.CENARIOS = [

/* AGENDAMENTOS (40 cenários) */
{
  id: 'AG-01', titulo: 'Emergência: criança caiu e quebrou o dente da frente',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 3, tempo: 3,
  contexto: 'O pai Rogério Paz liga assustado: a filha Sofia, 8 anos, acabou de cair na escola e quebrou o dente da frente. Está com sangramento, chorando, sem perda de consciência. Ele está a 15 minutos da clínica. Pergunta se pode ir direto.',
  dadosPaciente: { campos: [
    { chave: 'nome_crianca', label: 'Nome da criança', obrigatorio: true },
    { chave: 'idade', label: 'Idade', obrigatorio: true },
    { chave: 'responsavel', label: 'Responsável', obrigatorio: true },
    { chave: 'telefone', label: 'Telefone', obrigatorio: true },
    { chave: 'tipo_atendimento', label: 'Tipo de atendimento', obrigatorio: true },
    { chave: 'grau_urgencia', label: 'Grau de urgência (1-5)', obrigatorio: true },
    { chave: 'sangramento', label: 'Há sangramento ativo?', obrigatorio: true },
    { chave: 'consciencia', label: 'Perda de consciência?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório de Emergência', dias: ['segunda','terça','quarta','quinta','sexta','sábado'], horarios: ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Luvas de nitrila' },
    { id: 'm2', nome: 'Máscara cirúrgica' },
    { id: 'm3', nome: 'Gaze estéril' },
    { id: 'm4', nome: 'Anestésico tópico' },
    { id: 'm5', nome: 'Lidocaína 2% com epinefrina' },
    { id: 'm6', nome: 'Seringa carpule' },
    { id: 'm7', nome: 'Agulha 30x20' },
    { id: 'm8', nome: 'Espelho intraoral' },
    { id: 'm9', nome: 'Explorador' },
    { id: 'm10', nome: 'Pinça' },
    { id: 'm11', nome: 'Sutura reabsorvível' },
    { id: 'm12', nome: 'Fio de seda' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8','m9','m10','m11'] },
  competencias: [9,9,9,9,9,8,8,9]
},
{
  id: 'AG-02', titulo: 'Limpeza de rotina com orientação de higiene',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 1, tempo: 2,
  contexto: 'Paciente com acúmulo de biofilme solicita limpeza profissional. Paciente de baixo risco, mantém boa higiene.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'idade', label: 'Idade', obrigatorio: true },
    { chave: 'freq_escova', label: 'Frequência de escovação (vezes/dia)', obrigatorio: true },
    { chave: 'usa_fio', label: 'Usa fio dental?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','10:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Escova de dentes macia' },
    { id: 'm2', nome: 'Fio dental 50m' },
    { id: 'm3', nome: 'Clorexidina 0.12%' },
    { id: 'm4', nome: 'Pasta de dente com flúor' },
    { id: 'm5', nome: 'Raspador de língua' },
    { id: 'm6', nome: 'Taça de borracha' },
    { id: 'm7', nome: 'Pasta de polimento' }
  ], corretos: ['m1','m2','m3','m4','m6','m7'] },
  competencias: [8,6,6,7,8,8,6,8]
},
{
  id: 'AG-03', titulo: 'Restauração de cárie em primeiro molar',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente com cárie interproximal confirmada em primeiro molar inferior. Necessita restauração com resina.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'qual_dente', label: 'Qual dente afetado?', obrigatorio: true },
    { chave: 'sensibilidade', label: 'Tem sensibilidade?', obrigatorio: true },
    { chave: 'ultima_limpeza', label: 'Última limpeza quando?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:30','09:30','14:30','15:30'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Dique de borracha' },
    { id: 'm2', nome: 'Resina composta bulk-fill' },
    { id: 'm3', nome: 'Adesivo universal' },
    { id: 'm4', nome: 'Matriz de contorno' },
    { id: 'm5', nome: 'Ácido fosfórico 37%' },
    { id: 'm6', nome: 'Luz de LED' },
    { id: 'm7', nome: 'Anestésico' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7'] },
  competencias: [7,8,8,9,8,7,7,8]
},
{
  id: 'AG-04', titulo: 'Avaliação estética do sorriso',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente insatisfeito com estética dos dentes. Quer saber sobre possibilidades de melhoramento.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'insatisfacao', label: 'O que deseja melhorar?', obrigatorio: true },
    { chave: 'expectativa', label: 'Expectativa realista?', obrigatorio: true },
    { chave: 'orcamento', label: 'Orçamento definido?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Estético', dias: ['terça','quarta','quinta','sexta'], horarios: ['10:00','11:00','14:00','15:00','16:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Guia de cor VITA' },
    { id: 'm2', nome: 'Espelho intraoral' },
    { id: 'm3', nome: 'Paquímetro digital' },
    { id: 'm4', nome: 'Câmera fotográfica' },
    { id: 'm5', nome: 'Tomografia digital' },
    { id: 'm6', nome: 'Software de simulação' }
  ], corretos: ['m1','m2','m4','m6'] },
  competencias: [9,7,8,8,6,8,7,9]
},
{
  id: 'AG-05', titulo: 'Extração dentária programada',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 3, tempo: 2,
  contexto: 'Paciente com dente irrecuperável ou impactado necessita extração. Procedimento cirúrgico programado.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'qual_dente', label: 'Qual dente será extraído?', obrigatorio: true },
    { chave: 'motivo', label: 'Motivo da extração?', obrigatorio: true },
    { chave: 'ansiedade', label: 'Nível de ansiedade (1-5)?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório Cirúrgico', dias: ['segunda','quarta','quinta','sexta'], horarios: ['08:00','09:00','14:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Fórceps para extração' },
    { id: 'm2', nome: 'Elevador dentário' },
    { id: 'm3', nome: 'Gaze estéril' },
    { id: 'm4', nome: 'Sutura reabsorvível' },
    { id: 'm5', nome: 'Anestésico potente' },
    { id: 'm6', nome: 'Seringa carpule' },
    { id: 'm7', nome: 'Agulha 30x20' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7'] },
  competencias: [8,9,8,9,9,8,8,9]
},
{
  id: 'AG-06', titulo: 'Profilaxia com aplicação de flúor',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 1, tempo: 2,
  contexto: 'Paciente em manutenção periódica. Limpeza simples e aplicação de flúor tópico.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'ultima_profilaxia', label: 'Última profilaxia quando?', obrigatorio: true },
    { chave: 'alergias', label: 'Alergias conhecidas?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório C', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','10:00','11:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Taça de borracha' },
    { id: 'm2', nome: 'Pasta de polimento' },
    { id: 'm3', nome: 'Verniz de flúor 22000ppm' },
    { id: 'm4', nome: 'Fio dental' },
    { id: 'm5', nome: 'Gel fluoretado' },
    { id: 'm6', nome: 'Escova de dentes' }
  ], corretos: ['m1','m2','m3','m6'] },
  competencias: [8,6,6,7,7,8,6,8]
},
{
  id: 'AG-07', titulo: 'Tratamento de gengivite',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente com inflamação gengival leve. Necessita instruções de higiene e raspagem leve.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'sangramento', label: 'Intensidade do sangramento (1-5)?', obrigatorio: true },
    { chave: 'fumante', label: 'É fumante?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Escova de dentes macia' },
    { id: 'm2', nome: 'Fio dental' },
    { id: 'm3', nome: 'Clorexidina gel' },
    { id: 'm4', nome: 'Pasta dentifrícia com flúor' },
    { id: 'm5', nome: 'Ultrassom periodontal' },
    { id: 'm6', nome: 'Enxaguante bucal' }
  ], corretos: ['m1','m2','m3','m4','m5','m6'] },
  competencias: [8,7,7,8,8,8,7,8]
},
{
  id: 'AG-08', titulo: 'Ajuste oclusal simples',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente com desconforto oclusal após restauração. Necessita ajuste de contatos prematuros.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'qual_dente', label: 'Qual dente tem desconforto?', obrigatorio: true },
    { chave: 'tipo_desconforto', label: 'Como se manifesta o desconforto?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','quarta','quinta','sexta'], horarios: ['08:30','09:30','14:30','15:30'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Papel carbono' },
    { id: 'm2', nome: 'Disco de desgaste fino' },
    { id: 'm3', nome: 'Disco de polimento' },
    { id: 'm4', nome: 'Pasta de polimento' },
    { id: 'm5', nome: 'Espelho intraoral' }
  ], corretos: ['m1','m2','m3','m4','m5'] },
  competencias: [7,8,8,8,8,7,6,8]
},
{
  id: 'AG-09', titulo: 'Moldagem para prótese dentária',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente edêntulo necessitando de prótese. Moldagem preliminar e final.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'tipo_prótese', label: 'Que tipo de prótese?', obrigatorio: true },
    { chave: 'expectativa', label: 'Qual sua expectativa?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório Protético', dias: ['terça','quinta'], horarios: ['10:00','11:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Alginato' },
    { id: 'm2', nome: 'Espátula de moldagem' },
    { id: 'm3', nome: 'Bandeja de moldagem' },
    { id: 'm4', nome: 'Gesso tipo III' },
    { id: 'm5', nome: 'Elastômero' }
  ], corretos: ['m1','m2','m3','m4'] },
  competencias: [8,7,7,8,7,8,7,8]
},
{
  id: 'AG-10', titulo: 'Aplicação de selante de fosseta',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 1, tempo: 2,
  contexto: 'Criança com molares permanentes propensos a cárie. Selagem preventiva de fossetas e fissuras.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome da criança', obrigatorio: true },
    { chave: 'idade', label: 'Qual é a idade?', obrigatorio: true },
    { chave: 'higiene', label: 'Higiene oral atual?', obrigatorio: true },
    { chave: 'historico_carie', label: 'Tem histórico de cárie?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Pediátrico', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['09:00','10:00','15:00','16:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Selante de fosseta/fissura' },
    { id: 'm2', nome: 'Ácido fosfórico 37%' },
    { id: 'm3', nome: 'Primer' },
    { id: 'm4', nome: 'Microescova de limpeza' },
    { id: 'm5', nome: 'Gaze absorvente' },
    { id: 'm6', nome: 'Luz de LED' }
  ], corretos: ['m1','m2','m4','m6'] },
  competencias: [8,6,7,8,8,8,7,8]
},
{
  id: 'AG-11', titulo: 'Avaliação de bruxismo',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente com suspeita de bruxismo noturno. Necessita avaliação e possível confecção de placa oclusal.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'quem_refere', label: 'Quem notou (você/familiar)?', obrigatorio: true },
    { chave: 'desgaste', label: 'Nota desgaste dentário?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','quarta','quinta','sexta'], horarios: ['09:00','10:00','14:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Arco facial' },
    { id: 'm2', nome: 'Papel carbono' },
    { id: 'm3', nome: 'Moldeira de bruxismo' },
    { id: 'm4', nome: 'Elastômero' },
    { id: 'm5', nome: 'Resina acrílica' }
  ], corretos: ['m1','m2','m3','m4','m5'] },
  competencias: [8,7,8,8,8,8,8,8]
},
{
  id: 'AG-12', titulo: 'Endodontia diagnóstica',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente com suspeita de envolvimento pulpar. Necessita avaliação de vitalidade e diagnóstico.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'tipo_dor', label: 'Tipo de dor (espontânea/provocada)?', obrigatorio: true },
    { chave: 'duracao', label: 'Quanto tempo dura a dor?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Teste de vitalidade térmica' },
    { id: 'm2', nome: 'Teste elétrico' },
    { id: 'm3', nome: 'Radiografia periapical' },
    { id: 'm4', nome: 'Teste de percussão' },
    { id: 'm5', nome: 'Teste de mobilidade' }
  ], corretos: ['m1','m2','m3','m4'] },
  competencias: [8,8,8,9,8,8,7,8]
},
{
  id: 'AG-13', titulo: 'Clareamento de consultório',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente deseja clarear dentes vitais. Clareamento profissional com peróxido concentrado.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'sensibilidade', label: 'Tem sensibilidade atual?', obrigatorio: true },
    { chave: 'expectativa', label: 'Cor final desejada?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório Estético', dias: ['terça','quinta','sexta'], horarios: ['10:00','11:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Peróxido de hidrogênio 35%' },
    { id: 'm2', nome: 'Barreira gengival' },
    { id: 'm3', nome: 'Escala de cor VITA' },
    { id: 'm4', nome: 'Gel dessensibilizante' },
    { id: 'm5', nome: 'Protetor labial' }
  ], corretos: ['m1','m2','m3','m4','m5'] },
  competencias: [8,7,8,8,7,8,7,9]
},
{
  id: 'AG-14', titulo: 'Avaliação de DTM',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente com sintomas de disfunção temporomandibular. Avaliação completa necessária.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'dor_articular', label: 'Onde sente dor?', obrigatorio: true },
    { chave: 'clicks', label: 'Tem estalos ou clicks?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório B', dias: ['terça','quarta','quinta'], horarios: ['09:00','10:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Eletromiografia' },
    { id: 'm2', nome: 'Arco facial' },
    { id: 'm3', nome: 'Palpador de articulação' },
    { id: 'm4', nome: 'Tomografia articular' },
    { id: 'm5', nome: 'Ressonância magnética' }
  ], corretos: ['m2','m3','m4'] },
  competencias: [8,8,8,8,8,8,8,8]
},
{
  id: 'AG-15', titulo: 'Reparação de restauração com defeito',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Restauração anterior com defeito marginal. Necessita reparo.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'qual_dente', label: 'Qual dente?', obrigatorio: true },
    { chave: 'tipo_defeito', label: 'Tipo de defeito?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório Estético', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['09:00','10:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Resina composta' },
    { id: 'm2', nome: 'Adesivo universal' },
    { id: 'm3', nome: 'Ácido fosfórico' },
    { id: 'm4', nome: 'Matriz de contorno' },
    { id: 'm5', nome: 'Luz de LED' }
  ], corretos: ['m1','m2','m3','m5'] },
  competencias: [7,8,8,8,8,7,7,8]
},
{
  id: 'AG-16', titulo: 'Consulta de reavaliação pós-tratamento',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 1, tempo: 1,
  contexto: 'Paciente em acompanhamento pós-tratamento. Reavaliação de resposta e orientações finais.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'qual_tratamento', label: 'Que tratamento foi feito?', obrigatorio: true },
    { chave: 'como_esta', label: 'Como está se sentindo?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','10:00','14:00','15:00','16:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Instrumentos de inspeção' },
    { id: 'm2', nome: 'Fotografia intraoral' },
    { id: 'm3', nome: 'Radiografia periapical' },
    { id: 'm4', nome: 'Formulário de avaliação' },
    { id: 'm5', nome: 'Pasta de polimento' }
  ], corretos: ['m1','m3','m4'] },
  competencias: [8,6,6,7,7,8,6,8]
},
{
  id: 'AG-17', titulo: 'Avaliação de novo paciente',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente primeira vez na clínica. Anamnese completa e orientação de procedimentos.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'motivo_visita', label: 'Principal queixa?', obrigatorio: true },
    { chave: 'ultima_visita', label: 'Última visita ao dentista quando?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','10:00','11:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Questionário de anamnese' },
    { id: 'm2', nome: 'Radiografia panorâmica' },
    { id: 'm3', nome: 'Fotografias faciais' },
    { id: 'm4', nome: 'Glossário de procedimentos' },
    { id: 'm5', nome: 'Formulário de consentimento' }
  ], corretos: ['m1','m2','m3','m5'] },
  competencias: [9,6,7,7,7,8,7,8]
},
{
  id: 'AG-18', titulo: 'Tratamento de afta',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 1, tempo: 1,
  contexto: 'Paciente com afta dolorosa. Diagnóstico e tratamento.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'localizacao', label: 'Onde está a afta?', obrigatorio: true },
    { chave: 'duracao', label: 'Há quanto tempo?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','10:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Cauterizador de afta' },
    { id: 'm2', nome: 'Gel anestésico' },
    { id: 'm3', nome: 'Enxaguante bucal' },
    { id: 'm4', nome: 'Protetor oral' },
    { id: 'm5', nome: 'Antiviral' }
  ], corretos: ['m2','m3','m4'] },
  competencias: [8,6,7,7,7,8,7,8]
},
{
  id: 'AG-19', titulo: 'Sondagem periodontal',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente com suspeita de periodontite. Sondagem completa e documentação.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'sangramento', label: 'Sangramento durante sondagem?', obrigatorio: true },
    { chave: 'ultimo_rx', label: 'Último RX quando?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:30','09:30','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Sonda periodontal milimetrada' },
    { id: 'm2', nome: 'Explorador duplo' },
    { id: 'm3', nome: 'Espelho intraoral' },
    { id: 'm4', nome: 'Papel carbono' },
    { id: 'm5', nome: 'Gaze' }
  ], corretos: ['m1','m2','m3'] },
  competencias: [8,8,8,8,8,8,7,8]
},
{
  id: 'AG-20', titulo: 'Limpeza supragengival com ultrassom',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Remoção de tártaro com ultrassom em paciente com gengivite.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'sangramento', label: 'Sangra durante escovação?', obrigatorio: true },
    { chave: 'fumante', label: 'É fumante?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Ultrassom periodontal' },
    { id: 'm2', nome: 'Pontas ultrassônicas' },
    { id: 'm3', nome: 'Aspirador de saliva' },
    { id: 'm4', nome: 'Clorexidina gel' },
    { id: 'm5', nome: 'Pasta de polimento' }
  ], corretos: ['m1','m2','m3','m5'] },
  competencias: [8,8,8,8,8,8,7,8]
},
{
  id: 'AG-21', titulo: 'Restauração com resina direct',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Restauração estética anterior com resina fotopolimerizável.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'motivo', label: 'Motivo (cárie/fratura)?', obrigatorio: true },
    { chave: 'tamanho', label: 'Tamanho da lesão?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório Estético', dias: ['terça','quarta','sexta'], horarios: ['10:00','11:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Resina micropartículas' },
    { id: 'm2', nome: 'Adesivo' },
    { id: 'm3', nome: 'Guia de cor VITA' },
    { id: 'm4', nome: 'Lâmina de polímero' },
    { id: 'm5', nome: 'Discos de polimento' },
    { id: 'm6', nome: 'Ácido fosfórico' }
  ], corretos: ['m1','m2','m3','m6'] },
  competencias: [8,8,8,8,8,8,8,8]
},
{
  id: 'AG-22', titulo: 'Cimentação de coroa protética',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Instalação de coroa protética sobre dente preparado.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'qual_coroa', label: 'Qual dente receberá coroa?', obrigatorio: true },
    { chave: 'tipo_coroa', label: 'Tipo (cerâmica/ouro)?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório Protético', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['09:00','10:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Cimento resinoso dual' },
    { id: 'm2', nome: 'Fio de retração gengival' },
    { id: 'm3', nome: 'Papel de carbono' },
    { id: 'm4', nome: 'Escova de dentes' },
    { id: 'm5', nome: 'Espelho' }
  ], corretos: ['m1','m2','m3'] },
  competencias: [8,8,8,9,9,8,8,8]
},
{
  id: 'AG-23', titulo: 'Remoção de aparelho ortodôntico',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Remoção de aparelho fixo e planejamento de contenção.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'tempo_uso', label: 'Por quanto tempo usou aparelho?', obrigatorio: true },
    { chave: 'satisfacao', label: 'Satisfeito com resultado?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório Ortho', dias: ['segunda','quarta','quinta'], horarios: ['09:00','10:00','14:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Alicate para bracket' },
    { id: 'm2', nome: 'Pasta de remoção' },
    { id: 'm3', nome: 'Escova de remoção' },
    { id: 'm4', nome: 'Retentor fixo' },
    { id: 'm5', nome: 'Contentor removível' }
  ], corretos: ['m1','m3','m4','m5'] },
  competencias: [8,8,8,8,8,8,8,8]
},
{
  id: 'AG-24', titulo: 'Avaliação de halitose',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Diagnóstico de origem de halitose e plano de tratamento.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'tipo_halitose', label: 'Matinal ou persistente?', obrigatorio: true },
    { chave: 'historico', label: 'Histórico familiar?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:30','10:00','14:30','15:30'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Halímetro' },
    { id: 'm2', nome: 'Raspador de língua' },
    { id: 'm3', nome: 'Enxaguante com clorexidina' },
    { id: 'm4', nome: 'Escova de língua' },
    { id: 'm5', nome: 'Teste organoléptico' }
  ], corretos: ['m1','m2','m3'] },
  competencias: [8,7,8,8,7,8,7,8]
},
{
  id: 'AG-25', titulo: 'Instalação de implante',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 3, tempo: 3,
  contexto: 'Cirurgia de colocação de implante osseointegrado.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'regiao', label: 'Qual região do implante?', obrigatorio: true },
    { chave: 'densidade_ossea', label: 'Densidade óssea adequada?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Bloco Cirúrgico', dias: ['segunda','quarta','sexta'], horarios: ['08:00','09:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Implante dentário' },
    { id: 'm2', nome: 'Abutment' },
    { id: 'm3', nome: 'Guia cirúrgico' },
    { id: 'm4', nome: 'Sutura reabsorvível' },
    { id: 'm5', nome: 'Enzimas hemostáticas' },
    { id: 'm6', nome: 'Anestésico potente' },
    { id: 'm7', nome: 'Seringa carpule' }
  ], corretos: ['m1','m3','m4','m6','m7'] },
  competencias: [8,9,8,10,10,8,9,9]
},
{
  id: 'AG-26', titulo: 'Limpeza de implante',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Manutenção profissional de implante.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'quando_implante', label: 'Quando foi colocado?', obrigatorio: true },
    { chave: 'higiene', label: 'Como está higienizando?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório Cirúrgico', dias: ['segunda','terça','quarta','quinta'], horarios: ['08:00','09:00','14:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Ultrassom específico' },
    { id: 'm2', nome: 'Curetas de Gracey' },
    { id: 'm3', nome: 'Escova específica' },
    { id: 'm4', nome: 'Agente antimicrobiano' },
    { id: 'm5', nome: 'Enxaguante' }
  ], corretos: ['m1','m2','m4'] },
  competencias: [8,8,8,9,9,8,8,8]
},
{
  id: 'AG-27', titulo: 'Consulta de emergência dental',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 3, tempo: 2,
  contexto: 'Atendimento urgente para dor, trauma ou infecção.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'tipo_emergencia', label: 'Tipo de emergência?', obrigatorio: true },
    { chave: 'duracao', label: 'Há quanto tempo?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório de Emergência', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['07:00','08:00','11:00','12:00','17:00','18:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Anestésico potente' },
    { id: 'm2', nome: 'Dique de borracha' },
    { id: 'm3', nome: 'Cimento temporário' },
    { id: 'm4', nome: 'Analgésicos' },
    { id: 'm5', nome: 'Antibióticos' },
    { id: 'm6', nome: 'Gaze estéril' }
  ], corretos: ['m1','m2','m3','m4'] },
  competencias: [9,9,9,9,9,8,9,9]
},
{
  id: 'AG-28', titulo: 'Avaliação pós-trauma dentário',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Avaliação completa pós-trauma com testes de vitalidade.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'quando_trauma', label: 'Quando foi o trauma?', obrigatorio: true },
    { chave: 'tipo_trauma', label: 'Tipo de trauma?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['09:00','10:00','14:00','15:00','16:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Teste de vitalidade térmica' },
    { id: 'm2', nome: 'Teste de percussão' },
    { id: 'm3', nome: 'Radiografia periapical' },
    { id: 'm4', nome: 'Escala de mobilidade' },
    { id: 'm5', nome: 'Documentação fotográfica' }
  ], corretos: ['m1','m2','m3','m4','m5'] },
  competencias: [8,8,8,8,8,8,8,8]
},
{
  id: 'AG-29', titulo: 'Frenectomia',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Cirurgia para remoção de freio labial ou lingual.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'qual_freio', label: 'Qual freio?', obrigatorio: true },
    { chave: 'motivo', label: 'Motivo da cirurgia?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório Cirúrgico', dias: ['segunda','quarta','quinta'], horarios: ['08:00','09:00','14:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Bisturi fino' },
    { id: 'm2', nome: 'Tesoura de Metzenbaum' },
    { id: 'm3', nome: 'Sutura reabsorvível' },
    { id: 'm4', nome: 'Cauterizador' },
    { id: 'm5', nome: 'Pinça de dissecção' }
  ], corretos: ['m1','m2','m3','m5'] },
  competencias: [8,9,8,9,9,8,8,9]
},
{
  id: 'AG-30', titulo: 'Higienização de aparelho removível',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 1, tempo: 1,
  contexto: 'Orientação de paciente sobre limpeza de prótese removível.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'tempo_uso', label: 'Há quanto tempo usa prótese?', obrigatorio: true },
    { chave: 'dificuldades', label: 'Tem dificuldades na limpeza?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','10:00','14:00','15:00','16:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Solução efervescente' },
    { id: 'm2', nome: 'Escova macia' },
    { id: 'm3', nome: 'Água morna' },
    { id: 'm4', nome: 'Sabão neutro' },
    { id: 'm5', nome: 'Recipiente para imersão' }
  ], corretos: ['m1','m2','m4'] },
  competencias: [8,6,7,8,7,8,7,8]
},
{
  id: 'AG-31', titulo: 'Fluorose dental - avaliação',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 1, tempo: 1,
  contexto: 'Criança com manchas em dentes. Diagnóstico de fluorose.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome da criança', obrigatorio: true },
    { chave: 'idade', label: 'Idade', obrigatorio: true },
    { chave: 'historia_fluorose', label: 'História de exposição ao flúor?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório Pediátrico', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['09:00','10:00','15:00','16:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Índice de fluorose de Dean' },
    { id: 'm2', nome: 'Câmera fotográfica' },
    { id: 'm3', nome: 'Luz LED' },
    { id: 'm4', nome: 'Teste de vitalidade' },
    { id: 'm5', nome: 'Espelho' }
  ], corretos: ['m1','m2','m3'] },
  competencias: [8,7,7,8,7,8,7,8]
},
{
  id: 'AG-32', titulo: 'Controle de biofilme em criança',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 1, tempo: 1,
  contexto: 'Criança com acúmulo de biofilme. Orientação de higiene lúdica.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome da criança', obrigatorio: true },
    { chave: 'idade', label: 'Idade', obrigatorio: true },
    { chave: 'freq_escova', label: 'Frequência de escovação?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório Pediátrico', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['10:00','11:00','15:00','16:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Revelador de biofilme' },
    { id: 'm2', nome: 'Escova de dentes colorida' },
    { id: 'm3', nome: 'Fio dental infantil' },
    { id: 'm4', nome: 'Pasta de dente com flúor' },
    { id: 'm5', nome: 'Material didático' }
  ], corretos: ['m1','m2','m3','m4','m5'] },
  competencias: [9,6,7,8,8,8,7,8]
},
{
  id: 'AG-33', titulo: 'Avaliação de oclusão',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Avaliação completa da oclusão em criança em desenvolvimento.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome da criança', obrigatorio: true },
    { chave: 'idade', label: 'Idade', obrigatorio: true },
    { chave: 'queixa', label: 'Queixa principal?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório Pediátrico', dias: ['segunda','quarta','quinta','sexta'], horarios: ['09:00','10:00','14:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Papel carbono' },
    { id: 'm2', nome: 'Espelho intraoral' },
    { id: 'm3', nome: 'Sonda exploradora' },
    { id: 'm4', nome: 'Arco facial' },
    { id: 'm5', nome: 'Radiografia panorâmica' }
  ], corretos: ['m1','m2','m3','m5'] },
  competencias: [8,8,8,8,8,8,8,8]
},
{
  id: 'AG-34', titulo: 'Orientação de paciente ansioso',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente com alta ansiedade. Necessita acolhimento e orientação antes do procedimento.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'nivel_ansiedade', label: 'Nível de ansiedade (1-10)?', obrigatorio: true },
    { chave: 'experiencia_anterior', label: 'Experiência anterior?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Material didático' },
    { id: 'm2', nome: 'Vídeo educativo' },
    { id: 'm3', nome: 'Música ambiente' },
    { id: 'm4', nome: 'Técnicas de relaxamento' },
    { id: 'm5', nome: 'Anestésico tópico' }
  ], corretos: ['m1','m2','m5'] },
  competencias: [10,7,7,7,7,8,8,9]
},
{
  id: 'AG-35', titulo: 'Acompanhamento de implante',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Avaliação periódica de implante osseointegrado após cirurgia.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'quando_cirurgia', label: 'Quando foi a cirurgia?', obrigatorio: true },
    { chave: 'sintomas', label: 'Tem sintomas?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Cirúrgico', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Radiografia periapical' },
    { id: 'm2', nome: 'Sonda periodontal' },
    { id: 'm3', nome: 'Teste de mobilidade' },
    { id: 'm4', nome: 'Ultrassom avaliativo' },
    { id: 'm5', nome: 'Teste de ressonância' }
  ], corretos: ['m1','m2','m3'] },
  competencias: [8,8,8,9,8,8,7,8]
},
{
  id: 'AG-36', titulo: 'Retratamento endodôntico',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 3, tempo: 3,
  contexto: 'Dente com falha no tratamento anterior. Necessita retratamento.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'qual_dente', label: 'Qual dente?', obrigatorio: true },
    { chave: 'quando_original', label: 'Quando foi o primeiro tratamento?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','14:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Broca endodôntica' },
    { id: 'm2', nome: 'Dique de borracha' },
    { id: 'm3', nome: 'Limas rotatórias' },
    { id: 'm4', nome: 'Hipoclorito de sódio' },
    { id: 'm5', nome: 'Guta-percha' },
    { id: 'm6', nome: 'Selador endodôntico' }
  ], corretos: ['m1','m2','m3','m4','m5','m6'] },
  competencias: [8,9,9,10,9,8,8,9]
},
{
  id: 'AG-37', titulo: 'Avaliação de cárie radicular',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente idoso com recessão gengival e cárie radicular.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'idade', label: 'Idade', obrigatorio: true },
    { chave: 'sensibilidade', label: 'Tem sensibilidade radicular?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Resina de baixa contração' },
    { id: 'm2', nome: 'Adesivo universal' },
    { id: 'm3', nome: 'Dique de borracha' },
    { id: 'm4', nome: 'Cimento de vidro ionomérico' },
    { id: 'm5', nome: 'Gel dessensibilizante' }
  ], corretos: ['m1','m2','m3','m4','m5'] },
  competencias: [8,8,8,8,8,8,8,8]
},
{
  id: 'AG-38', titulo: 'Ajuste de prótese removível',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 1, tempo: 1,
  contexto: 'Ajuste de prótese removível em paciente com desconforto.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'onde_dor', label: 'Onde dói?', obrigatorio: true },
    { chave: 'quando_feita', label: 'Quando foi feita a prótese?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Protético', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['09:00','10:00','14:00','15:00','16:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Pasta marcadora' },
    { id: 'm2', nome: 'Fresa de ajuste' },
    { id: 'm3', nome: 'Disco de polimento' },
    { id: 'm4', nome: 'Pasta de polimento' },
    { id: 'm5', nome: 'Espelho' }
  ], corretos: ['m1','m2','m3','m4'] },
  competencias: [8,7,7,8,7,7,7,8]
},
{
  id: 'AG-39', titulo: 'Fotopolimerização segura',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 1, tempo: 1,
  contexto: 'Restauração com protocolo seguro de fotopolimerização.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'tipo_restauracao', label: 'Tipo de restauração?', obrigatorio: true },
    { chave: 'sensibilidade', label: 'Tem sensibilidade?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','10:00','14:00','15:00','16:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Luz de LED' },
    { id: 'm2', nome: 'Proteção ocular' },
    { id: 'm3', nome: 'Máscara facial' },
    { id: 'm4', nome: 'Ponta com filtro' },
    { id: 'm5', nome: 'Manejo de tempo' }
  ], corretos: ['m1','m2','m4'] },
  competencias: [8,7,7,8,8,8,8,8]
},
{
  id: 'AG-40', titulo: 'Reparação de fratura de resina',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 1, tempo: 1,
  contexto: 'Reparação de restauração de resina com fratura marginal.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'qual_dente', label: 'Qual dente?', obrigatorio: true },
    { chave: 'tipo_fratura', label: 'Tipo de fratura?', obrigatorio: true }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','10:00','14:00','15:00','16:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Resina composta' },
    { id: 'm2', nome: 'Adesivo' },
    { id: 'm3', nome: 'Ácido fosfórico' },
    { id: 'm4', nome: 'Matriz de contorno' },
    { id: 'm5', nome: 'Luz de LED' },
    { id: 'm6', nome: 'Discos de polimento' }
  ], corretos: ['m1','m2','m3','m5','m6'] },
  competencias: [8,8,8,8,8,7,7,8]
},

/* MATERIAIS (40 cenários) - Seleção de recursos terapêuticos */

{
  id: 'MAT-01', titulo: 'Seleção de luvas para procedimento', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 1, descricao: 'Escolha de equipamento de proteção',
  contexto: 'Seleção de luvas adequadas para limpeza profissional',
  opcoes: [
    { id: 'm1', nome: 'Luvas de nitrila sem pó', correto: true },
    { id: 'm2', nome: 'Luvas de borracha natural', correto: true },
    { id: 'm3', nome: 'Luvas de vinil', correto: false },
    { id: 'm4', nome: 'Luvas de couro', correto: false },
    { id: 'm5', nome: 'Luvas de algodão', correto: false },
    { id: 'm6', nome: 'Sem luvas', correto: false }
  ],
  competencias: [8,7,8,7,8,8,7,8],
  pontuacao_base: 100
},
{
  id: 'MAT-02', titulo: 'Isolamento do campo operatório', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Técnica de isolamento para restauração',
  contexto: 'Isolamento adequado para restauração anterior com resina',
  opcoes: [
    { id: 'm1', nome: 'Dique de borracha', correto: true },
    { id: 'm2', nome: 'Gaze absorvente', correto: true },
    { id: 'm3', nome: 'Plástico transparente', correto: false },
    { id: 'm4', nome: 'Papel alumínio', correto: false },
    { id: 'm5', nome: 'Pano de algodão', correto: false },
    { id: 'm6', nome: 'Nenhum isolamento', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-03', titulo: 'Anestésicos tópicos', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Preparação para injeção anestésica',
  contexto: 'Redução do desconforto antes da aplicação de anestésico',
  opcoes: [
    { id: 'm1', nome: 'Benzocaína gel 20%', correto: true },
    { id: 'm2', nome: 'Prilocaína spray', correto: true },
    { id: 'm3', nome: 'Xilocaína 2%', correto: false },
    { id: 'm4', nome: 'Álcool 70%', correto: false },
    { id: 'm5', nome: 'Água filtrada', correto: false },
    { id: 'm6', nome: 'Óleo essencial', correto: false }
  ],
  competencias: [7,8,7,8,8,8,7,8],
  pontuacao_base: 100
},
{
  id: 'MAT-04', titulo: 'Adesivos dentários', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Seleção de adesivos para restauração',
  contexto: 'Restauração de cárie em superfície com resina',
  opcoes: [
    { id: 'm1', nome: 'Adesivo universal', correto: true },
    { id: 'm2', nome: 'Primer', correto: true },
    { id: 'm3', nome: 'Selador de fosseta', correto: false },
    { id: 'm4', nome: 'Clorexidina', correto: false },
    { id: 'm5', nome: 'Álcool puro', correto: false },
    { id: 'm6', nome: 'Peróxido', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-05', titulo: 'Polimentos e pastas', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 1, descricao: 'Acabamento de restauração',
  contexto: 'Polimento final de restauração estética',
  opcoes: [
    { id: 'm1', nome: 'Pasta de polimento baixa abrasividade', correto: true },
    { id: 'm2', nome: 'Disco de polimento', correto: true },
    { id: 'm3', nome: 'Lixa extra grossa', correto: false },
    { id: 'm4', nome: 'Carvão ativado', correto: false },
    { id: 'm5', nome: 'Sal marinho', correto: false },
    { id: 'm6', nome: 'Bicarbonato', correto: false }
  ],
  competencias: [8,7,7,8,7,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-06', titulo: 'Materiais para moldagem', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Seleção para moldagem protética',
  contexto: 'Moldagem preliminar para confecção de prótese removível',
  opcoes: [
    { id: 'm1', nome: 'Alginato', correto: true },
    { id: 'm2', nome: 'Bandeja de moldagem', correto: true },
    { id: 'm3', nome: 'Pasta de modeling', correto: false },
    { id: 'm4', nome: 'Siliconado', correto: false },
    { id: 'm5', nome: 'Gesso', correto: false },
    { id: 'm6', nome: 'Parafina', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-07', titulo: 'Instrumentos de diagnóstico', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 1, descricao: 'Avaliação clínica',
  contexto: 'Avaliação de mobilidade dentária',
  opcoes: [
    { id: 'm1', nome: 'Sonda periapical', correto: true },
    { id: 'm2', nome: 'Teste de mobilidade', correto: true },
    { id: 'm3', nome: 'Espelho não-ótico', correto: false },
    { id: 'm4', nome: 'Compasso de ponta seca', correto: false },
    { id: 'm5', nome: 'Régua flexível', correto: false },
    { id: 'm6', nome: 'Fita métrica', correto: false }
  ],
  competencias: [8,7,8,7,7,8,7,8],
  pontuacao_base: 100
},
{
  id: 'MAT-08', titulo: 'Fluoração tópica', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 1, descricao: 'Prevenção de cárie',
  contexto: 'Aplicação de flúor para prevenção',
  opcoes: [
    { id: 'm1', nome: 'Verniz de flúor 22000 ppm', correto: true },
    { id: 'm2', nome: 'Gel fluoretado', correto: true },
    { id: 'm3', nome: 'Água com flúor', correto: false },
    { id: 'm4', nome: 'Pasta com flúor', correto: false },
    { id: 'm5', nome: 'Óleo de coco', correto: false },
    { id: 'm6', nome: 'Mel puro', correto: false }
  ],
  competencias: [8,7,7,7,8,8,7,8],
  pontuacao_base: 100
},
{
  id: 'MAT-09', titulo: 'Desinfecção de superfícies', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Protocolo de biossegurança',
  contexto: 'Desinfecção de superfícies clínicas',
  opcoes: [
    { id: 'm1', nome: 'Álcool 70%', correto: true },
    { id: 'm2', nome: 'Clorexidina 0,12%', correto: true },
    { id: 'm3', nome: 'Água destilada', correto: false },
    { id: 'm4', nome: 'Soro fisiológico', correto: false },
    { id: 'm5', nome: 'Leite integral', correto: false },
    { id: 'm6', nome: 'Vinagre branco', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-10', titulo: 'Fio dental e higiene', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 1, descricao: 'Higiene proximal',
  contexto: 'Orientação de higiene oral ao paciente',
  opcoes: [
    { id: 'm1', nome: 'Fio dental 50m', correto: true },
    { id: 'm2', nome: 'Fita de seda encerada', correto: true },
    { id: 'm3', nome: 'Barbante', correto: false },
    { id: 'm4', nome: 'Corda de nylon', correto: false },
    { id: 'm5', nome: 'Papel higiênico', correto: false },
    { id: 'm6', nome: 'Borracha elástica', correto: false }
  ],
  competencias: [8,7,7,7,7,8,7,8],
  pontuacao_base: 100
},
{
  id: 'MAT-11', titulo: 'Selantes de fosseta e fissura', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Prevenção em criança',
  contexto: 'Selagem preventiva de fossetas em molares permanentes',
  opcoes: [
    { id: 'm1', nome: 'Selante resinoso fotopolimerizável', correto: true },
    { id: 'm2', nome: 'Ácido fosfórico 37%', correto: true },
    { id: 'm3', nome: 'Cimento de vidro ionômero', correto: false },
    { id: 'm4', nome: 'Resina temporária', correto: false },
    { id: 'm5', nome: 'Cera de abelha', correto: false },
    { id: 'm6', nome: 'Parafina', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-12', titulo: 'Clareamento caseiro seguro', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Acompanhamento de clareamento',
  contexto: 'Prescrição de clareamento seguro para casa',
  opcoes: [
    { id: 'm1', nome: 'Moldeira térmica', correto: true },
    { id: 'm2', nome: 'Gel clareador 10%', correto: true },
    { id: 'm3', nome: 'Água sanitária', correto: false },
    { id: 'm4', nome: 'Bleach comercial', correto: false },
    { id: 'm5', nome: 'Carvão ativado', correto: false },
    { id: 'm6', nome: 'Peróxido 30%', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-13', titulo: 'Retração gengival para moldagem', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Preparo de coroa protética',
  contexto: 'Técnica de retração para moldagem de coroa',
  opcoes: [
    { id: 'm1', nome: 'Fio de retração de algodão', correto: true },
    { id: 'm2', nome: 'Clorexidina gel', correto: true },
    { id: 'm3', nome: 'Fio de nylon', correto: false },
    { id: 'm4', nome: 'Barbante comum', correto: false },
    { id: 'm5', nome: 'Papel absorvente', correto: false },
    { id: 'm6', nome: 'Tecido sintético', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-14', titulo: 'Cimentos provisórios', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Proteção de preparo',
  contexto: 'Cimentação provisória com removibilidade',
  opcoes: [
    { id: 'm1', nome: 'Óxido de zinco sem eugenol', correto: true },
    { id: 'm2', nome: 'Cimento de vidro ionômero', correto: true },
    { id: 'm3', nome: 'Cimento resinoso forte', correto: false },
    { id: 'm4', nome: 'Argamassa', correto: false },
    { id: 'm5', nome: 'Gesso', correto: false },
    { id: 'm6', nome: 'Pasta de dente', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-15', titulo: 'Teste de vitalidade', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Diagnóstico endodôntico',
  contexto: 'Teste de vitalidade pulpar',
  opcoes: [
    { id: 'm1', nome: 'Teste térmico com gelo', correto: true },
    { id: 'm2', nome: 'Teste elétrico', correto: true },
    { id: 'm3', nome: 'Fogo direto', correto: false },
    { id: 'm4', nome: 'Água quente pura', correto: false },
    { id: 'm5', nome: 'Ar comprimido forte', correto: false },
    { id: 'm6', nome: 'Ácido cítrico puro', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-16', titulo: 'Dique de borracha tipos', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 1, descricao: 'Isolamento do campo',
  contexto: 'Isolamento adequado com dique de borracha',
  opcoes: [
    { id: 'm1', nome: 'Dique fino para isolamento rápido', correto: true },
    { id: 'm2', nome: 'Grampos de retenção', correto: true },
    { id: 'm3', nome: 'Fita adesiva dupla face', correto: false },
    { id: 'm4', nome: 'Elástico comum', correto: false },
    { id: 'm5', nome: 'Prendedores de roupa', correto: false },
    { id: 'm6', nome: 'Pasta blu-tack', correto: false }
  ],
  competencias: [8,7,7,7,7,8,7,8],
  pontuacao_base: 100
},
{
  id: 'MAT-17', titulo: 'Materiais para gengivite', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 1, descricao: 'Tratamento de inflamação gengival',
  contexto: 'Tratamento de gengivite leve',
  opcoes: [
    { id: 'm1', nome: 'Clorexidina gel', correto: true },
    { id: 'm2', nome: 'Escova macia', correto: true },
    { id: 'm3', nome: 'Sal para bochechar', correto: false },
    { id: 'm4', nome: 'Limão puro', correto: false },
    { id: 'm5', nome: 'Álcool puro', correto: false },
    { id: 'm6', nome: 'Água com mel', correto: false }
  ],
  competencias: [8,7,7,8,8,8,7,8],
  pontuacao_base: 100
},
{
  id: 'MAT-18', titulo: 'Radioproteção adequada', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Segurança durante radiografia',
  contexto: 'Proteção durante radiografia intraoral',
  opcoes: [
    { id: 'm1', nome: 'Avental de chumbo', correto: true },
    { id: 'm2', nome: 'Protetor de tireóide', correto: true },
    { id: 'm3', nome: 'Máscara de pano', correto: false },
    { id: 'm4', nome: 'Luva de borracha', correto: false },
    { id: 'm5', nome: 'Papel alumínio', correto: false },
    { id: 'm6', nome: 'Plástico comum', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-19', titulo: 'Revelador de biofilme', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 1, descricao: 'Motivação de higiene',
  contexto: 'Visualização de biofilme para motivação',
  opcoes: [
    { id: 'm1', nome: 'Solução de fuccina básica', correto: true },
    { id: 'm2', nome: 'Pigmento alimentar', correto: true },
    { id: 'm3', nome: 'Tinta nanquim', correto: false },
    { id: 'm4', nome: 'Café preto', correto: false },
    { id: 'm5', nome: 'Beterraba ralada', correto: false },
    { id: 'm6', nome: 'Açafrão', correto: false }
  ],
  competencias: [8,7,7,7,7,8,7,8],
  pontuacao_base: 100
},
{
  id: 'MAT-20', titulo: 'Curetas periodontais', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Raspagem subgengival',
  contexto: 'Instrumentos para raspagem periodontal',
  opcoes: [
    { id: 'm1', nome: 'Cureta de Gracey específica', correto: true },
    { id: 'm2', nome: 'Escaler ultrassônico', correto: true },
    { id: 'm3', nome: 'Faca de manteiga', correto: false },
    { id: 'm4', nome: 'Raspador de metal', correto: false },
    { id: 'm5', nome: 'Vidro quebrado', correto: false },
    { id: 'm6', nome: 'Tesoura dentária', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-21', titulo: 'Resinas compostas', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Restauração anterior',
  contexto: 'Seleção de resina para restauração estética',
  opcoes: [
    { id: 'm1', nome: 'Resina microparticulada', correto: true },
    { id: 'm2', nome: 'Resina bulk-fill', correto: true },
    { id: 'm3', nome: 'Cimento de vidro ionômero', correto: false },
    { id: 'm4', nome: 'Amálgama', correto: false },
    { id: 'm5', nome: 'Chocolate derretido', correto: false },
    { id: 'm6', nome: 'Gesso', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-22', titulo: 'Fotopolimerizadores', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 1, descricao: 'Protocolo seguro de ativação',
  contexto: 'Uso seguro de luz LED',
  opcoes: [
    { id: 'm1', nome: 'LED azul 450-490nm', correto: true },
    { id: 'm2', nome: 'Proteção ocular para paciente', correto: true },
    { id: 'm3', nome: 'Halógeno sem filtro', correto: false },
    { id: 'm4', nome: 'Radiação UV pura', correto: false },
    { id: 'm5', nome: 'Luz vermelha', correto: false },
    { id: 'm6', nome: 'Luz infravermelha', correto: false }
  ],
  competencias: [8,7,8,7,8,8,7,8],
  pontuacao_base: 100
},
{
  id: 'MAT-23', titulo: 'Matriz de contorno', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Restauração interproximal',
  contexto: 'Contorno interproximal adequado',
  opcoes: [
    { id: 'm1', nome: 'Matriz de acetato', correto: true },
    { id: 'm2', nome: 'Cunha de madeira', correto: true },
    { id: 'm3', nome: 'Fita adesiva', correto: false },
    { id: 'm4', nome: 'Linha de pesca', correto: false },
    { id: 'm5', nome: 'Barbante', correto: false },
    { id: 'm6', nome: 'Elástico comum', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-24', titulo: 'Anestésicos locais adequados', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Injeção anestésica segura',
  contexto: 'Seleção segura de anestésico',
  opcoes: [
    { id: 'm1', nome: 'Lidocaína 2% com epinefrina', correto: true },
    { id: 'm2', nome: 'Agulha 30x20', correto: true },
    { id: 'm3', nome: 'Lidocaína pura', correto: false },
    { id: 'm4', nome: 'Ácido acético', correto: false },
    { id: 'm5', nome: 'Água destilada', correto: false },
    { id: 'm6', nome: 'Soro fisiológico', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-25', titulo: 'Instrumentos rotatórios', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 1, descricao: 'Preparação de cavidade',
  contexto: 'Seleção de brocas para preparo',
  opcoes: [
    { id: 'm1', nome: 'Broca esférica #10', correto: true },
    { id: 'm2', nome: 'Broca cônica para margem', correto: true },
    { id: 'm3', nome: 'Broca carbide grossa', correto: false },
    { id: 'm4', nome: 'Fresa de diamante grossa', correto: false },
    { id: 'm5', nome: 'Tesoura dentária', correto: false },
    { id: 'm6', nome: 'Faca comum', correto: false }
  ],
  competencias: [8,7,8,7,8,8,7,8],
  pontuacao_base: 100
},
{
  id: 'MAT-26', titulo: 'Fio ortodôntico', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Remoção de aparelho',
  contexto: 'Remoção segura de aparelho fixo',
  opcoes: [
    { id: 'm1', nome: 'Fio de nylon transparente', correto: true },
    { id: 'm2', nome: 'Alicate para decodagem', correto: true },
    { id: 'm3', nome: 'Barbante comum', correto: false },
    { id: 'm4', nome: 'Elástico grosso', correto: false },
    { id: 'm5', nome: 'Mola helicoidal', correto: false },
    { id: 'm6', nome: 'Corda sintética', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-27', titulo: 'Higienizadores de implante', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Manutenção pós-operatória',
  contexto: 'Limpeza segura de implante',
  opcoes: [
    { id: 'm1', nome: 'Ultrassom para implante', correto: true },
    { id: 'm2', nome: 'Cureta plástica', correto: true },
    { id: 'm3', nome: 'Escaler metálico direto', correto: false },
    { id: 'm4', nome: 'Lixa abrasiva', correto: false },
    { id: 'm5', nome: 'Palha de aço', correto: false },
    { id: 'm6', nome: 'Escova de aço', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-28', titulo: 'Barreira gengival clareadora', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 1, descricao: 'Proteção de tecido mole',
  contexto: 'Proteção durante clareamento',
  opcoes: [
    { id: 'm1', nome: 'Barreira de borracha/silicone', correto: true },
    { id: 'm2', nome: 'Vaselina', correto: true },
    { id: 'm3', nome: 'Azeite puro', correto: false },
    { id: 'm4', nome: 'Manteiga', correto: false },
    { id: 'm5', nome: 'Óleo mineral', correto: false },
    { id: 'm6', nome: 'Álcool desnaturado', correto: false }
  ],
  competencias: [8,7,7,8,7,8,7,8],
  pontuacao_base: 100
},
{
  id: 'MAT-29', titulo: 'Radiografias periapicais', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Diagnóstico de cárie',
  contexto: 'Técnica radiográfica adequada',
  opcoes: [
    { id: 'm1', nome: 'Filme periapical tamanho 1', correto: true },
    { id: 'm2', nome: 'Posicionador de acrílico', correto: true },
    { id: 'm3', nome: 'Filme oclusal', correto: false },
    { id: 'm4', nome: 'Bobina de algodão', correto: false },
    { id: 'm5', nome: 'Papel comum', correto: false },
    { id: 'm6', nome: 'Vidro sem tratamento', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-30', titulo: 'Selador endodôntico', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Obturação após instrumentação',
  contexto: 'Obturação de canal radicular',
  opcoes: [
    { id: 'm1', nome: 'Guta-percha', correto: true },
    { id: 'm2', nome: 'Cimento à base hidróxido cálcio', correto: true },
    { id: 'm3', nome: 'Cimento de vidro ionômero', correto: false },
    { id: 'm4', nome: 'Resina epóxi', correto: false },
    { id: 'm5', nome: 'Argila', correto: false },
    { id: 'm6', nome: 'Barro comum', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-31', titulo: 'Luzes de fotoativação segura', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 1, descricao: 'Cura de resinas',
  contexto: 'Protocolo seguro de fotoativação',
  opcoes: [
    { id: 'm1', nome: 'LED 405-490nm', correto: true },
    { id: 'm2', nome: 'Intensidade maior 500mW/cm2', correto: true },
    { id: 'm3', nome: 'Lâmpada incandescente', correto: false },
    { id: 'm4', nome: 'Vela acesa', correto: false },
    { id: 'm5', nome: 'Raios solares diretos', correto: false },
    { id: 'm6', nome: 'Fogo aberto', correto: false }
  ],
  competencias: [8,7,7,8,8,8,7,8],
  pontuacao_base: 100
},
{
  id: 'MAT-32', titulo: 'Hipoclorito de sódio', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Limpeza do canal radicular',
  contexto: 'Irrigação durante tratamento endodôntico',
  opcoes: [
    { id: 'm1', nome: 'Concentração 1-5,25%', correto: true },
    { id: 'm2', nome: 'Agulha curva irrigação', correto: true },
    { id: 'm3', nome: 'Água sanitária pura 100%', correto: false },
    { id: 'm4', nome: 'Cloro gasoso', correto: false },
    { id: 'm5', nome: 'Água com sal', correto: false },
    { id: 'm6', nome: 'Álcool puro', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-33', titulo: 'Prótese removível limpeza', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 1, descricao: 'Instrução ao paciente',
  contexto: 'Higiene de prótese removível',
  opcoes: [
    { id: 'm1', nome: 'Solução efervescente', correto: true },
    { id: 'm2', nome: 'Escova macia específica', correto: true },
    { id: 'm3', nome: 'Água muito quente fervendo', correto: false },
    { id: 'm4', nome: 'Lixívia comercial', correto: false },
    { id: 'm5', nome: 'Soda cáustica', correto: false },
    { id: 'm6', nome: 'Gasolina', correto: false }
  ],
  competencias: [8,7,7,8,7,8,7,8],
  pontuacao_base: 100
},
{
  id: 'MAT-34', titulo: 'Teste de sensibilidade adequado', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Avaliação de neuropatia',
  contexto: 'Teste de sensibilidade dentária',
  opcoes: [
    { id: 'm1', nome: 'Teste com gelo', correto: true },
    { id: 'm2', nome: 'Teste com explorador frio', correto: true },
    { id: 'm3', nome: 'Fogo direto', correto: false },
    { id: 'm4', nome: 'Ar muito quente', correto: false },
    { id: 'm5', nome: 'Eletricidade alta voltagem', correto: false },
    { id: 'm6', nome: 'Sal puro na língua', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-35', titulo: 'Limpeza desinfecção prótese', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 1, descricao: 'Prevenção de candidíase',
  contexto: 'Higiene adequada de prótese removível',
  opcoes: [
    { id: 'm1', nome: 'Solução efervescente', correto: true },
    { id: 'm2', nome: 'Escova macia específica', correto: true },
    { id: 'm3', nome: 'Água extremamente quente', correto: false },
    { id: 'm4', nome: 'Lixívia diluída', correto: false },
    { id: 'm5', nome: 'Álcool 95%', correto: false },
    { id: 'm6', nome: 'Gasolina', correto: false }
  ],
  competencias: [8,7,7,8,7,8,7,8],
  pontuacao_base: 100
},
{
  id: 'MAT-36', titulo: 'Cimento provisório segurança', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Preparação com removibilidade',
  contexto: 'Cimentação provisória adequada',
  opcoes: [
    { id: 'm1', nome: 'Óxido de zinco sem eugenol', correto: true },
    { id: 'm2', nome: 'Cimento vidro ionômero modificado', correto: true },
    { id: 'm3', nome: 'Cimento resinoso dual forte', correto: false },
    { id: 'm4', nome: 'Pasta hidróxido cálcio', correto: false },
    { id: 'm5', nome: 'Epóxi bicomponente', correto: false },
    { id: 'm6', nome: 'Silicone acetona', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-37', titulo: 'Osseointegração acompanhamento', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Avaliação pós-implante',
  contexto: 'Controle periódico de implante',
  opcoes: [
    { id: 'm1', nome: 'Radiografia densidade óssea', correto: true },
    { id: 'm2', nome: 'Teste de mobilidade clínica', correto: true },
    { id: 'm3', nome: 'Sonda periodontal implante', correto: false },
    { id: 'm4', nome: 'Câmera termográfica', correto: false },
    { id: 'm5', nome: 'Ultrassom avaliativo', correto: false },
    { id: 'm6', nome: 'Teste ressonância frequência', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-38', titulo: 'Teste de sensibilidade dentária', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Diagnóstico hipersensibilidade',
  contexto: 'Avaliação de sensibilidade',
  opcoes: [
    { id: 'm1', nome: 'Teste com ar comprimido', correto: true },
    { id: 'm2', nome: 'Teste explorador não aquecido', correto: true },
    { id: 'm3', nome: 'Teste água quente', correto: false },
    { id: 'm4', nome: 'Teste álcool', correto: false },
    { id: 'm5', nome: 'Teste limão fresco', correto: false },
    { id: 'm6', nome: 'Teste sal cristalino', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
},
{
  id: 'MAT-39', titulo: 'Isolamento com tira teflon', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 1, descricao: 'Proteção de papila',
  contexto: 'Isolamento interproximal adequado',
  opcoes: [
    { id: 'm1', nome: 'Tira teflon matriz', correto: true },
    { id: 'm2', nome: 'Cunha triangular madeira', correto: true },
    { id: 'm3', nome: 'Fita adesiva dupla face', correto: false },
    { id: 'm4', nome: 'Borracha elástica', correto: false },
    { id: 'm5', nome: 'Mola helicoidal', correto: false },
    { id: 'm6', nome: 'Arame dentário', correto: false }
  ],
  competencias: [8,7,7,8,7,8,7,8],
  pontuacao_base: 100
},
{
  id: 'MAT-40', titulo: 'Proteção dentes com fórceps', tipo: 'materiais', modalidade: 'materiais',
  complexidade: 2, descricao: 'Extração com proteção',
  contexto: 'Extração dentária com proteção',
  opcoes: [
    { id: 'm1', nome: 'Protetor cera/borracha dentes', correto: true },
    { id: 'm2', nome: 'Gaze proteção lábios/mucosa', correto: true },
    { id: 'm3', nome: 'Fórceps revestimento suave', correto: false },
    { id: 'm4', nome: 'Dique borracha durante extração', correto: false },
    { id: 'm5', nome: 'Luva dupla melhor aderência', correto: false },
    { id: 'm6', nome: 'Aspirador ativo permanente', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8],
  pontuacao_base: 100
}
];

