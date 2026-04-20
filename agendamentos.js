/* ============================================================
   SimuCare — Banco de Atividades de Agendamento
   ------------------------------------------------------------
   Modalidade operacional: o aluno simula o atendimento de uma
   ligação/contato e executa três etapas:
     1) Dados do paciente (25% da nota)
     2) Agendamento: dia, horário e sala (25% da nota)
     3) Separação de materiais (50% da nota — peso maior)

   Sala errada ou material crítico esquecido forçam retentativa.
   Competências avaliadas (mesmas 8 da múltipla escolha):
     0 Comunicação empática   1 Resolução de problemas
     2 Tomada de decisão      3 Conhecimento técnico
     4 Biossegurança          5 Trabalho em equipe
     6 Gestão de conflito     7 Profissionalismo
   ============================================================ */

window.AGENDAMENTOS = [

/* ------------------------------------------------------------
   AG-A01 — Reagendamento de cirurgia de implante
   ------------------------------------------------------------ */
{
  id: 'AG-A01',
  area: 'Agendamento',
  complexidade: 3,
  tempo: 12,
  titulo: 'Reagendar cirurgia de implante unitário',
  contexto: 'O paciente Ricardo Oliveira, 58 anos, liga dizendo que não poderá comparecer à cirurgia de implante marcada para amanhã (motivo: viagem de trabalho). Pergunta se consegue remarcar para a próxima semana, preferindo pela manhã. Ele informa ainda que toma losartana para pressão e que já está com os exames pré-operatórios prontos.',
  dadosPaciente: {
    prefilled: { nome: 'Ricardo Oliveira', idade: '58' },
    campos: [
      { chave:'nome', label:'Nome completo', tipo:'text', obrigatorio:true, validacao:['ricardo'] },
      { chave:'idade', label:'Idade', tipo:'text', obrigatorio:true, validacao:['58'] },
      { chave:'telefone', label:'Telefone de contato', tipo:'text', obrigatorio:true, placeholder:'(DDD) número', validacao:[] },
      { chave:'procedimento', label:'Procedimento', tipo:'select', obrigatorio:true, opcoes:['Limpeza','Restauração','Endodontia','Extração','Cirurgia de implante','Prótese','Ortodontia'], validacao:['cirurgia de implante'] },
      { chave:'medicacao', label:'Usa alguma medicação contínua?', tipo:'text', obrigatorio:true, validacao:['losartana','pressão','hipertens'] },
      { chave:'obs', label:'Observações para o dentista', tipo:'text', obrigatorio:false, placeholder:'ex.: exames pré-op prontos, preferência manhã' }
    ]
  },
  agenda: {
    diasDisponiveis: ['Seg 27/04','Ter 28/04','Qua 29/04','Qui 30/04','Sex 01/05'],
    horariosDisponiveis: ['08:00','09:30','11:00','14:00','15:30','17:00'],
    salas: ['Sala 1 — Cirurgia','Sala 2 — Endodontia','Sala 3 — Prótese','Sala 4 — Ortodontia','Sala 5 — Pediátrica','Sala 6 — Clínica geral'],
    correto: {
      sala: 'Sala 1 — Cirurgia',
      dias: ['Seg 27/04','Ter 28/04','Qua 29/04'],
      horarios: ['08:00','09:30','11:00']
    }
  },
  materiais: {
    opcoes: [
      { id:'kit-cir', nome:'Kit cirúrgico estéril (bisturi, sindesmótomo, afastador)' },
      { id:'implante', nome:'Implante e kit de fresas do fabricante' },
      { id:'soro', nome:'Soro fisiológico estéril 500ml' },
      { id:'sutura', nome:'Fio de sutura nylon 4-0' },
      { id:'anestesico', nome:'Anestésico com vasoconstritor' },
      { id:'gaze', nome:'Gazes estéreis' },
      { id:'luvas-est', nome:'Luvas cirúrgicas estéreis' },
      { id:'campo-est', nome:'Campo cirúrgico estéril' },
      { id:'isolamento', nome:'Isolamento absoluto e grampos (dique de borracha)' },
      { id:'alginato', nome:'Alginato para moldagem' },
      { id:'limas', nome:'Limas endodônticas' },
      { id:'profilaxia', nome:'Kit de profilaxia (taça, pasta)' }
    ],
    corretos:  ['kit-cir','implante','soro','sutura','anestesico','gaze','luvas-est','campo-est'],
    criticos:  ['kit-cir','implante','luvas-est','campo-est']
  },
  competenciasBase: [8,8,8,9,10,7,7,9]
},

/* ------------------------------------------------------------
   AG-A02 — Endodontia de urgência
   ------------------------------------------------------------ */
{
  id: 'AG-A02',
  area: 'Agendamento',
  complexidade: 3,
  tempo: 10,
  titulo: 'Encaixar endodontia de urgência',
  contexto: 'Márcia Souto, 34 anos, liga chorando com dor intensa no dente de baixo direito há dois dias, sem dormir à noite. O dentista já identificou no WhatsApp (foto de RX que ela mandou) que é pulpite irreversível e pediu para encaixar ainda hoje se possível. Ela pergunta qual o melhor horário.',
  dadosPaciente: {
    prefilled: { nome: 'Márcia Souto', idade: '34' },
    campos: [
      { chave:'nome', label:'Nome completo', tipo:'text', obrigatorio:true, validacao:['márcia','marcia'] },
      { chave:'idade', label:'Idade', tipo:'text', obrigatorio:true, validacao:['34'] },
      { chave:'telefone', label:'Telefone de contato', tipo:'text', obrigatorio:true, placeholder:'(DDD) número' },
      { chave:'procedimento', label:'Procedimento', tipo:'select', obrigatorio:true, opcoes:['Limpeza','Restauração','Endodontia','Extração','Cirurgia de implante','Prótese','Ortodontia'], validacao:['endodontia'] },
      { chave:'urgencia', label:'Grau de urgência', tipo:'select', obrigatorio:true, opcoes:['Eletivo','Preferencial (mesma semana)','Urgente (hoje)'], validacao:['urgente'] },
      { chave:'queixa', label:'Queixa principal', tipo:'text', obrigatorio:true, validacao:['dor','pulpite'] },
      { chave:'alergia', label:'Alergia a medicamentos?', tipo:'text', obrigatorio:false, placeholder:'ex.: nega / dipirona' }
    ]
  },
  agenda: {
    diasDisponiveis: ['Hoje','Amanhã','Depois de amanhã'],
    horariosDisponiveis: ['08:00','09:30','11:00','14:00','15:30','17:00','19:00'],
    salas: ['Sala 1 — Cirurgia','Sala 2 — Endodontia','Sala 3 — Prótese','Sala 4 — Ortodontia','Sala 5 — Pediátrica','Sala 6 — Clínica geral'],
    correto: {
      sala: 'Sala 2 — Endodontia',
      dias: ['Hoje'],
      horarios: ['14:00','15:30','17:00','19:00']
    }
  },
  materiais: {
    opcoes: [
      { id:'limas', nome:'Limas endodônticas manuais e/ou rotatórias' },
      { id:'irrigacao', nome:'Hipoclorito de sódio 2,5% para irrigação' },
      { id:'isolamento', nome:'Isolamento absoluto (dique de borracha, grampos)' },
      { id:'anestesico', nome:'Anestésico com vasoconstritor' },
      { id:'hidro-cal', nome:'Hidróxido de cálcio (curativo)' },
      { id:'cimento-prov', nome:'Cimento provisório (IRM ou similar)' },
      { id:'rx-sensor', nome:'Sensor / filme radiográfico' },
      { id:'gaze', nome:'Gazes' },
      { id:'kit-cir', nome:'Kit cirúrgico estéril' },
      { id:'forceps', nome:'Fórceps de extração' },
      { id:'alginato', nome:'Alginato para moldagem' }
    ],
    corretos:  ['limas','irrigacao','isolamento','anestesico','hidro-cal','cimento-prov','rx-sensor','gaze'],
    criticos:  ['limas','irrigacao','isolamento','anestesico']
  },
  competenciasBase: [9,9,9,9,8,7,7,9]
},

/* ------------------------------------------------------------
   AG-A03 — Profilaxia de rotina (paciente antigo)
   ------------------------------------------------------------ */
{
  id: 'AG-A03',
  area: 'Agendamento',
  complexidade: 1,
  tempo: 6,
  titulo: 'Agendar limpeza semestral de paciente antigo',
  contexto: 'Sr. Antônio Pereira, 65 anos, liga para marcar sua limpeza semestral. Diz que pode qualquer dia à tarde. Você consulta o prontuário: última limpeza foi há 6 meses, sem alertas clínicos, não faz uso de medicação contínua.',
  dadosPaciente: {
    prefilled: { nome: 'Antônio Pereira', idade: '65' },
    campos: [
      { chave:'nome', label:'Nome completo', tipo:'text', obrigatorio:true, validacao:['antônio','antonio'] },
      { chave:'idade', label:'Idade', tipo:'text', obrigatorio:true, validacao:['65'] },
      { chave:'telefone', label:'Telefone', tipo:'text', obrigatorio:true, placeholder:'(DDD) número' },
      { chave:'procedimento', label:'Procedimento', tipo:'select', obrigatorio:true, opcoes:['Limpeza','Restauração','Endodontia','Extração','Cirurgia de implante','Prótese','Ortodontia'], validacao:['limpeza'] },
      { chave:'retorno', label:'É retorno ou primeira vez?', tipo:'select', obrigatorio:true, opcoes:['Primeira vez','Retorno'], validacao:['retorno'] }
    ]
  },
  agenda: {
    diasDisponiveis: ['Seg 27/04','Ter 28/04','Qua 29/04','Qui 30/04','Sex 01/05'],
    horariosDisponiveis: ['08:00','09:30','11:00','14:00','15:30','17:00'],
    salas: ['Sala 1 — Cirurgia','Sala 2 — Endodontia','Sala 3 — Prótese','Sala 4 — Ortodontia','Sala 5 — Pediátrica','Sala 6 — Clínica geral'],
    correto: {
      sala: 'Sala 6 — Clínica geral',
      dias: ['Seg 27/04','Ter 28/04','Qua 29/04','Qui 30/04','Sex 01/05'],
      horarios: ['14:00','15:30','17:00']
    }
  },
  materiais: {
    opcoes: [
      { id:'profilaxia', nome:'Kit de profilaxia (taça Robinson, pasta)' },
      { id:'ultrassom', nome:'Pontas de ultrassom (raspagem supragengival)' },
      { id:'fluor', nome:'Flúor gel ou verniz' },
      { id:'fio-dental', nome:'Fio dental' },
      { id:'gaze', nome:'Gazes' },
      { id:'sugador', nome:'Sugador descartável' },
      { id:'kit-cir', nome:'Kit cirúrgico estéril' },
      { id:'limas', nome:'Limas endodônticas' },
      { id:'anestesico', nome:'Anestésico com vasoconstritor' },
      { id:'implante', nome:'Kit de implante' }
    ],
    corretos:  ['profilaxia','ultrassom','fluor','fio-dental','gaze','sugador'],
    criticos:  ['profilaxia','ultrassom']
  },
  competenciasBase: [8,6,7,7,8,7,7,8]
},

/* ------------------------------------------------------------
   AG-A04 — Pediátrico (primeira consulta)
   ------------------------------------------------------------ */
{
  id: 'AG-A04',
  area: 'Agendamento',
  complexidade: 2,
  tempo: 9,
  titulo: 'Primeira consulta de criança de 5 anos',
  contexto: 'A mãe Patrícia Gomes liga para agendar a primeira consulta do filho Bruno, 5 anos. Ela suspeita de cárie num dente de leite (mancha escura que ela viu hoje). A criança está tranquila, sem dor. A mãe prefere horário após 15h, após a escola, e diz que o marido tem plano odontológico pela empresa (convênio XYZ).',
  dadosPaciente: {
    prefilled: { responsavel: 'Patrícia Gomes' },
    campos: [
      { chave:'nome', label:'Nome do paciente (criança)', tipo:'text', obrigatorio:true, validacao:['bruno'] },
      { chave:'idade', label:'Idade do paciente', tipo:'text', obrigatorio:true, validacao:['5'] },
      { chave:'responsavel', label:'Responsável', tipo:'text', obrigatorio:true, validacao:['patrícia','patricia'] },
      { chave:'telefone', label:'Telefone do responsável', tipo:'text', obrigatorio:true },
      { chave:'procedimento', label:'Procedimento inicial', tipo:'select', obrigatorio:true, opcoes:['Primeira consulta','Limpeza','Restauração','Extração','Urgência'], validacao:['primeira consulta','consulta'] },
      { chave:'convenio', label:'Convênio / particular', tipo:'text', obrigatorio:true, validacao:['convênio','convenio','xyz','particular'] },
      { chave:'obs', label:'Observações', tipo:'text', obrigatorio:false, placeholder:'ex.: mãe suspeita de cárie no molar' }
    ]
  },
  agenda: {
    diasDisponiveis: ['Seg 27/04','Ter 28/04','Qua 29/04','Qui 30/04','Sex 01/05','Sáb 02/05'],
    horariosDisponiveis: ['08:00','09:30','11:00','14:00','15:30','17:00'],
    salas: ['Sala 1 — Cirurgia','Sala 2 — Endodontia','Sala 3 — Prótese','Sala 4 — Ortodontia','Sala 5 — Pediátrica','Sala 6 — Clínica geral'],
    correto: {
      sala: 'Sala 5 — Pediátrica',
      dias: ['Seg 27/04','Ter 28/04','Qua 29/04','Qui 30/04','Sex 01/05'],
      horarios: ['15:30','17:00']
    }
  },
  materiais: {
    opcoes: [
      { id:'espelho-ped', nome:'Kit clínico pediátrico (espelho, sonda, pinça pequenos)' },
      { id:'profilaxia', nome:'Kit de profilaxia com pasta infantil' },
      { id:'fluor', nome:'Flúor (verniz ou gel)' },
      { id:'odontograma', nome:'Ficha / odontograma infantil' },
      { id:'escova', nome:'Escova de dentes infantil para orientação' },
      { id:'luvas-peq', nome:'Luvas de procedimento tamanho P' },
      { id:'forceps', nome:'Fórceps para adulto' },
      { id:'kit-cir', nome:'Kit cirúrgico estéril' },
      { id:'limas', nome:'Limas endodônticas' }
    ],
    corretos:  ['espelho-ped','profilaxia','fluor','odontograma','escova','luvas-peq'],
    criticos:  ['espelho-ped','odontograma']
  },
  competenciasBase: [10,7,7,7,8,7,7,9]
},

/* ------------------------------------------------------------
   AG-A05 — Instalação de prótese parcial removível
   ------------------------------------------------------------ */
{
  id: 'AG-A05',
  area: 'Agendamento',
  complexidade: 2,
  tempo: 8,
  titulo: 'Instalar prótese parcial removível',
  contexto: 'Dona Elza Vidotti, 72 anos, retorna para a instalação da prótese parcial removível. O laboratório já devolveu a peça na clínica. Ela prefere horário pela manhã, vem acompanhada da filha e é hipertensa controlada com enalapril.',
  dadosPaciente: {
    prefilled: { nome: 'Elza Vidotti', idade: '72' },
    campos: [
      { chave:'nome', label:'Nome completo', tipo:'text', obrigatorio:true, validacao:['elza'] },
      { chave:'idade', label:'Idade', tipo:'text', obrigatorio:true, validacao:['72'] },
      { chave:'telefone', label:'Telefone', tipo:'text', obrigatorio:true },
      { chave:'procedimento', label:'Procedimento', tipo:'select', obrigatorio:true, opcoes:['Limpeza','Restauração','Endodontia','Extração','Prótese','Ortodontia'], validacao:['prótese','protese'] },
      { chave:'medicacao', label:'Medicação contínua', tipo:'text', obrigatorio:true, validacao:['enalapril','pressão','hipertens'] },
      { chave:'acompanhante', label:'Vem acompanhado(a)?', tipo:'text', obrigatorio:false, placeholder:'ex.: filha' }
    ]
  },
  agenda: {
    diasDisponiveis: ['Seg 27/04','Ter 28/04','Qua 29/04','Qui 30/04','Sex 01/05'],
    horariosDisponiveis: ['08:00','09:30','11:00','14:00','15:30','17:00'],
    salas: ['Sala 1 — Cirurgia','Sala 2 — Endodontia','Sala 3 — Prótese','Sala 4 — Ortodontia','Sala 5 — Pediátrica','Sala 6 — Clínica geral'],
    correto: {
      sala: 'Sala 3 — Prótese',
      dias: ['Seg 27/04','Ter 28/04','Qua 29/04','Qui 30/04','Sex 01/05'],
      horarios: ['08:00','09:30','11:00']
    }
  },
  materiais: {
    opcoes: [
      { id:'protese-pronta', nome:'Prótese finalizada pelo laboratório' },
      { id:'articulador', nome:'Papel articular / carbono de oclusão' },
      { id:'broca-acab', nome:'Brocas de acabamento e polimento para acrílico' },
      { id:'pedra-pomes', nome:'Pedra-pomes / pasta de polimento' },
      { id:'espelho', nome:'Kit clínico básico (espelho, sonda, pinça)' },
      { id:'alginato', nome:'Alginato para eventual moldagem corretiva' },
      { id:'limas', nome:'Limas endodônticas' },
      { id:'forceps', nome:'Fórceps de extração' },
      { id:'sutura', nome:'Fio de sutura' }
    ],
    corretos:  ['protese-pronta','articulador','broca-acab','pedra-pomes','espelho','alginato'],
    criticos:  ['protese-pronta','articulador']
  },
  competenciasBase: [9,8,8,8,7,7,7,9]
},

/* ------------------------------------------------------------
   AG-A06 — Exodontia de siso (adolescente)
   ------------------------------------------------------------ */
{
  id: 'AG-A06',
  area: 'Agendamento',
  complexidade: 3,
  tempo: 10,
  titulo: 'Agendar exodontia de siso incluso',
  contexto: 'A mãe Cláudia Martins liga para agendar a extração dos 4 sisos do filho João, 17 anos, indicada pelo ortodontista. Hospital-dia, paciente sadio, sem alergias. A mãe precisa que seja em dia de semana pela manhã e pergunta qual sala será usada.',
  dadosPaciente: {
    campos: [
      { chave:'nome', label:'Nome do paciente', tipo:'text', obrigatorio:true, validacao:['joão','joao'] },
      { chave:'idade', label:'Idade', tipo:'text', obrigatorio:true, validacao:['17'] },
      { chave:'responsavel', label:'Responsável (menor de idade)', tipo:'text', obrigatorio:true, validacao:['cláudia','claudia','martins'] },
      { chave:'telefone', label:'Telefone do responsável', tipo:'text', obrigatorio:true },
      { chave:'procedimento', label:'Procedimento', tipo:'select', obrigatorio:true, opcoes:['Limpeza','Restauração','Endodontia','Extração','Cirurgia de implante','Prótese'], validacao:['extração','extracao'] },
      { chave:'termo', label:'Termo de consentimento assinado?', tipo:'select', obrigatorio:true, opcoes:['Sim','Não, agendar assinatura'], validacao:['sim','agendar','não'] },
      { chave:'alergia', label:'Alergias relatadas', tipo:'text', obrigatorio:false, placeholder:'ex.: nega' }
    ]
  },
  agenda: {
    diasDisponiveis: ['Seg 27/04','Ter 28/04','Qua 29/04','Qui 30/04','Sex 01/05','Sáb 02/05'],
    horariosDisponiveis: ['08:00','09:30','11:00','14:00','15:30','17:00'],
    salas: ['Sala 1 — Cirurgia','Sala 2 — Endodontia','Sala 3 — Prótese','Sala 4 — Ortodontia','Sala 5 — Pediátrica','Sala 6 — Clínica geral'],
    correto: {
      sala: 'Sala 1 — Cirurgia',
      dias: ['Seg 27/04','Ter 28/04','Qua 29/04','Qui 30/04','Sex 01/05'],
      horarios: ['08:00','09:30','11:00']
    }
  },
  materiais: {
    opcoes: [
      { id:'kit-cir', nome:'Kit cirúrgico estéril' },
      { id:'forceps', nome:'Fórceps para terceiro molar' },
      { id:'alavanca', nome:'Alavancas (reta, curva)' },
      { id:'sutura', nome:'Fio de sutura seda 3-0/4-0' },
      { id:'anestesico', nome:'Anestésico com vasoconstritor' },
      { id:'gaze', nome:'Gazes estéreis abundantes' },
      { id:'luvas-est', nome:'Luvas cirúrgicas estéreis' },
      { id:'campo-est', nome:'Campo cirúrgico estéril' },
      { id:'aspirador', nome:'Aspirador cirúrgico' },
      { id:'soro', nome:'Soro fisiológico estéril' },
      { id:'limas', nome:'Limas endodônticas' },
      { id:'profilaxia', nome:'Kit de profilaxia' }
    ],
    corretos:  ['kit-cir','forceps','alavanca','sutura','anestesico','gaze','luvas-est','campo-est','aspirador','soro'],
    criticos:  ['kit-cir','forceps','anestesico','luvas-est']
  },
  competenciasBase: [8,9,9,9,10,8,7,9]
},

/* ------------------------------------------------------------
   AG-A07 — Trauma dentário infantil (emergência)
   ------------------------------------------------------------ */
{
  id: 'AG-A07',
  area: 'Agendamento',
  complexidade: 3,
  tempo: 8,
  titulo: 'Emergência: criança caiu e quebrou o dente da frente',
  contexto: 'O pai Rogério Paz liga assustado: a filha Sofia, 8 anos, acabou de cair na escola e quebrou o dente da frente. Está com sangramento, chorando, sem perda de consciência. Ele está a 15 minutos da clínica. Pergunta se pode ir direto.',
  dadosPaciente: {
    campos: [
      { chave:'nome', label:'Nome da criança', tipo:'text', obrigatorio:true, validacao:['sofia'] },
      { chave:'idade', label:'Idade', tipo:'text', obrigatorio:true, validacao:['8'] },
      { chave:'responsavel', label:'Responsável', tipo:'text', obrigatorio:true, validacao:['rogério','rogerio','paz'] },
      { chave:'telefone', label:'Telefone', tipo:'text', obrigatorio:true },
      { chave:'procedimento', label:'Tipo de atendimento', tipo:'select', obrigatorio:true, opcoes:['Consulta','Urgência/trauma','Limpeza','Restauração'], validacao:['urgência','urgencia','trauma'] },
      { chave:'urgencia', label:'Grau de urgência', tipo:'select', obrigatorio:true, opcoes:['Eletivo','Preferencial','Urgente (hoje)'], validacao:['urgente'] },
      { chave:'sangramento', label:'Há sangramento ativo?', tipo:'text', obrigatorio:true, validacao:['sim','sangramento','leve','ativo'] }
    ]
  },
  agenda: {
    diasDisponiveis: ['Hoje','Amanhã'],
    horariosDisponiveis: ['Agora (encaixe)','08:00','09:30','11:00','14:00','15:30','17:00'],
    salas: ['Sala 1 — Cirurgia','Sala 2 — Endodontia','Sala 3 — Prótese','Sala 4 — Ortodontia','Sala 5 — Pediátrica','Sala 6 — Clínica geral'],
    correto: {
      sala: 'Sala 5 — Pediátrica',
      dias: ['Hoje'],
      horarios: ['Agora (encaixe)']
    }
  },
  materiais: {
    opcoes: [
      { id:'kit-cir', nome:'Kit clínico estéril' },
      { id:'rx-sensor', nome:'Sensor radiográfico' },
      { id:'gaze', nome:'Gazes estéreis (controle de sangramento)' },
      { id:'soro', nome:'Soro fisiológico' },
      { id:'anestesico', nome:'Anestésico tópico e injetável' },
      { id:'resina', nome:'Resina composta e kit de restauração estética' },
      { id:'pinos', nome:'Pinos de fibra de vidro' },
      { id:'calcio', nome:'Hidróxido de cálcio' },
      { id:'luvas-est', nome:'Luvas de procedimento' },
      { id:'odontograma', nome:'Ficha clínica / odontograma infantil' },
      { id:'limas', nome:'Limas endodônticas' },
      { id:'protese-pronta', nome:'Prótese total superior' }
    ],
    corretos:  ['kit-cir','rx-sensor','gaze','soro','anestesico','resina','calcio','luvas-est','odontograma'],
    criticos:  ['gaze','rx-sensor','anestesico']
  },
  competenciasBase: [10,10,9,8,8,8,7,9]
},

/* ------------------------------------------------------------
   AG-A08 — Raspagem periodontal
   ------------------------------------------------------------ */
{
  id: 'AG-A08',
  area: 'Agendamento',
  complexidade: 2,
  tempo: 8,
  titulo: 'Raspagem periodontal (paciente com gengivite)',
  contexto: 'O professor indicou para o Sr. Eduardo Tanaka, 45 anos, uma raspagem periodontal supra e subgengival em 4 sessões. Ele liga para marcar a primeira sessão. Trabalha em home-office, horários flexíveis. Pergunta se podem ser quartas-feiras para criar rotina.',
  dadosPaciente: {
    prefilled: { nome: 'Eduardo Tanaka', idade: '45' },
    campos: [
      { chave:'nome', label:'Nome completo', tipo:'text', obrigatorio:true, validacao:['eduardo','tanaka'] },
      { chave:'idade', label:'Idade', tipo:'text', obrigatorio:true, validacao:['45'] },
      { chave:'telefone', label:'Telefone', tipo:'text', obrigatorio:true },
      { chave:'procedimento', label:'Procedimento', tipo:'select', obrigatorio:true, opcoes:['Limpeza','Raspagem periodontal','Restauração','Endodontia','Extração'], validacao:['raspagem','periodontal'] },
      { chave:'sessoes', label:'Nº total de sessões programadas', tipo:'select', obrigatorio:true, opcoes:['1','2','3','4'], validacao:['4'] },
      { chave:'retorno', label:'É retorno ou primeira vez?', tipo:'select', obrigatorio:true, opcoes:['Primeira vez','Retorno'], validacao:['retorno'] }
    ]
  },
  agenda: {
    diasDisponiveis: ['Seg 27/04','Ter 28/04','Qua 29/04','Qui 30/04','Sex 01/05'],
    horariosDisponiveis: ['08:00','09:30','11:00','14:00','15:30','17:00'],
    salas: ['Sala 1 — Cirurgia','Sala 2 — Endodontia','Sala 3 — Prótese','Sala 4 — Ortodontia','Sala 5 — Pediátrica','Sala 6 — Clínica geral'],
    correto: {
      sala: 'Sala 6 — Clínica geral',
      dias: ['Qua 29/04'],
      horarios: ['08:00','09:30','11:00','14:00','15:30','17:00']
    }
  },
  materiais: {
    opcoes: [
      { id:'ultrassom', nome:'Pontas de ultrassom (raspagem supra e subgengival)' },
      { id:'curetas', nome:'Curetas de Gracey numeradas' },
      { id:'anestesico', nome:'Anestésico com vasoconstritor' },
      { id:'sonda-perio', nome:'Sonda periodontal milimetrada' },
      { id:'gaze', nome:'Gazes' },
      { id:'sugador', nome:'Sugador descartável' },
      { id:'clorexidina', nome:'Clorexidina 0,12% (bochecho pós)' },
      { id:'limas', nome:'Limas endodônticas' },
      { id:'kit-cir', nome:'Kit cirúrgico estéril' },
      { id:'forceps', nome:'Fórceps de extração' }
    ],
    corretos:  ['ultrassom','curetas','anestesico','sonda-perio','gaze','sugador','clorexidina'],
    criticos:  ['ultrassom','curetas','sonda-perio']
  },
  competenciasBase: [8,8,8,9,8,7,7,8]
},

/* ------------------------------------------------------------
   AG-A09 — Retorno pós-operatório (7 dias)
   ------------------------------------------------------------ */
{
  id: 'AG-A09',
  area: 'Agendamento',
  complexidade: 1,
  tempo: 6,
  titulo: 'Retorno de 7 dias pós-cirurgia de implante',
  contexto: 'Ricardo Oliveira (o mesmo paciente do AG-A01), agora já operou o implante há 5 dias. Liga para agendar o retorno para avaliação e, se possível, retirada dos pontos. Está sem dor, apenas leve edema residual. Pergunta qual é o melhor horário.',
  dadosPaciente: {
    prefilled: { nome: 'Ricardo Oliveira', idade: '58' },
    campos: [
      { chave:'nome', label:'Nome completo', tipo:'text', obrigatorio:true, validacao:['ricardo'] },
      { chave:'telefone', label:'Telefone', tipo:'text', obrigatorio:true },
      { chave:'procedimento', label:'Tipo de atendimento', tipo:'select', obrigatorio:true, opcoes:['Consulta inicial','Retorno pós-op','Limpeza','Outro'], validacao:['retorno'] },
      { chave:'queixa', label:'Queixa atual', tipo:'text', obrigatorio:true, validacao:['sem dor','edema','leve','sem queixa'] },
      { chave:'cirurgia_data', label:'Data da cirurgia', tipo:'text', obrigatorio:false, placeholder:'ex.: há 5 dias' }
    ]
  },
  agenda: {
    diasDisponiveis: ['Seg 04/05','Ter 05/05','Qua 06/05','Qui 07/05'],
    horariosDisponiveis: ['08:00','09:30','11:00','14:00','15:30','17:00'],
    salas: ['Sala 1 — Cirurgia','Sala 2 — Endodontia','Sala 3 — Prótese','Sala 4 — Ortodontia','Sala 5 — Pediátrica','Sala 6 — Clínica geral'],
    correto: {
      sala: 'Sala 1 — Cirurgia',
      dias: ['Seg 04/05','Ter 05/05'],
      horarios: ['08:00','09:30','11:00','14:00','15:30','17:00']
    }
  },
  materiais: {
    opcoes: [
      { id:'kit-sutura', nome:'Kit de remoção de sutura (pinça, tesoura)' },
      { id:'gaze', nome:'Gazes estéreis' },
      { id:'clorexidina', nome:'Clorexidina 0,12%' },
      { id:'espelho', nome:'Kit clínico básico' },
      { id:'soro', nome:'Soro fisiológico' },
      { id:'rx-sensor', nome:'Sensor radiográfico (controle, se indicado)' },
      { id:'forceps', nome:'Fórceps de extração' },
      { id:'limas', nome:'Limas endodônticas' },
      { id:'alginato', nome:'Alginato para moldagem' }
    ],
    corretos:  ['kit-sutura','gaze','clorexidina','espelho','soro'],
    criticos:  ['kit-sutura']
  },
  competenciasBase: [9,7,7,8,8,7,7,9]
},

/* ------------------------------------------------------------
   AG-A10 — Paciente diabético para extração
   ------------------------------------------------------------ */
{
  id: 'AG-A10',
  area: 'Agendamento',
  complexidade: 3,
  tempo: 12,
  titulo: 'Extração em paciente diabético — cuidados extras',
  contexto: 'Dona Vera Lúcia Ferreira, 68 anos, diabética tipo 2 (usa metformina, glicemia em jejum últimas 110), precisa extrair um dente condenado. Ela liga para marcar, pede preferência pela manhã e diz que tomou antibiótico profilático receitado pelo dentista. Pergunta se precisa trazer algum exame.',
  dadosPaciente: {
    prefilled: { nome: 'Vera Lúcia Ferreira', idade: '68' },
    campos: [
      { chave:'nome', label:'Nome completo', tipo:'text', obrigatorio:true, validacao:['vera','ferreira'] },
      { chave:'idade', label:'Idade', tipo:'text', obrigatorio:true, validacao:['68'] },
      { chave:'telefone', label:'Telefone', tipo:'text', obrigatorio:true },
      { chave:'procedimento', label:'Procedimento', tipo:'select', obrigatorio:true, opcoes:['Limpeza','Restauração','Endodontia','Extração','Prótese'], validacao:['extração','extracao'] },
      { chave:'medicacao', label:'Medicação contínua', tipo:'text', obrigatorio:true, validacao:['metformina','diabet','antibiótico','antibiotico'] },
      { chave:'comorbidade', label:'Comorbidade declarada', tipo:'text', obrigatorio:true, validacao:['diabet','dm','diabetes'] },
      { chave:'glicemia', label:'Glicemia mais recente', tipo:'text', obrigatorio:true, validacao:['110','100','90','controlada'] },
      { chave:'exames', label:'Exames trazidos', tipo:'text', obrigatorio:false, placeholder:'ex.: hemograma, glicemia em jejum' }
    ]
  },
  agenda: {
    diasDisponiveis: ['Seg 27/04','Ter 28/04','Qua 29/04','Qui 30/04','Sex 01/05'],
    horariosDisponiveis: ['08:00','09:30','11:00','14:00','15:30','17:00'],
    salas: ['Sala 1 — Cirurgia','Sala 2 — Endodontia','Sala 3 — Prótese','Sala 4 — Ortodontia','Sala 5 — Pediátrica','Sala 6 — Clínica geral'],
    correto: {
      sala: 'Sala 1 — Cirurgia',
      dias: ['Ter 28/04','Qua 29/04','Qui 30/04'],
      horarios: ['08:00','09:30']
    }
  },
  materiais: {
    opcoes: [
      { id:'forceps', nome:'Fórceps apropriado ao dente' },
      { id:'alavanca', nome:'Alavancas (reta e curva)' },
      { id:'anestesico', nome:'Anestésico com vasoconstritor (dose reduzida se indicado)' },
      { id:'sutura', nome:'Fio de sutura' },
      { id:'gaze', nome:'Gazes estéreis' },
      { id:'luvas-est', nome:'Luvas cirúrgicas estéreis' },
      { id:'clorexidina', nome:'Clorexidina 0,12% (pré e pós)' },
      { id:'glicosimetro', nome:'Glicosímetro (aferir glicemia antes do procedimento)' },
      { id:'kit-cir', nome:'Kit cirúrgico estéril' },
      { id:'soro', nome:'Soro fisiológico' },
      { id:'limas', nome:'Limas endodônticas' },
      { id:'profilaxia', nome:'Kit de profilaxia' }
    ],
    corretos:  ['forceps','alavanca','anestesico','sutura','gaze','luvas-est','clorexidina','glicosimetro','kit-cir','soro'],
    criticos:  ['forceps','anestesico','luvas-est','glicosimetro']
  },
  competenciasBase: [9,9,10,10,10,8,7,9]
}

];
