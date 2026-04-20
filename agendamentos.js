/* ============================================================
   SimuCare — Cenários de Agendamento (50 cenários)
   ============================================================
   Modalidade: Agendamento
   Estrutura: 3 etapas (Dados do paciente, Agendamento, Materiais)
   ============================================================ */

window.AGENDAMENTOS = [
{
  id:'AG-21', titulo:'Agendamento: Limpeza com orientação',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Limpeza + orientação personalizada de higiene.',
  contexto:'Paciente com acúmulo de biofilme.',
  dadosPaciente:{ campos:[
    { chave:'queixa', label:'Queixa principal', obrigatorio:true },
{ chave:'freq_escova', label:'Frequência escovação (vezes/dia)', obrigatorio:true },
{ chave:'usa_fio', label:'Usa fio dental?', obrigatorio:true }
  ]},
  agenda:{ correto:{ sala:'Consultório A', dias:['segunda','terça','quarta','quinta','sexta'], horarios:['08:00','09:00','10:00','14:00','15:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Escova de dentes macia' },
{ id:'m2', nome:'Fio dental 50m' },
{ id:'m3', nome:'Clorexidina 0.12%' },
{ id:'m4', nome:'Pasta de dente com flúor' },
{ id:'m5', nome:'Raspador de língua' }
  ], corretos:['m1','m2','m4'] }
},
{
  id:'AG-22', titulo:'Agendamento: Avaliação estética',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Avaliação para tratamento estético do sorriso.',
  contexto:'Paciente insatisfeito com estética.',
  dadosPaciente:{ campos:[
    { chave:'insatisfacao', label:'O que deseja melhorar?', obrigatorio:true },
{ chave:'expectativa', label:'Expectativa realista?', obrigatorio:true },
{ chave:'orcamento', label:'Orçamento definido?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório B', dias:['terça','quarta','quinta','sexta'], horarios:['10:00','11:00','14:00','15:00','16:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Guia de cor VITA' },
{ id:'m2', nome:'Espelho intraoral' },
{ id:'m3', nome:'Paquímetro digital' },
{ id:'m4', nome:'Câmera fotográfica' },
{ id:'m5', nome:'Tomografia digital' }
  ], corretos:['m1','m2','m4'] }
},
{
  id:'AG-23', titulo:'Agendamento: Tratamento de cárie',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Restauração de cárie simples em dente posterior.',
  contexto:'Paciente com cárie interproximal confirmada.',
  dadosPaciente:{ campos:[
    { chave:'localizacao', label:'Qual dente afetado?', obrigatorio:true },
{ chave:'sensibilidade', label:'Tem sensibilidade?', obrigatorio:true },
{ chave:'ultima_limpeza', label:'Última limpeza quando?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório A', dias:['segunda','terça','quarta','quinta','sexta'], horarios:['08:30','09:30','14:30','15:30'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Dique de borracha' },
{ id:'m2', nome:'Resina composta bulk-fill' },
{ id:'m3', nome:'Adesivo universal' },
{ id:'m4', nome:'Matriz de contorno' },
{ id:'m5', nome:'Bisturi carbide' }
  ], corretos:['m1','m2','m3','m4'] }
},
{
  id:'AG-24', titulo:'Agendamento: Profilaxia e flúor',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Limpeza simples + aplicação de flúor tópico.',
  contexto:'Manutenção periódica de paciente baixo risco.',
  dadosPaciente:{ campos:[
    { chave:'ultima_profilaxia', label:'Última profilaxia quando?', obrigatorio:true },
{ chave:'medicacoes', label:'Tem medicações especiais?', obrigatorio:false },
{ chave:'alergias', label:'Alergias conhecidas?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório C', dias:['segunda','terça','quarta','quinta','sexta'], horarios:['08:00','09:00','10:00','11:00','14:00','15:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Taça de borracha' },
{ id:'m2', nome:'Pasta de polimento' },
{ id:'m3', nome:'Verniz de flúor 22000ppm' },
{ id:'m4', nome:'Fio dental' },
{ id:'m5', nome:'Gel fluoretado' }
  ], corretos:['m1','m2','m3'] }
},
{
  id:'AG-25', titulo:'Agendamento: Extração dentária',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Extração de dente incluso ou com indicação clara.',
  contexto:'Paciente com dente irrecuperável ou impactado.',
  dadosPaciente:{ campos:[
    { chave:'qual_dente', label:'Qual dente será extraído?', obrigatorio:true },
{ chave:'motivo', label:'Motivo da extração?', obrigatorio:true },
{ chave:'ansiedade', label:'Nível de ansiedade?', obrigatorio:true }
  ]},
  agenda:{ correto:{ sala:'Consultório Cirúrgico', dias:['segunda','quarta','quinta','sexta'], horarios:['08:00','09:00','14:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Fórceps para extração' },
{ id:'m2', nome:'Elevador dentário' },
{ id:'m3', nome:'Gaze estéril' },
{ id:'m4', nome:'Sutura reabsorvível' },
{ id:'m5', nome:'Anestésico potente' }
  ], corretos:['m1','m2','m3','m4'] }
},
{
  id:'AG-26', titulo:'Agendamento: Avaliação de DTM',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Avaliação completa de disfunção temporomandibular.',
  contexto:'Paciente com sintomas de DTM.',
  dadosPaciente:{ campos:[
    { chave:'dor_articular', label:'Onde sente dor?', obrigatorio:true },
{ chave:'clicks', label:'Tem estalos ou clicks?', obrigatorio:true },
{ chave:'mordida', label:'Dificuldade ao abrir boca?', obrigatorio:true }
  ]},
  agenda:{ correto:{ sala:'Consultório B', dias:['terça','quarta','quinta'], horarios:['09:00','10:00','14:00','15:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Eletromiografia' },
{ id:'m2', nome:'Arco facial' },
{ id:'m3', nome:'Palpador de articulação' },
{ id:'m4', nome:'Tomografia articular' },
{ id:'m5', nome:'Ressonância magnética' }
  ], corretos:['m2','m3','m4'] }
},
{
  id:'AG-27', titulo:'Agendamento: Clareamento de consultório',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Clareamento profissional com peróxido concentrado.',
  contexto:'Paciente deseja clarear dentes vitais.',
  dadosPaciente:{ campos:[
    { chave:'sensibilidade_atual', label:'Tem sensibilidade atual?', obrigatorio:true },
{ chave:'tonalidade_atual', label:'Tonalidade atual (estimada)?', obrigatorio:false },
{ chave:'expectativa_cor', label:'Cor final desejada?', obrigatorio:true }
  ]},
  agenda:{ correto:{ sala:'Consultório Estético', dias:['terça','quinta','sexta'], horarios:['10:00','11:00','14:00','15:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Peróxido de hidrogênio 35%' },
{ id:'m2', nome:'Barreira gengival' },
{ id:'m3', nome:'Escala de cor VITA' },
{ id:'m4', nome:'Gel dessensibilizante' },
{ id:'m5', nome:'Bandeja de moldagem' }
  ], corretos:['m1','m2','m3'] }
},
{
  id:'AG-28', titulo:'Agendamento: Periodontia básica',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Raspagem supragengival + instrumentação cuidadosa.',
  contexto:'Paciente com gengivite ou periodontite inicial.',
  dadosPaciente:{ campos:[
    { chave:'sangramento', label:'Sangra durante escovação?', obrigatorio:true },
{ chave:'mobilidade', label:'Dentes soltos?', obrigatorio:false },
{ chave:'halitose', label:'Presença de halitose?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório A', dias:['segunda','terça','quarta','quinta','sexta'], horarios:['08:30','09:30','14:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Ultrassom periodontal' },
{ id:'m2', nome:'Curetas de Gracey' },
{ id:'m3', nome:'Clorexidina 0.12%' },
{ id:'m4', nome:'Sonda periodontal' },
{ id:'m5', nome:'Espelho de boca' }
  ], corretos:['m1','m2','m4'] }
},
{
  id:'AG-29', titulo:'Agendamento: Endodontia diagnóstica',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Avaliação de vitalidade pulpar e diagnóstico de endodoncia.',
  contexto:'Paciente com suspeita de envolvimento pulpar.',
  dadosPaciente:{ campos:[
    { chave:'tipo_dor', label:'Tipo de dor (espontânea/provocada)?', obrigatorio:true },
{ chave:'duracao', label:'Quanto tempo dura a dor?', obrigatorio:true },
{ chave:'localizacao_exata', label:'Dente específico confirmado?', obrigatorio:true }
  ]},
  agenda:{ correto:{ sala:'Consultório A', dias:['segunda','terça','quarta','quinta','sexta'], horarios:['08:00','09:00','14:00','15:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Teste de vitalidade térmica' },
{ id:'m2', nome:'Teste elétrico de vitalidade' },
{ id:'m3', nome:'Radiografia periapical' },
{ id:'m4', nome:'Teste de percussão' },
{ id:'m5', nome:'Teste de mobilidade' }
  ], corretos:['m1','m2','m3','m4'] }
},
{
  id:'AG-30', titulo:'Agendamento: Ajuste oclusal simples',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Ajuste de contatos prematuros pós-restauração.',
  contexto:'Paciente com desconforto oclusal após tratamento.',
  dadosPaciente:{ campos:[
    { chave:'qual_restauracao', label:'Qual restauração foi feita?', obrigatorio:true },
{ chave:'quando_feita', label:'Quando foi feita?', obrigatorio:true },
{ chave:'tipo_desconforto', label:'Como se manifesta o desconforto?', obrigatorio:true }
  ]},
  agenda:{ correto:{ sala:'Consultório A', dias:['segunda','quarta','quinta','sexta'], horarios:['08:30','09:30','14:30','15:30'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Papel carbono' },
{ id:'m2', nome:'Disco de desgaste fino' },
{ id:'m3', nome:'Disco de polimento' },
{ id:'m4', nome:'Pasta de polimento' },
{ id:'m5', nome:'Espelho intraoral' }
  ], corretos:['m1','m2','m3','m4'] }
},
{
  id:'AG-31', titulo:'Agendamento: Restauração de emergência',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Restauração temporária para alívio de sintomas agudos.',
  contexto:'Paciente com dor ou dente fraturado necessitando alívio imediato.',
  dadosPaciente:{ campos:[
    { chave:'tipo_emergencia', label:'Qual é a emergência?', obrigatorio:true },
{ chave:'duracao_dor', label:'Quanto tempo tem dor?', obrigatorio:false },
{ chave:'tomou_medicacao', label:'Tomou medicação?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório A', dias:['segunda','terça','quarta','quinta','sexta'], horarios:['08:00','09:00','10:00','11:00','14:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Resina acrílica autopolimerizável' },
{ id:'m2', nome:'Cimento de óxido de zinco' },
{ id:'m3', nome:'Analgésicos' },
{ id:'m4', nome:'Gaze estéril' },
{ id:'m5', nome:'Algodão' }
  ], corretos:['m1','m2','m4'] }
},
{
  id:'AG-32', titulo:'Agendamento: Moldagem para prótese',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Moldagem preliminar e final para confecção de prótese dentária.',
  contexto:'Paciente edêntulo necessitando de prótese completa ou parcial.',
  dadosPaciente:{ campos:[
    { chave:'tipo_prótese', label:'Que tipo de prótese?', obrigatorio:true },
{ chave:'anterio_uso', label:'Tem experiência com prótese?', obrigatorio:false },
{ chave:'expectativa', label:'Qual sua expectativa?', obrigatorio:true }
  ]},
  agenda:{ correto:{ sala:'Consultório Protético', dias:['terça','quinta'], horarios:['10:00','11:00','14:00','15:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Alginato' },
{ id:'m2', nome:'Espátula de moldagem' },
{ id:'m3', nome:'Bandeja de moldagem' },
{ id:'m4', nome:'Gesso tipo III' },
{ id:'m5', nome:'Elastômero' }
  ], corretos:['m1','m2','m3','m4'] }
},
{
  id:'AG-33', titulo:'Agendamento: Instalação de implante',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Cirurgia de colocação de implante osseointegrado.',
  contexto:'Paciente com planejamento completo para implante.',
  dadosPaciente:{ campos:[
    { chave:'qual_regiao', label:'Qual região do implante?', obrigatorio:true },
{ chave:'densidade_ossea', label:'Densidade óssea adequada?', obrigatorio:true },
{ chave:'motivo_perda', label:'Por que perdeu o dente?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Bloco Cirúrgico', dias:['segunda','quarta','sexta'], horarios:['08:00','09:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Implante dentário' },
{ id:'m2', nome:'Abutment' },
{ id:'m3', nome:'Guia cirúrgico' },
{ id:'m4', nome:'Sutura reabsorvível' },
{ id:'m5', nome:'Enzimas hemostáticas' }
  ], corretos:['m1','m3','m4'] }
},
{
  id:'AG-34', titulo:'Agendamento: Cimentação de coroa',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Cimentação de coroa protética sobre dente preparado.',
  contexto:'Paciente com coroa pronta para ser instalada.',
  dadosPaciente:{ campos:[
    { chave:'qual_coroa', label:'Qual dente receberá coroa?', obrigatorio:true },
{ chave:'tipo_coroa', label:'Tipo de coroa (cerâmica/ouro)?', obrigatorio:true },
{ chave:'dor_preparacao', label:'Teve sensibilidade após prep?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório Protético', dias:['segunda','terça','quarta','quinta','sexta'], horarios:['09:00','10:00','14:00','15:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Cimento resinoso dual' },
{ id:'m2', nome:'Fio de retração gengival' },
{ id:'m3', nome:'Papel de carbono' },
{ id:'m4', nome:'Escova de dentes macia' },
{ id:'m5', nome:'Pedra de ar' }
  ], corretos:['m1','m2','m3'] }
},
{
  id:'AG-35', titulo:'Agendamento: Remoção de aparelho ortodôntico',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Remoção de aparelho fixo + limpeza profissional + planejamento de contenção.',
  contexto:'Paciente finalizando tratamento ortodôntico.',
  dadosPaciente:{ campos:[
    { chave:'tempo_uso', label:'Por quanto tempo usou aparelho?', obrigatorio:true },
{ chave:'satisfacao', label:'Satisfeito com o resultado?', obrigatorio:true },
{ chave:'consentir_conten', label:'Concorda com contenção?', obrigatorio:true }
  ]},
  agenda:{ correto:{ sala:'Consultório Ortho', dias:['segunda','quarta','quinta'], horarios:['09:00','10:00','14:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Alicate para remoção de bracket' },
{ id:'m2', nome:'Pasta de remoção de flúor' },
{ id:'m3', nome:'Escova de remoção' },
{ id:'m4', nome:'Retentor fixo de fio' },
{ id:'m5', nome:'Contentor removível' }
  ], corretos:['m1','m3','m4'] }
},
{
  id:'AG-36', titulo:'Agendamento: Tratamento de afta',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Diagnóstico e tratamento de úlcera aftosa.',
  contexto:'Paciente com afta dolorosa.',
  dadosPaciente:{ campos:[
    { chave:'localizacao_afta', label:'Onde está a afta?', obrigatorio:true },
{ chave:'duracao', label:'Há quanto tempo tem afta?', obrigatorio:true },
{ chave:'frequencia', label:'É frequente?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório A', dias:['segunda','terça','quarta','quinta','sexta'], horarios:['08:00','09:00','10:00','14:00','15:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Cauterizador de afta' },
{ id:'m2', nome:'Gel anestésico tópico' },
{ id:'m3', nome:'Enxaguante bucal' },
{ id:'m4', nome:'Protetor oral' },
{ id:'m5', nome:'Prescrição de antiviral' }
  ], corretos:['m2','m3','m4'] }
},
{
  id:'AG-37', titulo:'Agendamento: Avaliação de bruxismo',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Avaliação de bruxismo e indicação de placa oclusal.',
  contexto:'Paciente com suspeita de bruxismo noturno.',
  dadosPaciente:{ campos:[
    { chave:'quem_refere', label:'Quem notou (você/familiar)?', obrigatorio:true },
{ chave:'desgaste_nota', label:'Nota desgaste dentário?', obrigatorio:true },
{ chave:'dor_morning', label:'Acorda com dor na mandíbula?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório A', dias:['segunda','quarta','quinta','sexta'], horarios:['09:00','10:00','14:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Arco facial' },
{ id:'m2', nome:'Papel carbono' },
{ id:'m3', nome:'Moldeira de bruxismo' },
{ id:'m4', nome:'Elastômero para moldagem' },
{ id:'m5', nome:'Resina acrílica' }
  ], corretos:['m2','m3','m4'] }
},
{
  id:'AG-38', titulo:'Agendamento: Sondagem periodontal',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Sondagem periodontal completa + documentação de bolsas.',
  contexto:'Paciente com suspeita de periodontite.',
  dadosPaciente:{ campos:[
    { chave:'sangramento', label:'Sangramento durante sondagem?', obrigatorio:true },
{ chave:'mobilidade', label:'Algum dente com mobilidade?', obrigatorio:false },
{ chave:'ultimo_RX', label:'Último RX panorâmico quando?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório A', dias:['segunda','terça','quarta','quinta','sexta'], horarios:['08:30','09:30','14:00','15:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Sonda periodontal milimetrada' },
{ id:'m2', nome:'Explorador duplo' },
{ id:'m3', nome:'Espelho intraoral' },
{ id:'m4', nome:'Papel carbono' },
{ id:'m5', nome:'Gaze' }
  ], corretos:['m1','m2','m3'] }
},
{
  id:'AG-39', titulo:'Agendamento: Consulta de follow-up',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Reavaliação pós-tratamento e orientações de manutenção.',
  contexto:'Paciente em acompanhamento de caso finalizado.',
  dadosPaciente:{ campos:[
    { chave:'qual_tratamento', label:'Que tratamento foi realizado?', obrigatorio:true },
{ chave:'quando_feito', label:'Quando foi o tratamento?', obrigatorio:true },
{ chave:'como_esta', label:'Como está se sentindo?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório A', dias:['segunda','terça','quarta','quinta','sexta'], horarios:['08:00','09:00','10:00','14:00','15:00','16:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Instrumentos de inspeção' },
{ id:'m2', nome:'Fotografia intraoral' },
{ id:'m3', nome:'Radiografia periapical' },
{ id:'m4', nome:'Formulário de avaliação' },
{ id:'m5', nome:'Pasta de polimento' }
  ], corretos:['m1','m4'] }
},
{
  id:'AG-40', titulo:'Agendamento: Orientação de paciente novo',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Anamnese completa + explicação de procedimentos + cronograma de tratamento.',
  contexto:'Paciente primeira vez na clínica.',
  dadosPaciente:{ campos:[
    { chave:'motivo_visita', label:'Qual é a principal queixa?', obrigatorio:true },
{ chave:'ultima_visita', label:'Última visita ao dentista quando?', obrigatorio:true },
{ chave:'expectativa', label:'Qual sua expectativa de tratamento?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório A', dias:['segunda','terça','quarta','quinta','sexta'], horarios:['08:00','09:00','10:00','11:00','14:00','15:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Questionário de anamnese' },
{ id:'m2', nome:'Radiografia panorâmica' },
{ id:'m3', nome:'Fotografias faciais' },
{ id:'m4', nome:'Glossário de procedimentos' },
{ id:'m5', nome:'Formulário de consentimento' }
  ] }
},
// +10 novos cenários para atingir 50
{
  id:'AG-41', titulo:'Agendamento: Aplicação de selante',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Selagem de fossetas e fissuras em molares permanentes.',
  contexto:'Criança com molares permanentes propensos a cárie.',
  dadosPaciente:{ campos:[
    { chave:'idade_crianca', label:'Qual é a idade?', obrigatorio:true },
    { chave:'higiene_atual', label:'Higiene oral atual?', obrigatorio:true },
    { chave:'historico_carie', label:'Tem histórico de cárie?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório Pediátrico', dias:['segunda','terça','quarta','quinta','sexta'], horarios:['09:00','10:00','15:00','16:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Selante de fosseta/fissura' },
    { id:'m2', nome:'Ácido fosfórico 37%' },
    { id:'m3', nome:'Primer' },
    { id:'m4', nome:'Microescova de limpeza' },
    { id:'m5', nome:'Gaze absorvente' }
  ], corretos:['m1','m2','m4'] }
},
{
  id:'AG-42', titulo:'Agendamento: Tratamento de gengivite',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Instruções de higiene + raspagem leve + medicação',
  contexto:'Paciente com inflamação gengival leve.',
  dadosPaciente:{ campos:[
    { chave:'sangramentointensidade', label:'Intensidade do sangramento?', obrigatorio:true },
    { chave:'escovafrequencia', label:'Quantas vezes escova?', obrigatorio:true },
    { chave:'fumante', label:'É fumante?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório A', dias:['segunda','terça','quarta','quinta','sexta'], horarios:['08:00','09:00','14:00','15:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Escova de dentes macia' },
    { id:'m2', nome:'Fio dental com PTFE' },
    { id:'m3', nome:'Clorexidina gel' },
    { id:'m4', nome:'Pasta dentifrícia com flúor' },
    { id:'m5', nome:'Sprays antissépticos' }
  ], corretos:['m1','m2','m3'] }
},
{
  id:'AG-43', titulo:'Agendamento: Cimentação de inlay/onlay',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Instalação de restauração indireta em cerâmica ou ouro.',
  contexto:'Paciente com inlay/onlay confeccionada.',
  dadosPaciente:{ campos:[
    { chave:'qual_dente', label:'Em qual dente?', obrigatorio:true },
    { chave:'material_restauracao', label:'Material (cerâmica/ouro)?', obrigatorio:true },
    { chave:'dor_preparacao', label:'Sensibilidade pós-preparo?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório Protético', dias:['terça','quarta','quinta','sexta'], horarios:['09:00','10:00','14:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Cimento de hidróxido de cálcio' },
    { id:'m2', nome:'Cimento resinoso auto-adesivo' },
    { id:'m3', nome:'Fio de retração gengival' },
    { id:'m4', nome:'Papel de carbono' },
    { id:'m5', nome:'Disco de polimento diamantado' }
  ], corretos:['m1','m2','m4'] }
},
{
  id:'AG-44', titulo:'Agendamento: Avaliação de halitose',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Diagnóstico de origem de halitose e plano de tratamento.',
  contexto:'Paciente com queixa de mau hálito.',
  dadosPaciente:{ campos:[
    { chave:'tipo_halitose', label:'Halitose matinal ou persistente?', obrigatorio:true },
    { chave:'historico_familiar', label:'Tem histórico familiar?', obrigatorio:false },
    { chave:'medicacoes_atuais', label:'Toma medicações crônicas?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório A', dias:['segunda','terça','quarta','quinta','sexta'], horarios:['08:30','10:00','14:30','15:30'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Halímetro' },
    { id:'m2', nome:'Raspador de língua' },
    { id:'m3', nome:'Enxaguante com clorexidina' },
    { id:'m4', nome:'Escova de língua macia' },
    { id:'m5', nome:'Teste organoléptico' }
  ], corretos:['m1','m2','m3'] }
},
{
  id:'AG-45', titulo:'Agendamento: Tratamento de lesão de cárie radicular',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Restauração de cárie na raiz exposta de dente.',
  contexto:'Paciente idoso com recessão gengival.',
  dadosPaciente:{ campos:[
    { chave:'sensibilidade_radicular', label:'Tem sensibilidade radicular?', obrigatorio:true },
    { chave:'qual_dente', label:'Em qual dente?', obrigatorio:true },
    { chave:'recessao_severidade', label:'Severidade da recessão?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório A', dias:['segunda','quarta','quinta','sexta'], horarios:['08:00','09:00','14:00','15:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Resina composta de baixa contração' },
    { id:'m2', nome:'Adesivo universal 6ª geração' },
    { id:'m3', nome:'Isolamento com dique borracha' },
    { id:'m4', nome:'Cimento ionomérico de vidro' },
    { id:'m5', nome:'Gel dessensibilizante' }
  ], corretos:['m1','m2','m4'] }
},
{
  id:'AG-46', titulo:'Agendamento: Avaliação pré-ortodôntica',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Diagnóstico e planejamento de tratamento ortodôntico.',
  contexto:'Paciente interessado em tratamento ortodôntico.',
  dadosPaciente:{ campos:[
    { chave:'principal_queixa', label:'Principal queixa estética?', obrigatorio:true },
    { chave:'tempo_disponivel', label:'Tempo disponível para tratamento?', obrigatorio:true },
    { chave:'aparelho_preferencia', label:'Tem preferência de aparelho?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório Ortho', dias:['segunda','quarta','quinta','sexta'], horarios:['09:00','10:00','14:00','15:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Arco facial para cefalometria' },
    { id:'m2', nome:'Modelos de gesso articulado' },
    { id:'m3', nome:'Fotografias intra e extraorais' },
    { id:'m4', nome:'Radiografia panorâmica' },
    { id:'m5', nome:'Radiografia de perfil' }
  ], corretos:['m2','m3','m4'] }
},
{
  id:'AG-47', titulo:'Agendamento: Restauração com resina direta',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Restauração estética anterior com resina fotopolimerizável.',
  contexto:'Paciente com dente anterior comprometido.',
  dadosPaciente:{ campos:[
    { chave:'motivo_restauracao', label:'Motivo (cárie/fratura)?', obrigatorio:true },
    { chave:'tempo_problema', label:'Há quanto tempo tem problema?', obrigatorio:false },
    { chave:'tamanho_lesao', label:'Tamanho aproximado da lesão?', obrigatorio:true }
  ]},
  agenda:{ correto:{ sala:'Consultório Estético', dias:['terça','quarta','sexta'], horarios:['10:00','11:00','14:00','15:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Resina de micropartículas' },
    { id:'m2', nome:'Adesivo fotopolimerizável' },
    { id:'m3', nome:'Guia de cor VITA' },
    { id:'m4', nome:'Lâmina de polímero' },
    { id:'m5', nome:'Discos de polimento' }
  ], corretos:['m1','m2','m3'] }
},
{
  id:'AG-48', titulo:'Agendamento: Limpeza de implantes',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Manutenção profissional de implante e reparação de periimplantite leve.',
  contexto:'Paciente com implante para manutenção periódica.',
  dadosPaciente:{ campos:[
    { chave:'quando_implante', label:'Quando foi colocado o implante?', obrigatorio:true },
    { chave:'higiene_implante', label:'Como está higienizando?', obrigatorio:true },
    { chave:'sangramento_implante', label:'Tem sangramento ao escovar?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório Cirúrgico', dias:['segunda','terça','quarta','quinta'], horarios:['08:00','09:00','14:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Ultrassom periodontal específico para implante' },
    { id:'m2', nome:'Curetas de Gracey adaptadas' },
    { id:'m3', nome:'Escova específica para implante' },
    { id:'m4', nome:'Agente antimicrobiano' },
    { id:'m5', nome:'Enxaguante antisséptico' }
  ], corretos:['m1','m2','m4'] }
},
{
  id:'AG-49', titulo:'Agendamento: Consulta de emergência dental',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Atendimento urgente para dor, trauma ou infecção dental.',
  contexto:'Paciente em situação de emergência dental.',
  dadosPaciente:{ campos:[
    { chave:'tipo_emergencia', label:'Tipo de emergência?', obrigatorio:true },
    { chave:'duracao_sintomas', label:'Há quanto tempo?', obrigatorio:true },
    { chave:'medicamento_tomado', label:'Tomou algum medicamento?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório de Emergência', dias:['segunda','terça','quarta','quinta','sexta'], horarios:['07:00','08:00','11:00','12:00','17:00','18:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Anestésico potente (lidocaína)' },
    { id:'m2', nome:'Dique de borracha' },
    { id:'m3', nome:'Cimento temporário' },
    { id:'m4', nome:'Analgésicos' },
    { id:'m5', nome:'Antibióticos' }
  ], corretos:['m1','m2','m3'] }
},
{
  id:'AG-50', titulo:'Agendamento: Avaliação pós-trauma dentário',
  tipo:'agendamento', modalidade:'agendamento', tempo:2,
  descricao:'Avaliação completa pós-trauma com teste de vitalidade e mobilidade.',
  contexto:'Paciente com histórico recente de trauma dental.',
  dadosPaciente:{ campos:[
    { chave:'quando_trauma', label:'Quando foi o trauma?', obrigatorio:true },
    { chave:'tipo_trauma', label:'Tipo de trauma (queda/impacto)?', obrigatorio:true },
    { chave:'tratamento_inicial', label:'Recebeu algum tratamento?', obrigatorio:false }
  ]},
  agenda:{ correto:{ sala:'Consultório A', dias:['segunda','terça','quarta','quinta','sexta'], horarios:['09:00','10:00','14:00','15:00','16:00'] }},
  materiais:{ opcoes:[
    { id:'m1', nome:'Teste de vitalidade térmica' },
    { id:'m2', nome:'Teste de percussão' },
    { id:'m3', nome:'Radiografia periapical' },
    { id:'m4', nome:'Escala de mobilidade' },
    { id:'m5', nome:'Documentação fotográfica' }
  ], corretos:['m1','m2','m3','m4'] }
}
];
