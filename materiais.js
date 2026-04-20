/* ============================================================
   SimuCare — Cenários de Seleção de Materiais (40 cenários)
   ============================================================
   Modalidade: Materiais
   Estrutura: Seleção de materiais corretos para cada caso
   ============================================================ */

window.MATERIAIS = [
{
  id: 'MAT-01', titulo: 'Restauração de cárie classe I com resina',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção de materiais para restauração de cárie em oclusal.',
  contexto: 'Cárie oclusal em primeiro molar inferior.',
  opcoes: [
    { id: 'm1', nome: 'Resina composta bulk-fill', correto: true },
    { id: 'm2', nome: 'Adesivo universal 6-em-1', correto: true },
    { id: 'm3', nome: 'Dique de borracha', correto: true },
    { id: 'm4', nome: 'Pasta à base de óxido de zinco', correto: false },
    { id: 'm5', nome: 'Cimento resinoso', correto: false },
    { id: 'm6', nome: 'Ácido fosfórico 37%', correto: true }
  ],
  competencias: [4, 8, 7, 10, 9, 5, 6, 7],
  pontuacao_base: 100
},
{
  id: 'MAT-02', titulo: 'Profilaxia com flúor',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para limpeza profissional com flúor.',
  contexto: 'Paciente de baixo risco em manutenção.',
  opcoes: [
    { id: 'm1', nome: 'Taça de borracha', correto: true },
    { id: 'm2', nome: 'Pasta de polimento com flúor', correto: true },
    { id: 'm3', nome: 'Verniz de flúor 22000ppm', correto: true },
    { id: 'm4', nome: 'Cureta de limpeza', correto: false },
    { id: 'm5', nome: 'Ultrassom', correto: false },
    { id: 'm6', nome: 'Clorexidina gel', correto: false }
  ],
  competencias: [6, 5, 8, 8, 6, 7, 5, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-03', titulo: 'Extração dentária simples',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Instrumentais para extração de dente sem retenção óssea.',
  contexto: 'Extração de dente irrompido com mobilidade.',
  opcoes: [
    { id: 'm1', nome: 'Fórceps para o dente específico', correto: true },
    { id: 'm2', nome: 'Elevador dentário', correto: true },
    { id: 'm3', nome: 'Gaze estéril', correto: true },
    { id: 'm4', nome: 'Sutura reabsorvível', correto: true },
    { id: 'm5', nome: 'Implante dentário', correto: false },
    { id: 'm6', nome: 'Bisturi para osso', correto: false }
  ],
  competencias: [5, 9, 7, 10, 10, 6, 7, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-04', titulo: 'Endodontia - Acesso inicial',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Materiais para abertura de acesso à câmara pulpar.',
  contexto: 'Dente anterior com envolvimento pulpar.',
  opcoes: [
    { id: 'm1', nome: 'Broca endodôntica específica', correto: true },
    { id: 'm2', nome: 'Dique de borracha', correto: true },
    { id: 'm3', nome: 'Injetor de anestésico', correto: false },
    { id: 'm4', nome: 'Calcificação removedora', correto: true },
    { id: 'm5', nome: 'Resina de vedação temporária', correto: false },
    { id: 'm6', nome: 'Microscópio operacional', correto: true }
  ],
  competencias: [5, 9, 8, 10, 10, 7, 8, 9],
  pontuacao_base: 100
},
{
  id: 'MAT-05', titulo: 'Clareamento de consultório',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para clareamento profissional com peróxido.',
  contexto: 'Paciente com pigmentação leve dos dentes.',
  opcoes: [
    { id: 'm1', nome: 'Peróxido de hidrogênio 35%', correto: true },
    { id: 'm2', nome: 'Barreira gengival protetora', correto: true },
    { id: 'm3', nome: 'Escala de cor VITA', correto: true },
    { id: 'm4', nome: 'Gel dessensibilizante', correto: true },
    { id: 'm5', nome: 'Carvão ativado', correto: false },
    { id: 'm6', nome: 'Ácido cítrico', correto: false }
  ],
  competencias: [5, 7, 9, 9, 7, 8, 6, 9],
  pontuacao_base: 100
},
{
  id: 'MAT-06', titulo: 'Sondagem periodontal',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Instrumentais para avaliação de bolsas periodontais.',
  contexto: 'Paciente com gengivite e possível periodontite.',
  opcoes: [
    { id: 'm1', nome: 'Sonda periodontal milimetrada', correto: true },
    { id: 'm2', nome: 'Explorador duplo', correto: true },
    { id: 'm3', nome: 'Espelho intraoral', correto: true },
    { id: 'm4', nome: 'Papel carbono', correto: false },
    { id: 'm5', nome: 'Cureta de Gracey', correto: false },
    { id: 'm6', nome: 'Ultrassom', correto: false }
  ],
  competencias: [5, 8, 8, 8, 8, 8, 6, 7],
  pontuacao_base: 100
},
{
  id: 'MAT-07', titulo: 'Moldagem para prótese total',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Materiais para moldagem preliminar de prótese.',
  contexto: 'Paciente edêntulo para confecção de prótese.',
  opcoes: [
    { id: 'm1', nome: 'Alginato para moldagem', correto: true },
    { id: 'm2', nome: 'Bandeja de moldagem apropriada', correto: true },
    { id: 'm3', nome: 'Espátula de moldagem', correto: true },
    { id: 'm4', nome: 'Gesso tipo III', correto: true },
    { id: 'm5', nome: 'Resina de moldagem flexível', correto: false },
    { id: 'm6', nome: 'Elastômero de alta viscosidade', correto: false }
  ],
  competencias: [6, 7, 8, 8, 7, 7, 6, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-08', titulo: 'Limpeza supragengival com ultrassom',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção de materiais para raspagem com ultrassom.',
  contexto: 'Remoção de tártaro em paciente com gengivite.',
  opcoes: [
    { id: 'm1', nome: 'Ultrassom periodontal', correto: true },
    { id: 'm2', nome: 'Pontas ultrassônicas para supragengival', correto: true },
    { id: 'm3', nome: 'Selador de bolsa perio', correto: false },
    { id: 'm4', nome: 'Aspirador de saliva', correto: true },
    { id: 'm5', nome: 'Clorexidina gel', correto: false },
    { id: 'm6', nome: 'Teste de vitalidade', correto: false }
  ],
  competencias: [5, 8, 8, 8, 8, 7, 5, 7],
  pontuacao_base: 100
},
{
  id: 'MAT-09', titulo: 'Cimentação com cimento resinoso',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para cimentação de prótese com cimento resinoso.',
  contexto: 'Instalação de coroa protética.',
  opcoes: [
    { id: 'm1', nome: 'Cimento resinoso dual', correto: true },
    { id: 'm2', nome: 'Fio de retração gengival', correto: true },
    { id: 'm3', nome: 'Papel de carbono para verificação oclusal', correto: true },
    { id: 'm4', nome: 'Gel de limpeza para prep', correto: true },
    { id: 'm5', nome: 'Cimento de fosfato de zinco', correto: false },
    { id: 'm6', nome: 'Pasta abrasiva', correto: false }
  ],
  competencias: [6, 8, 8, 9, 9, 7, 7, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-10', titulo: 'Vedação temporária após raspagem',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para vedação temporária de lesão radicular.',
  contexto: 'Lesão de cárie radicular após raspagem.',
  opcoes: [
    { id: 'm1', nome: 'Cimento de hidróxido de cálcio', correto: true },
    { id: 'm2', nome: 'Resina temporária', correto: true },
    { id: 'm3', nome: 'Verniz protetor', correto: false },
    { id: 'm4', nome: 'Óxido de zinco com eugenol', correto: false },
    { id: 'm5', nome: 'Selador de fosseta', correto: false },
    { id: 'm6', nome: 'Dique de borracha', correto: true }
  ],
  competencias: [5, 8, 7, 9, 8, 6, 6, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-11', titulo: 'Preparação de implante - kit cirúrgico',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Componentes para colocação de implante osseointegrado.',
  contexto: 'Cirurgia de implante em região anterior.',
  opcoes: [
    { id: 'm1', nome: 'Implante dentário', correto: true },
    { id: 'm2', nome: 'Guia cirúrgico', correto: true },
    { id: 'm3', nome: 'Fresas específicas para implante', correto: true },
    { id: 'm4', nome: 'Sutura reabsorvível', correto: true },
    { id: 'm5', nome: 'Parafuso de proteção', correto: true },
    { id: 'm6', nome: 'Coroa pré-fabricada', correto: false }
  ],
  competencias: [5, 10, 8, 10, 10, 8, 8, 9],
  pontuacao_base: 100
},
{
  id: 'MAT-12', titulo: 'Tratamento de afta - medicação tópica',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção de medicações tópicas para úlcera aftosa.',
  contexto: 'Paciente com afta dolorosa em mucosa bucal.',
  opcoes: [
    { id: 'm1', nome: 'Gel anestésico tópico', correto: true },
    { id: 'm2', nome: 'Enxaguante com clorexidina', correto: true },
    { id: 'm3', nome: 'Cauterizador químico', correto: true },
    { id: 'm4', nome: 'Corticoide tópico', correto: true },
    { id: 'm5', nome: 'Antibiótico sistêmico', correto: false },
    { id: 'm6', nome: 'Antifúngico', correto: false }
  ],
  competencias: [6, 7, 8, 8, 8, 7, 7, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-13', titulo: 'Remoção de bracket ortodôntico',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Instrumentais para remoção de aparelho fixo.',
  contexto: 'Final de tratamento ortodôntico.',
  opcoes: [
    { id: 'm1', nome: 'Alicate para remoção de bracket', correto: true },
    { id: 'm2', nome: 'Escova de remoção de resina', correto: true },
    { id: 'm3', nome: 'Pasta de remoção de flúor', correto: true },
    { id: 'm4', nome: 'Disco de desgaste', correto: true },
    { id: 'm5', nome: 'Fio de retração', correto: false },
    { id: 'm6', nome: 'Cola ortodôntica', correto: false }
  ],
  competencias: [6, 8, 8, 9, 8, 7, 6, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-14', titulo: 'Tratamento de bruxismo - placa oclusal',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para confecção de placa para bruxismo.',
  contexto: 'Paciente com desgaste dentário por bruxismo.',
  opcoes: [
    { id: 'm1', nome: 'Moldeira flexível de bruxismo', correto: true },
    { id: 'm2', nome: 'Elastômero para moldagem', correto: true },
    { id: 'm3', nome: 'Papel carbono para verificação oclusal', correto: true },
    { id: 'm4', nome: 'Resina acrílica para reforço', correto: true },
    { id: 'm5', nome: 'Fio ortodôntico', correto: false },
    { id: 'm6', nome: 'Pasta de polimento abrasiva', correto: false }
  ],
  competencias: [6, 8, 8, 8, 8, 7, 7, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-15', titulo: 'Radiografia periapical - segurança',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Acessórios para radiografia intraoral segura.',
  contexto: 'Radiografia de diagnóstico inicial.',
  opcoes: [
    { id: 'm1', nome: 'Posicionador de radiografia com suporte', correto: true },
    { id: 'm2', nome: 'Avental de chumbo para paciente', correto: true },
    { id: 'm3', nome: 'Protetor de tireóide', correto: true },
    { id: 'm4', nome: 'Óculos de proteção', correto: false },
    { id: 'm5', nome: 'Luvas de nitrila', correto: true },
    { id: 'm6', nome: 'Máscara descarável', correto: false }
  ],
  competencias: [7, 6, 8, 8, 8, 9, 9, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-16', titulo: 'Descontaminação de instrumentais - esterilização',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção de produtos para desinfecção e esterilização.',
  contexto: 'Preparação de instrumentais após uso.',
  opcoes: [
    { id: 'm1', nome: 'Solução desinfetante de alta potência', correto: true },
    { id: 'm2', nome: 'Autoclave de vapor', correto: true },
    { id: 'm3', nome: 'Escova de limpeza para instrumentais', correto: true },
    { id: 'm4', nome: 'Luvas de nitrila reprocessadas', correto: false },
    { id: 'm5', nome: 'Álcool 70% como esterilizante final', correto: false },
    { id: 'm6', nome: 'Peróxido de hidrogênio para limpeza', correto: true }
  ],
  competencias: [8, 6, 8, 10, 10, 8, 9, 9],
  pontuacao_base: 100
},
{
  id: 'MAT-17', titulo: 'Cárie classe V - restauração com resina',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para restauração em cervical de dente.',
  contexto: 'Cárie na região cervical de dente vital.',
  opcoes: [
    { id: 'm1', nome: 'Resina composta de micropartículas', correto: true },
    { id: 'm2', nome: 'Adesivo universal', correto: true },
    { id: 'm3', nome: 'Ácido fosfórico 37%', correto: true },
    { id: 'm4', nome: 'Matriz de contorno flexível', correto: true },
    { id: 'm5', nome: 'Cimento de vidro ionomérico', correto: false },
    { id: 'm6', nome: 'Dique de borracha', correto: true }
  ],
  competencias: [5, 8, 8, 9, 8, 7, 7, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-18', titulo: 'Controle de dor em cirurgia - anestesia',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção de anestésicos para procedimentos cirúrgicos.',
  contexto: 'Extração de dente impactado.',
  opcoes: [
    { id: 'm1', nome: 'Lidocaína 2% com epinefrina', correto: true },
    { id: 'm2', nome: 'Injetor de anestésico estéril', correto: true },
    { id: 'm3', nome: 'Seringa carpule de alta segurança', correto: true },
    { id: 'm4', nome: 'Agulha 30x20 para infiltração', correto: true },
    { id: 'm5', nome: 'Prilocaína sem vasoconstrictor', correto: false },
    { id: 'm6', nome: 'Anestésico tópico pré-injeção', correto: true }
  ],
  competencias: [7, 9, 8, 10, 9, 7, 8, 9],
  pontuacao_base: 100
},
{
  id: 'MAT-19', titulo: 'Restauração com inlay de cerâmica',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para cimentação de inlay cerâmica.',
  contexto: 'Inlay de cerâmica pronta para cimentação.',
  opcoes: [
    { id: 'm1', nome: 'Cimento resinoso de cura dupla', correto: true },
    { id: 'm2', nome: 'Fio de retração gengival', correto: true },
    { id: 'm3', nome: 'Ácido fluorídrico para prep inlay', correto: true },
    { id: 'm4', nome: 'Silano acoplador', correto: true },
    { id: 'm5', nome: 'Pasta de hidróxido de cálcio', correto: false },
    { id: 'm6', nome: 'Papel de carbono para ajuste oclusal', correto: true }
  ],
  competencias: [6, 9, 8, 9, 9, 8, 8, 9],
  pontuacao_base: 100
},
{
  id: 'MAT-20', titulo: 'Flúor para crianças - prevenção de cárie',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção de fluoretos para crianças.',
  contexto: 'Aplicação de flúor em criança de 6 anos.',
  opcoes: [
    { id: 'm1', nome: 'Flúor gel 5000ppm para criança', correto: true },
    { id: 'm2', nome: 'Bandeja de moldagem infantil', correto: true },
    { id: 'm3', nome: 'Sugador de saliva infantil', correto: true },
    { id: 'm4', nome: 'Flúor foam', correto: true },
    { id: 'm5', nome: 'Verniz de flúor adulto (22000ppm)', correto: false },
    { id: 'm6', nome: 'Xilitol lozenges', correto: false }
  ],
  competencias: [7, 6, 8, 8, 7, 8, 7, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-21', titulo: 'Laminado cerâmico - preparação e cimentação',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para laminado cerâmico estético.',
  contexto: 'Colocação de laminado em dente anterior.',
  opcoes: [
    { id: 'm1', nome: 'Cimento resinoso autoadesivo', correto: true },
    { id: 'm2', nome: 'Matriz de silicone para check-in', correto: true },
    { id: 'm3', nome: 'Ácido fluorídrico para cerâmica', correto: true },
    { id: 'm4', nome: 'Paleta de cores para ajuste cromático', correto: true },
    { id: 'm5', nome: 'Brocas de desgaste grossas', correto: false },
    { id: 'm6', nome: 'Pasta de polimento extrafina', correto: true }
  ],
  competencias: [6, 8, 9, 9, 8, 8, 8, 9],
  pontuacao_base: 100
},
{
  id: 'MAT-22', titulo: 'Teste de vitalidade pulpar',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para diagnóstico de vitalidade.',
  contexto: 'Avaliação diagnóstica após trauma.',
  opcoes: [
    { id: 'm1', nome: 'Teste térmica com água quente/gelada', correto: true },
    { id: 'm2', nome: 'Teste elétrico de vitalidade', correto: true },
    { id: 'm3', nome: 'Teste de percussão com espelho', correto: true },
    { id: 'm4', nome: 'Teste de pressão com explorador', correto: false },
    { id: 'm5', nome: 'Palpação de ápice', correto: true },
    { id: 'm6', nome: 'Teste com clorexidina', correto: false }
  ],
  competencias: [6, 8, 8, 8, 8, 8, 7, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-23', titulo: 'Higiene oral em paciente com periodontite',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção de higiene bucal recomendada.',
  contexto: 'Instruções de higiene pós-tratamento perio.',
  opcoes: [
    { id: 'm1', nome: 'Escova de dentes macia com cerdas arredondadas', correto: true },
    { id: 'm2', nome: 'Fio dental específico para implante', correto: false },
    { id: 'm3', nome: 'Enxaguante com clorexidina 0.12%', correto: true },
    { id: 'm4', nome: 'Irrigador oral com pressão ajustável', correto: true },
    { id: 'm5', nome: 'Palito de madeira', correto: false },
    { id: 'm6', nome: 'Gel dessensibilizante', correto: false }
  ],
  competencias: [7, 6, 8, 8, 7, 8, 7, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-24', titulo: 'Sedação consciente - seleção de drogas',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção de medicamentos para sedação moderada.',
  contexto: 'Paciente com ansiedade severa para extração.',
  opcoes: [
    { id: 'm1', nome: 'Óxido nitroso com oxigênio', correto: true },
    { id: 'm2', nome: 'Monitor de oxigênio/pulso', correto: true },
    { id: 'm3', nome: 'Oximetria de pulso', correto: true },
    { id: 'm4', nome: 'Via aérea definitiva', correto: false },
    { id: 'm5', nome: 'Naloxona (antagonista)', correto: true },
    { id: 'm6', nome: 'Flumazenil (antagonista benzodiazepínico)', correto: true }
  ],
  competencias: [7, 9, 8, 10, 10, 7, 8, 9],
  pontuacao_base: 100
},
{
  id: 'MAT-25', titulo: 'Selante de fosseta e fissura',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para prevenção em dentes permanentes.',
  contexto: 'Criança com molares permanentes propensos a cárie.',
  opcoes: [
    { id: 'm1', nome: 'Selante resinoso de fluxo livre', correto: true },
    { id: 'm2', nome: 'Ácido fosfórico 37% para prep', correto: true },
    { id: 'm3', nome: 'Microescova de limpeza', correto: true },
    { id: 'm4', nome: 'Dique de borracha', correto: true },
    { id: 'm5', nome: 'Fluoreto de sódio para prep', correto: false },
    { id: 'm6', nome: 'Primer universal', correto: false }
  ],
  competencias: [6, 7, 8, 8, 8, 7, 7, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-26', titulo: 'Ajuste de contatos proximais - instrumentais',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para alívio de contatos excessivos.',
  contexto: 'Dente com contato proximal doloroso.',
  opcoes: [
    { id: 'm1', nome: 'Papel carbono fino para identificação', correto: true },
    { id: 'm2', nome: 'Disco de desgaste fino', correto: true },
    { id: 'm3', nome: 'Disco de silicone para polimento', correto: true },
    { id: 'm4', nome: 'Pasta de polimento', correto: true },
    { id: 'm5', nome: 'Brocas de desgaste muito grossas', correto: false },
    { id: 'm6', nome: 'Explorador para palpação', correto: true }
  ],
  competencias: [6, 8, 8, 9, 8, 7, 6, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-27', titulo: 'Controle de inflamação pós-cirurgia',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para redução de edema pós-operatório.',
  contexto: 'Extrações múltiplas com expectativa de inchaço.',
  opcoes: [
    { id: 'm1', nome: 'Antinflamatório sistêmico', correto: true },
    { id: 'm2', nome: 'Compressão fria pós-cirúrgica', correto: true },
    { id: 'm3', nome: 'Enxaguante anti-inflamatório', correto: true },
    { id: 'm4', nome: 'Repouso com elevação de cabeça', correto: true },
    { id: 'm5', nome: 'Aquecimento local no 1º dia', correto: false },
    { id: 'm6', nome: 'Antibiótico profilático', correto: false }
  ],
  competencias: [7, 7, 7, 9, 8, 8, 7, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-28', titulo: 'Prótese parcial removível - framework',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção de materiais para estrutura de PPR.',
  contexto: 'Confecção de prótese parcial removível.',
  opcoes: [
    { id: 'm1', nome: 'Ligas áuricas ou cobalto-cromo', correto: true },
    { id: 'm2', nome: 'Polímero termofixo para base', correto: true },
    { id: 'm3', nome: 'Dentes de estoque', correto: true },
    { id: 'm4', nome: 'Resinagem para retenção', correto: true },
    { id: 'm5', nome: 'Adesivo de cianoacrilato', correto: false },
    { id: 'm6', nome: 'Gesso tipo IV para modelo', correto: true }
  ],
  competencias: [6, 8, 8, 8, 8, 7, 7, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-29', titulo: 'Restauração em resina flow',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para restauração com resina fluida.',
  contexto: 'Cárie pequena ou deficiência marginal.',
  opcoes: [
    { id: 'm1', nome: 'Resina composta flow de baixa viscosidade', correto: true },
    { id: 'm2', nome: 'Adesivo de 6-em-1', correto: true },
    { id: 'm3', nome: 'Ácido fosfórico para condicionamento', correto: true },
    { id: 'm4', nome: 'Resina bulk-fill para base', correto: true },
    { id: 'm5', nome: 'Cimento de vidro ionomérico', correto: false },
    { id: 'm6', nome: 'Dique de borracha para isolamento', correto: true }
  ],
  competencias: [5, 8, 8, 8, 8, 7, 6, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-30', titulo: 'Instrumentação endodôntica - files',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção de limas para preparo do canal.',
  contexto: 'Instrumentação de canal endodôntico.',
  opcoes: [
    { id: 'm1', nome: 'Lima manual de aço inoxidável', correto: true },
    { id: 'm2', nome: 'Limas rotatórias de níquel-titânio', correto: true },
    { id: 'm3', nome: 'Localizador apical eletrônico', correto: true },
    { id: 'm4', nome: 'Solução de irrigação (hipoclorito)', correto: true },
    { id: 'm5', nome: 'Brocas de limpeza aérea', correto: false },
    { id: 'm6', nome: 'Barras de contaminação', correto: false }
  ],
  competencias: [5, 9, 8, 10, 9, 7, 8, 9],
  pontuacao_base: 100
},
{
  id: 'MAT-31', titulo: 'Fotopolimerização segura',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Proteção durante fotopolimerização.',
  contexto: 'Polymerização de resina composta.',
  opcoes: [
    { id: 'm1', nome: 'Luz de LED de espectro apropriado', correto: true },
    { id: 'm2', nome: 'Proteção ocular para paciente', correto: true },
    { id: 'm3', nome: 'Máscara facial do operador', correto: true },
    { id: 'm4', nome: 'Protetor de tireoide', correto: false },
    { id: 'm5', nome: 'Ponta de luz com filtro atenuador', correto: true },
    { id: 'm6', nome: 'Manejo de tempo de polimerização preciso', correto: true }
  ],
  competencias: [6, 7, 8, 8, 8, 9, 8, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-32', titulo: 'Reparação de prótese fraturada',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para reparo temporário.',
  contexto: 'Prótese fraturada em consultório.',
  opcoes: [
    { id: 'm1', nome: 'Adesivo de cianoacrilato', correto: true },
    { id: 'm2', nome: 'Resina autopolimerizável', correto: true },
    { id: 'm3', nome: 'Reforço com fibra de vidro', correto: true },
    { id: 'm4', nome: 'Cimento de vidro ionomérico', correto: false },
    { id: 'm5', nome: 'Solvente para acetato de celulose', correto: false },
    { id: 'm6', nome: 'Papel de lixa para acabamento', correto: true }
  ],
  competencias: [6, 7, 7, 8, 7, 7, 6, 7],
  pontuacao_base: 100
},
{
  id: 'MAT-33', titulo: 'Reparação de restauração amalgamada',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para reparação de amálgama.',
  contexto: 'Restauração amalgamada com defeito marginal.',
  opcoes: [
    { id: 'm1', nome: 'Resina composta de alta rigidez', correto: true },
    { id: 'm2', nome: 'Adesivo universal', correto: true },
    { id: 'm3', nome: 'Matriz de contorno metálica', correto: true },
    { id: 'm4', nome: 'Pó de amálgama para reparação', correto: false },
    { id: 'm5', nome: 'Cimento de vidro ionomérico como base', correto: false },
    { id: 'm6', nome: 'Ácido fosfórico para condicionamento', correto: true }
  ],
  competencias: [5, 8, 8, 8, 8, 7, 7, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-34', titulo: 'Frenectomia - kit cirúrgico',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para freio labial/lingual.',
  contexto: 'Cirurgia para remoção de freio.',
  opcoes: [
    { id: 'm1', nome: 'Bisturi fino para corte de tecidos moles', correto: true },
    { id: 'm2', nome: 'Tesoura de Metzenbaum', correto: true },
    { id: 'm3', nome: 'Sutura reabsorvível 4-0', correto: true },
    { id: 'm4', nome: 'Cauterizador eletrônico', correto: true },
    { id: 'm5', nome: 'Pinça de dissecção', correto: true },
    { id: 'm6', nome: 'Dique de borracha', correto: false }
  ],
  competencias: [6, 9, 8, 9, 9, 8, 8, 9],
  pontuacao_base: 100
},
{
  id: 'MAT-35', titulo: 'Higienização de aparelho removível',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Instruções para limpeza de prótese.',
  contexto: 'Orientação de paciente sobre prótese removível.',
  opcoes: [
    { id: 'm1', nome: 'Solução efervescente de limpeza', correto: true },
    { id: 'm2', nome: 'Escova macia específica para prótese', correto: true },
    { id: 'm3', nome: 'Água morna (não quente)', correto: true },
    { id: 'm4', nome: 'Sabão neutro para limpeza', correto: true },
    { id: 'm5', nome: 'Lixívia/cloro para desinfecção', correto: false },
    { id: 'm6', nome: 'Pasta de dente comum', correto: false }
  ],
  competencias: [7, 6, 8, 8, 7, 8, 7, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-36', titulo: 'Cimento provisório - segurança',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção de cimento temporário.',
  contexto: 'Preparação provisória com cimento temporário.',
  opcoes: [
    { id: 'm1', nome: 'Óxido de zinco sem eucaliptol para removibilidade', correto: true },
    { id: 'm2', nome: 'Cimento resinoso de baixa viscosidade', correto: false },
    { id: 'm3', nome: 'Eugenol para sensibilidade reduzida', correto: false },
    { id: 'm4', nome: 'Cimento de vidro ionomérico modificado', correto: true },
    { id: 'm5', nome: 'Pasta de hidróxido de cálcio', correto: true },
    { id: 'm6', nome: 'Vaselina como selador temporário', correto: false }
  ],
  competencias: [6, 8, 7, 9, 8, 7, 6, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-37', titulo: 'Osseointegração - acompanhamento',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Controle periódico de implante.',
  contexto: 'Avaliação pós-operatória de implante.',
  opcoes: [
    { id: 'm1', nome: 'Radiografia para densidade óssea', correto: true },
    { id: 'm2', nome: 'Teste de mobilidade clínica', correto: true },
    { id: 'm3', nome: 'Sonda periodontal para implante', correto: true },
    { id: 'm4', nome: 'Câmera termográfica', correto: false },
    { id: 'm5', nome: 'Ultrassom para avaliação óssea', correto: true },
    { id: 'm6', nome: 'Teste de ressonância de frequência', correto: true }
  ],
  competencias: [6, 8, 8, 9, 8, 8, 7, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-38', titulo: 'Teste de sensibilidade dentária',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Diagnóstico de hipersensibilidade dentinária.',
  contexto: 'Paciente com reclamação de sensibilidade.',
  opcoes: [
    { id: 'm1', nome: 'Explorador fino para teste mecânico', correto: true },
    { id: 'm2', nome: 'Ar comprimido para teste tátil', correto: true },
    { id: 'm3', nome: 'Frio (água/gelo) para teste térmico', correto: true },
    { id: 'm4', nome: 'Toque com dedo para palpação', correto: false },
    { id: 'm5', nome: 'Teste elétrico de estimulação', correto: true },
    { id: 'm6', nome: 'Teste com percussão leve', correto: false }
  ],
  competencias: [6, 8, 8, 8, 8, 8, 7, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-39', titulo: 'Fluorose dental - diagnóstico',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção para avaliação de fluorose.',
  contexto: 'Criança com manchas em dentes.',
  opcoes: [
    { id: 'm1', nome: 'Índice de fluorose de Dean', correto: true },
    { id: 'm2', nome: 'Câmera para documentação fotográfica', correto: true },
    { id: 'm3', nome: 'Luz LED para melhor visualização', correto: true },
    { id: 'm4', nome: 'Teste de vitalidade para descartar cárie', correto: true },
    { id: 'm5', nome: 'Raspador de biofilme', correto: false },
    { id: 'm6', nome: 'Espelho sem aumento', correto: false }
  ],
  competencias: [6, 7, 8, 8, 7, 8, 7, 8],
  pontuacao_base: 100
},
{
  id: 'MAT-40', titulo: 'Proteção de dentes com fórceps',
  tipo: 'materiais', modalidade: 'materiais',
  descricao: 'Seleção de isolamento durante extração.',
  contexto: 'Extração dentária com proteção de dentes adjacentes.',
  opcoes: [
    { id: 'm1', nome: 'Protetor de cera/borracha em dentes adjacentes', correto: true },
    { id: 'm2', nome: 'Gaze para proteção de lábios/mucosa', correto: true },
    { id: 'm3', nome: 'Fórceps com revestimento suave', correto: true },
    { id: 'm4', nome: 'Dique de borracha durante extração', correto: false },
    { id: 'm5', nome: 'Luva dupla para melhor aderência', correto: false },
    { id: 'm6', nome: 'Aspirador ativo durante procedimento', correto: true }
  ],
  competencias: [6, 8, 8, 9, 8, 7, 7, 8],
  pontuacao_base: 100
}
];
