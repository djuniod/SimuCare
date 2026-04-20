/* ============================================================
   SimuCare — Cenários Consolidados (Abril 2026)
   ============================================================
   150 cenários totais:
   - 60 cenários de Agendamento (AG-01 a AG-60)
     20 existentes + 40 novos com especialidades diversas
     3 etapas cada: dados do paciente → agendamento → seleção de materiais
   - 40 cenários de Seleção de Materiais (MAT-01 a MAT-40)
   - 40 casos clínicos com Múltipla Escolha (CC-01 a CC-40)
     Questões diagnósticas e de planejamento

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
},
{
  id: 'AG-41', titulo: 'Sondagem periodontal em paciente com gengivite',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente com inflamação gengival, sangramento ao passar fio dental. Necessário fazer sondagem periodontal para avaliar profundidade de bolsas.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'tempo_sintomas', label: 'Há quanto tempo tem sangramento?', obrigatorio: true },
    { chave: 'fumante', label: 'É fumante?', obrigatorio: true },
    { chave: 'dieta', label: 'Tem dificuldade em higienizar?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório B', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['09:00','10:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Sonda periodontal' },
    { id: 'm2', nome: 'Espelho intraoral' },
    { id: 'm3', nome: 'Explorador' },
    { id: 'm4', nome: 'Luvas de nitrila' },
    { id: 'm5', nome: 'Máscara cirúrgica' },
    { id: 'm6', nome: 'Gaze estéril' },
    { id: 'm7', nome: 'Clorexidina 0.12%' },
    { id: 'm8', nome: 'Seringa de irrigação' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8'] },
  area: 'Periodontia',
  competencias: [8,7,8,8,7,7,8,7]
},
{
  id: 'AG-42', titulo: 'Avaliação de osseointegração após 4 meses',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 3, tempo: 3,
  contexto: 'Paciente com implante colocado há 4 meses. Necessário avaliar estabilidade e planejar próxima etapa (moldagem ou carga).',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'data_implante', label: 'Data da colocação do implante', obrigatorio: true },
    { chave: 'mobilidade_percebida', label: 'Paciente sente movimento?', obrigatorio: true },
    { chave: 'dor', label: 'Tem dor na região?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Implantologia', dias: ['segunda','terça','quarta','quinta'], horarios: ['09:00','10:00','11:00','13:00','14:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Teste de percussão (martelo)' },
    { id: 'm2', nome: 'Radiografia periapical' },
    { id: 'm3', nome: 'Sonda periodontal' },
    { id: 'm4', nome: 'Espelho intraoral' },
    { id: 'm5', nome: 'Luvas de nitrila' },
    { id: 'm6', nome: 'Anestésico tópico' },
    { id: 'm7', nome: 'Gaze estéril' },
    { id: 'm8', nome: 'Pinça' },
    { id: 'm9', nome: 'Cuba de metal' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8'] },
  area: 'Implantologia',
  competencias: [9,8,9,9,8,8,9,8]
},
{
  id: 'AG-43', titulo: 'Tratamento endodôntico em molar inferior',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 3, tempo: 3,
  contexto: 'Paciente com cárie profunda em molar inferior, teste de vitalidade positivo, necessário tratamento de canal.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'qual_dente', label: 'Qual dente?', obrigatorio: true },
    { chave: 'dor_espontanea', label: 'Tem dor espontânea?', obrigatorio: true },
    { chave: 'tempo_dor', label: 'Há quanto tempo sente dor?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Endodontia', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','13:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Dique de borracha' },
    { id: 'm2', nome: 'Clamp e arco de borracha' },
    { id: 'm3', nome: 'Brocas de acesso' },
    { id: 'm4', nome: 'Limas endodônticas' },
    { id: 'm5', nome: 'Localizador apical eletrônico' },
    { id: 'm6', nome: 'Hipoclorito de sódio' },
    { id: 'm7', nome: 'Guta-percha' },
    { id: 'm8', nome: 'Cimento obturador' },
    { id: 'm9', nome: 'Anestésico' },
    { id: 'm10', nome: 'Seringa carpule' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8','m9'] },
  area: 'Endodontia',
  competencias: [9,9,9,9,9,8,8,9]
},
{
  id: 'AG-44', titulo: 'Ortodontia: avaliação cefalométrica e planejamento',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 3, tempo: 3,
  contexto: 'Paciente adolescente com sobremordida, solicita avaliação ortodôntica completa e planejamento de tratamento.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'idade', label: 'Idade', obrigatorio: true },
    { chave: 'problemas_funcionais', label: 'Tem problemas funcionais (mastigação/fala)?', obrigatorio: true },
    { chave: 'expectativa', label: 'Expectativa com tratamento', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Ortodontia', dias: ['segunda','quarta','sexta'], horarios: ['10:00','11:00','14:00','15:00','16:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Radiografia cefalométrica' },
    { id: 'm2', nome: 'Fotografias intraorais' },
    { id: 'm3', nome: 'Modelos de gesso' },
    { id: 'm4', nome: 'Compasso de calibração' },
    { id: 'm5', nome: 'Régua milimetrada' },
    { id: 'm6', nome: 'Paquímetro' },
    { id: 'm7', nome: 'Espelho intraoral' },
    { id: 'm8', nome: 'Software de análise cefalométrica' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8'] },
  area: 'Ortodontia',
  competencias: [8,8,8,9,8,8,8,9]
},
{
  id: 'AG-45', titulo: 'Odontopediatria: restauração com ionômero de vidro',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Criança de 6 anos com cárie em dente decíduo. Restauração com ionômero de vidro para facilitar cooperação.',
  dadosPaciente: { campos: [
    { chave: 'nome_crianca', label: 'Nome da criança', obrigatorio: true },
    { chave: 'idade', label: 'Idade', obrigatorio: true },
    { chave: 'cooperacao', label: 'Nível de cooperação esperado', obrigatorio: true },
    { chave: 'higiene_parental', label: 'Higiene supervisionada pelos pais?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Pediátrico', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','10:00','14:00','15:00','16:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Boca livre pediátrica' },
    { id: 'm2', nome: 'Ionômero de vidro' },
    { id: 'm3', nome: 'Ácido fosfórico 37%' },
    { id: 'm4', nome: 'Primer/adesivo' },
    { id: 'm5', nome: 'Espelho infantil' },
    { id: 'm6', nome: 'Sugador pediátrico' },
    { id: 'm7', nome: 'Anestésico tópico' },
    { id: 'm8', nome: 'Matriz tiras Mylar' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8'] },
  area: 'Odontopediatria',
  competencias: [7,7,8,8,7,8,7,8]
},
{
  id: 'AG-46', titulo: 'Prostodontia: cimentação de prótese fixa',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 3, tempo: 3,
  contexto: 'Prótese parcial fixa (3 unidades) pronta para cimentação em preparos 14-15-16. Necessário cimentação definitiva com cimento autoadesivo.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'quais_dentes', label: 'Quais dentes serão cimentados?', obrigatorio: true },
    { chave: 'sensibilidade_pre', label: 'Tinha sensibilidade antes?', obrigatorio: true },
    { chave: 'tempo_provisorio', label: 'Há quanto tempo com provisório?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['09:00','10:00','14:00','15:00','16:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Prótese fixa' },
    { id: 'm2', nome: 'Cimento autoadesivo' },
    { id: 'm3', nome: 'Remover provisório com instrumento' },
    { id: 'm4', nome: 'Limpeza com escova/pedra pomes' },
    { id: 'm5', nome: 'Anestésico tópico' },
    { id: 'm6', nome: 'Fio de retenção' },
    { id: 'm7', nome: 'Gaze estéril' },
    { id: 'm8', nome: 'Pano de isolamento' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8'] },
  area: 'Prostodontia',
  competencias: [8,8,8,9,8,8,8,8]
},
{
  id: 'AG-47', titulo: 'Clareamento dentário supervisionado com luz LED',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente com manchas intrínsecas nos dentes anteriores. Quer fazer clareamento profissional com técnica de consultório.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'sensibilidade_prvia', label: 'Tem sensibilidade dental?', obrigatorio: true },
    { chave: 'restauracoes', label: 'Tem restaurações nos anteriores?', obrigatorio: true },
    { chave: 'expectativa_tom', label: 'Qual tom deseja?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Estética', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['10:00','11:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Gel clareador peróxido' },
    { id: 'm2', nome: 'Luz LED' },
    { id: 'm3', nome: 'Barreira gengival (dam ou vaselina)' },
    { id: 'm4', nome: 'Espelho intraoral' },
    { id: 'm5', nome: 'Moldeira clareadora' },
    { id: 'm6', nome: 'Escala de cor Vita' },
    { id: 'm7', nome: 'Fotografia inicial' },
    { id: 'm8', nome: 'Fluoreto de sódio 2%' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8'] },
  area: 'Estética',
  competencias: [7,8,7,8,8,7,8,7]
},
{
  id: 'AG-48', titulo: 'Cirurgia oral: extração de dente impactado',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 3, tempo: 3,
  contexto: 'Dente 28 (terceiro molar) impactado horizontalmente. Necessário procedimento cirúrgico com osteotomia para remoção.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'qual_dente', label: 'Qual dente?', obrigatorio: true },
    { chave: 'ja_tentou', label: 'Tentou extração antes?', obrigatorio: true },
    { chave: 'medicacoes', label: 'Usa medicações contínuas?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Centro Cirúrgico', dias: ['segunda','terça','quarta','quinta'], horarios: ['08:00','09:00','10:00','11:00','13:00','14:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Mandril e broca para osteotomia' },
    { id: 'm2', nome: 'Fórceps de extração' },
    { id: 'm3', nome: 'Elevador cirúrgico' },
    { id: 'm4', nome: 'Anestésico local com epinefrina' },
    { id: 'm5', nome: 'Bisturi cirúrgico' },
    { id: 'm6', nome: 'Sutura reabsorvível' },
    { id: 'm7', nome: 'Gaze e compressa' },
    { id: 'm8', nome: 'Antibiótico profilático' },
    { id: 'm9', nome: 'Luvas e máscara cirúrgica' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8','m9'] },
  area: 'Cirurgia Oral',
  competencias: [9,9,9,9,9,8,8,9]
},
{
  id: 'AG-49', titulo: 'Laminado cerâmico: preparação e moldagem',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 3, tempo: 3,
  contexto: 'Paciente com desgaste estético nos dentes anteriores. Quer restauração com laminados cerâmicos. Etapa de preparação dental.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'quais_dentes', label: 'Quais dentes serão tratados?', obrigatorio: true },
    { chave: 'objetivo', label: 'Objetivo principal (cor/formato/comprimento)?', obrigatorio: true },
    { chave: 'historico_bleaching', label: 'Fez clareamento antes?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Estética', dias: ['segunda','quarta','sexta'], horarios: ['10:00','11:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Broca diamantada ponta troncocônica' },
    { id: 'm2', nome: 'Disco diamantado' },
    { id: 'm3', nome: 'Ácido fosfórico 37%' },
    { id: 'm4', nome: 'Primer/adesivo' },
    { id: 'm5', nome: 'Resina de teste de cor' },
    { id: 'm6', nome: 'Moldeira customizada' },
    { id: 'm7', nome: 'Pasta abrasiva de polimento' },
    { id: 'm8', nome: 'Dique de borracha' },
    { id: 'm9', nome: 'Fotografia de cores' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8','m9'] },
  area: 'Estética',
  competencias: [8,8,8,9,8,8,8,9]
},
{
  id: 'AG-50', titulo: 'Acompanhamento pós-colocação de implante (1 semana)',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 1,
  contexto: 'Paciente em acompanhamento pós-operatório após colocação de implante 1 semana atrás. Avaliação de cicatrização e higiene.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'qual_dente', label: 'Qual região foi implantada?', obrigatorio: true },
    { chave: 'inchaço_presente', label: 'Tem inchaço?', obrigatorio: true },
    { chave: 'dor_escala', label: 'Nível de dor (0-10)', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Implantologia', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['09:00','10:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Espelho intraoral' },
    { id: 'm2', nome: 'Sonda periodontal' },
    { id: 'm3', nome: 'Anestésico tópico' },
    { id: 'm4', nome: 'Gaze estéril' },
    { id: 'm5', nome: 'Solução fisiológica' },
    { id: 'm6', nome: 'Clorexidina 0.12%' },
    { id: 'm7', nome: 'Antibiótico tópico' },
    { id: 'm8', nome: 'Talisman (para coágulo)' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7'] },
  area: 'Implantologia',
  competencias: [7,7,8,7,8,7,7,7]
},
{
  id: 'AG-51', titulo: 'Retratamento endodôntico com visualização microscópica',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 3, tempo: 3,
  contexto: 'Dente 11 com insucesso de tratamento anterior. Paciente com dor periapical. Necessário retratamento com microscópio.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'qual_dente', label: 'Qual dente?', obrigatorio: true },
    { chave: 'tempo_tratamento_anterior', label: 'Há quanto tempo foi o tratamento anterior?', obrigatorio: true },
    { chave: 'radiografia_disponivel', label: 'Tem radiografia anterior?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Endodontia', dias: ['segunda','terça','quarta','quinta'], horarios: ['08:00','09:00','13:00','14:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Microscópio operatório' },
    { id: 'm2', nome: 'Ponta ultrassônica' },
    { id: 'm3', nome: 'Limas endodônticas pós' },
    { id: 'm4', nome: 'Localizador apical eletrônico' },
    { id: 'm5', nome: 'Hipoclorito de sódio' },
    { id: 'm6', nome: 'Guta-percha nova' },
    { id: 'm7', nome: 'Cimento obturador' },
    { id: 'm8', nome: 'Dique de borracha' },
    { id: 'm9', nome: 'Anestésico' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8','m9'] },
  area: 'Endodontia',
  competencias: [9,9,9,9,9,8,8,9]
},
{
  id: 'AG-52', titulo: 'Periodontia: raspagem e alisamento radicular',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente com periodontite generalizada (bolsas de 5-7 mm). Primeira etapa: raspagem e alisamento radicular com anestesia local.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'quais_areas', label: 'Quais áreas afetadas?', obrigatorio: true },
    { chave: 'risco_cardiovascular', label: 'Tem fatores de risco cardiovascular?', obrigatorio: true },
    { chave: 'medicacao_anticoagulante', label: 'Usa anticoagulante?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório B', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['09:00','10:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Curetas periodontais' },
    { id: 'm2', nome: 'Sonda periodontal' },
    { id: 'm3', nome: 'Anestésico local com epinefrina' },
    { id: 'm4', nome: 'Seringa carpule' },
    { id: 'm5', nome: 'Gaze estéril' },
    { id: 'm6', nome: 'Sugador de saliva' },
    { id: 'm7', nome: 'Hipoclorito de sódio 0.12%' },
    { id: 'm8', nome: 'Pó de polimento' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8'] },
  area: 'Periodontia',
  competencias: [8,8,8,8,8,7,8,8]
},
{
  id: 'AG-53', titulo: 'Ortodontia: ativação de aparelho fixo (mensal)',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 1,
  contexto: 'Paciente em tratamento ortodôntico há 3 meses. Retorno mensal para ativação do aparelho e avaliação de progresso.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'meses_tratamento', label: 'Há quanto tempo em tratamento?', obrigatorio: true },
    { chave: 'dor_presente', label: 'Está sentindo dor?', obrigatorio: true },
    { chave: 'higiene_parece_boa', label: 'Higiene parece adequada?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Ortodontia', dias: ['segunda','quarta','sexta'], horarios: ['09:00','10:00','11:00','14:00','15:00','16:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Alicate de corte' },
    { id: 'm2', nome: 'Alicate de preensão' },
    { id: 'm3', nome: 'Fio ortodôntico (espessura apropriada)' },
    { id: 'm4', nome: 'Elásticos ortodônticos' },
    { id: 'm5', nome: 'Espelho intraoral' },
    { id: 'm6', nome: 'Explorador' },
    { id: 'm7', nome: 'Escova ortho' },
    { id: 'm8', nome: 'Cera ortodôntica' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8'] },
  area: 'Ortodontia',
  competencias: [8,8,8,8,8,8,7,8]
},
{
  id: 'AG-54', titulo: 'Odontopediatria: aplicação de flúor profissional',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 1, tempo: 1,
  contexto: 'Criança de 5 anos com risco de cárie. Consulta para aplicação de gel de flúor profissional e orientação de higiene com responsáveis.',
  dadosPaciente: { campos: [
    { chave: 'nome_crianca', label: 'Nome da criança', obrigatorio: true },
    { chave: 'idade', label: 'Idade', obrigatorio: true },
    { chave: 'ultima_fluorose', label: 'Quando foi última aplicação?', obrigatorio: true },
    { chave: 'frequencia_escova', label: 'Frequência de escovação?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Pediátrico', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['08:00','09:00','10:00','14:00','15:00','16:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Gel de flúor' },
    { id: 'm2', nome: 'Moldeira pediátrica' },
    { id: 'm3', nome: 'Seringa de borracha' },
    { id: 'm4', nome: 'Gaze' },
    { id: 'm5', nome: 'Escova infantil' },
    { id: 'm6', nome: 'Fio dental' },
    { id: 'm7', nome: 'Espelho infantil' },
    { id: 'm8', nome: 'Toucinho para orientação de higiene' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8'] },
  area: 'Odontopediatria',
  competencias: [7,7,7,7,8,8,7,7]
},
{
  id: 'AG-55', titulo: 'Prostodontia removível: prótese total superior',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 3, tempo: 3,
  contexto: 'Paciente edêntulo superior. Primeira consulta para moldagem anátômica e levantamento de dimensão vertical.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'tempo_sem_dentes', label: 'Há quanto tempo sem dentes?', obrigatorio: true },
    { chave: 'usa_protese_antes', label: 'Já usou prótese antes?', obrigatorio: true },
    { chave: 'atividade_profissional', label: 'Qual atividade profissional?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório A', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['09:00','10:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Moldeira individual' },
    { id: 'm2', nome: 'Massa de moldagem' },
    { id: 'm3', nome: 'Dimensionador vertical' },
    { id: 'm4', nome: 'Compasso de Willis' },
    { id: 'm5', nome: 'Arco facial' },
    { id: 'm6', nome: 'Relacionador cêntrico' },
    { id: 'm7', nome: 'Fita métrica' },
    { id: 'm8', nome: 'Escala de cor' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8'] },
  area: 'Prostodontia',
  competencias: [8,8,8,9,8,8,8,8]
},
{
  id: 'AG-56', titulo: 'Clareamento caseiro supervisionado (orientação)',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 1, tempo: 1,
  contexto: 'Paciente retornando para receber moldeira customizada e gel de clareamento para uso caseiro. Orientação de uso e cuidados.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'sensibilidade_baseline', label: 'Tem sensibilidade base?', obrigatorio: true },
    { chave: 'expectativa', label: 'Expectativa de resultado?', obrigatorio: true },
    { chave: 'frequencia_escova', label: 'Frequência de escovação?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Estética', dias: ['segunda','terça','quarta','quinta','sexta'], horarios: ['10:00','11:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Moldeira customizada' },
    { id: 'm2', nome: 'Gel clareador caseiro (peroxido 10-16%)' },
    { id: 'm3', nome: 'Escala de cor Vita' },
    { id: 'm4', nome: 'Fotografia inicial' },
    { id: 'm5', nome: 'Fluoreto de sódio' },
    { id: 'm6', nome: 'Dessensibilizante' },
    { id: 'm7', nome: 'Seringa dosadora' },
    { id: 'm8', nome: 'Instrução escrita para casa' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8'] },
  area: 'Estética',
  competencias: [7,7,7,8,8,7,7,7]
},
{
  id: 'AG-57', titulo: 'Cirurgia: frenectomia lingual',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Criança com anquiloglossia (língua presa). Necessário procedimento cirúrgico para liberar freio lingual.',
  dadosPaciente: { campos: [
    { chave: 'nome_crianca', label: 'Nome da criança', obrigatorio: true },
    { chave: 'idade', label: 'Idade', obrigatorio: true },
    { chave: 'dificuldade_lingua', label: 'Qual dificuldade funcional?', obrigatorio: true },
    { chave: 'peso_saude_geral', label: 'Tem outras condições de saúde?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Centro Cirúrgico', dias: ['segunda','terça','quarta','quinta'], horarios: ['08:00','09:00','10:00','11:00','14:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Bisturi cirúrgico' },
    { id: 'm2', nome: 'Tesoura cirúrgica' },
    { id: 'm3', nome: 'Pinça anatômica' },
    { id: 'm4', nome: 'Anestésico local' },
    { id: 'm5', nome: 'Cauterizador ou laser' },
    { id: 'm6', nome: 'Sutura reabsorvível' },
    { id: 'm7', nome: 'Gaze estéril' },
    { id: 'm8', nome: 'Luvas e máscara' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8'] },
  area: 'Cirurgia Oral',
  competencias: [8,8,8,8,8,7,8,8]
},
{
  id: 'AG-58', titulo: 'Endodontia: tratamento de fratura radicular',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 3, tempo: 3,
  contexto: 'Dente anterior com fratura radicular transversa após trauma. Paciente busca salvar dente. Avaliação de viabilidade e planejamento.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'qual_dente', label: 'Qual dente?', obrigatorio: true },
    { chave: 'data_trauma', label: 'Data do trauma', obrigatorio: true },
    { chave: 'dor_presente', label: 'Tem dor atual?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Endodontia', dias: ['segunda','terça','quarta','quinta'], horarios: ['08:00','09:00','13:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Radiografia periapical e oclusal' },
    { id: 'm2', nome: 'CBCT/Tomografia' },
    { id: 'm3', nome: 'Dique de borracha' },
    { id: 'm4', nome: 'Limas endodônticas' },
    { id: 'm5', nome: 'Localizador apical' },
    { id: 'm6', nome: 'Hipoclorito de sódio' },
    { id: 'm7', nome: 'Guta-percha' },
    { id: 'm8', nome: 'Cimento MTA ou hidróxido de cálcio' },
    { id: 'm9', nome: 'Anestésico' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8','m9'] },
  area: 'Endodontia',
  competencias: [9,9,9,9,9,8,9,9]
},
{
  id: 'AG-59', titulo: 'Periodontia: aplicação de enxerto gengival livre',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 3, tempo: 3,
  contexto: 'Paciente com recessão gengival no dente 34. Necessário procedimento de enxertia gengival para aumento de mucosa aderida.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'qual_dente', label: 'Qual dente afetado?', obrigatorio: true },
    { chave: 'tamanho_recessao', label: 'Medida da recessão (em mm)', obrigatorio: true },
    { chave: 'queixa_estetica', label: 'Preocupação estética?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Centro Cirúrgico', dias: ['segunda','terça','quarta','quinta'], horarios: ['08:00','09:00','10:00','13:00','14:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Bisturi cirúrgico' },
    { id: 'm2', nome: 'Tesoura de Castroviejo' },
    { id: 'm3', nome: 'Pinça anatômica' },
    { id: 'm4', nome: 'Anestésico local' },
    { id: 'm5', nome: 'Microsutura (5-0 ou 6-0)' },
    { id: 'm6', nome: 'Membrana de barreira' },
    { id: 'm7', nome: 'Cimento periodontal' },
    { id: 'm8', nome: 'Gaze e compressas' },
    { id: 'm9', nome: 'Luvas e máscara cirúrgica' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8','m9'] },
  area: 'Periodontia',
  competencias: [9,9,9,9,9,8,8,9]
},
{
  id: 'AG-60', titulo: 'Ortodontia: remoção de aparelho e colagem de retentor',
  tipo: 'agendamento', modalidade: 'agendamento', complexidade: 2, tempo: 2,
  contexto: 'Paciente completou tratamento ortodôntico (24 meses). Necessário remoção do aparelho, limpeza e colagem de retentor fixo.',
  dadosPaciente: { campos: [
    { chave: 'nome', label: 'Nome do paciente', obrigatorio: true },
    { chave: 'tempo_total', label: 'Tempo total de tratamento', obrigatorio: true },
    { chave: 'satisfacao', label: 'Satisfação com resultado?', obrigatorio: true },
    { chave: 'plano_retencao', label: 'Aceitaria usar contenção removível?', obrigatorio: false }
  ]},
  agenda: { correto: { sala: 'Consultório Ortodontia', dias: ['segunda','quarta','sexta'], horarios: ['10:00','11:00','14:00','15:00'] }},
  materiais: { opcoes: [
    { id: 'm1', nome: 'Removedor de bracket' },
    { id: 'm2', nome: 'Ponta ultrassônica' },
    { id: 'm3', nome: 'Resina de colagem' },
    { id: 'm4', nome: 'Fio retentor (5 ou 7 fios)' },
    { id: 'm5', nome: 'Ácido fosfórico 37%' },
    { id: 'm6', nome: 'Primer/adesivo' },
    { id: 'm7', nome: 'Escala de cor' },
    { id: 'm8', nome: 'Fotografia final' },
    { id: 'm9', nome: 'Espelho intraoral' }
  ], corretos: ['m1','m2','m3','m4','m5','m6','m7','m8','m9'] },
  area: 'Ortodontia',
  competencias: [8,8,8,8,8,8,8,8]
},
{
  id: 'CC-01', titulo: 'Periodontia: diagnóstico de gengivite com sangramento',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Periodontia',
  contexto: 'Paciente apresenta sangramento gengival espontâneo, edema e eritema. Qual é o diagnóstico mais provável?',
  opcoes: [
    { texto: 'Gengivite (reversível, sem perda óssea)', correto: true },
    { texto: 'Periodontite (com perda óssea irreversível)', correto: false },
    { texto: 'Abcesso gengival agudo', correto: false },
    { texto: 'Retração gengival traumática', correto: false }
  ],
  competencias: [7,8,7,8,7,7,7,7]
},
{
  id: 'CC-02', titulo: 'Endodontia: diagnóstico de necrose pulpar por teste de vitalidade',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Endodontia',
  contexto: 'Dente 11 não responde à teste de vitalidade (frio, elétrico). Responde positivamente à percussão. Qual é a situação pulpar?',
  opcoes: [
    { texto: 'Polpa vital normal', correto: false },
    { texto: 'Inflamação pulpar reversível', correto: false },
    { texto: 'Necrose pulpar (polpa não vital)', correto: true },
    { texto: 'Reabsorção interna', correto: false }
  ],
  competencias: [8,8,8,8,8,7,7,8]
},
{
  id: 'CC-03', titulo: 'Cárie dentária: decisão de remoção ou remineralização',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Clínica Geral',
  contexto: 'Paciente de 7 anos com mancha marrom opaca em fissura de oclusal. À exploração, não há cavitação. Qual é a melhor conduta?',
  opcoes: [
    { texto: 'Remover imediatamente (risco de progressão)', correto: false },
    { texto: 'Monitorar com higiene e fluoreto (lesão não cavitada)', correto: true },
    { texto: 'Aguardar exfoliação do dente', correto: false },
    { texto: 'Aplicar selante sem investigação', correto: false }
  ],
  competencias: [7,7,8,8,7,7,7,7]
},
{
  id: 'CC-04', titulo: 'Ortodontia: avaliação de padrão esqueletal',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 3, tempo: 2,
  area: 'Ortodontia',
  contexto: 'Análise cefalométrica: ANB = 8°, GoGn = 32°, FMA = 28°. Qual padrão esqueletal?',
  opcoes: [
    { texto: 'Classe II esqueletal com padrão hiperdivergente', correto: true },
    { texto: 'Classe I esqueletal normal', correto: false },
    { texto: 'Classe III esqueletal com padrão hipodivergente', correto: false },
    { texto: 'Classe II com padrão equilibrado', correto: false }
  ],
  competencias: [8,8,8,9,8,8,8,9]
},
{
  id: 'CC-05', titulo: 'Implantologia: avaliação de viabilidade óssea',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 3, tempo: 2,
  area: 'Implantologia',
  contexto: 'CBCT mostra altura óssea de 6mm na região anterior da maxila. Qual é a melhor conduta?',
  opcoes: [
    { texto: 'Implante direto sem aumento (risco de exposição de rosca)', correto: false },
    { texto: 'Enxerto ósseo ou biomaterial antes do implante', correto: true },
    { texto: 'Apenas prótese fixa convencional', correto: false },
    { texto: 'Aguardar ganho ósseo espontâneo', correto: false }
  ],
  competencias: [8,8,8,9,8,8,8,8]
},
{
  id: 'CC-06', titulo: 'Odontopediatria: manejo de criança ansiosa',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Odontopediatria',
  contexto: 'Criança de 5 anos chorando, recusa-se a abrir a boca. Qual é a melhor técnica inicial?',
  opcoes: [
    { texto: 'Desensibilização gradual (tell-show-do)', correto: true },
    { texto: 'Sedação imediatamente', correto: false },
    { texto: 'Constranger a criança para aceitar', correto: false },
    { texto: 'Adiar indefinidamente', correto: false }
  ],
  competencias: [7,8,8,8,8,8,7,7]
},
{
  id: 'CC-07', titulo: 'Prostodontia: avaliação de retenção e estabilidade protética',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 3, tempo: 2,
  area: 'Prostodontia',
  contexto: 'Prótese parcial removível superior com suportes em 16 e 26. Apresenta mobilidade. Qual é o problema?',
  opcoes: [
    { texto: 'Falta de componentes de estabilidade (placas)', correto: true },
    { texto: 'Dentes pilares com mobilidade patológica', correto: false },
    { texto: 'Apenas necessidade de ajuste oclusal', correto: false },
    { texto: 'Prótese muito grande', correto: false }
  ],
  competencias: [8,8,8,9,8,8,8,8]
},
{
  id: 'CC-08', titulo: 'Estética: análise de sorriso e guia de planejamento',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Estética',
  contexto: 'Paciente com exposição excessiva de gengiva anterior (mais de 3mm). Qual é a combinação adequada de intervenções?',
  opcoes: [
    { texto: 'Gengivoplastia + laminados estéticos', correto: true },
    { texto: 'Apenas clareamento', correto: false },
    { texto: 'Apenas ortodontia', correto: false },
    { texto: 'Cirurgia óssea exclusivamente', correto: false }
  ],
  competencias: [7,7,8,8,7,8,7,8]
},
{
  id: 'CC-09', titulo: 'Cirurgia Oral: complicação pós-exodontia',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 3, tempo: 2,
  area: 'Cirurgia Oral',
  contexto: 'Paciente 3 dias pós-exodontia com dor, halitose e alvéolo com aparência necrótica. Qual é o diagnóstico?',
  opcoes: [
    { texto: 'Alveolite seca (complicação inflamatória)', correto: true },
    { texto: 'Infecção bacteriana simples', correto: false },
    { texto: 'Necrose óssea (osteonecrose)', correto: false },
    { texto: 'Apenas resposta inflamatória normal', correto: false }
  ],
  competencias: [8,8,8,8,8,7,8,8]
},
{
  id: 'CC-10', titulo: 'Dentística: infiltração marginal em restauração',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Dentística',
  contexto: 'Radiografia mostra radiolucidez na margem de restauração de classe II há 3 anos. Como proceder?',
  opcoes: [
    { texto: 'Substituir a restauração com técnica de selamento marginal adequada', correto: true },
    { texto: 'Apenas observar', correto: false },
    { texto: 'Aplicar flúor e pronto', correto: false },
    { texto: 'Fazer endodontia', correto: false }
  ],
  competencias: [7,7,8,8,7,7,7,7]
},
{
  id: 'CC-11', titulo: 'Periodontia: resposta ao tratamento não-cirúrgico',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 3, tempo: 2,
  area: 'Periodontia',
  contexto: 'Após 6 semanas de raspagem e alisamento, bolsa de 6mm permanece. Qual é a próxima conduta?',
  opcoes: [
    { texto: 'Avaliar higiene do paciente; considerar cirurgia periodontal se necessário', correto: true },
    { texto: 'Repetir apenas raspagem', correto: false },
    { texto: 'Antibiótico sistêmico indefinidamente', correto: false },
    { texto: 'Extrair o dente', correto: false }
  ],
  competencias: [8,8,8,9,8,8,8,8]
},
{
  id: 'CC-12', titulo: 'Endodontia: obturação de canal radicular',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 3, tempo: 2,
  area: 'Endodontia',
  contexto: 'Canais preparados, comprimento confirmado por radiografia. Qual técnica garante melhor prognóstico?',
  opcoes: [
    { texto: 'Guta-percha com cimento e condensação lateral', correto: true },
    { texto: 'Apenas anestésico no canal', correto: false },
    { texto: 'Cimento sozinho sem guta-percha', correto: false },
    { texto: 'Deixar aberto para drenagem', correto: false }
  ],
  competencias: [8,8,8,8,8,7,7,8]
},
{
  id: 'CC-13', titulo: 'Ortodontia: erupção ectópica e interceptação',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Ortodontia',
  contexto: 'Criança de 7 anos: canino superior erupcionando por palatina. Qual é a conduta?',
  opcoes: [
    { texto: 'Extrair o incisivo central decíduo para facilitar erupção e reposicionar', correto: true },
    { texto: 'Extrair o canino permanente', correto: false },
    { texto: 'Aguardar exfoliação espontânea', correto: false },
    { texto: 'Apenas observar sem intervenção', correto: false }
  ],
  competencias: [7,8,8,8,8,8,7,7]
},
{
  id: 'CC-14', titulo: 'Implantologia: osseointegração comprometida',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 3, tempo: 2,
  area: 'Implantologia',
  contexto: 'Implante com mobilidade perceptível 4 meses após colocação. Qual é o diagnóstico?',
  opcoes: [
    { texto: 'Falha de osseointegração (necessário remover)', correto: true },
    { texto: 'Inflamação normal de cicatrização', correto: false },
    { texto: 'Apenas soltura do pilar', correto: false },
    { texto: 'Problema que se resolve espontaneamente', correto: false }
  ],
  competencias: [8,8,8,8,8,7,8,8]
},
{
  id: 'CC-15', titulo: 'Odontopediatria: cárie precoce da infância (ECC)',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Odontopediatria',
  contexto: 'Criança de 2 anos com cárie em todos os incisivos superiores decíduos. Qual fator é mais provável?',
  opcoes: [
    { texto: 'Exposição prolongada a bebidas açucaradas (mamadeira noturna)', correto: true },
    { texto: 'Falta de escovação apenas', correto: false },
    { texto: 'Genética inevitável', correto: false },
    { texto: 'Apenas falta de fluoreto', correto: false }
  ],
  competencias: [7,7,8,7,7,8,7,7]
},
{
  id: 'CC-16', titulo: 'Prostodontia: fratura de prótese parcial fixa',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Prostodontia',
  contexto: 'Prótese fixa de 3 unidades (14-15-16) apresenta fratura do pôntico. Como proceder?',
  opcoes: [
    { texto: 'Remover e confeccionar nova prótese (reparação pode ser inadequada)', correto: true },
    { texto: 'Apenas reparar com resina/cimento', correto: false },
    { texto: 'Esperar progressão da fratura', correto: false },
    { texto: 'Extrair os dentes pilares', correto: false }
  ],
  competencias: [7,7,8,8,7,8,7,7]
},
{
  id: 'CC-17', titulo: 'Clínica Geral: hipersensibilidade dentinária',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Clínica Geral',
  contexto: 'Paciente relata dor aguda em dente saudável ao tomar gelado. Qual é o mecanismo e tratamento?',
  opcoes: [
    { texto: 'Hipersensibilidade dentinária; dessensibilizante ou resina fluidificada', correto: true },
    { texto: 'Cárie profunda; necessário tratamento endodôntico', correto: false },
    { texto: 'Fratura de coroa; necessário coroamento', correto: false },
    { texto: 'Apenas nervosismo do paciente', correto: false }
  ],
  competencias: [7,7,8,8,7,7,7,7]
},
{
  id: 'CC-18', titulo: 'Estética: escolha de material para laminado',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Estética',
  contexto: 'Paciente quer laminado cerâmico vs. resina composta. Qual vantagem dos laminados?',
  opcoes: [
    { texto: 'Maior longevidade estética e biocompatibilidade', correto: true },
    { texto: 'Menor custo inicial', correto: false },
    { texto: 'Menos invasivo ao dente', correto: false },
    { texto: 'Reparação mais fácil', correto: false }
  ],
  competencias: [7,7,7,8,8,7,7,8]
},
{
  id: 'CC-19', titulo: 'Cirurgia: análise de fatores de risco pré-operatório',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 3, tempo: 2,
  area: 'Cirurgia Oral',
  contexto: 'Paciente com diabetes descompensada (glicemia 350 mg/dL) agendado para extração. Como proceder?',
  opcoes: [
    { texto: 'Adiar até compensação glicêmica; risco de infecção e cicatrização pobre', correto: true },
    { texto: 'Prosseguir com cuidados redobrados', correto: false },
    { texto: 'Apenas aumentar dose de antibiótico', correto: false },
    { texto: 'Usar mais anestésico como "proteção"', correto: false }
  ],
  competencias: [8,8,8,8,9,8,8,8]
},
{
  id: 'CC-20', titulo: 'Dentística: restauração classe V',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Dentística',
  contexto: 'Cárie cervical em face vestibular. Qual sequência de preparação garante melhor retenção?',
  opcoes: [
    { texto: 'Retenção mecânica com bisel, chanfro e adesivo universal', correto: true },
    { texto: 'Apenas remoção de cárie', correto: false },
    { texto: 'Preparação muito profunda em direção a pulpa', correto: false },
    { texto: 'Sem preparação, apenas fluidificada sobre cárie', correto: false }
  ],
  competencias: [7,7,8,8,7,7,7,7]
},
{
  id: 'CC-21', titulo: 'Periodontia: halitose e etiologia',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Periodontia',
  contexto: 'Paciente com halitose persistente, gengivite moderada e bolsas periodontal. Qual fator contribui mais?',
  opcoes: [
    { texto: 'Bolsas periodontal com bactérias anaeróbias produtoras de enxofre', correto: true },
    { texto: 'Apenas halitose idiopática genética', correto: false },
    { texto: 'Deficiência de vitamina C', correto: false },
    { texto: 'Stress emocional unicamente', correto: false }
  ],
  competencias: [8,7,8,8,7,7,8,7]
},
{
  id: 'CC-22', titulo: 'Endodontia: complcações intra-operatórias',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 3, tempo: 2,
  area: 'Endodontia',
  contexto: 'Durante preparo do canal, instrumento ultrapassa limite apical. Como agir?',
  opcoes: [
    { texto: 'Medir perda no localizador apical; se significante, avaliar necessidade de MTA apical', correto: true },
    { texto: 'Ignorar e continuar obturação normal', correto: false },
    { texto: 'Extrair o dente imediatamente', correto: false },
    { texto: 'Apenas prescrever antibiótico', correto: false }
  ],
  competencias: [8,8,8,9,8,7,8,8]
},
{
  id: 'CC-23', titulo: 'Ortodontia: maloclusão e classe molar',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Ortodontia',
  contexto: 'Relação molar mesial em 0.5 unidade. Como classificar?',
  opcoes: [
    { texto: 'Classe II divisão 1', correto: true },
    { texto: 'Classe I normal', correto: false },
    { texto: 'Classe III', correto: false },
    { texto: 'Mordida cruzada anterior', correto: false }
  ],
  competencias: [7,7,8,8,8,7,7,7]
},
{
  id: 'CC-24', titulo: 'Implantologia: material e design do implante',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Implantologia',
  contexto: 'Qual material tem melhor biocompatibilidade e taxa de osseointegração?',
  opcoes: [
    { texto: 'Titânio comercialmente puro ou ligas de titânio', correto: true },
    { texto: 'Ouro', correto: false },
    { texto: 'Aço inoxidável', correto: false },
    { texto: 'Cerâmica de alumina', correto: false }
  ],
  competencias: [7,7,7,8,8,7,7,7]
},
{
  id: 'CC-25', titulo: 'Odontopediatria: extração de dente decíduo',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Odontopediatria',
  contexto: 'Incisivo central decíduo com mobilidade grau 2 deve ser extraído ou deixado?',
  opcoes: [
    { texto: 'Deixar exfoliar naturalmente se mobilidade fisiológica sem sintomas', correto: true },
    { texto: 'Extrair imediatamente', correto: false },
    { texto: 'Apenas aplicar selante', correto: false },
    { texto: 'Aguardar até completa mobilidade sem risco', correto: false }
  ],
  competencias: [7,8,7,7,7,7,7,7]
},
{
  id: 'CC-26', titulo: 'Prostodontia: prótese total e dimensão vertical',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 3, tempo: 2,
  area: 'Prostodontia',
  contexto: 'Paciente apresenta síntese mandibular e dores na ATM após colocação de prótese. Qual pode ser a causa?',
  opcoes: [
    { texto: 'Dimensão vertical de oclusão muito alta (DVO excessiva)', correto: true },
    { texto: 'Apenas falta de lubrificante', correto: false },
    { texto: 'Prótese muito solta', correto: false },
    { texto: 'Problema psicológico do paciente', correto: false }
  ],
  competencias: [8,8,8,9,8,8,8,8]
},
{
  id: 'CC-27', titulo: 'Clínica Geral: diagnóstico diferencial de lesão oral',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 3, tempo: 2,
  area: 'Clínica Geral',
  contexto: 'Lesão oral branca, endurecida, indolor há 3 meses. Qual é o risco?',
  opcoes: [
    { texto: 'Possível leucoplasia; necessário biópsia para descartar displasia/neoplasia', correto: true },
    { texto: 'Apenas afta trivial', correto: false },
    { texto: 'Monilíase facilmente tratável', correto: false },
    { texto: 'Sinal de falta de vitamina', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,9]
},
{
  id: 'CC-28', titulo: 'Estética: manutenção de cor em restauração de resina',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Estética',
  contexto: 'Restauração estética em resina composta escurecia após 6 meses. Como minimizar?',
  opcoes: [
    { texto: 'Usar resina com melhor matriz (micropartículas), evitar pigmentação; polir regularmente', correto: true },
    { texto: 'Apenas deixar como está', correto: false },
    { texto: 'Remover e refazer a cada 3 meses', correto: false },
    { texto: 'Aplicar sempre selador superficial', correto: false }
  ],
  competencias: [7,7,7,8,7,7,7,8]
},
{
  id: 'CC-29', titulo: 'Cirurgia: manejo de hemorragia pós-exodontia',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Cirurgia Oral',
  contexto: 'Paciente com sangramento contínuo 30 min após exodontia. Qual é o passo inicial?',
  opcoes: [
    { texto: 'Compressa com hemostático (trombina, ác. tranexâmico) por 15-20 min com pressão', correto: true },
    { texto: 'Apenas observar', correto: false },
    { texto: 'Suturar desnecessariamente', correto: false },
    { texto: 'Prescrever antibiótico e liberar', correto: false }
  ],
  competencias: [7,8,8,8,8,7,8,7]
},
{
  id: 'CC-30', titulo: 'Dentística: escolha de sistema adesivo',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Dentística',
  contexto: 'Restauração em dente vital com esmalte e dentina. Qual sistema garante melhor performance?',
  opcoes: [
    { texto: 'Sistema universal com etching prévio do esmalte (técnica de aumento de retenção)', correto: true },
    { texto: 'Apenas adesivo total-etch sem etching', correto: false },
    { texto: 'Self-etch sem considerar esmalte', correto: false },
    { texto: 'Sem adesivo, apenas condicionamento', correto: false }
  ],
  competencias: [7,8,8,8,7,7,7,7]
},
{
  id: 'CC-31', titulo: 'Periodontia: índice de placa e sangramento',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Periodontia',
  contexto: 'Paciente com índice de sangramento gengival (SBI) elevado após higiene inadequada. Como avaliar resposta ao tratamento?',
  opcoes: [
    { texto: 'Reavaliar SBI após 2-4 semanas de higiene melhorada; redução indica resposta', correto: true },
    { texto: 'Apenas prescrever enxaguatório', correto: false },
    { texto: 'Esperar 6 meses sem feedback', correto: false },
    { texto: 'Extrair dente imediatamente', correto: false }
  ],
  competencias: [8,8,8,8,8,7,7,8]
},
{
  id: 'CC-32', titulo: 'Endodontia: fístula periapical',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Endodontia',
  contexto: 'Fístula intraoral drenando pus. Qual é a causa e tratamento?',
  opcoes: [
    { texto: 'Infecção endodôntica com drenagem; necessário tratamento endodôntico', correto: true },
    { texto: 'Apenas infecção gengival superficial', correto: false },
    { texto: 'Problema cirúrgico unicamente', correto: false },
    { texto: 'Resolvido com antibiótico sozinho', correto: false }
  ],
  competencias: [8,8,8,8,8,7,7,8]
},
{
  id: 'CC-33', titulo: 'Ortodontia: uso de elásticos intermaxilares',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Ortodontia',
  contexto: 'Paciente com classe II deve usar elásticos classe II contínuamente. Qual risco de não-compliance?',
  opcoes: [
    { texto: 'Falta de correção de classe II; possível resultado insatisfatório', correto: true },
    { texto: 'Nenhum risco real', correto: false },
    { texto: 'Melhor resultado, menos tempo', correto: false },
    { texto: 'Apenas questão estética temporária', correto: false }
  ],
  competencias: [7,7,8,8,8,7,7,7]
},
{
  id: 'CC-34', titulo: 'Implantologia: manutenção peri-implantar',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Implantologia',
  contexto: 'Implante osseointegrado há 2 anos. Como prevenir periimplantite?',
  opcoes: [
    { texto: 'Higiene diária rigorosa + visitas regulares ao dentista (3-6 meses)', correto: true },
    { texto: 'Nenhum cuidado especial necessário', correto: false },
    { texto: 'Apenas enxaguatório clorexidina indefinidamente', correto: false },
    { texto: 'Semelhante aos dentes naturais; não precisa higiene especial', correto: false }
  ],
  competencias: [7,7,8,8,8,7,7,7]
},
{
  id: 'CC-35', titulo: 'Odontopediatria: higiene bucal e recomendações',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 1, tempo: 2,
  area: 'Odontopediatria',
  contexto: 'Qual é a recomendação de fluoreto de sódio para criança de 3 anos?',
  opcoes: [
    { texto: '1000 ppm de F em creme dental (aplicação supervisionada, quantidade da ervilha)', correto: true },
    { texto: '5000 ppm (risco de fluorose)', correto: false },
    { texto: 'Sem fluoreto até 6 anos', correto: false },
    { texto: 'Fluoreto acima de 1500 ppm diariamente', correto: false }
  ],
  competencias: [7,7,7,7,8,7,7,7]
},
{
  id: 'CC-36', titulo: 'Prostodontia: desajuste oclusal em prótese',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Prostodontia',
  contexto: 'Prótese apresenta contato prematuro em lingual de pré-molares. Como ajustar?',
  opcoes: [
    { texto: 'Usar carbono articulado para visualizar e desgastar seletivamente a prótese', correto: true },
    { texto: 'Desgastar os dentes naturais opostos', correto: false },
    { texto: 'Deixar sem ajuste', correto: false },
    { texto: 'Remover e refazer completamente', correto: false }
  ],
  competencias: [7,7,7,8,8,7,7,7]
},
{
  id: 'CC-37', titulo: 'Clínica Geral: trismo pós-operatório',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Clínica Geral',
  contexto: 'Paciente com limitação de abertura bucal após exodontia de impactado. Como tratar?',
  opcoes: [
    { texto: 'Aplicar calor local, alongamento e fisioterapia; melhora em 3-7 dias se não infecção', correto: true },
    { texto: 'Apenas prescrever antibiótico', correto: false },
    { texto: 'Imobilizar a mandíbula com tala', correto: false },
    { texto: 'Cirurgia imediata', correto: false }
  ],
  competencias: [7,8,8,8,8,7,8,7]
},
{
  id: 'CC-38', titulo: 'Estética: avaliação de linha do sorriso',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Estética',
  contexto: 'Paciente com linha de sorriso alta (mostra >3mm de gengiva). Qual combinação de intervenções?',
  opcoes: [
    { texto: 'Avaliação de altura maxilar; se esqueletal, considerar gengivoplastia + possível cirurgia maxilar', correto: true },
    { texto: 'Apenas colocar laminado', correto: false },
    { texto: 'Apenas clareamento', correto: false },
    { texto: 'Nenhuma intervenção necessária', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8]
},
{
  id: 'CC-39', titulo: 'Cirurgia: técnica atraumática de exodontia',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 3, tempo: 2,
  area: 'Cirurgia Oral',
  contexto: 'Qual princípio garante melhor cicatrização pós-exodontia?',
  opcoes: [
    { texto: 'Luxação progressiva com minimização de trauma ósseo e alveolar', correto: true },
    { texto: 'Força bruta máxima para remover rápido', correto: false },
    { texto: 'Sempre fazer osteotomia para qualquer dente', correto: false },
    { texto: 'Deixar fragmentos ósseos não removidos', correto: false }
  ],
  competencias: [8,8,8,8,8,8,8,8]
},
{
  id: 'CC-40', titulo: 'Dentística: durabilidade de restauração em anterior',
  modalidade: 'multipla', tipo: 'Caso Clínico', complexidade: 2, tempo: 2,
  area: 'Dentística',
  contexto: 'Restauração de resina em dente anterior é melhor: direta ou indireta (overlay cerâmico)?',
  opcoes: [
    { texto: 'Overlay cerâmico: melhor longevidade e estética para dentes anteriores importantes', correto: true },
    { texto: 'Sempre resina direta', correto: false },
    { texto: 'Diferença não significativa', correto: false },
    { texto: 'Resina direta com mais duração', correto: false }
  ],
  competencias: [7,7,8,8,8,8,7,8]
}
];
