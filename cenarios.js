// ============================================================
// SimuCare — cenarios.js — Versão 4.0
// 170 cenários: 75 Agendamento + 40 Materiais + 55 Caso Clínico
// (inclui 30 novos: conflitos e situações de rotina clínica)
// Gerado automaticamente em 2026-04-21
// ============================================================

window.CENARIOS = [

// ════════════════════════════════════════════
// BLOCO 1: AGENDAMENTOS (AG-01 a AG-60)
// ════════════════════════════════════════════
{
  id:"AG-01", titulo:"Urgência: trauma dental em criança",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:3, area:"Urgência",
  contexto:`O Sr. Rogério Mendonça liga em pânico às 10h20. Ele informa que a filha SOFIA MENDONÇA, 8 anos, caiu da bicicleta no pátio da escola e fraturou o dente da frente. Está com sangramento leve na gengiva, chorando muito, mas não bateu a cabeça. Ele está a 10 minutos da clínica e pergunta se pode vir agora. Sofia escova os dentes 2 VEZES AO DIA (manhã e noite) e USA FIO DENTAL diariamente com ajuda dos pais. O pai não sabe informar sobre alergias da criança.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo da paciente",obrigatorio:true,validacao:["sofia mendonça","sofia"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["8","8 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"responsavel",label:"Responsável",obrigatorio:true,validacao:["rogério","rogério mendonça","pai"]},
    {chave:"tipo_atendimento",label:"Tipo de atendimento",obrigatorio:true,validacao:["urgência","emergência","trauma"]},
    {chave:"sangramento",label:"Há sangramento?",obrigatorio:true,validacao:["sim","leve","há sangramento"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não informado","nao informado","a confirmar","não sabe"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório A — Clínica Geral","Consultório de Emergência","Consultório Infantil","Consultório de Cirurgia","Sala de Radiologia"],
    correto:{sala:"Consultório de Emergência",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico sabor frutal"},
      {id:"m2",nome:"Tubete de anestésico pediátrico"},
      {id:"m3",nome:"Seringa carpule pediátrica e agulha curta"},
      {id:"m4",nome:"Gaze estéril"},
      {id:"m5",nome:"Espelho clínico, pinça e explorador"},
      {id:"m6",nome:"Fotopolimerizador LED"},
      {id:"m7",nome:"Resina composta de emergência (A2 e A3)"},
      {id:"m8",nome:"Ácido fosfórico 37%"},
      {id:"m9",nome:"Adesivo universal"},
      {id:"m10",nome:"Curetas de Gracey (raspagem periodontal)"},
      {id:"m11",nome:"Fórceps pediátrico de extração"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8","m9"]
  },
  competencias:[9,9,9,9,9,8,8,9]
},

{
  id:"AG-02", titulo:"Profilaxia semestral — adulto jovem",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:2, area:"Preventivo",
  contexto:`CARLA OLIVEIRA SANTOS, 28 anos, liga para agendar sua profilaxia semestral de rotina. Ela informa que escova os dentes 3 VEZES AO DIA (após as refeições) e USA FIO DENTAL diariamente. Sua última limpeza foi há 6 meses. Não relata dores nem sensibilidades. Não tem alergias a medicamentos. Não faz uso de nenhum medicamento contínuo. Ela prefere horário de manhã e não pode às quintas-feiras.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["carla oliveira santos","carla oliveira","carla"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["28","28 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes","após as refeições"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"alergias",label:"Alergias",obrigatorio:true,validacao:["não","nenhuma","sem alergia","não tem"]},
    {chave:"medicamentos",label:"Medicamentos em uso",obrigatorio:true,validacao:["não","nenhum","sem medicamento","não usa"]},
    {chave:"ultima_limpeza",label:"Última limpeza",obrigatorio:false,validacao:["6 meses","semestre","há 6"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","14:00","15:00","16:00"],
    salas:["Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Periodontia","Consultório de Emergência","Consultório Infantil"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","sexta"],horarios:["07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Aparelho de ultrassom"},
      {id:"m2",nome:"Taça de borracha"},
      {id:"m3",nome:"Pasta profilática"},
      {id:"m4",nome:"Fio dental"},
      {id:"m5",nome:"Sonda periodontal"},
      {id:"m6",nome:"Espelho, pinça e explorador"},
      {id:"m7",nome:"Curetas de Gracey (raspagem subgengival — não indicada aqui)"},
      {id:"m8",nome:"Revelador de placa"},
      {id:"m9",nome:"Limas endodônticas"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m8"]
  },
  competencias:[8,7,7,7,8,8,7,8]
},

{
  id:"AG-03", titulo:"Restauração de cárie Classe II — primeiro molar inferior",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Dentística",
  contexto:`MARCOS AURELIO FERREIRA, 35 anos, foi encaminhado da triagem após radiografia que revelou cárie interproximal no dente 36 (primeiro molar inferior esquerdo). Ele relata sensibilidade ao frio e ao doce há 3 semanas. Escova os dentes 2 VEZES AO DIA (manhã e noite) e NÃO USA FIO DENTAL. Não tem alergias conhecidas. Não usa medicamentos. A cárie é de profundidade moderada, sem sintomas espontâneos.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["marcos aurelio ferreira","marcos aurelio","marcos"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["35","35 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes","manhã e noite"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa","nao usa"]},
    {chave:"dente_afetado",label:"Dente afetado",obrigatorio:true,validacao:["36","dente 36","molar inferior esquerdo","molar"]},
    {chave:"sensibilidade",label:"Sensibilidade presente?",obrigatorio:true,validacao:["sim","ao frio","ao doce","sim, ao"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","08:30","09:00","09:30","10:00","14:00","14:30","15:00","15:30","16:00"],
    salas:["Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Endodontia","Consultório de Emergência","Consultório de Cirurgia"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","08:30","09:00","09:30","10:00","14:00","14:30","15:00","15:30","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Dique de borracha, clamp e arco"},
      {id:"m2",nome:"Broca esférica e cônica para preparo"},
      {id:"m3",nome:"Ácido fosfórico 37%"},
      {id:"m4",nome:"Adesivo universal"},
      {id:"m5",nome:"Resina composta"},
      {id:"m6",nome:"Sistema de matriz de Tofflemire e cunha"},
      {id:"m7",nome:"Fotopolimerizador LED"},
      {id:"m8",nome:"Brocas de acabamento e polimento"},
      {id:"m9",nome:"Guta-percha e cimento endodôntico"},
      {id:"m10",nome:"Fórceps de extração"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8"]
  },
  competencias:[7,8,8,8,7,7,7,8]
},

{
  id:"AG-04", titulo:"Extração simples de pré-molar para ortodontia",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Cirurgia",
  contexto:`ANDREA SANTOS, 22 anos, chega com encaminhamento do ortodontista para extração do dente 14 (primeiro pré-molar superior direito) como parte do planejamento ortodôntico. Ela escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Não tem alergias a medicamentos. Não usa anticoagulantes. Não é gestante. A pressão arterial foi aferida e está normal (120/80 mmHg). O dente está hígido, sem cárie.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["andrea santos","andrea"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["22","22 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"alergias",label:"Alergias a medicamentos",obrigatorio:true,validacao:["não","nenhuma","sem alergia"]},
    {chave:"anticoagulante",label:"Usa anticoagulante?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"gestante",label:"Gestante?",obrigatorio:true,validacao:["não","nao"]},
    {chave:"pressao",label:"Pressão arterial",obrigatorio:false,validacao:["120/80","normal"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","11:00","14:00","15:00","16:00"],
    salas:["Consultório A — Clínica Geral","Consultório de Cirurgia","Consultório de Endodontia","Consultório de Periodontia","Consultório Infantil"],
    correto:{sala:"Consultório de Cirurgia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["07:30","08:00","09:00","10:00","11:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico"},
      {id:"m2",nome:"Tubete de anestésico com vasoconstritor"},
      {id:"m3",nome:"Seringa carpule e agulhas"},
      {id:"m4",nome:"Sindesmótomo reto"},
      {id:"m5",nome:"Alavanca reta (elevador)"},
      {id:"m6",nome:"Fórceps para pré-molar superior"},
      {id:"m7",nome:"Gaze estéril"},
      {id:"m8",nome:"Soro fisiológico e seringa de irrigação"},
      {id:"m9",nome:"Bisturi e descolador de periósteo (extração complexa)"},
      {id:"m10",nome:"Sutura reabsorvível (extração simples não necessita)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8"]
  },
  competencias:[7,8,8,8,7,7,7,8]
},

{
  id:"AG-05", titulo:"Urgência — abscesso dentoalveolar agudo",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:3, area:"Urgência",
  contexto:`PAULO HENRIQUE ROCHA, 45 anos, liga às 8h relatando dor intensa e pulsátil no dente inferior esquerdo há 2 dias, com inchaço na bochecha, febre de 38°C e dificuldade para abrir a boca. Escova os dentes 1 VEZ AO DIA (somente à noite) e NÃO USA FIO DENTAL. Ele informa que tem alergia à PENICILINA. Faz uso de losartana 50mg para hipertensão. Pressão aferida: 145/90 mmHg. Precisa de atendimento imediato.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["paulo henrique rocha","paulo henrique","paulo"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["45","45 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["1 vez","uma vez","1x","somente à noite","noite apenas"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"alergia",label:"Alergias a medicamentos",obrigatorio:true,validacao:["penicilina","alergia a penicilina"]},
    {chave:"medicamentos",label:"Medicamentos em uso",obrigatorio:true,validacao:["losartana","anti-hipertensivo"]},
    {chave:"pressao",label:"Pressão arterial",obrigatorio:true,validacao:["145/90","elevada","alta"]},
    {chave:"febre",label:"Febre?",obrigatorio:true,validacao:["sim","38","febre"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Emergência","Consultório A — Clínica Geral","Consultório de Cirurgia","Consultório de Endodontia","Sala de Radiologia"],
    correto:{sala:"Consultório de Emergência",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico"},
      {id:"m2",nome:"Tubetes de anestésico (mepivacaína — sem vasoconstritor, pois hipertenso)"},
      {id:"m3",nome:"Seringa carpule e agulha longa"},
      {id:"m4",nome:"Espelho, pinça, explorador e sonda periodontal"},
      {id:"m5",nome:"Dique de borracha, clamp e arco"},
      {id:"m6",nome:"Broca esférica para abertura coronária"},
      {id:"m7",nome:"Hipoclorito de sódio 2,5% e seringa endodôntica"},
      {id:"m8",nome:"Curativo intracanal (PMCC ou cresofeno)"},
      {id:"m9",nome:"Penicilina (antibiótico contraindicado — alergia!)"},
      {id:"m10",nome:"Coltosol ou CIV provisório"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8","m10"]
  },
  competencias:[9,9,9,9,9,8,8,9]
},

{
  id:"AG-06", titulo:"Profilaxia e orientação de higiene — adolescente",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:2, area:"Preventivo",
  contexto:`LUCAS RODRIGUES, 15 anos, é trazido pela mãe para profilaxia semestral. A mãe relata que Lucas escova os dentes APENAS 1 VEZ AO DIA (geralmente à noite) e NUNCA USA FIO DENTAL. Apresenta gengivite leve e acúmulo moderado de biofilme, especialmente na região dos molares. Lucas não tem alergias e não usa nenhum medicamento. A mãe também pede que alguém oriente Lucas sobre a técnica correta de escovação pois ele está com aparelho ortodôntico fixo há 6 meses.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["lucas rodrigues","lucas"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["15","15 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["1 vez","uma vez","1x","apenas à noite"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","nunca","não usa"]},
    {chave:"aparelho_ortod",label:"Usa aparelho ortodôntico?",obrigatorio:true,validacao:["sim","usa","fixo","ortodôntico"]},
    {chave:"responsavel",label:"Responsável",obrigatorio:true,validacao:["mãe","mae","responsável"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00"],
    salas:["Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório Infantil","Consultório de Periodontia","Consultório de Emergência"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Aparelho de ultrassom"},
      {id:"m2",nome:"Taça de borracha e pasta profilática"},
      {id:"m3",nome:"Fio dental e escova interdental"},
      {id:"m4",nome:"Revelador de placa"},
      {id:"m5",nome:"Escova monopenacho (para higiene ao redor do braquete)"},
      {id:"m6",nome:"Sonda periodontal e espelho"},
      {id:"m7",nome:"Modelo didático de arcada para demonstração"},
      {id:"m8",nome:"Curetas de Gracey (raspagem subgengival — não necessário)"},
      {id:"m9",nome:"Limas endodônticas"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[8,7,6,7,8,8,7,8]
},

{
  id:"AG-07", titulo:"Restauração estética — fratura de ângulo incisal",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Dentística",
  contexto:`FERNANDA LIMA, 19 anos, universitária, fraturou o ângulo mesioincisal do dente 11 (incisivo central superior direito) ao morder um objeto duro ontem. O fragmento não foi encontrado. O dente apresenta vitalidade preservada e sem dor espontânea. Fernanda escova os dentes 3 VEZES AO DIA e USA FIO DENTAL ao menos uma vez por dia. Não tem alergias. Não usa medicamentos. Está muito preocupada com a estética e tem um evento importante em 5 dias.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["fernanda lima","fernanda"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["19","19 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","ao menos","1 vez","diariamente"]},
    {chave:"dente",label:"Dente afetado",obrigatorio:true,validacao:["11","dente 11","incisivo central","central superior direito"]},
    {chave:"vitalidade",label:"Vitalidade do dente",obrigatorio:true,validacao:["positiva","sim","preservada","tem vitalidade"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"],
    salas:["Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Emergência","Consultório de Endodontia","Consultório de Cirurgia"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico e tubete de anestésico"},
      {id:"m2",nome:"Dique de borracha e clamp anterior"},
      {id:"m3",nome:"Guia/índice de silicone palatal"},
      {id:"m4",nome:"Ácido fosfórico 37% e adesivo universal"},
      {id:"m5",nome:"Resina de dentina e resina de esmalte (cores estratificadas)"},
      {id:"m6",nome:"Fotopolimerizador LED"},
      {id:"m7",nome:"Brocas de acabamento e discos de polimento"},
      {id:"m8",nome:"Fórceps anterior (extração — não indicada)"},
      {id:"m9",nome:"Limas endodônticas"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[7,8,9,8,8,7,7,9]
},

{
  id:"AG-08", titulo:"Raspagem subgengival — periodontite moderada",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:3, area:"Periodontia",
  contexto:`ROBERTO MENEZES, 52 anos, retorna para início do tratamento de raspagem e alisamento radicular (RAR) após diagnóstico de periodontite generalizada estágio II. Ele escova os dentes 2 VEZES AO DIA (manhã e noite) mas NÃO USA FIO DENTAL há anos. Apresenta bolsas periodontais de 4 a 6 mm em posteriores. Não tem alergias. Faz uso de metformina para diabetes tipo 2 — glicemia controlada (última: 115 mg/dL). A sessão de hoje é o quadrante inferior esquerdo.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["roberto menezes","roberto"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["52","52 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","manhã e noite"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"medicamentos",label:"Medicamentos em uso",obrigatorio:true,validacao:["metformina","diabetes","antidiabético"]},
    {chave:"glicemia",label:"Glicemia recente",obrigatorio:true,validacao:["115","controlada","115 mg"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"],
    salas:["Consultório de Periodontia","Consultório A — Clínica Geral","Consultório de Cirurgia","Consultório de Endodontia","Consultório de Emergência"],
    correto:{sala:"Consultório de Periodontia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico e tubete de anestésico"},
      {id:"m2",nome:"Seringa carpule e agulha longa"},
      {id:"m3",nome:"Curetas de Gracey (11-12 e 13-14 para posteriores)"},
      {id:"m4",nome:"Aparelho de ultrassom com inserto subgengival slim"},
      {id:"m5",nome:"Sonda periodontal milimetrada"},
      {id:"m6",nome:"Seringa de irrigação com clorexidina 0,12%"},
      {id:"m7",nome:"Gaze, espelho, pinça"},
      {id:"m8",nome:"Bisturi e sutura (cirurgia perio — não indicada hoje)"},
      {id:"m9",nome:"Dique de borracha e clamp"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[8,8,8,8,8,7,7,8]
},

{
  id:"AG-09", titulo:"Urgência endodôntica — dor intensa pulsátil",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:3, area:"Endodontia",
  contexto:`CRISTINA ALVES, 38 anos, liga às 7h30 relatando dor espontânea intensa e pulsátil no dente inferior esquerdo há 2 noites, sem alivio com dipirona. Não conseguiu dormir. Ela escova os dentes 2 VEZES AO DIA e USA FIO DENTAL eventualmente (2 ou 3 vezes por semana). Não tem alergias. Não usa medicamentos contínuos. A dor piora muito com o calor (como em bebidas quentes) e tem leve melhora com frio. Suspeita de pulpite irreversível.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["cristina alves","cristina"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["38","38 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","eventualmente","2 ou 3","às vezes"]},
    {chave:"tipo_dor",label:"Característica da dor",obrigatorio:true,validacao:["pulsátil","espontânea","intensa","piora com calor"]},
    {chave:"alergias",label:"Alergias",obrigatorio:true,validacao:["não","nenhuma"]},
    {chave:"medicamentos",label:"Medicamentos em uso",obrigatorio:true,validacao:["não","nenhum"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00"],
    salas:["Consultório de Endodontia","Consultório de Emergência","Consultório A — Clínica Geral","Consultório de Cirurgia","Sala de Radiologia"],
    correto:{sala:"Consultório de Endodontia",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico e tubetes de anestésico (bloqueio)"},
      {id:"m2",nome:"Seringa carpule e agulha longa"},
      {id:"m3",nome:"Dique de borracha, clamp e arco"},
      {id:"m4",nome:"Broca esférica e troncocônica (abertura coronária)"},
      {id:"m5",nome:"Limas K manuais nº 10 e 15"},
      {id:"m6",nome:"Hipoclorito de sódio 2,5% + seringa endodôntica"},
      {id:"m7",nome:"Curativo intracanal (PMCC)"},
      {id:"m8",nome:"Coltosol ou IRM (selamento provisório)"},
      {id:"m9",nome:"Guta-percha e cimento endodôntico (obturação — 2ª sessão)"},
      {id:"m10",nome:"Fórceps de extração"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8"]
  },
  competencias:[9,9,9,9,8,7,7,9]
},

{
  id:"AG-10", titulo:"Clareamento dental em consultório",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:2, area:"Estética",
  contexto:`VANESSA PEREIRA, 31 anos, deseja realizar clareamento dental em consultório para eliminar manchas extrínsecas por café e chá que a incomodam estéticamente. Ela escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Não tem histórico de sensibilidade dentinária. Não está grávida. Não está amamentando. Não tem restaurações no sorriso que precisem ser substituídas após o clareamento. A dentista solicitou profilaxia prévia na mesma sessão.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["vanessa pereira","vanessa"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["31","31 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"sensibilidade",label:"Histórico de sensibilidade",obrigatorio:true,validacao:["não","nenhuma","sem sensibilidade"]},
    {chave:"gestante",label:"Gestante ou amamentando?",obrigatorio:true,validacao:["não","nao"]},
    {chave:"motivacao",label:"Motivo do clareamento",obrigatorio:false,validacao:["café","chá","manchas"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","14:00","15:00","16:00"],
    salas:["Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Periodontia","Consultório de Cirurgia","Consultório Infantil"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Gel clareador de peróxido de hidrogênio 35%"},
      {id:"m2",nome:"Protetor gengival (barreira gengival fotopolimerizável)"},
      {id:"m3",nome:"Afastador labial"},
      {id:"m4",nome:"Fotopolimerizador ou lâmpada de fotoativação LED"},
      {id:"m5",nome:"Taça de borracha e pasta profilática (profilaxia prévia)"},
      {id:"m6",nome:"Gaze e cotonetes"},
      {id:"m7",nome:"Papel de articulação (ajuste oclusal — não necessário aqui)"},
      {id:"m8",nome:"Dique de borracha e clamp (endodontia — não indicado aqui)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6"]
  },
  competencias:[7,7,7,7,8,8,7,8]
},

{
  id:"AG-11", titulo:"Confecção de PPR — moldagem e plano de tratamento",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Prótese",
  contexto:`MARIA APARECIDA ROCHA, 67 anos, é encaminhada para confecção de prótese parcial removível inferior. Ela perdeu os dentes 35, 36 e 37 (Classe III de Kennedy modificada). Os dentes remanescentes têm boa condição. Ela escova os dentes SOMENTE 1 VEZ AO DIA (à noite) e USA FIO DENTAL raramente (menos de uma vez por semana). Não tem alergias. Faz uso de AAS 100mg e enalapril 10mg diariamente. A pressão arterial está controlada: 130/85 mmHg.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["maria aparecida rocha","maria aparecida","dona maria"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["67","67 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["1 vez","uma vez","1x","à noite","somente"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["raramente","menos de uma","quase nunca","não","eventualmente"]},
    {chave:"medicamentos",label:"Medicamentos em uso",obrigatorio:true,validacao:["aas","enalapril","aspirina","anti-hipertensivo"]},
    {chave:"pressao",label:"Pressão arterial",obrigatorio:true,validacao:["130/85","controlada"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"],
    salas:["Consultório de Prótese","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Cirurgia","Consultório de Endodontia"],
    correto:{sala:"Consultório de Prótese",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Alginato e moldeira de estoque inferior"},
      {id:"m2",nome:"Gesso tipo II para modelo de estudo"},
      {id:"m3",nome:"Cuba de borracha e espátulas"},
      {id:"m4",nome:"Cera utilidade para bordejamento"},
      {id:"m5",nome:"Registro de mordida em cera"},
      {id:"m6",nome:"Silicone de adição (prótese fixa — não para PPR preliminar)"},
      {id:"m7",nome:"Fórceps de extração"}
    ],
    corretos:["m1","m2","m3","m4","m5"]
  },
  competencias:[7,7,7,8,7,7,7,8]
},

{
  id:"AG-12", titulo:"Restauração de cárie em dente decíduo — criança",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Odontopediatria",
  contexto:`TOMÁS FERREIRA, 7 anos, é trazido pela mãe Sra. Andréia Ferreira para restauração de cárie no dente 74 (primeiro molar decíduo inferior esquerdo). A mãe relata que Tomás escova os dentes 2 VEZES AO DIA com ajuda dela e NÃO USA FIO DENTAL. Tomás tem histórico de comportamento ansioso no consultório. Não tem alergias a medicamentos. Não usa nenhum medicamento. Peso: 24 kg (importante para dose de anestésico). A cárie é moderada, sem envolvimento pulpar.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome da criança",obrigatorio:true,validacao:["tomás ferreira","tomás","tomas"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["7","7 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"responsavel",label:"Nome do responsável",obrigatorio:true,validacao:["andréia","andreia","mãe","mae"]},
    {chave:"peso",label:"Peso (para dose de anestésico)",obrigatorio:true,validacao:["24","24 kg"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","14:00","15:00"],
    salas:["Consultório Infantil","Consultório A — Clínica Geral","Consultório de Emergência","Consultório de Cirurgia","Consultório de Endodontia"],
    correto:{sala:"Consultório Infantil",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","14:00","15:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico sabor frutal"},
      {id:"m2",nome:"Tubete de anestésico pediátrico (artucaína 4%)"},
      {id:"m3",nome:"Seringa carpule pediátrica e agulha curta"},
      {id:"m4",nome:"Broca esférica de baixa rotação"},
      {id:"m5",nome:"Cureta de dentina pediátrica"},
      {id:"m6",nome:"Cimento de ionômero de vidro (material de eleição em decíduo)"},
      {id:"m7",nome:"Sistema de matriz pediátrica"},
      {id:"m8",nome:"Limas endodônticas pediátricas (pulpotomia — não indicada aqui)"},
      {id:"m9",nome:"Fórceps pediátrico (extração — não indicada)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[8,8,8,8,8,8,7,9]
},

{
  id:"AG-13", titulo:"Primeira consulta odontopediatria — bebê de 1 ano",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:2, area:"Odontopediatria",
  contexto:`A Sra. JULIANA MATOS liga para agendar a PRIMEIRA CONSULTA ODONTOLÓGICA do filho ENZO MATOS, 1 ANO E 2 MESES. Ela está preocupada pois percebeu uma mancha branca em um dentinho. Enzo está amamentando e a mãe diz que escova os dentes do bebê 2 VEZES AO DIA com dedeira. Não usa fio dental ainda (bebê). Enzo não tem alergias conhecidas. A mãe tem muitas dúvidas sobre alimentação, fluorterapia e hábitos de sucção.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome do bebê",obrigatorio:true,validacao:["enzo matos","enzo"]},
    {chave:"idade",label:"Idade do bebê",obrigatorio:true,validacao:["1 ano","1 ano e 2","14 meses"]},
    {chave:"freq_escovacao",label:"Frequência de escovação (bebê)",obrigatorio:true,validacao:["2 vezes","2x","dedeira"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa","bebê"]},
    {chave:"responsavel",label:"Nome da responsável",obrigatorio:true,validacao:["juliana matos","juliana","mãe"]},
    {chave:"amamentacao",label:"Está amamentando?",obrigatorio:true,validacao:["sim","está","amamentando"]},
    {chave:"alergias",label:"Alergias conhecidas",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","14:00","15:00","16:00"],
    salas:["Consultório Infantil","Consultório A — Clínica Geral","Consultório de Emergência","Consultório B — Clínica Geral","Consultório de Periodontia"],
    correto:{sala:"Consultório Infantil",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Espelho bucal pequeno (nº 2)"},
      {id:"m2",nome:"Sonda exploradora de ponta romba"},
      {id:"m3",nome:"Gaze estéril (para higienizar a boca do bebê durante exame)"},
      {id:"m4",nome:"Flúor verniz (para aplicação preventiva)"},
      {id:"m5",nome:"Material educativo (folder sobre bebê de colo)"},
      {id:"m6",nome:"Dedeira de silicone (para demonstrar escovação à mãe)"},
      {id:"m7",nome:"Limas endodônticas (tratamento de canal — bebê)"},
      {id:"m8",nome:"Anestésico tópico (bebê de 1 ano — não necessário para exame simples)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6"]
  },
  competencias:[9,7,6,7,8,8,7,9]
},

{
  id:"AG-14", titulo:"Profilaxia em gestante — segundo trimestre",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Preventivo",
  contexto:`ANA BEATRIZ SOUZA, 26 anos, grávida de 18 semanas (2º trimestre), liga para agendar profilaxia. O obstetra já autorizou o atendimento odontológico. Ela relata sangramento gengival ao escovar, o que a preocupa. Escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Não tem alergias. Toma sulfato ferroso e ácido fólico. Sua pressão arterial está normal (110/70 mmHg). Não pode ficar muito tempo em posição supina.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["ana beatriz souza","ana beatriz","ana"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["26","26 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"semanas_gestacao",label:"Semanas de gestação",obrigatorio:true,validacao:["18","18 semanas","segundo trimestre","2º trimestre"]},
    {chave:"medicamentos",label:"Medicamentos em uso",obrigatorio:true,validacao:["sulfato ferroso","ácido fólico","ferro","folico"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","14:00","15:00"],
    salas:["Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Periodontia","Consultório Infantil","Consultório de Emergência"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","14:00","15:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Aparelho de ultrassom"},
      {id:"m2",nome:"Taça de borracha e pasta profilática"},
      {id:"m3",nome:"Sonda periodontal milimetrada"},
      {id:"m4",nome:"Espelho, pinça e explorador"},
      {id:"m5",nome:"Clorexidina 0,12% (bochecho — seguro na gestação)"},
      {id:"m6",nome:"Revelador de placa para motivação"},
      {id:"m7",nome:"Flúor gel (uso cauteloso na gestação — verificar com dentista)"},
      {id:"m8",nome:"Antibiótico por via oral (não indicado preventivamente)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6"]
  },
  competencias:[9,8,7,8,9,8,7,9]
},

{
  id:"AG-15", titulo:"Urgência — alveolite seca pós-extração",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:2, area:"Urgência",
  contexto:`RENATO COSTA, 41 anos, liga 3 dias após extração do dente 38 relatando dor intensa e crescente no local (não cedeu com ibuprofeno), mau cheiro na boca e alvéolo com aparência esbranquiçada sem coágulo visível. Diagnóstico clínico suspeito: ALVEOLITE SECA. Renato escova os dentes 2 VEZES AO DIA e USA FIO DENTAL eventualmente. Não tem alergias. Ele confessa que fumou cigarros no dia da extração (contraindicado). Não usa medicamentos contínuos.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["renato costa","renato"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["41","41 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","eventualmente","às vezes"]},
    {chave:"data_extracao",label:"Data da extração",obrigatorio:true,validacao:["3 dias","há 3"]},
    {chave:"fumante",label:"Fumou após extração?",obrigatorio:true,validacao:["sim","fumou","cigarros"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00"],
    salas:["Consultório de Emergência","Consultório de Cirurgia","Consultório A — Clínica Geral","Consultório de Endodontia","Consultório de Periodontia"],
    correto:{sala:"Consultório de Cirurgia",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico e tubete de anestésico local"},
      {id:"m2",nome:"Seringa de irrigação com soro fisiológico (lavagem do alvéolo)"},
      {id:"m3",nome:"Curativo alveolar com eugenol (Alvogyl ou similar)"},
      {id:"m4",nome:"Pinça clínica e espelho"},
      {id:"m5",nome:"Gaze estéril"},
      {id:"m6",nome:"Sutura reabsorvível (suturar novamente — não indicado)"},
      {id:"m7",nome:"Fórceps (segunda extração — não indicada)"}
    ],
    corretos:["m1","m2","m3","m4","m5"]
  },
  competencias:[8,8,8,8,7,7,7,8]
},

{
  id:"AG-16", titulo:"Exodontia de terceiro molar incluso",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:3, area:"Cirurgia",
  contexto:`ISABELA CARVALHO, 23 anos, chega com encaminhamento para extração do dente 38 (terceiro molar inferior esquerdo incluso em posição mesioangular), confirmado em radiografia panorâmica. Ela relata episódios repetidos de pericoronarite (inflamação da gengiva ao redor do siso). Escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Não tem alergias. Não usa medicamentos. PA: 115/75 mmHg. A extração requerirá retalho, osteotomia e odontossecção.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["isabela carvalho","isabela"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["23","23 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"dente",label:"Dente a ser extraído",obrigatorio:true,validacao:["38","dente 38","siso","terceiro molar"]},
    {chave:"alergias",label:"Alergias",obrigatorio:true,validacao:["não","nenhuma"]},
    {chave:"medicamentos",label:"Medicamentos em uso",obrigatorio:true,validacao:["não","nenhum"]},
    {chave:"pressao",label:"Pressão arterial",obrigatorio:false,validacao:["115/75","normal"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","14:00","15:00"],
    salas:["Consultório de Cirurgia","Consultório A — Clínica Geral","Consultório de Endodontia","Consultório de Periodontia","Consultório de Emergência"],
    correto:{sala:"Consultório de Cirurgia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["07:30","08:00","09:00","10:00","14:00","15:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico e tubetes (bloqueio alveolar inferior + lingual + bucal)"},
      {id:"m2",nome:"Seringa carpule e agulha longa"},
      {id:"m3",nome:"Bisturi cabo 3 + lâmina 15C"},
      {id:"m4",nome:"Descolador de periósteo (Molt)"},
      {id:"m5",nome:"Peça de mão cirúrgica + broca cirúrgica troncocônica"},
      {id:"m6",nome:"Soro fisiológico e seringa de irrigação (refrigeração)"},
      {id:"m7",nome:"Alavancas anguladas e fórceps molar"},
      {id:"m8",nome:"Cureta cirúrgica"},
      {id:"m9",nome:"Porta-agulha e sutura reabsorvível 3-0"},
      {id:"m10",nome:"Gaze e compressas cirúrgicas"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8","m9","m10"]
  },
  competencias:[8,9,9,8,8,7,7,9]
},

{
  id:"AG-17", titulo:"Radiografia panorâmica — avaliação ortodôntica",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:1, area:"Radiologia",
  contexto:`GUSTAVO MACHADO, 17 anos, é trazido pelos pais para início de tratamento ortodôntico. O ortodontista solicitou radiografia panorâmica para avaliação completa dos dentes permanentes, presença de terceiros molares e desenvolvimento ósseo. Gustavo escova os dentes 2 VEZES AO DIA e USA FIO DENTAL ocasionalmente (1 ou 2 vezes por semana). Não tem alergias. Não usa medicamentos. Não há relato de sintomas ou dores.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["gustavo machado","gustavo"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["17","17 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","ocasionalmente","1 ou 2","às vezes"]},
    {chave:"exame_solicitado",label:"Exame solicitado",obrigatorio:true,validacao:["panorâmica","panorâmico","radiografia"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00"],
    salas:["Sala de Radiologia","Consultório A — Clínica Geral","Consultório de Periodontia","Consultório Infantil","Consultório de Cirurgia"],
    correto:{sala:"Sala de Radiologia",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Aparelho de raios X panorâmico"},
      {id:"m2",nome:"Avental de chumbo"},
      {id:"m3",nome:"Colar cervical de chumbo"},
      {id:"m4",nome:"Guia de mordida descartável"},
      {id:"m5",nome:"Chassi panorâmico ou sensor digital"},
      {id:"m6",nome:"Filme periapical e posicionador (exame diferente — periapical)"},
      {id:"m7",nome:"Alginato e moldeira (moldagem — outro procedimento)"}
    ],
    corretos:["m1","m2","m3","m4","m5"]
  },
  competencias:[6,7,7,8,8,7,6,7]
},

{
  id:"AG-18", titulo:"Profilaxia — paciente diabético tipo 2",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Preventivo",
  contexto:`JOSÉ DOS SANTOS, 61 anos, chega para profilaxia semestral. Ele é diabético tipo 2 há 8 anos, com glicemia controlada (última glicemia: 130 mg/dL). Escova os dentes 2 VEZES AO DIA (manhã e após o jantar) e USA FIO DENTAL de 2 a 3 vezes por semana. Faz uso de metformina 850mg e glibenclamida 5mg. Não tem alergias. O exame periodontal revelou gengivite leve generalizada — o diabetes aumenta a susceptibilidade periodontal. PA: 128/82 mmHg (adequada).`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["josé dos santos","jose dos santos","josé","seu josé"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["61","61 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","manhã e","após o jantar"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","2 a 3","2 ou 3","às vezes"]},
    {chave:"medicamentos",label:"Medicamentos em uso",obrigatorio:true,validacao:["metformina","glibenclamida","antidiabético","diabetes"]},
    {chave:"glicemia",label:"Glicemia recente",obrigatorio:true,validacao:["130","controlada","130 mg"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","14:00","15:00","16:00"],
    salas:["Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Periodontia","Consultório de Emergência","Consultório de Cirurgia"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Aparelho de ultrassom"},
      {id:"m2",nome:"Taça de borracha e pasta profilática"},
      {id:"m3",nome:"Sonda periodontal milimetrada"},
      {id:"m4",nome:"Revelador de placa"},
      {id:"m5",nome:"Espelho, pinça, explorador"},
      {id:"m6",nome:"Glicosímetro (verificar glicemia pré-atendimento)"},
      {id:"m7",nome:"Gaze e sugador"},
      {id:"m8",nome:"Curetas de Gracey (raspagem subgengival — avaliar se necessário)"},
      {id:"m9",nome:"Insulina (medicamento do paciente — clínica não administra)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[8,8,7,8,8,8,7,8]
},

{
  id:"AG-19", titulo:"Avaliação e controle de PA — paciente hipertenso",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Clínica Geral",
  contexto:`LÚCIA FERREIRA, 58 anos, chegou para consulta de restauração mas ao aferir a pressão arterial na recepção obteve PA de 165/100 mmHg. A paciente relata que esqueceu de tomar o remédio esta manhã. Ela escova os dentes 2 VEZES AO DIA e USA FIO DENTAL de vez em quando (cerca de 2 vezes por semana). Faz uso de losartana 50mg e hidroclorotiazida 25mg diariamente. Não tem alergias. A conduta será: orientar a paciente, aguardar repouso de 10 minutos e reaferir a PA antes de decidir sobre o procedimento.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["lúcia ferreira","lucia ferreira","lúcia","dona lúcia"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["58","58 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","às vezes","2 vezes","eventualmente"]},
    {chave:"pressao_inicial",label:"Pressão arterial inicial",obrigatorio:true,validacao:["165/100","elevada","alta"]},
    {chave:"medicamentos",label:"Medicamentos em uso",obrigatorio:true,validacao:["losartana","hidroclorotiazida","anti-hipertensivo"]},
    {chave:"tomou_remedio",label:"Tomou medicação hoje?",obrigatorio:true,validacao:["não","não tomou","esqueceu"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"],
    salas:["Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Emergência","Consultório de Cirurgia","Consultório de Periodontia"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Esfigmomanômetro e estetoscópio (aferição de PA)"},
      {id:"m2",nome:"Espelho, pinça, explorador (exame bucal)"},
      {id:"m3",nome:"Anestésico sem vasoconstritor (mepivacaína — se proceder)"},
      {id:"m4",nome:"Tubete de anestésico com vasoconstritor (CONTRAINDICADO para PA > 160/100)"},
      {id:"m5",nome:"Gaze"},
      {id:"m6",nome:"Ficha de registro de PA"},
      {id:"m7",nome:"Fórceps de extração (não indicado hoje)"}
    ],
    corretos:["m1","m2","m3","m5","m6"]
  },
  competencias:[9,8,7,8,9,8,8,9]
},

{
  id:"AG-20", titulo:"Extração em paciente em uso de anticoagulante oral",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:2, area:"Cirurgia",
  contexto:`ANTÔNIO BATISTA, 70 anos, precisa extrair o dente 45 (segundo pré-molar inferior direito) que está comprometido. Ele faz uso de VARFARINA (warfarina) por fibrilação atrial, com INR de 2,8 (dentro do intervalo terapêutico de 2-3). Seu cardiologista foi consultado e AUTORIZOU a extração SEM SUSPENDER a varfarina, desde que com medidas hemostáticas locais. Ele escova os dentes 2 VEZES AO DIA e USA FIO DENTAL raramente (1 vez por semana). Não tem alergias.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["antônio batista","antonio batista","antônio","seu antônio"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["70","70 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","raramente","1 vez","às vezes"]},
    {chave:"medicamento_coag",label:"Anticoagulante em uso",obrigatorio:true,validacao:["varfarina","warfarina","anticoagulante"]},
    {chave:"inr",label:"Valor do INR",obrigatorio:true,validacao:["2,8","2.8","dentro do intervalo","terapêutico"]},
    {chave:"autorizacao_cardio",label:"Autorização do cardiologista",obrigatorio:true,validacao:["sim","autorizado","cardiologista autorizou"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00"],
    salas:["Consultório de Cirurgia","Consultório A — Clínica Geral","Consultório de Endodontia","Consultório de Emergência","Consultório de Periodontia"],
    correto:{sala:"Consultório de Cirurgia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["07:30","08:00","09:00","10:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico e anestésico local sem vasoconstritor (mepivacaína 3%)"},
      {id:"m2",nome:"Seringa carpule e agulha"},
      {id:"m3",nome:"Sindesmótomo e alavanca"},
      {id:"m4",nome:"Fórceps para pré-molar inferior"},
      {id:"m5",nome:"Gaze estéril e compressas (pressão hemostática)"},
      {id:"m6",nome:"Esponja hemostática de colágeno (Hemospon ou similar) para o alvéolo"},
      {id:"m7",nome:"Sutura reabsorvível (fechamento do alvéolo para hemostasia)"},
      {id:"m8",nome:"Ácido tranexâmico (enxagúe hemostático pós-extração)"},
      {id:"m9",nome:"Vitamina K via oral (para reverter varfarina — não indicado pelo cardiologista)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8"]
  },
  competencias:[9,9,9,9,8,8,8,9]
},

{
  id:"AG-21", titulo:"Frenectomia labial superior — criança com diastema",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Cirurgia",
  contexto:`MIGUEL OLIVEIRA, 9 anos, é trazido pela mãe após indicação ortodôntica para FRENECTOMIA LABIAL SUPERIOR. O freio inserido baixo está causando diastema entre os incisivos centrais superiores permanentes. Após a frenectomia, o ortodontista dará continuidade ao fechamento do diastema com aparelho. Miguel escova os dentes 2 VEZES AO DIA e USA FIO DENTAL com ajuda da mãe 3 vezes por semana. Não tem alergias. Não usa medicamentos. Peso: 31 kg.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome do paciente",obrigatorio:true,validacao:["miguel oliveira","miguel"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["9","9 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","3 vezes","com ajuda"]},
    {chave:"responsavel",label:"Responsável",obrigatorio:true,validacao:["mãe","mae"]},
    {chave:"peso",label:"Peso (para dose de anestésico)",obrigatorio:true,validacao:["31","31 kg"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","14:00","15:00"],
    salas:["Consultório de Cirurgia","Consultório Infantil","Consultório A — Clínica Geral","Consultório de Endodontia","Consultório de Periodontia"],
    correto:{sala:"Consultório de Cirurgia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["07:30","08:00","09:00","10:00","14:00","15:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico sabor frutal"},
      {id:"m2",nome:"Tubete de anestésico pediátrico e seringa carpule pediátrica"},
      {id:"m3",nome:"Bisturi cabo 3 + lâmina 15"},
      {id:"m4",nome:"Pinça hemostática e tesoura cirúrgica"},
      {id:"m5",nome:"Porta-agulha e sutura reabsorvível 4-0"},
      {id:"m6",nome:"Gaze estéril e solução de clorexidina 0,12%"},
      {id:"m7",nome:"Dique de borracha e clamp (para endodontia/dentística — não cirurgia)"},
      {id:"m8",nome:"Fórceps pediátrico (extração — não indicada)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6"]
  },
  competencias:[8,8,9,8,7,7,7,9]
},

{
  id:"AG-22", titulo:"Raspagem supragengival — gengivite com tártaro moderado",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:2, area:"Periodontia",
  contexto:`SANDRA TEIXEIRA, 44 anos, retorna após 1 ano sem profilaxia. Apresenta cálculo supragengival moderado generalizado com sangramento gengival difuso ao exame. Bolsas de até 3 mm (gengivite). Ela escova os dentes SOMENTE 2 VEZES AO DIA (sem técnica adequada) e USA FIO DENTAL apenas 2 vezes por semana. Não tem alergias. Não usa medicamentos. Refere que o sangramento ao escovar já dura 4 meses.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["sandra teixeira","sandra"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["44","44 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","2 vezes","às vezes"]},
    {chave:"sangramento_tempo",label:"Há quanto tempo sangra?",obrigatorio:true,validacao:["4 meses","há 4"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]},
    {chave:"medicamentos",label:"Medicamentos em uso",obrigatorio:false,validacao:["não","nenhum"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"],
    salas:["Consultório de Periodontia","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Cirurgia","Consultório de Emergência"],
    correto:{sala:"Consultório de Periodontia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Aparelho de ultrassom com inserto supragengival"},
      {id:"m2",nome:"Curetas universais (McCall ou Columbia)"},
      {id:"m3",nome:"Sonda periodontal milimetrada"},
      {id:"m4",nome:"Revelador de placa"},
      {id:"m5",nome:"Clorexidina 0,12% (bochecho pré-operatório)"},
      {id:"m6",nome:"Gaze, espelho, pinça"},
      {id:"m7",nome:"Curetas de Gracey (raspagem subgengival — bolsas ≤ 3mm não indicam isso)"},
      {id:"m8",nome:"Bisturi lâmina 15 e porta-agulha (cirurgia — não indicada)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6"]
  },
  competencias:[8,7,7,8,8,8,7,8]
},

{
  id:"AG-23", titulo:"Retratamento endodôntico — insucesso de canal anterior",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:3, area:"Endodontia",
  contexto:`FLÁVIO RIBEIRO, 47 anos, foi encaminhado pelo dentista após radiografia mostrar lesão periapical em crescimento no dente 25 (segundo pré-molar superior esquerdo), tratado endodonticamente há 4 anos. Não sente dor, mas o exame mostra abaulamento periapical. Indica-se retratamento endodôntico. Flávio escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Não tem alergias. Não usa medicamentos. PA: 120/80 mmHg.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["flávio ribeiro","flavio ribeiro","flávio","flavio"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["47","47 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"dente",label:"Dente para retratamento",obrigatorio:true,validacao:["25","dente 25","pré-molar","pré molar"]},
    {chave:"tratamento_anterior",label:"Tratamento de canal anterior?",obrigatorio:true,validacao:["sim","há 4 anos","tratado","tratamento anterior"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","14:00","15:00","16:00"],
    salas:["Consultório de Endodontia","Consultório A — Clínica Geral","Consultório de Cirurgia","Consultório de Periodontia","Sala de Radiologia"],
    correto:{sala:"Consultório de Endodontia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["07:30","08:00","09:00","10:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico e tubetes de anestésico"},
      {id:"m2",nome:"Dique de borracha, clamp e arco"},
      {id:"m3",nome:"Solvente de guta-percha (xilol ou eucaliptol)"},
      {id:"m4",nome:"Brocas de Gates-Glidden e limas de desobstrução (Reciproc Retreatment)"},
      {id:"m5",nome:"Localizador apical e limas K manuais"},
      {id:"m6",nome:"Hipoclorito de sódio 2,5% e EDTA"},
      {id:"m7",nome:"Nova guta-percha e cimento endodôntico"},
      {id:"m8",nome:"CIV provisório ou Coltosol"},
      {id:"m9",nome:"Fórceps de extração (somente se retratamento contraindicado)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8"]
  },
  competencias:[8,9,9,9,8,7,7,9]
},

{
  id:"AG-24", titulo:"Instalação de coroa total — cimentação definitiva",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Prótese",
  contexto:`CÉLIA MONTEIRO, 55 anos, retorna para cimentação definitiva da coroa metal-cerâmica no dente 36 (primeiro molar inferior esquerdo). O provisório foi instalado há 3 semanas e o protético entregou a peça definitiva. Célia escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Não tem alergias. Faz uso de atorvastatina 20mg. PA: 125/80 mmHg. A paciente está satisfeita com o provisório e sem dores.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["célia monteiro","celia monteiro","célia","celia"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["55","55 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"medicamentos",label:"Medicamentos em uso",obrigatorio:true,validacao:["atorvastatina","estatina"]},
    {chave:"dente_coroa",label:"Dente da coroa",obrigatorio:true,validacao:["36","dente 36","molar inferior"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"],
    salas:["Consultório de Prótese","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Cirurgia","Consultório de Endodontia"],
    correto:{sala:"Consultório de Prótese",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Cimento de fosfato de zinco ou ionômero de vidro para cimentação"},
      {id:"m2",nome:"Espátula de espatulação e placa de vidro"},
      {id:"m3",nome:"Fio dental (verificar ponto de contato)"},
      {id:"m4",nome:"Papel de articulação e pinça de articulação"},
      {id:"m5",nome:"Espelho, pinça e explorador"},
      {id:"m6",nome:"Gaze e algodão"},
      {id:"m7",nome:"Broca de ajuste (se necessário após cimentação)"},
      {id:"m8",nome:"Alginato e moldeira (moldagem — não indicado na cimentação)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[7,7,7,8,7,7,7,8]
},

{
  id:"AG-25", titulo:"Pulpotomia em molar decíduo — criança com exposição pulpar",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:2, area:"Odontopediatria",
  contexto:`HEITOR NASCIMENTO, 6 anos, chega com a avó relatando que ele acordou com dor no dente do fundo. O exame clínico mostra cárie profunda no dente 75 (segundo molar decíduo inferior esquerdo) com exposição pulpar confirmada e sangramento vivo ao toque. Indicado: PULPOTOMIA com formocresol. Heitor escova os dentes 2 VEZES AO DIA (com ajuda) e NÃO USA FIO DENTAL. Não tem alergias. Peso: 20 kg. A avó é a responsável hoje.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome do paciente",obrigatorio:true,validacao:["heitor nascimento","heitor"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["6","6 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","com ajuda"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"responsavel",label:"Responsável presente",obrigatorio:true,validacao:["avó","avo","avó","responsável"]},
    {chave:"peso",label:"Peso",obrigatorio:true,validacao:["20","20 kg"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","14:00","15:00"],
    salas:["Consultório Infantil","Consultório de Endodontia","Consultório A — Clínica Geral","Consultório de Emergência","Consultório de Cirurgia"],
    correto:{sala:"Consultório Infantil",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","14:00","15:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico sabor frutal"},
      {id:"m2",nome:"Tubete de anestésico pediátrico (artucaína 4% — dose por peso)"},
      {id:"m3",nome:"Seringa carpule pediátrica e agulha curta"},
      {id:"m4",nome:"Dique de borracha com clamp pediátrico"},
      {id:"m5",nome:"Broca esférica de baixa rotação e cureta de dentina"},
      {id:"m6",nome:"Algodão + formocresol (curativo pulpar)"},
      {id:"m7",nome:"CIV e coroa de aço inoxidável pediátrica"},
      {id:"m8",nome:"Guta-percha e cimento endodôntico (obturação de canal permanente)"},
      {id:"m9",nome:"Limas rotatórias (não indicadas em pulpotomia)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[9,9,9,9,8,8,7,9]
},

{
  id:"AG-26", titulo:"Profilaxia — paciente com Síndrome de Down",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:3, area:"Paciente Especial",
  contexto:`FELIPE DUARTE, 18 anos, portador de Síndrome de Down (trisomia 21), é trazido pela mãe para profilaxia semestral. A mãe relata que Felipe escova os dentes 2 VEZES AO DIA com supervisão dela e USA FIO DENTAL 3 vezes por semana com ajuda. Apresenta hipotonicidade lingual típica da síndrome, que favorece acúmulo de biofilme. A mãe informa alergia a AAS (ácido acetilsalicílico). Faz uso de levotiroxina (hipotireoidismo associado). Felipe aceita bem o atendimento mas precisa de comunicação simples e pausada.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome do paciente",obrigatorio:true,validacao:["felipe duarte","felipe"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["18","18 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","com supervisão","com ajuda"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","3 vezes","com ajuda"]},
    {chave:"responsavel",label:"Responsável",obrigatorio:true,validacao:["mãe","mae"]},
    {chave:"alergias",label:"Alergias",obrigatorio:true,validacao:["aas","ácido acetilsalicílico","aspirina"]},
    {chave:"medicamentos",label:"Medicamentos em uso",obrigatorio:true,validacao:["levotiroxina","tireoidiana","hipotireoidismo"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["09:00","10:00","11:00","14:00","15:00","16:00"],
    salas:["Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório Infantil","Consultório de Periodontia","Consultório de Emergência"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["09:00","10:00","11:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Aparelho de ultrassom"},
      {id:"m2",nome:"Taça de borracha e pasta profilática"},
      {id:"m3",nome:"Escova monopenacho e fio dental"},
      {id:"m4",nome:"Revelador de placa"},
      {id:"m5",nome:"Sonda periodontal e espelho"},
      {id:"m6",nome:"Flúor verniz (aplicação preventiva)"},
      {id:"m7",nome:"Material educativo simplificado (ilustrado)"},
      {id:"m8",nome:"AAS (medicamento contraindicado — alergia!)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[9,8,7,8,9,8,8,9]
},

{
  id:"AG-27", titulo:"Selante de fissuras — primeiros molares permanentes",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:1, area:"Preventivo",
  contexto:`LARA QUEIRÓS, 8 anos, é trazida pela mãe para aplicação de SELANTE DE FISSURAS nos primeiros molares permanentes recém-erupcionados (dentes 16, 26, 36 e 46). A criança tem alto risco de cárie por dieta rica em carboidratos. Lara escova os dentes 2 VEZES AO DIA com ajuda dos pais e USA FIO DENTAL com ajuda da mãe 3 vezes por semana. Não tem alergias. Não usa medicamentos. Peso: 26 kg. Os dentes estão hígidos — sem cárie.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome da criança",obrigatorio:true,validacao:["lara queirós","lara queiros","lara"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["8","8 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","com ajuda"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","3 vezes","com ajuda"]},
    {chave:"responsavel",label:"Responsável",obrigatorio:true,validacao:["mãe","mae"]},
    {chave:"dentes_tratados",label:"Dentes para selante",obrigatorio:true,validacao:["16","26","36","46","primeiros molares","4 molares"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","14:00","15:00"],
    salas:["Consultório Infantil","Consultório A — Clínica Geral","Consultório de Emergência","Consultório B — Clínica Geral","Consultório de Cirurgia"],
    correto:{sala:"Consultório Infantil",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","14:00","15:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Ácido fosfórico 37% (condicionamento das fissuras)"},
      {id:"m2",nome:"Selante fotopolimerizável (resina fluida sem carga)"},
      {id:"m3",nome:"Fotopolimerizador LED"},
      {id:"m4",nome:"Roletes de algodão e gaze (isolamento relativo)"},
      {id:"m5",nome:"Espelho clínico e explorador"},
      {id:"m6",nome:"Pasta profilática e taça de borracha (profilaxia antes do selante)"},
      {id:"m7",nome:"Cimento de ionômero de vidro (para selante em dente não totalmente erupcionado)"},
      {id:"m8",nome:"Guta-percha e limas endodônticas (endodontia — não indicado)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6"]
  },
  competencias:[8,7,6,7,8,8,7,8]
},

{
  id:"AG-28", titulo:"Remoção de ponto de sutura pós-cirurgia",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:1, area:"Cirurgia",
  contexto:`PAULO SÉRGIO MEDEIROS, 35 anos, retorna 7 dias após extração do dente 48 (terceiro molar inferior direito incluso) para remoção dos pontos de sutura e avaliação da cicatrização. Ele relata que a dor melhorou progressivamente e está bem. Escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente (evitando a área operada). Não tem alergias. Não usa antibióticos. O alvéolo está com boa aparência clínica, sem sinais de infecção.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["paulo sérgio medeiros","paulo sergio medeiros","paulo sérgio","paulo"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["35","35 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"dias_pos_cirurgia",label:"Dias após a cirurgia",obrigatorio:true,validacao:["7","7 dias","uma semana"]},
    {chave:"cicatrizacao",label:"Cicatrização adequada?",obrigatorio:true,validacao:["sim","boa","adequada","bem"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00"],
    salas:["Consultório de Cirurgia","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Endodontia","Consultório de Emergência"],
    correto:{sala:"Consultório de Cirurgia",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Tesoura de ponta reta ou tesoura de sutura"},
      {id:"m2",nome:"Pinça clínica com dente"},
      {id:"m3",nome:"Espelho clínico e explorador"},
      {id:"m4",nome:"Solução de clorexidina 0,12% (irrigação pós-remoção de sutura)"},
      {id:"m5",nome:"Gaze estéril"},
      {id:"m6",nome:"Anestésico local (não necessário para remoção de sutura simples)"},
      {id:"m7",nome:"Bisturi lâmina 15 (nova incisão — não indicada nesta consulta)"}
    ],
    corretos:["m1","m2","m3","m4","m5"]
  },
  competencias:[7,7,6,7,7,7,7,7]
},

{
  id:"AG-29", titulo:"Clareamento caseiro — moldagem e orientação",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:2, area:"Estética",
  contexto:`AMANDA VASCONCELOS, 24 anos, solicita clareamento caseiro supervisionado com moldeiras individualizadas. Escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Não está grávida. Não está amamentando. Não tem histórico de sensibilidade. Não tem restaurações no sorriso (ou já planeja substituí-las após o clareamento). A dentista aprovará o plano de tratamento com peróxido de carbamida 10% em moldeira por 2 horas/dia por 3 semanas.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["amanda vasconcelos","amanda"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["24","24 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"gestante",label:"Gestante ou amamentando?",obrigatorio:true,validacao:["não","nao"]},
    {chave:"sensibilidade",label:"Histórico de sensibilidade?",obrigatorio:true,validacao:["não","nenhuma","sem sensibilidade"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","14:00","15:00","16:00"],
    salas:["Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Periodontia","Consultório de Cirurgia","Consultório de Endodontia"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Alginato e moldeiras de estoque (superior e inferior)"},
      {id:"m2",nome:"Gesso tipo II (vazar os modelos para confecção das moldeiras)"},
      {id:"m3",nome:"Gel de peróxido de carbamida 10% (para enviar ao paciente)"},
      {id:"m4",nome:"Reservatório de resina acrílica (para confeccionar o espaço na moldeira)"},
      {id:"m5",nome:"Espelho clínico e fotografia de cor dos dentes (registro antes/depois)"},
      {id:"m6",nome:"Gel clareador 35% (clareamento em consultório — não para este caso)"},
      {id:"m7",nome:"Barreira gengival fotopolimerizável (clareamento em consultório)"}
    ],
    corretos:["m1","m2","m3","m4","m5"]
  },
  competencias:[7,7,7,7,7,7,7,8]
},

{
  id:"AG-30", titulo:"Aplicação de flúor e orientação — criança com alto risco de cárie",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:2, area:"Preventivo",
  contexto:`SOFIA HELENA MARQUES, 5 anos, é trazida pela mãe para aplicação de flúor e orientação de higiene. A mãe relata que Sofia come muito doce e escova os dentes APENAS 1 VEZ AO DIA (antes de dormir) e NÃO USA FIO DENTAL. Já teve 2 cáries tratadas neste ano. Não tem alergias. Não usa medicamentos. Peso: 18 kg. A mãe está motivada a melhorar os hábitos da criança.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome da criança",obrigatorio:true,validacao:["sofia helena marques","sofia helena","sofia"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["5","5 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["1 vez","uma vez","1x","antes de dormir"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"responsavel",label:"Responsável",obrigatorio:true,validacao:["mãe","mae"]},
    {chave:"historico_caries",label:"Histórico de cáries",obrigatorio:true,validacao:["sim","2 cáries","já teve","tratadas"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["08:00","09:00","10:00","14:00","15:00"],
    salas:["Consultório Infantil","Consultório A — Clínica Geral","Consultório de Emergência","Consultório B — Clínica Geral","Consultório de Periodontia"],
    correto:{sala:"Consultório Infantil",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["08:00","09:00","10:00","14:00","15:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Flúor verniz (Duraphat ou similar — mais indicado para criança)"},
      {id:"m2",nome:"Gaze para secar os dentes"},
      {id:"m3",nome:"Espelho clínico e explorador"},
      {id:"m4",nome:"Revelador de placa (demonstração dos locais sujos)"},
      {id:"m5",nome:"Modelo didático e escova de demonstração"},
      {id:"m6",nome:"Material educativo para os pais"},
      {id:"m7",nome:"Flúor gel APF em moldeira (criança < 6 anos — risco de deglutição)"},
      {id:"m8",nome:"Aparelho de ultrassom (profilaxia — não indicado para 5 anos sem cálculo)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6"]
  },
  competencias:[9,7,6,7,8,9,7,9]
}

,

{
  id:"AG-31", titulo:"Urgência: reação alérgica ao anestésico",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:3, area:"Urgência",
  contexto:`ALBERTO SANTOS FERREIRA, 42 anos, liga relatando que está com o rosto inchado e urticária no pescoço após receber anestesia em outra clínica há 40 minutos. Ele escova os dentes 2 VEZES AO DIA (manhã e noite) e NÃO USA FIO DENTAL. É ALÉRGICO À LIDOCAÍNA (reação documentada). Faz uso contínuo de enalapril (hipertensão) e loratadina (rinite). PA de base: 130/85 mmHg. Não tem histórico de asma.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["alberto santos ferreira","alberto santos","alberto"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["42","42 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"alergia_anestesico",label:"Alergia a anestésico",obrigatorio:true,validacao:["sim","lidocaína","lidocaina","alérgico"]},
    {chave:"medicamentos",label:"Medicamentos contínuos",obrigatorio:true,validacao:["enalapril","loratadina"]},
    {chave:"pa",label:"Pressão arterial de base",obrigatorio:true,validacao:["130/85","130","hipertensão","hipertensa"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Emergência","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Periodontia","Sala de Radiologia"],
    correto:{sala:"Consultório de Emergência",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Kit de emergência com adrenalina 1:1000"},
      {id:"m2",nome:"Dipirona EV (analgesia de emergência)"},
      {id:"m3",nome:"Esfigmomanômetro e estetoscópio"},
      {id:"m4",nome:"Oxímetro de pulso"},
      {id:"m5",nome:"Oxigênio (máscara de O₂) e ambu"},
      {id:"m6",nome:"Anti-histamínico (dexclorfeniramina)"},
      {id:"m7",nome:"Corticosteroide (dexametasona)"},
      {id:"m8",nome:"Cadeira em posição semi-inclinada (Trendelenburg reverso se angioedema)"},
      {id:"m9",nome:"Mepivacaína 3% sem vasoconstritor (alternativa futura para procedimentos)"},
      {id:"m10",nome:"Articulador e modelos de gesso (procedimento eletivo — não urgência)"},
      {id:"m11",nome:"Sugador de alta e baixa potência"}
    ],
    corretos:["m1","m3","m4","m5","m6","m7","m8"]
  },
  competencias:[9,9,10,9,9,8,8,9]
},

{
  id:"AG-32", titulo:"Confecção de placa miorrelaxante — bruxismo",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:3, area:"Disfunção Temporomandibular",
  contexto:`PATRICIA FONTES RIBEIRO, 37 anos, foi encaminhada pelo médico com queixa de bruxismo noturno e cefaleia matinal. Escova os dentes 3 VEZES AO DIA e USA FIO DENTAL 1 VEZ AO DIA (à noite). Relata dor muscular bilateral na região de masseter e temporal ao acordar. Não tem alergias. Faz uso de clonazepam 0,5 mg à noite (prescrito há 3 meses). PA: 118/76 mmHg. Não tem histórico de próteses ou implantes.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["patricia fontes ribeiro","patricia fontes","patricia"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["37","37 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","1 vez","diariamente","à noite"]},
    {chave:"queixa_principal",label:"Queixa principal",obrigatorio:true,validacao:["bruxismo","dor muscular","cefaleia"]},
    {chave:"medicamentos",label:"Medicamentos contínuos",obrigatorio:true,validacao:["clonazepam","0,5 mg"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma","sem alergias"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório A — Clínica Geral","Consultório de Prótese","Consultório de Periodontia","Consultório de Cirurgia","Consultório Infantil"],
    correto:{sala:"Consultório de Prótese",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Alginato e moldeiras de estoque (moldagem superior e inferior)"},
      {id:"m2",nome:"Gesso tipo III (modelos de trabalho)"},
      {id:"m3",nome:"Placa de acetato 2 mm (termoformada — material da placa)"},
      {id:"m4",nome:"Articulador semi-ajustável e arco facial"},
      {id:"m5",nome:"Papel carbono articular (ajuste da oclusão da placa)"},
      {id:"m6",nome:"Broca multilaminada e pedra montada (polimento da placa)"},
      {id:"m7",nome:"Espelho clínico, espátula e cuba"},
      {id:"m8",nome:"Resina acrílica autopolimerizável (rebase/ajuste)"},
      {id:"m9",nome:"Fórceps e alavanca (procedimento cirúrgico — não indicado aqui)"},
      {id:"m10",nome:"Fotopolimerizador e sistema adesivo (restauração — não indicado aqui)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8"]
  },
  competencias:[8,7,8,8,7,7,7,8]
},

{
  id:"AG-33", titulo:"Radiografia periapical e diagnóstico — dor em molar",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Radiologia",
  contexto:`EDMILSON CAVALCANTE LIMA, 50 anos, liga com queixa de dor latejante no lado esquerdo inferior há 4 dias, que piora ao deitar. Escova os dentes 2 VEZES AO DIA e NÃO USA FIO DENTAL. Não tem alergias. Faz uso de metformina (diabetes tipo 2) e sinvastatina. Glicemia de jejum recente: 142 mg/dL (controlada). PA: 135/88 mmHg.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["edmilson cavalcante lima","edmilson cavalcante","edmilson"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["50","50 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"medicamentos",label:"Medicamentos contínuos",obrigatorio:true,validacao:["metformina","sinvastatina"]},
    {chave:"doenca_sistemica",label:"Doença sistêmica",obrigatorio:true,validacao:["diabetes","diabético","diabetes tipo 2"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"],
    salas:["Sala de Radiologia","Consultório A — Clínica Geral","Consultório de Endodontia","Consultório de Cirurgia","Consultório de Emergência"],
    correto:{sala:"Sala de Radiologia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Filme radiográfico periapical ou sensor digital (tamanho 2)"},
      {id:"m2",nome:"Posicionador radiográfico (Rinn XCP ou similar)"},
      {id:"m3",nome:"EPI: avental de chumbo e protetor de tireoide"},
      {id:"m4",nome:"Equipamento de raio-X intraoral"},
      {id:"m5",nome:"Luvas, máscara e óculos de proteção (biossegurança)"},
      {id:"m6",nome:"Espelho clínico e explorador (exame clínico complementar)"},
      {id:"m7",nome:"Processadora ou software de imagem digital"},
      {id:"m8",nome:"Alginato e moldeiras (moldagem — não indicado nesta consulta)"},
      {id:"m9",nome:"Limas endodônticas (tratamento de canal — consulta posterior)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[7,8,8,8,9,7,6,8]
},

{
  id:"AG-34", titulo:"Restauração urgente em gestante — 2º trimestre",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:3, area:"Dentística",
  contexto:`MÔNICA ANDRADE SOUSA, 28 anos, liga com dor em dente superior direito. Está GESTANTE de 22 SEMANAS (2º trimestre). Escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Pré-natal em dia, sem intercorrências. Não tem alergias. Faz uso de sulfato ferroso e ácido fólico (suplementação gestacional). PA: 110/70 mmHg. Relata dor ao mastigar no dente da frente superior direito.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["mônica andrade sousa","monica andrade sousa","mônica andrade","monica andrade"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["28","28 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"gestante",label:"Gestante?",obrigatorio:true,validacao:["sim","gestante","22 semanas","2º trimestre","segundo trimestre"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:true,validacao:["sulfato ferroso","ácido fólico","suplementação"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma","sem alergias"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","14:00","15:00","16:00"],
    salas:["Consultório A — Clínica Geral","Consultório de Emergência","Consultório B — Clínica Geral","Consultório de Cirurgia","Consultório de Endodontia"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico (benzocaína 20%)"},
      {id:"m2",nome:"Mepivacaína 2% com epinefrina 1:100.000 (dose mínima, segura no 2º trimestre)"},
      {id:"m3",nome:"Seringa carpule e agulha curta"},
      {id:"m4",nome:"Espelho, explorador e pinça clínica"},
      {id:"m5",nome:"Broca esférica diamantada e cônica (remoção de cárie)"},
      {id:"m6",nome:"Hidróxido de cálcio (base protetora se exposição pulpar)"},
      {id:"m7",nome:"Ácido fosfórico 37%, adesivo e resina composta"},
      {id:"m8",nome:"Fotopolimerizador LED"},
      {id:"m9",nome:"Avental de chumbo (proteção da gestante durante Rx)"},
      {id:"m10",nome:"AINE (ibuprofeno — contraindicado no 3º trimestre e gestantes em geral)"},
      {id:"m11",nome:"Óxido de zinco e eugenol provisório"},
      {id:"m12",nome:"Dique de borracha"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8","m9","m11","m12"]
  },
  competencias:[9,8,9,9,9,8,8,9]
},

{
  id:"AG-35", titulo:"Moldagem para prótese parcial removível (PPR)",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:3, area:"Prótese",
  contexto:`NELSON BRAGA CARDOSO, 65 anos, é encaminhado para confecção de PPR superior (falta os dentes 14, 15, 16, 17, 24, 25, 26). Escova os dentes 2 VEZES AO DIA e USA FIO DENTAL 3 VEZES POR SEMANA. Tem histórico de periodontite tratada. Não tem alergias. Faz uso de atorvastatina e AAS 100 mg (cardiopatia isquêmica leve, controlada). PA: 138/82 mmHg. Dentes remanescentes estão estáveis sem mobilidade.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["nelson braga cardoso","nelson braga","nelson"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["65","65 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","3 vezes","três vezes por semana"]},
    {chave:"medicamentos",label:"Medicamentos contínuos",obrigatorio:true,validacao:["atorvastatina","aas","ácido acetilsalicílico"]},
    {chave:"historico_periodontal",label:"Histórico periodontal",obrigatorio:true,validacao:["sim","periodontite","tratada"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Prótese","Consultório A — Clínica Geral","Consultório de Periodontia","Sala de Radiologia","Consultório de Cirurgia"],
    correto:{sala:"Consultório de Prótese",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Alginato e moldeiras de estoque (superior e inferior)"},
      {id:"m2",nome:"Gesso tipo III ou IV (modelos de trabalho)"},
      {id:"m3",nome:"Articulador semi-ajustável e cera de mordida"},
      {id:"m4",nome:"Delineador de modelos (planejamento dos grampos)"},
      {id:"m5",nome:"Espelho clínico, sonda periodontal e explorador"},
      {id:"m6",nome:"Moldeira individual de resina acrílica (se necessário para PPR)"},
      {id:"m7",nome:"Pasta zinco-enólica ou silicona de condensação (moldagem de precisão)"},
      {id:"m8",nome:"Fotopolimerizador (restauração — não indicado nesta consulta)"},
      {id:"m9",nome:"Lima endodôntica (tratamento de canal — não indicado aqui)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[7,7,8,9,7,7,7,8]
},

{
  id:"AG-36", titulo:"Urgência — dor pós-extração (alveolite seca)",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:2, area:"Urgência",
  contexto:`THIAGO MENDES FERREIRA, 25 anos, liga 3 dias após a extração do dente 38 com dor intensa e fétida. Escova os dentes 2 VEZES AO DIA e NÃO USA FIO DENTAL. Não tem alergias. Não usa medicamentos contínuos. Relata que fez bochecho com água quente e fumou no dia seguinte à extração. O analgésico prescrito parou de fazer efeito.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["thiago mendes ferreira","thiago mendes","thiago"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["25","25 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"procedimento_anterior",label:"Procedimento recente",obrigatorio:true,validacao:["extração","exodontia","dente 38"]},
    {chave:"fator_agravante",label:"Fator agravante identificado",obrigatorio:true,validacao:["fumou","cigarro","bochecho","removeu coágulo"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Emergência","Consultório de Cirurgia","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório Infantil"],
    correto:{sala:"Consultório de Cirurgia",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Seringa irrigadora e soro fisiológico (irrigação do alvéolo)"},
      {id:"m2",nome:"Curetas cirúrgicas pequenas (curetagem leve do alvéolo)"},
      {id:"m3",nome:"Alvogyl ou pasta de bismuto (curativo de alveolite)"},
      {id:"m4",nome:"Gaze estéril"},
      {id:"m5",nome:"Anestésico local (bloqueio para manejo da dor durante irrigação)"},
      {id:"m6",nome:"Espelho, explorador e pinça cirúrgica"},
      {id:"m7",nome:"Prescrição de analgésico (dipirona ou paracetamol) e antibiótico se necessário"},
      {id:"m8",nome:"Fórceps para nova extração (não indicado — aguardar cicatrização)"},
      {id:"m9",nome:"Sutura reabsorvível (alvéolo aberto — não suturar alveolite)"},
      {id:"m10",nome:"Fotopolimerizador LED (restauração — não indicado aqui)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[9,9,9,9,8,7,7,9]
},

{
  id:"AG-37", titulo:"Avaliação de DTM e confecção de placa oclusal",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:3, area:"Disfunção Temporomandibular",
  contexto:`BEATRIZ FRANCO ALVES, 29 anos, vem encaminhada por clínica geral com queixa de estalido na ATM esquerda, dificuldade de abrir a boca e dor de cabeça frequente ao acordar. Escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Não tem alergias. Faz uso de anticoncepcional oral (etinilestradiol + levonorgestrel). PA: 115/72 mmHg. Relata hábito de morder as bochechas quando está ansiosa.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["beatriz franco alves","beatriz franco","beatriz"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["29","29 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"queixa_atm",label:"Queixa relacionada a ATM",obrigatorio:true,validacao:["estalido","dor","dificuldade de abrir","dtm","atm"]},
    {chave:"habito_parafuncional",label:"Hábito parafuncional",obrigatorio:true,validacao:["morde","bruxismo","morder bochechas","parafuncional"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:false,validacao:["anticoncepcional","etinilestradiol","levonorgestrel"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Prótese","Consultório A — Clínica Geral","Consultório de Cirurgia","Consultório de Periodontia","Sala de Radiologia"],
    correto:{sala:"Consultório de Prótese",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Alginato e moldeiras de estoque (modelos para placa)"},
      {id:"m2",nome:"Gesso tipo III (vazar modelos)"},
      {id:"m3",nome:"Placa de acetato 2 mm (base da placa oclusal)"},
      {id:"m4",nome:"Resina acrílica autopolimerizável (ajuste oclusal da placa)"},
      {id:"m5",nome:"Articulador semi-ajustável e arco facial"},
      {id:"m6",nome:"Papel carbono articular e broca multilaminada (ajuste oclusal)"},
      {id:"m7",nome:"Espelho clínico e régua milimetrada (mensuração da abertura bucal)"},
      {id:"m8",nome:"Limas endodônticas (tratamento de canal — não indicado aqui)"},
      {id:"m9",nome:"Fórceps de extração (não indicado aqui)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[7,8,8,8,7,7,7,8]
},

{
  id:"AG-38", titulo:"Profilaxia em idoso com xerostomia",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Preventivo",
  contexto:`DJALMA RODRIGUES SANTOS, 72 anos, é trazido pelo filho para profilaxia de rotina. Escova os dentes 1 VEZ AO DIA e NÃO USA FIO DENTAL. Apresenta boca seca frequente (xerostomia) e múltiplas raízes expostas. Faz uso contínuo de: amitriptilina (depressão), hidroclorotiazida (hipertensão), metoprolol e omeprazol. PA: 148/88 mmHg. Sem alergias. Última profilaxia: há mais de 1 ano.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["djalma rodrigues santos","djalma rodrigues","djalma"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["72","72 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["1 vez","uma vez","1x"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"medicamentos",label:"Medicamentos contínuos",obrigatorio:true,validacao:["amitriptilina","hidroclorotiazida","metoprolol","omeprazol"]},
    {chave:"xerostomia",label:"Boca seca (xerostomia)?",obrigatorio:true,validacao:["sim","xerostomia","boca seca"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","14:00","15:00"],
    salas:["Consultório de Periodontia","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Prótese","Consultório Infantil"],
    correto:{sala:"Consultório de Periodontia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","14:00","15:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Aparelho de ultrassom (profilaxia supragengival)"},
      {id:"m2",nome:"Curetas de Gracey 1-2 e 3-4 (áreas anteriores)"},
      {id:"m3",nome:"Escova de Robinson e pasta profilática"},
      {id:"m4",nome:"Flúor verniz (proteção de raízes expostas)"},
      {id:"m5",nome:"Espelho, sonda periodontal e explorador"},
      {id:"m6",nome:"Esfigmomanômetro (aferição de PA antes do atendimento)"},
      {id:"m7",nome:"Saliva artificial spray (orientação para xerostomia)"},
      {id:"m8",nome:"Revelador de placa (motivação do paciente)"},
      {id:"m9",nome:"Ácido fosfórico e adesivo (restauração — não indicado aqui)"},
      {id:"m10",nome:"Jato de bicarbonato (manchas — verificar sensibilidade das raízes antes)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8"]
  },
  competencias:[9,7,7,8,8,8,7,9]
},

{
  id:"AG-39", titulo:"Atendimento odontológico — paciente HIV positivo",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Pacientes Especiais",
  contexto:`PEDRO AUGUSTO LOPES, 40 anos, solicita consulta de profilaxia e revisão. Informa que é HIV POSITIVO e está em TARV (tenofovir + lamivudina + dolutegravir) há 3 anos. CD4: 620 células/mm³ (controlado). Escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Não tem alergias. PA: 120/80 mmHg. Relata leve sensação de ardência na língua eventualmente. Última carga viral indetectável.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["pedro augusto lopes","pedro augusto","pedro"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["40","40 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"condicao_sistemica",label:"Condição sistêmica",obrigatorio:true,validacao:["hiv","hiv positivo","soropositivo"]},
    {chave:"medicamentos",label:"Medicamentos (TARV)",obrigatorio:true,validacao:["tarv","tenofovir","lamivudina","dolutegravir","antirretroviral"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"],
    salas:["Consultório A — Clínica Geral","Consultório de Periodontia","Consultório B — Clínica Geral","Consultório de Cirurgia","Consultório de Prótese"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"EPI reforçado: luvas duplas, máscara N95, óculos e avental"},
      {id:"m2",nome:"Aparelho de ultrassom (profilaxia supragengival)"},
      {id:"m3",nome:"Escova de Robinson e pasta profilática"},
      {id:"m4",nome:"Sonda periodontal e espelho clínico"},
      {id:"m5",nome:"Revelador de placa"},
      {id:"m6",nome:"Flúor tópico (prevenção)"},
      {id:"m7",nome:"Autoclave para esterilização (biossegurança padrão)"},
      {id:"m8",nome:"Materiais de caixa descartável individual"},
      {id:"m9",nome:"Separação de sala/consultório exclusivo (não necessário — precaução padrão é suficiente)"},
      {id:"m10",nome:"Antifúngico tópico (nistatina — para candidíase se presente)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8"]
  },
  competencias:[9,7,7,8,10,9,7,9]
},

{
  id:"AG-40", titulo:"Extração de terceiro molar incluso — avaliação pré-cirúrgica",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:3, area:"Cirurgia Oral Menor",
  contexto:`RENATA OLIVEIRA PINTO, 22 anos, chega com queixa de dor na região do siso inferior esquerdo e inchaço local há 2 dias (pericoronarite). Escova os dentes 2 VEZES AO DIA e USA FIO DENTAL 2 VEZES POR SEMANA. Não tem alergias. Não usa medicamentos contínuos. PA: 112/70 mmHg. Radiografia panorâmica recente mostra dente 38 incluso em posição mesioangular com ausência de espaço. Temperatura oral: 37,4°C.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["renata oliveira pinto","renata oliveira","renata"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["22","22 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","2 vezes por semana","duas vezes por semana"]},
    {chave:"queixa",label:"Queixa principal",obrigatorio:true,validacao:["pericoronarite","siso","dor","inchaço","inflamação"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:false,validacao:["não","nenhum","sem medicamentos"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Cirurgia","Consultório A — Clínica Geral","Consultório de Endodontia","Consultório de Periodontia","Consultório de Emergência"],
    correto:{sala:"Consultório de Cirurgia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico e tubete de articaína 4% com epinefrina 1:100.000"},
      {id:"m2",nome:"Seringa carpule e agulha longa (bloqueio do nervo alveolar inferior)"},
      {id:"m3",nome:"Bisturi lâmina 15C e cabo"},
      {id:"m4",nome:"Descolador de periósteo (Molt 9)"},
      {id:"m5",nome:"Fórceps 13 inferior (ou especial para 38)"},
      {id:"m6",nome:"Alavancas (Seldin 1, 2 e 3)"},
      {id:"m7",nome:"Broca cirúrgica em turbina ou peça de mão (osteotomia/odontossecção)"},
      {id:"m8",nome:"Cureta de Lucas (limpeza do alvéolo)"},
      {id:"m9",nome:"Sutura reabsorvível 3-0 e porta-agulha"},
      {id:"m10",nome:"Gaze estéril e compressa"},
      {id:"m11",nome:"Alginato e moldeiras (prótese — não indicado aqui)"},
      {id:"m12",nome:"Limas endodônticas (tratamento de canal — não indicado aqui)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8","m9","m10"]
  },
  competencias:[8,8,9,9,9,7,7,8]
},

{
  id:"AG-41", titulo:"Gengivite gestacional — 3º trimestre",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Periodontia",
  contexto:`AMANDA CRISTINA MELO, 31 anos, GESTANTE de 32 SEMANAS (3º trimestre), chega com queixa de gengiva sangrando ao escovar. Escova os dentes 2 VEZES AO DIA e USA FIO DENTAL 3 VEZES POR SEMANA. Não tem alergias. Faz uso de sulfato ferroso, ácido fólico e carbonato de cálcio. PA: 108/65 mmHg. Placa visível, gengiva eritematosa generalizada. Nega dor ou abscesso.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["amanda cristina melo","amanda cristina","amanda"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["31","31 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","3 vezes","três vezes por semana"]},
    {chave:"gestante",label:"Gestante?",obrigatorio:true,validacao:["sim","gestante","32 semanas","3º trimestre","terceiro trimestre"]},
    {chave:"queixa",label:"Queixa principal",obrigatorio:true,validacao:["sangramento","gengiva","gengivite"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:false,validacao:["sulfato ferroso","ácido fólico","cálcio"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","14:00","15:00"],
    salas:["Consultório de Periodontia","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Cirurgia","Consultório de Emergência"],
    correto:{sala:"Consultório de Periodontia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","14:00","15:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Aparelho de ultrassom (raspagem supragengival — segura no 3º trimestre se necessário)"},
      {id:"m2",nome:"Curetas de Gracey (raspagem manual — mais indicada na gestante)"},
      {id:"m3",nome:"Escova de Robinson e pasta profilática"},
      {id:"m4",nome:"Espelho clínico e sonda periodontal"},
      {id:"m5",nome:"Revelador de placa (motivação)"},
      {id:"m6",nome:"Material educativo sobre higiene bucal na gestação"},
      {id:"m7",nome:"Anestésico local (somente se necessário — não rotina para profilaxia)"},
      {id:"m8",nome:"Antibioticoterapia sistêmica (somente em periodontite severa com risco)"},
      {id:"m9",nome:"Cadeira reclinada a 45° máximo (evitar compressão de veia cava)"},
      {id:"m10",nome:"Bisturi e sutura (cirurgia periodontal — contraindicada no 3º trimestre)"}
    ],
    corretos:["m2","m3","m4","m5","m6","m9"]
  },
  competencias:[9,8,8,9,8,8,7,9]
},

{
  id:"AG-42", titulo:"Tratamento de canal — molar inferior sintomático",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:3, area:"Endodontia",
  contexto:`CARLOS ALBERTO NUNES, 44 anos, chega com dor espontânea intensa no molar inferior esquerdo (dente 36), piora à noite e ao deitar. Escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Não tem alergias. Não usa medicamentos contínuos. PA: 128/82 mmHg. Radiografia mostra lesão periapical incipiente. O dentista clínico avaliou e indicou tratamento endodôntico.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["carlos alberto nunes","carlos alberto","carlos"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["44","44 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"queixa",label:"Queixa principal",obrigatorio:true,validacao:["dor","molar","dente 36","canal","endodontia"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:false,validacao:["não","nenhum"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Endodontia","Consultório A — Clínica Geral","Consultório de Cirurgia","Consultório de Periodontia","Sala de Radiologia"],
    correto:{sala:"Consultório de Endodontia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico e articaína 4% (bloqueio do nervo alveolar inferior)"},
      {id:"m2",nome:"Seringa carpule e agulha longa"},
      {id:"m3",nome:"Dique de borracha, grampo e arco (isolamento absoluto)"},
      {id:"m4",nome:"Broca Endo Access / Gates-Glidden (acesso à câmara)"},
      {id:"m5",nome:"Limas K-file (10 a 40) e limas Flexo-file"},
      {id:"m6",nome:"Localizador apical eletrônico e régua endodôntica"},
      {id:"m7",nome:"Hipoclorito de sódio 1-2,5% (irrigação dos canais)"},
      {id:"m8",nome:"EDTA 17% (quelação — alternância com NaOCl)"},
      {id:"m9",nome:"Cones de papel absorvente (secagem dos canais)"},
      {id:"m10",nome:"Hidróxido de cálcio (curativo entre sessões)"},
      {id:"m11",nome:"Cimento endodôntico (AH Plus, Sealer Plus etc.)"},
      {id:"m12",nome:"Guta-percha (cones principais e acessórios)"},
      {id:"m13",nome:"Fórceps de extração (não indicado — tratamento conservador)"},
      {id:"m14",nome:"Alginato e moldeiras (prótese — não indicado nesta consulta)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8","m9","m10"]
  },
  competencias:[8,9,9,10,9,7,7,9]
},

{
  id:"AG-43", titulo:"Cimentação de coroa cerâmica unitária — dente 21",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Prótese",
  contexto:`FERNANDA LIMA COSTA, 38 anos, retorna para cimentação definitiva da coroa cerâmica do dente 21 (incisivo central superior esquerdo). Escova os dentes 3 VEZES AO DIA e USA FIO DENTAL 1 VEZ AO DIA. Não tem alergias. Faz uso de levotiroxina (hipotireoidismo). PA: 120/78 mmHg. A coroa foi confeccionada no laboratório e chegou para prova e cimentação. Provisória instalada há 3 semanas.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["fernanda lima costa","fernanda lima","fernanda"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["38","38 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","1 vez","diariamente","uma vez por dia"]},
    {chave:"procedimento",label:"Procedimento",obrigatorio:true,validacao:["cimentação","coroa","dente 21","prótese"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:false,validacao:["levotiroxina","hipotireoidismo"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Prótese","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Endodontia","Consultório de Periodontia"],
    correto:{sala:"Consultório de Prótese",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Coroa cerâmica confeccionada no laboratório (conforme guia de cor)"},
      {id:"m2",nome:"Cimento resinoso dual (RelyX, Multilink etc.)"},
      {id:"m3",nome:"Ácido fluorídrico 10% (condicionamento interno da cerâmica)"},
      {id:"m4",nome:"Silano (agente de união cerâmica-resina)"},
      {id:"m5",nome:"Ácido fosfórico 37% (condicionamento do preparo no dente)"},
      {id:"m6",nome:"Adesivo universal (primer do dente)"},
      {id:"m7",nome:"Fio dental e tira de lixa (remoção de excessos interproximais)"},
      {id:"m8",nome:"Papel carbono articular (ajuste oclusal pós-cimentação)"},
      {id:"m9",nome:"Fotopolimerizador LED"},
      {id:"m10",nome:"Espelho, explorador e pinça"},
      {id:"m11",nome:"Pasta profilática e escova de Robinson (limpeza do preparo)"},
      {id:"m12",nome:"Limas endodônticas (tratamento de canal — não indicado aqui)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8","m9","m10","m11"]
  },
  competencias:[7,7,8,9,8,7,7,8]
},

{
  id:"AG-44", titulo:"Profilaxia em paciente portador de marca-passo",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Pacientes Especiais",
  contexto:`OSWALDO TEIXEIRA VIEIRA, 68 anos, chega para profilaxia de rotina. Portador de MARCA-PASSO CARDÍACO (implantado há 2 anos por bloqueio AV total). Escova os dentes 2 VEZES AO DIA e NÃO USA FIO DENTAL. Faz uso de varfarina (INR: 2,1 — controlado), amiodarona e espironolactona. PA: 134/80 mmHg. Sem alergias. Cardiologista autorizou atendimento odontológico de rotina.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["oswaldo teixeira vieira","oswaldo teixeira","oswaldo"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["68","68 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"marca_passo",label:"Marca-passo?",obrigatorio:true,validacao:["sim","marca-passo","marca passo","cardíaco"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:true,validacao:["varfarina","amiodarona","espironolactona","warfarina"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00"],
    salas:["Consultório de Periodontia","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório Infantil","Sala de Radiologia"],
    correto:{sala:"Consultório de Periodontia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Aparelho de ultrassom (CONTRAINDICADO em marca-passo — NÃO USAR)"},
      {id:"m2",nome:"Curetas de Gracey (raspagem manual — única opção segura)"},
      {id:"m3",nome:"Escova de Robinson e pasta profilática"},
      {id:"m4",nome:"Espelho, sonda periodontal e explorador"},
      {id:"m5",nome:"Esfigmomanômetro (aferição de PA)"},
      {id:"m6",nome:"Oxímetro de pulso (monitoramento durante atendimento)"},
      {id:"m7",nome:"Revelador de placa e material educativo"},
      {id:"m8",nome:"Flúor tópico (prevenção)"},
      {id:"m9",nome:"Bisturi elétrico (cautério — CONTRAINDICADO em marca-passo)"},
      {id:"m10",nome:"Gaze estéril (hemostasia manual se necessário)"}
    ],
    corretos:["m2","m3","m4","m5","m6","m7","m8","m10"]
  },
  competencias:[9,8,8,9,10,8,7,9]
},

{
  id:"AG-45", titulo:"Biópsia de lesão em mucosa jugal",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:3, area:"Cirurgia Oral Menor",
  contexto:`LUIZA BEATRIZ MOURA, 55 anos, foi encaminhada pelo clínico geral com lesão esbranquiçada em mucosa jugal direita, presente há 4 meses, assintomática, não raspável. Diagnóstico diferencial: leucoplasia. Escova os dentes 2 VEZES AO DIA e USA FIO DENTAL 1 VEZ AO DIA. Fumante (20 cigarros/dia há 25 anos). Não tem alergias. Faz uso de losartana e atenolol. PA: 142/88 mmHg.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["luiza beatriz moura","luiza beatriz","luiza"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["55","55 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","1 vez","uma vez","diariamente"]},
    {chave:"habito_tabagismo",label:"Tabagismo",obrigatorio:true,validacao:["sim","fumante","cigarro","tabagismo","20 cigarros"]},
    {chave:"lesao",label:"Lesão na mucosa?",obrigatorio:true,validacao:["sim","lesão","leucoplasia","branca","mucosa"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:false,validacao:["losartana","atenolol"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"],
    salas:["Consultório de Cirurgia","Consultório A — Clínica Geral","Consultório de Periodontia","Consultório de Endodontia","Sala de Radiologia"],
    correto:{sala:"Consultório de Cirurgia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico local (infiltração perilesional — articaína ou lidocaína)"},
      {id:"m2",nome:"Bisturi lâmina 15 e cabo nº 3"},
      {id:"m3",nome:"Pinça de tecido e tesoura cirúrgica"},
      {id:"m4",nome:"Frascos de formol 10% (fixação da amostra para histopatológico)"},
      {id:"m5",nome:"Sutura reabsorvível 3-0 ou 4-0 e porta-agulha"},
      {id:"m6",nome:"Gaze estéril e compressas"},
      {id:"m7",nome:"Formulário de requisição de biópsia/anatomia patológica"},
      {id:"m8",nome:"Espelho e iluminação auxiliar (mapeamento da lesão)"},
      {id:"m9",nome:"Fotografia clínica pré e pós (documentação)"},
      {id:"m10",nome:"Broca cirúrgica em peça de mão (osteotomia — não indicado aqui)"},
      {id:"m11",nome:"Fórceps de extração (não indicado aqui)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8","m9"]
  },
  competencias:[8,9,9,9,8,7,7,9]
}

,

{
  id:"AG-46", titulo:"Urgência — celulite facial odontogênica",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:3, area:"Urgência",
  contexto:`ROBERTO FARIA MACHADO, 35 anos, chega ao consultório com inchaço facial difuso do lado direito, febre (38,6°C) e dificuldade leve de abrir a boca há 2 dias. Refere dor em dente inferior direito há 1 semana sem procurar atendimento. Escova os dentes 1 VEZ AO DIA e NÃO USA FIO DENTAL. Não tem alergias. Não usa medicamentos contínuos. PA: 126/82 mmHg. Radiografia mostra lesão periapical extensa no dente 46.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["roberto faria machado","roberto faria","roberto"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["35","35 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["1 vez","uma vez","1x"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"queixa",label:"Queixa e sinais clínicos",obrigatorio:true,validacao:["inchaço","celulite","febre","dor","dente 46","periapical"]},
    {chave:"temperatura",label:"Temperatura corporal",obrigatorio:true,validacao:["38,6","febre","febril"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Emergência","Consultório de Cirurgia","Consultório A — Clínica Geral","Consultório de Endodontia","Sala de Radiologia"],
    correto:{sala:"Consultório de Emergência",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Antibioticoterapia sistêmica (amoxicilina 500 mg 8/8h ou clindamicina)"},
      {id:"m2",nome:"Analgésico/anti-inflamatório (dipirona ou paracetamol — AINE com cautela)"},
      {id:"m3",nome:"Esfigmomanômetro e termômetro"},
      {id:"m4",nome:"Espelho, explorador e iluminação (exame clínico)"},
      {id:"m5",nome:"Encaminhamento hospitalar (se trismo severo ou celulite difusa)"},
      {id:"m6",nome:"Radiografia periapical (confirmar origem do foco infeccioso)"},
      {id:"m7",nome:"Drenagem da coleção purulenta (se flutuação presente)"},
      {id:"m8",nome:"Gaze e solução salina (irrigação)"},
      {id:"m9",nome:"Tratamento definitivo após controle da infecção (endodontia ou extração)"},
      {id:"m10",nome:"Alginato e moldeiras (prótese — não indicado em urgência infecciosa)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8","m9"]
  },
  competencias:[9,9,10,9,9,8,7,9]
},

{
  id:"AG-47", titulo:"Radiografia panorâmica — avaliação geral adulto",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:2, area:"Radiologia",
  contexto:`SIMONE APARECIDA FONSECA, 33 anos, vem para consulta inicial com solicitação de radiografia panorâmica para avaliação geral (presença de terceiros molares, implantes futuros e cáries ocultas). Escova os dentes 2 VEZES AO DIA e USA FIO DENTAL 2 VEZES POR SEMANA. Não tem alergias. Não usa medicamentos contínuos. PA: 115/72 mmHg. Não tem histórico cirúrgico ou protético.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["simone aparecida fonseca","simone aparecida","simone"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["33","33 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","2 vezes por semana","duas vezes"]},
    {chave:"objetivo_exame",label:"Objetivo do exame",obrigatorio:true,validacao:["avaliação geral","panorâmica","terceiros molares","implantes","panoramica"]},
    {chave:"gestante",label:"Gestante?",obrigatorio:true,validacao:["não","nao","não gestante"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Sala de Radiologia","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Cirurgia","Consultório de Endodontia"],
    correto:{sala:"Sala de Radiologia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Equipamento de radiografia panorâmica (ortopantomógrafo)"},
      {id:"m2",nome:"Avental de chumbo e protetor de tireoide"},
      {id:"m3",nome:"Posicionador mordedor de plástico descartável (bite block)"},
      {id:"m4",nome:"Luvas e máscara (biossegurança padrão)"},
      {id:"m5",nome:"Software de imagem digital (visualização e envio ao CD)"},
      {id:"m6",nome:"Filme de posicionamento intraoral (periapical — diferente da panorâmica)"},
      {id:"m7",nome:"Sensor digital intraoral (usado em periapical — não na panorâmica)"}
    ],
    corretos:["m1","m2","m3","m4","m5"]
  },
  competencias:[6,7,7,8,9,7,6,7]
},

{
  id:"AG-48", titulo:"Raspagem subgengival — periodontite moderada",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:3, area:"Periodontia",
  contexto:`MARCO AURÉLIO CUNHA, 47 anos, retorna para segunda sessão de raspagem subgengival (quadrantes posteriores direitos). Diagnóstico: periodontite estágio II, grau B. Escova os dentes 2 VEZES AO DIA e USA FIO DENTAL 1 VEZ AO DIA. Não tem alergias. Faz uso de metformina e glibenclamida (diabetes tipo 2, HbA1c: 7,8%). PA: 134/86 mmHg. Boa resposta ao tratamento nos quadrantes anteriores tratados na semana passada.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["marco aurélio cunha","marco aurelio cunha","marco aurélio","marco"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["47","47 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","1 vez","uma vez","diariamente"]},
    {chave:"doenca_sistemica",label:"Doença sistêmica",obrigatorio:true,validacao:["diabetes","diabético","diabetes tipo 2"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:true,validacao:["metformina","glibenclamida"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Periodontia","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Cirurgia","Sala de Radiologia"],
    correto:{sala:"Consultório de Periodontia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico local (bloqueio infiltrativo — conforto para raspagem)"},
      {id:"m2",nome:"Curetas de Gracey 7-8, 9-10, 11-12 e 13-14 (posterior)"},
      {id:"m3",nome:"Cureta universal Columbia 4R/4L"},
      {id:"m4",nome:"Aparelho de ultrassom com insert subgengival (sonda slim)"},
      {id:"m5",nome:"Sonda periodontal OMS (sondagem antes de iniciar)"},
      {id:"m6",nome:"Espelho, pinça e explorador"},
      {id:"m7",nome:"Solução salina e seringa irrigadora (irrigação subgengival)"},
      {id:"m8",nome:"Gaze estéril"},
      {id:"m9",nome:"Cimento periodontal/curativo Coe-Pack (não indicado em raspagem simples)"},
      {id:"m10",nome:"Bisturi e suturas (cirurgia — não indicado nesta fase)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8"]
  },
  competencias:[8,8,8,9,8,7,7,8]
},

{
  id:"AG-49", titulo:"Consulta preventiva — adolescente com aparelho ortodôntico",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:2, area:"Preventivo",
  contexto:`GABRIEL SOUZA ANDRADE, 15 anos, vem para consulta preventiva semestral. Usa aparelho ortodôntico fixo há 8 meses. Escova os dentes 2 VEZES AO DIA e NÃO USA FIO DENTAL (usa apenas escova interdental). O responsável informa que o ortodontista indicou manutenção preventiva paralela. Não tem alergias. Não usa medicamentos. O paciente está sob responsabilidade da mãe, ROSA ANDRADE, que está presente.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome do paciente",obrigatorio:true,validacao:["gabriel souza andrade","gabriel souza","gabriel"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["15","15 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa","escova interdental"]},
    {chave:"responsavel",label:"Responsável",obrigatorio:true,validacao:["mãe","mae","rosa andrade","rosa"]},
    {chave:"aparelho",label:"Usa aparelho ortodôntico?",obrigatorio:true,validacao:["sim","ortodôntico","aparelho fixo","braquetes"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["08:00","09:00","10:00","14:00","15:00","16:00"],
    salas:["Consultório A — Clínica Geral","Consultório Infantil","Consultório B — Clínica Geral","Consultório de Periodontia","Consultório de Endodontia"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["08:00","09:00","10:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Escova de Robinson e pasta profilática (profilaxia ao redor dos braquetes)"},
      {id:"m2",nome:"Flúor verniz ou gel neutro (proteção ao redor dos braquetes)"},
      {id:"m3",nome:"Revelador de placa (mostrar acúmulo ao redor do aparelho)"},
      {id:"m4",nome:"Escova interdental e fio guia (orientação de higiene específica)"},
      {id:"m5",nome:"Espelho clínico e explorador"},
      {id:"m6",nome:"Aparelho de ultrassom (supragengival — com cuidado nos braquetes)"},
      {id:"m7",nome:"Jato de bicarbonato (contraindicado próximo aos braquetes colados)"},
      {id:"m8",nome:"Material educativo sobre higiene com aparelho"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m8"]
  },
  competencias:[8,6,6,7,8,8,7,8]
},

{
  id:"AG-50", titulo:"Urgência — avulsão de dente permanente (trauma)",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:3, area:"Urgência",
  contexto:`A mãe de LUCAS BARBOSA TELES, 10 anos, liga em pânico após queda da bicicleta. O dente 11 saiu inteiro e ela está segurando pela coroa, embrulhado em guardanapo seco. O acidente ocorreu há 20 minutos. Lucas escova os dentes 2 VEZES AO DIA e USA FIO DENTAL com ajuda da mãe. Não tem alergias. Não usa medicamentos. A mãe deseja saber se é possível reimplantar o dente.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome do paciente",obrigatorio:true,validacao:["lucas barbosa teles","lucas barbosa","lucas"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["10","10 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","com ajuda"]},
    {chave:"responsavel",label:"Responsável",obrigatorio:true,validacao:["mãe","mae","responsável"]},
    {chave:"dente_avulsionado",label:"Dente avulsionado",obrigatorio:true,validacao:["11","dente 11","incisivo","avulsão","saiu"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Emergência","Consultório Infantil","Consultório A — Clínica Geral","Consultório de Cirurgia","Consultório de Endodontia"],
    correto:{sala:"Consultório de Emergência",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Soro fisiológico (reidratação do dente avulsionado se necessário)"},
      {id:"m2",nome:"Anestésico local pediátrico (infiltração para reimplante)"},
      {id:"m3",nome:"Gaze estéril"},
      {id:"m4",nome:"Seringa carpule pediátrica e agulha curta"},
      {id:"m5",nome:"Contenção semi-rígida (fio 0,4 mm + resina — imobilização pós-reimplante)"},
      {id:"m6",nome:"Fotopolimerizador e resina"},
      {id:"m7",nome:"Espelho clínico e explorador (avaliação do alvéolo)"},
      {id:"m8",nome:"Radiografia periapical pós-reimplante (verificar posicionamento)"},
      {id:"m9",nome:"Prescrição de antibiótico e encaminhamento médico (avaliar antitetânica)"},
      {id:"m10",nome:"Fórceps de extração (contraindicado — não extrair dente reimplantável)"},
      {id:"m11",nome:"Hipoclorito de sódio (NÃO usar para lavar a raiz — destrói ligamento periodontal)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8","m9"]
  },
  competencias:[10,9,10,9,9,8,8,9]
},

{
  id:"AG-51", titulo:"Frenectomia lingual — limitação de mobilidade",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:3, area:"Cirurgia Oral Menor",
  contexto:`HÉLIO AUGUSTO PRADO, 8 anos, é trazido pelos pais com queixa de dificuldade na fala (trocas fonéticas) e avaliação fonoaudiológica confirmando anquiloglossia grau III. Escova os dentes 2 VEZES AO DIA e USA FIO DENTAL com ajuda dos pais. Não tem alergias. Não usa medicamentos. A fonoaudióloga encaminhou para frenectomia lingual. Peso: 28 kg.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome do paciente",obrigatorio:true,validacao:["hélio augusto prado","helio augusto prado","hélio augusto","helio augusto"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["8","8 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","com ajuda"]},
    {chave:"responsavel",label:"Responsável",obrigatorio:true,validacao:["pais","pai","mãe","mae","responsável"]},
    {chave:"indicacao",label:"Indicação do procedimento",obrigatorio:true,validacao:["frenectomia","anquiloglossia","língua presa","fala","fonoaudióloga"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"],
    salas:["Consultório de Cirurgia","Consultório Infantil","Consultório A — Clínica Geral","Consultório de Endodontia","Consultório de Periodontia"],
    correto:{sala:"Consultório de Cirurgia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico sabor frutal (mucosa lingual)"},
      {id:"m2",nome:"Tubete anestésico pediátrico — dose por peso (28 kg: máx. 2 tubetes)"},
      {id:"m3",nome:"Seringa carpule pediátrica e agulha curta"},
      {id:"m4",nome:"Tesoura cirúrgica reta (seção do freio)"},
      {id:"m5",nome:"Pinça hemostática reta (freio)"},
      {id:"m6",nome:"Sutura reabsorvível 4-0 (vicryl) e porta-agulha"},
      {id:"m7",nome:"Gaze estéril"},
      {id:"m8",nome:"Espelho clínico e iluminação auxiliar"},
      {id:"m9",nome:"Bisturi lâmina 15C (alternativa à tesoura)"},
      {id:"m10",nome:"Fórceps de extração (não indicado — não é extração)"},
      {id:"m11",nome:"Limas endodônticas (não indicado aqui)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8","m9"]
  },
  competencias:[8,8,8,9,9,8,7,8]
},

{
  id:"AG-52", titulo:"Retratamento endodôntico — dente com insucesso",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:3, area:"Endodontia",
  contexto:`IVANA CRISTINA BORGES, 48 anos, encaminhada com dente 26 (primeiro molar superior esquerdo) com histórico de tratamento de canal há 5 anos e dor à percussão, fístula ativa há 2 meses. Escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Não tem alergias. Faz uso de sertralina 50 mg (depressão) e omeprazol 20 mg. PA: 122/78 mmHg. Radiografia mostra lesão periapical com subobturação dos canais.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["ivana cristina borges","ivana cristina","ivana"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["48","48 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"dente",label:"Dente a ser retratado",obrigatorio:true,validacao:["26","dente 26","molar superior","retratamento"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:false,validacao:["sertralina","omeprazol"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Endodontia","Consultório A — Clínica Geral","Consultório de Cirurgia","Sala de Radiologia","Consultório de Periodontia"],
    correto:{sala:"Consultório de Endodontia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico e articaína 4% (bloqueio para molar superior)"},
      {id:"m2",nome:"Dique de borracha e grampo (isolamento absoluto)"},
      {id:"m3",nome:"Brocas de retratamento (ProTaper Retreatment D1, D2, D3 ou similar)"},
      {id:"m4",nome:"Solvente de guta-percha (xilol ou Endosolv)"},
      {id:"m5",nome:"Limas K-file e Flexofile (retratamento e reconfiguração)"},
      {id:"m6",nome:"Localizador apical eletrônico"},
      {id:"m7",nome:"Hipoclorito de sódio 2,5% (irrigação)"},
      {id:"m8",nome:"EDTA 17% (quelação)"},
      {id:"m9",nome:"Cones de papel absorvente"},
      {id:"m10",nome:"Hidróxido de cálcio (curativo entre sessões)"},
      {id:"m11",nome:"Guta-percha e cimento endodôntico (obturação — sessão posterior)"},
      {id:"m12",nome:"Alginato e moldeiras (prótese — não indicado aqui)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8","m9","m10"]
  },
  competencias:[8,9,9,10,9,7,7,9]
},

{
  id:"AG-53", titulo:"Profilaxia e aplicação de flúor — paciente diabético controlado",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Preventivo",
  contexto:`MARCOS VINÍCIUS CAVALCANTI, 58 anos, diabético tipo 2, vem para profilaxia semestral. Escova os dentes 2 VEZES AO DIA e USA FIO DENTAL 1 VEZ AO DIA (à noite). HbA1c: 7,2% (controlado). Faz uso de glipizida e metformina. PA: 138/84 mmHg. Sem alergias. Última profilaxia há 7 meses. Apresenta raízes expostas nos dentes posteriores inferiores bilateralmente.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["marcos vinícius cavalcanti","marcos vinicius cavalcanti","marcos vinícius","marcos vinicius"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["58","58 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","1 vez","uma vez","à noite"]},
    {chave:"doenca_sistemica",label:"Doença sistêmica",obrigatorio:true,validacao:["diabetes","diabético","diabetes tipo 2"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:true,validacao:["glipizida","metformina"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","14:00","15:00","16:00"],
    salas:["Consultório de Periodontia","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Prótese","Consultório Infantil"],
    correto:{sala:"Consultório de Periodontia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Aparelho de ultrassom (profilaxia supragengival)"},
      {id:"m2",nome:"Curetas de Gracey (áreas posteriores e raízes expostas)"},
      {id:"m3",nome:"Escova de Robinson e pasta profilática"},
      {id:"m4",nome:"Flúor verniz (proteção das raízes expostas)"},
      {id:"m5",nome:"Esfigmomanômetro (aferição de PA)"},
      {id:"m6",nome:"Espelho, sonda periodontal e explorador"},
      {id:"m7",nome:"Revelador de placa"},
      {id:"m8",nome:"Orientação dietética (carboidratos e risco de cárie no diabético)"},
      {id:"m9",nome:"Flúor gel APF em moldeira (raízes expostas — verificar sensibilidade antes)"},
      {id:"m10",nome:"Antibioticoprofilaxia (não indicada em diabético controlado sem cirurgia)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8"]
  },
  competencias:[8,7,7,8,8,8,7,8]
},

{
  id:"AG-54", titulo:"Instalação de prótese total superior e inferior",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:3, area:"Prótese",
  contexto:`BENEDITA SOUZA FERREIRA, 71 anos, retorna para instalação das próteses totais superior e inferior confeccionadas. Escova os dentes 2 VEZES AO DIA (prótese total anterior) e NÃO USA FIO DENTAL. Não tem alergias. Faz uso de losartana e hidroclorotiazida (hipertensão) e AAS 100 mg. PA: 144/86 mmHg. As próteses estão prontas no laboratório. Paciente edêntula total há 3 anos.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["benedita souza ferreira","benedita souza","benedita"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["71","71 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação (higiene da prótese)",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa","edêntula","sem dentes"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:true,validacao:["losartana","hidroclorotiazida","aas","ácido acetilsalicílico"]},
    {chave:"pa",label:"Pressão arterial",obrigatorio:true,validacao:["144/86","hipertensão","hipertensa","controlada"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Prótese","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Cirurgia","Consultório de Endodontia"],
    correto:{sala:"Consultório de Prótese",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Próteses totais superior e inferior (vindas do laboratório)"},
      {id:"m2",nome:"Papel carbono articular (ajuste de contatos oclusais)"},
      {id:"m3",nome:"Broca multilaminada e pedra Arkansas (polimento dos pontos de ajuste)"},
      {id:"m4",nome:"Espelho clínico e espátula (verificação do assentamento)"},
      {id:"m5",nome:"Pasta de pressão (identificar pontos de pressão nas bases)"},
      {id:"m6",nome:"Material para instrução de higiene das próteses (escova específica, pastilha efervescente)"},
      {id:"m7",nome:"Esfigmomanômetro (aferição de PA antes do atendimento)"},
      {id:"m8",nome:"Adesivo para prótese (não indicado para prótese nova bem adaptada)"},
      {id:"m9",nome:"Alginato e moldeiras (nova moldagem — não necessário nesta consulta)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[7,7,8,8,7,8,7,8]
},

{
  id:"AG-55", titulo:"Urgência — fratura coronária em incisivo adulto",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:2, area:"Urgência",
  contexto:`VINICIUS ROCHA LIMA, 27 anos, chega ao consultório após queda de skate com fratura coronária do dente 11 envolvendo esmalte e dentina, sem exposição pulpar visível, sensível ao toque. Escova os dentes 2 VEZES AO DIA e USA FIO DENTAL 3 VEZES POR SEMANA. Não tem alergias. Não usa medicamentos. PA: 120/78 mmHg. Traz o fragmento dental consigo, embalado em lenço úmido.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["vinicius rocha lima","vinicius rocha","vinicius"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["27","27 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","3 vezes","três vezes por semana"]},
    {chave:"trauma",label:"Descrição do trauma",obrigatorio:true,validacao:["fratura","dente 11","queda","incisivo","esmalte","dentina"]},
    {chave:"fragmento",label:"Fragmento disponível?",obrigatorio:true,validacao:["sim","traz","fragmento","trouxe"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Emergência","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Endodontia","Consultório de Periodontia"],
    correto:{sala:"Consultório de Emergência",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Anestésico tópico e tubete (infiltração para manejo da dor se necessário)"},
      {id:"m2",nome:"Espelho clínico e explorador (exame e localização da fratura)"},
      {id:"m3",nome:"Ácido fosfórico 37% (condicionamento para recimentação do fragmento)"},
      {id:"m4",nome:"Adesivo universal e resina composta (restauração ou recimentação)"},
      {id:"m5",nome:"Fotopolimerizador LED"},
      {id:"m6",nome:"Tiras de lixa e brocas de acabamento (refinamento da restauração)"},
      {id:"m7",nome:"Radiografia periapical (verificar integridade radicular e periapical)"},
      {id:"m8",nome:"Dique de borracha"},
      {id:"m9",nome:"Fórceps de extração (não indicado — dente com boa prognose)"},
      {id:"m10",nome:"Hidróxido de cálcio (se necessário como proteção pulpar)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8","m10"]
  },
  competencias:[9,9,9,9,8,7,7,9]
},

{
  id:"AG-56", titulo:"Selante oclusal — criança de alto risco de cárie",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:2, area:"Preventivo",
  contexto:`ISABELA FERREIRA GOMES, 7 anos, vem para aplicação de selante nos primeiros molares permanentes recém-irrompidos (dentes 16 e 26). Escova os dentes 2 VEZES AO DIA e NÃO USA FIO DENTAL. Responsável: PAI — JORGE FERREIRA. Alto risco de cárie (3 lesões de cárie em dentes decíduos). Não tem alergias. Não usa medicamentos. Peso: 23 kg.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome da paciente",obrigatorio:true,validacao:["isabela ferreira gomes","isabela ferreira","isabela"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["7","7 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"responsavel",label:"Responsável",obrigatorio:true,validacao:["pai","jorge ferreira","jorge","responsável"]},
    {chave:"risco_carie",label:"Risco de cárie",obrigatorio:true,validacao:["alto","alto risco","cáries","3 lesões"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["08:00","09:00","10:00","14:00","15:00","16:00"],
    salas:["Consultório Infantil","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Periodontia","Consultório de Emergência"],
    correto:{sala:"Consultório Infantil",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["08:00","09:00","10:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Ácido fosfórico 37% (condicionamento das fossas e fissuras)"},
      {id:"m2",nome:"Selante resinoso fotopolimerizável (Fissurit FX, Helioseal etc.)"},
      {id:"m3",nome:"Fotopolimerizador LED"},
      {id:"m4",nome:"Escova de Robinson e pasta profilática sem flúor (limpeza prévia)"},
      {id:"m5",nome:"Sugador e rolo de algodão (isolamento relativo)"},
      {id:"m6",nome:"Espelho clínico e explorador (verificar selamento)"},
      {id:"m7",nome:"Revelador de placa (motivação antes do procedimento)"},
      {id:"m8",nome:"Dique de borracha (ouro-padrão de isolamento para selantes)"},
      {id:"m9",nome:"Fórceps de extração (não indicado aqui)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m8"]
  },
  competencias:[8,7,7,8,9,8,7,8]
},

{
  id:"AG-57", titulo:"Jato de bicarbonato e polimento — manchas extrínsecas",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:2, area:"Preventivo",
  contexto:`FLAVIA REGINA TOSTA, 30 anos, vem para remoção de manchas externas por café e chá. Escova os dentes 2 VEZES AO DIA e USA FIO DENTAL diariamente. Não tem alergias. Não usa medicamentos. PA: 112/70 mmHg. Não é gestante. Não tem sensibilidade dentinária. Nenhuma raiz exposta. Gengiva saudável.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["flavia regina tosta","flávia regina tosta","flavia regina","flávia regina"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["30","30 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"sensibilidade",label:"Sensibilidade dentinária?",obrigatorio:true,validacao:["não","nao","sem sensibilidade","nenhuma"]},
    {chave:"gestante",label:"Gestante?",obrigatorio:true,validacao:["não","nao"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório A — Clínica Geral","Consultório de Periodontia","Consultório B — Clínica Geral","Consultório de Prótese","Consultório Infantil"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Jato de bicarbonato de sódio (air polishing — manchas extrínsecas)"},
      {id:"m2",nome:"Pó de bicarbonato de sódio granulometria fina"},
      {id:"m3",nome:"Escova de Robinson e pasta profilática (polimento final)"},
      {id:"m4",nome:"Espelho clínico e explorador"},
      {id:"m5",nome:"Sugador de alta e baixa potência"},
      {id:"m6",nome:"Óculos de proteção para o paciente"},
      {id:"m7",nome:"Flúor tópico (pós-profilaxia)"},
      {id:"m8",nome:"Curetas de Gracey (subgengival — não indicado para manchas extrínsecas)"},
      {id:"m9",nome:"Ácido fosfórico e resina (restauração — não indicado aqui)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[6,6,6,7,8,7,6,7]
},

{
  id:"AG-58", titulo:"Consulta de manutenção periodontal — pós-tratamento",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Periodontia",
  contexto:`ANDRÉIA LIMA SANTOS, 42 anos, retorna para consulta de manutenção periodontal (protocolo de 3 em 3 meses). Diagnóstico anterior: periodontite estágio III, grau C. Escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Fumante (10 cigarros/dia — relatou redução). Faz uso de amlodipina (hipertensão). PA: 126/80 mmHg. Sem alergias. Boa higiene e manutenção na última consulta.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["andréia lima santos","andreia lima santos","andréia lima","andreia lima"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["42","42 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"tabagismo",label:"Tabagismo",obrigatorio:true,validacao:["sim","fumante","cigarro","10 cigarros","tabagismo"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:false,validacao:["amlodipina","hipertensão"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Periodontia","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Cirurgia","Consultório de Prótese"],
    correto:{sala:"Consultório de Periodontia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Sonda periodontal OMS (sondagem completa de 6 sítios por dente)"},
      {id:"m2",nome:"Curetas de Gracey (raspagem de manutenção)"},
      {id:"m3",nome:"Aparelho de ultrassom (supragengival e subgengival leve)"},
      {id:"m4",nome:"Escova de Robinson e pasta profilática"},
      {id:"m5",nome:"Revelador de placa (índice de biofilme)"},
      {id:"m6",nome:"Espelho clínico e explorador"},
      {id:"m7",nome:"Reforço de motivação e técnica de escovação para fumantes"},
      {id:"m8",nome:"Flúor verniz (proteção de raízes em risco)"},
      {id:"m9",nome:"Bisturi e sutura (cirurgia periodontal — não indicado em manutenção)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8"]
  },
  competencias:[8,7,8,8,8,8,8,8]
},

{
  id:"AG-59", titulo:"Urgência — dor de dente em paciente hipertenso descompensado",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:3, area:"Urgência",
  contexto:`GERALDO ALVES CUNHA, 62 anos, chega com dor intensa em dente inferior esquerdo. Aferição na recepção: PA 178/108 mmHg. Diz que está em uso de enalapril mas não tomou hoje por esquecimento. Escova os dentes 1 VEZ AO DIA e NÃO USA FIO DENTAL. Não tem alergias a medicamentos. Relata que a dor o impediu de dormir. Nenhum médico foi consultado recentemente.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["geraldo alves cunha","geraldo alves","geraldo"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["62","62 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["1 vez","uma vez","1x"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"pa",label:"Pressão arterial atual",obrigatorio:true,validacao:["178/108","178","108","alta","hipertensão","descompensada"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:true,validacao:["enalapril","anti-hipertensivo","não tomou"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Emergência","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Periodontia","Sala de Radiologia"],
    correto:{sala:"Consultório de Emergência",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Esfigmomanômetro e estetoscópio (monitoramento antes de qualquer procedimento)"},
      {id:"m2",nome:"Analgésico não-invasivo oral (paracetamol/dipirona — alívio imediato da dor)"},
      {id:"m3",nome:"Mepivacaína 3% SEM vasoconstritor (única opção se PA > 160/100)"},
      {id:"m4",nome:"Articaína 4% com epinefrina 1:100.000 (CONTRAINDICADA com PA 178/108)"},
      {id:"m5",nome:"Orientação para retornar após regularizar a PA com médico"},
      {id:"m6",nome:"Prontuário com registro da PA e conduta tomada"},
      {id:"m7",nome:"Oxímetro de pulso (monitoramento)"},
      {id:"m8",nome:"Procedimento cirúrgico imediato (CONTRAINDICADO com PA descompensada)"},
      {id:"m9",nome:"Encaminhamento médico de urgência (se PA ≥ 180/110 sem sintomas: SAMU)"}
    ],
    corretos:["m1","m2","m3","m5","m6","m7","m9"]
  },
  competencias:[10,9,10,9,9,8,8,10]
},

{
  id:"AG-60", titulo:"Tomografia computadorizada de feixe cônico (CBCT) — planejamento de implante",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Radiologia",
  contexto:`ANDREA MARQUES TAVARES, 46 anos, foi encaminhada para tomografia de feixe cônico (CBCT) para planejamento de implante na região do dente 36 (ausente há 4 anos). Escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Não tem alergias. Não usa medicamentos. PA: 118/76 mmHg. Não é gestante. O implantodontista solicitou avaliação do volume ósseo e distância ao canal mandibular.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["andrea marques tavares","andréa marques tavares","andrea marques","andréa marques"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["46","46 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"objetivo_exame",label:"Objetivo do exame",obrigatorio:true,validacao:["implante","tomografia","cbct","dente 36","planejamento","canal mandibular"]},
    {chave:"gestante",label:"Gestante?",obrigatorio:true,validacao:["não","nao"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Sala de Radiologia","Consultório A — Clínica Geral","Consultório de Cirurgia","Consultório de Prótese","Consultório de Endodontia"],
    correto:{sala:"Sala de Radiologia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Equipamento CBCT (tomógrafo de feixe cônico)"},
      {id:"m2",nome:"Avental de chumbo e protetor de tireoide"},
      {id:"m3",nome:"Mordedor de posicionamento (estabilização durante o exame)"},
      {id:"m4",nome:"Software de análise 3D (OnDemand3D, RealScan etc.) para medições"},
      {id:"m5",nome:"Termo de consentimento e ficha de triagem radiológica"},
      {id:"m6",nome:"Luvas e máscara (biossegurança para itens de contato)"},
      {id:"m7",nome:"Espelho clínico e sonda (exame clínico complementar pré-Rx)"},
      {id:"m8",nome:"Alginato e moldeiras (protético — não indicado nesta consulta)"},
      {id:"m9",nome:"Sensor intraoral periapical (diferente — não substitui CBCT para implante)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[6,7,7,8,9,7,6,7]
}

,

// ════════════════════════════════════════════
// BLOCO 2: MATERIAIS (MAT-01 a MAT-40)
// ════════════════════════════════════════════
// ─────────────────────────────────────────────
// DENTÍSTICA (MAT-01 a MAT-08)
// ─────────────────────────────────────────────
{
  id: "MAT-01",
  titulo: "Restauração Classe II com resina composta e forramento de CIV",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 2, tempo: 2, area: "Dentística",
  contexto: `A dentista solicitou que você prepare a bancada para uma restauração Classe II em resina composta no dente 36 (primeiro molar inferior esquerdo) de um paciente adulto de 42 anos. A radiografia mostra cárie interproximal profunda, próxima à polpa, sem exposição pulpar confirmada. Por isso, a conduta será realizar um FORRAMENTO com cimento de ionômero de vidro (CIV) antes da restauração em resina. O dente apresenta sensibilidade ao frio e ao doce. Selecione todos os materiais necessários para este procedimento.`,
  opcoes: [
    { texto: "Anestésico tópico (gel ou spray)", correto: true },
    { texto: "Tubete de anestésico (lidocaína 2% com vasoconstritor)", correto: true },
    { texto: "Seringa carpule e agulha curta", correto: true },
    { texto: "Broca esférica (acesso) e broca cônica para preparo do contorno", correto: true },
    { texto: "Cureta de dentina (para remoção do tecido cariado amolecido)", correto: true },
    { texto: "Cimento de ionômero de vidro convencional (CIV) — forramento", correto: true },
    { texto: "Ácido fosfórico 37% (condicionamento do esmalte e dentina)", correto: true },
    { texto: "Adesivo universal (sistema adesivo)", correto: true },
    { texto: "Resina composta (incrementos de dentina e esmalte)", correto: true },
    { texto: "Sistema de matriz de contorno (Tofflemire + cunha de madeira)", correto: true },
    { texto: "Fotopolimerizador LED", correto: true },
    { texto: "Brocas de acabamento e polimento (multilaminada e disco)", correto: true },
    { texto: "Dique de borracha, clamp e arco (isolamento absoluto)", correto: true },
    { texto: "Guta-percha e cimento endodôntico", correto: false },
    { texto: "Fórceps de extração para molares inferiores", correto: false },
    { texto: "Hipoclorito de sódio 2,5% para irrigação de canal", correto: false },
    { texto: "Limas endodônticas (série K e H)", correto: false },
    { texto: "Impressão com alginato e gesso tipo III", correto: false }
  ],
  competencias: [7, 8, 9, 9, 8, 7, 7, 8]
},

{
  id: "MAT-02",
  titulo: "Restauração Classe II com resina composta e hidróxido de cálcio",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 3, tempo: 2, area: "Dentística",
  contexto: `Paciente Fernanda, 31 anos, comparece com dor espontânea de baixa intensidade no dente 46 (primeiro molar inferior direito). Após sondagem e teste de vitalidade positivo, o diagnóstico é cárie profunda com exposição pulpar puntiforme (micro-exposição). A dentista opta por proteção pulpar direta com HIDRÓXIDO DE CÁLCIO antes do forramento com CIV e da restauração final em resina composta. Esta abordagem objetiva preservar a vitalidade pulpar. Prepare os materiais para este protocolo de proteção pulpar direta.`,
  opcoes: [
    { texto: "Anestésico tópico e tubete de lidocaína 2% com vasoconstritor", correto: true },
    { texto: "Seringa carpule e agulha curta", correto: true },
    { texto: "Dique de borracha, clamp e arco", correto: true },
    { texto: "Broca esférica e cônica para preparo cavitário", correto: true },
    { texto: "Cureta de dentina para remoção seletiva de tecido cariado", correto: true },
    { texto: "Hidróxido de cálcio (material forrador protetor pulpar)", correto: true },
    { texto: "Cimento de ionômero de vidro (CIV) como base intermediária", correto: true },
    { texto: "Ácido fosfórico 37%", correto: true },
    { texto: "Adesivo universal", correto: true },
    { texto: "Resina composta (bulk-fill ou incremental)", correto: true },
    { texto: "Sistema de matriz de contorno e cunha de madeira", correto: true },
    { texto: "Fotopolimerizador LED", correto: true },
    { texto: "Brocas de acabamento e polimento", correto: true },
    { texto: "Guta-percha e cimento endodôntico (para obturação de canal)", correto: false },
    { texto: "Localizador apical eletrônico", correto: false },
    { texto: "Limas endodônticas rotatórias", correto: false },
    { texto: "Molde de alginato para confecção de coroa provisória", correto: false }
  ],
  competencias: [7, 9, 9, 9, 8, 7, 7, 8]
},

{
  id: "MAT-03",
  titulo: "Restauração Classe I com resina composta simples (sem forramento)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 1, tempo: 2, area: "Dentística",
  contexto: `O paciente Eduardo, 19 anos, apresenta cárie oclusal rasa no dente 16 (primeiro molar superior direito), detectada em exame de rotina. O teste de vitalidade é positivo e o dente não apresenta sensibilidade espontânea. A cárie é de profundidade média, sem risco de exposição pulpar. A conduta é restauração Classe I direta com resina composta, SEM forramento e SEM proteção pulpar — apenas condicionamento e adesivo antes da resina. Separe os materiais necessários para este caso.`,
  opcoes: [
    { texto: "Anestésico tópico e tubete de anestésico com vasoconstritor", correto: true },
    { texto: "Seringa carpule e agulha curta", correto: true },
    { texto: "Dique de borracha, clamp e arco (isolamento absoluto)", correto: true },
    { texto: "Broca esférica de alta rotação (acesso)", correto: true },
    { texto: "Broca cônica para preparo da cavidade", correto: true },
    { texto: "Cureta de dentina", correto: true },
    { texto: "Ácido fosfórico 37%", correto: true },
    { texto: "Adesivo (sistema adesivo de frasco único ou dois frascos)", correto: true },
    { texto: "Resina composta (preferencialmente bulk-fill para Classe I)", correto: true },
    { texto: "Fotopolimerizador LED", correto: true },
    { texto: "Brocas de acabamento e polimento + disco de polimento", correto: true },
    { texto: "Espelho clínico, pinça e explorador", correto: true },
    { texto: "Hidróxido de cálcio (forramento protetor pulpar)", correto: false },
    { texto: "Cimento de ionômero de vidro como base (técnica sanduíche)", correto: false },
    { texto: "Sistema de matriz de Tofflemire", correto: false },
    { texto: "Guta-percha (para obturação de canal)", correto: false },
    { texto: "Fórceps de extração", correto: false }
  ],
  competencias: [6, 7, 9, 8, 7, 7, 7, 7]
},

{
  id: "MAT-04",
  titulo: "Restauração Classe II em ionômero de vidro convencional (dente decíduo)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 2, tempo: 2, area: "Dentística",
  contexto: `A paciente Isabela, 7 anos, apresenta cárie interproximal no dente 75 (segundo molar decíduo inferior esquerdo). A radiografia confirma cárie na face distal com profundidade moderada, sem envolvimento pulpar. O dentista decide por restauração Classe II com CIMENTO DE IONÔMERO DE VIDRO (CIV) convencional — opção ideal para dentes decíduos pelo efeito cariostático do flúor liberado. Atenção: para o CIV convencional NÃO se usa ácido fosfórico nem adesivo para resina. O condicionador utilizado é o ácido poliacrílico. Separe os materiais corretos para este procedimento.`,
  opcoes: [
    { texto: "Anestésico tópico pediátrico (sabor frutal) e tubete pediátrico", correto: true },
    { texto: "Seringa carpule pediátrica e agulha curta", correto: true },
    { texto: "Dique de borracha (com clamp pediátrico) ou roletes de algodão", correto: true },
    { texto: "Broca esférica de baixa rotação para preparo em criança", correto: true },
    { texto: "Cureta de dentina pediátrica (pequena)", correto: true },
    { texto: "Ácido poliacrílico a 10-25% (condicionador específico do CIV)", correto: true },
    { texto: "Cimento de ionômero de vidro (pó + líquido ou cápsula)", correto: true },
    { texto: "Espátula de espatulação e bloco de papel (ou placa de vidro)", correto: true },
    { texto: "Sistema de matriz de contorno e cunha de madeira (pediátrica)", correto: true },
    { texto: "Verniz protetou ou Top Coat (para proteger o CIV recém-manipulado)", correto: true },
    { texto: "Brocas de acabamento (multilaminada fina)", correto: true },
    { texto: "Ácido fosfórico 37% (condicionamento de esmalte para resina)", correto: false },
    { texto: "Adesivo universal para resina composta", correto: false },
    { texto: "Resina composta fotopolimerizável", correto: false },
    { texto: "Fotopolimerizador LED (não necessário para CIV convencional)", correto: false },
    { texto: "Limas endodônticas pediátricas", correto: false }
  ],
  competencias: [7, 8, 8, 8, 7, 8, 7, 8]
},

{
  id: "MAT-05",
  titulo: "Restauração Classe III em resina composta (dente anterior)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 2, tempo: 2, area: "Dentística",
  contexto: `A paciente Letícia, 25 anos, apresenta lesão de cárie inicial na face proximal do dente 12 (incisivo lateral superior direito), detectada por transiluminação e radiografia interproximal. A conduta é restauração Classe III direta em resina composta. Para dentes anteriores, a ênfase é na estética: utiliza-se resina composta estratificada (resina de dentina + resina de esmalte em diferentes opacidades) e tiras de poliéster para acabamento proximal. Não se usa Tofflemire neste caso. Separe os materiais.`,
  opcoes: [
    { texto: "Anestésico tópico e tubete de anestésico", correto: true },
    { texto: "Seringa carpule e agulha curta", correto: true },
    { texto: "Dique de borracha e clamp anterior (ou fio afastador)", correto: true },
    { texto: "Broca de alta rotação (troncocônica ou cilíndrica de ponta ativa)", correto: true },
    { texto: "Cureta de dentina", correto: true },
    { texto: "Ácido fosfórico 37%", correto: true },
    { texto: "Adesivo universal", correto: true },
    { texto: "Resina composta de dentina (cor A3 ou similar — mais opaca)", correto: true },
    { texto: "Resina composta de esmalte (cor A2 ou similar — mais translúcida)", correto: true },
    { texto: "Tiras de poliéster (para acabamento proximal e proteção)", correto: true },
    { texto: "Fotopolimerizador LED", correto: true },
    { texto: "Brocas de acabamento e polimento + disco de polimento SOF-Lex", correto: true },
    { texto: "Sistema de matriz de Tofflemire e cunha", correto: false },
    { texto: "Cimento de ionômero de vidro como base (sanduíche aberto)", correto: false },
    { texto: "Guta-percha", correto: false },
    { texto: "Fórceps", correto: false }
  ],
  competencias: [7, 8, 9, 8, 8, 7, 7, 8]
},

{
  id: "MAT-06",
  titulo: "Restauração Classe IV em resina composta (fratura de ângulo incisal)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 2, tempo: 2, area: "Dentística",
  contexto: `O paciente Bruno, 22 anos, sofreu queda e fraturou o ângulo mesioincisal do dente 11 (incisivo central superior direito). O fragmento não foi recuperado. O teste de vitalidade é positivo. A conduta é restauração Classe IV direta em resina composta, com guia de silicone palatal (índice de silicone) para reconstrução do ângulo com precisão anatômica. A estética é prioridade. Separe todos os materiais para este procedimento.`,
  opcoes: [
    { texto: "Anestésico tópico e tubete de anestésico", correto: true },
    { texto: "Seringa carpule e agulha", correto: true },
    { texto: "Dique de borracha e clamp anterior", correto: true },
    { texto: "Guia/índice de silicone palatal (confeccionado previamente em silicone de adição)", correto: true },
    { texto: "Broca diamantada para biselamento do esmalte fraturado", correto: true },
    { texto: "Ácido fosfórico 37%", correto: true },
    { texto: "Adesivo universal", correto: true },
    { texto: "Resina composta de dentina (cor de base)", correto: true },
    { texto: "Resina composta de esmalte (cor mais translúcida)", correto: true },
    { texto: "Resina de efeito (opaca ou translúcida para halo)", correto: true },
    { texto: "Fotopolimerizador LED", correto: true },
    { texto: "Brocas de acabamento multilaminadas e discos de polimento", correto: true },
    { texto: "Tiras de poliéster", correto: true },
    { texto: "Sistema de matriz de Tofflemire (para uso posterior)", correto: false },
    { texto: "Limas endodônticas para sondagem do canal", correto: false },
    { texto: "Cimento de fosfato de zinco (cimentação provisória)", correto: false },
    { texto: "Fórceps anterior", correto: false }
  ],
  competencias: [7, 8, 9, 8, 8, 7, 7, 9]
},

{
  id: "MAT-07",
  titulo: "Restauração Classe V em ionômero de vidro (abrasão/erosão cervical)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 2, tempo: 2, area: "Dentística",
  contexto: `A paciente Renata, 45 anos, apresenta sensibilidade cervical intensa nos dentes 23 e 24 (canino e primeiro pré-molar superiores esquerdos). Há lesões cervicais em forma de cunha (abfração/abrasão) expondo a dentina. A conduta é restauração Classe V com IONÔMERO DE VIDRO FOTOPOLIMERIZÁVEL (Vitremer ou similar), que alia adesão química à dentina úmida, liberação de flúor e boa estética. Atenção: o protocolo do CIV fotoativado é diferente do convencional — utiliza primer específico do fabricante. Selecione os materiais corretos.`,
  opcoes: [
    { texto: "Anestésico tópico e tubete de anestésico", correto: true },
    { texto: "Seringa carpule e agulha curta", correto: true },
    { texto: "Roletes de algodão ou dique de borracha para isolamento", correto: true },
    { texto: "Cureta de dentina para limpeza da lesão", correto: true },
    { texto: "Primer específico do ionômero fotopolimerizável (ativador de superfície)", correto: true },
    { texto: "Cimento de ionômero de vidro fotopolimerizável (Vitremer, Fuji II LC ou similar)", correto: true },
    { texto: "Espátula de espatulação e placa de vidro (para CIV convencional) OU cápsula fotoativada", correto: true },
    { texto: "Fotopolimerizador LED (o Vitremer exige fotoativação)", correto: true },
    { texto: "Verniz de proteção (Top Coat) após fotoativação", correto: true },
    { texto: "Broca de acabamento fina (se necessário ajuste oclusal)", correto: true },
    { texto: "Ácido fosfórico 37% (não usado para CIV — condicionamento é pelo primer)", correto: false },
    { texto: "Adesivo universal para resina composta (não necessário para CIV com primer próprio)", correto: false },
    { texto: "Resina composta (material diferente)", correto: false },
    { texto: "Limas endodônticas para tratamento de sensibilidade", correto: false },
    { texto: "Guta-percha (endodontia)", correto: false }
  ],
  competencias: [7, 8, 8, 8, 7, 7, 7, 8]
},

{
  id: "MAT-08",
  titulo: "Restauração Classe I com técnica sanduíche (CIV base + resina)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 2, tempo: 2, area: "Dentística",
  contexto: `O paciente Cláudio, 38 anos, apresenta cárie oclusal no dente 26 (primeiro molar superior esquerdo) de profundidade moderada, sem atingir a polpa. O dentista opta pela TÉCNICA SANDUÍCHE: ionômero de vidro convencional como base em dentina (aproveitando sua adesão química e liberação de flúor) e resina composta como cobertura oclusal (para resistência ao desgaste mastigatório). Este é um protocolo intermediário que combina as vantagens dos dois materiais. Selecione os materiais necessários para a técnica sanduíche fechado.`,
  opcoes: [
    { texto: "Anestésico tópico e tubete com vasoconstritor", correto: true },
    { texto: "Seringa carpule e agulha", correto: true },
    { texto: "Dique de borracha, clamp e arco (isolamento absoluto recomendado)", correto: true },
    { texto: "Broca esférica e cônica para preparo cavitário", correto: true },
    { texto: "Cureta de dentina", correto: true },
    { texto: "Cimento de ionômero de vidro convencional (base em dentina — sanduíche)", correto: true },
    { texto: "Espátula de espatulação e bloco de papel", correto: true },
    { texto: "Ácido fosfórico 37% (somente para condicionar o esmalte, não a base de CIV)", correto: true },
    { texto: "Adesivo universal (aplicado sobre o CIV após endurecimento)", correto: true },
    { texto: "Resina composta (camada oclusal de cobertura)", correto: true },
    { texto: "Fotopolimerizador LED", correto: true },
    { texto: "Brocas de acabamento e polimento", correto: true },
    { texto: "Hidróxido de cálcio (não indicado neste protocolo)", correto: false },
    { texto: "Sistema de matriz de Tofflemire (não necessário para Classe I)", correto: false },
    { texto: "Guta-percha e cimento endodôntico", correto: false },
    { texto: "Fórceps de extração", correto: false },
    { texto: "Limas K para exploração de canal", correto: false }
  ],
  competencias: [7, 8, 9, 8, 7, 7, 7, 8]
},

// ─────────────────────────────────────────────
// PERIODONTIA (MAT-09 a MAT-16)
// ─────────────────────────────────────────────
{
  id: "MAT-09",
  titulo: "Profilaxia com ultrassom, taça de borracha e flúor",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 1, tempo: 2, area: "Periodontia",
  contexto: `A paciente Gisele, 32 anos, retorna para consulta de profilaxia semestral. O exame clínico revela presença de biofilme supragengival generalizado e cálculo supragengival leve localizado nos dentes anteriores inferiores. A gengiva apresenta leve vermelhidão (gengivite leve por higiene deficiente). O procedimento será: (1) remoção do cálculo com ultrassom; (2) polimento com taça de borracha e pasta profilática; (3) aplicação de flúor tópico ao final. Selecione todos os materiais necessários para este atendimento completo.`,
  opcoes: [
    { texto: "Aparelho de ultrassom odontológico (cavitador)", correto: true },
    { texto: "Ponta do ultrassom (inserto supragengival padrão)", correto: true },
    { texto: "Taça de borracha para contra-ângulo", correto: true },
    { texto: "Pasta profilática (de baixa abrasividade)", correto: true },
    { texto: "Contra-ângulo de baixa rotação (para a taça)", correto: true },
    { texto: "Flúor gel neutro a 2% ou verniz fluoretado", correto: true },
    { texto: "Moldeira descartável (se flúor em gel com moldeira)", correto: true },
    { texto: "Sonda periodontal milimetrada", correto: true },
    { texto: "Espelho clínico, pinça e explorador", correto: true },
    { texto: "Gaze estéril e sugador", correto: true },
    { texto: "Solução reveladora de placa (para motivação do paciente)", correto: true },
    { texto: "Curetas de Gracey (raspagem subgengival — não indicada na profilaxia simples)", correto: false },
    { texto: "Bisturi cirúrgico lâmina 15 (cirurgia periodontal)", correto: false },
    { texto: "Pontos de sutura reabsorvíveis", correto: false },
    { texto: "Fórceps de extração", correto: false },
    { texto: "Limas endodônticas", correto: false }
  ],
  competencias: [8, 7, 7, 8, 8, 8, 7, 8]
},

{
  id: "MAT-10",
  titulo: "Raspagem supragengival com curetas universais",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 2, tempo: 2, area: "Periodontia",
  contexto: `O paciente Roberto, 47 anos, comparece com sangramento gengival ao escovar os dentes há 3 meses. O exame periodontal revela presença de cálculo supragengival moderado generalizado, sangramento à sondagem, mas profundidade de bolsa de até 3 mm (sem bolsa verdadeira). Diagnóstico: gengivite associada ao biofilme com cálculo. O tratamento indicado é a RASPAGEM SUPRAGENGIVAL com curetas universais e ultrassom, sem necessidade de anestesia em todos os pacientes (mas disponível para mais sensíveis). Após a raspagem, instrução de higiene oral e reavaliação em 30 dias. Selecione os materiais.`,
  opcoes: [
    { texto: "Aparelho de ultrassom com ponta supragengival", correto: true },
    { texto: "Curetas universais (McCall, Columbia ou Barnhart)", correto: true },
    { texto: "Sonda periodontal milimetrada (para diagnóstico e documentação)", correto: true },
    { texto: "Espelho clínico, pinça e explorador", correto: true },
    { texto: "Gaze estéril e sugador de saliva", correto: true },
    { texto: "Solução de clorexidina 0,12% (bochecho pré-operatório)", correto: true },
    { texto: "Anestésico tópico (para pacientes com hipersensibilidade)", correto: true },
    { texto: "Afiadeiras (Arkansas ou pedra para afiar curetas)", correto: true },
    { texto: "Curetas de Gracey 1-2 e 3-4 (para anteriores) e 11-12, 13-14 (para posteriores)", correto: false },
    { texto: "Bisturi e lâmina 15 (cirurgia periodontal)", correto: false },
    { texto: "Pontos de sutura reabsorvíveis 4-0", correto: false },
    { texto: "Membrana de regeneração óssea (para cirurgia)", correto: false },
    { texto: "Limas endodônticas", correto: false },
    { texto: "Fórceps de extração", correto: false }
  ],
  competencias: [8, 8, 7, 8, 8, 8, 7, 8]
},

{
  id: "MAT-11",
  titulo: "Raspagem subgengival com curetas de Gracey (raspagem e alisamento radicular)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 3, tempo: 3, area: "Periodontia",
  contexto: `A paciente Ana Paula, 51 anos, foi diagnosticada com periodontite generalizada estágio II, grau B. O exame periodontal mostra bolsas de 4 a 6 mm nas faces interproximais dos molares, sangramento à sondagem generalizado e cálculo sub e supragengival. O plano de tratamento inclui raspagem e alisamento radicular (RAR) por quadrante, sob anestesia local. As CURETAS DE GRACEY são os instrumentos específicos para cada região dental (são area-specific). Após a raspagem, aplica-se clorexidina para controle bacteriano. Selecione TODOS os materiais necessários para a sessão de raspagem subgengival.`,
  opcoes: [
    { texto: "Anestésico tópico e tubetes de anestésico (para anestesia por bloqueio/infiltração)", correto: true },
    { texto: "Seringa carpule e agulhas (longa para bloqueio + curta para infiltração)", correto: true },
    { texto: "Curetas de Gracey 1-2 (anteriores — faces vestibular e lingual)", correto: true },
    { texto: "Curetas de Gracey 11-12 (molares e pré-molares — face mesial)", correto: true },
    { texto: "Curetas de Gracey 13-14 (molares e pré-molares — face distal)", correto: true },
    { texto: "Curetas de Gracey 7-8 e 9-10 (pré-molares e molares, faces livres)", correto: true },
    { texto: "Aparelho de ultrassom com ponta subgengival (inserto slim para bolsas)", correto: true },
    { texto: "Sonda periodontal milimetrada (sondagem antes e durante a sessão)", correto: true },
    { texto: "Seringa de irrigação e solução de clorexidina 0,12% (irrigação subgengival)", correto: true },
    { texto: "Afiadeira (manutenção do fio das curetas)", correto: true },
    { texto: "Gaze estéril, espelho, pinça, sugador", correto: true },
    { texto: "Limas endodônticas K para instrumentação do canal", correto: false },
    { texto: "Bisturi lâmina 15 e porta-agulha (cirurgia periodontal)", correto: false },
    { texto: "Pontos de sutura reabsorvíveis (pós-cirurgia)", correto: false },
    { texto: "Fórceps de extração", correto: false },
    { texto: "Dique de borracha e clamp (endodontia/dentística)", correto: false }
  ],
  competencias: [8, 9, 8, 8, 8, 8, 7, 8]
},

{
  id: "MAT-12",
  titulo: "Jato de bicarbonato (air polishing) para remoção de manchas e biofilme",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 1, tempo: 2, area: "Periodontia",
  contexto: `O paciente Tiago, 27 anos, fumante, apresenta manchas extrínsecas escuras generalizadas (por tabaco e café) e biofilme moderado sem cálculo supragengival significativo. A conduta indicada é profilaxia com JATO DE BICARBONATO (air polishing) para remoção das manchas, seguido de polimento com taça de borracha. O jato de bicarbonato é contraindicado em: pacientes com dieta hipossódica, insuficiência renal ou respiratória, e em implantes (usar pó de glicina nesses casos). Selecione os materiais para este procedimento.`,
  opcoes: [
    { texto: "Aparelho de jato de bicarbonato (air polishing / profilaxia a jato)", correto: true },
    { texto: "Pó de bicarbonato de sódio (granulometria específica para o aparelho)", correto: true },
    { texto: "Óculos de proteção para o paciente", correto: true },
    { texto: "Máscara de proteção reforçada para a equipe", correto: true },
    { texto: "Sugador de alta potência (o jato gera muito aerossol)", correto: true },
    { texto: "Espelho clínico (para visualização — pode embaçar, usar com spray de água)", correto: true },
    { texto: "Taça de borracha e pasta profilática (polimento final após jato)", correto: true },
    { texto: "Vaselina para proteção labial do paciente (evita ressecamento)", correto: true },
    { texto: "Curetas de Gracey (raspagem subgengival — procedimento diferente)", correto: false },
    { texto: "Aparelho de ultrassom com inserto subgengival (não é necessário para este caso)", correto: false },
    { texto: "Bisturi e sutura (cirurgia periodontal)", correto: false },
    { texto: "Pontos de sutura reabsorvíveis", correto: false },
    { texto: "Fórceps de extração", correto: false }
  ],
  competencias: [7, 7, 7, 8, 8, 8, 6, 8]
},

{
  id: "MAT-13",
  titulo: "Aplicação tópica de flúor em gel com moldeira",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 1, tempo: 2, area: "Periodontia",
  contexto: `A paciente Sophia, 14 anos, apresenta alto risco de cárie: histórico de múltiplas cáries tratadas, dieta rica em carboidratos, higiene bucal regular. Após a profilaxia realizada, a dentista indica aplicação tópica de flúor gel fosfato acidulado (APF) a 1,23% por 4 minutos. O flúor aumenta a resistência do esmalte e pode remineralizar lesões iniciais. O paciente não deve comer nem beber por 30 minutos após a aplicação. Selecione todos os materiais para a aplicação de flúor em gel com moldeira.`,
  opcoes: [
    { texto: "Flúor gel fosfato acidulado (APF) a 1,23% (sabor neutro ou frutal)", correto: true },
    { texto: "Moldeira descartável de espuma (superior e inferior, tamanho adequado)", correto: true },
    { texto: "Gaze para secar os dentes antes da aplicação", correto: true },
    { texto: "Sugador de saliva (para evitar deglutição do flúor)", correto: true },
    { texto: "Espelho clínico e pinça", correto: true },
    { texto: "Seringa de saliva (para manter os dentes secos)", correto: true },
    { texto: "Ácido fosfórico 37% (condicionamento de esmalte para resina)", correto: false },
    { texto: "Adesivo para resina composta", correto: false },
    { texto: "Resina composta fotopolimerizável", correto: false },
    { texto: "Fotopolimerizador LED", correto: false },
    { texto: "Curetas de Gracey para raspagem", correto: false },
    { texto: "Aparelho de ultrassom", correto: false },
    { texto: "Solução de clorexidina 2% para irrigação subgengival", correto: false }
  ],
  competencias: [7, 7, 7, 8, 8, 8, 6, 8]
},

{
  id: "MAT-14",
  titulo: "Frenectomia labial superior (freio inserido alto com diastema)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 3, tempo: 2, area: "Periodontia",
  contexto: `O paciente Murilo, 9 anos, apresenta freio labial superior com inserção baixa (chegando até a papila interdental), causando diastema entre os incisivos centrais superiores. Após avaliação ortodôntica, foi indicada a FRENECTOMIA LABIAL SUPERIOR por técnica clássica (excisão em diamante com bisturi), seguida de sutura. O procedimento é realizado com anestesia local e dura aproximadamente 20 a 30 minutos. Selecione todos os materiais necessários para este procedimento cirúrgico.`,
  opcoes: [
    { texto: "Anestésico tópico (gel ou spray)", correto: true },
    { texto: "Tubete de anestésico (lidocaína 2% com epinefrina 1:100.000)", correto: true },
    { texto: "Seringa carpule e agulha curta", correto: true },
    { texto: "Bisturi cabo número 3 e lâmina 15", correto: true },
    { texto: "Pinça hemostática reta (Kelly)", correto: true },
    { texto: "Tesoura cirúrgica de ponta reta (para remoção do freio)", correto: true },
    { texto: "Porta-agulha (porta-suturas)", correto: true },
    { texto: "Fio de sutura reabsorvível 4-0 (categute cromado ou Vicryl)", correto: true },
    { texto: "Pinça de tecido com dente (Adson)", correto: true },
    { texto: "Gaze estéril e compressa", correto: true },
    { texto: "Solução de clorexidina 0,12% (irrigação da ferida)", correto: true },
    { texto: "Afastador de lábio ou espelho para afastar tecido", correto: true },
    { texto: "Dique de borracha, clamp e arco (para isolamento em restaurações)", correto: false },
    { texto: "Limas endodônticas K e H", correto: false },
    { texto: "Fórceps de extração", correto: false },
    { texto: "Ácido fosfórico 37% e adesivo para resina", correto: false }
  ],
  competencias: [8, 8, 9, 8, 7, 7, 7, 9]
},

{
  id: "MAT-15",
  titulo: "Frenectomia lingual (anquiloglossia com dificuldade de fala)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 3, tempo: 2, area: "Periodontia",
  contexto: `O paciente Pedro, 4 anos, apresenta freio lingual curto e espesso (anquiloglossia grau II), com dificuldade de protruir a língua, limitação de movimentos e dificuldade de fala (fono recomendou cirurgia). A FRENECTOMIA LINGUAL é mais delicada que a labial: a língua é altamente vascularizada, e há risco de lesão do ducto de Wharton (glândula sublingual). A técnica mais comum em crianças pequenas é a frenotomia com tesoura (sem bisturi) com sutura mínima ou sem sutura (dependendo da idade e tamanho do freio). Selecione os materiais.`,
  opcoes: [
    { texto: "Anestésico tópico (gel lingual ou spray)", correto: true },
    { texto: "Tubete de anestésico pediátrico (dose reduzida por peso)", correto: true },
    { texto: "Seringa carpule pediátrica e agulha curta", correto: true },
    { texto: "Pinça hemostática reta (Kelly ou Mosquito) — para segurar e orientar o corte", correto: true },
    { texto: "Tesoura cirúrgica de ponta romba (para frenectomia lingual em criança)", correto: true },
    { texto: "Gaze estéril e compressas (controle de sangramento)", correto: true },
    { texto: "Porta-agulha e fio de sutura reabsorvível 4-0 ou 5-0 (se necessário)", correto: true },
    { texto: "Solução de clorexidina 0,12% (irrigação suave)", correto: true },
    { texto: "Afastador de língua e espelho clínico", correto: true },
    { texto: "Bisturi lâmina 15 (somente se técnica cirúrgica clássica em criança maior)", correto: true },
    { texto: "Dique de borracha e clamp (isolamento para dentística)", correto: false },
    { texto: "Fórceps de extração pediátrico", correto: false },
    { texto: "Limas endodônticas pediátricas", correto: false },
    { texto: "Ácido fosfórico 37% para condicionamento de esmalte", correto: false },
    { texto: "Aparelho de ultrassom para raspagem", correto: false }
  ],
  competencias: [8, 9, 9, 8, 7, 7, 7, 9]
},

{
  id: "MAT-16",
  titulo: "Orientação de higiene bucal — montagem do kit e demonstração",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 1, tempo: 2, area: "Periodontia",
  contexto: `O paciente Hélio, 16 anos, apresenta gengivite generalizada causada exclusivamente por higiene bucal deficiente. Não há cálculo. O índice de placa é alto. Após o tratamento com profilaxia, a dentista solicita que você realize a SESSÃO DE ORIENTAÇÃO DE HIGIENE BUCAL, demonstrando a técnica de Bass modificada, o uso do fio dental e o uso de escovas interdentais. É fundamental utilizar o revelador de placa para motivar o paciente. Selecione todos os materiais necessários para a sessão educativa e de orientação.`,
  opcoes: [
    { texto: "Escova de dentes de cerdas macias (para demonstração)", correto: true },
    { texto: "Fio dental (tipo encerado ou em fita)", correto: true },
    { texto: "Escovas interdentais (variedade de tamanhos para motivação)", correto: true },
    { texto: "Creme dental fluoretado (para demonstração da quantidade correta)", correto: true },
    { texto: "Revelador de placa bacteriana (solução ou pastilhas)", correto: true },
    { texto: "Espelho clínico (para mostrar ao paciente os locais com placa revelada)", correto: true },
    { texto: "Modelo didático de arcada dentária (para demonstrar a técnica de escovação)", correto: true },
    { texto: "Escova monopenacho (para áreas de difícil acesso)", correto: true },
    { texto: "Material educativo / folder sobre saúde bucal", correto: true },
    { texto: "Sonda periodontal (para mostrar profundidade das bolsas gengivais)", correto: true },
    { texto: "Curetas de Gracey para raspagem (procedimento clínico, não de orientação)", correto: false },
    { texto: "Aparelho de ultrassom (raspagem)", correto: false },
    { texto: "Bisturi e porta-agulha (cirurgia)", correto: false },
    { texto: "Anestésico local e seringa carpule", correto: false },
    { texto: "Fórceps de extração", correto: false }
  ],
  competencias: [9, 7, 6, 7, 8, 8, 7, 9]
},

// ─────────────────────────────────────────────
// CIRURGIA ORAL MENOR (MAT-17 a MAT-23)
// ─────────────────────────────────────────────
{
  id: "MAT-17",
  titulo: "Extração simples de pré-molar unirradicular",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 2, tempo: 2, area: "Cirurgia",
  contexto: `O paciente João Carlos, 22 anos, necessita extração do dente 14 (primeiro pré-molar superior direito) para início do tratamento ortodôntico. O dente está hígido (sem cárie), tem raiz única e bom suporte ósseo. Será realizada extração simples com luxação e sindesmotomia prévia. Não há necessidade de sutura. O procedimento é considerado de baixa complexidade cirúrgica. Selecione os materiais necessários para esta extração simples.`,
  opcoes: [
    { texto: "Anestésico tópico (gel 20% ou spray benzocaína)", correto: true },
    { texto: "Tubetes de anestésico (lidocaína 2% com epinefrina 1:100.000 — bloqueio + infiltração)", correto: true },
    { texto: "Seringa carpule e agulhas (longa para bloqueio + curta para infiltração)", correto: true },
    { texto: "Sindesmótomo reto (secção do ligamento periodontal — sindesmotomia)", correto: true },
    { texto: "Alavanca reta (elevador reto de Seldin — luxação inicial)", correto: true },
    { texto: "Fórceps para pré-molar superior (fórceps 150 ou similar)", correto: true },
    { texto: "Gaze estéril (curativo alveolar pós-extração)", correto: true },
    { texto: "Espelho clínico, pinça e explorador", correto: true },
    { texto: "Seringa de irrigação e soro fisiológico 0,9% estéril (limpeza do alvéolo)", correto: true },
    { texto: "Bisturi lâmina 15 e descolador de periósteo (para extrações complexas)", correto: false },
    { texto: "Broca cirúrgica para ostectomia (extração complexa)", correto: false },
    { texto: "Porta-agulha e sutura reabsorvível (não necessário na extração simples)", correto: false },
    { texto: "Limas endodônticas", correto: false },
    { texto: "Dique de borracha e clamp", correto: false }
  ],
  competencias: [7, 8, 8, 8, 7, 7, 7, 8]
},

{
  id: "MAT-18",
  titulo: "Extração complexa com osteotomia — terceiro molar inferior incluso",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 3, tempo: 3, area: "Cirurgia",
  contexto: `A paciente Camila, 23 anos, apresenta queixa de dor e inflamação pericoronária recorrente no dente 38 (terceiro molar inferior esquerdo). A radiografia panorâmica mostra inclusão parcial em posição mesioangular, com cobertura óssea no terço distal. A extração requer RETALHO MUCOPERIOSTEAL, OSTEOTOMIA (remoção de parte do osso com broca cirúrgica) e ODONTOSSECÇÃO (secção do dente em partes). É uma extração complexa sob anestesia loco-regional. Selecione TODOS os materiais para este procedimento.`,
  opcoes: [
    { texto: "Anestésico tópico e tubetes de anestésico (bloqueio do nervo alveolar inferior + lingual + bucal longo)", correto: true },
    { texto: "Seringa carpule e agulhas longa e curta", correto: true },
    { texto: "Bisturi cabo 3 + lâmina 15C (incisão para retalho)", correto: true },
    { texto: "Descolador de periósteo (Molt ou Freer — para levantar o retalho)", correto: true },
    { texto: "Afastador de tecido (Ministeck ou Minnesota)", correto: true },
    { texto: "Peça de mão cirúrgica (contra-ângulo cirúrgico) com motor elétrico", correto: true },
    { texto: "Broca cirúrgica troncocônica de aço inoxidável (ostectomia e odontossecção)", correto: true },
    { texto: "Irrigação abundante com soro fisiológico 0,9% estéril (refrigeração)", correto: true },
    { texto: "Alavancas anguladas (Lecluse, Cryer — para luxar o dente seccionado)", correto: true },
    { texto: "Fórceps para molar inferior (para remoção do dente)", correto: true },
    { texto: "Cureta cirúrgica (para limpeza do alvéolo e remoção de tecido folicular)", correto: true },
    { texto: "Lima para osso (regularização de espículas ósseas)", correto: true },
    { texto: "Porta-agulha, pinça cirúrgica e fio de sutura reabsorvível 3-0 (Vicryl ou categute cromado)", correto: true },
    { texto: "Gaze estéril e compressas cirúrgicas", correto: true },
    { texto: "Limas endodônticas K para exploração de canal", correto: false },
    { texto: "Dique de borracha e clamp (isolamento para dentística)", correto: false },
    { texto: "Ácido fosfórico 37% e adesivo para resina", correto: false }
  ],
  competencias: [8, 9, 9, 8, 8, 7, 7, 9]
},

{
  id: "MAT-19",
  titulo: "Extração simples múltipla — 4 pré-molares para ortodontia",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 2, tempo: 3, area: "Cirurgia",
  contexto: `A paciente Beatriz, 16 anos, necessita extração dos quatro primeiros pré-molares (14, 24, 34 e 44) para início do tratamento ortodôntico com aparelho fixo. Todos os dentes são hígidos, com raízes únicas e sem complicações previstas. As extrações serão realizadas na mesma sessão (lado a lado), começando pelos superiores. Não haverá retalho nem osteotomia. São 4 extrações simples sequenciais. Você precisa calcular a quantidade adequada de materiais para 4 extrações. Selecione os materiais necessários.`,
  opcoes: [
    { texto: "Anestésico tópico (gel ou spray — suficiente para os 4 sítios)", correto: true },
    { texto: "Múltiplos tubetes de anestésico — 6 a 8 tubetes para os 4 quadrantes", correto: true },
    { texto: "Seringa carpule e agulhas (longa e curta — trocar a agulha a cada quadrante)", correto: true },
    { texto: "Sindesmótomo reto e curvo (para cada dente)", correto: true },
    { texto: "Alavancas retas (elevadores — para luxação prévia)", correto: true },
    { texto: "Fórceps para pré-molar superior (dentes 14 e 24)", correto: true },
    { texto: "Fórceps para pré-molar inferior (dentes 34 e 44)", correto: true },
    { texto: "Gaze estéril (em quantidade suficiente para os 4 alvéolos)", correto: true },
    { texto: "Seringa de irrigação e soro fisiológico 0,9% estéril", correto: true },
    { texto: "Espelho, pinça e explorador", correto: true },
    { texto: "Bisturi lâmina 15 e descolador de periósteo (extrações complexas)", correto: false },
    { texto: "Broca cirúrgica para ostectomia (dentes inclusos)", correto: false },
    { texto: "Porta-agulha e sutura (não necessário para extrações simples sem retalho)", correto: false },
    { texto: "Limas endodônticas", correto: false },
    { texto: "Dique de borracha e clamp", correto: false }
  ],
  competencias: [7, 8, 8, 8, 7, 7, 7, 8]
},

{
  id: "MAT-20",
  titulo: "Biópsia excisional de lesão na mucosa jugal",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 3, tempo: 2, area: "Cirurgia",
  contexto: `A paciente Marta, 55 anos, apresenta lesão branca de 0,6 cm na mucosa jugal direita, de bordas irregulares, indolor, há 4 semanas (leucoplasia suspeita). Após documentação fotográfica, o cirurgião indica BIÓPSIA EXCISIONAL — remoção total da lesão com margem de tecido sadio ao redor, pois a lesão é pequena e acessível. A peça deve ser enviada em formol 10% para análise anatomopatológica. Selecione TODOS os materiais para este procedimento diagnóstico-cirúrgico.`,
  opcoes: [
    { texto: "Anestésico tópico e tubete de anestésico sem vasoconstritor ou com baixa concentração (para não interferir na coloração do tecido)", correto: true },
    { texto: "Seringa carpule e agulha curta", correto: true },
    { texto: "Bisturi cabo 3 + lâmina 15 (para incisão em fuso ao redor da lesão)", correto: true },
    { texto: "Pinça de tecido com dente (Adson) — para manipular a lesão sem esmagar", correto: true },
    { texto: "Tesoura cirúrgica de ponta reta (para dissecção da lesão)", correto: true },
    { texto: "Porta-agulha e pinça cirúrgica", correto: true },
    { texto: "Fio de sutura reabsorvível 4-0 (Vicryl) para fechamento", correto: true },
    { texto: "Gaze estéril e compressas", correto: true },
    { texto: "Frasco com formol a 10% (fixação imediata da peça cirúrgica)", correto: true },
    { texto: "Etiqueta de identificação para o frasco e requisição para anatomopatológico", correto: true },
    { texto: "Afastador de bochecha (para acesso à mucosa jugal)", correto: true },
    { texto: "Câmera fotográfica ou fotografia pré-operatória (documentação)", correto: true },
    { texto: "Fórceps de extração (cirurgia dento-alveolar)", correto: false },
    { texto: "Limas endodônticas e hipoclorito de sódio", correto: false },
    { texto: "Dique de borracha e clamp", correto: false },
    { texto: "Resina composta e fotopolimerizador", correto: false }
  ],
  competencias: [8, 9, 9, 8, 7, 7, 7, 9]
},

{
  id: "MAT-21",
  titulo: "Biópsia incisional de lesão ulcerada extensa na língua",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 3, tempo: 2, area: "Cirurgia",
  contexto: `O paciente Antônio, 62 anos, tabagista e etilista há 30 anos, apresenta úlcera indurada de 2,5 cm na borda lateral esquerda da língua, indolor, há 6 semanas. Alta suspeita de carcinoma de células escamosas. Por ser grande, o cirurgião indica BIÓPSIA INCISIONAL — coleta de um fragmento representativo (incluindo a borda ativa da lesão, não o centro necrótico). A sutura deve ser com fio não-reabsorvível para que o patologista possa identificar as margens da amostra. Selecione os materiais.`,
  opcoes: [
    { texto: "Anestésico tópico e tubetes de anestésico (sem vasoconstritor — para não distorcer o tecido histológico)", correto: true },
    { texto: "Seringa carpule e agulha curta", correto: true },
    { texto: "Bisturi cabo 3 + lâmina 15 (ou 12 para acesso lingual)", correto: true },
    { texto: "Pinça de tecido com dente (Adson) — manipulação delicada", correto: true },
    { texto: "Tesoura cirúrgica fina (dissecção cuidadosa)", correto: true },
    { texto: "Porta-agulha e pinça cirúrgica", correto: true },
    { texto: "Fio de sutura NÃO-REABSORVÍVEL (nylon 3-0 ou seda 3-0) — para identificar margens da amostra ao patologista", correto: true },
    { texto: "Gaze estéril e compressas", correto: true },
    { texto: "Frasco com formol a 10% devidamente identificado", correto: true },
    { texto: "Formulário de requisição de exame anatomopatológico com história clínica detalhada", correto: true },
    { texto: "Afastador de língua e gaze para segurar a língua", correto: true },
    { texto: "Fotografia pré-operatória da lesão (documentação)", correto: true },
    { texto: "Fórceps de extração dental", correto: false },
    { texto: "Limas endodônticas", correto: false },
    { texto: "Dique de borracha e clamp", correto: false },
    { texto: "Aparelho de ultrassom (raspagem periodontal)", correto: false }
  ],
  competencias: [8, 9, 9, 8, 7, 7, 7, 9]
},

{
  id: "MAT-22",
  titulo: "Alveoloplastia pós-extração múltipla para prótese total",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 3, tempo: 2, area: "Cirurgia",
  contexto: `O paciente Osvaldo, 68 anos, realizou extrações múltiplas na arcada superior há 3 semanas para confecção de prótese total. Retornou ao consultório com queixa de irregularidade óssea (espicula óssea palpável) na região dos dentes 12 e 13, dificultando a adaptação da prótese provisória. A conduta é ALVEOLOPLASTIA — regularização cirúrgica do rebordo alveolar para criar uma base lisa e uniforme para a prótese. Inclui retalho, remoção de espículas com lima óssea ou broca, e sutura. Selecione os materiais.`,
  opcoes: [
    { texto: "Anestésico tópico e tubetes de anestésico (infiltração local)", correto: true },
    { texto: "Seringa carpule e agulha curta", correto: true },
    { texto: "Bisturi cabo 3 + lâmina 15 (incisão de retalho sobre o rebordo)", correto: true },
    { texto: "Descolador de periósteo (Molt — para levantar o retalho e expor o osso)", correto: true },
    { texto: "Lima para osso (lima óssea fina — remoção de espicula por desgaste manual)", correto: true },
    { texto: "Broca cirúrgica troncocônica (ostectomia leve se necesário)", correto: true },
    { texto: "Peça de mão cirúrgica (baixa rotação) com refrigeração", correto: true },
    { texto: "Pinça Gouge (para remoção de fragmentos ósseos maiores)", correto: true },
    { texto: "Soro fisiológico 0,9% estéril e seringa de irrigação", correto: true },
    { texto: "Porta-agulha, pinça cirúrgica e fio reabsorvível 3-0 (Vicryl para sutura)", correto: true },
    { texto: "Gaze estéril e compressas cirúrgicas", correto: true },
    { texto: "Fórceps de extração (extrações já realizadas anteriormente)", correto: false },
    { texto: "Limas endodônticas e hipoclorito de sódio", correto: false },
    { texto: "Dique de borracha e clamp", correto: false },
    { texto: "Ácido fosfórico 37% e adesivo para resina", correto: false }
  ],
  competencias: [7, 8, 8, 8, 7, 7, 7, 8]
},

{
  id: "MAT-23",
  titulo: "Extração de dente decíduo com rizólise (criança)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 1, tempo: 2, area: "Cirurgia",
  contexto: `A paciente Maria, 8 anos, apresenta o dente 64 (primeiro molar decíduo superior esquerdo) com mobilidade grau II devido à rizólise fisiológica avançada (raiz reabsorvida). O dente permanente está em erupção. A extração é simples, com luxação mínima, pois as raízes estão parcialmente reabsorvidas. É importante utilizar anestésico em dose pediátrica correta (calculada por peso). O instrumento de escolha é o fórceps pediátrico para decíduo, menor que o adulto. Selecione os materiais adequados para este atendimento pediátrico.`,
  opcoes: [
    { texto: "Anestésico tópico com sabor (para reduzir ansiedade infantil)", correto: true },
    { texto: "Tubete de anestésico pediátrico (artucaína 4% ou lidocaína — dose por kg)", correto: true },
    { texto: "Seringa carpule pediátrica e agulha curta 27G", correto: true },
    { texto: "Sindesmótomo reto de tamanho pediátrico (pequeno)", correto: true },
    { texto: "Alavanca reta pequena (luxação suave — raiz já reabsorvida)", correto: true },
    { texto: "Fórceps pediátrico para decíduo superior (Fórceps 150S — menor que adulto)", correto: true },
    { texto: "Gaze estéril (curativo pós-extração e mordida)", correto: true },
    { texto: "Espelho clínico e explorador", correto: true },
    { texto: "Bisturi e descolador de periósteo (cirurgia complexa — não necessário)", correto: false },
    { texto: "Broca cirúrgica para ostectomia (dentes inclusos)", correto: false },
    { texto: "Porta-agulha e sutura (não necessário na extração simples decídua)", correto: false },
    { texto: "Fórceps adulto para molar superior (muito grande para a criança)", correto: false },
    { texto: "Limas endodônticas pediátricas", correto: false }
  ],
  competencias: [7, 8, 8, 8, 7, 8, 7, 9]
},

// ─────────────────────────────────────────────
// PRÓTESE (MAT-24 a MAT-30)
// ─────────────────────────────────────────────
{
  id: "MAT-24",
  titulo: "Preparo e moldagem para prótese unitária fixa (coroa metal-cerâmica)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 3, tempo: 3, area: "Prótese",
  contexto: `A paciente Vera, 44 anos, necessita de coroa metal-cerâmica no dente 21 (incisivo central superior esquerdo), que apresenta cárie extensa e fratura de cúspide tornando-o irrestaurável diretamente. O dente tem vitalidade preservada. A sessão de hoje contempla: preparo protético (desgaste do dente para receber a coroa), retração gengival para exposição da linha de término, e moldagem com silicone de adição (polivinilsiloxano). Ao final, instala-se coroa provisória em acrílico cimentada com cimento provisório. Selecione TODOS os materiais.`,
  opcoes: [
    { texto: "Anestésico tópico e tubete de anestésico com vasoconstritor", correto: true },
    { texto: "Seringa carpule e agulha curta", correto: true },
    { texto: "Brocas diamantadas para preparo (troncocônica de ponta ativa + chanfro + broca de penetração)", correto: true },
    { texto: "Fio de retração gengival (cordão de retração nº 00 e nº 0)", correto: true },
    { texto: "Pasta de retração gengival hemostática (ex: Expasyl ou Astringident)", correto: true },
    { texto: "Silicone de adição (polivinilsiloxano) — massa pesada + fluida (moldagem com dupla viscosidade)", correto: true },
    { texto: "Moldeira de estoque (metálica ou de estoque rígido)", correto: true },
    { texto: "Silicone de adição fluido (para moldagem da linha de término)", correto: true },
    { texto: "Coroa provisória em acrílico autopolimerizável (ou bisacrílico)", correto: true },
    { texto: "Cimento provisório (ex: Temp-Bond ou Rely X Temp)", correto: true },
    { texto: "Papel de articulação e pinça de articulação (ajuste oclusal do provisório)", correto: true },
    { texto: "Espelho clínico, pinça, sonda e explorador", correto: true },
    { texto: "Guta-percha e cimento endodôntico (tratamento de canal)", correto: false },
    { texto: "Curetas de Gracey (raspagem periodontal)", correto: false },
    { texto: "Fórceps de extração", correto: false },
    { texto: "Limas endodônticas K e H", correto: false }
  ],
  competencias: [7, 8, 8, 8, 7, 7, 7, 8]
},

{
  id: "MAT-25",
  titulo: "Preparo e moldagem para prótese fixa de 3 elementos (ponte)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 3, tempo: 3, area: "Prótese",
  contexto: `O paciente Sérgio, 52 anos, perdeu o dente 36 (primeiro molar inferior esquerdo) há 2 anos. Os dentes 35 (segundo pré-molar) e 37 (segundo molar) estão hígidos e serão utilizados como pilares para uma PONTE FIXA DE 3 ELEMENTOS (pôntico no espaço do 36). Os dentes pilares serão preparados hoje, com moldagem em silicone de adição e instalação de provisório. O protético receberá o modelo para confecção. Selecione os materiais para a sessão de preparo e moldagem.`,
  opcoes: [
    { texto: "Anestésico tópico e tubetes de anestésico (bloqueio nervo alveolar inferior + infiltração)", correto: true },
    { texto: "Seringa carpule e agulhas (longa + curta)", correto: true },
    { texto: "Brocas diamantadas para preparo (troncocônica, ponta ativa, chanfro ou ombro)", correto: true },
    { texto: "Fios de retração gengival e pasta hemostática (dois sítios — dentes 35 e 37)", correto: true },
    { texto: "Silicone de adição de dupla viscosidade (massa pesada + fluida) + pistola de mistura", correto: true },
    { texto: "Moldeira de estoque inferior metálica", correto: true },
    { texto: "Provisório em bisacrílico (moldado sobre a arcada antes do preparo — técnica do negativo)", correto: true },
    { texto: "Cimento provisório (Temp-Bond ou similar)", correto: true },
    { texto: "Articulador de mão e papel de articulação para ajuste oclusal do provisório", correto: true },
    { texto: "Cera de registro oclusal (registro de mordida para o protético)", correto: true },
    { texto: "Espelho clínico, pinça, sonda, explorador", correto: true },
    { texto: "Guta-percha e cimento endodôntico (endodontia)", correto: false },
    { texto: "Fórceps de extração", correto: false },
    { texto: "Limas endodônticas rotatórias", correto: false },
    { texto: "Resina composta bulk-fill e fotopolimerizador (dentística direta)", correto: false }
  ],
  competencias: [7, 8, 8, 8, 7, 7, 7, 8]
},

{
  id: "MAT-26",
  titulo: "Moldagem para Prótese Parcial Removível (PPR) superior",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 2, tempo: 2, area: "Prótese",
  contexto: `A paciente Dilma, 63 anos, é desdentada parcial superior: ausência dos dentes 15, 16, 17 (Classe I de Kennedy modificação 1). Os dentes remanescentes estão em boas condições. O plano de tratamento é PPR com grampos circunferenciais nos dentes 14 e 18. A sessão de hoje é a MOLDAGEM PRELIMINAR com alginato para obtenção de modelos de estudo e confecção de moldeira individual. O alginato é o material de escolha para moldagens de PPR (não o silicone — esse é para prótese fixa). Selecione os materiais.`,
  opcoes: [
    { texto: "Alginato (material de moldagem irreversível — tipo 2 de presa normal)", correto: true },
    { texto: "Moldeira de estoque metálica ou plástica para maxila (perfurada)", correto: true },
    { texto: "Gesso tipo II — Tipo comum (para vazamento do modelo de estudo)", correto: true },
    { texto: "Cuba de borracha e espátula de espatulação para gesso", correto: true },
    { texto: "Cuba de borracha e espátula para alginato (cuba separada)", correto: true },
    { texto: "Cera utilidade (rosa) — para ajuste das bordas da moldeira de estoque", correto: true },
    { texto: "Registro de mordida em cera (para articular os modelos)", correto: true },
    { texto: "Sugador de saliva e pinça para afastar língua/bochecha", correto: true },
    { texto: "Espelho clínico e pinça", correto: true },
    { texto: "Silicone de adição de dupla viscosidade (para prótese fixa — não para PPR preliminar)", correto: false },
    { texto: "Fio de retração gengival (para prótese fixa)", correto: false },
    { texto: "Fórceps de extração", correto: false },
    { texto: "Limas endodônticas", correto: false },
    { texto: "Broca de alta rotação para preparo protético", correto: false }
  ],
  competencias: [7, 7, 7, 8, 7, 7, 7, 8]
},

{
  id: "MAT-27",
  titulo: "Moldagem preliminar para Prótese Total superior (desdentado total)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 2, tempo: 2, area: "Prótese",
  contexto: `O paciente Nelson, 72 anos, é desdentado total na arcada superior há 5 anos. A prótese atual está desgastada e desadaptada. O tratamento indicado é confecção de nova PRÓTESE TOTAL SUPERIOR. A primeira sessão clínica é a MOLDAGEM PRELIMINAR (de estudo), com alginato em moldeira de estoque para desdentado, que gerará o modelo primário. A partir desse modelo, o protético confeccionará a moldeira individual para a moldagem definitiva. Selecione os materiais para a moldagem preliminar de desdentado total.`,
  opcoes: [
    { texto: "Alginato (moldagem de estudo — material de escolha para preliminar)", correto: true },
    { texto: "Moldeira de estoque para desdentado total superior (bordas lisas, sem retenções abruptas)", correto: true },
    { texto: "Cera utilidade para bordejamento das bordas da moldeira (evitar trauma gengival)", correto: true },
    { texto: "Gesso tipo II (para vazar o modelo primário — gesso comum)", correto: true },
    { texto: "Cuba de borracha e espátula para alginato", correto: true },
    { texto: "Cuba e espátula para gesso", correto: true },
    { texto: "Vibrador de gesso (para eliminar bolhas no modelo)", correto: true },
    { texto: "Espelho clínico e pinça (exame pré-moldagem do rebordo)", correto: true },
    { texto: "Silicone de adição de dupla viscosidade (moldagem definitiva — próxima sessão)", correto: false },
    { texto: "Moldeira individual (confeccionada após a preliminar — próxima etapa)", correto: false },
    { texto: "Fórceps de extração", correto: false },
    { texto: "Limas endodônticas", correto: false },
    { texto: "Broca de alta rotação (preparo protético)", correto: false }
  ],
  competencias: [6, 7, 7, 8, 7, 7, 6, 8]
},

{
  id: "MAT-28",
  titulo: "Cimentação de prótese fixa unitária (coroa total cerâmica)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 3, tempo: 2, area: "Prótese",
  contexto: `O paciente Ricardo, 38 anos, retorna para instalação definitiva de coroa total em cerâmica pura (e.max) no dente 11 (incisivo central superior direito), confeccionada pelo protético. Antes da cimentação, deve-se: (1) realizar o tratamento de superfície da porcelana com ácido fluorídrico 9,5% + silano; (2) tratar o dente com ácido fosfórico + adesivo; (3) cimentar com cimento resinoso fotoativado. Este protocolo garante a adesão máxima entre a cerâmica e o dente. Selecione TODOS os materiais para a cimentação adesiva de cerâmica pura.`,
  opcoes: [
    { texto: "Ácido fluorídrico 9,5% (ataque da superfície interna da cerâmica)", correto: true },
    { texto: "Silano (agente de união entre a porcelana e o cimento resinoso)", correto: true },
    { texto: "Ácido fosfórico 37% (condicionamento do dente)", correto: true },
    { texto: "Adesivo universal (aplicado no dente após condicionamento)", correto: true },
    { texto: "Pasta de prova de cor (try-in paste — testar a cor antes de cimentar)", correto: true },
    { texto: "Cimento resinoso fotoativado (ex: Variolink Esthetic, RelyX Veneer)", correto: true },
    { texto: "Fotopolimerizador LED (fotoativação do cimento)", correto: true },
    { texto: "Fio dental (verificar ponto de contato antes e remover excesso de cimento)", correto: true },
    { texto: "Papel de articulação + pinça (ajuste oclusal após cimentação)", correto: true },
    { texto: "Espelho clínico e explorador", correto: true },
    { texto: "Gaze e algodão (limpeza e secagem)", correto: true },
    { texto: "Broca de alta rotação para ajuste se necessário", correto: true },
    { texto: "Guta-percha e cimento endodôntico (endodontia)", correto: false },
    { texto: "Limas endodônticas", correto: false },
    { texto: "Fórceps de extração", correto: false },
    { texto: "Alginato para moldagem (moldagem já foi realizada em sessão anterior)", correto: false }
  ],
  competencias: [7, 8, 9, 8, 7, 7, 7, 9]
},

{
  id: "MAT-29",
  titulo: "Reembasamento direto de PPR inferior no consultório",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 2, tempo: 2, area: "Prótese",
  contexto: `A paciente Conceição, 70 anos, retorna com queixa de PPR inferior solta e desconfortável. O exame mostra perda óssea no rebordo após 3 anos sem ajuste — a base da prótese não acompanhou as alterações do rebordo. Indica-se REEMBASAMENTO DIRETO no consultório: aplicação de resina de reembasamento autopolimerizável (tipo Kooliner ou Tokuyama Rebase Fast II) diretamente sobre a base da prótese em boca, moldando o novo assento da base sobre o rebordo atual. Selecione os materiais para este procedimento.`,
  opcoes: [
    { texto: "Resina de reembasamento direto autopolimerizável (Kooliner, Ufi Gel Hard ou similar)", correto: true },
    { texto: "Monômero (líquido) e polímero (pó) do sistema de reembasamento", correto: true },
    { texto: "Espátula de espatulação e pote dappen (para misturar a resina)", correto: true },
    { texto: "Pincel (para aplicar a resina líquida na base da prótese)", correto: true },
    { texto: "Vaselina (isolante para os tecidos moles do paciente evitar aderência)", correto: true },
    { texto: "Gaze para secar o rebordo antes da aplicação", correto: true },
    { texto: "Espelho clínico e pinça", correto: true },
    { texto: "Papel de articulação (verificar oclusão após o reembasamento)", correto: true },
    { texto: "Broca ou pedra para polimento da borda da base (acabamento)", correto: true },
    { texto: "Alginato e moldeira (moldagem de estudo — outra sessão)", correto: false },
    { texto: "Silicone de adição (para prótese fixa)", correto: false },
    { texto: "Fórceps de extração", correto: false },
    { texto: "Limas endodônticas", correto: false },
    { texto: "Bisturi e porta-agulha (cirurgia)", correto: false }
  ],
  competencias: [6, 7, 7, 8, 7, 7, 6, 8]
},

{
  id: "MAT-30",
  titulo: "Prótese Total — moldagem definitiva com moldeira individual",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 3, tempo: 2, area: "Prótese",
  contexto: `O paciente Geraldo, 74 anos, está em tratamento para Prótese Total superior e inferior. Já foi realizada a moldagem preliminar e confeccionadas as moldeiras individuais em acrílico pelo protético. A sessão de hoje é a MOLDAGEM DEFINITIVA (funcional) com pasta zinco-enólica ou silicone de baixa viscosidade em moldeira individual, que registra com precisão o contorno do rebordo e das zonas de selamento periférico. Após esta sessão, o protético fará os planos de cera para o registro de relação cêntrica. Selecione os materiais.`,
  opcoes: [
    { texto: "Moldeiras individuais confeccionadas em acrílico (superior e inferior)", correto: true },
    { texto: "Pasta zinco-eugenólica (óxido de zinco + eugenol — moldagem funcional precisa)", correto: true },
    { texto: "Espátula de espatulação e placa de vidro (para manipular a pasta zinco)", correto: true },
    { texto: "Cera de bordejamento (Kerr wax) para moldagem das bordas periféricas", correto: true },
    { texto: "Lamparina ou pegador de cera (para amolecer a cera de bordejamento)", correto: true },
    { texto: "Gesso tipo IV (extraduro — para vazar o modelo definitivo)", correto: true },
    { texto: "Vibrador de gesso e mufla", correto: true },
    { texto: "Isolante para gesso (para separação posterior do modelo)", correto: true },
    { texto: "Espelho clínico, pinça e explorador (exame do rebordo)", correto: true },
    { texto: "Alginato (usado somente na moldagem preliminar — não na definitiva)", correto: false },
    { texto: "Moldeira de estoque (usada na preliminar — não na definitiva)", correto: false },
    { texto: "Silicone de adição massa pesada (para prótese fixa — não PT)", correto: false },
    { texto: "Fórceps de extração", correto: false },
    { texto: "Limas endodônticas", correto: false }
  ],
  competencias: [7, 8, 8, 8, 7, 7, 7, 8]
},

// ─────────────────────────────────────────────
// ENDODONTIA (MAT-31 a MAT-36)
// ─────────────────────────────────────────────
{
  id: "MAT-31",
  titulo: "Tratamento endodôntico de dente unirradicular — polpa vital inflamada",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 3, tempo: 3, area: "Endodontia",
  contexto: `O paciente Fábio, 29 anos, chega com dor intensa ao frio e ao calor no dente 11 (incisivo central superior direito), dor que persiste por mais de 30 segundos após o estímulo. Diagnóstico: PULPITE IRREVERSÍVEL SINTOMÁTICA com polpa vital. Indicado tratamento endodôntico completo em sessão única. O procedimento inclui: acesso, odontometria (localizador apical), preparo biomecânico com limas K, irrigação com hipoclorito, secagem com cones de papel, obturação com guta-percha e cimento, selamento com CIV provisório. Selecione TODOS os materiais necessários.`,
  opcoes: [
    { texto: "Anestésico tópico e tubete de anestésico com vasoconstritor", correto: true },
    { texto: "Seringa carpule e agulha longa (para bloqueio palatino e vestibular)", correto: true },
    { texto: "Dique de borracha, clamp anterior e arco (isolamento absoluto — obrigatório)", correto: true },
    { texto: "Broca esférica de alta rotação (acesso à câmara pulpar)", correto: true },
    { texto: "Broca de Endo-Z ou troncocônica (refinamento do acesso)", correto: true },
    { texto: "Explorador endodôntico (espora de Lima — para localizar entradas dos canais)", correto: true },
    { texto: "Limas K manuais (nº 10, 15, 20, 25, 30 — exploração e patência)", correto: true },
    { texto: "Localizador apical eletrônico (odontometria eletrônica)", correto: true },
    { texto: "Régua endodôntica milimetrada (para medir as limas)", correto: true },
    { texto: "Hipoclorito de sódio 2,5% (irrigante principal — dissolução de tecido pulpar)", correto: true },
    { texto: "EDTA 17% gel ou líquido (quelante — limpeza de smear layer no terço final)", correto: true },
    { texto: "Seringa endodôntica de 5ml e agulha de irrigação calibre 30G (irrigação)", correto: true },
    { texto: "Cones de papel absorvente (secagem do canal após irrigação)", correto: true },
    { texto: "Cimentos endodônticos (AH Plus, Sealapex ou Endofill)", correto: true },
    { texto: "Cones de guta-percha (cone principal calibrado + cones acessórios)", correto: true },
    { texto: "Condensadores laterais e endodôntico de calor (espalhador e plugger)", correto: true },
    { texto: "Ionômero de vidro de baixa viscosidade (selamento coronário provisório)", correto: true },
    { texto: "Fórceps de extração (cirurgia — não indicado neste caso)", correto: false },
    { texto: "Ácido fosfórico 37% para resina composta (restauração definitiva — próxima sessão)", correto: false },
    { texto: "Curetas de Gracey (raspagem periodontal)", correto: false }
  ],
  competencias: [8, 9, 9, 9, 8, 7, 7, 9]
},

{
  id: "MAT-32",
  titulo: "Tratamento de canal multirradicular — periodontite apical (molar inferior)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 3, tempo: 3, area: "Endodontia",
  contexto: `A paciente Helena, 42 anos, queixa-se de dor à mastigação e sensação de dente "crescido" no dente 36 (primeiro molar inferior esquerdo). A radiografia periapical mostra lesão periapical (rarefação óssea) nas raízes mesial e distal. Diagnóstico: PERIODONTITE APICAL SINTOMÁTICA. Indicado tratamento de canal em 2 sessões: primeira — acesso, odontometria, preparo e curativo (Ca(OH)2); segunda — obturação e selamento. O dente tem 3 canais (mesiovestibular, mesiolingual e distal). Selecione os materiais para a PRIMEIRA SESSÃO do tratamento de molar inferior.`,
  opcoes: [
    { texto: "Anestésico tópico e tubetes de anestésico (bloqueio alveolar inferior + infiltração)", correto: true },
    { texto: "Seringa carpule e agulhas (longa para bloqueio)", correto: true },
    { texto: "Dique de borracha, clamp molar e arco", correto: true },
    { texto: "Broca esférica e troncocônica de alta rotação (acesso oclusal ao molar)", correto: true },
    { texto: "Explorador endodôntico (localizar 3 entradas de canal)", correto: true },
    { texto: "Brocas de Gates-Glidden 1, 2 e 3 (ampliação cervical dos canais)", correto: true },
    { texto: "Limas K manuais iniciais (nº 10 e 15 — exploração da patência de cada canal)", correto: true },
    { texto: "Limas rotatórias (sistema ProTaper Next ou Reciproc — preparo mecanizado)", correto: true },
    { texto: "Motor de endodontia com torque controlado (para limas rotatórias)", correto: true },
    { texto: "Localizador apical eletrônico (odontometria nos 3 canais)", correto: true },
    { texto: "Hipoclorito de sódio 2,5% e EDTA 17%", correto: true },
    { texto: "Seringa endodôntica e agulha de irrigação 30G", correto: true },
    { texto: "Cones de papel absorvente (secagem após irrigação final)", correto: true },
    { texto: "Pasta de hidróxido de cálcio (Calen ou similar — curativo intracanal)", correto: true },
    { texto: "Algodão e cimento provisório (Coltosol ou CIV) para selamento coronário", correto: true },
    { texto: "Cones de guta-percha e cimento endodôntico (2ª sessão — obturação)", correto: false },
    { texto: "Fórceps de extração", correto: false },
    { texto: "Curetas de Gracey", correto: false }
  ],
  competencias: [8, 9, 9, 9, 8, 7, 7, 9]
},

{
  id: "MAT-33",
  titulo: "Retratamento endodôntico — falha de tratamento anterior",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 3, tempo: 3, area: "Endodontia",
  contexto: `O paciente Alexandre, 48 anos, realizou tratamento de canal no dente 25 (segundo pré-molar superior esquerdo) há 5 anos. A radiografia atual mostra lesão periapical crescente (insucesso endodôntico) — a obturação anterior está aquém do ápice e há condutância de contraste em região periapical. Diagnóstico: INSUCESSO ENDODÔNTICO. Indicado RETRATAMENTO: remoção da obturação antiga (guta-percha + cimento), reinstrumentação e nova obturação. A principal dificuldade é a desobstrução da guta-percha, que exige solventes e instrumentos específicos. Selecione os materiais para o retratamento.`,
  opcoes: [
    { texto: "Anestésico tópico e tubete de anestésico", correto: true },
    { texto: "Seringa carpule e agulha", correto: true },
    { texto: "Dique de borracha, clamp e arco", correto: true },
    { texto: "Broca esférica para remoção da restauração coronária (acesso)", correto: true },
    { texto: "Solvente de guta-percha (xilol, clorofórmio ou eucaliptol — dissolução da GP)", correto: true },
    { texto: "Brocas de Peeso ou Gates-Glidden (remoção de GP no terço cervical)", correto: true },
    { texto: "Limas de desobstrução (Reciproc Retreatment, D-Race ou Mtwo R — retirada da GP)", correto: true },
    { texto: "Limas K manuais (exploração e repassagem da odontometria original)", correto: true },
    { texto: "Localizador apical eletrônico (nova odontometria)", correto: true },
    { texto: "Hipoclorito de sódio 2,5% e EDTA 17% (nova irrigação)", correto: true },
    { texto: "Seringa endodôntica e agulha de irrigação", correto: true },
    { texto: "Cones de papel absorvente", correto: true },
    { texto: "Pasta de hidróxido de cálcio (curativo intracanal entre sessões, se necessário)", correto: true },
    { texto: "Nova guta-percha e novo cimento endodôntico (para nova obturação)", correto: true },
    { texto: "Alginato para moldagem de coroa (próxima etapa — restauração)", correto: false },
    { texto: "Fórceps de extração (somente em caso de insucesso total)", correto: false },
    { texto: "Curetas de Gracey", correto: false }
  ],
  competencias: [8, 9, 9, 9, 8, 7, 7, 9]
},

{
  id: "MAT-34",
  titulo: "Pulpotomia em dente decíduo (polpa vital exposta — criança)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 2, tempo: 2, area: "Endodontia",
  contexto: `A paciente Valentina, 6 anos, apresenta cárie profunda com exposição pulpar no dente 75 (segundo molar decíduo inferior esquerdo). O teste de sangramento mostrou sangramento vermelho vivo ao contato (polpa vital). Indicada PULPOTOMIA: remoção da polpa coronária (câmara), mantendo a polpa radicular vital. O medicamento de escolha é o FORMOCRESOL (protocolo clássico em decíduo) ou MTA (mais atual). Após a pulpotomia, o assoalho é selado com cimento de ionômero de vidro e a restauração é com coroa de aço. Selecione os materiais para este procedimento pediátrico.`,
  opcoes: [
    { texto: "Anestésico tópico com sabor e tubete pediátrico (artucaína 4% 1:200.000)", correto: true },
    { texto: "Seringa carpule pediátrica e agulha curta 27G", correto: true },
    { texto: "Dique de borracha com clamp pediátrico (molar decíduo)", correto: true },
    { texto: "Broca esférica de baixa rotação (acesso e remoção de dentina cariada)", correto: true },
    { texto: "Cureta de dentina pediátrica (remoção da polpa coronária)", correto: true },
    { texto: "Bola de algodão úmida em soro fisiológico (hemostasia da polpa radicular)", correto: true },
    { texto: "Formocresol (diluído 1:5 — devitalização da polpa radicular por 5 min) OU MTA", correto: true },
    { texto: "Cimento de óxido de zinco e eugenol reforçado (sobre o formocresol — selamento inicial)", correto: true },
    { texto: "Cimento de ionômero de vidro (base do assoalho da câmara)", correto: true },
    { texto: "Coroa de aço inoxidável pediátrica (restauração final do molar decíduo)", correto: true },
    { texto: "Cimento de fosfato de zinco (cimentação da coroa de aço)", correto: true },
    { texto: "Guta-percha e cimento endodôntico (obturação de canal em permanentes)", correto: false },
    { texto: "Localizador apical eletrônico (pouco preciso em dentes com rizólise)", correto: false },
    { texto: "Limas rotatórias (não indicadas na técnica de pulpotomia)", correto: false },
    { texto: "Resina composta (coroa de aço é a restauração de escolha no decíduo)", correto: false }
  ],
  competencias: [8, 9, 9, 8, 7, 8, 7, 9]
},

{
  id: "MAT-35",
  titulo: "Obturação do canal radicular (guta-percha + cimento endodôntico)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 2, tempo: 2, area: "Endodontia",
  contexto: `O paciente Daniel, 33 anos, retorna para a segunda sessão do tratamento de canal do dente 22 (incisivo lateral superior esquerdo). O canal já foi preparado e medicado com hidróxido de cálcio por 15 dias. A dor cessou. Hoje será realizada a OBTURAÇÃO do canal com guta-percha pela técnica de condensação lateral e cimento endodôntico AH Plus. Após confirmação radiográfica da obturação, o dente será selado com ionômero de vidro provisório. Selecione apenas os materiais específicos para a etapa de OBTURAÇÃO.`,
  opcoes: [
    { texto: "Cones de guta-percha (cone principal calibrado ao CAF + cones acessórios finos)", correto: true },
    { texto: "Cimento endodôntico (AH Plus, Sealapex ou Endofill — pasta A e B)", correto: true },
    { texto: "Espalhadores laterais (condensadores laterais de metal — para compactar os cones)", correto: true },
    { texto: "Espatulador de guta-percha (instrumento para amolecer a GP em técnica termoplástica)", correto: true },
    { texto: "Cones de papel absorvente (secagem final do canal antes da obturação)", correto: true },
    { texto: "Hipoclorito de sódio e EDTA (última irrigação antes de obturar)", correto: true },
    { texto: "Broca de calor ou plugger aquecido (para remoção do excesso de GP cervical)", correto: true },
    { texto: "Ionômero de vidro de baixa viscosidade (selamento coronário provisório)", correto: true },
    { texto: "Radiografia de verificação (confirmar extensão e qualidade da obturação)", correto: true },
    { texto: "Dique de borracha, clamp e arco (isolamento durante a obturação)", correto: true },
    { texto: "Limas K manuais novas (para instrumentação — já foi feita na 1ª sessão)", correto: false },
    { texto: "Motor endodôntico e limas rotatórias (preparo já concluído)", correto: false },
    { texto: "Pasta de hidróxido de cálcio (curativo já removido nesta sessão)", correto: false },
    { texto: "Fórceps de extração", correto: false }
  ],
  competencias: [7, 9, 9, 8, 8, 7, 7, 8]
},

{
  id: "MAT-36",
  titulo: "Endodontia de urgência — abertura coronária (pulpite irreversível com dor intensa)",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 2, tempo: 2, area: "Endodontia",
  contexto: `A paciente Roberta, 27 anos, chega em URGÊNCIA com dor espontânea intensa e pulsátil no dente 46 (primeiro molar inferior direito) há 2 dias, pior à noite, sem alívio com analgésicos. Diagnóstico: PULPITE IRREVERSÍVEL SINTOMÁTICA. O procedimento de urgência é a ABERTURA CORONÁRIA (biopulpectomia parcial): acesso à câmara pulpar, remoção da polpa coronária, irrigação e curativo medicamentoso intracanal. NÃO será feita a obturação hoje — apenas o alívio imediato da dor. Selecione os materiais para a abertura de urgência.`,
  opcoes: [
    { texto: "Anestésico tópico e tubetes de anestésico (bloqueio nervo alveolar inferior)", correto: true },
    { texto: "Seringa carpule e agulha longa (bloqueio alveolar inferior)", correto: true },
    { texto: "Dique de borracha, clamp molar e arco (isolamento obrigatório mesmo na urgência)", correto: true },
    { texto: "Broca esférica de alta rotação nº 1014 (acesso oclusal ao molar)", correto: true },
    { texto: "Broca troncocônica (ampliação e remoção de teto da câmara pulpar)", correto: true },
    { texto: "Explorador endodôntico (localizar entradas dos canais)", correto: true },
    { texto: "Limas K manuais nº 10 e 15 (patência mínima dos canais)", correto: true },
    { texto: "Hipoclorito de sódio 2,5% (irrigação e limpeza mínima da câmara)", correto: true },
    { texto: "Seringa endodôntica e agulha de irrigação 30G", correto: true },
    { texto: "Cones de papel absorvente (secagem básica)", correto: true },
    { texto: "Curativo intracanal (PMCC — paramonoclorofenol canforado — ou cresofeno)", correto: true },
    { texto: "Algodão estéril e cimento provisório (Coltosol, IRM ou CIV) para selamento", correto: true },
    { texto: "Cones de guta-percha e cimento endodôntico (obturação — próxima sessão)", correto: false },
    { texto: "Limas rotatórias (preparo completo — não na urgência)", correto: false },
    { texto: "Fórceps de extração (somente se indicada exodontia)", correto: false },
    { texto: "Ácido fosfórico e resina (restauração definitiva — próxima etapa)", correto: false }
  ],
  competencias: [7, 8, 8, 8, 7, 7, 7, 8]
},

// ─────────────────────────────────────────────
// RADIOLOGIA (MAT-37 a MAT-40)
// ─────────────────────────────────────────────
{
  id: "MAT-37",
  titulo: "Radiografia periapical pela técnica do paralelismo",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 1, tempo: 1, area: "Radiologia",
  contexto: `O dentista solicitou radiografia periapical do dente 36 (primeiro molar inferior esquerdo) para avaliação pós-obturação de canal. A técnica indicada é o PARALELISMO (técnica do cone longo): o filme/sensor é posicionado paralelamente ao longo eixo do dente, com posicionador específico, e o feixe de raios X é perpendicular ao conjunto. É a técnica mais precisa para avaliação endodôntica e periapical. Selecione todos os materiais e equipamentos necessários para a radiografia periapical.`,
  opcoes: [
    { texto: "Filme radiográfico periapical (tamanho 2) OU sensor digital periapical (receptor CCD ou PSP)", correto: true },
    { texto: "Posicionador de filme/sensor para técnica do paralelismo (Rinn XCP ou Dentsply Rinn)", correto: true },
    { texto: "Aparelho de raios X intraoral (máquina de RX odontológico — 70 kVp)", correto: true },
    { texto: "Avental de chumbo plumbífero (proteção do paciente — tronco e abdômen)", correto: true },
    { texto: "Colar cervical de chumbo (proteção da tireoide do paciente)", correto: true },
    { texto: "Processadora automática (se filme convencional) OU software de análise radiográfica (se digital)", correto: true },
    { texto: "Soluções de revelação e fixação (se convencional — revelador, fixador e água)", correto: true },
    { texto: "Envelope identificado (nome do paciente, data, dente) para o filme/sensor", correto: true },
    { texto: "Luvas para manuseio do filme revelado (proteção da equipe)", correto: true },
    { texto: "Aparelho de tomografia cone beam (exame diferente — mais complexo)", correto: false },
    { texto: "Filme radiográfico panorâmico (exame diferente — extraoral)", correto: false },
    { texto: "Chassi de tela intensificadora (radiografia extraoral convencional)", correto: false },
    { texto: "Alginato e moldeira (moldagem — procedimento clínico diferente)", correto: false }
  ],
  competencias: [6, 7, 7, 8, 8, 7, 6, 8]
},

{
  id: "MAT-38",
  titulo: "Radiografia interproximal (bitewing) — diagnóstico de cáries interproximais",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 1, tempo: 1, area: "Radiologia",
  contexto: `O dentista solicitou radiografias interproximais (bitewing) bilaterais — superiores e inferiores — para diagnóstico de cáries interproximais nos dentes posteriores de um paciente adulto de 35 anos com alto risco de cárie. O bitewing mostra simultaneamente as coroas dos dentes superiores e inferiores de um mesmo lado, sendo o melhor exame para detectar cárie em esmalte e dentina antes que se torne clínica. São necessárias 2 exposições (lado direito e lado esquerdo). Selecione os materiais para as 2 radiografias bitewing.`,
  opcoes: [
    { texto: "Filmes bitewing (tamanho 2 ou 3) — 2 filmes para direita e esquerda — OU sensor digital", correto: true },
    { texto: "Posicionador bitewing com aba de mordida (suporte de filme com aba interproximal)", correto: true },
    { texto: "Aparelho de raios X intraoral", correto: true },
    { texto: "Avental de chumbo e colar cervical de proteção", correto: true },
    { texto: "Processadora (se convencional) OU software digital (se sensor digital)", correto: true },
    { texto: "Envolvimento e identificação dos filmes/exames (nome, data, lado D e E)", correto: true },
    { texto: "Luvas para manuseio", correto: true },
    { texto: "Posicionador periapical de cone longo (técnica do paralelismo — para periapical, não bitewing)", correto: false },
    { texto: "Chassi panorâmico (exame extraoral diferente)", correto: false },
    { texto: "Aparelho de tomografia cone beam (exame diferente)", correto: false },
    { texto: "Alginato (moldagem — procedimento clínico diferente)", correto: false },
    { texto: "Dique de borracha e clamp (endodontia ou dentística)", correto: false }
  ],
  competencias: [6, 7, 7, 8, 8, 7, 6, 8]
},

{
  id: "MAT-39",
  titulo: "Radiografia panorâmica — avaliação geral e planejamento",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 1, tempo: 1, area: "Radiologia",
  contexto: `A dentista solicitou radiografia panorâmica (ortopantomografia) de um paciente de 13 anos para avaliação do desenvolvimento dos dentes permanentes, presença de terceiros molares, anomalias e planejamento ortodôntico. A radiografia panorâmica é um exame EXTRAORAL que mostra toda a arcada superior e inferior, articulações temporomandibulares, seios maxilares e corpo da mandíbula em uma única imagem. Diferente dos exames intraorais, o paciente não coloca nada na boca (apenas a guia de mordida plástica). Selecione os materiais e equipamentos para este exame.`,
  opcoes: [
    { texto: "Aparelho de raios X panorâmico (ortopantomógrafo — equipamento extraoral)", correto: true },
    { texto: "Chassi panorâmico com écran (tela intensificadora) — se convencional — OU sensor panorâmico digital", correto: true },
    { texto: "Avental de chumbo (proteção do tronco do paciente)", correto: true },
    { texto: "Colar cervical de chumbo (proteção da tireoide — obrigatório!)", correto: true },
    { texto: "Guia de mordida descartável (plástica — para posicionar a mordida do paciente)", correto: true },
    { texto: "Posicionadores de cabeça (apoio para a testa e o queixo no equipamento)", correto: true },
    { texto: "Processadora de filme panorâmico OU software de análise de imagem digital", correto: true },
    { texto: "Posicionador bitewing (para exame periapical e interproximal — intraoral)", correto: false },
    { texto: "Filme periapical tamanho 2 (filme intraoral)", correto: false },
    { texto: "Aparelho de tomografia cone beam (exame diferente — 3D)", correto: false },
    { texto: "Alginato e moldeira (moldagem clínica)", correto: false },
    { texto: "Dique de borracha (endodontia/dentística)", correto: false }
  ],
  competencias: [6, 7, 7, 8, 8, 7, 6, 8]
},

{
  id: "MAT-40",
  titulo: "Tomografia computadorizada cone beam (CBCT) — planejamento de implante",
  modalidade: "materiais",
  tipo: "Caso Clínico - Materiais",
  complexidade: 3, tempo: 2, area: "Radiologia",
  contexto: `O paciente Marcos, 48 anos, está em planejamento para implante dentário na região do dente 36 ausente (primeiro molar inferior esquerdo). O implantodontista solicitou TOMOGRAFIA COMPUTADORIZADA CONE BEAM (CBCT) com stent radiográfico para avaliação da altura e largura óssea, localização do nervo alveolar inferior, densidade óssea e posicionamento preciso do implante com auxílio de software de planejamento 3D. O CBCT gera imagens em 3 planos (axial, sagital, coronal) com menor dose de radiação que o tomógrafo hospitalar convencional. Selecione os materiais e recursos para este exame.`,
  opcoes: [
    { texto: "Aparelho de tomografia cone beam (CBCT odontológico — ex: i-CAT, CS 9000, Newtom)", correto: true },
    { texto: "Avental de chumbo e colar cervical de proteção", correto: true },
    { texto: "Stent radiográfico (guia com marcadores de referência — confeccionado pelo laboratório)", correto: true },
    { texto: "Software de planejamento de implante em 3D (ex: Nobel Clinician, Simplant, coDiagnostiX)", correto: true },
    { texto: "Workstation/computador com tela de alta resolução (análise das imagens DICOM)", correto: true },
    { texto: "Posicionador de cabeça e apoio para queixo do aparelho de CBCT", correto: true },
    { texto: "Impressora 3D ou fresadora (para confecção de guia cirúrgica a partir do planejamento)", correto: true },
    { texto: "Aparelho panorâmico convencional (exame diferente — 2D apenas)", correto: false },
    { texto: "Filme periapical e posicionador de cone longo (exame diferente)", correto: false },
    { texto: "Alginato e moldeira (moldagem clínica — outro procedimento)", correto: false },
    { texto: "Tomógrafo hospitalar (TC médica — dose de radiação muito maior, não indicada para rotina dental)", correto: false },
    { texto: "Fórceps de extração", correto: false }
  ],
  competencias: [7, 8, 8, 9, 8, 7, 7, 9]
}

,

// ════════════════════════════════════════════
// BLOCO 3: CASOS CLÍNICOS (CC-01 a CC-40)
// ════════════════════════════════════════════
{
  id:"CC-01", titulo:"Preparo da bandeja para extração simples",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Instrumentação e Biomateriais",
  contexto:`O dentista informa que o próximo atendimento será uma extração simples do dente 36 em paciente adulto sem complicações. O auxiliar precisa preparar a bandeja antes de o paciente entrar. Os materiais disponíveis no armário são: espelho, sonda, pinça, seringa Carpule, agulha curta, agulha longa, fórceps 151, fórceps 17, alavanca Seldin reta, alavanca Seldin curva, porta-agulha, tesoura, cureta, gaze, algodão, carpule de mepivacaína 2%, carpule de articaína 4%.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Seleção de materiais",
      pergunta:"Quais itens devem compor a bandeja básica para essa extração simples?",
      opcoes:[
        {letra:"A",texto:"Espelho, sonda, pinça, seringa Carpule com agulha curta, fórceps 151, alavanca Seldin reta, gaze e carpule de mepivacaína 2%"},
        {letra:"B",texto:"Apenas fórceps 151 e gaze — os demais o dentista pega sozinho"},
        {letra:"C",texto:"Espelho, sonda, porta-agulha, tesoura, fórceps 17, agulha longa e carpule de articaína 4%"},
        {letra:"D",texto:"Todo o instrumental disponível, pois é melhor ter excesso do que falta"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A bandeja básica de extração simples inclui exame (espelho/sonda/pinça), anestesia (seringa Carpule + agulha curta + anestésico), fórceps adequado ao dente (151 para inferiores posteriores), sindesmótomo ou alavanca reta para luxação inicial e gaze para hemostasia.",
        B:"Incompleto. O auxiliar deve antecipar toda a necessidade do procedimento para não interromper o atendimento a cada momento.",
        C:"Fórceps 17 é para molares superiores e a agulha longa é indicada para bloqueios regionais — não para extração simples de 36.",
        D:"Selecionar todo o instrumental sem critério gera confusão na bandeja e risco de contaminação cruzada entre itens não utilizados."
      }
    },
    {
      fase:"Organização e biossegurança",
      pergunta:"Após montar a bandeja, qual a conduta correta do auxiliar em relação aos EPIs?",
      opcoes:[
        {letra:"A",texto:"Usar luvas, máscara, gorro e óculos de proteção — o auxiliar deve estar com EPI completo antes de o paciente entrar"},
        {letra:"B",texto:"Só colocar as luvas na hora em que o dentista solicitar auxílio direto"},
        {letra:"C",texto:"EPI completo é obrigação apenas do dentista; o auxiliar que não toca no paciente não precisa"},
        {letra:"D",texto:"Máscara e luvas são suficientes; gorro e óculos são opcionais em extração simples"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. O auxiliar deve estar com EPI completo (luvas, máscara, gorro, óculos) antes da entrada do paciente. Aerossóis, sangue e saliva contaminam o ambiente durante todo o procedimento.",
        B:"Aguardar o momento de auxílio direto para colocar luvas atrasa o atendimento e expõe o profissional desnecessariamente.",
        C:"A NR-32 e as normas do CFO determinam que todos os profissionais da equipe odontológica devem usar EPI completo durante atendimentos.",
        D:"Gorro e óculos são obrigatórios — o gorro evita contaminação por aerossóis no cabelo e os óculos protegem de respingos de sangue e saliva."
      }
    }
  ],
  competencias:[7,8,8,8,10,7,7,8]
},

{
  id:"CC-02", titulo:"Triagem de urgência por telefone — dor intensa",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Comunicação e Humanização",
  contexto:`São 14h de uma segunda-feira. O telefone toca e uma mulher liga dizendo: "Estou com uma dor de dente insuportável desde ontem à noite, não consigo dormir nem comer. O lado do rosto está inchado." A agenda do dia já está cheia. O próximo horário disponível para encaixe seria às 17h30.`,
  personagem:{nome:"Recepcionista/Auxiliar",avatar:"auxiliar"},
  passos:[
    {
      fase:"Triagem de urgência",
      pergunta:"Como o auxiliar deve classificar e responder a essa ligação?",
      opcoes:[
        {letra:"A",texto:"Informar que a agenda está cheia e pedir que a paciente ligue amanhã cedo para agendar"},
        {letra:"B",texto:"Perguntar se há inchaço facial, febre ou dificuldade para engolir — se sim, priorizar como urgência e comunicar ao dentista imediatamente"},
        {letra:"C",texto:"Orientar a tomar um analgésico e marcar para daqui a 3 dias, pois dor de dente é rotina"},
        {letra:"D",texto:"Pedir que a paciente vá direto à UPA, pois o consultório não atende urgências sem agendamento prévio"}
      ],
      correta:"B",
      feedback:{
        A:"Incorreto. Dor intensa com inchaço facial pode indicar infecção grave que não pode aguardar até o dia seguinte sem avaliação.",
        B:"Correto. Inchaço facial, febre e dificuldade de deglutição são sinais de alerta para infecção odontogênica com potencial de disseminação. O auxiliar deve colher essas informações e comunicar o dentista para decidir a conduta.",
        C:"Automedicar sem avaliação pode mascarar sintomas de infecção grave. Não é papel do auxiliar prescrever ou recomendar medicamentos.",
        D:"Encaminhar à UPA sem triagem adequada é inadequado. O consultório tem obrigação ética de atender urgências — pelo menos avaliar e, se necessário, referenciar com orientação."
      }
    },
    {
      fase:"Comunicação com o dentista",
      pergunta:"O dentista está atendendo. Como o auxiliar deve proceder para comunicar a situação?",
      opcoes:[
        {letra:"A",texto:"Interromper o atendimento atual batendo na porta e entrando na sala"},
        {letra:"B",texto:"Aguardar o dentista sair da sala no intervalo, anotar os dados da paciente e relatar resumidamente a situação para que o dentista decida"},
        {letra:"C",texto:"Decidir sozinho que é urgência e marcar para 17h30 sem consultar o dentista"},
        {letra:"D",texto:"Deixar recado na secretária eletrônica e continuar atendendo o telefone"}
      ],
      correta:"B",
      feedback:{
        A:"Interromper bruscamente o atendimento pode comprometer a segurança do paciente na cadeira e é desrespeitoso.",
        B:"Correto. O auxiliar deve anotar os dados (nome, sintomas, contato) e comunicar ao dentista no primeiro intervalo disponível, apresentando as informações de forma resumida para que ele tome a decisão clínica.",
        C:"A decisão de encaixe em urgência e avaliação clínica é responsabilidade do dentista, não do auxiliar.",
        D:"Deixar recado sem comunicar pessoalmente atrasa a tomada de decisão e pode prejudicar a paciente."
      }
    }
  ],
  competencias:[9,8,8,7,7,8,7,8]
},

{
  id:"CC-03", titulo:"Orientação de higiene bucal para gestante",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Comunicação e Humanização",
  contexto:`Mariana Silva, 26 anos, 2º trimestre de gestação, comparece à consulta de rotina. O dentista realizou a avaliação clínica e constatou gengivite gravídica leve. O dentista pede ao auxiliar que oriente a paciente sobre higiene bucal antes de ela sair. Mariana diz estar com medo de escovar os dentes porque sangra muito.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Orientação de higiene",
      pergunta:"O que o auxiliar deve orientar corretamente sobre a gengivite durante a gestação?",
      opcoes:[
        {letra:"A",texto:"Parar de escovar os dentes até o bebê nascer para não agravar o sangramento"},
        {letra:"B",texto:"Escovar os dentes 3x ao dia com escova macia, usar fio dental diariamente e informar que o sangramento tende a diminuir com a higiene adequada — não parar de escovar por causa do sangramento"},
        {letra:"C",texto:"Usar enxaguante bucal com álcool duas vezes ao dia em vez de escovar, pois é mais suave"},
        {letra:"D",texto:"Dizer que o sangramento é perigoso para o bebê e que ela deve ir ao médico imediatamente"}
      ],
      correta:"B",
      feedback:{
        A:"Parar de escovar piora a gengivite. A placa bacteriana é a causa principal — sem remoção, o sangramento aumenta.",
        B:"Correto. A gengivite gravídica tem componente hormonal, mas a higiene adequada controla a inflamação. Escovar com escova macia e usar fio dental são as orientações corretas. O sangramento ao escovar é sinal de inflamação, não indicação de parar.",
        C:"Enxaguantes com álcool não são recomendados na gestação e não substituem a escovação mecânica.",
        D:"Extrapola o papel do auxiliar e causa alarme desnecessário. O dentista já avaliou a situação — o auxiliar deve reforçar as orientações de higiene."
      }
    },
    {
      fase:"Registro e encaminhamento",
      pergunta:"Ao final da orientação, Mariana pergunta se pode tomar ibuprofeno para a dor de cabeça. Como o auxiliar deve responder?",
      opcoes:[
        {letra:"A",texto:"\"Pode tomar, é fraco e não faz mal ao bebê\""},
        {letra:"B",texto:"\"Ibuprofeno e AINEs são contraindicados na gestação — consulte seu obstetra antes de tomar qualquer medicamento. Posso registrar essa dúvida no prontuário para o dentista comentar?\""},
        {letra:"C",texto:"\"Tome paracetamol, é seguro na gestação\" — orientar a dose correta"},
        {letra:"D",texto:"Ignorar a pergunta pois é sobre dor de cabeça, não dor de dente"}
      ],
      correta:"B",
      feedback:{
        A:"Incorreto. Ibuprofeno é contraindicado na gestação (risco fetal comprovado). Nunca indicar medicamentos sem prescrição.",
        B:"Correto. O auxiliar deve informar que AINEs são contraindicados na gestação, orientar a consultar o obstetra e registrar a dúvida. Não cabe ao auxiliar recomendar nenhum medicamento específico.",
        C:"Mesmo o paracetamol deve ser indicado pelo médico ou dentista com prescrição — o auxiliar não tem atribuição para indicar dose de medicamento.",
        D:"A paciente fez uma pergunta de saúde legítima que o auxiliar deve responder de forma segura, orientando a buscar o profissional adequado."
      }
    }
  ],
  competencias:[9,7,8,7,7,7,7,9]
},

{
  id:"CC-04", titulo:"Criança com medo extremo na primeira consulta",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Odontopediatria",
  contexto:`Paciente masculino, 5 anos, primeira consulta odontológica. Quando a mãe tenta sentar a criança na cadeira, ele chora intensamente, se debate e recusa qualquer aproximação. A mãe relata que ele já assistiu ao irmão mais velho sendo tratado e "ficou apavorado". Não há queixa de dor. O exame pretendido é apenas de rotina.`,
  personagem:{nome:"Criança — primeira consulta",avatar:"paciente"},
  passos:[
    {
      fase:"Manejo comportamental",
      pergunta:"Qual é a técnica de manejo comportamental mais indicada para iniciar o atendimento?",
      opcoes:[
        {letra:"A", texto:"Contenção física imediata por dois adultos para realizar o exame rapidamente"},
        {letra:"B", texto:"Dizer-mostrar-fazer (Tell-Show-Do), com voz calma e aproximação gradual"},
        {letra:"C", texto:"Sedação com midazolam oral antes de qualquer contato"},
        {letra:"D", texto:"Pedir à mãe que saia da sala para a criança não ter apoio emocional"}
      ],
      correta:"B",
      feedback:{
        A:"Contenção física deve ser o último recurso e só para procedimentos inadiáveis. Para uma consulta de rotina, é totalmente inadequada e pode traumatizar a criança.",
        B:"Correto. O Tell-Show-Do é a técnica básica e mais recomendada: explicar o que será feito (Tell), mostrar o instrumento ou ação (Show) e então executar (Do). A voz positiva e calma é fundamental.",
        C:"Sedação farmacológica é reservada para casos de impossibilidade de cooperação após esgotamento das técnicas comportamentais.",
        D:"A presença da mãe pode ser um fator de segurança para a criança. Pedir que ela saia deve ser decidido caso a caso, não como regra."
      }
    },
    {
      fase:"Estratégia da consulta",
      pergunta:"Qual é a estratégia mais adequada para esta primeira consulta, considerando o grau de ansiedade?",
      opcoes:[
        {letra:"A", texto:"Realizar o exame completo, profilaxia e aplicação de flúor tudo na mesma sessão"},
        {letra:"B", texto:"Limitar a consulta a um procedimento breve (ex.: explorar com espelho apenas), elogiar e encerrar positivamente"},
        {letra:"C", texto:"Solicitar que a mãe force fisicamente a criança a sentar para habituar o comportamento"},
        {letra:"D", texto:"Receitar diazepam para a próxima consulta sem tentar outras estratégias"}
      ],
      correta:"B",
      feedback:{
        A:"Acumular múltiplos procedimentos em criança com medo extremo tende a piorar a ansiedade nas consultas seguintes.",
        B:"Correto. A primeira consulta em criança ansiosa deve ser curta, com objetivo de dessensibilização progressiva. Um contato breve e positivo constrói confiança para sessões futuras.",
        C:"Forçar fisicamente sem indicação clínica urgente é contraindicado e eticamente inadequado.",
        D:"Farmacoterapia não deve substituir as técnicas comportamentais quando não foram tentadas adequadamente."
      }
    }
  ],
  competencias:[9,7,8,7,7,8,8,9]
},

{
  id:"CC-05", titulo:"Posicionamento do filme para radiografia periapical",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Radiologia Odontológica",
  contexto:`O dentista solicita uma radiografia periapical do dente 11 (incisivo central superior direito) de um paciente adulto. O auxiliar é responsável pelo posicionamento do filme/sensor e pela tomada radiográfica. O consultório usa radiografia convencional com filme periapical tamanho 2.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Posicionamento do filme",
      pergunta:"Como o filme periapical deve ser posicionado para o dente 11?",
      opcoes:[
        {letra:"A",texto:"Filme posicionado horizontalmente, superfície ativa (branca) voltada para o dente, cobrindo do 13 ao 21, com a borda inferior a 3mm além da borda incisal"},
        {letra:"B",texto:"Filme posicionado verticalmente, superfície colorida voltada para o dente, borda superior tocando o palato"},
        {letra:"C",texto:"Filme posicionado horizontalmente com superfície ativa voltada para o tubo de raios X"},
        {letra:"D",texto:"O paciente segura o filme onde achar mais confortável — o posicionamento exato não é crítico"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Para incisivos superiores usa-se o filme em posição vertical, mas a orientação da superfície ativa (branca/lisa) voltada para o dente e cobertura da coroa + ápice radicular são os pontos fundamentais. O filme deve cobrir os dentes de interesse e ultrapassar a borda incisal.",
        B:"A superfície colorida (com o logotipo do fabricante) deve ficar voltada para o tubo — nunca para o dente. A superfície ativa capta a imagem e deve estar voltada para a fonte de radiação.",
        C:"Superfície ativa voltada para o tubo resultaria em imagem com densidade invertida (número de Coombes), inutilizando a radiografia.",
        D:"O posicionamento incorreto exige nova tomada, aumentando a dose de radiação do paciente desnecessariamente."
      }
    },
    {
      fase:"Proteção radiológica",
      pergunta:"Quais medidas de proteção radiológica o auxiliar deve adotar durante a tomada radiográfica?",
      opcoes:[
        {letra:"A",texto:"Colocar avental de chumbo no paciente, afastar-se do tubo pelo menos 2 metros ou sair da sala, e nunca segurar o filme com as mãos durante a exposição"},
        {letra:"B",texto:"O avental de chumbo é opcional — só é necessário em crianças e gestantes"},
        {letra:"C",texto:"Ficar ao lado do tubo segurando o filme para garantir o posicionamento correto"},
        {letra:"D",texto:"Usar apenas avental de chumbo próprio e ficar a 50 cm do tubo"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. O avental plumbífero é obrigatório para todos os pacientes. O operador deve se afastar ≥2m do feixe primário ou sair da sala. Nunca segurar o filme com as mãos — usar um posicionador ou pedir ao paciente que segure.",
        B:"O avental de chumbo é obrigatório para todos os pacientes, independentemente da idade ou condição.",
        C:"Segurar o filme durante a exposição submete as mãos do profissional a dose cumulativa de radiação — prática proibida.",
        D:"50 cm é insuficiente. A distância mínima segura é 2 metros do feixe primário, ou sair da sala."
      }
    }
  ],
  competencias:[7,8,8,9,9,7,7,8]
},

{
  id:"CC-06", titulo:"Reconhecimento de síncope vasovagal durante atendimento",
  tipo:"multipla", modalidade:"multipla", complexidade:3, tempo:4, area:"Urgências e Emergências",
  contexto:`Durante uma restauração de rotina, o auxiliar percebe que o paciente (homem, 45 anos) para de responder, a pele fica pálida e suada, e ele parece prestes a perder a consciência. O dentista está com a broca na mão. O paciente não tem histórico de cardiopatia registrado no prontuário.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Reconhecimento da emergência",
      pergunta:"O que o auxiliar deve fazer IMEDIATAMENTE ao perceber os sinais de síncope vasovagal?",
      opcoes:[
        {letra:"A",texto:"Alertar o dentista verbalmente de imediato, remover o material da boca do paciente com a cureta e posicionar o paciente em Trendelenburg (pernas elevadas)"},
        {letra:"B",texto:"Dar um copo de água ao paciente e pedir que ele respire fundo"},
        {letra:"C",texto:"Chamar o SAMU imediatamente sem comunicar o dentista primeiro"},
        {letra:"D",texto:"Aguardar o dentista perceber sozinho para não interromper o procedimento"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A síncope vasovagal exige: alertar o dentista, remover instrumentos da boca (segurança airway), reclinar a cadeira com pernas elevadas (Trendelenburg) para aumentar o retorno venoso cerebral. O auxiliar tem papel ativo nessa emergência.",
        B:"Oferecer água a paciente com rebaixamento de consciência é perigoso — risco de broncoaspiração.",
        C:"O dentista deve ser o primeiro a ser comunicado — é ele quem conduz o manejo da emergência. O SAMU é acionado se o quadro não reverter.",
        D:"Aguardar é negligência. O auxiliar atento deve agir imediatamente."
      }
    },
    {
      fase:"Conduta após posicionamento",
      pergunta:"Após posicionar o paciente em Trendelenburg, o paciente recupera a consciência em 30 segundos. Qual é a conduta correta a seguir?",
      opcoes:[
        {letra:"A",texto:"Retomar o procedimento imediatamente — o paciente já está bem"},
        {letra:"B",texto:"Monitorar o paciente, oferecer água ou suco de frutas quando ele estiver totalmente consciente e orientado, registrar o episódio no prontuário e o dentista decide se continua ou não"},
        {letra:"C",texto:"Chamar o SAMU mesmo após a recuperação completa — qualquer síncope exige hospitalização"},
        {letra:"D",texto:"Deixar o paciente descansar sozinho na sala enquanto o dentista atende o próximo"}
      ],
      correta:"B",
      feedback:{
        A:"Retomar imediatamente após síncope é inadequado — o paciente precisa de recuperação e o episódio deve ser registrado.",
        B:"Correto. Após recuperação da síncope vasovagal: monitorar, hidratar quando totalmente consciente, registrar no prontuário. O dentista avalia se o procedimento pode ser continuado naquele dia ou deve ser remarcado.",
        C:"Síncope vasovagal simples com recuperação espontânea em segundos não requer hospitalização. O SAMU seria acionado se não houvesse recuperação ou surgissem outros sintomas.",
        D:"Deixar o paciente sozinho após episódio sincopal é contra-indicado — pode recidivar."
      }
    }
  ],
  competencias:[8,9,9,8,9,8,7,8]
},

{
  id:"CC-07", titulo:"Instrumento cai na boca do paciente durante procedimento",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Urgências e Emergências",
  contexto:`Durante uma restauração, uma ponta de resina pequena cai da bandeja e o auxiliar percebe que o paciente a engoliu ou pode ter aspirado. O paciente está reclinado e começa a tossir. O dentista está concentrado e ainda não percebeu.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Resposta imediata",
      pergunta:"Qual deve ser a primeira ação do auxiliar?",
      opcoes:[
        {letra:"A",texto:"Alertar o dentista imediatamente, colocar o paciente em posição ereta e verificar se ele consegue respirar e falar"},
        {letra:"B",texto:"Pedir ao paciente que engula a saliva para ver se o objeto desceu"},
        {letra:"C",texto:"Fazer a manobra de Heimlich imediatamente, sem comunicar o dentista"},
        {letra:"D",texto:"Ignorar a tosse — é normal após procedimentos odontológicos"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Alertar o dentista é sempre o primeiro passo. Sentar o paciente aumenta a chance de o objeto cair para o esôfago em vez de aspirar. Verificar se respira e fala é fundamental para diferenciar engolimento de aspiração.",
        B:"Pedir para engolir pode induzir aspiração se o objeto ainda estiver na faringe.",
        C:"Heimlich só é indicada em obstrução completa das vias aéreas confirmada (paciente não consegue falar, tossir ou respirar). A decisão é do dentista.",
        D:"Tosse após queda de objeto na boca é sinal sério e não deve ser ignorada."
      }
    },
    {
      fase:"Registro e conduta",
      pergunta:"O paciente consegue respirar e falar normalmente. O dentista confirma que provavelmente engoliu o objeto. O que deve acontecer a seguir?",
      opcoes:[
        {letra:"A",texto:"Registrar o incidente no prontuário, orientar o paciente a procurar avaliação médica/radiográfica para confirmação e o paciente recebe documentação do ocorrido"},
        {letra:"B",texto:"Tranquilizar o paciente dizendo que não tem problema, que vai sair naturalmente, e continuar o procedimento"},
        {letra:"C",texto:"Não registrar para evitar problemas legais para a clínica"},
        {letra:"D",texto:"Chamar o SAMU imediatamente mesmo com o paciente estável e sem sintomas"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Qualquer incidente deve ser documentado no prontuário. O paciente deve ser orientado a buscar avaliação médica (radiografia de abdômen) para confirmar o trajeto do objeto e garantir que não há complicação.",
        B:"Minimizar incidentes com paciente é antiético e potencialmente perigoso — nem todo objeto engolido sai naturalmente sem intercorrências.",
        C:"Omitir do prontuário é falsidade ideológica. O registro protege o paciente E a equipe legalmente.",
        D:"Paciente estável sem obstrução não necessita de SAMU — necessita de avaliação médica eletiva."
      }
    }
  ],
  competencias:[8,9,9,8,9,7,7,9]
},

{
  id:"CC-08", titulo:"Reconhecimento de hipoglicemia durante o atendimento",
  tipo:"multipla", modalidade:"multipla", complexidade:3, tempo:4, area:"Urgências e Emergências",
  contexto:`Carlos, 58 anos, diabético tipo 1 em uso de insulina, está sendo atendido para uma profilaxia de rotina. Após 20 minutos de procedimento, o auxiliar percebe que o paciente fica suado, confuso, começa a tremer e diz que está "estranhando". O dentista está com o ultrassom em funcionamento.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Reconhecimento da emergência",
      pergunta:"O auxiliar suspeita de hipoglicemia. Qual sinal clínico NÃO é típico de hipoglicemia?",
      opcoes:[
        {letra:"A",texto:"Tremor, sudorese fria e confusão mental"},
        {letra:"B",texto:"Palidez, fraqueza e sensação de fome intensa"},
        {letra:"C",texto:"Pele vermelha quente, sede excessiva e odor de acetona na respiração"},
        {letra:"D",texto:"Ansiedade, palpitações e dificuldade de concentração"}
      ],
      correta:"C",
      feedback:{
        A:"Tremor, sudorese fria e confusão são clássicos da hipoglicemia — resultam da descarga adrenérgica.",
        B:"Palidez, fraqueza e fome intensa são típicos de hipoglicemia — o organismo sinaliza falta de glicose.",
        C:"Correto — pele quente, sede excessiva e odor de acetona são sinais de HIPERGLICEMIA (cetoacidose diabética), não de hipoglicemia. Identificar a diferença é crucial para a conduta correta.",
        D:"Ansiedade e palpitações são sintomas adrenérgicos clássicos da hipoglicemia."
      }
    },
    {
      fase:"Conduta de emergência",
      pergunta:"Confirmada a suspeita de hipoglicemia e o paciente ainda está consciente e consegue engolir. O dentista pede ao auxiliar para agir. Qual é a conduta correta?",
      opcoes:[
        {letra:"A",texto:"Oferecer 15g de carboidrato simples (um copo de suco de laranja, gel de glicose ou 3 sachês de açúcar dissolvidos em água), sentar o paciente e chamar o SAMU imediatamente"},
        {letra:"B",texto:"Oferecer carboidrato simples, aguardar 15 minutos e reavaliar — se não melhorar, acionar emergência. Não continuar o procedimento"},
        {letra:"C",texto:"Aplicar insulina para estabilizar o quadro"},
        {letra:"D",texto:"Deitar o paciente e aguardar que a hipoglicemia passe sozinha"}
      ],
      correta:"B",
      feedback:{
        A:"O SAMU imediato é indicado apenas se o paciente perder a consciência ou não responder ao açúcar. Com paciente consciente, oferece-se glicose primeiro.",
        B:"Correto. Regra 15-15: 15g de carboidrato rápido → aguardar 15 minutos → reavaliar. O procedimento não deve ser reiniciado. Se não houver melhora ou paciente perder consciência, acionar emergência.",
        C:"Insulina em hipoglicemia é o oposto do que se precisa — agravaria o quadro drasticamente.",
        D:"Hipoglicemia sem tratamento pode evoluir para coma — nunca aguardar sem intervir."
      }
    }
  ],
  competencias:[8,9,9,8,10,8,7,8]
},

{
  id:"CC-09", titulo:"Proporção e manipulação correta do alginato",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Instrumentação e Biomateriais",
  contexto:`O dentista solicita uma moldagem de estudo do arco superior de um paciente adulto para confecção de modelo de estudo. O auxiliar vai preparar o alginato. Na embalagem lê: proporção pó/água = 1 medida de pó para 1 medida de água (20ml). A temperatura ambiente está em 28°C.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Manipulação do material",
      pergunta:"Como o auxiliar deve preparar o alginato para garantir a qualidade da moldagem?",
      opcoes:[
        {letra:"A",texto:"Pesar o pó na embalagem, medir a água em temperatura ambiente (25°C), adicionar o pó à água e espatular por 30-45 segundos até obter consistência cremosa e homogênea"},
        {letra:"B",texto:"Misturar de olho, colocando pó até a mistura parecer consistente — a medida exata não importa"},
        {letra:"C",texto:"Usar água quente para acelerar a presa e ganhar tempo"},
        {letra:"D",texto:"Espatular por 2 minutos para garantir mistura completa"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A proporção exata pó/água é fundamental para precisão dimensional. A temperatura da água afeta o tempo de presa — água fria retarda, água quente acelera. Com 28°C ambiente, usar água em temperatura ambiente (25°C) é adequado. Espatulação vigorosa por 30-45s garante homogeneidade sem incorporar bolhas em excesso.",
        B:"Proporção imprecisa altera tempo de presa, resistência e precisão da moldagem.",
        C:"Água quente a 28°C de temperatura ambiente aceleraria demais a presa — o alginato pode prender antes de ser inserido na moldeira.",
        D:"Espatulação excessiva (>60s) incorpora bolhas e pode iniciar a presa prematura do material."
      }
    },
    {
      fase:"Cuidados após a moldagem",
      pergunta:"Após a moldagem, o dentista remove a moldeira. Qual o cuidado correto com a moldagem de alginato até chegar ao laboratório?",
      opcoes:[
        {letra:"A",texto:"Lavar em água corrente, desinfetar por imersão em hipoclorito 1% por 10 minutos, envolver em gaze úmida e encaminhar ao laboratório em saco plástico o mais rápido possível"},
        {letra:"B",texto:"Deixar a moldagem exposta ao ar para secar antes de encaminhar ao laboratório"},
        {letra:"C",texto:"Colocar a moldagem em água para conservar — pode aguardar até o dia seguinte"},
        {letra:"D",texto:"Não é necessário desinfetar a moldagem — o gesso que o técnico colocar vai esterilizar"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A moldagem de alginato deve ser desinfetada (hipoclorito 0,5-1% por 10 min), mantida úmida (gaze úmida + saco plástico) e vazada pelo técnico o mais rápido possível — o alginato perde dimensão com desidratação ou absorve água com sinérese.",
        B:"O alginato seca e contrai, distorcendo a moldagem irreversivelmente.",
        C:"Imersão prolongada causa sinérese (absorção de água) e expansão dimensional — moldagem imprecisa.",
        D:"Moldagens contaminadas são veículo de transmissão de patógenos ao técnico de laboratório. A desinfecção é obrigatória."
      }
    }
  ],
  competencias:[7,8,8,10,9,7,7,8]
},

{
  id:"CC-10", titulo:"Gestão da sala de espera em momento de superlotação",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Comunicação e Humanização",
  contexto:`São 10h da manhã. A clínica tem 3 pacientes agendados que já estão na sala de espera, mais 2 que chegaram sem agendamento pedindo encaixe. O dentista está atrasado 40 minutos por uma emergência com o paciente anterior. Os pacientes agendados estão visivelmente irritados. Um deles, Sr. Antônio, 67 anos, se levanta e diz em voz alta: "Isso é um absurdo, não vim aqui para perder o dia inteiro!"`,
  personagem:{nome:"Auxiliar/Recepcionista",avatar:"auxiliar"},
  passos:[
    {
      fase:"Gestão do conflito na sala de espera",
      pergunta:"Como o auxiliar deve abordar o Sr. Antônio?",
      opcoes:[
        {letra:"A",texto:"Chamar o Sr. Antônio discretamente ao lado, explicar o motivo do atraso com empatia, apresentar a previsão de espera e perguntar se deseja reagendar sem ônus"},
        {letra:"B",texto:"Pedir que ele abaixe a voz na frente dos outros pacientes — não pode fazer escândalo"},
        {letra:"C",texto:"Ignorar a reclamação e continuar trabalhando para não alimentar o conflito"},
        {letra:"D",texto:"Dizer que se ele não quiser esperar pode ir embora, pois não é obrigado a ficar"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Abordar individualmente preserva a dignidade do paciente e evita constrangimento coletivo. Explicar o motivo com transparência, apresentar prazo estimado e oferecer reagendamento demonstra respeito e profissionalismo.",
        B:"Repreender o paciente publicamente é desrespeitoso e escala o conflito.",
        C:"Ignorar a reclamação aumenta a insatisfação e pode gerar reclamações formais.",
        D:"Resposta descuidada que pode ser interpretada como descaso — prejudica a relação paciente-clínica."
      }
    },
    {
      fase:"Comunicação com todos os pacientes",
      pergunta:"Após atender o Sr. Antônio, como o auxiliar deve comunicar o atraso aos demais pacientes na sala de espera?",
      opcoes:[
        {letra:"A",texto:"Dirigir-se à sala de espera, apresentar-se, explicar brevemente que houve uma emergência clínica, informar a previsão de espera e agradecer a compreensão"},
        {letra:"B",texto:"Não falar nada — quem quiser saber pergunta"},
        {letra:"C",texto:"Dizer que o dentista está atrasado por motivos pessoais, sem dar mais detalhes"},
        {letra:"D",texto:"Colocar um bilhete no mural e voltar ao trabalho"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Comunicação proativa e transparente reduz a ansiedade coletiva. Mencionar emergência clínica (sem detalhes do caso por sigilo) é honesto e compreensível para a maioria dos pacientes.",
        B:"Silêncio em situação de espera prolongada alimenta especulações e insatisfação.",
        C:"Motivos pessoais podem gerar julgamentos negativos. Emergência clínica é a informação correta e profissional.",
        D:"Bilhete impessoal em sala de espera é frio e ineficaz para gestão do conflito."
      }
    }
  ],
  competencias:[9,8,8,7,7,8,9,8]
},

{
  id:"CC-11", titulo:"Descarte correto de resíduos odontológicos",
  tipo:"multipla", modalidade:"multipla", complexidade:3, tempo:4, area:"Biossegurança e Controle de Infecção",
  contexto:`Ao final de uma tarde de atendimentos, o auxiliar precisa realizar o descarte dos resíduos gerados. Os itens a descartar são: 1 agulha usada, 1 carpule de anestésico vazio, gazes com sangue, luvas descartáveis usadas, resíduo de gesso de laboratório, embalagem de sterilização aberta (sem uso do material), e fragmento de dente extraído.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Classificação de resíduos",
      pergunta:"Segundo a RDC ANVISA 222/2018, como devem ser classificados esses resíduos?",
      opcoes:[
        {letra:"A",texto:"Agulha e carpule → Grupo E (perfurocortante); gazes com sangue, luvas e dente extraído → Grupo A (biológico); gesso e embalagem → Grupo D (comum)"},
        {letra:"B",texto:"Tudo vai no lixo comum — os resíduos odontológicos de consultório não são perigosos"},
        {letra:"C",texto:"Tudo vai no lixo hospitalar infectante — é mais seguro generalizar"},
        {letra:"D",texto:"Agulha vai no lixo comum se for embrulhada em papel; carpule no lixo reciclável"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. RDC 222/2018: Grupo E (perfurocortante): agulhas, lâminas, carpules. Grupo A (biológico infectante): gazes com sangue, luvas contaminadas, fragmentos de tecido/dente. Grupo D (comum): embalagens de esterilização limpas, gesso sem contaminação biológica.",
        B:"Resíduos com sangue e perfurocortantes são classificados como biológico/infectante — descarte incorreto viola a legislação e representa risco sanitário.",
        C:"Generalizar tudo como infectante gera custo desnecessário e não está em conformidade com a legislação.",
        D:"Embrulhar agulha em papel não a transforma em lixo comum — perfurocortantes sempre vão em coletor rígido (Grupo E)."
      }
    },
    {
      fase:"Acondicionamento correto",
      pergunta:"O coletor de perfurocortantes (caixa amarela) está com 3/4 do volume preenchido. O auxiliar deve:",
      opcoes:[
        {letra:"A",texto:"Fechar o coletor quando atingir 2/3 do volume — nunca ultrapassar essa marca. Selar, identificar com data/responsável e encaminhar conforme o plano de gerenciamento de resíduos da clínica"},
        {letra:"B",texto:"Continuar usando até encher completamente para não desperdiçar a caixa"},
        {letra:"C",texto:"Comprimir o conteúdo para caber mais material"},
        {letra:"D",texto:"Transferir as agulhas para um frasco de vidro se a caixa estiver cheia"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. O coletor de perfurocortante deve ser fechado ao atingir 2/3 da capacidade — nunca completamente cheio, para evitar acidentes ao fechar. Deve ser identificado e encaminhado para coleta conforme PGRSS.",
        B:"Coletor cheio representa risco de perfuração ao fechar e ao transportar.",
        C:"Comprimir conteúdo de coletor de perfurocortante é extremamente perigoso — risco máximo de acidente com material biológico.",
        D:"Transferir agulhas manualmente para qualquer recipiente é proibido — risco grave de acidente perfurocortante."
      }
    }
  ],
  competencias:[7,8,8,8,10,7,7,9]
},

{
  id:"CC-12", titulo:"Verificação da eficácia da esterilização em autoclave",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Biossegurança e Controle de Infecção",
  contexto:`O auxiliar realizou um ciclo de esterilização na autoclave. Ao retirar as embalagens, percebe que o indicador químico externo de algumas embalagens NÃO mudou de cor conforme esperado. O ciclo indicado na autoclave mostra que completou normalmente.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Interpretação do indicador",
      pergunta:"O que significa o indicador químico externo NÃO ter mudado de cor após o ciclo?",
      opcoes:[
        {letra:"A",texto:"Indica que o material está estéril — o indicador é apenas decorativo"},
        {letra:"B",texto:"Indica que o processo de esterilização não foi adequado para aquelas embalagens — o material NÃO deve ser usado e o problema deve ser investigado"},
        {letra:"C",texto:"O indicador pode falhar aleatoriamente — se o ciclo completou, o material está estéril"},
        {letra:"D",texto:"Significa apenas que as embalagens ficaram na borda da câmara — basta reposicionar e usar normalmente"}
      ],
      correta:"B",
      feedback:{
        A:"O indicador químico é um parâmetro de controle de processo — não é decorativo. Sua mudança de cor confirma que o ciclo atingiu as condições necessárias.",
        B:"Correto. Indicador sem mudança de cor = falha no processo para aquelas embalagens. O material NÃO está seguro para uso. Deve-se investigar a causa (carga excessiva, vapor não chegou ao pacote, falha na autoclave) e repetir o ciclo.",
        C:"O indicador é justamente o controle que detecta falhas que o painel da autoclave não mostra — uma leitura normal no display não garante que cada embalagem foi processada corretamente.",
        D:"Mesmo que o posicionamento seja a causa, o material não processado corretamente não pode ser usado sem novo ciclo confirmado."
      }
    },
    {
      fase:"Tipos de controle de esterilização",
      pergunta:"Além do indicador químico externo, quais outros controles devem ser usados regularmente para monitorar a autoclave?",
      opcoes:[
        {letra:"A",texto:"Indicador químico interno (dentro da embalagem), indicador biológico periódico (esporos de B. stearothermophilus) e manutenção preventiva regular da autoclave"},
        {letra:"B",texto:"Apenas verificar se o painel da autoclave mostra 'ciclo completo' — isso é suficiente"},
        {letra:"C",texto:"Indicador biológico diário é obrigatório; o indicador químico é opcional"},
        {letra:"D",texto:"Não é necessário nenhum controle adicional — a autoclave é um equipamento confiável"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. O controle de esterilização exige três níveis: indicador químico externo (visível sem abrir a embalagem), indicador químico interno (confirma que o processo atingiu o interior) e indicador biológico periódico (esporos testam a efetividade real de destruição). Manutenção preventiva complementa o sistema.",
        B:"O painel indica que o ciclo ocorreu — não que foi eficaz para cada embalagem individualmente.",
        C:"A frequência do indicador biológico varia por protocolo — a legislação RDC 15/2012 estabelece os parâmetros. O indicador químico não é opcional.",
        D:"Qualquer equipamento pode falhar. O monitoramento sistemático é exigência legal e de segurança do paciente."
      }
    }
  ],
  competencias:[7,7,8,9,10,7,7,8]
},

{
  id:"CC-13", titulo:"Impacto de medicamentos na saúde bucal",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Medicina Bucal",
  contexto:`Paciente feminino, 45 anos, transplantada renal há 2 anos. Em uso de ciclosporina (imunossupressor). Comparece com queixa de gengiva crescida e avermelhada progressivamente nos últimos 8 meses. Ao exame: hiperplasia gengival generalizada, principalmente nas papilas interproximais, com sangramento à sondagem. Higiene oral deficiente.`,
  personagem:{nome:"Paciente transplantada",avatar:"paciente"},
  passos:[
    {
      fase:"Etiologia da hiperplasia",
      pergunta:"Qual é a principal causa do crescimento gengival neste caso?",
      opcoes:[
        {letra:"A", texto:"Gengivite associada exclusivamente à má higiene oral"},
        {letra:"B", texto:"Hiperplasia gengival induzida por ciclosporina (medicamentosa)"},
        {letra:"C", texto:"Tumor benigno gengival (fibroma)"},
        {letra:"D", texto:"Granuloma piogênico por deficiência de vitamina C"}
      ],
      correta:"B",
      feedback:{
        A:"Má higiene pode agravar o quadro, mas não é a causa primária da hiperplasia em paciente usando ciclosporina.",
        B:"Correto. Ciclosporina, nifedipina e fenitoína são os três medicamentos classicamente associados à hiperplasia gengival medicamentosa. O mecanismo envolve alteração do metabolismo do colágeno nos fibroblastos gengivais.",
        C:"Fibroma é uma lesão localizada — não generalizada.",
        D:"Granuloma piogênico por deficiência de vitamina C (escorbuto) é raro e se apresenta de forma diferente."
      }
    },
    {
      fase:"Tratamento",
      pergunta:"Qual é a abordagem terapêutica mais adequada para esta paciente?",
      opcoes:[
        {letra:"A", texto:"Gengivectomia imediata sob anestesia local sem comunicação com o nefrologista"},
        {letra:"B", texto:"Raspagem periodontal + melhora da higiene oral + comunicação com nefrologista para avaliar substituição da ciclosporina"},
        {letra:"C", texto:"Prescrever anti-inflamatório tópico e remarcar para 3 meses"},
        {letra:"D", texto:"Extração de todos os dentes para eliminar o local de hiperplasia"}
      ],
      correta:"B",
      feedback:{
        A:"Cirurgia em paciente imunossuprimida sem comunicação com o médico é conduta arriscada — risco de infecção grave.",
        B:"Correto. O tratamento inicia com controle da placa (raspagem + higiene). O médico deve ser consultado sobre a possibilidade de substituir a ciclosporina por outro imunossupressor (tacrolimus tem menor efeito gengival). Gengivectomia pode ser necessária se não houver remissão.",
        C:"Anti-inflamatório tópico não trata hiperplasia medicamentosa.",
        D:"Extração não é indicada para tratar hiperplasia gengival."
      }
    }
  ],
  competencias:[8,8,8,9,8,8,7,9]
},

{
  id:"CC-14", titulo:"Paciente traz dente avulsionado — conduta do auxiliar",
  tipo:"multipla", modalidade:"multipla", complexidade:3, tempo:4, area:"Urgências e Emergências",
  contexto:`Uma mãe entra correndo na clínica com seu filho Pedro, 9 anos, segurando um dente que caiu após uma queda de bicicleta há cerca de 20 minutos. O dente está na mão da mãe. O dentista está em atendimento. O auxiliar é o primeiro a atender.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Conduta imediata com o dente avulsionado",
      pergunta:"O que o auxiliar deve fazer IMEDIATAMENTE com o dente avulsionado enquanto chama o dentista?",
      opcoes:[
        {letra:"A",texto:"Pegar o dente pela coroa (não pela raiz), lavar em água corrente por 10 segundos sem esfregar, e manter em leite integral, soro fisiológico ou na saliva da própria criança até o dentista avaliar"},
        {letra:"B",texto:"Lavar o dente com sabão e esfregar a raiz para remover sujidade, depois guardar em papel toalha"},
        {letra:"C",texto:"Guardar o dente em água filtrada em copo limpo"},
        {letra:"D",texto:"Não tocar no dente — deixar que o dentista manuseie quando sair do atendimento"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Pegar pela coroa preserva o ligamento periodontal residual na raiz. Água corrente por 10s remove sujidade sem danificar as células. Leite integral, SF 0,9% ou saliva são meios de armazenamento adequados — mantêm a vitalidade das células do ligamento.",
        B:"Esfregar a raiz destrói o ligamento periodontal — inviabiliza o reimplante. Sabão é tóxico para as células.",
        C:"Água destilada/filtrada é hipotônica e causa lise das células do ligamento — pior opção de armazenamento.",
        D:"Deixar o dente seco por mais tempo reduz drasticamente o prognóstico. O auxiliar deve agir imediatamente."
      }
    },
    {
      fase:"Comunicação com o dentista",
      pergunta:"O que o auxiliar deve comunicar ao dentista ao interromper o atendimento?",
      opcoes:[
        {letra:"A",texto:"\"Dentista, urgência: criança com dente avulsionado, tempo de avulsão 20 minutos, dente armazenado em leite. Precisa de avaliação imediata.\""},
        {letra:"B",texto:"\"Tem uma criança aqui que caiu e perdeu um dente\" — sem mais detalhes"},
        {letra:"C",texto:"Não interromper — esperar o dentista terminar o atendimento atual"},
        {letra:"D",texto:"Dizer à mãe que é preciso ir à UPA pois a clínica não faz reimplante"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A comunicação deve ser objetiva: tipo de emergência, tempo de avulsão (prognóstico piora após 30-60 min) e condição do dente. Isso permite ao dentista tomar decisão rápida sobre interromper ou não o atendimento.",
        B:"Informação insuficiente — o dentista não consegue dimensionar a urgência.",
        C:"Avulsão dental é emergência com janela de tempo crítica. Cada minuto reduz o prognóstico do reimplante.",
        D:"Decidir encaminhar sem apresentar ao dentista é ultrapassar a competência do auxiliar."
      }
    }
  ],
  competencias:[8,9,9,8,9,8,7,8]
},

{
  id:"CC-15", titulo:"Fluxo de material contaminado na clínica",
  tipo:"multipla", modalidade:"multipla", complexidade:3, tempo:4, area:"Biossegurança e Controle de Infecção",
  contexto:`O auxiliar terminou um atendimento e precisa fazer o processamento dos instrumentais. Na clínica, há uma área de trabalho suja (onde chegam os instrumentais usados) e uma área limpa (onde ficam os instrumentais esterilizados prontos para uso). O auxiliar precisa transportar a bandeja usada, lavar os instrumentais e reempacotar para esterilização.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Fluxo de material",
      pergunta:"Qual é a sequência correta para o processamento dos instrumentais?",
      opcoes:[
        {letra:"A",texto:"Pré-lavagem na área suja com EPI completo → limpeza mecânica/ultrassônica → enxágue → secagem → inspeção → embalagem → esterilização → armazenamento na área limpa"},
        {letra:"B",texto:"Levar os instrumentais diretamente para a autoclave sem lavar — o calor vai esterilizar mesmo com matéria orgânica"},
        {letra:"C",texto:"Lavar na área limpa para usar a pia grande — a área suja tem pia menor"},
        {letra:"D",texto:"Lavar os instrumentais juntos com os materiais de consumo (gazes, luvas) para economizar tempo"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. O fluxo unidirecional (suja → limpa) é princípio fundamental de controle de infecção. Matéria orgânica precisa ser removida ANTES da esterilização — proteínas coaguladas pelo calor bloqueiam a penetração do vapor.",
        B:"Matéria orgânica residual forma barreira que impede a ação do vapor de esterilização. O instrumental pode sair do ciclo sem estar estéril.",
        C:"O fluxo deve ser sempre da área suja para a área limpa — nunca o contrário. Levar material contaminado para a área limpa contamina toda aquela área.",
        D:"Materiais de consumo usados (gazes, luvas) são descartáveis e não reprocessados com instrumentais."
      }
    },
    {
      fase:"EPI durante processamento",
      pergunta:"Quais EPIs o auxiliar DEVE usar durante a lavagem dos instrumentais na área suja?",
      opcoes:[
        {letra:"A",texto:"Luvas grossas (não descartáveis), máscara, avental impermeável, gorro e óculos/protetor facial — os EPIs do atendimento (luvas finas) não são adequados para o processamento"},
        {letra:"B",texto:"As mesmas luvas descartáveis do atendimento são suficientes"},
        {letra:"C",texto:"Não precisa de EPI para lavar instrumentais — só para atender paciente"},
        {letra:"D",texto:"Apenas avental — as mãos ficam sob a água corrente o tempo todo"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Luvas grossas de borracha são obrigatórias na lavagem — protegem de cortes por instrumentais perfurocortantes. As luvas finas de procedimento rasgam facilmente ao manusear instrumentos. Óculos e máscara protegem de aerossóis da lavagem.",
        B:"Luvas descartáveis finas não protegem adequadamente contra cortes de bisturis, brocas e instrumentos de periodontia.",
        C:"A lavagem de instrumentais representa um dos maiores riscos de acidente perfurocortante para auxiliares.",
        D:"Avental sozinho não protege mãos, olhos e vias aéreas dos aerossóis gerados durante a lavagem."
      }
    }
  ],
  competencias:[7,8,8,8,10,7,7,9]
},

{
  id:"CC-16", titulo:"Revelação de radiografia pelo método convencional",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Radiologia Odontológica",
  contexto:`O auxiliar precisa revelar uma radiografia periapical pelo método convencional em câmara escura. Os químicos disponíveis são revelador, fixador e água de lavagem. A temperatura dos químicos está em 20°C. O auxiliar nunca havia revelado radiografias antes e pergunta ao dentista sobre a sequência.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Sequência de revelação",
      pergunta:"Qual é a sequência correta para a revelação convencional de radiografia?",
      opcoes:[
        {letra:"A",texto:"Revelador (20°C → 4,5 minutos) → lavagem em água (30 segundos) → fixador (dobro do tempo de revelação) → lavagem final (20 minutos) → secagem"},
        {letra:"B",texto:"Fixador primeiro para enrijecer o filme → revelador → lavagem"},
        {letra:"C",texto:"Revelador → fixador diretamente sem lavagem intermediária — a lavagem faz diferença apenas no final"},
        {letra:"D",texto:"Revelador por 1 minuto independente da temperatura — tempo padronizado"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A sequência é: revelador (tempo conforme temperatura — a 20°C são 4,5min pela tabela tempo-temperatura) → lavagem intermediária (30s para interromper o revelador e evitar contaminar o fixador) → fixador (dobro do tempo de revelação) → lavagem final (20min para remover químicos) → secagem.",
        B:"Fixador antes do revelador impede o desenvolvimento da imagem latente — o filme ficará transparente ou com imagem muito fraca.",
        C:"Sem a lavagem intermediária, o revelador mistura com o fixador, neutralizando os dois e comprometendo a qualidade da imagem.",
        D:"O tempo no revelador varia com a temperatura. Usar tempo fixo sem considerar temperatura resulta em imagem sub ou superrevelada."
      }
    },
    {
      fase:"Avaliação da qualidade da imagem",
      pergunta:"Ao sair do fixador, a imagem radiográfica está muito clara (quase transparente). Qual o provável problema?",
      opcoes:[
        {letra:"A",texto:"Sub-revelação: tempo insuficiente no revelador ou revelador exausto/contaminado. A radiografia precisa ser repetida."},
        {letra:"B",texto:"A imagem clara significa boa qualidade — menos dose de radiação usada"},
        {letra:"C",texto:"Super-fixação: ficou tempo demais no fixador. Repetir a revelação no revelador"},
        {letra:"D",texto:"O paciente se moveu durante a tomada — a imagem clara é sinal de movimento"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Imagem muito clara (densidade baixa) = sub-revelação. Causas: tempo curto no revelador, temperatura baixa, ou revelador degradado. A radiografia precisa ser repetida — não há como recuperar uma imagem sub-revelada.",
        B:"Imagem clara não é qualidade — é falta de densidade que impede diagnóstico.",
        C:"Excesso de fixação não clareia a imagem — a fixação remove apenas a prata não reduzida (área sem imagem). A sobre-fixação pode remover imagem ao longo do tempo.",
        D:"Movimento do paciente causa imagem borrada, não imagem clara."
      }
    }
  ],
  competencias:[7,8,8,9,8,7,7,8]
},

{
  id:"CC-17", titulo:"Orientação pós-operatória após extração dental",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Comunicação e Humanização",
  contexto:`O dentista acabou de realizar a extração do dente 46 de uma paciente, Sra. Beatriz, 42 anos. O dentista pede ao auxiliar que oriente a paciente sobre os cuidados pós-operatórios antes de ela sair. Beatriz está com gaze mordendo e parece ansiosa com as instruções.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Orientação pós-operatória",
      pergunta:"Quais são as orientações pós-operatórias corretas que o auxiliar deve transmitir?",
      opcoes:[
        {letra:"A",texto:"Manter pressão com gaze por 30-60 minutos, não cuspir nem bochechar nas primeiras horas, não fumar por 24-48h, alimentação fria/morna e pastosa, evitar esforço físico no dia, e retornar se tiver dor intensa, inchaço aumentando após 48h ou febre"},
        {letra:"B",texto:"Bochechar com água morna e sal logo ao chegar em casa para limpar o local"},
        {letra:"C",texto:"Escovar normalmente a região da extração a partir do dia seguinte com escova dura"},
        {letra:"D",texto:"Pode comer qualquer alimento após 1 hora — o coágulo já estará formado"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. As orientações protegem o coágulo: pressão com gaze (hemostasia), sem bochechos/cuspir nas primeiras horas (não desprender coágulo), sem fumar (vasoconstrição prejudica cicatrização + alveolite), dieta fria/pastosa, sem esforço físico (↑pressão sanguínea). Sinais de alerta para retorno são importantes.",
        B:"Bochechos imediatos desprendem o coágulo, podendo causar alveolite seca — uma das complicações mais dolorosas pós-extração.",
        C:"Escova dura na região pode traumatizar os tecidos e deslocar o coágulo. Escova macia, sem pressão direta, somente após 24h.",
        D:"Uma hora é insuficiente para coágulo estável. Alimentos duros/quentes podem traumatizar ou dissolver o coágulo."
      }
    },
    {
      fase:"Comunicação com paciente ansiosa",
      pergunta:"Beatriz diz que não conseguiu entender tudo que o auxiliar falou porque estava nervosa. O que o auxiliar deve fazer?",
      opcoes:[
        {letra:"A",texto:"Repetir as instruções com calma, usar linguagem simples, e entregar um folheto ou anotar as instruções por escrito para ela levar para casa"},
        {letra:"B",texto:"Dizer que as instruções já foram dadas e ela deve prestar mais atenção na próxima vez"},
        {letra:"C",texto:"Pedir que ela pesquise na internet os cuidados pós-extração"},
        {letra:"D",texto:"Orientar apenas os 2 pontos mais importantes e ignorar o restante para não confundir"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Paciente ansiosa não retém bem as informações verbais. Repetir com calma + material escrito garante que ela terá as informações em casa quando precisar. Instrução escrita também é forma de documentação.",
        B:"Paciente ansiosa não é culpa — o auxiliar deve adaptar a comunicação às necessidades do paciente.",
        C:"Informações da internet são variadas e podem contradizer as orientações do dentista.",
        D:"Omitir orientações por julgamento sobre o que é mais ou menos importante pode resultar em complicações e insatisfação."
      }
    }
  ],
  competencias:[9,7,8,7,7,8,7,9]
},

{
  id:"CC-18", titulo:"Auxílio no isolamento absoluto",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Instrumentação e Biomateriais",
  contexto:`O dentista vai realizar uma restauração com resina no dente 25 e solicita isolamento absoluto. O auxiliar deve preparar os materiais e auxiliar na instalação do isolamento. Os materiais disponíveis incluem: lençol de borracha, arco de Young, grampos variados (212, 14, 7, 1), pinça porta-grampo, fio dental e punch.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Preparo do isolamento",
      pergunta:"O que o auxiliar deve preparar para o isolamento absoluto do dente 25 (pré-molar superior)?",
      opcoes:[
        {letra:"A",texto:"Lençol de borracha (tamanho adequado), grampo para pré-molar (ex: grampo 7 ou 14), arco de Young, pinça porta-grampo, punch para perfurar o lençol e fio dental para verificar os contatos"},
        {letra:"B",texto:"Apenas o lençol de borracha — o dentista pega o restante sozinho"},
        {letra:"C",texto:"Grampo 212 (de asa) que é universal e serve para todos os dentes"},
        {letra:"D",texto:"Não é necessário preparar nada — o isolamento absoluto é montado direto pelo dentista sem auxílio"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. O auxiliar deve preparar todos os componentes do isolamento: lençol de borracha perfurado no punch, grampo adequado ao dente (para pré-molar superior: 7 ou 14), pinça porta-grampo, arco de Young para tensionar o lençol, e fio dental para testar e ajustar.",
        B:"Preparar apenas o lençol demonstra desconhecimento do procedimento e atrasa o atendimento.",
        C:"Grampo 212 (Ivory) é para incisivos — não é adequado para pré-molares. Grampo inadequado não clampa corretamente e compromete o isolamento.",
        D:"O isolamento absoluto é instalado em equipe. O auxiliar tem papel ativo na instalação e manutenção."
      }
    },
    {
      fase:"Cuidado durante o procedimento",
      pergunta:"Durante o procedimento, o grampo se solta e cai na boca do paciente. Qual a conduta do auxiliar?",
      opcoes:[
        {letra:"A",texto:"Alertar o dentista imediatamente, pedir ao paciente para não engolir e ficar quieto, e o dentista recupera o grampo com a pinça — o fio de segurança deveria estar instalado"},
        {letra:"B",texto:"Pedir ao paciente que cuspir o grampo na cuba"},
        {letra:"C",texto:"Deixar o dentista perceber sozinho — o auxiliar não deve intervir"},
        {letra:"D",texto:"Pedir ao paciente que incline a cabeça para o lado para o grampo sair sozinho"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Grampo solto é risco de engolimento ou aspiração. Alertar o dentista e pedir ao paciente para não se mover é a conduta correta. O fio de segurança (passado pelo orifício do grampo e preso externamente) é medida preventiva obrigatória.",
        B:"Pedir que cuspa pode provocar movimento que leva o grampo para a faringe.",
        C:"O auxiliar atento deve alertar o dentista imediatamente — não aguardar.",
        D:"Inclinar a cabeça sem controlar o grampo pode piorara situação."
      }
    }
  ],
  competencias:[7,8,8,9,9,7,7,8]
},

{
  id:"CC-19", titulo:"Paciente com necessidades especiais — Síndrome de Down",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Pacientes Especiais",
  contexto:`Paciente feminina, 18 anos, Síndrome de Down (trissomia 21), comunicativa e cooperativa. Trazida pela mãe para profilaxia. Apresenta macroglossia, hipotonia muscular bucal e respiração predominantemente oral. Ao exame: placa supragengival abundante, cálculo em anteriores inferiores, gengiva eritematosa. A mãe relata dificuldade em escovar a boca da filha.`,
  personagem:{nome:"Paciente com Síndrome de Down",avatar:"paciente"},
  passos:[
    {
      fase:"Achados clínicos associados à Síndrome de Down",
      pergunta:"Qual característica da Síndrome de Down contribui DIRETAMENTE para o acúmulo de placa e doença periodontal neste caso?",
      opcoes:[
        {letra:"A", texto:"Trissomia do cromossomo 21 causa diretamente periodontite"},
        {letra:"B", texto:"Hipotonia muscular orofacial reduz a autolimpeza salivar e dificulta a higiene oral"},
        {letra:"C", texto:"Macroglossia aumenta a produção de cálculo dental"},
        {letra:"D", texto:"Respiração oral exclusivamente aumenta o risco de cárie, não de doença periodontal"}
      ],
      correta:"B",
      feedback:{
        A:"A trissomia não causa diretamente periodontite — é a combinação de fatores anatômicos e funcionais que aumenta o risco.",
        B:"Correto. A hipotonia muscular dificulta a higiene oral independente (manuseio da escova) e reduz a autolimpeza natural da saliva. Respiração oral resseca a mucosa, e a macroglossia pode deslocar dentes. Todos esses fatores predispõem ao acúmulo de placa.",
        C:"Macroglossia não aumenta diretamente a produção de cálculo.",
        D:"Respiração oral aumenta o risco tanto de cárie quanto de inflamação gengival."
      }
    },
    {
      fase:"Estratégia de atendimento",
      pergunta:"Qual estratégia é mais indicada para o atendimento odontológico desta paciente?",
      opcoes:[
        {letra:"A", texto:"Sedação em todas as consultas por ser portadora de deficiência intelectual"},
        {letra:"B", texto:"Usar técnicas de comunicação adaptadas, envolver a cuidadora e realizar sessões curtas e positivas"},
        {letra:"C", texto:"Recusar o atendimento ambulatorial e encaminhar ao centro de referência hospitalar"},
        {letra:"D", texto:"Realizar todos os procedimentos em uma única sessão longa para minimizar o número de visitas"}
      ],
      correta:"B",
      feedback:{
        A:"Sedação não é indicada rotineiramente para pacientes cooperativos com Síndrome de Down.",
        B:"Correto. Pacientes com Síndrome de Down geralmente são cooperativos quando bem manejados. Comunicação adaptada (linguagem clara, reforço positivo), envolvimento da cuidadora na higiene domiciliar e sessões programadas são as melhores estratégias.",
        C:"A maioria dos pacientes com Down pode ser atendida ambulatorialmente. Encaminhamento hospitalar é reservado para casos de baixa cooperação ou necessidade de sedação profunda.",
        D:"Sessões longas são mais desgastantes para o paciente e a família."
      }
    }
  ],
  competencias:[9,8,8,8,7,9,8,9]
},

{
  id:"CC-20", titulo:"Preparo de materiais para restauração com resina composta",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Instrumentação e Biomateriais",
  contexto:`O dentista vai realizar uma restauração classe II (proximal) com resina composta no dente 36. O auxiliar deve preparar a bandeja com todos os materiais necessários antes do paciente entrar. O consultório tem resinas das cores A1, A2, A3, B2 e uma resina de esmalte translúcido.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Seleção de materiais",
      pergunta:"Quais materiais devem estar na bandeja para essa restauração?",
      opcoes:[
        {letra:"A",texto:"Espelho, sonda, pinça, seringa Carpule + agulha + anestésico, ácido fosfórico 37%, sistema adesivo, resina (cor conforme seleção prévia), matriz metálica + cunha + porta-matriz (Tofflemire ou matriz seccional), fotopolimerizador verificado, espátula de resina, tira de lixa e discos de acabamento"},
        {letra:"B",texto:"Apenas a resina e o fotopolimerizador — o restante o dentista busca durante o procedimento"},
        {letra:"C",texto:"Todas as cores de resina disponíveis colocadas abertas na bandeja para o dentista escolher na hora"},
        {letra:"D",texto:"Amálgama em vez de resina — é mais fácil de manipular para o auxiliar"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Restauração com resina composta requer: protocolo de anestesia, condicionamento (ácido + adesivo), resina na cor correta, sistema de matriz para restaurações proximais (impede flash de resina interproximal), fotopolimerizador e acabamento/polimento. Antecipar todos os materiais evita interrupções.",
        B:"Buscar materiais durante o procedimento contamina a área limpa e aumenta o tempo de boca aberta do paciente.",
        C:"Deixar resinas abertas expõe ao ambiente e à luz — a resina fotopolimerizável pode ser ativada prematuramente. Apenas a cor selecionada deve estar disponível.",
        D:"O material a ser usado é decisão do dentista, não do auxiliar."
      }
    },
    {
      fase:"Cuidados com o fotopolimerizador",
      pergunta:"Antes de usar o fotopolimerizador, o auxiliar deve:",
      opcoes:[
        {letra:"A",texto:"Verificar se a bateria está carregada, testar a intensidade de luz com o radiômetro (se disponível), e cobrir a ponta com barreira protetora plástica descartável entre pacientes"},
        {letra:"B",texto:"Usar o fotopolimerizador sem qualquer preparo — ele é de uso único por paciente e já vem pronto"},
        {letra:"C",texto:"Desinfetar a ponta do fotopolimerizador com álcool 70% imediatamente antes do uso, sem cobertura"},
        {letra:"D",texto:"Não é necessário nenhum cuidado — o fotopolimerizador não tem contato com o paciente"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Bateria fraca compromete a polimerização da resina. O radiômetro verifica a intensidade luminosa. A barreira plástica descartável é o método de controle de infecção padrão para o fotopolimerizador — mais prático e seguro que desinfetar a ponta entre cada paciente.",
        B:"O fotopolimerizador não é descartável e requer higienização/barreira entre pacientes.",
        C:"Desinfetar com álcool pode danificar a ponteira e não garante limpeza adequada de irregularidades. A barreira plástica é superior.",
        D:"A ponteira do fotopolimerizador entra na boca do paciente e contata saliva e resina — tem risco de contaminação cruzada."
      }
    }
  ],
  competencias:[7,8,8,9,9,7,7,8]
}



// Remover linha de fechamento anterior e continuar
,

{
  id:"CC-21", titulo:"Comunicação com criança ansiosa durante procedimento",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Comunicação e Humanização",
  contexto:`Sofia, 7 anos, está na cadeira odontológica para selamento de fossas e fissuras. É sua segunda consulta. Na primeira consulta ficou assustada mas cooperou. Quando o auxiliar aproxima o sugador, Sofia começa a chorar e diz "não quero, tá doendo". O dentista pede ao auxiliar que tente tranquilizá-la.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Abordagem da criança ansiosa",
      pergunta:"Como o auxiliar deve abordar Sofia para ajudá-la a cooperar?",
      opcoes:[
        {letra:"A",texto:"Abaixar ao nível da criança, falar em tom calmo e acolhedor, validar o sentimento ('Eu entendo que você ficou assustada'), explicar o que está fazendo com linguagem infantil ('esse é o aspirador de saliva, ele só suga a água') e elogiar cada avanço pequeno"},
        {letra:"B",texto:"Dizer firmemente que não dói nada e que ela está exagerando — a criança precisa entender que é rápido"},
        {letra:"C",texto:"Ignorar o choro e continuar — crianças pequenas sempre choram no dentista"},
        {letra:"D",texto:"Dizer que se ela não cooperar vai precisar de uma injeção maior"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A técnica dizer-mostrar-fazer e a validação emocional são abordagens consagradas em odontopediatria. Linguagem adaptada à idade, tom calmo e reforço positivo reduzem a ansiedade. O auxiliar tem papel fundamental no manejo comportamental.",
        B:"Invalidar o sentimento da criança aumenta a desconfiança e o medo. 'Não dói nada' é mentiroso se causar desconforto.",
        C:"Ignorar o choro de uma criança é desrespeitoso e vai piorar consultas futuras — criando o paciente odontofóbico.",
        D:"Ameaças são técnicas proibidas em odontopediatria — causam trauma psicológico e associação negativa com o dentista."
      }
    },
    {
      fase:"Postura durante o procedimento",
      pergunta:"Sofia acalmou e o procedimento continua. Qual deve ser a postura do auxiliar durante o restante da consulta?",
      opcoes:[
        {letra:"A",texto:"Manter conversa tranquila e encorajadora ('Você está indo muito bem, Sofia!'), anticipar as necessidades do dentista (sugador, iluminação, materiais) e ficar atento ao conforto da criança"},
        {letra:"B",texto:"Ficar em silêncio para não distrair a criança do procedimento"},
        {letra:"C",texto:"Usar o celular durante o procedimento enquanto espera ser solicitado"},
        {letra:"D",texto:"Conversar com o dentista sobre assuntos pessoais para tornar o ambiente mais leve"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. O auxiliar em odontopediatria tem dupla função: suporte ao dentista (instrumentação) e suporte à criança (manejo comportamental). Elogios contínuos reforçam a cooperação e constroem uma relação positiva com o dentista.",
        B:"Silêncio total pode aumentar a ansiedade da criança — a conversa tranquila é parte do manejo comportamental.",
        C:"Usar celular durante o atendimento é falta de profissionalismo e pode gerar acidentes.",
        D:"Conversa entre profissionais sobre assuntos não relacionados ao atendimento é inadequada na presença do paciente."
      }
    }
  ],
  competencias:[10,7,8,7,7,8,7,9]
},

{
  id:"CC-22", titulo:"Identificação e uso correto dos EPIs",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Biossegurança e Controle de Infecção",
  contexto:`O auxiliar vai começar o turno de atendimentos. Antes do primeiro paciente, precisa montar seu EPI. Na sala de materiais estão disponíveis: luvas de procedimento P/M/G, luvas grossas de borracha, máscara cirúrgica, máscara N95, gorro descartável, óculos de proteção, avental de manga comprida e protetor facial (face shield).`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Seleção do EPI para atendimento clínico",
      pergunta:"Qual combinação de EPIs o auxiliar deve usar para um atendimento odontológico rotineiro com geração de aerossóis (uso de alta rotação)?",
      opcoes:[
        {letra:"A",texto:"Luvas de procedimento + máscara cirúrgica + gorro + óculos de proteção ou face shield + avental de manga comprida"},
        {letra:"B",texto:"Apenas luvas e máscara — o restante é exagero para procedimento rotineiro"},
        {letra:"C",texto:"Máscara N95 obrigatória para todos os atendimentos odontológicos"},
        {letra:"D",texto:"Face shield sozinho substitui óculos + máscara — é mais prático"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. O EPI padrão para atendimentos com aerossol inclui: luvas (barreira para sangue/saliva), máscara cirúrgica (barreira contra gotículas grandes), gorro (protege cabelo de aerossóis), proteção ocular (óculos ou face shield — contra respingos) e avental (protege roupa/pele). Tudo obrigatório.",
        B:"Gorro, óculos e avental são obrigatórios pela NR-32 e pelas normas do CFO — não são opcionais.",
        C:"Máscara N95 tem indicações específicas (TB ativa, aerossóis de alto risco, pacientes com suspeita de infecção respiratória). Para atendimento rotineiro sem paciente com infecção respiratória ativa, máscara cirúrgica é adequada.",
        D:"Face shield protege olhos e face mas não filtra partículas inaladas — não substitui a máscara."
      }
    },
    {
      fase:"Troca de luvas entre pacientes",
      pergunta:"Após atender o primeiro paciente, o auxiliar remove as luvas. Qual o próximo passo antes de colocar as luvas do próximo paciente?",
      opcoes:[
        {letra:"A",texto:"Lavar as mãos com água e sabão ou usar álcool gel 70% (pelo menos 20-30 segundos), secá-las completamente e só então colocar as luvas novas"},
        {letra:"B",texto:"Colocar as luvas novas diretamente — as luvas que serão usadas vão proteger de qualquer modo"},
        {letra:"C",texto:"Lavar as luvas antigas e reutilizar para o próximo paciente se estiverem íntegras — economia de material"},
        {letra:"D",texto:"Apenas trocar as luvas sem higienizar as mãos — as luvas são a barreira principal"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A higiene das mãos é a medida mais importante de controle de infecção. Luvas podem ter microperfurações invisíveis. As mãos devem ser higienizadas APÓS remover as luvas e ANTES de colocar o próximo par.",
        B:"Luvas sobre mãos não higienizadas transferem contaminação da luva para o interior da nova luva ao calçar.",
        C:"Luvas descartáveis nunca devem ser reprocessadas — rasgam, perfuram e perdem barreira de proteção.",
        D:"As luvas não dispensam a higiene das mãos — as duas medidas são complementares, não excludentes."
      }
    }
  ],
  competencias:[7,7,8,7,10,7,7,9]
},

{
  id:"CC-23", titulo:"Organização e sigilo do prontuário — LGPD",
  tipo:"multipla", modalidade:"multipla", complexidade:3, tempo:4, area:"Ética e Profissionalismo",
  contexto:`Um familiar do paciente João, 35 anos, liga para a clínica pedindo informações sobre o tratamento de João, dizendo que é o irmão e quer saber "o que o dentista encontrou". O auxiliar está sozinho na recepção. O dentista está em atendimento.`,
  personagem:{nome:"Recepcionista/Auxiliar",avatar:"auxiliar"},
  passos:[
    {
      fase:"Sigilo do prontuário",
      pergunta:"Como o auxiliar deve responder a essa solicitação?",
      opcoes:[
        {letra:"A",texto:"Informar gentilmente que os dados do prontuário são sigilosos e só podem ser fornecidos ao próprio paciente ou mediante autorização escrita dele — não é possível fornecer informações por telefone sem essa autorização"},
        {letra:"B",texto:"Contar o diagnóstico e tratamento — afinal é o irmão e a família deve saber"},
        {letra:"C",texto:"Dizer que vai perguntar ao dentista e passar todas as informações por e-mail"},
        {letra:"D",texto:"Pedir que o irmão venha pessoalmente à clínica para receber as informações verbalmente"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. O sigilo profissional e a LGPD (Lei Geral de Proteção de Dados) protegem os dados de saúde do paciente. Mesmo que seja familiar, o auxiliar não pode fornecer informações sem autorização explícita do titular. A orientação é: o paciente deve entrar em contato diretamente ou fornecer autorização escrita.",
        B:"Fornecer dados de saúde sem autorização do paciente viola o Código de Ética Odontológico e a LGPD — sujeito a sanções.",
        C:"Enviar dados por e-mail a terceiro sem autorização é violação ainda mais grave de privacidade.",
        D:"Receber pessoalmente não muda o problema — ainda seria violação de sigilo sem autorização do paciente."
      }
    },
    {
      fase:"Organização do arquivo de prontuários",
      pergunta:"O auxiliar percebe que prontuários físicos de pacientes estão em uma prateleira visível na recepção, onde qualquer visitante pode ver os nomes. O que deve ser feito?",
      opcoes:[
        {letra:"A",texto:"Comunicar ao dentista/responsável e propor mover os prontuários para área restrita, ou usar identificação por código numérico em vez do nome completo na capa externa"},
        {letra:"B",texto:"Não é problema — o nome sozinho não é dado sensível"},
        {letra:"C",texto:"Cobrir os nomes com fita adesiva antes de cada visita e descobrir depois — improviso aceitável"},
        {letra:"D",texto:"Ignorar — a clínica sempre foi assim e nunca houve reclamação"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Exposição de nomes de pacientes na recepção viola a privacidade — a associação nome+clínica já revela dado de saúde (o fato de ser paciente). A LGPD exige medidas técnicas e organizacionais para proteger dados pessoais. O auxiliar deve comunicar e propor solução.",
        B:"Nome completo em contexto de clínica de saúde é dado pessoal sensível conforme LGPD.",
        C:"Improviso não é conformidade com a LGPD — a clínica precisa de procedimento sistemático.",
        D:"Ausência de reclamação não é conformidade legal. A obrigação existe independentemente de denúncias."
      }
    }
  ],
  competencias:[8,7,8,7,7,7,7,10]
},

{
  id:"CC-24", titulo:"Halitose — investigação e conduta",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Medicina Bucal",
  contexto:`Paciente masculino, 38 anos, queixa de mau hálito persistente relatado por familiares. Ao exame: saburra lingual posterior abundante, sangramento à sondagem em 4 sítios (gengivite leve), cáries ausentes. Sem xerostomia, sem próteses. O paciente é fumante. Sem refluxo, sinusite ou doenças sistêmicas conhecidas.`,
  personagem:{nome:"Paciente com halitose",avatar:"paciente"},
  passos:[
    {
      fase:"Etiologia da halitose",
      pergunta:"Qual é a principal origem da halitose neste caso?",
      opcoes:[
        {letra:"A", texto:"Cárie nos dentes posteriores"},
        {letra:"B", texto:"Saburra lingual + tabagismo + gengivite leve"},
        {letra:"C", texto:"Refluxo gastroesofágico (hálito sistêmico)"},
        {letra:"D", texto:"Prótese dentária contaminada"}
      ],
      correta:"B",
      feedback:{
        A:"Não há cáries ao exame.",
        B:"Correto. Cerca de 85-90% dos casos de halitose têm origem oral. A saburra lingual é o principal reservatório de compostos sulfurados voláteis (CSV), responsáveis pelo odor fétido. Tabagismo e gengivite são fatores agravantes.",
        C:"Halitose de origem digestiva é possível, mas a origem oral deve ser investigada e tratada primeiro.",
        D:"Não há prótese relatada."
      }
    },
    {
      fase:"Tratamento",
      pergunta:"Qual é o plano de tratamento mais completo para este paciente?",
      opcoes:[
        {letra:"A", texto:"Prescrever apenas enxaguante bucal com clorexidina sem orientações adicionais"},
        {letra:"B", texto:"Higiene da língua com raspador + tratamento periodontal + cessação do tabagismo + instrução de higiene"},
        {letra:"C", texto:"Encaminhar diretamente ao gastroenterologista sem tratar a origem oral"},
        {letra:"D", texto:"Extrair todos os dentes e colocar prótese total para eliminar a origem bacteriana"}
      ],
      correta:"B",
      feedback:{
        A:"Clorexidina isolada sem higiene mecânica da língua é insuficiente.",
        B:"Correto. Tratamento da halitose de origem oral: higienização mecânica da língua com raspador lingual, raspagem periodontal (gengivite leve), cessação do tabagismo, orientação de hidratação adequada e higiene oral completa.",
        C:"Sem investigar e tratar a origem oral, encaminhar ao gastro é prematuro.",
        D:"Extração total não é indicada para halitose e causaria dano desnecessário."
      }
    }
  ],
  competencias:[7,7,7,8,7,7,7,8]
},

{
  id:"CC-25", titulo:"Reconhecimento de reação alérgica ao látex",
  tipo:"multipla", modalidade:"multipla", complexidade:3, tempo:4, area:"Urgências e Emergências",
  contexto:`Durante uma restauração, a auxiliar nota que a paciente Carla, 30 anos, começa a apresentar urticária (manchas vermelhas e erupção na pele do pescoço e braços), queixa de coceira intensa e olhos lacrimejando. Carla não declarou alergia ao látex na ficha. O auxiliar usa luvas de látex.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Reconhecimento e conduta imediata",
      pergunta:"O auxiliar suspeita de reação alérgica ao látex. Qual é a conduta imediata correta?",
      opcoes:[
        {letra:"A",texto:"Alertar o dentista imediatamente, remover as luvas de látex (e qualquer material de látex em contato com a paciente), interromper o procedimento e monitorar os sinais vitais da paciente"},
        {letra:"B",texto:"Continuar o procedimento e pedir que a paciente tome um anti-histamínico depois em casa"},
        {letra:"C",texto:"Trocar as luvas por outro par de látex — o problema pode ser sujo nas luvas, não o látex em si"},
        {letra:"D",texto:"Dizer à paciente que a urticária é normal e passa sozinha em alguns minutos"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Reação alérgica ao látex pode progredir para anafilaxia. A conduta é: remover o agente causador (luvas de látex), interromper o procedimento, alertar o dentista que conduzirá o manejo. O auxiliar monitora sintomas enquanto o dentista avalia e decide sobre medicação (anti-histamínico, epinefrina em anafilaxia).",
        B:"Reação alérgica em progressão não pode aguardar — pode evoluir para broncoespasmo e anafilaxia.",
        C:"Trocar por outro par de látex mantém o contato com o agente causador — piora a reação.",
        D:"Normalizar sintomas de alergia é perigoso — a paciente precisa de avaliação médica."
      }
    },
    {
      fase:"Prevenção e documentação",
      pergunta:"Após o episódio, o que deve ser feito para evitar recorrência?",
      opcoes:[
        {letra:"A",texto:"Registrar a alergia confirmada no prontuário, orientar a paciente a comunicar alergia ao látex em todos os atendimentos de saúde futuros, e a clínica deve adotar protocolo de ambiente livre de látex para essa paciente"},
        {letra:"B",texto:"Não registrar — foi um susto mas passou e a paciente está bem"},
        {letra:"C",texto:"Apenas pedir que a paciente traga anti-histamínico nas próximas consultas"},
        {letra:"D",texto:"Orientar a paciente a buscar outro dentista que use luvas sem látex"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. O registro no prontuário é obrigatório para segurança da paciente em futuras consultas. Ambiente livre de látex para pacientes alérgicos inclui: luvas sem látex, lençol de borracha sintético, seringas sem componente de látex. A paciente deve ser orientada a informar sempre nos prontuários de saúde.",
        B:"Omitir do prontuário coloca a paciente em risco na próxima consulta.",
        C:"Anti-histamínico não previne anafilaxia — o protocolo certo é eliminar o agente causador.",
        D:"A clínica tem condição de atender a paciente com segurança com protocolo livre de látex — não é necessário encaminhar."
      }
    }
  ],
  competencias:[8,9,9,8,10,8,7,9]
},

{
  id:"CC-26", titulo:"Posicionamento ergonômico do auxiliar — trabalho a 4 mãos",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Ergonomia e Auxílio Clínico",
  contexto:`O dentista vai iniciar uma restauração no dente 46 usando técnica a 4 mãos. O consultório tem mocho para auxiliar com encosto e regulagem de altura. A cadeira do paciente está reclinada e o dentista está posicionado às 11h (em relação ao paciente deitado). O auxiliar precisa se posicionar.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Posicionamento correto do auxiliar",
      pergunta:"Onde e como o auxiliar deve se posicionar para o trabalho a 4 mãos nessa situação?",
      opcoes:[
        {letra:"A",texto:"Auxiliar posicionado entre as posições 2h e 4h (em relação ao paciente), no mesmo nível ou 10-15cm acima do dentista, mocho regulado, coluna reta, visão direta do campo operatório"},
        {letra:"B",texto:"Auxiliar fica em pé atrás do dentista para ter melhor visão do campo operatório"},
        {letra:"C",texto:"Auxiliar senta em qualquer posição confortável — o posicionamento exato não influencia no trabalho"},
        {letra:"D",texto:"Auxiliar deve ficar do mesmo lado que o dentista (também às 11h) para facilitar a passagem de instrumentos"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. O auxiliar posiciona-se no lado oposto ao dentista, entre 2h e 4h. O mocho deve estar 10-15cm mais alto que o dentista para visão privilegiada do campo. Coluna ereta no mocho ergonômico previne lombalgias e cervicalgias que são causa frequente de afastamento em auxiliares.",
        B:"Ficar em pé atrás do dentista dificulta a passagem de instrumentos e gera postura inadequada com sobrecarga cervical.",
        C:"O posicionamento correto é treinado e fundamental — previne LER/DORT e otimiza a eficiência do atendimento.",
        D:"Ambos do mesmo lado inviabiliza o trabalho a 4 mãos e cria obstáculo para a passagem de instrumentos."
      }
    },
    {
      fase:"Passagem de instrumentos",
      pergunta:"Durante o procedimento, o dentista precisa do explorador. Como o auxiliar deve fazer a passagem correta do instrumento?",
      opcoes:[
        {letra:"A",texto:"Segurar o instrumento pela parte não funcional (cabo), aproximar da mão do dentista na zona de transferência (próxima ao queixo do paciente) e entregar quando o dentista estiver pronto para receber, sem interrupção brusca"},
        {letra:"B",texto:"Colocar o instrumento na bandeja para o dentista pegar sozinho"},
        {letra:"C",texto:"Entregar o instrumento pela ponta ativa (ponta funcional) para o dentista pegar pelo cabo"},
        {letra:"D",texto:"Jogar o instrumento sobre a bandeja e avisar o dentista"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A passagem de instrumentos na zona de transferência é uma das habilidades centrais do auxiliar. Segurar pelo cabo (não pela ponta ativa) garante que o dentista receba o instrumento pronto para usar. A zona de transferência (mandíbula/queixo do paciente) evita movimento desnecessário do dentista.",
        B:"Abandonar o instrumento na bandeja e o dentista buscar interrompe o ritmo do procedimento e aumenta o tempo de trabalho.",
        C:"Entregar pela ponta ativa é perigoso — risco de acidente perfurocortante para o dentista.",
        D:"Instrumentos não devem ser jogados — risco de queda, contaminação e acidente."
      }
    }
  ],
  competencias:[7,8,8,9,8,7,7,8]
},

{
  id:"CC-27", titulo:"Reação vasovagal durante atendimento odontológico",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Urgência",
  contexto:`Paciente masculino, 22 anos, durante a anestesia para extração do siso. Após a injeção, o paciente relata tontura, náusea e visão escura. Ao exame: palidez, sudorese fria, pulso lento e fraco. PA: 85/50 mmHg. Está consciente mas muito sonolento. Sem histórico de cardiopatia.`,
  personagem:{nome:"Paciente com reação vasovagal",avatar:"paciente"},
  passos:[
    {
      fase:"Diagnóstico da emergência",
      pergunta:"Qual é o diagnóstico mais provável neste caso?",
      opcoes:[
        {letra:"A", texto:"Reação alérgica ao anestésico local (anafilaxia)"},
        {letra:"B", texto:"Síncope vasovagal (lipotímia) — a emergência mais comum no consultório odontológico"},
        {letra:"C", texto:"Hipoglicemia severa"},
        {letra:"D", texto:"Infarto agudo do miocárdio"}
      ],
      correta:"B",
      feedback:{
        A:"Anafilaxia cursaria com urticária, broncoespasmo, edema de laringe e hipotensão mais severa. Palidez e bradicardia são mais compatíveis com vasovagal.",
        B:"Correto. A síncope vasovagal é a emergência médica mais frequente em consultórios odontológicos. O quadro típico: ansiedade → estímulo vagal → bradicardia + vasodilatação periférica → hipoperfusão cerebral transitória → palidez, sudorese, náusea, tontura.",
        C:"Hipoglicemia cursaria com tremores, confusão, sudorese quente, e o paciente seria diabético.",
        D:"IAM cursaria com dor precordial irradiada, alterações no ECG, e o paciente seria mais velho com fatores de risco cardiovasculares."
      }
    },
    {
      fase:"Conduta imediata",
      pergunta:"Qual é a sequência correta de manejo da síncope vasovagal?",
      opcoes:[
        {letra:"A", texto:"Injetar adrenalina 1:1000 intramuscular imediatamente"},
        {letra:"B", texto:"Interromper o procedimento, reclinar a cadeira (Trendelenburg), elevar as pernas e monitorar sinais vitais"},
        {letra:"C", texto:"Chamar o SAMU e aguardar sem intervir"},
        {letra:"D", texto:"Administrar glicose oral imediatamente"}
      ],
      correta:"B",
      feedback:{
        A:"Adrenalina é indicada para anafilaxia — não para síncope vasovagal.",
        B:"Correto. Manejo da síncope vasovagal: interromper o procedimento, colocar o paciente em Trendelenburg (cabeça abaixo, pernas elevadas — melhora o retorno venoso cerebral), afrouxar roupas, monitorar PA e pulso. O paciente costuma se recuperar rapidamente.",
        C:"Na maioria dos casos de síncope vasovagal o SAMU não é necessário — o paciente se recupera com manejo postural.",
        D:"Glicose é para hipoglicemia. A síncope vasovagal não tem relação com glicemia."
      }
    }
  ],
  competencias:[9,9,9,8,8,7,7,9]
},

{
  id:"CC-28", titulo:"Controle de infecção — paciente com hepatite B",
  tipo:"multipla", modalidade:"multipla", complexidade:3, tempo:4, area:"Biossegurança e Controle de Infecção",
  contexto:`O dentista informa ao auxiliar que o próximo paciente, Sr. Marcelo, 50 anos, é portador de hepatite B e tem carga viral indetectável (controlada). O auxiliar precisa preparar a sala e adotar as precauções adequadas. Um colega auxiliar sugere: "Coloca ele para esperar o final do turno e joga tudo fora depois."`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Precauções para paciente com hepatite B",
      pergunta:"Qual é a conduta correta do auxiliar para o atendimento de um paciente com hepatite B?",
      opcoes:[
        {letra:"A",texto:"As precauções-padrão (EPI completo, esterilização dos instrumentais, descarte correto) são suficientes e as mesmas usadas para todos os pacientes — não há necessidade de tratamento diferenciado nem de discriminar o paciente"},
        {letra:"B",texto:"Usar EPI duplo (duas luvas, duas máscaras) e desinfetar a sala com produto especial após o atendimento"},
        {letra:"C",texto:"Encaminhar o paciente para clínica especializada — consultório geral não deve atender pacientes com hepatite B"},
        {letra:"D",texto:"Colocar o paciente no final do turno e descartar todos os instrumentais sem reutilizar"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. As precauções-padrão, se aplicadas corretamente a TODOS os pacientes, são suficientes para hepatite B. Carga viral indetectável tem risco praticamente zero de transmissão. Discriminar o paciente é antiético e viola o Código de Ética e a Lei Antidiscriminação.",
        B:"EPI duplo não tem respaldo científico e pode criar falsa sensação de segurança. As precauções-padrão corretas são a proteção adequada.",
        C:"Consultórios gerais atendem pacientes com hepatite B — não há contraindicação com precauções-padrão.",
        D:"Deixar para o final ou descartar instrumentais sem critério é discriminatório e aumenta custos sem justificativa técnica."
      }
    },
    {
      fase:"Resposta ao colega",
      pergunta:"Como o auxiliar deve responder ao colega que sugeriu tratamento discriminatório ao paciente?",
      opcoes:[
        {letra:"A",texto:"Explicar que as precauções-padrão são suficientes para todos os pacientes, que discriminar o paciente é antiético e ilegal, e se necessário comunicar ao dentista responsável"},
        {letra:"B",texto:"Concordar com o colega — melhor prevenir com excesso do que arriscar"},
        {letra:"C",texto:"Avisar ao paciente que o colega quis discriminá-lo"},
        {letra:"D",texto:"Ignorar — cada um trabalha do jeito que quiser"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. O auxiliar tem responsabilidade ética de corrigir práticas discriminatórias. A explicação técnica (precauções-padrão são suficientes) associada à orientação ética é a abordagem adequada. Persistindo a conduta, comunicar ao responsável.",
        B:"Concordar com discriminação é conivência — sujeito às mesmas sanções éticas.",
        C:"Comunicar ao paciente sem resolver internamente gera conflito e constrangimento desnecessários.",
        D:"Ignorar práticas antiéticas de colegas é omissão — o auxiliar é parte da equipe e tem responsabilidade coletiva."
      }
    }
  ],
  competencias:[7,8,8,8,10,8,7,10]
},

{
  id:"CC-29", titulo:"Preparo da bandeja para cirurgia periodontal",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Instrumentação e Biomateriais",
  contexto:`O dentista solicitou que o auxiliar prepare a bandeja para um procedimento de raspagem e alisamento radicular subgengival (RAR) com acesso cirúrgico simples no sextante inferior esquerdo. O dentista informará ao paciente sobre o procedimento.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Montagem da bandeja cirúrgica",
      pergunta:"Quais instrumentos devem compor a bandeja para a RAR cirúrgica?",
      opcoes:[
        {letra:"A",texto:"Espelho, sonda periodontal milimetrada, pinça, seringa Carpule + agulha + anestésico, bisturi + cabo, descoladores periostais (Molt 9 e/ou Freer), curetas Gracey (específicas por área), irrigação com soro, fio de sutura com agulha, porta-agulha, tesoura, gaze"},
        {letra:"B",texto:"Apenas curetas e sonda — o dentista não precisa de mais nada para raspagem"},
        {letra:"C",texto:"Fórceps e alavancas — toda cirurgia odontológica usa os mesmos instrumentos"},
        {letra:"D",texto:"Bandeja de restauração com resina — o dentista vai restaurar o dente depois de raspar"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. RAR com acesso cirúrgico inclui: anestesia (Carpule + agulha + anestésico), incisão (bisturi), descolamento (descoladores), instrumentação periodontal (curetas Gracey específicas por área), irrigação, e sutura (fio + porta-agulha + tesoura). O auxiliar deve antecipar todo o instrumental.",
        B:"Com acesso cirúrgico, o procedimento exige incisão, descolamento e sutura — não apenas curetas.",
        C:"Fórceps e alavancas são para exodontia — não têm nenhuma aplicação em cirurgia periodontal.",
        D:"RAR é procedimento periodontal, não restaurador."
      }
    },
    {
      fase:"Durante o procedimento",
      pergunta:"Durante a sutura, o dentista pede para o auxiliar segurar o retalho com o descolador enquanto ele passa o fio. O que o auxiliar deve fazer?",
      opcoes:[
        {letra:"A",texto:"Segurar o descolador com firmeza e delicadeza na posição indicada pelo dentista, manter o campo seco com gaze/aspiração e acompanhar o ritmo do procedimento sem movimentos bruscos"},
        {letra:"B",texto:"Recusar — auxiliar não pode tocar no campo cirúrgico"},
        {letra:"C",texto:"Segurar com a mão enluvada diretamente no tecido sem instrumento"},
        {letra:"D",texto:"Afastar para ver melhor e esperar o dentista terminar sozinho"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. O auxiliar cirúrgico tem papel ativo no campo operatório. Segurar retratores, manter o campo seco e acompanhar o dentista são funções específicas do auxiliar em procedimentos cirúrgicos.",
        B:"O auxiliar de saúde bucal tem atribuição legal de auxiliar em procedimentos cirúrgicos usando instrumental — é parte do seu escopo de atuação.",
        C:"Toque direto do auxiliar no tecido sem instrumento adequado compromete a biossegurança.",
        D:"Recuar durante a sutura compromete a visibilidade do dentista e a qualidade do procedimento."
      }
    }
  ],
  competencias:[7,8,8,9,9,7,7,8]
},

{
  id:"CC-30", titulo:"Descarte de resíduos com amálgama — risco do mercúrio",
  tipo:"multipla", modalidade:"multipla", complexidade:3, tempo:4, area:"Biossegurança e Controle de Infecção",
  contexto:`O dentista removeu uma restauração antiga de amálgama do dente 47. Ao final do procedimento, há fragmentos de amálgama na bandeja, no sugador e nos instrumentais. O auxiliar precisa fazer o descarte correto. A clínica tem um frasco coletor de amálgama de mercúrio no armário.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Descarte do amálgama",
      pergunta:"Como o auxiliar deve fazer o descarte correto dos resíduos de amálgama?",
      opcoes:[
        {letra:"A",texto:"Coletar os fragmentos de amálgama em frasco coletor específico com tampa vedada (under water — submerso em água ou glicerina para evitar volatilização do mercúrio), armazenar em local ventilado e encaminhar para empresa licenciada de gerenciamento de resíduos de mercúrio"},
        {letra:"B",texto:"Jogar no lixo comum — amálgama antigo já não tem mercúrio livre"},
        {letra:"C",texto:"Descartar no lixo infectante (saco branco) junto com gazes contaminadas"},
        {letra:"D",texto:"Jogar na pia — a água vai diluir e não causa problema"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Amálgama dental contém 50% de mercúrio que pode se volatilizar. O descarte correto exige frasco coletor específico com água ou glicerina (impede volatilização), armazenamento adequado e coleta por empresa especializada. Exigência da Resolução CONAMA 358/2005 e RDC 222/2018.",
        B:"Amálgama de qualquer idade contém mercúrio. Descarte em lixo comum contamina solo e água.",
        C:"O saco infectante não é adequado para resíduos químicos como mercúrio — são categorias diferentes.",
        D:"Mercúrio no esgoto contamina a cadeia hídrica e é bioacumulável em organismos aquáticos — proibido por lei."
      }
    },
    {
      fase:"Segurança pessoal durante manipulação",
      pergunta:"Ao limpar o sugador com fragmentos de amálgama, o auxiliar deve:",
      opcoes:[
        {letra:"A",texto:"Usar luvas grossas, máscara e operar em área ventilada. Não usar aquecimento ou compressão no amálgama (libera vapor de mercúrio). Coletar os fragmentos com colher ou espátula, nunca com as mãos nuas"},
        {letra:"B",texto:"Limpar com pano seco sem EPI — o amálgama já foi removido da boca, não tem mais risco"},
        {letra:"C",texto:"Usar secador de cabelo para facilitar a limpeza dos fragmentos do sugador"},
        {letra:"D",texto:"Jogar água quente para dissolver os fragmentos mais facilmente"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Vapor de mercúrio é neurotóxico. Qualquer ação que aqueça o amálgama (secador, água quente, autoclave sem coletor) aumenta a volatilização. Luvas e ventilação são proteções básicas. Fragmentos nunca devem ser manipulados com as mãos.",
        B:"Fragmentos de amálgama fora da boca continuam contendo mercúrio que pode contaminar a pele e ser inalado.",
        C:"Calor do secador volatiliza o mercúrio — risco grave de intoxicação por inalação.",
        D:"Água quente tem o mesmo problema — aumenta a volatilização do mercúrio."
      }
    }
  ],
  competencias:[7,7,8,8,10,7,7,9]
},

{
  id:"CC-31", titulo:"Auxílio em exodontia — aspiração e compressa",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Ergonomia e Auxílio Clínico",
  contexto:`O dentista está realizando a extração do dente 38 (siso inferior). Durante o procedimento cirúrgico, há sangramento moderado e o campo operatório fica com pouca visibilidade. O dentista solicita ao auxiliar: "Aspira e me segura a compressa aí."`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Técnica de aspiração",
      pergunta:"Qual é a técnica correta de aspiração durante a cirurgia?",
      opcoes:[
        {letra:"A",texto:"Posicionar a cânula de aspiração na periferia do campo, nunca obstruindo a visão do dentista, aspirar o sangue e saliva continuamente, mantendo o campo limpo, sem tocar nos tecidos moles com a ponta do sugador"},
        {letra:"B",texto:"Aspirar apenas quando o dentista pedir — segurar o sugador parado na boca para não atrapalhar"},
        {letra:"C",texto:"Colocar o sugador diretamente sobre o alvéolo para aspirar o sangramento"},
        {letra:"D",texto:"Usar compressa para secar o campo em vez do sugador — é mais eficiente"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A aspiração contínua e periférica ao campo operatório mantém a visibilidade sem interferir nos movimentos do dentista. A ponta não deve tocar diretamente no alvéolo — pode comprometer o coágulo em formação.",
        B:"Aspiração passiva não mantém o campo limpo — o dentista perde visibilidade.",
        C:"Aspirar diretamente sobre o alvéolo pode remover o coágulo em formação e prolongar o sangramento.",
        D:"Compressa e aspiração têm funções complementares — a compressa pressiona para hemostasia após o procedimento, o sugador aspira fluidos durante."
      }
    },
    {
      fase:"Após a extração",
      pergunta:"O dente foi removido. O dentista pede para o auxiliar preparar a compressa para hemostasia. O que o auxiliar faz?",
      opcoes:[
        {letra:"A",texto:"Dobrar a gaze em 4 (formando almofada firme), umedecida levemente se necessário, e entregar ao dentista para posicionar sobre o alvéolo. Orientar a paciente a morder com pressão constante por 30-60 minutos"},
        {letra:"B",texto:"Entregar a gaze aberta e dobrada em 1 camada — ocupa mais espaço e faz mais pressão"},
        {letra:"C",texto:"Enrolar a gaze em bolinhas pequenas e colocar várias dentro do alvéolo"},
        {letra:"D",texto:"Cobrir o alvéolo com algodão — é mais absorvente que gaze"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A compressa de gaze dobrada em 4 cria pressão localizada sobre o alvéolo. A pressão constante pelo paciente é fundamental para a hemostasia. O auxiliar orienta o paciente sobre a técnica correta.",
        B:"Gaze em camada única é menos eficaz para pressão e absorção.",
        C:"Bolinhas soltas não fazem pressão adequada e podem se desprender e ser engolidas.",
        D:"Algodão adere ao coágulo e pode removê-lo ao ser retirado — contraindicado para compressa de hemostasia."
      }
    }
  ],
  competencias:[7,8,8,9,9,7,7,8]
},

{
  id:"CC-32", titulo:"Esterilização vs desinfecção — quando usar cada nível",
  tipo:"multipla", modalidade:"multipla", complexidade:3, tempo:4, area:"Biossegurança e Controle de Infecção",
  contexto:`O auxiliar precisa processar os seguintes itens ao final do turno: brocas (alta e baixa rotação), espelhos clínicos, sonda periodontal, goteira de clareamento de plástico duro do paciente, mocho do dentista, tampo da bancada e fotopolimerizador. Ele precisa decidir qual processo é adequado para cada item.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Classificação dos itens",
      pergunta:"Segundo a classificação de Spaulding, como classificar esses artigos e qual processamento cada um exige?",
      opcoes:[
        {letra:"A",texto:"Brocas, espelhos, sonda → críticos (penetram tecido) → esterilização obrigatória. Goteira do paciente → semicrítico (contato com mucosa) → desinfecção de alto nível ou esterilização. Mocho, bancada → não-críticos (superfície) → desinfecção de nível intermediário. Fotopolimerizador → barreira protetora + desinfecção"},
        {letra:"B",texto:"Todos os itens vão para a autoclave — é mais seguro generalizar a esterilização"},
        {letra:"C",texto:"Álcool 70% em todos os itens — é prático e suficiente para todos"},
        {letra:"D",texto:"Apenas brocas e instrumentos cortantes precisam de cuidado; o restante pode ser limpo com água"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A classificação de Spaulding define o processamento pelo risco de infecção: críticos (penetram tecido estéril) exigem esterilização; semicríticos (contato com mucosa) exigem no mínimo desinfecção de alto nível; não-críticos (superfícies) exigem desinfecção de nível intermediário. Fotopolimerizador usa barreira + desinfecção da ponteira.",
        B:"Autoclave de tudo causa dano em artigos sensíveis ao calor (goteira de plástico mole, alguns componentes eletrônicos) e é desnecessário para superfícies.",
        C:"Álcool 70% é desinfetante de nível intermediário — insuficiente para artigos críticos e para alguns semicríticos.",
        D:"Água sem produto desinfetante não é processamento adequado para nenhum artigo odontológico."
      }
    },
    {
      fase:"Aplicação prática",
      pergunta:"A goteira de clareamento de plástico duro foi retornada pelo paciente. O que o auxiliar deve fazer?",
      opcoes:[
        {letra:"A",texto:"Lavar com escova e sabão neutro para remover resíduos, desinfetar por imersão em solução de ácido peracético ou glutaraldeído 2% pelo tempo recomendado (desinfecção de alto nível), enxaguar em água estéril ou filtrada e embalar para devolver ao paciente"},
        {letra:"B",texto:"Lavar com água e secar — a goteira é individual e o paciente que sabe se quer mais cuidado"},
        {letra:"C",texto:"Autoclavar a 134°C — toda goteira pode ir na autoclave"},
        {letra:"D",texto:"Descartar a goteira e fazer uma nova — não vale o trabalho de processar"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A goteira é semicrítica (contato com mucosa oral). Desinfecção de alto nível com glutaraldeído 2% (30 min) ou ácido peracético elimina bactérias, vírus e a maioria dos esporos. Enxágue em água estéril evita recontaminação.",
        B:"Lavagem simples não garante eliminação de agentes patogênicos — artigo semicrítico exige desinfecção de alto nível.",
        C:"Goteiras de plástico não suportam autoclave a 134°C — deformam e tornam-se inutilizáveis.",
        D:"Goteiras são confeccionadas sob medida e têm custo — o processamento correto preserva o artigo com segurança."
      }
    }
  ],
  competencias:[7,8,8,9,10,7,7,8]
},

{
  id:"CC-33", titulo:"Comunicação de intercorrência ao dentista responsável",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Comunicação e Humanização",
  contexto:`O auxiliar está organizando a sala entre atendimentos quando o paciente da cadeira (que ficou sozinho por 2 minutos enquanto o dentista foi ao banheiro) chama e diz que está com dor intensa e formigamento no braço. O auxiliar fica com o paciente e o dentista retorna em seguida.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Comunicação ao dentista",
      pergunta:"Como o auxiliar deve comunicar a situação ao dentista que retorna?",
      opcoes:[
        {letra:"A",texto:"\"Dentista, o Sr. José relatou dor intensa e formigamento no braço esquerdo há cerca de 2 minutos, após você sair. Ele está consciente e com PA que medi: 160/100. Achei importante informar antes de continuar.\""},
        {letra:"B",texto:"\"O paciente está reclamando de alguma coisa, acho que é o anestésico\" — sem informações precisas"},
        {letra:"C",texto:"Esperar o paciente relatar pessoalmente ao dentista sem comunicar antes"},
        {letra:"D",texto:"Chamar o SAMU diretamente sem consultar o dentista"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Comunicação precisa de intercorrência: sintoma específico (dor + formigamento no braço esquerdo), tempo de início, dados objetivos (PA) e alerta antes de retomar o procedimento. Dor no peito irradiando para o braço esquerdo é sinal clássico de síndrome coronariana — o dentista deve avaliar imediatamente.",
        B:"Informação vaga dificulta a tomada de decisão do dentista.",
        C:"Aguardar o paciente relatar pode atrasar a decisão clínica em uma potencial emergência.",
        D:"Acionar SAMU sem consultar o dentista é ultrapassar a competência do auxiliar — o dentista conduz a emergência."
      }
    },
    {
      fase:"Documentação da intercorrência",
      pergunta:"Após o episódio ser resolvido (o dentista avaliou e encaminhou o paciente para avaliação cardiológica), o auxiliar deve:",
      opcoes:[
        {letra:"A",texto:"Registrar no prontuário a intercorrência com horário, sintomas relatados, dados de PA, conduta do dentista e encaminhamento realizado — o registro é parte do cuidado e proteção legal"},
        {letra:"B",texto:"Não registrar — pode gerar processo para a clínica"},
        {letra:"C",texto:"Registrar apenas que o paciente passou mal, sem detalhes, para não complicar"},
        {letra:"D",texto:"O registro é responsabilidade exclusiva do dentista — o auxiliar não anota intercorrências"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. O registro completo de intercorrências protege o paciente (continuidade do cuidado) e a equipe (documentação de conduta adequada). Omitir ou registrar de forma vaga é tanto antiético quanto juridicamente arriscado.",
        B:"Não registrar não protege a clínica — pelo contrário, a ausência de registro em caso de complicação posterior é evidência contra a equipe.",
        C:"Registro incompleto não serve como documentação adequada do ocorrido.",
        D:"Auxiliares contribuem para o prontuário com dados como sinais vitais aferidos e relatos observados — dentro do seu escopo."
      }
    }
  ],
  competencias:[9,8,9,8,8,8,7,9]
},

{
  id:"CC-34", titulo:"Xerostomia — causas e manejo",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Medicina Bucal",
  contexto:`Paciente feminina, 62 anos, queixa de boca seca constante há 1 ano, dificuldade de engolir alimentos secos e múltiplas cáries cervicais novas. Ao exame: mucosa ressecada, saliva espessa, múltiplas raízes cariadas. Faz uso de: amitriptilina (depressão), atenolol (hipertensão), hidroclorotiazida e lorazepam (ansiedade).`,
  personagem:{nome:"Paciente com xerostomia",avatar:"paciente"},
  passos:[
    {
      fase:"Etiologia",
      pergunta:"Qual é a causa mais provável de xerostomia neste caso?",
      opcoes:[
        {letra:"A", texto:"Síndrome de Sjögren — doença autoimune que acomete glândulas salivares"},
        {letra:"B", texto:"Polifarmácia com múltiplos medicamentos xerogênicos"},
        {letra:"C", texto:"Diabetes descompensado com hiperglicemia severa"},
        {letra:"D", texto:"Ansiedade isolada sem causa orgânica"}
      ],
      correta:"B",
      feedback:{
        A:"Síndrome de Sjögren é possível, mas o quadro com múltiplos medicamentos xerogênicos é mais provável como causa primária.",
        B:"Correto. Amitriptilina (antidepressivo tricíclico), atenolol, hidroclorotiazida e lorazepam são todos medicamentos com propriedade anticolinérgica ou xerogênica. A combinação potencializa a redução do fluxo salivar.",
        C:"Diabetes pode causar xerostomia, mas o quadro farmacológico é muito mais evidente.",
        D:"Ansiedade pode reduzir discretamente a saliva — não justifica o quadro severo aqui."
      }
    },
    {
      fase:"Manejo odontológico",
      pergunta:"Qual é o conjunto de medidas odontológicas mais indicado para esta paciente?",
      opcoes:[
        {letra:"A", texto:"Extrair todos os dentes cariados e instalar prótese total"},
        {letra:"B", texto:"Flúor de alta concentração + saliva artificial + orientação de hidratação + tratar cáries ativas + comunicar médico sobre medicamentos xerogênicos"},
        {letra:"C", texto:"Apenas aplicar flúor verniz semestral sem outras medidas"},
        {letra:"D", texto:"Suspender todos os medicamentos por conta própria para resolver a xerostomia"}
      ],
      correta:"B",
      feedback:{
        A:"Extração não é a abordagem para xerostomia — a causa deve ser tratada.",
        B:"Correto. Gestão multidisciplinar: dentista aplica flúor de alta concentração para proteger raízes expostas, prescreve saliva artificial, orienta hidratação frequente e mastiga chiclete sem açúcar para estimular a saliva residual. O médico deve ser comunicado para avaliar substituição dos medicamentos xerogênicos.",
        C:"Flúor isolado sem outras medidas é insuficiente para o quadro.",
        D:"Suspender medicamentos sem orientação médica pode causar crises de depressão, hipertensão ou ansiedade."
      }
    }
  ],
  competencias:[8,8,8,8,7,7,7,9]
},

{
  id:"CC-35", titulo:"Urgência pediátrica — abscesso em dente decíduo",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Odontopediatria",
  contexto:`Paciente feminina, 4 anos, trazida pela mãe com queixa de dor intensa e inchaço na gengiva superior esquerda há 2 dias. Ao exame: abscesso gengival sobre o dente 64 (segundo pré-molar decíduo superior esquerdo), fístula ativa, cárie extensa, mobilidade grau II. Temperatura: 37,2°C. Sem alergias. Peso: 16 kg.`,
  personagem:{nome:"Criança com abscesso",avatar:"paciente"},
  passos:[
    {
      fase:"Indicação de tratamento",
      pergunta:"Qual é a decisão clínica mais adequada para o dente 64 neste caso?",
      opcoes:[
        {letra:"A", texto:"Pulpotomia + restauração imediata na mesma sessão"},
        {letra:"B", texto:"Exodontia do dente 64 — cárie extensa, fístula, mobilidade grau II indica mau prognóstico"},
        {letra:"C", texto:"Apenas prescrever antibiótico e remarcar para após 7 dias"},
        {letra:"D", texto:"Iniciar pulpectomia sem anestesia para evitar medicamentos"}
      ],
      correta:"B",
      feedback:{
        A:"Dente com fístula, mobilidade grau II e cárie extensa não tem prognóstico favorável para pulpotomia.",
        B:"Correto. Os critérios de extração em dente decíduo incluem: fístula ativa, mobilidade patológica grau II-III, reabsorção radicular interna ou externa avançada, e cárie irrestaurável. O dente 64 preenche múltiplos critérios.",
        C:"Antibiótico isolado sem eliminar o foco infeccioso não resolve o abscesso e pode permitir progressão.",
        D:"Toda intervenção odontológica invasiva em criança requer anestesia adequada — há obrigação ética."
      }
    },
    {
      fase:"Manejo pós-extração",
      pergunta:"Após a extração do dente 64 em criança de 4 anos, qual conduta é necessária para preservar o espaço do sucessor permanente?",
      opcoes:[
        {letra:"A", texto:"Nenhuma — dentes decíduos anteriores ao molar permanente não precisam de mantenedor de espaço"},
        {letra:"B", texto:"Instalar mantenedor de espaço (bandas com alça ou removível) — o dente 24 ainda está a anos de irromper"},
        {letra:"C", texto:"Extrair o dente contralateral (dente 54) para manter a simetria"},
        {letra:"D", texto:"Instalar implante dentário imediato para manter o espaço"}
      ],
      correta:"B",
      feedback:{
        A:"A extração precoce de molares decíduos causa migração dos dentes adjacentes e perda de espaço para o permanente.",
        B:"Correto. Com a extração prematura do dente 64, o espaço para o dente 24 (pré-molar permanente que irrompe por volta dos 11-12 anos) deve ser mantido com mantenedor de espaço. É uma conduta preventiva indispensável.",
        C:"Extrair dente saudável contralateral é conduta eticamente inadequada.",
        D:"Implantes em crianças em crescimento são contraindicados — o osso ainda está em desenvolvimento."
      }
    }
  ],
  competencias:[8,8,8,9,8,8,7,9]
},

{
  id:"CC-36", titulo:"Sequência de limpeza e preparo da sala entre pacientes",
  tipo:"multipla", modalidade:"multipla", complexidade:3, tempo:4, area:"Biossegurança e Controle de Infecção",
  contexto:`O atendimento terminou. O paciente saiu. A sala precisa ser preparada para o próximo atendimento em 15 minutos. Na sala há: instrumental usado na bandeja, barreiras protetoras (plástico) em superfícies, escarro de sangue na saboneteira, equipamentos (cadeira, mocho, refletor) e materiais descartados (gaze, luva, agulha).`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Sequência de limpeza da sala",
      pergunta:"Qual é a sequência correta para o preparo da sala entre atendimentos?",
      opcoes:[
        {letra:"A",texto:"1) Com EPI completo: retirar barreiras plásticas e descartar; 2) Encaminhar instrumental à área de processamento; 3) Limpar escarro com papel + produto desinfetante; 4) Desinfetar superfícies (cadeira, mocho, refletor, bancada) com álcool 70% ou quaternário de amônio; 5) Colocar novas barreiras protetoras; 6) Repor materiais; 7) Remover EPI e higienizar as mãos"},
        {letra:"B",texto:"Colocar novas barreiras por cima das antigas — economiza tempo"},
        {letra:"C",texto:"Apenas varrer o chão e tirar o lixo — as superfícies não precisam de desinfecção rotineira"},
        {letra:"D",texto:"Desinfetar primeiro e depois retirar as barreiras — para não sujar as superfícies limpas"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A sequência do sujo para o limpo é o princípio básico. Remover barreiras (que estão contaminadas) → processar instrumental → limpar contaminações visíveis → desinfetar → rebarrar → repor materiais. EPI durante todo o processo de limpeza, removido ao final.",
        B:"Acumular barreiras sem trocar compromete a proteção — a barreira nova sobre a antiga não elimina a contaminação embaixo.",
        C:"Superfícies clínicas são contaminadas por aerossóis e respingos durante todo o procedimento — desinfecção entre pacientes é obrigatória.",
        D:"Desinfetar antes de retirar as barreiras não elimina a contaminação sob as barreiras — a sequência correta é remover primeiro."
      }
    },
    {
      fase:"Desinfecção do equipamento",
      pergunta:"Para desinfetar a cadeira odontológica (encosto, braços, apoio de cabeça), o auxiliar deve:",
      opcoes:[
        {letra:"A",texto:"Aplicar álcool 70% com papel absorvente, friccionando ativamente por pelo menos 30 segundos, aguardar a superfície secar completamente antes de recolocar a barreira protetora"},
        {letra:"B",texto:"Borrifar álcool e não secar — o acúmulo de líquido aumenta o tempo de contato e melhora a desinfecção"},
        {letra:"C",texto:"Passar pano úmido com água apenas — o álcool pode danificar o couro da cadeira"},
        {letra:"D",texto:"Usar somente hipoclorito de sódio nas superfícies da cadeira"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A ação mecânica (fricção) associada ao álcool 70% é fundamental para a eficácia da desinfecção. O álcool precisa secar completamente para agir (tempo de contato). Aplicar e deixar úmido sem fricção tem eficácia reduzida.",
        B:"Borrifar sem frição reduz a ação mecânica que remove contaminantes. O excesso de líquido não melhora a desinfecção.",
        C:"Água sem desinfetante não elimina patógenos — apenas remove sujidade visível.",
        D:"Hipoclorito pode corroer superfícies metálicas e degradar o couro/vinil da cadeira — não é indicado para esse substrato."
      }
    }
  ],
  competencias:[7,8,8,8,10,7,7,9]
},

{
  id:"CC-37", titulo:"Auxílio em sutura — material e papel do auxiliar",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Instrumentação e Biomateriais",
  contexto:`O dentista vai realizar sutura após exodontia múltipla no quadrante inferior direito. O auxiliar precisa preparar o material de sutura e auxiliar durante o procedimento. O dentista usa fio de nylon 4-0 agulhado com agulha triangular e porta-agulha Mathieu.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Preparo do material de sutura",
      pergunta:"Como o auxiliar deve preparar e entregar o porta-agulha com o fio para o dentista?",
      opcoes:[
        {letra:"A",texto:"Abrir a embalagem do fio de forma asséptica, montar a agulha no porta-agulha a 2/3 do comprimento (não na ponta nem no cabo), fechar o trinco e entregar ao dentista pela parte do cabo (não pela agulha)"},
        {letra:"B",texto:"Entregar a embalagem fechada para o dentista abrir e montar sozinho"},
        {letra:"C",texto:"Segurar a agulha com a mão enluvada e entregar diretamente ao dentista"},
        {letra:"D",texto:"Montar a agulha bem na ponta do porta-agulha para maior controle do dentista"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A agulha posicionada a 2/3 do comprimento (na curvatura) dá melhor controle durante a sutura. Entregar pelo cabo preserva a posição e evita acidente perfurocortante. O auxiliar deve abrir a embalagem de forma asséptica (sem contaminar o fio estéril).",
        B:"Entregar embalagem fechada durante procedimento cirúrgico atrasa e rompe o ritmo da sutura.",
        C:"Entregar a agulha com a mão é risco máximo de acidente perfurocortante.",
        D:"Agulha na ponta do porta-agulha escorrega durante a passagem pelo tecido e compromete a sutura."
      }
    },
    {
      fase:"Durante e após a sutura",
      pergunta:"Após a sutura ser completada, o auxiliar deve:",
      opcoes:[
        {letra:"A",texto:"Cortar o fio quando solicitado pelo dentista (a 2-3mm do nó), aspirar o campo, preparar a compressa de hemostasia e orientar o paciente sobre os cuidados com a sutura e data de remoção"},
        {letra:"B",texto:"Não cortar o fio — deixar o dentista fazer tudo para não errar a medida"},
        {letra:"C",texto:"Cortar o mais rente possível ao nó para não restar fio que possa incomodar"},
        {letra:"D",texto:"Só orientar o paciente se o dentista estiver ocupado"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Cortar a 2-3mm preserva o nó sem comprometer a aparência. Aspiração limpa o campo para inspeção final do dentista. A orientação pós-operatória (cuidados com a sutura, quando voltar para remoção) é parte das atribuições do auxiliar.",
        B:"Cortar o fio após sutura é atribuição do auxiliar — faz parte do procedimento a 4 mãos.",
        C:"Cortar rente ao nó pode soltar a sutura se o nó deslizar.",
        D:"A orientação pós-operatória não é condicional — é responsabilidade do auxiliar em todos os atendimentos."
      }
    }
  ],
  competencias:[7,8,8,9,9,7,7,8]
},

{
  id:"CC-38", titulo:"Documentação de acidente ocupacional — CAT",
  tipo:"multipla", modalidade:"multipla", complexidade:3, tempo:4, area:"Ética e Profissionalismo",
  contexto:`A auxiliar Fernanda sofreu um acidente perfurocortante com agulha após atendimento a um paciente com HIV positivo declarado. Ela estava retampando a agulha (recapping) quando se picou no dedo. Após primeiros socorros (lavagem abundante e notificação ao dentista), ela fica em dúvida sobre o que fazer a seguir.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Procedimentos após acidente perfurocortante",
      pergunta:"Além dos primeiros socorros, quais são os próximos passos obrigatórios após o acidente?",
      opcoes:[
        {letra:"A",texto:"Emitir a CAT (Comunicação de Acidente de Trabalho) no dia do acidente, ir a serviço de saúde para avaliação, sorologia basal do paciente-fonte (com consentimento) e coleta de sangue da auxiliar, avaliação de profilaxia pós-exposição (PEP) com antirretrovirais (idealmente até 2 horas após o acidente)"},
        {letra:"B",texto:"Aguardar 3 meses para fazer exame de HIV — se aparecer algum sintoma, então ir ao médico"},
        {letra:"C",texto:"Não há necessidade de CAT para acidente com perfurocortante em serviço odontológico"},
        {letra:"D",texto:"Tomar antibiótico por conta própria e observar a ferida por alguns dias"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. O protocolo pós-exposição ocupacional é urgente: CAT imediata (direito trabalhista + notificação compulsória), avaliação médica precoce para PEP (janela ideal de 2h, máximo 72h), sorologia basal de ambos (base para acompanhamento). A PEP reduz drasticamente o risco de soroconversão para HIV.",
        B:"Aguardar 3 meses sem PEP e sem acompanhamento é perigoso — a janela para a profilaxia já teria passado.",
        C:"CAT é obrigatória para qualquer acidente de trabalho com afastamento ou risco potencial de adoecimento — perfurocortante com fonte HIV+ se enquadra.",
        D:"Antibiótico não tem ação contra HIV. Automedicação não substitui avaliação médica especializada."
      }
    },
    {
      fase:"Prevenção de novos acidentes",
      pergunta:"A causa do acidente foi o recapping (retampar a agulha). Como esse acidente poderia ter sido prevenido?",
      opcoes:[
        {letra:"A",texto:"Nunca reencapar agulha usada com as duas mãos. A única técnica aceitável é o recapping com uma mão (técnica da colher/scoop). Idealmente, não reencapar e descartar diretamente no coletor de perfurocortante"},
        {letra:"B",texto:"Reencapar com mais cuidado e devagar — o problema foi a pressa"},
        {letra:"C",texto:"Usar luvas mais grossas para reencapar com segurança"},
        {letra:"D",texto:"Pedir ao dentista que descarte as agulhas — auxiliar não deve manusear agulhas usadas"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Recapping com duas mãos é a principal causa de acidentes perfurocortantes em saúde. A norma NR-32 e as diretrizes do MS determinam que agulhas não devem ser reencapadas com as duas mãos. O descarte direto no coletor após o uso é a prática mais segura.",
        B:"Cuidado e velocidade não eliminam o risco do recapping com duas mãos — a técnica em si é o problema.",
        C:"Luvas de procedimento não protegem contra perfuração — a prevenção está na técnica, não no EPI.",
        D:"O auxiliar manuseia agulhas durante o atendimento — a questão é a técnica segura, não a eliminação do manuseio."
      }
    }
  ],
  competencias:[7,8,8,8,10,7,7,10]
},

{
  id:"CC-39", titulo:"Preparo de materiais para moldagem de prótese",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Instrumentação e Biomateriais",
  contexto:`O dentista vai realizar uma moldagem funcional para prótese total em um paciente edêntulo. O material escolhido é o alginato para a moldagem de estudo e pasta zincoenólica (ZOE) para a moldagem funcional. O auxiliar precisa preparar os materiais para as duas etapas.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Preparo da pasta ZOE",
      pergunta:"Como o auxiliar deve preparar a pasta zinco-enólica (ZOE) para a moldagem funcional?",
      opcoes:[
        {letra:"A",texto:"Dispensar proporções iguais de pasta base e pasta catalisadora no bloco de papel, espatular com espátula rígida fazendo movimentos de incorporação circulares + lineares até obter cor e consistência uniformes (sem estrias), em superfície fria para retardar a presa se necessário"},
        {letra:"B",texto:"Misturar em seringa com mais base do que catalisador — fica mais suave e fácil de inserir"},
        {letra:"C",texto:"Aquecer levemente a pasta base para ela ficar mais fluida e fácil de manipular"},
        {letra:"D",texto:"ZOE não precisa de proporção específica — misturar até parecer homogêneo"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. A proporção 1:1 (base:catalisador) é fundamental para a reação de presa adequada. Espatulação com movimentos de incorporação e espalhamento elimina estrias. Superfície fria (placa de vidro gelada) retarda a presa e aumento o tempo de trabalho em ambiente quente.",
        B:"Alterar a proporção afeta a viscosidade, o tempo de presa e a precisão da moldagem.",
        C:"Calor acelera drasticamente a presa da ZOE — o material pode endurecer antes de ser inserido.",
        D:"Proporção incorreta pode resultar em material muito duro (excesso de catalisador) ou que não endurece (excesso de base)."
      }
    },
    {
      fase:"Higienização das moldeiras",
      pergunta:"As moldeiras individuais usadas na moldagem são de plástico rígido e serão reutilizadas. Como devem ser processadas?",
      opcoes:[
        {letra:"A",texto:"Remover os resíduos do material de moldagem, lavar com escova e sabão, desinfetar em solução de glutaraldeído 2% ou ácido peracético (desinfecção de alto nível), enxaguar e armazenar limpa para o próximo uso"},
        {letra:"B",texto:"Passar álcool 70% e guardar — moldeiras de plástico não precisam de cuidado especial"},
        {letra:"C",texto:"Autoclavar a 134°C — é o processo mais confiável"},
        {letra:"D",texto:"Descartar após cada uso — moldeiras individuais são para uso único"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Moldeiras rígidas reprocessáveis são artigos semicríticos (contato com mucosa). Exigem desinfecção de alto nível. Remoção completa do material de moldagem antes da desinfecção é essencial — resíduos podem inativar o desinfetante.",
        B:"Álcool 70% é desinfetante de nível intermediário — insuficiente para artigos semicríticos.",
        C:"Moldeiras de plástico rígido podem deformar ou rachar na autoclave a 134°C.",
        D:"Moldeiras individuais reprocessáveis são confeccionadas para reutilização — o descarte seria desperdício sem justificativa técnica."
      }
    }
  ],
  competencias:[7,8,8,9,9,7,7,8]
},

{
  id:"CC-40", titulo:"Paciente pede procedimento que é competência exclusiva do dentista",
  tipo:"multipla", modalidade:"multipla", complexidade:3, tempo:4, area:"Ética e Profissionalismo",
  contexto:`O dentista saiu para uma emergência e pediu ao auxiliar para esperar o consultório com os pacientes agendados. Um paciente, Sr. Paulo, 55 anos, chega para extração e diz: "Meu dente está doendo muito. Você não pode tirar enquanto o dentista não chega? Vi um vídeo na internet de auxiliar fazendo extração." O auxiliar está sozinho.`,
  personagem:{nome:"Auxiliar de saúde bucal",avatar:"auxiliar"},
  passos:[
    {
      fase:"Limite de competência",
      pergunta:"Como o auxiliar deve responder ao pedido do Sr. Paulo?",
      opcoes:[
        {letra:"A",texto:"Explicar com empatia que extração é procedimento exclusivo do dentista (Lei 5.081/66), que realizar o procedimento sem habilitação seria ilegal e colocaria o paciente em risco, e que vai verificar a previsão de chegada do dentista para minimizar a espera"},
        {letra:"B",texto:"Tentar fazer a extração — o paciente está sofrendo e autorizou"},
        {letra:"C",texto:"Aplicar anestesia e deixar tudo pronto para quando o dentista chegar"},
        {letra:"D",texto:"Dizer ao paciente que não pode ajudar de nenhuma forma e que ele deve ir embora"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Extração dental é ato privativo do cirurgião-dentista (Lei 5.081/66). Realizá-la sem habilitação configura exercício ilegal da odontologia e coloca o paciente em risco. O auxiliar deve ser empático, explicar os limites legais e buscar minimizar o desconforto dentro do seu escopo.",
        B:"Autorização do paciente não confere habilitação ao auxiliar — exercício ilegal é crime independentemente do consentimento.",
        C:"Anestesia local também é ato privativo do dentista — igualmente vedado ao auxiliar.",
        D:"Dizer que não pode ajudar de nenhuma forma é descuidado. O auxiliar pode orientar o paciente, verificar com o dentista e oferecer o que está no seu escopo (posicionar, conversar, medir PA)."
      }
    },
    {
      fase:"Conduta dentro do escopo",
      pergunta:"O dentista informa que chegará em 30 minutos. O que o auxiliar pode fazer pelo Sr. Paulo nesse intervalo?",
      opcoes:[
        {letra:"A",texto:"Acolher o paciente, medir a pressão arterial, anotar os dados no prontuário, oferecer água e orientar que o dentista chegará em 30 minutos — isso é acolhimento dentro do escopo do auxiliar"},
        {letra:"B",texto:"Dar um analgésico ao paciente para aliviar a dor enquanto espera"},
        {letra:"C",texto:"Deixar o paciente sozinho na sala de espera sem interação — o auxiliar não tem nada para fazer até o dentista chegar"},
        {letra:"D",texto:"Examinar o dente com sonda e explorador para ter o diagnóstico pronto quando o dentista chegar"}
      ],
      correta:"A",
      feedback:{
        A:"Correto. Acolhimento, sinais vitais e registro são atribuições do auxiliar. Receber o paciente com atenção, medir PA e anotar já agrega valor ao atendimento e prepara informações para o dentista.",
        B:"Indicar medicamento é prescrição — ato privativo do dentista. Auxiliar não pode indicar dose ou tipo de analgésico.",
        C:"Deixar o paciente ansioso e com dor sem acolhimento é abandono — incompatível com o papel do auxiliar.",
        D:"Exame clínico com instrumental (sonda/explorador) para diagnóstico também é ato privativo do dentista. O auxiliar pode fazer inspeção visual básica, mas não exame diagnóstico com instrumental."
      }
    }
  ],
  competencias:[9,7,8,7,7,8,8,10]
},

{
  id:"AG-61", titulo:"Paciente atrasado — reorganização da agenda",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Gestão de Conflito",
  contexto:`MARIA FERNANDA AZEVEDO, 35 anos, tinha consulta de profilaxia agendada para as 14h00. São 14h27 e ela acaba de chegar, pedindo desculpas e dizendo que o trânsito estava muito intenso. A próxima paciente está agendada para as 15h00. Maria escova os dentes 2 VEZES AO DIA e USA FIO DENTAL diariamente. Não tem alergias nem medicamentos. Está visivelmente constrangida com o atraso.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["maria fernanda azevedo","maria fernanda","maria"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["35","35 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"motivo_atraso",label:"Motivo do atraso relatado",obrigatorio:true,validacao:["trânsito","transito","trafego","carro"]},
    {chave:"tipo_atendimento",label:"Tipo de atendimento",obrigatorio:true,validacao:["profilaxia","limpeza","rotina"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","14:30","15:00","16:00","17:00"],
    salas:["Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Periodontia","Consultório de Endodontia","Sala de Radiologia"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["14:30","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Aparelho de ultrassom (profilaxia supragengival)"},
      {id:"m2",nome:"Escova de Robinson e pasta profilática"},
      {id:"m3",nome:"Espelho clínico, sonda periodontal e explorador"},
      {id:"m4",nome:"Flúor tópico (aplicação pós-profilaxia)"},
      {id:"m5",nome:"Revelador de placa"},
      {id:"m6",nome:"Sugador e afastadores"},
      {id:"m7",nome:"Alginato e moldeiras (moldagem — não indicado para profilaxia)"},
      {id:"m8",nome:"Limas endodônticas (tratamento de canal — não indicado aqui)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6"]
  },
  competencias:[9,7,7,7,7,7,9,9]
},

{
  id:"AG-62", titulo:"Material indisponível — resina na cor correta em falta",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Gestão de Conflito",
  contexto:`CARLOS HENRIQUE BORGES, 41 anos, tem consulta agendada para restauração de resina composta no dente 14. Ao preparar a bandeja, a auxiliar informa que a resina na cor A2 (cor do dente do paciente) acabou no estoque. Carlos escova os dentes 3 VEZES AO DIA e USA FIO DENTAL 1 VEZ AO DIA. Não tem alergias. Não usa medicamentos. Ele já se deslocou 40 minutos para a consulta e está esperando na recepção.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["carlos henrique borges","carlos henrique","carlos"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["41","41 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","1 vez","uma vez"]},
    {chave:"tipo_restauracao",label:"Tipo de restauração",obrigatorio:true,validacao:["resina","restauração","dente 14"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Periodontia","Consultório de Cirurgia","Consultório de Endodontia"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Profilaxia (aproveitar a consulta para limpeza enquanto aguarda o material)"},
      {id:"m2",nome:"Escova de Robinson e pasta profilática"},
      {id:"m3",nome:"Espelho, explorador e sonda periodontal"},
      {id:"m4",nome:"Flúor tópico"},
      {id:"m5",nome:"Resina composta cor A2 (material ausente — NÃO DISPONÍVEL)"},
      {id:"m6",nome:"Resina opaca branca (substituto de cor incorreta — NÃO usar sem testar na boca)"},
      {id:"m7",nome:"Registro fotográfico da cor do dente para consulta futura"},
      {id:"m8",nome:"Ácido fosfórico e adesivo (aguardar material correto para restauração)"}
    ],
    corretos:["m1","m2","m3","m4","m7"]
  },
  competencias:[7,8,8,7,7,8,9,9]
},

{
  id:"AG-63", titulo:"Paciente questiona a esterilização dos instrumentos",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Biossegurança",
  contexto:`ANDRESSA LIMA PINTO, 29 anos, ao sentar na cadeira para sua restauração de rotina, olha para a bandeja de instrumentos e diz: "Tenho certeza que esses instrumentos foram usados em outro paciente antes de mim. Não confio na esterilização daqui." Andressa escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Não tem alergias. Não usa medicamentos. Ela está visivelmente agitada e com os braços cruzados.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["andressa lima pinto","andressa lima","andressa"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["29","29 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"queixa_biosseguranca",label:"Preocupação relatada",obrigatorio:true,validacao:["esterilização","instrumentos","contaminação","autoclave","confiança"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Periodontia","Consultório de Cirurgia","Consultório de Endodontia"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Embalagem selada de instrumentos com indicador de autoclave (mostrar ao paciente)"},
      {id:"m2",nome:"Instrumento descartável (para demonstrar uso único quando aplicável)"},
      {id:"m3",nome:"Registro de esterilização (ficha de controle da autoclave)"},
      {id:"m4",nome:"Luvas novas (abrir na frente do paciente)"},
      {id:"m5",nome:"Máscara e óculos de proteção (EPI padrão)"},
      {id:"m6",nome:"Materiais da restauração (após resolver a desconfiança)"},
      {id:"m7",nome:"Hipoclorito de sódio para limpeza de superfícies (não de instrumentos)"},
      {id:"m8",nome:"Alginato e moldeiras (não indicado para restauração de rotina)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6"]
  },
  competencias:[9,7,8,8,10,8,9,9]
},

{
  id:"AG-64", titulo:"Urgência sem vaga — paciente com dor intensa",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:3, area:"Urgência",
  contexto:`ROGÉRIO ALVES SOUSA, 48 anos, aparece sem agendamento às 10h30, com dor intensa (relata EVA 8/10) no molar inferior direito. A agenda do dia está completamente cheia. Ele escova os dentes 1 VEZ AO DIA e NÃO USA FIO DENTAL. Não tem alergias. Faz uso de losartana (hipertensão). PA: 146/90 mmHg. Está visivelmente sofrendo e pede para ser atendido.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["rogério alves sousa","rogerio alves sousa","rogério alves","rogerio alves"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["48","48 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["1 vez","uma vez","1x"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"escala_dor",label:"Intensidade da dor (escala 0-10)",obrigatorio:true,validacao:["8","8/10","intensa","muita dor"]},
    {chave:"medicamentos",label:"Medicamentos contínuos",obrigatorio:true,validacao:["losartana","anti-hipertensivo"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","10:30","11:00","13:00"],
    salas:["Consultório de Emergência","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Sala de Radiologia","Consultório de Periodontia"],
    correto:{sala:"Consultório de Emergência",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["10:30","11:00","13:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Esfigmomanômetro (aferir PA antes do atendimento)"},
      {id:"m2",nome:"Anestésico tópico e mepivacaína 3% sem vasoconstritor (PA 146/90)"},
      {id:"m3",nome:"Seringa carpule e agulha longa (bloqueio alveolar inferior)"},
      {id:"m4",nome:"Analgésico (dipirona ou paracetamol) para alívio imediato"},
      {id:"m5",nome:"Radiografia periapical (diagnóstico)"},
      {id:"m6",nome:"Espelho e explorador"},
      {id:"m7",nome:"Dique de borracha e limas endodônticas (acesso de urgência se diagnóstico indicar)"},
      {id:"m8",nome:"Alginato e moldeiras (prótese — não prioridade na urgência)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[9,9,9,9,9,8,9,9]
},

{
  id:"AG-65", titulo:"Duplo agendamento no mesmo horário — erro administrativo",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Gestão de Conflito",
  contexto:`PATRICIA MENEZES COSTA, 44 anos, e JOÃO VICTOR SANTOS, 31 anos, chegam ao mesmo tempo às 09h00 e ambos têm o mesmo horário agendado no mesmo consultório. Foi um erro da recepção. Patricia está agendada para consulta periodontal (raspagem) e João para radiografia periapical de rotina. Patrícia escova os dentes 2 VEZES AO DIA e USA FIO DENTAL. João escova 2 VEZES AO DIA e NÃO USA FIO DENTAL.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome do paciente prioritário",obrigatorio:true,validacao:["patricia menezes costa","patricia menezes","patricia"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["44","44 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa"]},
    {chave:"tipo_atendimento_prioritario",label:"Tipo de atendimento (prioritário)",obrigatorio:true,validacao:["raspagem","periodontal","periodontia"]},
    {chave:"solucao_conflito",label:"Solução adotada para o segundo paciente",obrigatorio:true,validacao:["remarcar","sala diferente","encaixar","reagendar","outro consultório"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["09:00","09:30","10:00","11:00","14:00","15:00","16:00"],
    salas:["Consultório de Periodontia","Sala de Radiologia","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Cirurgia"],
    correto:{sala:"Consultório de Periodontia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["09:00","09:30","10:00","11:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Aparelho de ultrassom (raspagem supragengival de Patrícia)"},
      {id:"m2",nome:"Curetas de Gracey (raspagem subgengival)"},
      {id:"m3",nome:"Sonda periodontal e espelho"},
      {id:"m4",nome:"Sensor radiográfico (para João na Sala de Radiologia)"},
      {id:"m5",nome:"Posicionador radiográfico para João"},
      {id:"m6",nome:"Avental de chumbo (para João)"},
      {id:"m7",nome:"Pasta profilática e escova de Robinson"},
      {id:"m8",nome:"Alginato e moldeiras (não indicado para nenhum dos dois procedimentos)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[8,8,8,8,7,8,9,9]
},

{
  id:"AG-66", titulo:"Paciente recusa assinar o Termo de Consentimento Informado",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Ética e Comunicação",
  contexto:`HELENA VIEIRA TEIXEIRA, 52 anos, chegou para exodontia do dente 17. Quando a auxiliar apresenta o Termo de Consentimento Informado (TCLE), Helena diz: "Não assino nada. Se confio no dentista, não preciso de papel." Helena escova os dentes 2 VEZES AO DIA e NÃO USA FIO DENTAL. Faz uso de AAS 100 mg (cardiopatia leve). PA: 130/82 mmHg. Sem alergias.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["helena vieira teixeira","helena vieira","helena"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["52","52 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"recusa_tcle",label:"Recusou o TCLE?",obrigatorio:true,validacao:["sim","recusou","não quer assinar","se recusa"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:true,validacao:["aas","ácido acetilsalicílico","anticoagulante"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Cirurgia","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Periodontia","Consultório de Endodontia"],
    correto:{sala:"Consultório de Cirurgia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"TCLE impresso (documento ético e legal obrigatório antes de cirurgia)"},
      {id:"m2",nome:"Anestésico tópico e tubete (após obter consentimento)"},
      {id:"m3",nome:"Seringa carpule e agulha"},
      {id:"m4",nome:"Fórceps para molar superior"},
      {id:"m5",nome:"Gaze estéril e compressas"},
      {id:"m6",nome:"Esfigmomanômetro (PA pré-operatória)"},
      {id:"m7",nome:"Nota de recusa documentada no prontuário (se paciente mantiver recusa)"},
      {id:"m8",nome:"Limas endodônticas (canal — não indicado aqui)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[9,8,8,8,8,7,9,9]
},

{
  id:"AG-67", titulo:"Paciente sem exame solicitado insiste em atendimento",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Gestão de Conflito",
  contexto:`FABIANO LOPES CORREIA, 57 anos, chega para consulta de planejamento de implante. Na consulta anterior foi solicitada tomografia CBCT para avaliação óssea. Fabiano não fez o exame ("era caro e não tive tempo") e insiste em continuar o planejamento sem a tomografia. Escova os dentes 2 VEZES AO DIA e USA FIO DENTAL 2 VEZES POR SEMANA. Não tem alergias. Faz uso de sinvastatina.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["fabiano lopes correia","fabiano lopes","fabiano"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["57","57 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","2 vezes","duas vezes por semana"]},
    {chave:"exame_pendente",label:"Exame não realizado",obrigatorio:true,validacao:["tomografia","cbct","não fez","sem exame"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:false,validacao:["sinvastatina"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório A — Clínica Geral","Sala de Radiologia","Consultório de Prótese","Consultório de Cirurgia","Consultório B — Clínica Geral"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Prontuário e fotos intraorais (revisão do que já foi coletado)"},
      {id:"m2",nome:"Modelos de estudo já disponíveis (revisar o que há)"},
      {id:"m3",nome:"Nova solicitação formal da tomografia CBCT com justificativa"},
      {id:"m4",nome:"Indicação de centros de imagem mais acessíveis (lista de locais)"},
      {id:"m5",nome:"Sonda periodontal (exame clínico complementar possível sem CBCT)"},
      {id:"m6",nome:"Espelho e explorador"},
      {id:"m7",nome:"Alginato (moldagem definitiva — aguardar CBCT antes de prosseguir)"},
      {id:"m8",nome:"Implante e componentes (não inserir sem planejamento imagiológico)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6"]
  },
  competencias:[8,8,8,8,7,7,9,9]
},

{
  id:"AG-68", titulo:"Paciente faltou 3 vezes — como reagendar",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:2, area:"Gestão de Conflito",
  contexto:`JOANA CRISTINA MARQUES, 38 anos, está sendo contatada pela clínica para reagendar. Ela já faltou sem aviso 3 vezes consecutivas para raspagem periodontal indicada. Quando ligam, ela diz que sempre esquece. Joana escova os dentes 1 VEZ AO DIA e NÃO USA FIO DENTAL. Tem periodontite moderada com bolsas de 5-6 mm. Não tem alergias nem medicamentos. Ela diz que quer ser atendida, mas pede horário à noite ou sábado.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["joana cristina marques","joana cristina","joana"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["38","38 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["1 vez","uma vez","1x"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"historico_faltas",label:"Histórico de faltas",obrigatorio:true,validacao:["3 faltas","três faltas","faltou","sem aviso"]},
    {chave:"preferencia_horario",label:"Preferência de horário",obrigatorio:true,validacao:["noite","sábado","sabado","tarde","final de semana"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["08:00","09:00","14:00","15:00","17:00","18:00"],
    salas:["Consultório de Periodontia","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Cirurgia","Consultório de Endodontia"],
    correto:{sala:"Consultório de Periodontia",dias:["sábado"],horarios:["08:00","09:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Aparelho de ultrassom (raspagem supragengival)"},
      {id:"m2",nome:"Curetas de Gracey (raspagem subgengival)"},
      {id:"m3",nome:"Sonda periodontal e espelho"},
      {id:"m4",nome:"Revelador de placa (motivação durante o atendimento)"},
      {id:"m5",nome:"Flúor verniz"},
      {id:"m6",nome:"Ficha de comprometimento / confirmação de comparecimento (prevenção de novas faltas)"},
      {id:"m7",nome:"Alginato e moldeiras (prótese — não indicado para raspagem)"},
      {id:"m8",nome:"Bisturi e suturas (cirurgia — não indicado nesta fase)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6"]
  },
  competencias:[8,7,7,7,7,8,9,9]
},

{
  id:"AG-69", titulo:"Paciente diabético não tomou medicação no dia da cirurgia",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:3, area:"Pacientes Especiais",
  contexto:`OSVALDO MENDES BRITO, 60 anos, chegou para extração do dente 45. Ao preencher a ficha na recepção, informa que hoje ESQUECEU DE TOMAR A METFORMINA. Relata glicemia de 210 mg/dL pela manhã (habitual 140-160). Osvaldo escova os dentes 2 VEZES AO DIA e NÃO USA FIO DENTAL. Não tem alergias. PA: 136/84 mmHg. Está levemente cansado mas sem sintomas de hipoglicemia.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["osvaldo mendes brito","osvaldo mendes","osvaldo"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["60","60 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"glicemia_atual",label:"Glicemia no dia",obrigatorio:true,validacao:["210","alta","descompensada","hiperglicemia"]},
    {chave:"medicamento_nao_tomado",label:"Medicamento não tomado",obrigatorio:true,validacao:["metformina","esqueceu","não tomou"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Emergência","Consultório de Cirurgia","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Endodontia"],
    correto:{sala:"Consultório de Emergência",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Glicosímetro (aferição da glicemia capilar no consultório)"},
      {id:"m2",nome:"Esfigmomanômetro"},
      {id:"m3",nome:"Suco de laranja ou sachê de glicose (disponível em caso de hipoglicemia)"},
      {id:"m4",nome:"Avaliação clínica + orientação para tomar a medicação e reagendar"},
      {id:"m5",nome:"Anestésico local (aguardar controle glicêmico antes de prosseguir)"},
      {id:"m6",nome:"Fórceps e gaze (extração — aguardar normalização glicêmica)"},
      {id:"m7",nome:"Antibiótico sistêmico preventivo (discutir com médico antes de cirurgia)"},
      {id:"m8",nome:"Alginato e moldeiras (prótese — não indicado aqui)"}
    ],
    corretos:["m1","m2","m3","m4","m7"]
  },
  competencias:[9,9,9,9,9,7,8,9]
},

{
  id:"AG-70", titulo:"Responsável recusa tratamento indicado para filho",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:3, area:"Ética e Comunicação",
  contexto:`LUCAS FERREIRA NEVES, 8 anos, foi avaliado e o dentista indicou a extração do dente 85 (molar decíduo com abscesso e raiz comprometida). A mãe, CLÁUDIA NEVES, 34 anos, recusa a extração dizendo: "Não vou deixar tirar dente de criança. Dê um antibiótico." Lucas escova os dentes 2 VEZES AO DIA e USA FIO DENTAL com ajuda da mãe. O dente tem fístula ativa e mobilidade grau III.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome da criança",obrigatorio:true,validacao:["lucas ferreira neves","lucas ferreira","lucas"]},
    {chave:"idade",label:"Idade da criança",obrigatorio:true,validacao:["8","8 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","com ajuda"]},
    {chave:"responsavel",label:"Responsável",obrigatorio:true,validacao:["mãe","mae","cláudia","claudia","cláudia neves"]},
    {chave:"recusa_responsavel",label:"Responsável recusou procedimento?",obrigatorio:true,validacao:["sim","recusou","não autoriza","nega","antibiótico"]},
    {chave:"dente_comprometido",label:"Dente comprometido",obrigatorio:true,validacao:["85","dente 85","molar decíduo","fístula"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"],
    salas:["Consultório Infantil","Consultório A — Clínica Geral","Consultório de Emergência","Consultório de Cirurgia","Consultório B — Clínica Geral"],
    correto:{sala:"Consultório Infantil",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Radiografia periapical (mostrar comprometimento à mãe)"},
      {id:"m2",nome:"Material educativo sobre dentes decíduos e sucessores"},
      {id:"m3",nome:"Antibiótico (medida temporária SE o dentista optar por controle da infecção aguda antes de nova tentativa)"},
      {id:"m4",nome:"Documentação no prontuário: recusa do responsável (respaldo legal)"},
      {id:"m5",nome:"Anestésico e material de exodontia (aguardar consentimento)"},
      {id:"m6",nome:"Mantenedor de espaço (pós-extração — para quando obtiver consentimento)"},
      {id:"m7",nome:"Limas endodônticas (pulpectomia — comprometimento radicular não indicado)"},
      {id:"m8",nome:"Fotopolimerizador (restauração — fístula ativa contraindica)"}
    ],
    corretos:["m1","m2","m3","m4","m6"]
  },
  competencias:[9,8,8,8,8,8,9,9]
},

{
  id:"AG-71", titulo:"Paciente alega dor ao anestésico durante procedimento",
  tipo:"agendamento", modalidade:"agendamento", complexidade:3, tempo:3, area:"Urgência",
  contexto:`SANDRA MARA BASTOS, 46 anos, está na cadeira para restauração no dente 26 quando, após a injeção do anestésico, diz que sente dor na gengiva e formigamento nos lábios. Não tem histórico de alergia documentado. Escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Não usa medicamentos. PA: 122/76 mmHg. Faz a segunda consulta na clínica. Ela está agitada.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["sandra mara bastos","sandra mara","sandra"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["46","46 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"reacao_anestesico",label:"Reação ao anestésico",obrigatorio:true,validacao:["dor","formigamento","ardência","reação","sensação"]},
    {chave:"alergias",label:"Alergias conhecidas",obrigatorio:true,validacao:["não","nao","sem histórico","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Emergência","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Endodontia","Sala de Radiologia"],
    correto:{sala:"Consultório de Emergência",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Esfigmomanômetro e oxímetro de pulso (monitoramento imediato)"},
      {id:"m2",nome:"Kit de emergência (adrenalina, anti-histamínico, corticoide)"},
      {id:"m3",nome:"Interromper o procedimento e observar sinais vitais"},
      {id:"m4",nome:"Oxigênio e ambu (disponibilidade)"},
      {id:"m5",nome:"Cadeira reclinada — observar padrão respiratório e circulatório"},
      {id:"m6",nome:"Registro da reação no prontuário com lote do anestésico"},
      {id:"m7",nome:"Material da restauração (após estabilização — se procedimento continuar)"},
      {id:"m8",nome:"Resina composta e fotopolimerizador (aguardar resolução da reação)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6"]
  },
  competencias:[9,9,9,9,9,7,7,9]
},

{
  id:"AG-72", titulo:"Paciente com higiene precária — abordagem empática",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:2, area:"Preventivo",
  contexto:`WELLINGTON SOUZA RAMOS, 27 anos, chega para uma consulta de rotina. Ao abrir a boca, há placa abundante em todos os dentes, cálculo supragengival extenso, hálito intenso e gengiva muito inflamada. Wellington escova os dentes 1 VEZ AO DIA e NÃO USA FIO DENTAL. Ao ser questionado, diz que "não gosta de escovar" e acha que "dente é dente mesmo, vai cair um dia." Não tem alergias. Não usa medicamentos.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["wellington souza ramos","wellington souza","wellington"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["27","27 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["1 vez","uma vez","1x"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"atitude_higiene",label:"Atitude em relação à higiene oral",obrigatorio:true,validacao:["não gosta","resistente","desmotivado","não liga","negligente"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","14:00","15:00","16:00"],
    salas:["Consultório de Periodontia","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Endodontia","Consultório de Prótese"],
    correto:{sala:"Consultório de Periodontia",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","14:00","15:00","16:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Revelador de placa (impacto visual para motivação)"},
      {id:"m2",nome:"Modelo didático e escova para demonstração de técnica de escovação"},
      {id:"m3",nome:"Material educativo impresso (para levar para casa)"},
      {id:"m4",nome:"Aparelho de ultrassom (remoção de cálculo)"},
      {id:"m5",nome:"Curetas de Gracey (áreas de difícil acesso)"},
      {id:"m6",nome:"Escova de Robinson e pasta profilática"},
      {id:"m7",nome:"Sonda periodontal e espelho clínico"},
      {id:"m8",nome:"Flúor verniz"},
      {id:"m9",nome:"Fotopolimerizador (restauração — não prioridade nesta consulta)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7","m8"]
  },
  competencias:[9,7,7,7,7,8,9,9]
},

{
  id:"AG-73", titulo:"Paciente fotografa procedimento sem autorização",
  tipo:"agendamento", modalidade:"agendamento", complexidade:1, tempo:2, area:"Ética e Comunicação",
  contexto:`BRUNA CARVALHO LIMA, 25 anos, está na cadeira para uma restauração estética no dente 11. Enquanto aguarda a polimerização da resina, ela pega o celular e começa a fotografar o interior da sua boca e a bancada de instrumentos. A auxiliar percebe que ela está também fotografando o dentista sem aviso. Bruna escova os dentes 3 VEZES AO DIA e USA FIO DENTAL diariamente. Não tem alergias nem medicamentos.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["bruna carvalho lima","bruna carvalho","bruna"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["25","25 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["3 vezes","3x","três vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["sim","usa","diariamente"]},
    {chave:"situacao_fotografias",label:"Situação com fotografias",obrigatorio:true,validacao:["fotografou","foto","celular","sem autorização","sem permissão","gravou"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Periodontia","Consultório de Endodontia","Consultório de Prótese"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Política da clínica sobre imagens (documento ou cartaz a mostrar ao paciente)"},
      {id:"m2",nome:"Autorização de uso de imagem (para fotografias clínicas antes/depois, com consentimento)"},
      {id:"m3",nome:"Ácido fosfórico e adesivo (continuar a restauração após resolver a situação)"},
      {id:"m4",nome:"Resina composta e fotopolimerizador"},
      {id:"m5",nome:"Tiras de acabamento e polimento"},
      {id:"m6",nome:"Espelho clínico e papel carbono articular"},
      {id:"m7",nome:"Câmera da clínica para fotografia clínica autorizada (before/after)"},
      {id:"m8",nome:"Limas endodônticas (canal — não indicado aqui)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6","m7"]
  },
  competencias:[8,7,7,7,7,7,9,9]
},

{
  id:"AG-74", titulo:"Idoso com dificuldade cognitiva leve — familiar ausente",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Pacientes Especiais",
  contexto:`SEBASTIÃO GOMES LEITE, 78 anos, chegou sozinho para consulta de avaliação. Ao preencher a ficha, demonstra dificuldade de recordar o nome dos medicamentos e confunde datas. Escova os dentes 1 VEZ AO DIA e NÃO USA FIO DENTAL. Traz uma sacola com caixas de remédios (losartana, enalapril e donepezila — medicamento para Alzheimer). PA: 150/88 mmHg. Sem alergias conhecidas.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["sebastião gomes leite","sebastiao gomes leite","sebastião gomes","sebastiao gomes"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["78","78 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["1 vez","uma vez","1x"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"medicamentos",label:"Medicamentos",obrigatorio:true,validacao:["losartana","donepezila","enalapril","alzheimer"]},
    {chave:"acompanhante",label:"Acompanhante presente?",obrigatorio:true,validacao:["não","nao","sozinho","sem acompanhante","ausente"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma","não sabe"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta"],
    horariosDisponiveis:["08:00","09:00","10:00","14:00","15:00"],
    salas:["Consultório A — Clínica Geral","Consultório B — Clínica Geral","Consultório de Periodontia","Consultório de Prótese","Consultório Infantil"],
    correto:{sala:"Consultório A — Clínica Geral",dias:["segunda","terça","quarta","quinta","sexta"],horarios:["08:00","09:00","10:00","14:00","15:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Espelho clínico e sonda (exame clínico básico)"},
      {id:"m2",nome:"Esfigmomanômetro (PA 150/88 — monitorar antes de qualquer procedimento)"},
      {id:"m3",nome:"Contato com familiar/responsável (antes de decisões clínicas maiores)"},
      {id:"m4",nome:"Radiografia panorâmica (avaliação geral no primeiro atendimento)"},
      {id:"m5",nome:"Escova de Robinson e pasta profilática (profilaxia simples, segura)"},
      {id:"m6",nome:"Fluorterapia tópica"},
      {id:"m7",nome:"Sedação oral (sem acompanhante presente — contraindicada)"},
      {id:"m8",nome:"Cirurgia periodontal (procedimento de risco — aguardar controle sistêmico e presença de familiar)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6"]
  },
  competencias:[9,8,8,8,9,8,9,9]
},

{
  id:"AG-75", titulo:"Paciente pede receita de antibiótico sem consulta",
  tipo:"agendamento", modalidade:"agendamento", complexidade:2, tempo:2, area:"Ética e Comunicação",
  contexto:`ROBERTO HENRIQUE FONSECA, 33 anos, entra na recepção sem agendamento e diz: "Preciso de uma receita de amoxicilina. Meu dente está doendo há 3 dias, já sei que é infecção. Só precisava de uma receita rápida." Escova os dentes 2 VEZES AO DIA e NÃO USA FIO DENTAL. Não tem alergias conhecidas. Não usa medicamentos. Nenhum exame clínico foi realizado. Ele parece apressado.`,
  dadosPaciente:{campos:[
    {chave:"nome",label:"Nome completo",obrigatorio:true,validacao:["roberto henrique fonseca","roberto henrique","roberto"]},
    {chave:"idade",label:"Idade",obrigatorio:true,validacao:["33","33 anos"]},
    {chave:"freq_escovacao",label:"Frequência de escovação",obrigatorio:true,validacao:["2 vezes","2x","duas vezes"]},
    {chave:"uso_fio",label:"Usa fio dental?",obrigatorio:true,validacao:["não","nao","não usa"]},
    {chave:"solicitacao",label:"O que o paciente solicitou",obrigatorio:true,validacao:["receita","antibiótico","amoxicilina","sem consulta","sem exame"]},
    {chave:"dente_sintoma",label:"Sintoma relatado",obrigatorio:true,validacao:["dor","dente","3 dias","infecção","infeccao"]},
    {chave:"alergias",label:"Alergias",obrigatorio:false,validacao:["não","nenhuma"]}
  ]},
  agenda:{
    diasDisponiveis:["segunda","terça","quarta","quinta","sexta","sábado"],
    horariosDisponiveis:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"],
    salas:["Consultório de Emergência","Consultório A — Clínica Geral","Consultório B — Clínica Geral","Sala de Radiologia","Consultório de Endodontia"],
    correto:{sala:"Consultório de Emergência",dias:["segunda","terça","quarta","quinta","sexta","sábado"],horarios:["07:30","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"]}
  },
  materiais:{
    opcoes:[
      {id:"m1",nome:"Espelho clínico e explorador (exame clínico obrigatório antes de qualquer prescrição)"},
      {id:"m2",nome:"Sonda periodontal"},
      {id:"m3",nome:"Radiografia periapical (diagnóstico)"},
      {id:"m4",nome:"Receituário para antibiótico (SOMENTE após exame e diagnóstico)"},
      {id:"m5",nome:"Analgésico para alívio imediato da dor enquanto aguarda diagnóstico"},
      {id:"m6",nome:"Prontuário preenchido com diagnóstico antes da prescrição"},
      {id:"m7",nome:"Amoxicilina sem exame (prescrição sem diagnóstico — NÃO ÉTICO e ilegal)"},
      {id:"m8",nome:"Alginato e moldeiras (não indicado para urgência de dor)"}
    ],
    corretos:["m1","m2","m3","m4","m5","m6"]
  },
  competencias:[9,8,9,8,8,7,9,9]
},
{
  id:"CC-41", titulo:"Paciente exige procedimento não indicado",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Ética e Comunicação",
  contexto:`Paciente feminina, 32 anos, comparece solicitando clareamento dental. Ao exame: gengivite moderada generalizada com sangramento à sondagem em 60% dos sítios, placa abundante e cálculo supragengival. A paciente diz: "Não quero saber de limpeza agora. Só quero clarear os dentes para o meu casamento daqui a 3 semanas. Faça logo ou vou em outra clínica."`,
  personagem:{nome:"Paciente exigente",avatar:"paciente"},
  passos:[
    {
      fase:"Gestão do conflito",
      pergunta:"Qual é a conduta clinicamente correta e eticamente adequada neste caso?",
      opcoes:[
        {letra:"A", texto:"Realizar o clareamento imediatamente para não perder a paciente"},
        {letra:"B", texto:"Explicar que o clareamento em gengiva inflamada é contraindicado e propor protocolo sequencial: raspagem + clareamento após controle"},
        {letra:"C", texto:"Recusar o atendimento completamente e pedir que a paciente saia"},
        {letra:"D", texto:"Realizar clareamento apenas nos dentes anteriores, evitando a área posterior inflamada"}
      ],
      correta:"B",
      feedback:{
        A:"Clarear sobre gengiva inflamada agrava a inflamação, causa hipersensibilidade e pode resultar em complicações. O profissional assume responsabilidade técnica e ética por um procedimento contraindicado.",
        B:"Correto. O dentista tem o dever de explicar a contraindicação de forma empática, apresentar um plano viável dentro do prazo (raspagem + clareamento em 2-3 semanas é factível) e registrar a orientação no prontuário. A autonomia do paciente é respeitada, mas sem abrir mão da indicação clínica.",
        C:"Recusa total sem oferecer alternativa é uma falha de comunicação e pode caracterizar abandono do paciente.",
        D:"Clareamento parcial não resolve a situação clínica e ainda seria contraindicado com gengiva inflamada."
      }
    },
    {
      fase:"Documentação e comunicação",
      pergunta:"Se a paciente insistir em fazer o clareamento mesmo após a explicação, qual é a postura correta do dentista?",
      opcoes:[
        {letra:"A", texto:"Ceder à exigência — o paciente tem autonomia total para decidir qualquer procedimento"},
        {letra:"B", texto:"Registrar no prontuário a orientação dada, a recusa da paciente e não realizar o procedimento contraindicado"},
        {letra:"C", texto:"Realizar o procedimento e não documentar para evitar problemas"},
        {letra:"D", texto:"Cobrar o dobro do valor para compensar o risco assumido"}
      ],
      correta:"B",
      feedback:{
        A:"Autonomia do paciente tem limites éticos. O dentista não é obrigado a realizar procedimentos contraindicados apenas por exigência do paciente.",
        B:"Correto. O dentista deve registrar: a indicação clínica feita, a explicação fornecida, a recusa da paciente e a não realização do procedimento. Isso protege o profissional legalmente e respeita o Código de Ética Odontológica.",
        C:"Não documentar é uma grave falha. O prontuário é o principal instrumento de defesa do profissional.",
        D:"Cobrar mais não resolve a questão ética e pode ser interpretado como coerção."
      }
    }
  ],
  competencias:[9,7,8,7,7,7,9,9]
},

{
  id:"CC-42", titulo:"Acompanhante que interfere no tratamento",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Ética e Comunicação",
  contexto:`Paciente masculino, 65 anos, vem para consulta de avaliação periodontal. Acompanha-o o filho, 35 anos, que começa a falar sobre o estado de saúde do pai, interrompe as respostas do paciente, diz que "o pai não entende nada de saúde" e exige ser ele o interlocutor das decisões. O paciente está orientado, lúcido e com plena capacidade de comunicação.`,
  personagem:{nome:"Paciente com acompanhante",avatar:"paciente"},
  passos:[
    {
      fase:"Direitos do paciente",
      pergunta:"Qual é a conduta correta do dentista diante da situação com o acompanhante?",
      opcoes:[
        {letra:"A", texto:"Dirigir toda a comunicação ao filho, pois ele parece mais informado sobre o histórico médico"},
        {letra:"B", texto:"Redirecionar gentilmente a comunicação ao paciente, que é o titular do atendimento e está capacitado para decidir"},
        {letra:"C", texto:"Pedir que o filho saia da sala imediatamente sem explicação"},
        {letra:"D", texto:"Interromper a consulta por conflito familiar"}
      ],
      correta:"B",
      feedback:{
        A:"Ignorar o paciente lúcido em favor do acompanhante viola o direito de autonomia do paciente.",
        B:"Correto. O paciente lúcido e orientado é o titular de todas as decisões sobre o seu tratamento. O dentista deve, com educação, redirecionar as perguntas ao paciente: 'Sr. [nome], o que o senhor sente?' — incluindo o filho quando for adequado, mas sem substituir a voz do paciente.",
        C:"Pedir que o acompanhante saia abruptamente pode ser desnecessário e causar conflito maior.",
        D:"Conflito com acompanhante não justifica interromper a consulta — o problema pode ser gerenciado com comunicação."
      }
    },
    {
      fase:"Estratégia de comunicação",
      pergunta:"Como o dentista pode incluir o familiar de forma construtiva sem prejudicar a autonomia do paciente?",
      opcoes:[
        {letra:"A", texto:"Pedir ao filho que espere na recepção durante toda a consulta"},
        {letra:"B", texto:"Incluir o filho nas explicações do plano de tratamento, mas manter o paciente como interlocutor principal nas decisões"},
        {letra:"C", texto:"Pedir ao paciente que decida se quer o filho presente ou não"},
        {letra:"D", texto:"Deixar o filho responder todas as perguntas para agilizar a consulta"}
      ],
      correta:"C",
      feedback:{
        A:"Excluir o familiar completamente pode gerar conflito e não é necessário.",
        B:"Esta é uma abordagem válida, mas a melhor resposta é perguntar ao próprio paciente.",
        C:"Correto. Perguntar ao paciente — 'O senhor prefere que seu filho fique aqui ou aguarde fora?' — respeita a autonomia do titular da consulta e resolve o conflito de forma empática. É o paciente quem decide sobre a presença do acompanhante.",
        D:"Deixar o filho responder em lugar do paciente lúcido é desrespeitoso e eticamente incorreto."
      }
    }
  ],
  competencias:[8,7,7,7,7,8,9,9]
},

{
  id:"CC-43", titulo:"Paciente pede antibiótico sem diagnóstico",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Ética e Comunicação",
  contexto:`Paciente masculino, 29 anos, entra na clínica sem agendamento com dor de dente há 2 dias e pede diretamente para a recepcionista: "Me passa uma receita de amoxicilina, já usei antes pra isso e resolveu." A recepcionista repassa o pedido ao dentista. Nenhum exame clínico ou radiográfico foi realizado.`,
  personagem:{nome:"Paciente sem agendamento",avatar:"paciente"},
  passos:[
    {
      fase:"Ética na prescrição",
      pergunta:"O dentista pode prescrever o antibiótico solicitado sem realizar o exame clínico?",
      opcoes:[
        {letra:"A", texto:"Sim — o paciente relatou que já usou antes com sucesso, portanto é uma prescrição segura"},
        {letra:"B", texto:"Sim — o paciente está sofrendo e antibiótico de forma profilática nunca faz mal"},
        {letra:"C", texto:"Não — toda prescrição odontológica requer exame clínico e diagnóstico prévio"},
        {letra:"D", texto:"Depende — se a agenda estiver cheia, pode prescrever para agilizar"}
      ],
      correta:"C",
      feedback:{
        A:"O fato de uma conduta ter funcionado antes não justifica a prescrição sem diagnóstico. A dor pode ter causa diferente.",
        B:"Antibiótico desnecessário contribui para resistência bacteriana e pode causar efeitos adversos (alergias, disbose intestinal).",
        C:"Correto. O Código de Ética Odontológico e a legislação sanitária são claros: nenhum medicamento pode ser prescrito sem diagnóstico. Prescrever sem exame é infração ética e pode resultar em processo no CRO.",
        D:"A lotação da agenda não justifica prescrição sem diagnóstico."
      }
    },
    {
      fase:"Conduta adequada",
      pergunta:"Qual é a atitude correta do dentista neste caso?",
      opcoes:[
        {letra:"A", texto:"Pedir à recepcionista que explique ao paciente que não é possível e dispensá-lo sem atendimento"},
        {letra:"B", texto:"Atender o paciente em caráter de urgência, realizar exame clínico, diagnosticar e, se indicado, prescrever o antibiótico"},
        {letra:"C", texto:"Encaminhar diretamente para pronto-socorro médico"},
        {letra:"D", texto:"Prescrever apenas analgésico e remarcar para o próximo dia útil"}
      ],
      correta:"B",
      feedback:{
        A:"Dispensar o paciente com dor sem ao menos uma avaliação básica pode ser negligência.",
        B:"Correto. A dor dental por 2 dias é urgência odontológica. O dentista deve encaixar o paciente, realizar exame clínico e radiográfico mínimo, diagnosticar a causa (pulpite? abscesso?) e prescrever o tratamento — que pode incluir antibiótico — apenas se indicado clinicamente.",
        C:"Dor dental sem sinais sistêmicos graves não justifica encaminhamento imediato ao pronto-socorro.",
        D:"Analgésico pode ser usado para alívio, mas não é suficiente se houver processo infeccioso não diagnosticado."
      }
    }
  ],
  competencias:[9,8,9,8,7,7,9,9]
},

{
  id:"CC-44", titulo:"Conflito de agenda — dentista atrasado, paciente irritado",
  tipo:"multipla", modalidade:"multipla", complexidade:1, tempo:2, area:"Gestão de Conflito",
  contexto:`Paciente feminina, 45 anos, está aguardando na recepção há 35 minutos além do horário marcado para tratamento de canal. A auxiliar informa que o dentista está com uma intercorrência no paciente anterior. A paciente se levanta, fala em voz alta que "isso é um desrespeito" e ameaça ir embora e "contar para todo mundo nas redes sociais".`,
  personagem:{nome:"Paciente irritada com espera",avatar:"paciente"},
  passos:[
    {
      fase:"Gestão imediata do conflito",
      pergunta:"Qual deve ser a atitude imediata da equipe da clínica?",
      opcoes:[
        {letra:"A", texto:"Ignorar o comportamento da paciente até o dentista ficar disponível"},
        {letra:"B", texto:"Pedir que a paciente baixe o tom de voz na frente de todos os presentes"},
        {letra:"C", texto:"Abordar a paciente de forma privada, reconhecer o atraso, pedir desculpas e dar uma previsão realista de espera"},
        {letra:"D", texto:"Informar que o dentista está ocupado e pedir que ela aguarde sem dar prazo"}
      ],
      correta:"C",
      feedback:{
        A:"Ignorar a paciente irritada piora o conflito e pode gerar cenas ainda mais constrangedoras.",
        B:"Pedir que baixe o tom em público é confrontacional e pode escalar o conflito.",
        C:"Correto. O manejo de conflito começa com reconhecimento e empatia: chamar a paciente para um espaço privado (ou em voz baixa), pedir desculpas pelo inconveniente, explicar brevemente o motivo (intercorrência no paciente anterior) e dar uma previsão concreta ('aproximadamente 10-15 minutos'). Isso reduz a tensão.",
        D:"Sem dar prazo e sem reconhecer o problema, a paciente sente que está sendo ignorada."
      }
    },
    {
      fase:"Prevenção de recorrência",
      pergunta:"Qual medida reduz a probabilidade de recorrência deste tipo de situação na clínica?",
      opcoes:[
        {letra:"A", texto:"Reduzir o número de pacientes atendidos por dia"},
        {letra:"B", texto:"Não informar horários precisos para que o paciente não crie expectativas"},
        {letra:"C", texto:"Ter um protocolo de comunicação: avisar proativamente quando há atrasos e oferecer reagendamento antes que o paciente reclame"},
        {letra:"D", texto:"Colocar uma placa na recepção que avise sobre possíveis atrasos"}
      ],
      correta:"C",
      feedback:{
        A:"Reduzir pacientes não resolve o problema — atrasos podem ocorrer com qualquer volume.",
        B:"Não informar horários cria mais ansiedade, não menos.",
        C:"Correto. Comunicação proativa é a chave: se o dentista atrasar, a recepcionista deve contatar os próximos pacientes antes da chegada, explicar o atraso e oferecer a opção de reagendar. Pacientes que escolhem aguardar ficam mais tolerantes do que os que são pegos de surpresa.",
        D:"Uma placa genérica tem efeito mínimo — não substitui a comunicação individual e empática."
      }
    }
  ],
  competencias:[8,7,7,7,7,8,9,9]
},

{
  id:"CC-45", titulo:"Paciente recusa anestesia local",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Ética e Comunicação",
  contexto:`Paciente masculino, 40 anos, precisa de extração do dente 46 (cárie extensa, irrestaurável). Quando o dentista pega a seringa, o paciente diz com firmeza: "Não quero anestesia. Tenho medo de agulha. Pode tirar sem." O dente ainda tem vitalidade pulpar.`,
  personagem:{nome:"Paciente que recusa anestesia",avatar:"paciente"},
  passos:[
    {
      fase:"Avaliação da recusa",
      pergunta:"Como o dentista deve responder à recusa da anestesia?",
      opcoes:[
        {letra:"A", texto:"Respeitar imediatamente a recusa e iniciar a extração sem anestesia"},
        {letra:"B", texto:"Explicar que a extração sem anestesia causará dor insuportável, oferecer alternativas para o medo de agulha e insistir de forma empática na anestesia"},
        {letra:"C", texto:"Forçar a aplicação do anestésico pois é protocolo obrigatório"},
        {letra:"D", texto:"Realizar a extração sem anestesia e prescrever analgésico após"}
      ],
      correta:"B",
      feedback:{
        A:"Respeitar a recusa sem esclarecimento expõe o paciente a dor desnecessária — o consentimento informado exige que o paciente entenda as consequências.",
        B:"Correto. O dentista deve explicar claramente o que vai sentir sem anestesia (dor intensa durante a extração), oferecer alternativas para minimizar o medo (agulha curta, anestésico tópico antes, técnica menos invasiva), e tentar negociar. Se após esclarecimento o paciente ainda recusar, deve-se documentar e reavaliar.",
        C:"Aplicar anestesia contra a vontade expressa do paciente é violação de direito e pode caracterizar agressão.",
        D:"Extração sem anestesia em dente vital é eticamente inaceitável. Causará dor aguda que pode resultar em síncope vasovagal ou reação de pânico."
      }
    },
    {
      fase:"Alternativas ao medo de agulha",
      pergunta:"Qual estratégia pode reduzir o medo de agulha neste paciente e viabilizar a anestesia?",
      opcoes:[
        {letra:"A", texto:"Mostrar a agulha ao paciente para que ele se acostume visualmente"},
        {letra:"B", texto:"Usar anestésico tópico com espera adequada + agulha ultrafina + injeção lenta e vagarosa"},
        {letra:"C", texto:"Usar sedação IV em todos os casos de medo de agulha"},
        {letra:"D", texto:"Dizer ao paciente que 'não vai doer nada' para tranquilizá-lo"}
      ],
      correta:"B",
      feedback:{
        A:"Mostrar a agulha tende a aumentar a ansiedade em pacientes com medo.",
        B:"Correto. A técnica para minimizar o desconforto da injeção: anestésico tópico em gel por 2-3 minutos, agulha ultralfina (30G), inserção na mucosa em região com anestésico tópico e injeção lentíssima. Combinado com comunicação calma, geralmente é tolerado mesmo por pacientes com medo.",
        C:"Sedação IV é uma opção de último recurso, não de rotina para fobia de agulha.",
        D:"Prometer que 'não vai doer nada' sem a técnica adequada gera frustração e perda de confiança quando o paciente sentir a injeção."
      }
    },
    {
      fase:"Limite ético",
      pergunta:"Após todas as tentativas, se o paciente absolutamente recusar a anestesia para a extração de um dente vital, qual é a conduta final?",
      opcoes:[
        {letra:"A", texto:"Realizar a extração sem anestesia — o paciente assumiu o risco"},
        {letra:"B", texto:"Recusar-se a realizar a extração sem anestesia, documentar no prontuário e orientar que o procedimento só pode ser feito com anestesia"},
        {letra:"C", texto:"Remover apenas parte da coroa sem anestesia para minimizar o dano"},
        {letra:"D", texto:"Encaminhar para odontologia hospitalar sem explicação"}
      ],
      correta:"B",
      feedback:{
        A:"Extrair dente vital sem anestesia expõe o dentista a processo ético e pode causar dano físico e psicológico ao paciente.",
        B:"Correto. O dentista tem o direito de recusar um procedimento que viola padrões técnicos e éticos — mesmo a pedido do paciente. Deve documentar: a negativa de anestesia pelo paciente, a explicação fornecida e a não realização da extração. Pode encaminhar para centro com sedação se necessário.",
        C:"Remoção parcial sem anestesia em dente vital causa mais dor, não menos.",
        D:"O encaminhamento pode ser indicado, mas deve ser explicado ao paciente."
      }
    }
  ],
  competencias:[9,8,8,8,8,7,9,9]
},

{
  id:"CC-46", titulo:"Erro da auxiliar na preparação do material",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Biossegurança",
  contexto:`O dentista está prestes a iniciar uma restauração quando percebe que a auxiliar preparou a bandeja com instrumental que não passou pela autoclave — o pacote não tem o indicador de esterilização mudado de cor. A auxiliar foi nova e confundiu os pacotes. O paciente já está na cadeira com a boca aberta.`,
  personagem:{nome:"Situação na clínica",avatar:"paciente"},
  passos:[
    {
      fase:"Conduta imediata",
      pergunta:"O que o dentista deve fazer ao perceber os instrumentos não esterilizados?",
      opcoes:[
        {letra:"A", texto:"Usar os instrumentos mesmo assim — o procedimento é rápido e pouco invasivo"},
        {letra:"B", texto:"Interromper imediatamente a preparação, substituir por instrumental esterilizado e não expor o paciente ao risco"},
        {letra:"C", texto:"Avisar o paciente e pedir que ele assine um termo de consentimento de risco"},
        {letra:"D", texto:"Continuar apenas com os instrumentos descartáveis e dispensar os não esterilizados"}
      ],
      correta:"B",
      feedback:{
        A:"Usar instrumental não esterilizado é uma violação grave das normas de biossegurança, independentemente da duração ou invasividade do procedimento.",
        B:"Correto. A única conduta aceitável é interromper e substituir os instrumentos por um conjunto corretamente esterilizado. O paciente não precisa necessariamente ser avisado sobre o erro da auxiliar — isso deve ser uma decisão consciente do dentista. O procedimento continua após a substituição.",
        C:"Assinar termo de risco não autoriza o uso de material não esterilizado — é antiético.",
        D:"Os instrumentos descartáveis podem cobrir parte da bandeja, mas não substituem instrumentos reutilizáveis que devem estar esterilizados."
      }
    },
    {
      fase:"Gestão da equipe",
      pergunta:"Como o dentista deve lidar com a auxiliar após o ocorrido?",
      opcoes:[
        {letra:"A", texto:"Repreendê-la em voz alta na frente do paciente como exemplo"},
        {letra:"B", texto:"Ignorar o erro — foi um equívoco de novo funcionário sem consequências"},
        {letra:"C", texto:"Conversar com a auxiliar em particular, reforçar o protocolo de esterilização e registrar o ocorrido para treinamento"},
        {letra:"D", texto:"Demitir imediatamente para não correr riscos futuros"}
      ],
      correta:"C",
      feedback:{
        A:"Repreender funcionários publicamente é uma má prática de gestão que cria ambiente de medo.",
        B:"Ignorar erros de biossegurança permite recorrência — o protocolo deve ser reforçado.",
        C:"Correto. O erro de um profissional novo requer correção educativa em ambiente privado: explicar o protocolo correto, verificar a compreensão, registrar para treinamento e acompanhar as próximas preparações de bandeja.",
        D:"Demissão imediata por erro de treinamento pode ser desproporcional — avaliação individual é necessária."
      }
    }
  ],
  competencias:[9,8,8,9,10,8,8,9]
},

{
  id:"CC-47", titulo:"Paciente que questiona o valor do tratamento após o procedimento",
  tipo:"multipla", modalidade:"multipla", complexidade:1, tempo:2, area:"Gestão de Conflito",
  contexto:`Paciente masculino, 52 anos, acabou de realizar uma extração simples. Ao receber a conta, diz: "R$ 350 por arrancar um dente? Isso foi 10 minutos de trabalho! Tem um lugar aqui perto que cobra R$ 80." Não houve apresentação formal de orçamento prévio antes do procedimento.`,
  personagem:{nome:"Paciente questionando valor",avatar:"paciente"},
  passos:[
    {
      fase:"Gestão do conflito financeiro",
      pergunta:"Como o dentista deve responder à contestação do valor?",
      opcoes:[
        {letra:"A", texto:"Dizer que o paciente deveria ter perguntado antes e que o valor está correto"},
        {letra:"B", texto:"Reduzir o valor imediatamente para evitar conflito"},
        {letra:"C", texto:"Explicar com calma o que o valor inclui (anestesia, material, biossegurança, formação profissional) e reconhecer que o orçamento prévio deveria ter sido apresentado"},
        {letra:"D", texto:"Comparar com a concorrência e justificar que o concorrente usa material inferior"}
      ],
      correta:"C",
      feedback:{
        A:"Culpar o paciente por não ter perguntado não resolve o conflito e pode piorar a relação.",
        B:"Reduzir o valor sob pressão sem justificativa desvaloriza o trabalho e cria precedente ruim.",
        C:"Correto. O dentista deve reconhecer a falha (ausência de orçamento prévio) e explicar o que compõe o valor (materiais, EPI, anestésico, formação, infraestrutura). A partir daí, uma negociação respeitosa é possível. Apresentar orçamento ANTES de todo procedimento é boa prática obrigatória.",
        D:"Falar negativamente de concorrentes é antiético e veda pelo Código de Ética Odontológico."
      }
    },
    {
      fase:"Prevenção",
      pergunta:"Qual medida evita esse tipo de conflito nas próximas consultas?",
      opcoes:[
        {letra:"A", texto:"Exibir a tabela de preços apenas no site da clínica"},
        {letra:"B", texto:"Apresentar orçamento detalhado por escrito ANTES de qualquer procedimento e obter assinatura do paciente"},
        {letra:"C", texto:"Cobrar valores menores para não gerar queixas"},
        {letra:"D", texto:"Evitar discutir valores com pacientes — mandar para a recepção resolver"}
      ],
      correta:"B",
      feedback:{
        A:"Tabela no site não substitui o orçamento individualizado por procedimento.",
        B:"Correto. Orçamento escrito e assinado antes do procedimento é proteção jurídica e ética para ambos os lados. Evita surpresas, alinha expectativas e é exigência do Código de Defesa do Consumidor para serviços prestados.",
        C:"Cobrar menos não resolve o problema de comunicação — o conflito pode surgir mesmo com valores baixos.",
        D:"O dentista não pode se isentar das discussões sobre valores — é parte do relacionamento com o paciente."
      }
    }
  ],
  competencias:[7,8,8,7,7,8,9,9]
},

{
  id:"CC-48", titulo:"Paciente adulto chora de medo antes do procedimento",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Ética e Comunicação",
  contexto:`Paciente feminina, 38 anos, entra no consultório para restauração de rotina e começa a chorar quando vê a bandeja de instrumentos. Diz que sofreu um trauma em uma extração feita de forma brusca quando tinha 12 anos e "nunca mais conseguiu ir ao dentista direito". Essa é a segunda tentativa neste ano — na primeira, foi embora sem ser atendida.`,
  personagem:{nome:"Paciente com odontofobia",avatar:"paciente"},
  passos:[
    {
      fase:"Abordagem empática",
      pergunta:"Qual deve ser a atitude inicial do dentista ao perceber o choro e o medo?",
      opcoes:[
        {letra:"A", texto:"Dizer que não tem nada de especial e que ela precisa ser mais corajosa"},
        {letra:"B", texto:"Pausar, sentar na altura da paciente, reconhecer o medo sem julgamento e perguntar como ela está"},
        {letra:"C", texto:"Chamar imediatamente a família ou acompanhante para acalmá-la"},
        {letra:"D", texto:"Realizar o procedimento rápido antes que o medo piore"}
      ],
      correta:"B",
      feedback:{
        A:"Dizer que 'não tem nada de especial' invalida o sentimento da paciente e piora a relação terapêutica.",
        B:"Correto. A abordagem inicial em paciente com odontofobia é: parar, mudar a postura corporal (sentar, não ficar de pé sobre ela), olhar nos olhos, reconhecer o medo de forma genuína ('Eu entendo que é difícil. Pode me contar o que aconteceu?'). Isso cria segurança antes de qualquer procedimento.",
        C:"Chamar a família pode ser útil, mas não é o primeiro passo — o dentista precisa ele mesmo criar o vínculo.",
        D:"Fazer rápido enquanto a paciente está em crise de ansiedade consolida o trauma em vez de tratá-lo."
      }
    },
    {
      fase:"Adaptação do plano",
      pergunta:"Como o dentista deve conduzir esta consulta com a paciente em crise de medo?",
      opcoes:[
        {letra:"A", texto:"Realizar o procedimento completo normalmente — a paciente precisa 'encarar' o medo"},
        {letra:"B", texto:"Encaminhar para psicólogo e cancelar todas as consultas odontológicas"},
        {letra:"C", texto:"Propor uma consulta de habituação sem procedimento: apenas conversa, tour pelo consultório, mostrar instrumentos e estabelecer um sinal de parada"},
        {letra:"D", texto:"Prescrever benzodiazepínico para a próxima consulta sem avaliação médica"}
      ],
      correta:"C",
      feedback:{
        A:"Forçar o procedimento sobre medo intenso consolida o trauma e prejudica consultas futuras.",
        B:"Psicólogo pode ser parceiro, mas encerrar as consultas odontológicas não é solução — a condição bucal precisa ser tratada.",
        C:"Correto. A dessensibilização progressiva é a abordagem-padrão para odontofobia: primeiro consulta de reconhecimento (sem instrumentos, sem cadeira inclinada), depois exposição gradual, estabelecimento de um sinal de parada acordado com a paciente ('se quiser parar, levante a mão esquerda'). Constrói confiança.",
        D:"Sedação farmacológica pode ser indicada em casos graves, mas requer avaliação médica — não é prescrição de rotina pelo dentista sem critério."
      }
    }
  ],
  competencias:[9,8,8,7,7,8,9,9]
},

{
  id:"CC-49", titulo:"Paciente descobre cárie não informada em consulta anterior",
  tipo:"multipla", modalidade:"multipla", complexidade:3, tempo:3, area:"Ética e Comunicação",
  contexto:`Paciente feminina, 41 anos, troca de dentista e durante a avaliação inicial descobre que tem cárie profunda no dente 46 com lesão periapical. Ela relata que o dentista anterior, há 4 meses, disse que "estava tudo bem" em uma radiografia. Ela fica indignada e diz que vai processar a clínica anterior e quer que o novo dentista "confirme por escrito" que foi negligência.`,
  personagem:{nome:"Paciente com queixa sobre atendimento anterior",avatar:"paciente"},
  passos:[
    {
      fase:"Postura ética do novo dentista",
      pergunta:"Como o dentista atual deve lidar com a solicitação de confirmar negligência por escrito?",
      opcoes:[
        {letra:"A", texto:"Assinar um laudo afirmando negligência — o novo exame prova que houve erro"},
        {letra:"B", texto:"Explicar que não é possível confirmar negligência sem ver o exame anterior e orientar sobre os caminhos adequados (CRO, advogado)"},
        {letra:"C", texto:"Concordar verbalmente mas não assinar nada para não se comprometer"},
        {letra:"D", texto:"Negar a existência da lesão para evitar conflito"}
      ],
      correta:"B",
      feedback:{
        A:"Assinar laudo de negligência sem ver o exame anterior é irresponsável. Sem ter acesso à radiografia do momento anterior, o novo dentista não tem como atestar o que era visível 4 meses atrás.",
        B:"Correto. O dentista deve descrever objetivamente o achado atual no prontuário, informar à paciente sobre os canais legais para queixas (CRO local, advogado) e não emitir opiniões sobre a conduta de outro profissional sem acesso à documentação completa.",
        C:"Concordar verbalmente já configura comprometimento sem base técnica — deve ser evitado.",
        D:"Negar a lesão para evitar conflito seria antiético e prejudicial à paciente."
      }
    },
    {
      fase:"Ação do novo dentista",
      pergunta:"O que o novo dentista deve fazer em relação ao tratamento da paciente?",
      opcoes:[
        {letra:"A", texto:"Aguardar o resultado do processo judicial antes de tratar"},
        {letra:"B", texto:"Tratar a condição atual (lesão periapical) com urgência e documentar os achados objetivamente no prontuário"},
        {letra:"C", texto:"Recusar o atendimento para não se envolver no caso"},
        {letra:"D", texto:"Tratar apenas depois de obter os registros do dentista anterior"}
      ],
      correta:"B",
      feedback:{
        A:"Aguardar processo judicial pode levar meses — a lesão periapical ativa exige tratamento.",
        B:"Correto. O tratamento da condição clínica atual não depende do histórico jurídico. O dentista deve tratar a lesão, documentar tudo objetivamente no prontuário e orientar a paciente sobre seus direitos de forma separada do tratamento.",
        C:"Recusar tratamento de urgência é abandonar o paciente.",
        D:"O tratamento não deve ser retardado pela burocracia do histórico."
      }
    },
    {
      fase:"Documentação adequada",
      pergunta:"Qual é a importância da documentação clínica neste tipo de caso?",
      opcoes:[
        {letra:"A", texto:"A documentação é importante apenas para processos judiciais, não para o tratamento"},
        {letra:"B", texto:"O prontuário objetivo com registros do estado inicial, radiografias e evolução protege o dentista e garante continuidade do cuidado"},
        {letra:"C", texto:"Fotos clínicas são suficientes — não há necessidade de radiografia"},
        {letra:"D", texto:"Documentar o estado inicial pode ser usado contra o dentista em processos futuros — é melhor não detalhar"}
      ],
      correta:"B",
      feedback:{
        A:"A documentação é fundamental para o cuidado contínuo, além da proteção legal.",
        B:"Correto. Prontuário completo (anamnese, fotos, radiografias, plano de tratamento) é obrigatório e protege o profissional. Um dentista que documenta bem raramente enfrenta processos — pois a documentação prova a conduta adequada.",
        C:"Fotos clínicas são complementares, não substituem radiografias para diagnóstico.",
        D:"Omitir documentação por medo de processos é estratégia perigosa e antiética. Um prontuário incompleto é muito mais vulnerável juridicamente."
      }
    }
  ],
  competencias:[8,8,9,8,7,7,9,9]
},

{
  id:"CC-50", titulo:"Colaborador questiona conduta do dentista na frente do paciente",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Gestão de Conflito",
  contexto:`Durante uma restauração, a auxiliar diz em voz alta, na frente do paciente: "Mas doutor, você não vai colocar o hidróxido de cálcio primeiro? Na outra clínica que trabalhei sempre faziam assim." O paciente está acordado, ouviu tudo, e fica visivelmente preocupado.`,
  personagem:{nome:"Situação com auxiliar",avatar:"paciente"},
  passos:[
    {
      fase:"Gestão do momento",
      pergunta:"Qual deve ser a atitude imediata do dentista diante do questionamento público da auxiliar?",
      opcoes:[
        {letra:"A", texto:"Discutir com a auxiliar sobre protocolos na frente do paciente"},
        {letra:"B", texto:"Ignorar o comentário e continuar o procedimento sem responder"},
        {letra:"C", texto:"Explicar brevemente ao paciente que há diferentes protocolos válidos e que a conduta está sendo feita corretamente, sem expor a auxiliar"},
        {letra:"D", texto:"Repreender a auxiliar em voz alta para demonstrar autoridade"}
      ],
      correta:"C",
      feedback:{
        A:"Discutir protocolos durante um procedimento com paciente acordado causa insegurança e não é o momento adequado.",
        B:"Ignorar gera mais dúvida no paciente que já ouviu o questionamento.",
        C:"Correto. A prioridade imediata é tranquilizar o paciente: 'Pode ficar tranquilo, a conduta está de acordo com a situação clínica.' Após o procedimento, a conversa com a auxiliar acontece em particular. Minimiza o impacto para o paciente sem expor a profissional.",
        D:"Repreender em público é uma má prática de gestão que afeta o ambiente de trabalho."
      }
    },
    {
      fase:"Conversa posterior",
      pergunta:"Como o dentista deve abordar a auxiliar após o atendimento?",
      opcoes:[
        {letra:"A", texto:"Ignorar o ocorrido — a intenção era boa e não causou dano real"},
        {letra:"B", texto:"Demitir a auxiliar por desrespeitar a autoridade do dentista"},
        {letra:"C", texto:"Conversar em particular: explicar por que a conduta foi adequada, estabelecer que dúvidas clínicas devem ser levantadas APÓS a consulta ou em momentos privativos"},
        {letra:"D", texto:"Proibir a auxiliar de falar durante todos os procedimentos"}
      ],
      correta:"C",
      feedback:{
        A:"Ignorar cria precedente para que o comportamento se repita.",
        B:"Demissão por uma situação que pode ser resolvida com comunicação é desproporcional.",
        C:"Correto. A conversa deve ser educativa: esclarecer o raciocínio clínico da conduta, valorizar a curiosidade da auxiliar, mas estabelecer um protocolo claro — dúvidas sobre procedimentos são levantadas antes ou após, nunca durante o atendimento com o paciente presente.",
        D:"Proibir toda comunicação durante procedimentos é inviável e pode prejudicar a segurança do atendimento."
      }
    }
  ],
  competencias:[8,7,8,8,8,8,9,9]
},

{
  id:"CC-51", titulo:"Paciente que chega ao consultório alcoolizado",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Urgência",
  contexto:`Paciente masculino, 47 anos, aparece sem agendamento com odor etílico intenso, fala arrastada e pede para extrair um dente que "está incomodando há dias". Ao exame rápido, há inflamação visible no dente 38. Ele insiste que está bem e quer ser atendido agora.`,
  personagem:{nome:"Paciente alcoolizado",avatar:"paciente"},
  passos:[
    {
      fase:"Avaliação para atendimento",
      pergunta:"O dentista pode realizar a extração neste paciente alcoolizado?",
      opcoes:[
        {letra:"A", texto:"Sim — se o dente está doendo, o atendimento deve ser prioritário independentemente do estado"},
        {letra:"B", texto:"Não — o álcool interage com anestésicos e anticoagula, e o paciente não pode dar consentimento informado válido neste estado"},
        {letra:"C", texto:"Sim, mas apenas se o paciente assinar uma descarga de responsabilidade"},
        {letra:"D", texto:"Apenas se a dor for avaliada como EVA > 7"}
      ],
      correta:"B",
      feedback:{
        A:"Realizar procedimento invasivo em paciente alcoolizado aumenta o risco de complicações e pode resultar em processo.",
        B:"Correto. O álcool tem efeito anticoagulante (aumenta risco de sangramento pós-extração), interfere na resposta ao anestésico e compromete a capacidade do paciente de dar consentimento informado. Sob intoxicação, o consentimento não é válido. A conduta é recusar o procedimento cirúrgico e orientar retorno sóbrio.",
        C:"Descarga de responsabilidade não valida o consentimento sob intoxicação.",
        D:"O estado de intoxicação invalida o procedimento independentemente da intensidade da dor."
      }
    },
    {
      fase:"Conduta adequada",
      pergunta:"O que o dentista pode oferecer ao paciente alcoolizado com dor?",
      opcoes:[
        {letra:"A", texto:"Nada — pedir que saia e retorne sóbrio sem mais orientações"},
        {letra:"B", texto:"Avaliação clínica básica, prescrição de analgésico para alívio e orientação para retornar sóbrio para o procedimento"},
        {letra:"C", texto:"Extração com sedação para minimizar os riscos do álcool"},
        {letra:"D", texto:"Encaminhar diretamente para o SAMU"}
      ],
      correta:"B",
      feedback:{
        A:"Dispensar sem qualquer cuidado quando há dor é negligência.",
        B:"Correto. O dentista pode avaliar o estado clínico básico, prescrever analgésico para o alívio da dor imediata e instruir o paciente a retornar sóbrio para o procedimento. Se houver sinal de infecção grave, pode indicar antibiótico. Registrar tudo no prontuário.",
        C:"Sedação em paciente alcoolizado é extremamente arriscada — potencializa a depressão do SNC.",
        D:"O SAMU é para emergências sistêmicas — embriaguez com dor dental não é indicação para SAMU salvo complicações graves."
      }
    }
  ],
  competencias:[9,8,9,9,8,7,8,9]
},

{
  id:"CC-52", titulo:"Paciente que não aceita diagnóstico do dentista",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Ética e Comunicação",
  contexto:`Paciente feminina, 55 anos, trouxe radiografias de outra clínica onde o dentista indicou extração do dente 46. Ela diz: "Esse dentista quer me cobrar uma extração e um implante. Quero uma segunda opinião. Você pode me dizer que esse dente pode ser salvo?" O exame radiográfico mostra fratura radicular vertical — critério clássico de extração.`,
  personagem:{nome:"Paciente buscando segunda opinião",avatar:"paciente"},
  passos:[
    {
      fase:"Postura ética na segunda opinião",
      pergunta:"Como o dentista deve agir diante do pedido de segunda opinião?",
      opcoes:[
        {letra:"A", texto:"Dizer que o dente pode ser salvo para agradar a paciente e garantir o atendimento"},
        {letra:"B", texto:"Realizar avaliação própria (exame clínico + radiográfico) e emitir opinião honesta baseada nos seus achados"},
        {letra:"C", texto:"Concordar com o colega sem examinar a paciente"},
        {letra:"D", texto:"Recusar a segunda opinião — é antiético questionar outro dentista"}
      ],
      correta:"B",
      feedback:{
        A:"Dizer o que a paciente quer ouvir em vez do que é clinicamente correto é desonesto e pode resultar em dano.",
        B:"Correto. Segunda opinião é um direito do paciente. O dentista deve examinar, fazer sua própria análise radiográfica e clínica, e dar uma opinião honesta — que pode confirmar ou divergir do colega. Se confirmar a extração, deve explicar o porquê com clareza e empatia.",
        C:"Concordar sem examinar é tão desonesto quanto discordar sem razão clínica.",
        D:"Segunda opinião é um direito legal e ético do paciente — não é questionamento antiético."
      }
    },
    {
      fase:"Comunicação do diagnóstico difícil",
      pergunta:"Como comunicar à paciente que o diagnóstico de extração está correto?",
      opcoes:[
        {letra:"A", texto:"Dizer apenas: 'O dentista anterior estava certo. Tem que tirar.' e encaminhar"},
        {letra:"B", texto:"Explicar visualmente o que a radiografia mostra, os motivos técnicos da indicação e as consequências de tentar salvar o dente"},
        {letra:"C", texto:"Pedir que a paciente aceite o diagnóstico sem mais questionamentos"},
        {letra:"D", texto:"Deixar a paciente sem resposta para ela buscar uma terceira opinião"}
      ],
      correta:"B",
      feedback:{
        A:"Comunicação fria e sem explicação não resolve a desconfiança da paciente.",
        B:"Correto. Mostrar a radiografia, apontar a fratura vertical, explicar por que ela não é tratável conservadoramente (sem possibilidade de vedação de fratura vertical), e discutir as opções pós-extração. Isso respeita a autonomia e a inteligência da paciente.",
        C:"Exigir aceitação sem explicação frustra o diálogo terapêutico.",
        D:"Deixar sem resposta piora a insegurança da paciente."
      }
    }
  ],
  competencias:[8,8,9,8,7,7,9,9]
},

{
  id:"CC-53", titulo:"Criança chora e recusa abrir a boca com pai autoritário",
  tipo:"multipla", modalidade:"multipla", complexidade:2, tempo:3, area:"Odontopediatria",
  contexto:`Paciente masculino, 6 anos, na cadeira para aplicação de selante. O pai diz: "Pode segurar ele à força, eu autorizo. Não pode mimar criança." A criança está chorando, se debatendo e recusando qualquer contato. Não há urgência clínica — é procedimento preventivo eletivo.`,
  personagem:{nome:"Criança com pai autoritário",avatar:"paciente"},
  passos:[
    {
      fase:"Decisão sobre a contenção",
      pergunta:"O pai autorizou a contenção física. O dentista pode conter a criança à força para o procedimento?",
      opcoes:[
        {letra:"A", texto:"Sim — com autorização dos pais, a contenção é juridicamente segura"},
        {letra:"B", texto:"Não — para procedimento eletivo, a contenção física não está indicada. O dentista tem autonomia técnica para recusar"},
        {letra:"C", texto:"Sim — a criança precisa aprender que tem que se comportar"},
        {letra:"D", texto:"Depende da idade — crianças menores de 5 anos podem ser contidas"}
      ],
      correta:"B",
      feedback:{
        A:"A autorização dos pais não torna a contenção eticamente adequada para procedimentos eletivos. O dentista tem responsabilidade técnica sobre a conduta.",
        B:"Correto. Contenção física para procedimento eletivo em criança sem cooperação é contraindicada — agrava o trauma psicológico, piora a relação com o dentista e pode causar dano físico. O dentista tem autonomia de recusar e propor abordagem adequada.",
        C:"A criança precisa de suporte emocional, não punição por medo.",
        D:"Não há faixa etária que justifique contenção para procedimento eletivo sem indicação clínica de urgência."
      }
    },
    {
      fase:"Estratégia para o pai",
      pergunta:"Como o dentista deve lidar com o pai que insiste na contenção?",
      opcoes:[
        {letra:"A", texto:"Discutir com o pai sobre métodos educacionais na frente da criança"},
        {letra:"B", texto:"Explicar ao pai, em particular, os riscos da contenção e propor abordagem gradual com dessensibilização"},
        {letra:"C", texto:"Pedir que o pai assine um documento autorizando a contenção e prosseguir"},
        {letra:"D", texto:"Realizar o procedimento rápido com contenção antes que o pai mude de ideia"}
      ],
      correta:"B",
      feedback:{
        A:"Discutir na frente da criança piora a situação.",
        B:"Correto. Conversa em separado com o pai (longe da criança): explicar que a contenção forçada para selante piora o medo e pode fazer a criança recusar toda odontologia futura. Propor: consulta de habituação hoje + selante na próxima consulta após vínculo estabelecido.",
        C:"Documento de autorização não muda a contraindicação clínica.",
        D:"Prosseguir às pressas é a pior abordagem possível."
      }
    }
  ],
  competencias:[9,8,8,7,7,8,9,9]
},

{
  id:"CC-54", titulo:"Funcionário relata acidente com material perfurocortante",
  tipo:"multipla", modalidade:"multipla", complexidade:3, tempo:3, area:"Biossegurança",
  contexto:`A auxiliar odontológica informa que se picou com uma agulha usada no atendimento de um paciente que tem HIV, durante o descarte. Ela estava com luvas mas a agulha atravessou. O acidente ocorreu há 20 minutos. Ela está assustada e perguntando o que fazer.`,
  personagem:{nome:"Situação de acidente ocupacional",avatar:"paciente"},
  passos:[
    {
      fase:"Conduta imediata",
      pergunta:"Quais são os primeiros passos após o acidente com material perfurocortante?",
      opcoes:[
        {letra:"A", texto:"Lavar o local com hipoclorito de sódio para matar o vírus"},
        {letra:"B", texto:"Lavar abundantemente com água e sabão, não espremer, e encaminhar imediatamente para UPA/pronto-socorro para avaliação e profilaxia pós-exposição"},
        {letra:"C", texto:"Esperar 24 horas para ver se surgem sintomas antes de tomar qualquer atitude"},
        {letra:"D", texto:"Deixar o local sangrar por alguns minutos para expulsar o vírus"}
      ],
      correta:"B",
      feedback:{
        A:"Hipoclorito não é indicado para lavar ferimento aberto — é cáustico.",
        B:"Correto. Protocolo imediato: lavar com água corrente e sabão (não espremer), não usar álcool ou hipoclorito no ferimento. Encaminhar IMEDIATAMENTE para UPA ou hospital de referência — a profilaxia pós-exposição (PEP) deve ser iniciada idealmente em até 2 horas (máximo 72h).",
        C:"Esperar 24 horas pode comprometer a eficácia da PEP.",
        D:"Espremer ou fazer sangrar ativamente pode aumentar a exposição — contraindicado."
      }
    },
    {
      fase:"Responsabilidade da clínica",
      pergunta:"Quais são as obrigações legais da clínica após este acidente de trabalho?",
      opcoes:[
        {letra:"A", texto:"Nenhuma — acidente de trabalho é responsabilidade do funcionário"},
        {letra:"B", texto:"Emitir a CAT (Comunicação de Acidente de Trabalho), custear o atendimento e acompanhamento e registrar o acidente no livro da CIPA"},
        {letra:"C", texto:"Pagar apenas os exames de HIV do primeiro dia"},
        {letra:"D", texto:"Demitir a funcionária para evitar problemas futuros com o plano de saúde"}
      ],
      correta:"B",
      feedback:{
        A:"Acidente de trabalho com material biológico é obrigação do empregador gerenciar.",
        B:"Correto. A clínica é obrigada a: emitir a CAT imediatamente, custear todo o protocolo de PEP (medicamentos, exames serológicos por 6 meses), garantir o acompanhamento médico e registrar o acidente conforme NR-32. Omitir é infração trabalhista grave.",
        C:"O protocolo pós-exposição inclui exames periódicos por 6 meses — não apenas no dia do acidente.",
        D:"Demitir por acidente de trabalho é ilegal e configura discriminação."
      }
    },
    {
      fase:"Prevenção de acidentes",
      pergunta:"Qual medida previne diretamente este tipo de acidente com agulha?",
      opcoes:[
        {letra:"A", texto:"Usar dois pares de luvas durante todos os procedimentos"},
        {letra:"B", texto:"Nunca reencapar agulhas manualmente e usar caixas de descarte rígidas adequadas posicionadas próximas ao ponto de uso"},
        {letra:"C", texto:"Treinar os funcionários para ter mais cuidado"},
        {letra:"D", texto:"Usar apenas instrumentos descartáveis de menor calibre"}
      ],
      correta:"B",
      feedback:{
        A:"Dois pares de luvas reduzem mas não eliminam o risco de picada.",
        B:"Correto. A principal causa de acidentes com agulha é o reencape manual. A NR-32 proíbe expressamente o reencape e exige descarte imediato em caixas rígidas (tipo BD) no local de geração. Posicionar as caixas dentro do alcance do ponto de uso é fundamental.",
        C:"Treinar é importante mas não substitui as medidas estruturais.",
        D:"O calibre do instrumento não é o fator determinante."
      }
    }
  ],
  competencias:[9,8,8,9,10,8,7,9]
},

{
  id:"CC-55", titulo:"Paciente solicita desconto e questiona a nota fiscal",
  tipo:"multipla", modalidade:"multipla", complexidade:1, tempo:2, area:"Ética e Comunicação",
  contexto:`Ao finalizar uma consulta de restauração (R$ 400), o paciente diz: "Se você não emitir nota fiscal, me dá um desconto de 20%, tá? Todo mundo faz isso." O dentista trabalha como profissional liberal com emissão regular de notas. Há outros pacientes na recepção que podem ouvir.`,
  personagem:{nome:"Paciente solicitando irregularidade fiscal",avatar:"paciente"},
  passos:[
    {
      fase:"Postura ética e legal",
      pergunta:"Como o dentista deve responder à proposta do paciente?",
      opcoes:[
        {letra:"A", texto:"Aceitar — é uma prática comum e o desconto é razoável"},
        {letra:"B", texto:"Recusar de forma firme mas educada, explicar a obrigação legal de emitir nota e não ceder à pressão"},
        {letra:"C", texto:"Aceitar apenas desta vez para não perder o paciente"},
        {letra:"D", texto:"Discutir com o paciente sobre sonegação de impostos em voz alta na recepção"}
      ],
      correta:"B",
      feedback:{
        A:"Aceitar é sonegação fiscal — infração ao CRO, à Receita Federal e viola o Código de Ética Odontológico.",
        B:"Correto. O dentista deve recusar de forma firme e tranquila: 'Infelizmente não é possível. Sou obrigado por lei a emitir nota para todos os serviços. Posso oferecer parcelamento se o valor for um problema.' Encerrar o assunto sem constrangimento desnecessário.",
        C:"'Apenas desta vez' raramente é — o paciente vai repetir o pedido.",
        D:"Discutir em voz alta na recepção expõe o paciente desnecessariamente."
      }
    },
    {
      fase:"Orientação sobre nota fiscal odontológica",
      pergunta:"Qual é a obrigação fiscal do cirurgião-dentista autônomo em relação às notas fiscais?",
      opcoes:[
        {letra:"A", texto:"Emitir nota apenas para serviços acima de R$ 1.000"},
        {letra:"B", texto:"Emitir Recibo de Pagamento Autônomo (RPA) ou nota fiscal de serviço para todos os atendimentos, independentemente do valor"},
        {letra:"C", texto:"Nota fiscal é obrigatória apenas para clínicas com CNPJ"},
        {letra:"D", texto:"O paciente não tem direito a nota fiscal — apenas recibo informal"}
      ],
      correta:"B",
      feedback:{
        A:"Não existe limite de valor para obrigação de emissão — toda prestação de serviço gera obrigação fiscal.",
        B:"Correto. O dentista autônomo é obrigado a emitir documento fiscal para todo serviço prestado, independentemente do valor. Pode ser nota fiscal de serviço (município) ou RPA. O não cumprimento caracteriza sonegação fiscal.",
        C:"Profissional liberal autônomo também tem obrigação fiscal, mesmo sem CNPJ.",
        D:"O paciente tem direito ao documento fiscal — o recibo informal não isenta o profissional das obrigações tributárias."
      }
    }
  ],
  competencias:[7,7,8,7,7,7,9,9]
}

];
