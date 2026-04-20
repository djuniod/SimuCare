/* ============================================================
   SimuCare — Banco de Cenários (múltipla escolha)
   ------------------------------------------------------------
   Cada cenário segue a estrutura:
   {
     id, area, complexidade (1|2|3), tipo, tempo (min),
     titulo, contexto,
     personagem: {emoji, nome, detalhe},
     passos: [{
       fase, pergunta,
       opcoes: [{texto, qualidade: 'good'|'ok'|'bad', pontos, comps:[8]}],
       feedbacks: { good:{titulo,texto,consequencia,positivos[],negativos[]}, ok:{...}, bad:{...} }
     }]
   }
   Competências (índice):
     0 Comunicação empática   1 Resolução de problemas
     2 Tomada de decisão      3 Conhecimento técnico
     4 Biossegurança          5 Trabalho em equipe
     6 Gestão de conflito     7 Profissionalismo
   ============================================================ */

window.CENARIOS = [

/* ============================================================
   ÁREA 1 — SALA DE ESPERA E RECEPÇÃO
   ============================================================ */

{
  id: 'SE-01', area: 'Sala de Espera', complexidade: 1, tipo: 'Exceção', tempo: 8,
  titulo: 'Paciente chega 45 minutos atrasado',
  contexto: 'São 14:45. João estava agendado às 14:00 para avaliação. Chega ofegante pedindo desculpas pelo trânsito. O próximo paciente está marcado para 15:00 e o dentista ainda está finalizando o atendimento anterior.',
  personagem: { emoji:'🧔', nome:'João Ribeiro, 58 anos', detalhe:'Profissional que veio direto do trabalho, visivelmente constrangido pelo atraso.' },
  passos: [{
    fase:'Acolhimento na recepção',
    pergunta:'Qual é a melhor conduta ao receber João?',
    opcoes:[
      { texto:'Acolher com naturalidade, oferecer água, informar que será encaixado em ~20 min após o paciente atual e avisar o dentista.', qualidade:'good', pontos:10, comps:[10,9,8,6,5,8,8,10] },
      { texto:'Explicar que o horário dele já passou e oferecer remarcação para o próximo dia disponível.', qualidade:'ok', pontos:6, comps:[6,6,7,5,5,6,6,7] },
      { texto:'Pedir ao próximo paciente que aguarde mais 30 minutos para encaixar o João.', qualidade:'ok', pontos:5, comps:[5,5,4,4,5,4,4,6] },
      { texto:'Dizer que o atraso é responsabilidade dele e que não será atendido hoje.', qualidade:'bad', pontos:2, comps:[1,2,3,4,4,2,1,2] }
    ],
    feedbacks:{
      good:{ titulo:'Acolhimento profissional e empático', texto:'Você validou a frustração sem prometer o impossível, preservou a agenda do próximo paciente e envolveu a equipe.', consequencia:'João se sente respeitado, o dentista decide conscientemente o encaixe e o próximo paciente mantém seu horário.', positivos:['Validou sem julgar','Solução realista','Comunicou a equipe'], negativos:[] },
      ok:{ titulo:'Conduta aceitável mas fria', texto:'Você evitou conflitos na agenda, mas perdeu a oportunidade de acolher João num momento em que ele já estava constrangido.', consequencia:'João sai com a sensação de que a clínica prioriza o relógio sobre o paciente.', positivos:['Preservou a agenda'], negativos:['Pouca empatia','Não explorou alternativas'] },
      bad:{ titulo:'Conduta inadequada', texto:'Culpabilizar o paciente por atraso fere o vínculo e expõe a clínica a reclamações.', consequencia:'João reclama online, a equipe tem que gerenciar crise de imagem.', positivos:[], negativos:['Falta de empatia','Risco reputacional','Quebra de vínculo'] }
    }
  }]
},

{
  id:'SE-02', area:'Sala de Espera', complexidade:2, tipo:'Exceção', tempo:12,
  titulo:'Mãe questiona protocolo de biossegurança',
  contexto:'A criança está agendada para profilaxia. A mãe leu fake news sobre esterilização e exige entrar na sala, contrariando o protocolo. O tom começa a subir na recepção e outros pacientes observam.',
  personagem:{ emoji:'👩', nome:'Beatriz, mãe da Sofia (11)', detalhe:'Ansiosa, fala alto, olha desconfiada para o material esterilizado.' },
  passos:[{
    fase:'Gestão do conflito na recepção',
    pergunta:'Como você conduz a situação?',
    opcoes:[
      { texto:'Validar a preocupação dela, explicar o protocolo em linguagem simples e oferecer acompanhar por câmera/visor na sala.', qualidade:'good', pontos:10, comps:[10,9,9,8,9,8,10,10] },
      { texto:'Chamar o dentista para reforçar o protocolo diretamente com a mãe.', qualidade:'ok', pontos:7, comps:[7,7,7,6,8,7,7,8] },
      { texto:'Abrir exceção "só desta vez" para evitar briga na recepção.', qualidade:'bad', pontos:3, comps:[4,3,2,3,2,3,3,3] },
      { texto:'Dizer que protocolo é protocolo e que ela pode procurar outra clínica.', qualidade:'bad', pontos:2, comps:[1,2,2,4,4,2,1,2] }
    ],
    feedbacks:{
      good:{ titulo:'Assertividade com acolhimento', texto:'Reconhecer o medo antes de explicar a regra desarma a resistência. Oferecer uma alternativa concreta (câmera/visor) preserva o vínculo sem ferir o protocolo.', consequencia:'A mãe se sente ouvida e aceita aguardar na recepção. A criança não absorve o conflito.', positivos:['Escuta ativa','Mantém o protocolo','Solução intermediária'], negativos:[] },
      ok:{ titulo:'Delegou sem tentar', texto:'Escalar para o dentista pode ser correto, mas você tinha espaço para tentar antes. Delegar direto sinaliza insegurança.', consequencia:'O dentista interrompe outro atendimento para apagar um incêndio que você podia ter contido.', positivos:['Envolveu quem tem autoridade'], negativos:['Faltou tentativa própria','Sobrecarga do dentista'] },
      bad:{ titulo:'Decisão arriscada', texto:'Abrir exceção fere protocolo e cria precedente. Expulsar a paciente destrói vínculo e gera crítica pública.', consequencia:'A clínica paga o preço em auditoria ou em reputação.', positivos:[], negativos:['Quebra de protocolo','Risco legal','Dano ao vínculo'] }
    }
  }]
},

{
  id:'SE-03', area:'Sala de Espera', complexidade:2, tipo:'Emergência', tempo:15,
  titulo:'Criança em pânico antes de primeira consulta',
  contexto:'Sofia, 7 anos, primeira consulta. Ao ouvir o motor da caneta de alta rotação na sala ao lado, começa a chorar e tremer. A mãe tenta acalmar sem sucesso. O dentista tem apenas 5 minutos livres antes do próximo paciente.',
  personagem:{ emoji:'👧', nome:'Sofia, 7 anos', detalhe:'Primeira ida ao dentista. Nunca sofreu procedimento. Mãe diz que ela assistiu a "vídeos assustadores" com os primos.' },
  passos:[{
    fase:'Intervenção de acolhimento',
    pergunta:'Como você tenta transformar o pânico em confiança?',
    opcoes:[
      { texto:'Abaixar na altura dela, validar o medo, convidar para "conhecer a sala" como se fosse um passeio e dar um espelho para ela explorar.', qualidade:'good', pontos:10, comps:[10,9,8,8,6,8,8,10] },
      { texto:'Chamar a mãe para entrar junto na sala, mantendo-a por perto durante a avaliação.', qualidade:'ok', pontos:7, comps:[8,6,6,6,5,7,6,7] },
      { texto:'Oferecer remarcar: "hoje ela não está pronta, vamos tentar outro dia".', qualidade:'ok', pontos:6, comps:[7,5,5,5,4,5,5,7] },
      { texto:'Dizer firmemente que não há motivo para chorar e pegá-la no colo para levá-la.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,2,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Odontopediatria acolhedora', texto:'Validar o medo, abaixar fisicamente (contato visual na mesma altura) e oferecer controle por meio da exploração do ambiente são técnicas comprovadas para dessensibilização rápida.', consequencia:'Sofia entra na sala curiosa, mãe relaxa, primeira consulta vira experiência positiva.', positivos:['Empatia ativa','Oferece controle','Dessensibilização'], negativos:[] },
      ok:{ titulo:'Funciona, mas depende da mãe', texto:'Chamar a responsável ajuda, mas não ensina Sofia a lidar com o medo; remarcar evita o estresse agora e pode reforçar o evitamento.', consequencia:'Risco de consultas futuras difíceis, criança aprende que chorar = sair.', positivos:['Considera conforto familiar'], negativos:['Dependência da mãe','Pode reforçar fobia'] },
      bad:{ titulo:'Conduta traumática', texto:'Forçar fisicamente e minimizar o medo são erros pedagógicos e clínicos. Podem gerar fobia duradoura e risco de imagem.', consequencia:'Sofia desenvolve aversão à clínica; a mãe pode denunciar.', positivos:[], negativos:['Risco de trauma','Risco legal','Quebra de confiança familiar'] }
    }
  }]
},

{
  id:'SE-04', area:'Sala de Espera', complexidade:2, tipo:'Emergência', tempo:10,
  titulo:'Paciente relata sintomas respiratórios agudos',
  contexto:'Paciente chega tossindo, espirra algumas vezes sem cobrir e afirma ser "só alergia". Sem máscara. Há mais quatro pessoas na sala de espera, incluindo uma gestante.',
  personagem:{ emoji:'🤧', nome:'Renato, 34', detalhe:'Dispensou a máscara e insiste que está bem. Veio para restauração.' },
  passos:[{
    fase:'Biossegurança em recepção',
    pergunta:'Qual conduta protege a sala sem humilhar o paciente?',
    opcoes:[
      { texto:'Oferecer máscara, explicar que faz parte do protocolo para qualquer sintoma respiratório e realocá-lo em área menos adensada enquanto a triagem avalia.', qualidade:'good', pontos:10, comps:[9,9,9,8,10,8,8,10] },
      { texto:'Convidar para remarcar em 7 dias, mesmo com ele insistindo que é alergia.', qualidade:'ok', pontos:7, comps:[6,6,7,6,8,6,6,7] },
      { texto:'Isolar imediatamente em sala separada sem explicar o porquê.', qualidade:'ok', pontos:5, comps:[4,5,5,5,8,4,4,5] },
      { texto:'Seguir normalmente, para não criar constrangimento.', qualidade:'bad', pontos:1, comps:[2,1,1,2,1,2,2,1] }
    ],
    feedbacks:{
      good:{ titulo:'Biossegurança com dignidade', texto:'Você aplicou o protocolo sem expor o paciente e mitigou o risco para os demais presentes.', consequencia:'Gestante e demais pacientes ficam protegidos; Renato entende que é rotina, não perseguição.', positivos:['Protocolo respeitado','Comunicação clara','Mitigação do risco'], negativos:[] },
      ok:{ titulo:'Proteção com falhas', texto:'Cuida da sala, mas ou cria desconforto social ou perde o paciente sem tentativa de atender com segurança.', consequencia:'Paciente pode não retornar; outros pacientes ficam desconfortáveis sem entender.', positivos:['Pensou na coletividade'], negativos:['Comunicação deficiente'] },
      bad:{ titulo:'Negligência em saúde coletiva', texto:'Ignorar sintomas respiratórios expõe pacientes vulneráveis. É uma falha de biossegurança.', consequencia:'Risco de surto e responsabilização da clínica.', positivos:[], negativos:['Negligência','Risco coletivo','Falha de protocolo'] }
    }
  }]
},

{
  id:'SE-05', area:'Sala de Espera', complexidade:3, tipo:'Emergência', tempo:15,
  titulo:'Suspeita de violência contra criança',
  contexto:'Miguel, 6 anos, chega com hematomas no pescoço e na têmpora. A mãe explica de forma vaga: "caiu do sofá". Você percebe que a criança se retrai quando a mãe fala e evita contato visual. Está fazendo a triagem inicial.',
  personagem:{ emoji:'👦', nome:'Miguel, 6 anos', detalhe:'Calado, olhar baixo. Marcas com padrão que não parece queda acidental.' },
  passos:[{
    fase:'Discernimento ético',
    pergunta:'Qual é a conduta tecnicamente e eticamente correta?',
    opcoes:[
      { texto:'Registrar objetivamente os achados (sem acusar), comunicar ao dentista/responsável clínico imediatamente para avaliação e, se confirmada a suspeita, acionar Conselho Tutelar conforme obriga a legislação.', qualidade:'good', pontos:10, comps:[9,9,10,9,9,10,8,10] },
      { texto:'Perguntar à mãe, em tom acolhedor, mais detalhes sobre o ocorrido antes de avisar o dentista.', qualidade:'ok', pontos:6, comps:[7,6,5,6,6,5,7,6] },
      { texto:'Confrontar a mãe na recepção: "essas marcas não batem com queda".', qualidade:'bad', pontos:2, comps:[2,3,3,4,5,2,1,2] },
      { texto:'Ignorar — "não é meu papel julgar a família do paciente".', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Proteção da criança dentro da lei', texto:'O TSB é observador privilegiado e, junto com o dentista, tem dever ético e legal (ECA) de comunicar suspeitas de maus-tratos. Registrar objetivamente protege a criança e a equipe.', consequencia:'Miguel recebe atenção protetiva; a clínica cumpre sua responsabilidade legal.', positivos:['Cumpre ECA','Postura ética','Registro defensável'], negativos:[] },
      ok:{ titulo:'Intenção boa, execução em risco', texto:'Investigar sozinho pode contaminar a avaliação e alertar um possível agressor. A comunicação ao profissional responsável não pode esperar.', consequencia:'A mãe pode tirar a criança da clínica; suspeita se perde.', positivos:['Acolheu'], negativos:['Ultrapassa competência','Risco de fuga'] },
      bad:{ titulo:'Conduta inaceitável', texto:'Confrontar a responsável na recepção expõe a criança a retaliação e a clínica a acusações de difamação. Ignorar é omissão.', consequencia:'Possível agravamento do risco à criança e processo contra a clínica.', positivos:[], negativos:['Risco à criança','Falha ética grave','Exposição legal'] }
    }
  }]
},

{
  id:'SE-06', area:'Sala de Espera', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Idoso com dificuldade auditiva sem acompanhante',
  contexto:'Seu Manoel, 78 anos, veio sozinho para avaliação. Você percebe durante a coleta de dados que ele responde tardiamente e pede para repetir. Não está claro se há aparelho auditivo.',
  personagem:{ emoji:'👴', nome:'Sr. Manoel, 78', detalhe:'Veio de Uber, alfabetizado, um pouco tímido. Hipertenso.' },
  passos:[{
    fase:'Adaptação da comunicação',
    pergunta:'Qual a melhor abordagem para a triagem?',
    opcoes:[
      { texto:'Perguntar como ele prefere se comunicar, falar de frente em ritmo pausado, complementar por escrito as informações críticas.', qualidade:'good', pontos:10, comps:[10,8,8,7,6,7,7,10] },
      { texto:'Gritar as perguntas para garantir que ele ouça.', qualidade:'bad', pontos:2, comps:[2,3,3,3,4,3,2,2] },
      { texto:'Pedir que ele volte com algum familiar para ajudar.', qualidade:'ok', pontos:5, comps:[5,4,4,4,4,4,4,5] },
      { texto:'Usar aplicativo de fala-para-texto no celular, mostrando para ele.', qualidade:'ok', pontos:7, comps:[7,8,7,7,5,6,6,8] }
    ],
    feedbacks:{
      good:{ titulo:'Comunicação inclusiva', texto:'Perguntar antes de presumir é o padrão-ouro em acessibilidade. Ritmo pausado e registro escrito reduzem erros de anamnese.', consequencia:'Dados confiáveis, Sr. Manoel se sente respeitado e volta.', positivos:['Inclusão','Anamnese segura','Postura profissional'], negativos:[] },
      ok:{ titulo:'Solução parcial', texto:'Usar tecnologia ajuda, mas precisa de validação; pedir acompanhante ignora a autonomia dele.', consequencia:'Coleta incompleta ou constrangimento; pode resolver mas não é ideal.', positivos:['Tenta adaptar'], negativos:['Risco à autonomia','Dado incompleto'] },
      bad:{ titulo:'Comunicação desrespeitosa', texto:'Gritar não é acessibilidade — soa agressivo, expõe o paciente na sala e raramente melhora a compreensão.', consequencia:'Constrangimento público, Sr. Manoel não retorna.', positivos:[], negativos:['Expõe o paciente','Ineficaz','Falta de preparo'] }
    }
  }]
},

{
  id:'SE-07', area:'Sala de Espera', complexidade:2, tipo:'Exceção', tempo:8,
  titulo:'Paciente chega com dor forte sem agendamento',
  contexto:'Carla aparece sem ligar antes, segurando a face e chorando baixinho. Agenda está cheia. Você está só na recepção.',
  personagem:{ emoji:'😣', nome:'Carla, 41', detalhe:'Fala entrecortada: "acordei com isso, não aguento mais".' },
  passos:[{
    fase:'Triagem de urgência',
    pergunta:'O que fazer de imediato?',
    opcoes:[
      { texto:'Aplicar triagem verbal (intensidade, duração, sinais sistêmicos), anotar achados, levar ao dentista para decidir encaixe ou encaminhamento.', qualidade:'good', pontos:10, comps:[9,10,9,8,6,9,7,10] },
      { texto:'Colocar imediatamente na frente do próximo paciente por empatia.', qualidade:'ok', pontos:5, comps:[7,5,3,4,4,3,4,4] },
      { texto:'Dizer que só atende com hora marcada e indicar clínica 24h parceira.', qualidade:'ok', pontos:6, comps:[5,6,7,5,5,5,6,6] },
      { texto:'Ignorar, pedir que ela volte amanhã.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Triagem responsável', texto:'A recepcionista qualificada separa dor autêntica que precisa de encaixe do desconforto que aceita espera — sem decidir sozinha pela agenda clínica.', consequencia:'Decisão compartilhada com dentista, fluxo preservado.', positivos:['Triagem estruturada','Trabalho em equipe'], negativos:[] },
      ok:{ titulo:'Empatia sem técnica', texto:'Encaixar de emoção quebra a agenda; indicar externo sem triar pode subestimar uma emergência real.', consequencia:'Ou o dia do dentista desanda, ou Carla sai com uma pulpite aguda sem avaliação.', positivos:['Intenção humana'], negativos:['Falta triagem','Decisão sem equipe'] },
      bad:{ titulo:'Omissão clínica', texto:'Dor aguda sem triagem é negligência. Expõe a paciente e a clínica.', consequencia:'Carla procura outro serviço e reclama publicamente.', positivos:[], negativos:['Negligência','Risco à saúde','Risco reputacional'] }
    }
  }]
},

{
  id:'SE-08', area:'Sala de Espera', complexidade:1, tipo:'Exceção', tempo:5,
  titulo:'Paciente esqueceu documentos',
  contexto:'Primeira consulta marcada em 10 minutos. O paciente chegou sem RG nem carteira do convênio. O sistema exige CPF e convênio para liberar.',
  personagem:{ emoji:'🧑', nome:'Bruno, 29', detalhe:'Veio direto do trabalho, esqueceu a carteira em casa.' },
  passos:[{
    fase:'Flexibilidade administrativa',
    pergunta:'Como conduzir?',
    opcoes:[
      { texto:'Registrar com CPF informado verbalmente, confirmar convênio por telefone/operadora e combinar entrega da cópia na próxima consulta.', qualidade:'good', pontos:10, comps:[9,10,9,7,5,8,7,9] },
      { texto:'Remarcar: sem documento, sem consulta.', qualidade:'ok', pontos:5, comps:[4,5,6,5,5,5,4,6] },
      { texto:'Atender sem registrar nada, "papelada depois".', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Cobrar taxa "por falta de documentação".', qualidade:'bad', pontos:1, comps:[1,2,2,2,2,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Equilíbrio entre rigor e humanidade', texto:'O processo foi preservado, o paciente foi atendido e o cadastro será regularizado.', consequencia:'Consulta acontece, cadastro se completa, zero risco jurídico.', positivos:['Processo seguro','Solução prática'], negativos:[] },
      ok:{ titulo:'Rigidez desnecessária', texto:'Remarcar resolve do lado do processo, mas perde o paciente e queima tempo da agenda.', consequencia:'Possível perda de cliente; horário vago.', positivos:['Cumpre regra formal'], negativos:['Falta criatividade'] },
      bad:{ titulo:'Conduta inaceitável', texto:'Atender sem registro ou cobrar taxa arbitrária geram risco jurídico e de compliance.', consequencia:'Multa, reclamação, auditoria.', positivos:[], negativos:['Risco jurídico','Exposição da clínica'] }
    }
  }]
},

{
  id:'SE-09', area:'Sala de Espera', complexidade:3, tipo:'Exceção', tempo:10,
  titulo:'Paciente sob efeito de substância',
  contexto:'Paciente agendado chega com fala pastosa, cheiro de álcool e dificuldade de coordenação. Insiste em ser atendido. Recepção cheia.',
  personagem:{ emoji:'🫨', nome:'Anderson, 45', detalhe:'Fala alto, insistente, sem sinais de agressividade física.' },
  passos:[{
    fase:'Gestão de risco e comunicação discreta',
    pergunta:'Qual conduta adotar?',
    opcoes:[
      { texto:'Comunicar o dentista em reservado, explicar ao paciente que por segurança o procedimento será reagendado e oferecer Uber/acompanhante.', qualidade:'good', pontos:10, comps:[9,8,9,8,9,8,8,10] },
      { texto:'Recusar o atendimento em tom duro: "você está bêbado, vai embora".', qualidade:'bad', pontos:2, comps:[1,2,2,3,4,2,1,2] },
      { texto:'Deixar que o dentista decida sozinho na sala, sem aviso prévio.', qualidade:'ok', pontos:5, comps:[4,4,5,5,5,4,4,5] },
      { texto:'Aceitar o atendimento para evitar confusão.', qualidade:'bad', pontos:1, comps:[1,1,1,4,3,2,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Segurança com respeito', texto:'Proteção do paciente e da equipe sem exposição pública é a combinação correta.', consequencia:'Paciente sai com dignidade, protocolo mantido.', positivos:['Segurança','Confidencialidade','Trabalho em equipe'], negativos:[] },
      ok:{ titulo:'Sem articulação', texto:'Não antecipar para o dentista o coloca em situação de surpresa e risco.', consequencia:'Decisão clínica comprometida, possível exposição.', positivos:['Deixa decisão técnica no lugar'], negativos:['Falta de aviso','Fragilidade na equipe'] },
      bad:{ titulo:'Erros graves', texto:'Exposição pública ou atender sob efeito viola segurança, biossegurança e ética.', consequencia:'Risco físico, jurídico e reputacional.', positivos:[], negativos:['Risco grave','Falha de conduta'] }
    }
  }]
},

{
  id:'SE-10', area:'Sala de Espera', complexidade:1, tipo:'Normal', tempo:5,
  titulo:'Paciente famoso pede discrição',
  contexto:'Uma atriz local que você reconhece chega para consulta. A colega da recepção começa a comentar alto. A paciente parece desconfortável.',
  personagem:{ emoji:'🌟', nome:'Letícia, 32', detalhe:'Chegou sozinha, boné, visivelmente querendo discrição.' },
  passos:[{
    fase:'Privacidade e profissionalismo',
    pergunta:'Como conduzir?',
    opcoes:[
      { texto:'Cumprimentar como qualquer paciente, cortar o comentário da colega com discrição e oferecer espera em ambiente mais reservado, se possível.', qualidade:'good', pontos:10, comps:[9,8,8,6,5,9,7,10] },
      { texto:'Pedir uma selfie discretamente antes de começar o atendimento.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Avisar a equipe toda: "VIP chegou, caprichem".', qualidade:'ok', pontos:5, comps:[4,5,5,4,4,5,4,5] },
      { texto:'Fingir que não a reconhece e falar como se fosse estranha, de forma exagerada.', qualidade:'ok', pontos:6, comps:[5,6,5,5,4,5,5,6] }
    ],
    feedbacks:{
      good:{ titulo:'Conduta impecável', texto:'Privacidade é um direito de todos. Tratar VIP como paciente comum é o padrão profissional.', consequencia:'Paciente se sente protegida, boca-a-boca positivo.', positivos:['Privacidade','Profissionalismo','Equipe alinhada'], negativos:[] },
      ok:{ titulo:'Funciona, mas ruidoso', texto:'Alertar "VIP" na equipe cria assimetria; fingir desconhecimento exagerado soa estranho.', consequencia:'Risco de atendimento desigual ou constrangimento.', positivos:['Cuidado extra'], negativos:['Tratamento desigual','Desconforto'] },
      bad:{ titulo:'Violação de privacidade', texto:'Pedir foto ou autógrafo é inaceitável num contexto de saúde.', consequencia:'Dano à imagem da clínica, possível processo.', positivos:[], negativos:['Violação ética','Dano reputacional'] }
    }
  }]
},

{
  id:'SE-11', area:'Sala de Espera', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Gestante com mal-estar súbito',
  contexto:'Durante a espera, Joana (32ª semana) começa a sentir tontura e pede para se deitar. Dentista em atendimento.',
  personagem:{ emoji:'🤰', nome:'Joana, 28', detalhe:'Veio para consulta de rotina. Declarou pressão alta controlada.' },
  passos:[{
    fase:'Primeiros socorros na sala de espera',
    pergunta:'O que fazer imediatamente?',
    opcoes:[
      { texto:'Acomodar em decúbito lateral esquerdo, afrouxar roupas, oferecer hidratação, avisar o dentista e monitorar sinais (cor, consciência, respiração).', qualidade:'good', pontos:10, comps:[9,9,9,10,9,9,7,10] },
      { texto:'Deixá-la sentada na poltrona e esperar o dentista terminar.', qualidade:'bad', pontos:2, comps:[2,2,2,4,4,2,1,2] },
      { texto:'Chamar imediatamente o SAMU antes de qualquer outra ação.', qualidade:'ok', pontos:6, comps:[5,5,6,7,7,5,5,7] },
      { texto:'Oferecer café forte e açúcar para "levantar a pressão".', qualidade:'bad', pontos:2, comps:[2,2,2,2,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Decúbito lateral esquerdo — o certo', texto:'Essa posição alivia a compressão da veia cava inferior pelo útero. Hidratar, observar e avisar a equipe é o protocolo.', consequencia:'Joana recupera rapidamente em boa parte dos casos, equipe alerta e preparada.', positivos:['Protocolo correto','Monitoramento','Comunicação'], negativos:[] },
      ok:{ titulo:'Exagero ou ação limitada', texto:'SAMU tem lugar, mas antes você pode resolver casos simples. Deixar esperando é passividade perigosa.', consequencia:'Ou há sobreuso de emergência, ou evolução não monitorada.', positivos:['Senso de urgência'], negativos:['Falta de avaliação prévia'] },
      bad:{ titulo:'Conduta inadequada', texto:'Café/açúcar não substitui avaliação; posição errada piora o quadro.', consequencia:'Risco real à mãe e ao bebê.', positivos:[], negativos:['Risco clínico','Desconhecimento técnico'] }
    }
  }]
},

{
  id:'SE-12', area:'Sala de Espera', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'Paciente LGBTQIAP+ com nome social',
  contexto:'Ana chega para consulta. No cadastro você vê o nome de registro masculino (Antônio). Ela pede que seja chamada como Ana.',
  personagem:{ emoji:'🏳️‍🌈', nome:'Ana, 26', detalhe:'Mulher trans, tranquila, aparentemente acostumada a lidar com recepções mal preparadas.' },
  passos:[{
    fase:'Acolhimento respeitoso',
    pergunta:'Como proceder?',
    opcoes:[
      { texto:'Registrar o nome social no sistema, usar "Ana" em todos os contatos e sinalizar na ficha para a equipe.', qualidade:'good', pontos:10, comps:[10,9,9,7,5,9,8,10] },
      { texto:'Chamar pelo nome de registro no atendimento, "porque é o que o sistema exige".', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Usar o nome social na recepção mas chamá-la pelo de registro em sala.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,1,2] },
      { texto:'Perguntar a ela, em reservado, como prefere ser tratada e em qual campo do sistema registrar.', qualidade:'ok', pontos:8, comps:[9,7,7,6,5,7,7,8] }
    ],
    feedbacks:{
      good:{ titulo:'Direito garantido por lei', texto:'O uso do nome social é direito garantido e deve ser aplicado sem ambiguidade. Reforçar na ficha evita deslizes da equipe.', consequencia:'Vínculo preservado, ambiente seguro.', positivos:['Cumpre direito','Equipe alinhada'], negativos:[] },
      ok:{ titulo:'Bom esforço, passo a menos', texto:'Perguntar é respeitoso; porém o nome social já pode (e deve) ser adotado sem depender de permissão caso a caso, uma vez que a paciente o declarou.', consequencia:'Pode constranger se interpretada como dúvida.', positivos:['Intenção inclusiva'], negativos:['Processo pode ser mais direto'] },
      bad:{ titulo:'Desrespeito institucional', texto:'Usar nome de registro contra vontade é violação do direito ao nome social e fere o vínculo.', consequencia:'Paciente não volta, risco legal.', positivos:[], negativos:['Violação de direito','Dano ao vínculo'] }
    }
  }]
},

/* ============================================================
   ÁREA 2 — AGENDAMENTO (múltipla escolha)
   (modalidade prática está em agendamentos.js)
   ============================================================ */

{
  id:'AG-01', area:'Agendamento', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Dupla marcação no mesmo horário',
  contexto:'Dois pacientes diferentes chegam às 14:00. No sistema, um foi agendado pelo telefone e o outro pelo site — mesmo horário, mesma sala. Próximo horário disponível é só às 15:30.',
  personagem:{ emoji:'📞', nome:'Recepção — agenda conflitante', detalhe:'Nenhum dos dois é duplicata. Um tem convênio, o outro particular.' },
  passos:[{
    fase:'Tomada de decisão com diplomacia',
    pergunta:'Qual a melhor conduta?',
    opcoes:[
      { texto:'Explicar transparente a falha, perguntar disponibilidade de cada um, consultar o dentista se cabe dividir tempo ou oferecer cortesia a quem aceitar remarcar.', qualidade:'good', pontos:10, comps:[9,10,9,7,5,9,10,10] },
      { texto:'Atender o primeiro que chegou, o outro remarca sem compensação.', qualidade:'ok', pontos:6, comps:[5,6,7,5,5,5,5,6] },
      { texto:'Encaminhar o problema para outro colega resolver.', qualidade:'bad', pontos:3, comps:[2,3,3,3,3,3,2,3] },
      { texto:'Culpar publicamente quem marcou pelo telefone ou pelo site.', qualidade:'bad', pontos:1, comps:[1,2,2,2,2,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Responsabilidade institucional', texto:'Assumir o erro como da clínica, ser transparente e oferecer compensação preserva o vínculo com ambos.', consequencia:'Pacientes sentem respeito, ninguém culpado publicamente.', positivos:['Transparência','Solução criativa'], negativos:[] },
      ok:{ titulo:'Aceitável com perdas', texto:'Priorizar ordem é prático, mas perde a chance de oferecer compensação e pode deixar o segundo insatisfeito.', consequencia:'Um paciente sai insatisfeito, risco de crítica.', positivos:['Regra clara'], negativos:['Sem empatia'] },
      bad:{ titulo:'Falha de profissionalismo', texto:'Culpar pessoas ou delegar sem resolver piora a experiência para todos.', consequencia:'Dano à imagem, equipe perde moral.', positivos:[], negativos:['Falha de equipe','Dano de imagem'] }
    }
  }]
},

{
  id:'AG-02', area:'Agendamento', complexidade:2, tipo:'Exceção', tempo:12,
  titulo:'Erro de especialidade',
  contexto:'Paciente aparece para "canal" (endodontia), mas está marcado com cirurgião (extração). O endodontista só atende terça e quinta; hoje é segunda.',
  personagem:{ emoji:'👨‍⚕️', nome:'Roberto, 47', detalhe:'Veio de longe, com radiografia na mão. Dor forte há 3 dias.' },
  passos:[{
    fase:'Resolução do agendamento errado',
    pergunta:'Melhor caminho?',
    opcoes:[
      { texto:'Confirmar com ele o que realmente precisa (paciente pode estar confuso), consultar o cirurgião se pode fazer avaliação de urgência e oferecer o endodontista na terça.', qualidade:'good', pontos:10, comps:[9,10,9,8,5,8,8,9] },
      { texto:'Marcar o paciente como "encaixe" com o endodontista hoje, mesmo sem ele estar.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Oferecer desconto sem autorização para compensar o erro.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Apenas pedir desculpas e mandar voltar na terça.', qualidade:'ok', pontos:5, comps:[5,4,5,4,4,4,5,5] }
    ],
    feedbacks:{
      good:{ titulo:'Conduta técnica e humana', texto:'Confirmar a queixa real, escalar e oferecer opções transforma um erro em experiência bem resolvida.', consequencia:'Paciente sai com plano claro; se a dor for aguda, o cirurgião alivia hoje.', positivos:['Escuta','Escalonamento','Alternativas reais'], negativos:[] },
      ok:{ titulo:'Solução incompleta', texto:'Pedir desculpas resolve pouco se há dor aguda; sem avaliação clínica, dispensar pode ser arriscado.', consequencia:'Paciente sai frustrado e com dor.', positivos:['Honestidade'], negativos:['Sem suporte clínico'] },
      bad:{ titulo:'Desorganizado e fora de competência', texto:'Forçar um profissional ausente ou abrir desconto sem autorização fere processos e finanças.', consequencia:'Risco clínico, financeiro e de conflito com a equipe.', positivos:[], negativos:['Fora de alçada','Risco operacional'] }
    }
  }]
},

{
  id:'AG-03', area:'Agendamento', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'Cancelamento em cima da hora',
  contexto:'Paciente liga às 13:30 avisando que cancela a consulta das 14:00. Próximo da lista de espera pode ser chamado, mas precisa de 30 minutos para chegar.',
  personagem:{ emoji:'📵', nome:'Mariana, 35', detalhe:'Diz apenas: "Surgiu algo, não consigo ir."' },
  passos:[{
    fase:'Reacomodação da agenda',
    pergunta:'O que fazer?',
    opcoes:[
      { texto:'Aceitar o cancelamento sem julgamento, já oferecer remarcação, e checar lista de espera para encaixe do horário aberto.', qualidade:'good', pontos:10, comps:[9,10,8,6,5,9,7,9] },
      { texto:'Questionar o motivo detalhadamente antes de aceitar.', qualidade:'ok', pontos:5, comps:[4,5,5,4,4,4,4,5] },
      { texto:'Avisar que haverá multa por cancelamento tardio sem checar política.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Apenas marcar como "faltou" no sistema.', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Agilidade e respeito', texto:'Liberar a agenda e oferecer remarcação simultaneamente aproveita o horário e mantém o vínculo.', consequencia:'Outro paciente usa o horário, Mariana volta em outro dia.', positivos:['Agilidade','Empatia','Uso do recurso'], negativos:[] },
      ok:{ titulo:'Invasivo', texto:'Investigar motivo em excesso extrapola o necessário.', consequencia:'Paciente se sente julgado.', positivos:['Tentativa de cuidado'], negativos:['Invasão de privacidade'] },
      bad:{ titulo:'Má prática', texto:'Multa arbitrária ou registro como falta sem processo gera conflito e eventualmente reclamação.', consequencia:'Dano de vínculo e risco jurídico.', positivos:[], negativos:['Fora de processo','Falha de empatia'] }
    }
  }]
},

{
  id:'AG-04', area:'Agendamento', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Sistema fora do ar',
  contexto:'Sistema de agenda caiu. Três pacientes esperam, telefone toca. Ainda não é possível confirmar quem está marcado para o quê.',
  personagem:{ emoji:'💻', nome:'Recepção — contingência', detalhe:'Backup em planilha desatualizada; suporte avisa 30-60 min.' },
  passos:[{
    fase:'Plano de contingência',
    pergunta:'Melhor sequência de ações?',
    opcoes:[
      { texto:'Avisar os pacientes presentes, registrar atendimentos e confirmações em papel com campos padronizados, acionar suporte e priorizar consultas clínicas sobre novas marcações.', qualidade:'good', pontos:10, comps:[8,10,9,6,6,9,7,10] },
      { texto:'Parar tudo até o sistema voltar.', qualidade:'bad', pontos:2, comps:[2,2,3,3,3,2,2,2] },
      { texto:'Continuar marcando no que for, sem registro algum.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
      { texto:'Repassar o problema ao gerente e aguardar orientação.', qualidade:'ok', pontos:5, comps:[4,5,5,4,4,5,4,6] }
    ],
    feedbacks:{
      good:{ titulo:'Continuidade operacional', texto:'Registros padronizados e priorização clínica mantêm a clínica funcionando em crise.', consequencia:'Quando o sistema volta, dá para sincronizar sem perdas.', positivos:['Plano B','Documentação','Liderança'], negativos:[] },
      ok:{ titulo:'Passividade', texto:'Esperar ordens em crise retarda resposta.', consequencia:'Pacientes esperam sem previsão.', positivos:['Buscou orientação'], negativos:['Falta de iniciativa'] },
      bad:{ titulo:'Falha grave', texto:'Parar tudo ou marcar no "de cor" cria caos administrativo.', consequencia:'Dados perdidos, pacientes prejudicados.', positivos:[], negativos:['Sem registro','Perda de controle'] }
    }
  }]
},

{
  id:'AG-05', area:'Agendamento', complexidade:1, tipo:'Normal', tempo:8,
  titulo:'Paciente confuso no telefone',
  contexto:'Paciente idoso liga para marcar e vai trocando dia e horário a cada resposta. Você já repetiu três vezes.',
  personagem:{ emoji:'☎️', nome:'Sr. Paulo, 72', detalhe:'Ouve bem, mas se perde nas datas. Atencioso.' },
  passos:[{
    fase:'Comunicação telefônica clara',
    pergunta:'Como finalizar a marcação com segurança?',
    opcoes:[
      { texto:'Ditar lentamente data, hora e endereço, pedir que ele repita para você, enviar confirmação por WhatsApp/SMS e registrar no sistema.', qualidade:'good', pontos:10, comps:[10,8,8,6,5,7,6,9] },
      { texto:'Perguntar se tem alguém na casa que possa ajudá-lo.', qualidade:'ok', pontos:6, comps:[6,5,5,4,4,5,5,6] },
      { texto:'Encerrar e dizer que ele passe na clínica para marcar pessoalmente.', qualidade:'ok', pontos:5, comps:[4,4,5,4,4,4,4,5] },
      { texto:'Marcar no horário que você achar melhor, sem confirmar.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Dupla confirmação', texto:'Repetir e enviar registro escrito reduz falhas e no-show, respeitando a autonomia.', consequencia:'Paciente comparece com a informação correta.', positivos:['Redundância saudável','Respeito ao paciente'], negativos:[] },
      ok:{ titulo:'Transfere a responsabilidade', texto:'Envolver terceiros pode ajudar, mas limita autonomia; marcar presencial pode ser inviável.', consequencia:'Atraso ou constrangimento.', positivos:['Tenta apoio'], negativos:['Autonomia reduzida'] },
      bad:{ titulo:'Decidir no lugar dele', texto:'Agendar sem confirmar gera no-show e perda de confiança.', consequencia:'Falta, agenda prejudicada.', positivos:[], negativos:['Sem confirmação','Risco de falta'] }
    }
  }]
},

{
  id:'AG-06', area:'Agendamento', complexidade:2, tipo:'Normal', tempo:10,
  titulo:'Paciente quer horário que conflita com necessidade clínica',
  contexto:'Paciente exige "sexta às 16:00", horário reservado para cirurgias longas. Ele precisa só de uma restauração simples.',
  personagem:{ emoji:'💼', nome:'Júlia, 38', detalhe:'Horário corrido no trabalho, diz que essa é a única janela.' },
  passos:[{
    fase:'Negociação de agenda',
    pergunta:'Melhor abordagem?',
    opcoes:[
      { texto:'Explicar que aquele horário é reservado a procedimentos longos, oferecer horários curtos próximos (início/final do turno) e colocar na fila de espera para desistências.', qualidade:'good', pontos:10, comps:[9,9,9,7,5,8,8,9] },
      { texto:'Marcar mesmo assim — "problema do dentista depois".', qualidade:'bad', pontos:1, comps:[1,2,2,2,2,1,1,1] },
      { texto:'Recusar sem oferecer alternativa.', qualidade:'ok', pontos:5, comps:[4,4,5,5,5,4,4,5] },
      { texto:'Oferecer desconto para convencê-la a aceitar outro horário.', qualidade:'bad', pontos:3, comps:[3,4,3,3,3,3,3,3] }
    ],
    feedbacks:{
      good:{ titulo:'Limite com criatividade', texto:'Explicar o porquê e oferecer alternativas concretas transforma "não" em "sim diferente".', consequencia:'Paciente geralmente aceita; agenda cirúrgica preservada.', positivos:['Limite claro','Alternativas','Empatia'], negativos:[] },
      ok:{ titulo:'Frio', texto:'Recusar sem alternativa perde a paciente.', consequencia:'Cliente migra para outro lugar.', positivos:['Mantém processo'], negativos:['Perde paciente'] },
      bad:{ titulo:'Descontrole', texto:'Marcar sobre cirurgia ou abrir desconto arbitrário comprometem operação e margem.', consequencia:'Prejuízo clínico e financeiro.', positivos:[], negativos:['Fora de processo','Sem autorização'] }
    }
  }]
},

{
  id:'AG-07', area:'Agendamento', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'Paciente quer cancelar retorno preventivo',
  contexto:'Paciente terminou tratamento há 3 meses. Você agendou retorno para 6 meses. Agora ele liga querendo cancelar: "Está tudo ótimo".',
  personagem:{ emoji:'🙂', nome:'Lucas, 40', detalhe:'Assíduo, geralmente cumpre. Argumenta que não sente necessidade.' },
  passos:[{
    fase:'Educação preventiva',
    pergunta:'O que dizer?',
    opcoes:[
      { texto:'Explicar o valor do retorno preventivo, registrar a decisão dele se quiser mesmo cancelar e deixar a porta aberta para reagendar.', qualidade:'good', pontos:10, comps:[9,8,8,8,6,8,7,10] },
      { texto:'Avisar que "se aparecer algo vai ser muito mais caro".', qualidade:'ok', pontos:5, comps:[4,5,5,5,5,4,4,5] },
      { texto:'Apenas cancelar e registrar "paciente recusou".', qualidade:'ok', pontos:6, comps:[5,6,6,5,5,5,6,7] },
      { texto:'Insistir bastante para que ele mantenha, argumentando que "você vai se arrepender".', qualidade:'bad', pontos:3, comps:[3,3,3,4,4,3,2,3] }
    ],
    feedbacks:{
      good:{ titulo:'Educação sem pressão', texto:'Informar e respeitar a decisão mantém o vínculo e cumpre o papel educativo.', consequencia:'Paciente pode voltar espontaneamente; sem ressentimento.', positivos:['Autonomia','Educação'], negativos:[] },
      ok:{ titulo:'Morno', texto:'Apenas registrar deixa a oportunidade educativa passar; alerta de custo soa mercantilista.', consequencia:'Perda pedagógica.', positivos:['Documenta'], negativos:['Falta didática'] },
      bad:{ titulo:'Pressão inadequada', texto:'Insistência excessiva desgasta o vínculo.', consequencia:'Paciente pode não voltar.', positivos:[], negativos:['Pressão','Desgaste de vínculo'] }
    }
  }]
},

{
  id:'AG-08', area:'Agendamento', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Mudança de data com material já pedido',
  contexto:'Paciente quer mudar cirurgia de implante de quinta para segunda. Material específico já foi pré-pedido para quinta; não dá para confirmar para segunda ainda.',
  personagem:{ emoji:'🔧', nome:'Felipe, 52', detalhe:'Compromisso inadiável na quinta; educado, compreensivo.' },
  passos:[{
    fase:'Coordenação multidisciplinar',
    pergunta:'Conduta correta?',
    opcoes:[
      { texto:'Consultar o cirurgião e o estoque sobre viabilidade de antecipar o material; só confirmar para segunda com confirmação de ambos; do contrário, oferecer próxima data viável.', qualidade:'good', pontos:10, comps:[8,10,9,8,6,10,7,10] },
      { texto:'Confirmar segunda na cara e correr atrás do material depois.', qualidade:'bad', pontos:1, comps:[1,2,2,2,2,1,1,1] },
      { texto:'Negar a mudança sem oferecer alternativas.', qualidade:'ok', pontos:5, comps:[4,4,5,5,5,4,4,5] },
      { texto:'Cobrar taxa de reagendamento como regra.', qualidade:'bad', pontos:3, comps:[3,3,3,3,3,3,3,3] }
    ],
    feedbacks:{
      good:{ titulo:'Logística integrada', texto:'Cirurgia complexa depende do material certo; validar com equipe e estoque antes evita surpresa no dia.', consequencia:'Agendamento firme, sem surpresas.', positivos:['Multidisciplinar','Segurança clínica'], negativos:[] },
      ok:{ titulo:'Rígido', texto:'Negar sem tentar perde a chance de acomodar o paciente.', consequencia:'Paciente busca outro lugar.', positivos:['Proteção do fluxo'], negativos:['Sem criatividade'] },
      bad:{ titulo:'Arriscado', texto:'Confirmar sem certeza gera cancelamento de última hora, que é pior que remarcar agora.', consequencia:'Custo clínico e de confiança.', positivos:[], negativos:['Risco','Falta de processo'] }
    }
  }]
},

/* ============================================================
   ÁREA 3 — CONSULTÓRIO / ATENDIMENTO
   ============================================================ */

{
  id:'CO-01', area:'Consultório', complexidade:3, tipo:'Emergência', tempo:15,
  titulo:'Material da cirurgia não chegou',
  contexto:'Cirurgia de implante agendada para as 14:00. O abutment não chegou (atraso do fornecedor). O paciente já está na sala de espera. Dentista em pré-procedimento.',
  personagem:{ emoji:'🦷', nome:'Sr. Almir, 60', detalhe:'Viajou de outra cidade para a cirurgia. Veio em jejum.' },
  passos:[{
    fase:'Detecção e comunicação',
    pergunta:'Qual sua primeira ação?',
    opcoes:[
      { texto:'Avisar o dentista IMEDIATAMENTE, antes de qualquer passo invasivo; conferir estoque completo; acionar o fornecedor em paralelo.', qualidade:'good', pontos:10, comps:[7,10,10,9,10,10,7,10] },
      { texto:'Tentar "improvisar" com material parecido para não perder o dia.', qualidade:'bad', pontos:1, comps:[1,2,2,3,1,1,1,1] },
      { texto:'Ir aplicando a anestesia enquanto "alguém resolve" o material.', qualidade:'bad', pontos:1, comps:[1,1,1,2,1,1,1,1] },
      { texto:'Contar com o dentista descobrir depois e ficar observando.', qualidade:'ok', pontos:3, comps:[3,2,2,4,3,2,3,3] }
    ],
    feedbacks:{
      good:{ titulo:'Interrupção salvadora', texto:'Parar antes de invadir o paciente é a regra. Comunicação preventiva evita desastre clínico e jurídico.', consequencia:'Cirurgia é reagendada com dignidade; paciente não é exposto.', positivos:['Prevenção','Equipe alinhada','Segurança do paciente'], negativos:[] },
      ok:{ titulo:'Passividade perigosa', texto:'Observar e esperar pode levar a descoberta tardia — pior cenário.', consequencia:'Risco do paciente ser anestesiado sem material.', positivos:[], negativos:['Falta de iniciativa','Risco grave'] },
      bad:{ titulo:'Inaceitável', texto:'Improvisar material ou anestesiar sem material completo é negligência e pode configurar erro grave.', consequencia:'Dano ao paciente, responsabilização.', positivos:[], negativos:['Risco clínico','Risco legal','Violação ética'] }
    }
  },{
    fase:'Comunicação ao paciente',
    pergunta:'E agora, como falar com o Sr. Almir?',
    opcoes:[
      { texto:'Ir até ele com o dentista, explicar com honestidade, oferecer reagendamento prioritário e transporte/alimentação se cabível.', qualidade:'good', pontos:10, comps:[10,8,8,6,5,9,8,10] },
      { texto:'Deixar apenas o dentista resolver sozinho enquanto você evita o paciente.', qualidade:'ok', pontos:5, comps:[4,4,5,5,5,5,4,5] },
      { texto:'Dizer que a cirurgia atrasou sem explicar o motivo real.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Informar apenas quando ele perguntar, para ganhar tempo.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Transparência constrói confiança', texto:'Acompanhar o dentista e oferecer compensações mostra cuidado institucional.', consequencia:'Paciente sai frustrado, mas respeitado; volta.', positivos:['Transparência','Equipe junta','Gestão de expectativa'], negativos:[] },
      ok:{ titulo:'Você poderia ajudar mais', texto:'O dentista precisa do suporte do TSB na comunicação, especialmente em crises.', consequencia:'Dentista sobrecarregado.', positivos:['Respeita hierarquia'], negativos:['Falta de suporte'] },
      bad:{ titulo:'Quebra de confiança', texto:'Ocultar o motivo ou esperar a pergunta soa desonesto.', consequencia:'Paciente descobre depois e processa a clínica.', positivos:[], negativos:['Desonestidade','Dano de confiança'] }
    }
  }]
},

{
  id:'CO-02', area:'Consultório', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Paciente relata dor durante procedimento',
  contexto:'Durante restauração, o paciente levanta a mão: sinal combinado de "dor/pausa". A anestesia parece não ter pegado totalmente. O dentista olha para você.',
  personagem:{ emoji:'😖', nome:'Ricardo, 39', detalhe:'Primeiro procedimento no consultório, tenso desde a chegada.' },
  passos:[{
    fase:'Interrupção e triagem da dor',
    pergunta:'O que fazer?',
    opcoes:[
      { texto:'Pausar, retirar o instrumento com segurança, perguntar sobre tipo e local da dor e informar o dentista para avaliar reforço de anestesia ou pausa maior.', qualidade:'good', pontos:10, comps:[9,9,9,8,7,9,7,10] },
      { texto:'Dizer "é só mais um pouquinho" para o dentista concluir.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,2,1,1] },
      { texto:'Afastar o instrumento e sair da sala para buscar ajuda, deixando o dentista sozinho.', qualidade:'bad', pontos:3, comps:[3,3,3,3,4,2,2,3] },
      { texto:'Continuar o trabalho e esperar o paciente se adaptar à dor.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Segurança primeiro', texto:'Respeitar o sinal do paciente é protocolo. O trabalho em equipe de quatro mãos depende dessa leitura.', consequencia:'Paciente relaxa e a anestesia é reforçada.', positivos:['Escuta ativa','Segurança','Equipe'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Conduta inaceitável', texto:'Minimizar dor ou deixar o dentista sem apoio gera trauma ao paciente e risco clínico.', consequencia:'Paciente traumatizado, crítica pública.', positivos:[], negativos:['Falta empatia','Risco clínico'] }
    }
  }]
},

{
  id:'CO-03', area:'Consultório', complexidade:1, tipo:'Normal', tempo:8,
  titulo:'Paciente aguarda na cadeira com o dentista atrasado',
  contexto:'Paciente já está sentado, preparado. O dentista está 15 min atrasado na consulta anterior. Você, TSB, está na sala.',
  personagem:{ emoji:'⏳', nome:'Alice, 45', detalhe:'Educada, mas olha o relógio a cada 2 minutos.' },
  passos:[{
    fase:'Acolhimento na cadeira',
    pergunta:'Qual conduta?',
    opcoes:[
      { texto:'Explicar o motivo do atraso com honestidade, oferecer água, checar se há alguma dúvida ou ajuste necessário e manter diálogo leve.', qualidade:'good', pontos:10, comps:[10,7,7,6,5,8,7,10] },
      { texto:'Deixá-la na sala em silêncio para não atrapalhar.', qualidade:'bad', pontos:3, comps:[3,3,3,3,3,3,3,3] },
      { texto:'Dizer que "o dentista é assim mesmo, sempre atrasado".', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,2,1,1] },
      { texto:'Iniciar a profilaxia sem autorização, para adiantar.', qualidade:'bad', pontos:1, comps:[1,1,1,2,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Hospitalidade clínica', texto:'Esse é o papel do TSB: tornar o atraso tolerável sem comprometer a relação.', consequencia:'Paciente chega calma ao procedimento.', positivos:['Hospitalidade','Transparência'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Sem noção de fluxo', texto:'Expor o colega, iniciar procedimento sem ordem ou ignorar o paciente corrói confiança e hierarquia.', consequencia:'Clima ruim, risco clínico.', positivos:[], negativos:['Fora de competência','Desrespeito ao paciente'] }
    }
  }]
},

{
  id:'CO-04', area:'Consultório', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Paciente pede clareamento durante a consulta',
  contexto:'No meio da restauração, o paciente solicita: "Já que estou aqui, aproveita e faz um clareamento também?". Não está orçado, e a agenda só tem mais 25 minutos.',
  personagem:{ emoji:'😁', nome:'Marcos, 33', detalhe:'Simpático, festa no fim de semana, "quer ganhar tempo".' },
  passos:[{
    fase:'Oferta ética de serviço',
    pergunta:'Como responder?',
    opcoes:[
      { texto:'Explicar que clareamento exige avaliação e protocolo próprio, oferecer avaliação rápida do dentista após a consulta atual e marcar em outra data.', qualidade:'good', pontos:10, comps:[9,9,9,9,6,8,7,10] },
      { texto:'Improvisar um clareamento caseiro rápido agora para agradar.', qualidade:'bad', pontos:1, comps:[1,2,2,2,2,1,1,1] },
      { texto:'Usar a oportunidade para oferecer um pacote caro sem explicar opções.', qualidade:'bad', pontos:3, comps:[3,4,3,4,3,3,3,3] },
      { texto:'Simplesmente dizer "não dá" sem oferecer alternativa.', qualidade:'ok', pontos:5, comps:[4,5,5,6,5,5,5,6] }
    ],
    feedbacks:{
      good:{ titulo:'Venda ética', texto:'Informar protocolo e agendar corretamente é venda com cuidado — respeita o paciente e o plano clínico.', consequencia:'Paciente entende e agenda.', positivos:['Conhecimento técnico','Ética comercial'], negativos:[] },
      ok:{ titulo:'Corta sem seda', texto:'Dizer "não dá" sem oferecer alternativa perde a venda e frustra o paciente.', consequencia:'Perda de oportunidade e relacionamento.', positivos:['Mantém foco'], negativos:['Falta criatividade'] },
      bad:{ titulo:'Venda predatória ou improviso perigoso', texto:'Clareamento exige protocolo; pressão financeira sem opção é antiética.', consequencia:'Risco clínico, perda de confiança, problema com Procon.', positivos:[], negativos:['Fora de protocolo','Venda agressiva'] }
    }
  }]
},

{
  id:'CO-05', area:'Consultório', complexidade:3, tipo:'Emergência', tempo:10,
  titulo:'Sinais iniciais de reação alérgica',
  contexto:'Durante aplicação de adesivo restaurador, o paciente relata "boca formigando, a garganta está coçando". Você é o TSB auxiliando.',
  personagem:{ emoji:'😵', nome:'Patrícia, 47', detalhe:'Sem alergia conhecida registrada; anestésico já foi usado antes.' },
  passos:[{
    fase:'Emergência clínica',
    pergunta:'Qual protocolo imediato?',
    opcoes:[
      { texto:'Parar imediatamente, remover material ativo, irrigar a boca, avisar o dentista, monitorar sinais vitais e preparar kit de emergência (anti-histamínico/adrenalina a critério clínico).', qualidade:'good', pontos:10, comps:[9,9,10,10,10,10,8,10] },
      { texto:'Dizer para a paciente relaxar, que é ansiedade, e continuar.', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] },
      { texto:'Parar, mas sem avisar o dentista até ter certeza.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Ligar direto para o SAMU antes de avaliar localmente.', qualidade:'ok', pontos:5, comps:[4,5,5,5,7,4,4,6] }
    ],
    feedbacks:{
      good:{ titulo:'Protocolo de anafilaxia', texto:'Parar a exposição, remover o agente e acionar a equipe clínica são passos do protocolo. Kit de emergência precisa estar pronto.', consequencia:'Paciente evolui estável.', positivos:['Protocolo correto','Trabalho em equipe','Biossegurança'], negativos:[] },
      ok:{ titulo:'Exagero isolado', texto:'SAMU sem avaliação pode ser precipitado; ainda assim, demora para acionar pode ser pior.', consequencia:'Excesso de alarme vs. risco de atraso.', positivos:['Senso de urgência'], negativos:['Falta de avaliação inicial'] },
      bad:{ titulo:'Negligência grave', texto:'Minimizar sinais de alergia pode custar a vida.', consequencia:'Risco de anafilaxia fatal, responsabilização.', positivos:[], negativos:['Risco de morte','Falha ética'] }
    }
  }]
},

{
  id:'CO-06', area:'Consultório', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Equipamento falha no meio do procedimento',
  contexto:'A caneta de alta rotação trava e superaquece durante a restauração. O paciente já está anestesiado.',
  personagem:{ emoji:'🛠️', nome:'Cláudio, 44', detalhe:'Anestesia pegou bem; tem compromisso em 1h.' },
  passos:[{
    fase:'Contingência técnica',
    pergunta:'Próximo passo?',
    opcoes:[
      { texto:'Trocar pelo equipamento reserva já preparado, manter o paciente confortável, registrar a falha e enviar para manutenção após o atendimento.', qualidade:'good', pontos:10, comps:[8,10,9,10,8,9,6,10] },
      { texto:'Insistir no equipamento travado, "ele volta".', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
      { texto:'Pausar procedimento indefinidamente sem oferecer alternativas.', qualidade:'ok', pontos:4, comps:[4,3,4,5,4,3,3,4] },
      { texto:'Desmontar o equipamento ali mesmo para tentar consertar.', qualidade:'bad', pontos:2, comps:[2,2,2,3,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Contingência preparada', texto:'Equipamento reserva pré-preparado é boas práticas. Registrar a falha permite manutenção preventiva.', consequencia:'Procedimento concluído sem trauma.', positivos:['Preparo','Manutenção','Fluxo'], negativos:[] },
      ok:{ titulo:'Pausa sem plano', texto:'Deixar o paciente anestesiado esperando sem alternativa é desconfortável e arriscado.', consequencia:'Paciente frustrado.', positivos:['Seguro'], negativos:['Falta plano B'] },
      bad:{ titulo:'Improvisação perigosa', texto:'Forçar equipamento falho ou desmontá-lo na hora é risco físico e de biossegurança.', consequencia:'Quebra maior, risco ao paciente.', positivos:[], negativos:['Risco','Fora de competência'] }
    }
  }]
},

{
  id:'CO-07', area:'Consultório', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Paciente recusa tratamento recomendado',
  contexto:'Dentista indicou tratamento de canal. Paciente responde: "Prefiro arrancar o dente de vez, sai mais barato". O dentista te olha pedindo ajuda.',
  personagem:{ emoji:'🙅', nome:'Elaine, 51', detalhe:'Traz experiência ruim passada de outro profissional.' },
  passos:[{
    fase:'Educação do paciente',
    pergunta:'Como você apoia o dentista?',
    opcoes:[
      { texto:'Perguntar o motivo da recusa (medo/custo/tempo), explicar em linguagem simples as consequências da extração e apresentar opções de parcelamento; respeitar a decisão final e documentar.', qualidade:'good', pontos:10, comps:[10,9,9,8,6,9,8,10] },
      { texto:'Insistir firmemente até ela aceitar o canal.', qualidade:'bad', pontos:2, comps:[2,2,2,4,3,2,2,2] },
      { texto:'Concordar com a extração sem mais discussão para ganhar tempo.', qualidade:'bad', pontos:3, comps:[3,3,3,4,4,3,3,3] },
      { texto:'Deixar que o dentista lide sozinho, "não é meu papel".', qualidade:'ok', pontos:5, comps:[4,4,5,5,5,5,5,5] }
    ],
    feedbacks:{
      good:{ titulo:'Apoio educativo', texto:'Entender o "por quê" da recusa é o começo da boa comunicação clínica. Autonomia do paciente respeitada com informação.', consequencia:'Paciente decide com base em conhecimento, não em medo/custo oculto.', positivos:['Educação','Autonomia','Equipe'], negativos:[] },
      ok:{ titulo:'Papel pouco exercido', texto:'O TSB também educa, não é só técnico — apoia o dentista nessa hora.', consequencia:'Dentista sozinho, comunicação mais frágil.', positivos:['Respeito à hierarquia'], negativos:['Falta de apoio'] },
      bad:{ titulo:'Falhas de conduta', texto:'Pressão ou rendição rápida fogem do papel educativo e podem ferir a autonomia.', consequencia:'Decisão tomada por cansaço, não por escolha.', positivos:[], negativos:['Fere autonomia','Conduta inadequada'] }
    }
  }]
},

{
  id:'CO-08', area:'Consultório', complexidade:3, tipo:'Emergência', tempo:15,
  titulo:'Paciente com fobia severa entra em pânico',
  contexto:'Ao ver a seringa, paciente começa a chorar, tremer, respirar ofegante e diz que quer sair. Fobia declarada no cadastro mas sem preparo prévio.',
  personagem:{ emoji:'😨', nome:'Sandra, 36', detalhe:'Última consulta foi há 6 anos, traumática.' },
  passos:[{
    fase:'Primeira resposta',
    pergunta:'Qual sua ação imediata?',
    opcoes:[
      { texto:'Afastar o material do campo visual, abaixar a cadeira suavemente, validar o medo, orientar respiração e oferecer controle (sinal de parar; pausa).', qualidade:'good', pontos:10, comps:[10,9,9,8,6,9,8,10] },
      { texto:'Segurar o braço para aplicar a anestesia antes que ela fuja.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
      { texto:'Falar "é só um piquinho, não vai doer" em tom infantilizado.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Sair da sala para chamar a mãe/acompanhante deixando a paciente sozinha.', qualidade:'ok', pontos:4, comps:[4,3,4,4,4,4,4,4] }
    ],
    feedbacks:{
      good:{ titulo:'Dessensibilização na prática', texto:'Retirar estímulos, dar controle e validar sentimentos são técnicas efetivas. Sinal combinado é crucial.', consequencia:'Paciente recupera e topa continuar ou reagendar com sedação prévia.', positivos:['Autonomia','Técnica','Empatia'], negativos:[] },
      ok:{ titulo:'Deixou sozinha', texto:'Chamar acompanhante pode ajudar, mas não deixe a paciente sem apoio em pânico.', consequencia:'Crise pode escalar.', positivos:['Buscou apoio'], negativos:['Abandono momentâneo'] },
      bad:{ titulo:'Condutas que agravam', texto:'Coagir, minimizar ou infantilizar reforçam o trauma.', consequencia:'Trauma consolida, paciente nunca volta.', positivos:[], negativos:['Trauma','Violação da autonomia'] }
    }
  },{
    fase:'Plano após estabilização',
    pergunta:'Qual o melhor encaminhamento?',
    opcoes:[
      { texto:'Combinar com o dentista reagendar com preparo (sedação consciente/acompanhamento psicológico), registrando tudo no prontuário.', qualidade:'good', pontos:10, comps:[9,9,9,8,7,9,8,10] },
      { texto:'Insistir que ela conclua hoje para "não perder a anestesia".', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Marcar retorno sem plano especial, igual a qualquer paciente.', qualidade:'ok', pontos:5, comps:[5,4,5,5,5,5,5,5] },
      { texto:'Dar alta definitiva: "essa clínica não é o lugar certo pra você".', qualidade:'bad', pontos:2, comps:[2,2,3,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Plano individualizado', texto:'Sedação/preparo psicológico para fobia severa é evidência consolidada.', consequencia:'Tratamento viável no médio prazo.', positivos:['Plano clínico','Respeito','Documentação'], negativos:[] },
      ok:{ titulo:'Retorno ingênuo', texto:'Sem preparo, o episódio tende a se repetir.', consequencia:'Nova crise.', positivos:['Mantém vínculo'], negativos:['Falta plano'] },
      bad:{ titulo:'Desumano', texto:'Forçar conclusão ou dar "alta" institucional não são condutas.', consequencia:'Risco legal e ético.', positivos:[], negativos:['Risco grave'] }
    }
  }]
},

{
  id:'CO-09', area:'Consultório', complexidade:3, tipo:'Emergência', tempo:15,
  titulo:'Exposição a perfurocortante',
  contexto:'Durante procedimento, o paciente mexe a cabeça subitamente e a agulha anestésica perfura o seu dedo (TSB).',
  personagem:{ emoji:'🩸', nome:'Ocorrência ocupacional', detalhe:'Paciente com sorologia desconhecida.' },
  passos:[{
    fase:'Protocolo pós-exposição',
    pergunta:'Qual o protocolo correto?',
    opcoes:[
      { texto:'Parar o procedimento, deixar sangrar, lavar com água e sabão, não espremer, avisar o dentista, registrar a CAT e iniciar protocolo de testes (paciente-fonte e profissional) conforme PCIH.', qualidade:'good', pontos:10, comps:[6,9,10,10,10,9,6,10] },
      { texto:'Apertar o local para "sair o sangue contaminado" e continuar o procedimento.', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] },
      { texto:'Passar álcool, colocar band-aid e seguir o dia.', qualidade:'bad', pontos:2, comps:[1,2,2,2,2,2,1,2] },
      { texto:'Registrar apenas no dia seguinte "para não causar confusão agora".', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Acidente ocupacional pelo protocolo', texto:'NR-32 e PCIH orientam passos específicos; CAT protege o trabalhador.', consequencia:'Registro válido, testes no prazo, saúde do profissional preservada.', positivos:['Biossegurança','Registros legais','Saúde ocupacional'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Falhas graves', texto:'Não documentar, minimizar ou espremer ferida coloca o profissional em risco.', consequencia:'Perda do direito legal, risco biológico.', positivos:[], negativos:['Risco biológico','Perda de direito'] }
    }
  }]
},

{
  id:'CO-10', area:'Consultório', complexidade:3, tipo:'Emergência', tempo:20,
  titulo:'Desmaio do paciente na cadeira',
  contexto:'Paciente fóbico entra em pré-síncope: palidez, sudorese, náusea e logo perde a consciência por segundos (vasovagal).',
  personagem:{ emoji:'😵‍💫', nome:'Jorge, 54', detalhe:'Hipertenso, veio em jejum.' },
  passos:[{
    fase:'Emergência clínica',
    pergunta:'Qual sequência de ações?',
    opcoes:[
      { texto:'Reclinar a cadeira, elevar as pernas, afrouxar vestes, monitorar respiração e pulso, oxigênio se disponível e acionar SAMU se demorar ou se houver sinais atípicos.', qualidade:'good', pontos:10, comps:[8,10,10,10,10,10,7,10] },
      { texto:'Dar água com açúcar imediatamente antes de verificar consciência.', qualidade:'bad', pontos:2, comps:[2,2,2,2,3,2,2,2] },
      { texto:'Tentar amoníaco "para reanimar" e sacudir o paciente.', qualidade:'bad', pontos:1, comps:[1,1,1,1,2,1,1,1] },
      { texto:'Deixar o paciente sentado, aguardando melhora.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'BLS no consultório', texto:'Posição anti-gravitacional é essencial; vias aéreas e monitorização primeiro.', consequencia:'Recuperação rápida na maioria dos casos; se não, SAMU acionado.', positivos:['Primeiros socorros','Protocolo','Trabalho em equipe'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Condutas obsoletas/perigosas', texto:'Amoníaco é desaconselhado; dar líquido a paciente inconsciente é risco de broncoaspiração.', consequencia:'Complicações graves.', positivos:[], negativos:['Risco clínico','Conhecimento desatualizado'] }
    }
  }]
},

{
  id:'CO-11', area:'Consultório', complexidade:3, tipo:'Exceção', tempo:15,
  titulo:'Lesão suspeita na mucosa',
  contexto:'Durante profilaxia, o dentista descobre úlcera com bordas irregulares na lateral da língua, sem cicatrização há 3 semanas, sem histórico de trauma.',
  personagem:{ emoji:'🔍', nome:'Celso, 62', detalhe:'Fumante, etilista social, pesquisa tudo no Google.' },
  passos:[{
    fase:'Comunicação sensível',
    pergunta:'Como comunicar a necessidade de avaliação especializada?',
    opcoes:[
      { texto:'Apoiar o dentista documentando o achado (foto/descrição), usar linguagem simples e sem diagnóstico conclusivo, encaminhar a um estomatologista e marcar retorno.', qualidade:'good', pontos:10, comps:[9,8,9,9,8,9,7,10] },
      { texto:'Dizer "isso pode ser câncer" para ele entender a gravidade.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Dizer "não é nada, provavelmente afta, relaxa".', qualidade:'bad', pontos:1, comps:[1,1,1,1,2,1,1,1] },
      { texto:'Oferecer cauterizar a lesão hoje para "resolver logo".', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Suspeita bem conduzida', texto:'Documentar, encaminhar e acompanhar são passos corretos; não cabe ao TSB diagnosticar.', consequencia:'Paciente avaliado por especialista em tempo hábil.', positivos:['Escuta','Registro','Encaminhamento'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Erros de comunicação e de competência', texto:'Alarmar ou minimizar são extremos que prejudicam; cauterizar está fora de alçada e contraindicado em lesão suspeita.', consequencia:'Perda de tempo para diagnóstico, dano ao paciente.', positivos:[], negativos:['Risco clínico','Comunicação ruim'] }
    }
  }]
},

{
  id:'CO-12', area:'Consultório', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Achado inesperado na radiografia',
  contexto:'Radiografia de rotina revela lesão periapical importante não relacionada à queixa principal. O dentista precisa reorientar o plano de tratamento.',
  personagem:{ emoji:'🦴', nome:'Sueli, 58', detalhe:'Veio apenas para limpeza, tem ansiedade financeira.' },
  passos:[{
    fase:'Apoio ao dentista na explicação',
    pergunta:'Qual seu papel ideal?',
    opcoes:[
      { texto:'Preparar material visual, ajudar a explicar com vocabulário acessível, escutar as preocupações (inclusive financeiras) e acolher o ritmo da decisão.', qualidade:'good', pontos:10, comps:[10,8,8,7,5,9,7,10] },
      { texto:'Apresentar o orçamento com pressa para fechar na hora.', qualidade:'bad', pontos:3, comps:[3,3,3,4,3,3,3,3] },
      { texto:'Deixar a paciente sozinha com o dentista para "não atrapalhar".', qualidade:'ok', pontos:5, comps:[4,4,5,5,4,4,5,5] },
      { texto:'Reforçar que "se não tratar agora, vai perder o dente".', qualidade:'bad', pontos:3, comps:[3,3,3,4,3,3,3,3] }
    ],
    feedbacks:{
      good:{ titulo:'Parceria educativa', texto:'O TSB potencializa a comunicação do dentista, especialmente com achados inesperados.', consequencia:'Paciente decide com tranquilidade.', positivos:['Parceria','Educação','Empatia'], negativos:[] },
      ok:{ titulo:'Ausência silenciosa', texto:'Sair pode ser respeitoso, mas perde oportunidade de apoio.', consequencia:'Dentista sobrecarregado.', positivos:['Respeito ao espaço'], negativos:['Falta parceria'] },
      bad:{ titulo:'Pressão inadequada', texto:'Apresentar orçamento com pressa ou usar medo soa mercantilista.', consequencia:'Paciente perde confiança.', positivos:[], negativos:['Pressão','Venda agressiva'] }
    }
  }]
},

{
  id:'CO-13', area:'Consultório', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Dentista parece estar passando mal',
  contexto:'O dentista está mais lento, pedindo para você repetir passos simples, com expressão de dor de cabeça. O paciente ainda não percebeu.',
  personagem:{ emoji:'🩻', nome:'Dr(a). supervisor(a)', detalhe:'Sem histórico, mas hoje está visivelmente diferente.' },
  passos:[{
    fase:'Cuidado com o colega e com o paciente',
    pergunta:'Qual a melhor conduta?',
    opcoes:[
      { texto:'Perguntar discretamente se está tudo bem, oferecer pausa técnica segura, manter vigilância e, se necessário, acionar a coordenação para decidir sobre continuidade.', qualidade:'good', pontos:10, comps:[9,9,9,8,7,10,8,10] },
      { texto:'Ignorar, afinal é problema dele.', qualidade:'bad', pontos:2, comps:[2,2,3,3,3,2,2,2] },
      { texto:'Falar alto na frente do paciente: "você precisa descansar".', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Continuar normalmente e observar depois.', qualidade:'ok', pontos:4, comps:[4,3,4,5,5,4,4,5] }
    ],
    feedbacks:{
      good:{ titulo:'Cuidado mútuo', texto:'Preservar a dignidade do colega e a segurança do paciente é o equilíbrio esperado.', consequencia:'Risco mitigado, equipe protegida.', positivos:['Equipe','Segurança','Discrição'], negativos:[] },
      ok:{ titulo:'Passividade moderada', texto:'Só observar pode ser insuficiente se o quadro piorar rápido.', consequencia:'Risco clínico sustentado.', positivos:['Atento'], negativos:['Falta iniciativa'] },
      bad:{ titulo:'Condutas prejudiciais', texto:'Exposição pública ou omissão ferem equipe e paciente.', consequencia:'Crise de confiança, risco clínico.', positivos:[], negativos:['Falha ética','Exposição'] }
    }
  }]
},

{
  id:'CO-14', area:'Consultório', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'Paciente questiona diagnóstico anterior',
  contexto:'Paciente: "mas o dentista anterior disse que era só uma manchinha". O dentista atual diagnosticou cárie profunda.',
  personagem:{ emoji:'🤨', nome:'Rosa, 48', detalhe:'Confiante no antigo profissional; quer entender a mudança.' },
  passos:[{
    fase:'Comunicação de segunda opinião',
    pergunta:'Como apoiar sem desautorizar o colega externo?',
    opcoes:[
      { texto:'Explicar que exames e o tempo mudam o quadro, oferecer imagens atuais e, se desejar, uma segunda opinião interna; registrar tudo.', qualidade:'good', pontos:10, comps:[10,9,9,9,5,9,9,10] },
      { texto:'Dizer que "o outro estava errado, não entende nada".', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Concordar que "talvez seja só manchinha mesmo" para evitar conflito.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
      { texto:'Pedir para a paciente confiar sem questionar.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Ciência, não rivalidade', texto:'Mostrar evidências atuais preserva o colega e o vínculo com o paciente.', consequencia:'Paciente decide informado.', positivos:['Ética','Autonomia','Conhecimento'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Erros recorrentes', texto:'Rivalizar ou ceder à pressão são extremos ruins.', consequencia:'Conflito ou dano clínico.', positivos:[], negativos:['Dano ético','Risco'] }
    }
  }]
},

{
  id:'CO-15', area:'Consultório', complexidade:2, tipo:'Exceção', tempo:12,
  titulo:'Cuidador insiste em entrar na sala clínica com paciente adulto',
  contexto:'A filha de um paciente idoso exige ficar na sala durante o procedimento. O paciente está orientado e não manifestou essa necessidade.',
  personagem:{ emoji:'👩‍🦳', nome:'Dona Zilda, 82', detalhe:'Orientada, usa bengala. A filha é cuidadora.' },
  passos:[{
    fase:'Autonomia e protocolo',
    pergunta:'Como conduzir?',
    opcoes:[
      { texto:'Perguntar à paciente, em privado, se deseja a presença da filha; explicar protocolo e alternativas (aguardar na sala de espera com acesso em caso de necessidade).', qualidade:'good', pontos:10, comps:[10,9,9,7,7,8,8,10] },
      { texto:'Permitir automaticamente — "é idoso, precisa de acompanhante".', qualidade:'ok', pontos:5, comps:[5,4,4,5,5,4,4,5] },
      { texto:'Recusar de forma ríspida sem explicar alternativas.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Pedir ao dentista para lidar sozinho com a filha.', qualidade:'ok', pontos:4, comps:[4,3,4,4,4,3,4,4] }
    ],
    feedbacks:{
      good:{ titulo:'Respeito à autonomia do paciente', texto:'Idoso orientado decide. A presença do acompanhante se baseia no desejo do paciente e na segurança clínica.', consequencia:'Filha compreende, paciente respeitada.', positivos:['Autonomia','Protocolo','Comunicação'], negativos:[] },
      ok:{ titulo:'Evitamento', texto:'Delegar sem tentar ou permitir automaticamente desconsidera a paciente.', consequencia:'Processo inconsistente.', positivos:['Busca apoio'], negativos:['Falha de protagonismo'] },
      bad:{ titulo:'Rispidez desnecessária', texto:'Recusa seca gera conflito evitável.', consequencia:'Família insatisfeita.', positivos:[], negativos:['Falta empatia'] }
    }
  }]
},

/* ============================================================
   ÁREA 4 — ESTOQUE E MATERIAL
   ============================================================ */

{
  id:'ES-01', area:'Estoque', complexidade:1, tipo:'Exceção', tempo:10,
  titulo:'Anestésico vencido em uso',
  contexto:'Durante conferência semanal, você identifica caixa de anestésico com validade expirada há 60 dias. Alguns tubetes já foram usados em pacientes nesta semana.',
  personagem:{ emoji:'📦', nome:'Conferência de estoque', detalhe:'Semanal; você é o responsável hoje.' },
  passos:[{
    fase:'Contenção do risco',
    pergunta:'Primeira ação?',
    opcoes:[
      { texto:'Retirar imediatamente do uso, segregar como "descarte/não utilizar", comunicar o dentista e a coordenação, listar pacientes que podem ter sido expostos e abrir ação corretiva (NR-32).', qualidade:'good', pontos:10, comps:[6,10,10,9,10,10,6,10] },
      { texto:'Separar os tubetes vencidos mas deixar no mesmo armário.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Descartar em silêncio para evitar confusão.', qualidade:'bad', pontos:1, comps:[1,2,2,2,3,1,1,1] },
      { texto:'Deixar para o próximo profissional decidir o que fazer.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Conformidade e transparência', texto:'Material vencido em uso é evento adverso: exige contenção, comunicação e rastreabilidade.', consequencia:'Risco documentado e corrigido.', positivos:['Biossegurança','Transparência','Ação corretiva'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Omissão grave', texto:'Descartar em silêncio ou manter junto ao novo aumenta risco e responsabilização.', consequencia:'Incidente pode escalar, perda de confiança.', positivos:[], negativos:['Risco','Risco legal'] }
    }
  }]
},

{
  id:'ES-02', area:'Estoque', complexidade:1, tipo:'Normal', tempo:10,
  titulo:'Divergência entre estoque físico e sistema',
  contexto:'Sistema informa 80 brocas, contagem física mostra 62. Sem nota fiscal recente.',
  personagem:{ emoji:'🧮', nome:'Inventário mensal', detalhe:'Divergência relevante; sem documentação clara.' },
  passos:[{
    fase:'Investigação sem acusação',
    pergunta:'Conduta correta?',
    opcoes:[
      { texto:'Recontar, checar descartes/quebras, abrir registro de divergência e informar a coordenação para conciliação, sem acusar colegas.', qualidade:'good', pontos:10, comps:[7,10,9,8,7,9,7,10] },
      { texto:'Culpar publicamente a equipe por "roubo".', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Ajustar o sistema para bater com a contagem sem investigar.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Ignorar e fechar o inventário como estava.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Boas práticas de inventário', texto:'Divergência não é culpa — é sinal para investigar. Registro e comunicação protegem todos.', consequencia:'Processo confiável, equipe não acusada injustamente.', positivos:['Controle','Transparência'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Decisões inadequadas', texto:'Acusar, ajustar sem rastro ou ignorar são falhas de controle.', consequencia:'Ambiente tóxico, perda de controle.', positivos:[], negativos:['Falha ética','Falha de controle'] }
    }
  }]
},

{
  id:'ES-03', area:'Estoque', complexidade:1, tipo:'Exceção', tempo:8,
  titulo:'Material recebido com defeito',
  contexto:'Caixa de agulhas chega com lacre violado e algumas embalagens amassadas. Entregador espera confirmação no WhatsApp.',
  personagem:{ emoji:'📦', nome:'Recebimento', detalhe:'Fornecedor novo; entregador pressiona.' },
  passos:[{
    fase:'Controle de qualidade na entrada',
    pergunta:'O que fazer?',
    opcoes:[
      { texto:'Registrar com foto, recusar os itens danificados, assinar nota com ressalva e comunicar o fornecedor e a coordenação.', qualidade:'good', pontos:10, comps:[7,10,9,9,10,9,7,10] },
      { texto:'Aceitar tudo, "depois a gente vê".', qualidade:'bad', pontos:1, comps:[1,2,2,2,2,1,1,1] },
      { texto:'Recusar tudo sem documentar, mandando embora o entregador.', qualidade:'ok', pontos:5, comps:[4,5,5,5,6,4,5,5] },
      { texto:'Aceitar com desconto combinado por fora, sem registro.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Rastreabilidade total', texto:'Registro fotográfico e nota com ressalva garantem direito e evidência.', consequencia:'Fornecedor substitui; clínica protegida.', positivos:['Controle','Biossegurança','Profissionalismo'], negativos:[] },
      ok:{ titulo:'Correto mas sem registro', texto:'Recusar está certo, mas sem documentação perde-se a cadeia.', consequencia:'Possível disputa com fornecedor.', positivos:['Proteção'], negativos:['Sem registro'] },
      bad:{ titulo:'Falhas graves', texto:'Aceitar material alterado ou acordar por fora fragiliza controle e biossegurança.', consequencia:'Risco clínico e fiscal.', positivos:[], negativos:['Biossegurança','Fiscal'] }
    }
  }]
},

{
  id:'ES-04', area:'Estoque', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Material crítico no ponto mínimo',
  contexto:'Clorexidina 0,12% chegou ao estoque mínimo antes do previsto. Agenda cirúrgica relevante nos próximos dias.',
  personagem:{ emoji:'🧪', nome:'Insumo crítico', detalhe:'Rotura de estoque pode cancelar cirurgias.' },
  passos:[{
    fase:'Priorização de compra',
    pergunta:'Próxima ação?',
    opcoes:[
      { texto:'Informar imediatamente a coordenação/compras, checar fornecedor com entrega rápida, reservar unidades para as cirurgias e atualizar o ponto de pedido.', qualidade:'good', pontos:10, comps:[7,10,10,8,9,10,6,10] },
      { texto:'Esperar acabar para pedir.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
      { texto:'Pedir qualquer quantidade, sem priorizar.', qualidade:'ok', pontos:5, comps:[4,5,5,5,6,4,4,5] },
      { texto:'Pedir pelo primeiro preço encontrado, ignorando validade e lote.', qualidade:'bad', pontos:3, comps:[3,3,3,4,3,3,3,3] }
    ],
    feedbacks:{
      good:{ titulo:'Logística preventiva', texto:'Reserva e ponto de pedido ajustado evitam rotura crítica.', consequencia:'Cirurgias protegidas.', positivos:['Planejamento','Equipe'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Erros básicos', texto:'Esperar acabar ou escolher só por preço compromete qualidade e continuidade.', consequencia:'Cancelamentos, retrabalho.', positivos:[], negativos:['Risco operacional','Qualidade'] }
    }
  }]
},

{
  id:'ES-05', area:'Estoque', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'Descarte incorreto observado',
  contexto:'Você vê um colega jogando gaze com sangue no lixo comum.',
  personagem:{ emoji:'♻️', nome:'Colega', detalhe:'Recente contratação; talvez ainda não capacitado.' },
  passos:[{
    fase:'Correção entre pares',
    pergunta:'Conduta correta?',
    opcoes:[
      { texto:'Abordar em particular, explicar o descarte correto (saco branco leitoso/infectante), orientar sem constranger e reportar à coordenação para reforço do treinamento.', qualidade:'good', pontos:10, comps:[9,9,9,9,10,10,8,10] },
      { texto:'Ignorar, "não é meu papel".', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Chamar atenção em público na frente dos pacientes.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Reclamar diretamente ao gerente sem falar com o colega.', qualidade:'ok', pontos:5, comps:[4,5,5,5,5,4,5,5] }
    ],
    feedbacks:{
      good:{ titulo:'Cultura de segurança', texto:'Correção em par + reforço formal mantêm a equipe segura.', consequencia:'Melhoria contínua, sem constrangimento.', positivos:['Biossegurança','Trabalho em equipe'], negativos:[] },
      ok:{ titulo:'Pula uma etapa', texto:'Escalar direto sem diálogo pode corroer confiança entre pares.', consequencia:'Clima ruim.', positivos:['Busca autoridade'], negativos:['Falta diálogo'] },
      bad:{ titulo:'Erros opostos', texto:'Omissão ou humilhação pública são extremos ruins.', consequencia:'Risco biológico ou dano de equipe.', positivos:[], negativos:['Risco','Dano de equipe'] }
    }
  }]
},

{
  id:'ES-06', area:'Estoque', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Autoclave com ciclo reprovado',
  contexto:'Indicador biológico semanal deu resultado positivo (falha de esterilização). Instrumentais dessa semana já foram usados em alguns pacientes.',
  personagem:{ emoji:'🔥', nome:'Controle de esterilização', detalhe:'Falha confirmada por teste biológico.' },
  passos:[{
    fase:'Gestão de evento adverso',
    pergunta:'Conduta correta?',
    opcoes:[
      { texto:'Interditar a autoclave, reprocessar todos os materiais, identificar pacientes atendidos com material do ciclo suspeito, acionar manutenção, registrar no livro de controle e comunicar a direção técnica.', qualidade:'good', pontos:10, comps:[7,10,10,10,10,10,7,10] },
      { texto:'Repetir o ciclo e seguir usando.', qualidade:'bad', pontos:1, comps:[1,1,1,2,1,1,1,1] },
      { texto:'Esperar o teste da próxima semana para ter "certeza".', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
      { texto:'Ignorar o teste, confiando no cheiro do material.', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Controle de infecção', texto:'Falha biológica é evento crítico: interdita, reprocessa, comunica e registra.', consequencia:'Mitigação de risco, cumprimento de NR-32/RDC.', positivos:['Biossegurança','Transparência','Controle'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Negligência', texto:'Ignorar um indicador biológico é falha grave.', consequencia:'Infecções cruzadas, processo sanitário.', positivos:[], negativos:['Risco biológico','Risco legal'] }
    }
  }]
},

{
  id:'ES-07', area:'Estoque', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'Pedido urgente fora da rotina de compras',
  contexto:'Dentista chega pedindo uma broca específica que não está na padronização, "para amanhã". Fornecedor habitual não entrega.',
  personagem:{ emoji:'⚡', nome:'Dentista urgente', detalhe:'Procedimento agendado; caso real.' },
  passos:[{
    fase:'Compra não padronizada',
    pergunta:'Como agir?',
    opcoes:[
      { texto:'Registrar justificativa clínica, validar com a coordenação, pedir orçamento a fornecedor homologado e atualizar a padronização se fizer sentido.', qualidade:'good', pontos:10, comps:[7,10,10,7,6,10,7,10] },
      { texto:'Comprar em qualquer lugar sem nota fiscal para ganhar tempo.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Negar o pedido sem alternativas, "não está na lista".', qualidade:'bad', pontos:2, comps:[2,2,2,4,3,2,2,2] },
      { texto:'Pegar de outra clínica, emprestado "de boca".', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Compra controlada', texto:'Exceções bem documentadas viram aprendizagem organizacional.', consequencia:'Procedimento feito dentro de compliance.', positivos:['Conformidade','Colaboração'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Fora do processo', texto:'Compras sem nota ou empréstimos informais são risco fiscal e regulatório.', consequencia:'Compliance comprometido.', positivos:[], negativos:['Risco fiscal','Risco regulatório'] }
    }
  }]
},

{
  id:'ES-08', area:'Estoque', complexidade:2, tipo:'Exceção', tempo:8,
  titulo:'EPI em falta para procedimento',
  contexto:'Caixa de luvas nitrílicas estéreis G acabou e há cirurgia em 30 minutos.',
  personagem:{ emoji:'🧤', nome:'EPI', detalhe:'Tamanho correto inexistente no estoque hoje.' },
  passos:[{
    fase:'Biossegurança e alternativas',
    pergunta:'Conduta correta?',
    opcoes:[
      { texto:'Avisar imediatamente o dentista, checar se há alternativas válidas (outro tamanho próximo, outra marca homologada) e acionar compras de emergência; adiar se não houver solução segura.', qualidade:'good', pontos:10, comps:[7,10,10,8,10,10,6,10] },
      { texto:'Usar luvas estéreis de outro tamanho incorreto que podem rasgar.', qualidade:'bad', pontos:1, comps:[1,1,1,2,1,1,1,1] },
      { texto:'Usar luvas de procedimento (não estéril) no lugar.', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] },
      { texto:'Pedir emprestado à clínica vizinha, sem checar validade/lote.', qualidade:'bad', pontos:2, comps:[2,2,2,3,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Biossegurança inegociável', texto:'EPI adequado é pré-condição de procedimento. Adiar é melhor que arriscar.', consequencia:'Paciente e equipe protegidos.', positivos:['Biossegurança','Decisão','Comunicação'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Risco inaceitável', texto:'Substituições inadequadas violam biossegurança.', consequencia:'Infecção, processo.', positivos:[], negativos:['Risco biológico','Falha de controle'] }
    }
  }]
},

{
  id:'ES-09', area:'Estoque', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'Colega pede emprestado material sem registro',
  contexto:'Nova estagiária pergunta se pode pegar uma caixa de seringas carpule "rapidinho" sem dar baixa, pois vai repor amanhã.',
  personagem:{ emoji:'🎓', nome:'Estagiária', detalhe:'Boa intenção; cultura de controle ainda frágil.' },
  passos:[{
    fase:'Formação do controle',
    pergunta:'Como orientar?',
    opcoes:[
      { texto:'Explicar que toda retirada passa pelo registro, mostrar o formulário/sistema, apoiar no preenchimento e reforçar o porquê (rastreabilidade).', qualidade:'good', pontos:10, comps:[9,9,9,8,7,10,7,10] },
      { texto:'Deixar passar só dessa vez "para não criar conflito".', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Negar secamente sem explicar.', qualidade:'ok', pontos:4, comps:[3,4,4,4,5,4,4,5] },
      { texto:'Reportar direto ao gerente antes de qualquer diálogo.', qualidade:'ok', pontos:5, comps:[4,5,5,5,5,4,5,5] }
    ],
    feedbacks:{
      good:{ titulo:'Formar, não punir', texto:'A orientação fortalece a cultura e evita reincidência.', consequencia:'Estagiária aprende e equipe ganha.', positivos:['Formação','Cultura','Empatia'], negativos:[] },
      ok:{ titulo:'Rigor sem didática', texto:'Negar seco ou escalar logo perde oportunidade formativa.', consequencia:'Clima ruim, reincidência.', positivos:['Mantém processo'], negativos:['Falta didática'] },
      bad:{ titulo:'Abre precedente', texto:'Deixar passar corrói o controle e a responsabilidade da colega.', consequencia:'Efeito cascata em outras situações.', positivos:[], negativos:['Precedente ruim','Quebra de controle'] }
    }
  }]
},

{
  id:'ES-10', area:'Estoque', complexidade:2, tipo:'Normal', tempo:10,
  titulo:'Nova padronização contestada por dentistas',
  contexto:'Coordenação padronizou marca X de resina. Dois dentistas reclamam que preferem marca Y, com histórico clínico melhor para eles.',
  personagem:{ emoji:'🗂️', nome:'Padronização', detalhe:'Decisão recente; compra coletiva gerou economia.' },
  passos:[{
    fase:'Mediação técnica',
    pergunta:'Qual sua postura?',
    opcoes:[
      { texto:'Coletar feedback clínico por escrito, levar à coordenação com dados de uso e satisfação e propor revisão com critérios objetivos.', qualidade:'good', pontos:10, comps:[8,10,9,8,6,10,9,10] },
      { texto:'Comprar das duas marcas por fora para agradar a todos.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Dizer aos dentistas que "ordem é ordem" sem acolher a preocupação.', qualidade:'bad', pontos:3, comps:[3,3,3,4,4,3,3,3] },
      { texto:'Ignorar, aguardar o problema "se resolver".', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Ponte técnica', texto:'O TSB pode ser elo entre clínica e gestão, com dados — não opiniões.', consequencia:'Processo revisado com base em evidências.', positivos:['Mediação','Dados','Equipe'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Falhas de mediação', texto:'Comprar por fora fere processo; ignorar desgasta clínica; "ordem é ordem" perde a chance de melhorar.', consequencia:'Conflito persistente.', positivos:[], negativos:['Conflito','Processo frágil'] }
    }
  }]
},

/* ============================================================
   ÁREA 5 — FINANCEIRO
   ============================================================ */

{
  id:'FI-01', area:'Financeiro', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Paciente contesta valor do orçamento',
  contexto:'Paciente recebe orçamento de 4 sessões (R$ 2.400) e reclama que "em outro lugar é metade". Está elevando o tom na recepção.',
  personagem:{ emoji:'💵', nome:'Cláudia, 46', detalhe:'Primeira vez na clínica; comparou por telefone.' },
  passos:[{
    fase:'Mediação financeira',
    pergunta:'Como responder?',
    opcoes:[
      { texto:'Abaixar o tom, explicar o escopo do orçamento (materiais, profissional, garantia), oferecer parcelamento/reavaliação clínica e, se quiser, uma segunda conversa com o dentista.', qualidade:'good', pontos:10, comps:[9,9,8,7,5,8,10,10] },
      { texto:'Conceder desconto sem autorização para "fechar logo".', qualidade:'bad', pontos:2, comps:[2,3,3,3,3,2,2,2] },
      { texto:'Subir o tom defendendo o preço.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Dizer para procurar o lugar mais barato, então.', qualidade:'ok', pontos:4, comps:[4,3,4,4,4,3,3,4] }
    ],
    feedbacks:{
      good:{ titulo:'Valor explicado', texto:'Escopo claro, parcelamento e abertura para diálogo desarmam conflito e preservam o vínculo.', consequencia:'Paciente pondera; frequentemente aceita.', positivos:['Transparência','Empatia','Profissionalismo'], negativos:[] },
      ok:{ titulo:'Conflito aberto', texto:'Afrontar o paciente perde cliente e imagem.', consequencia:'Reclamações públicas.', positivos:['Defende posição'], negativos:['Falta mediação'] },
      bad:{ titulo:'Fora de alçada', texto:'Conceder desconto sem autorização fere processos financeiros.', consequencia:'Prejuízo e conflito interno.', positivos:[], negativos:['Fora de processo','Risco financeiro'] }
    }
  }]
},

{
  id:'FI-02', area:'Financeiro', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'Paciente esqueceu cartão e precisa pagar',
  contexto:'Procedimento finalizado. Paciente diz que esqueceu o cartão em casa e só tem PIX limitado no dia.',
  personagem:{ emoji:'💳', nome:'Rafael, 31', detalhe:'Reputação boa, frequentador antigo.' },
  passos:[{
    fase:'Fluxo de cobrança',
    pergunta:'Como proceder?',
    opcoes:[
      { texto:'Oferecer alternativas (parte agora via PIX até o limite, restante via boleto/link de pagamento com prazo curto), registrar tudo e confirmar com a coordenação.', qualidade:'good', pontos:10, comps:[8,9,9,7,5,9,7,10] },
      { texto:'Liberar sem pagar nada e "confiar que ele volta".', qualidade:'bad', pontos:2, comps:[3,2,2,3,3,2,2,2] },
      { texto:'Reter o paciente até conseguir pagar tudo.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Cobrar juros "abusivos" por parcelamento na hora.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Solução estruturada', texto:'Cobrança em várias modalidades, com registro, protege clínica e vínculo.', consequencia:'Débito quitado no prazo.', positivos:['Processo','Empatia','Transparência'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Falhas de postura', texto:'Reter paciente é constrangimento; liberar sem registro gera inadimplência; juros abusivos violam CDC.', consequencia:'Prejuízo ou processo.', positivos:[], negativos:['Risco legal','Risco financeiro'] }
    }
  }]
},

{
  id:'FI-03', area:'Financeiro', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Convênio nega autorização de procedimento',
  contexto:'Paciente esperou 7 dias por autorização que acabou sendo negada. Procedimento clínico necessário.',
  personagem:{ emoji:'🏥', nome:'Convênio', detalhe:'Negativa sem detalhamento.' },
  passos:[{
    fase:'Apoio ao paciente',
    pergunta:'Próximo passo?',
    opcoes:[
      { texto:'Explicar a negativa, apoiar com solicitação de recurso via operadora, oferecer orçamento particular como alternativa e documentar toda a tramitação.', qualidade:'good', pontos:10, comps:[9,10,9,7,5,9,8,10] },
      { texto:'Culpar o convênio de forma pública e destemperada.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,1,1,2] },
      { texto:'Dizer que não há o que fazer, é "política do plano".', qualidade:'bad', pontos:3, comps:[3,3,3,4,4,3,3,3] },
      { texto:'Oferecer pagar particular e depois reembolsar por dentro "sem nota".', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Defesa do paciente', texto:'Recurso + alternativa particular transparente mostram postura profissional.', consequencia:'Paciente acessa tratamento ou recurso.', positivos:['Transparência','Empatia','Processo'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Ética comprometida', texto:'Esquemas "por fora" violam CDC, Receita e o conselho profissional.', consequencia:'Risco legal e fiscal.', positivos:[], negativos:['Ilegalidade','Risco grave'] }
    }
  }]
},

{
  id:'FI-04', area:'Financeiro', complexidade:2, tipo:'Normal', tempo:8,
  titulo:'Paciente pede desconto por pagar à vista',
  contexto:'Paciente pede 15% de desconto à vista. A tabela permite até 5% automático; mais depende da coordenação.',
  personagem:{ emoji:'💼', nome:'Ivo, 42', detalhe:'Negociador; insistente mas educado.' },
  passos:[{
    fase:'Negociação dentro da política',
    pergunta:'Conduta correta?',
    opcoes:[
      { texto:'Aplicar o desconto automático e levar o restante à coordenação, retornando com a resposta formal.', qualidade:'good', pontos:10, comps:[8,9,9,7,5,9,9,10] },
      { texto:'Dar os 15% "em nome da clínica" para garantir o negócio.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Negar sem explicar as regras.', qualidade:'ok', pontos:4, comps:[4,4,4,4,4,4,4,5] },
      { texto:'Dar os 15% sem registro para "não aparecer".', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Escalonamento correto', texto:'Respeitar alçadas e voltar com resposta formal constrói confiança.', consequencia:'Paciente informado, política respeitada.', positivos:['Alçada','Transparência'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Riscos financeiros', texto:'Conceder fora de alçada ou sem registro fere controle interno.', consequencia:'Ação disciplinar, prejuízo.', positivos:[], negativos:['Fora de alçada','Falha de controle'] }
    }
  }]
},

{
  id:'FI-05', area:'Financeiro', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'Paciente pede nota fiscal em outro nome',
  contexto:'Paciente fez o procedimento, mas quer a nota fiscal emitida no CPF da empresa do filho.',
  personagem:{ emoji:'🧾', nome:'Dona Maria, 65', detalhe:'Quer usar como benefício fiscal.' },
  passos:[{
    fase:'Compliance tributário',
    pergunta:'Resposta correta?',
    opcoes:[
      { texto:'Explicar que a nota precisa sair em nome de quem efetivamente pagou pelo serviço ou do paciente; orientar sobre o caminho legal (reembolso via convênio/pessoa jurídica, conforme regra fiscal).', qualidade:'good', pontos:10, comps:[9,9,9,8,5,8,8,10] },
      { texto:'Emitir como ela pediu para "agradar a cliente".', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Negar sem explicação, "não dá".', qualidade:'ok', pontos:4, comps:[4,4,4,4,4,4,4,5] },
      { texto:'Propor uma nota "sem valor fiscal" como recibo extra.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Compliance com humanidade', texto:'Explicar a regra e mostrar caminhos legais respeita a paciente e a Receita.', consequencia:'Nota correta, ética preservada.', positivos:['Compliance','Educação'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Fraude fiscal', texto:'Emitir em nome errado é crime contra a ordem tributária.', consequencia:'Multa, processo.', positivos:[], negativos:['Fraude','Risco fiscal'] }
    }
  }]
},

{
  id:'FI-06', area:'Financeiro', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Inadimplência de paciente antigo',
  contexto:'Paciente com 3 parcelas atrasadas volta para outra consulta. No cadastro, aparece débito pendente.',
  personagem:{ emoji:'📉', nome:'Paulo, 50', detalhe:'Desempregado desde abril.' },
  passos:[{
    fase:'Abordagem sensível',
    pergunta:'Como proceder?',
    opcoes:[
      { texto:'Chamar em particular, perguntar a situação com respeito, oferecer renegociação via coordenação e, se aceito, liberar a consulta com acordo assinado.', qualidade:'good', pontos:10, comps:[10,9,9,7,5,9,9,10] },
      { texto:'Recusar o atendimento na recepção em voz alta.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Liberar sem qualquer conversa para evitar desconforto.', qualidade:'bad', pontos:2, comps:[3,2,2,3,3,2,2,2] },
      { texto:'Sugerir que ele "procure outra clínica" enquanto estiver devendo.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Cobrança digna', texto:'Privacidade, empatia e acordo formal preservam o vínculo e o caixa.', consequencia:'Possível renegociação e tratamento adequado.', positivos:['Privacidade','Empatia','Processo'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Constrangimento', texto:'Expor publicamente é violação de privacidade e corrói imagem.', consequencia:'Reclamação, dano.', positivos:[], negativos:['Violação de privacidade','Risco legal'] }
    }
  }]
},

{
  id:'FI-07', area:'Financeiro', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'Troco errado dado ao paciente',
  contexto:'Você percebe que devolveu R$ 50 a mais de troco para um paciente que já saiu. Ele é cliente frequente.',
  personagem:{ emoji:'💴', nome:'Consciência', detalhe:'Erro percebido com delay.' },
  passos:[{
    fase:'Correção honesta',
    pergunta:'O que fazer?',
    opcoes:[
      { texto:'Entrar em contato com o paciente com honestidade, explicar o erro, pedir devolução ou descontar na próxima consulta com combinado claro; comunicar a coordenação.', qualidade:'good', pontos:10, comps:[9,9,9,7,5,9,8,10] },
      { texto:'Cobrir do seu próprio bolso sem comunicar ninguém.', qualidade:'bad', pontos:3, comps:[3,3,3,4,4,3,3,3] },
      { texto:'Esperar ele voltar, sem avisar, e cobrar na próxima.', qualidade:'ok', pontos:5, comps:[4,4,4,5,5,4,4,6] },
      { texto:'Ignorar — "é só R$ 50".', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Honestidade e controle', texto:'Transparência interna e externa evita desconfiança no futuro.', consequencia:'Erro corrigido, confiança preservada.', positivos:['Honestidade','Controle'], negativos:[] },
      ok:{ titulo:'Passivo', texto:'Aguardar sem avisar abre espaço a erro ou esquecimento.', consequencia:'Risco de conflito na cobrança.', positivos:['Intenção de ajustar'], negativos:['Falta comunicação'] },
      bad:{ titulo:'Ruim', texto:'Absorver sem comunicar ou ignorar criam distorções nos registros.', consequencia:'Quebra de controle interno.', positivos:[], negativos:['Falha de controle','Falta transparência'] }
    }
  }]
},

{
  id:'FI-08', area:'Financeiro', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Suspeita de "gato" em cartão de crédito',
  contexto:'Na segunda tentativa, o cartão de um paciente recusou e ele insiste em tentar outros cartões com nomes diferentes.',
  personagem:{ emoji:'🚩', nome:'Cliente com comportamento suspeito', detalhe:'Antenas levantadas.' },
  passos:[{
    fase:'Controle anti-fraude',
    pergunta:'Conduta correta?',
    opcoes:[
      { texto:'Interromper tentativas, solicitar documento com foto, confirmar titularidade, acionar a coordenação e, se persistir suspeita, seguir protocolo (não concluir a venda).', qualidade:'good', pontos:10, comps:[7,10,10,8,7,9,8,10] },
      { texto:'Continuar tentando cartões até um passar.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
      { texto:'Aceitar boleto a ser pago depois sem confirmação.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Acusá-lo publicamente de fraude.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Proteção com discrição', texto:'Protocolo anti-fraude começa por interromper e verificar, sem acusações.', consequencia:'Risco mitigado, sem constrangimento desnecessário.', positivos:['Controle','Discrição'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Extremos', texto:'Acusar sem evidência ou insistir sem critério ferem ética e segurança.', consequencia:'Risco legal ou prejuízo.', positivos:[], negativos:['Difamação','Fraude'] }
    }
  }]
},

/* ============================================================
   ÁREA 6 — RELACIONAMENTO E EQUIPE
   ============================================================ */

{
  id:'RE-01', area:'Relacionamento', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Conflito entre TSB e ASB na equipe',
  contexto:'Você percebe tensão crescente entre duas auxiliares. Paciente na cadeira começa a perceber.',
  personagem:{ emoji:'⚡', nome:'Conflito interno', detalhe:'Dois estilos diferentes, acúmulo de pequenas trocas de tom.' },
  passos:[{
    fase:'Gestão de conflito em público',
    pergunta:'Conduta imediata?',
    opcoes:[
      { texto:'Concluir o atendimento em clima profissional, conversar depois em particular para mediar, reforçar regras de respeito e, se necessário, levar à coordenação.', qualidade:'good', pontos:10, comps:[10,9,9,6,5,10,10,10] },
      { texto:'Pedir alto para elas pararem de discutir na frente do paciente.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Ignorar, "cada um tem seu jeito".', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Escolher um lado para apoiar.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Mediação profissional', texto:'Primeiro a segurança do paciente; depois, o diálogo. Regra simples e eficaz.', consequencia:'Paciente atendido sem dano, equipe com plano de ajuste.', positivos:['Mediação','Equipe','Profissionalismo'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Erros opostos', texto:'Expor o conflito ou tomar partido piora o ambiente.', consequencia:'Clima tóxico, possível saída.', positivos:[], negativos:['Exposição','Parcialidade'] }
    }
  }]
},

{
  id:'RE-02', area:'Relacionamento', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Colega faz piada inadequada com paciente',
  contexto:'Durante a profilaxia, outra TSB faz piada de peso sobre o paciente, que ri sem graça.',
  personagem:{ emoji:'😬', nome:'Colega', detalhe:'Tem bom desempenho técnico mas pouca consciência.' },
  passos:[{
    fase:'Correção entre pares',
    pergunta:'Como agir?',
    opcoes:[
      { texto:'Cortar o tema com suavidade no momento, conversar com a colega em particular depois e, se reincidente, levar à coordenação.', qualidade:'good', pontos:10, comps:[9,9,9,7,5,10,10,10] },
      { texto:'Rir junto para não parecer chato.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Chamar atenção publicamente, constrangendo a colega.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Reportar direto sem qualquer diálogo.', qualidade:'ok', pontos:5, comps:[4,5,5,5,5,4,5,5] }
    ],
    feedbacks:{
      good:{ titulo:'Conduta exemplar', texto:'Preserva paciente e colega; gera aprendizado real.', consequencia:'Paciente respeitado, colega orientada.', positivos:['Respeito','Formação'], negativos:[] },
      ok:{ titulo:'Pula conversa', texto:'Escalar sem tentativa anterior perde oportunidade formativa.', consequencia:'Clima piora.', positivos:['Usa canal certo'], negativos:['Falta diálogo'] },
      bad:{ titulo:'Cumplicidade ou exposição', texto:'Rir ou constranger na hora ferem o paciente e o clima.', consequencia:'Dano moral ao paciente e à equipe.', positivos:[], negativos:['Risco moral','Dano de vínculo'] }
    }
  }]
},

{
  id:'RE-03', area:'Relacionamento', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'Feedback negativo do dentista em público',
  contexto:'O dentista corrige um passo seu em voz alta na frente do paciente. Você fica desconfortável.',
  personagem:{ emoji:'👂', nome:'Aprendizado sob crítica', detalhe:'Relação recente, ainda sendo ajustada.' },
  passos:[{
    fase:'Gerenciar a autoestima profissional',
    pergunta:'Qual melhor resposta?',
    opcoes:[
      { texto:'Agradecer a correção, executar o ajuste e, depois do paciente sair, pedir uma conversa privada para alinhar comunicação.', qualidade:'good', pontos:10, comps:[10,8,9,7,5,10,9,10] },
      { texto:'Responder no mesmo tom, explicando por que fez daquele jeito.', qualidade:'bad', pontos:3, comps:[3,4,3,4,4,3,3,3] },
      { texto:'Ficar calada e se fechar pelo resto do dia.', qualidade:'ok', pontos:4, comps:[4,3,3,4,4,4,4,5] },
      { texto:'Sair da sala chateado(a).', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Maturidade profissional', texto:'Priorizar o paciente e buscar feedback estruturado depois é marca de quem cresce.', consequencia:'Aprende e melhora a dinâmica.', positivos:['Maturidade','Comunicação'], negativos:[] },
      ok:{ titulo:'Fechamento', texto:'Guardar mágoa sem dialogar acumula ruído.', consequencia:'Clima piora com o tempo.', positivos:['Mantém o foco no paciente'], negativos:['Falta de diálogo'] },
      bad:{ titulo:'Escalada', texto:'Embate ao vivo ou saída dramática expõem todos.', consequencia:'Risco de constrangimento e desgaste.', positivos:[], negativos:['Exposição','Falha profissional'] }
    }
  }]
},

{
  id:'RE-04', area:'Relacionamento', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Paciente assedia verbalmente a equipe',
  contexto:'Paciente frequente faz comentários sexualizados à colega toda vez que vem. Ela pediu sua ajuda.',
  personagem:{ emoji:'🚫', nome:'Paciente assediador', detalhe:'Reincidente; equipe já deu dicas sutis.' },
  passos:[{
    fase:'Proteção da equipe',
    pergunta:'Como responder?',
    opcoes:[
      { texto:'Registrar os episódios, apoiar a colega, acionar coordenação para formalizar advertência ao paciente e, se persistir, rescindir o vínculo seguindo protocolo.', qualidade:'good', pontos:10, comps:[9,9,9,7,6,10,10,10] },
      { texto:'Pedir para a colega "ignorar" e seguir em frente.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Confrontar o paciente na recepção em voz alta.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Trocar a escala sem registrar nada.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Cultura de cuidado', texto:'Proteger a equipe é obrigação institucional; registro embasa decisões.', consequencia:'Paciente advertido ou desligado dentro da lei.', positivos:['Proteção','Registro','Equipe'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Falhas institucionais', texto:'Minimizar ou trocar escala sem registro perpetua o assédio.', consequencia:'Dano moral, risco trabalhista.', positivos:[], negativos:['Dano moral','Omissão'] }
    }
  }]
},

{
  id:'RE-05', area:'Relacionamento', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'Paciente demonstra gratidão excessiva (presente)',
  contexto:'Paciente chega com uma caixa de presentes caros para a equipe após cirurgia bem-sucedida.',
  personagem:{ emoji:'🎁', nome:'Paciente grato', detalhe:'Gesto genuíno, mas valor alto.' },
  passos:[{
    fase:'Ética profissional',
    pergunta:'Melhor resposta?',
    opcoes:[
      { texto:'Agradecer com sinceridade, explicar que a política da clínica é não aceitar presentes de valor, sugerir gesto simbólico alternativo (indicação, review) e comunicar a coordenação.', qualidade:'good', pontos:10, comps:[10,8,9,7,5,9,8,10] },
      { texto:'Aceitar tudo imediatamente sem registrar.', qualidade:'bad', pontos:3, comps:[3,3,3,4,3,3,3,3] },
      { texto:'Recusar com rigidez, sem agradecer.', qualidade:'bad', pontos:3, comps:[3,3,3,3,3,3,3,3] },
      { texto:'Aceitar e dividir sem informar a coordenação.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Postura ética', texto:'Política institucional previne constrangimentos e favorecimentos.', consequencia:'Paciente mantém vínculo; equipe preservada.', positivos:['Ética','Transparência'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Zona cinzenta', texto:'Aceitar sem registrar gera assimetria e potencial conflito.', consequencia:'Suspeita interna, risco ético.', positivos:[], negativos:['Conflito de interesse','Falta de transparência'] }
    }
  }]
},

{
  id:'RE-06', area:'Relacionamento', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Colega chega à clínica visivelmente abatido',
  contexto:'Uma auxiliar chega chorando na recepção, dizendo que teve "notícia ruim em casa". Primeiro paciente em 10 minutos.',
  personagem:{ emoji:'💔', nome:'Colega em crise', detalhe:'Pessoa reservada, nunca pediu folga.' },
  passos:[{
    fase:'Cuidado humano',
    pergunta:'Conduta ideal?',
    opcoes:[
      { texto:'Oferecer um espaço reservado, água, escutar sem julgar, acionar a coordenação para redistribuir o atendimento e deixar a decisão de ficar/ir com ela.', qualidade:'good', pontos:10, comps:[10,8,8,6,5,10,8,10] },
      { texto:'Dizer que "aqui não é lugar pra chorar" e pedir que se recomponha.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
      { texto:'Ignorar e seguir com o atendimento.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Questionar publicamente o que aconteceu.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Humanidade em primeiro lugar', texto:'Equipes que cuidam dos seus sustentam atendimento melhor aos pacientes.', consequencia:'Colega acolhida, serviço redistribuído.', positivos:['Acolhimento','Equipe'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Dureza desnecessária', texto:'Rigidez quebra confiança e vínculo.', consequencia:'Baixa moral, rotatividade.', positivos:[], negativos:['Falta empatia','Dano de equipe'] }
    }
  }]
},

/* ============================================================
   ÁREA 7 — SAÚDE E SEGURANÇA
   ============================================================ */

{
  id:'SS-01', area:'Saúde e Segurança', complexidade:3, tipo:'Emergência', tempo:15,
  titulo:'Emergência clínica: crise hipertensiva',
  contexto:'Paciente na cadeira fica muito vermelho, relata cefaleia intensa. PA aferida: 190x120.',
  personagem:{ emoji:'🩺', nome:'Rogério, 59', detalhe:'Hipertenso, parou medicação há dois dias.' },
  passos:[{
    fase:'Protocolo de emergência',
    pergunta:'Conduta imediata?',
    opcoes:[
      { texto:'Interromper o procedimento, reclinar, manter vias aéreas livres, monitorar PA/pulso, acionar o profissional responsável e contatar o SAMU se houver sinais de urgência hipertensiva.', qualidade:'good', pontos:10, comps:[8,10,10,10,10,10,7,10] },
      { texto:'Continuar o procedimento "com calma, ele aguenta".', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] },
      { texto:'Dar água com açúcar e água gelada para "aliviar".', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
      { texto:'Mandar o paciente para o PS sozinho, de Uber.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'BLS/ACLS como preparo', texto:'TSB treinado em primeiros socorros é um ativo da clínica.', consequencia:'Paciente estabilizado e encaminhado com suporte.', positivos:['Protocolo','Equipe','Decisão'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Desastre', texto:'Mandar sozinho ou ignorar pode ser fatal.', consequencia:'Risco de morte, responsabilização.', positivos:[], negativos:['Risco grave'] }
    }
  }]
},

{
  id:'SS-02', area:'Saúde e Segurança', complexidade:3, tipo:'Emergência', tempo:15,
  titulo:'Engasgamento durante procedimento',
  contexto:'Gaze posicionada no fundo da boca se solta e o paciente engasga, ficando vermelho e tossindo sem parar.',
  personagem:{ emoji:'😣', nome:'Dona Teresa, 66', detalhe:'Próteses antigas, respiração oral habitual.' },
  passos:[{
    fase:'Desobstrução de via aérea',
    pergunta:'Conduta imediata?',
    opcoes:[
      { texto:'Incentivar a tosse, posicionar corretamente, auxiliar o dentista a remover a gaze com pinça sob visão direta e aplicar Heimlich se a obstrução for total.', qualidade:'good', pontos:10, comps:[8,10,10,10,10,10,7,10] },
      { texto:'Dar tapas fortes nas costas sem avaliar o nível da obstrução.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Apenas observar, "ela resolve tossindo".', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Esperar passar e seguir o procedimento.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Via aérea é prioridade 1', texto:'Avaliar e intervir conforme o tipo de obstrução é protocolo BLS.', consequencia:'Paciente estabilizado.', positivos:['Primeiros socorros','Equipe'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Risco de morte', texto:'Tapas indiscriminados e passividade matam.', consequencia:'Evento adverso grave.', positivos:[], negativos:['Risco de morte'] }
    }
  }]
},

{
  id:'SS-03', area:'Saúde e Segurança', complexidade:2, tipo:'Normal', tempo:8,
  titulo:'Check-list diário incompleto',
  contexto:'No início do dia, você percebe que a estação de trabalho não tem soro fisiológico para irrigação e o sugador parece com vazamento.',
  personagem:{ emoji:'✅', nome:'Check-list matinal', detalhe:'Protocolo fundamental da TSB.' },
  passos:[{
    fase:'Prevenção operacional',
    pergunta:'Conduta ideal?',
    opcoes:[
      { texto:'Reabastecer, sinalizar o sugador para manutenção, registrar no check-list, informar o dentista e só iniciar atendimento com os itens críticos ok.', qualidade:'good', pontos:10, comps:[7,10,10,9,9,10,6,10] },
      { texto:'Iniciar o atendimento e resolver "no decorrer do dia".', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
      { texto:'Pedir emprestado ao consultório ao lado sem avisar.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Registrar o sugador como ok mesmo com vazamento.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Prevenção sobre remediação', texto:'Check-list bem feito evita eventos adversos e atrasos.', consequencia:'Dia flui, risco mitigado.', positivos:['Prevenção','Conformidade'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Risco evitável', texto:'Iniciar com falhas ou registrar falsamente é anti-segurança.', consequencia:'Evento adverso, quebra de confiança.', positivos:[], negativos:['Fraude de registro','Risco operacional'] }
    }
  }]
},

{
  id:'SS-04', area:'Saúde e Segurança', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'EPI insuficiente numa sala',
  contexto:'Você entra na sala sem óculos de proteção; o dentista não nota. Procedimento com spray iminente.',
  personagem:{ emoji:'🥽', nome:'EPI incompleto', detalhe:'Item essencial esquecido.' },
  passos:[{
    fase:'Autocuidado',
    pergunta:'Conduta correta?',
    opcoes:[
      { texto:'Pedir pausa breve, buscar óculos antes de qualquer spray e retomar; registrar o episódio para reforço do check-list.', qualidade:'good', pontos:10, comps:[7,9,9,9,10,9,6,10] },
      { texto:'Seguir mesmo sem óculos, "é rápido".', qualidade:'bad', pontos:1, comps:[1,1,1,2,1,1,1,1] },
      { texto:'Usar a proteção do óculos pessoal do dentista sem avisar.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Pedir o dentista para não ligar o spray.', qualidade:'bad', pontos:3, comps:[3,3,3,4,4,3,3,3] }
    ],
    feedbacks:{
      good:{ titulo:'EPI é inegociável', texto:'Pedir pausa para equipar-se corretamente é profissional.', consequencia:'Procedimento seguro.', positivos:['Biossegurança','Autocuidado'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Exposição ocupacional', texto:'Qualquer atalho aqui é risco biológico direto.', consequencia:'Acidente.', positivos:[], negativos:['Risco biológico'] }
    }
  }]
},

{
  id:'SS-05', area:'Saúde e Segurança', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Vazamento de produto químico',
  contexto:'Frasco de hipoclorito cai e respinga no piso. Paciente idoso está chegando.',
  personagem:{ emoji:'🧴', nome:'Incidente químico', detalhe:'Área social da clínica.' },
  passos:[{
    fase:'Contenção rápida',
    pergunta:'Conduta imediata?',
    opcoes:[
      { texto:'Isolar a área com sinalização, usar EPI para limpeza, ventilar, seguir o MSDS do produto e registrar o evento; comunicar colegas para desvio de fluxo.', qualidade:'good', pontos:10, comps:[7,10,10,8,10,10,6,10] },
      { texto:'Limpar com um pano qualquer sem EPI.', qualidade:'bad', pontos:1, comps:[1,1,1,2,1,1,1,1] },
      { texto:'Misturar com álcool para "neutralizar o cheiro".', qualidade:'bad', pontos:1, comps:[1,1,1,2,1,1,1,1] },
      { texto:'Pedir ao paciente que esperasse em outro local, sem sinalizar.', qualidade:'bad', pontos:3, comps:[3,3,3,3,4,3,3,3] }
    ],
    feedbacks:{
      good:{ titulo:'Resposta química correta', texto:'MSDS, EPI e sinalização seguem a NR-32.', consequencia:'Ninguém exposto, evento documentado.', positivos:['Biossegurança','Conformidade'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Atalhos perigosos', texto:'Misturar químicos sem saber ou limpar sem EPI expõe todos.', consequencia:'Risco químico, acidente.', positivos:[], negativos:['Risco químico'] }
    }
  }]
},

{
  id:'SS-06', area:'Saúde e Segurança', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'Paciente idoso sem acompanhante precisa descer escadas',
  contexto:'Ao fim da consulta, o paciente idoso tem dificuldade para descer as escadas; não há elevador.',
  personagem:{ emoji:'🦯', nome:'Sr. Osvaldo, 81', detalhe:'Joelho operado, andar lento.' },
  passos:[{
    fase:'Prevenção de queda',
    pergunta:'Conduta correta?',
    opcoes:[
      { texto:'Oferecer apoio, descer com ele devagar pelo lado mais seguro, oferecer água e ajudar a chamar transporte; registrar a fragilidade no prontuário para próxima consulta.', qualidade:'good', pontos:10, comps:[10,8,8,7,7,9,7,10] },
      { texto:'Despedir-se na recepção e deixá-lo seguir sozinho.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Pegá-lo no colo rapidamente para agilizar a descida.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
      { texto:'Chamar um colega para descer com ele, deixando recepção vazia.', qualidade:'ok', pontos:6, comps:[6,5,5,5,5,6,5,6] }
    ],
    feedbacks:{
      good:{ titulo:'Cuidado até a saída', texto:'A saída ainda é responsabilidade da clínica.', consequencia:'Sem quedas; vínculo reforçado.', positivos:['Prevenção','Empatia'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Risco de queda', texto:'Abandonar ou forçar o corpo pode ferir gravemente.', consequencia:'Queda, processo.', positivos:[], negativos:['Risco de queda','Risco legal'] }
    }
  }]
},

{
  id:'SS-07', area:'Saúde e Segurança', complexidade:2, tipo:'Exceção', tempo:8,
  titulo:'Ambiente excessivamente quente por ar-condicionado quebrado',
  contexto:'O ar-condicionado da clínica quebrou em dia quente. Paciente idoso começa a suar muito na cadeira.',
  personagem:{ emoji:'🥵', nome:'Sr. João, 76', detalhe:'Cardiopata; hoje tomou café forte.' },
  passos:[{
    fase:'Conforto e segurança térmica',
    pergunta:'Conduta ideal?',
    opcoes:[
      { texto:'Pausar o atendimento, reclinar a cadeira, oferecer água fria, ventilador/ambiente mais fresco, monitorar sinais e, se mantido o desconforto, remarcar.', qualidade:'good', pontos:10, comps:[9,8,9,8,8,9,7,10] },
      { texto:'Continuar normalmente, "é só desconforto".', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
      { texto:'Acelerar o procedimento para "terminar logo".', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Abrir todas as janelas sem considerar biossegurança (aerossóis).', qualidade:'ok', pontos:4, comps:[4,3,3,4,4,3,3,4] }
    ],
    feedbacks:{
      good:{ titulo:'Segurança clínica em ambiente adverso', texto:'Conforto térmico em paciente vulnerável é parte do atendimento.', consequencia:'Risco cardiovascular mitigado.', positivos:['Prevenção','Empatia'], negativos:[] },
      ok:{ titulo:'Parcial', texto:'Ventilar sem avaliar biossegurança resolve o calor mas atrapalha controle de aerossóis.', consequencia:'Risco biológico colateral.', positivos:['Mitiga calor'], negativos:['Falta avaliação biosseg.'] },
      bad:{ titulo:'Risco', texto:'Seguir normalmente com paciente cardíaco suando é risco clínico.', consequencia:'Evento adverso.', positivos:[], negativos:['Risco clínico'] }
    }
  }]
},

{
  id:'SS-08', area:'Saúde e Segurança', complexidade:3, tipo:'Emergência', tempo:15,
  titulo:'Suspeita de AVC em paciente na cadeira',
  contexto:'Durante o atendimento, paciente apresenta desvio de rima labial súbito, fala arrastada e dificuldade para levantar um dos braços.',
  personagem:{ emoji:'🚨', nome:'Dona Lúcia, 68', detalhe:'Hipertensa, diabética.' },
  passos:[{
    fase:'Reconhecimento de AVC (SAMU)',
    pergunta:'O que fazer?',
    opcoes:[
      { texto:'Interromper o procedimento, aplicar o Cincinatti/FAST, acionar imediatamente o SAMU (janela de ouro), manter via aérea livre, monitorar e registrar o horário de início dos sintomas.', qualidade:'good', pontos:10, comps:[8,10,10,10,10,10,7,10] },
      { texto:'Aguardar 30 min "para ver se passa".', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] },
      { texto:'Dar AAS ou remédio qualquer preventivamente.', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] },
      { texto:'Mandar a família buscá-la em um táxi.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Janela de ouro', texto:'Reconhecer AVC e acionar SAMU imediatamente salva tecido cerebral.', consequencia:'Chance real de recuperação.', positivos:['Protocolo','Decisão','Conhecimento'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Perda de tempo vital', texto:'Qualquer atraso diminui chance de recuperação.', consequencia:'Sequelas permanentes.', positivos:[], negativos:['Risco de morte','Sequelas'] }
    }
  }]
},

{
  id:'SS-09', area:'Saúde e Segurança', complexidade:2, tipo:'Normal', tempo:8,
  titulo:'Treinamento de novo colaborador em biossegurança',
  contexto:'Um novo TSB chega e você é responsável por treiná-lo nos protocolos de biossegurança.',
  personagem:{ emoji:'🧑‍🏫', nome:'Novo TSB', detalhe:'Formado recentemente, ansioso para ajudar.' },
  passos:[{
    fase:'Didática e cultura',
    pergunta:'Como conduzir?',
    opcoes:[
      { texto:'Mostrar os protocolos na prática, explicar o porquê de cada passo, demonstrar descarte, lavagem, paramentação e dar feedback contínuo nos primeiros dias.', qualidade:'good', pontos:10, comps:[10,8,8,8,10,10,7,10] },
      { texto:'Passar apenas um PDF e pedir para ler.', qualidade:'ok', pontos:4, comps:[3,4,4,4,5,3,3,4] },
      { texto:'Deixar ele observar por osmose sem instruções.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] },
      { texto:'Reclamar se ele errar, sem explicar previamente.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Formação ativa', texto:'Mostrar, explicar e corrigir em tempo real forma cultura de segurança.', consequencia:'Novo colaborador integrado e seguro.', positivos:['Formação','Cultura'], negativos:[] },
      ok:{ titulo:'Só teoria', texto:'Texto sem prática é insuficiente.', consequencia:'Erros previsíveis.', positivos:['Alguma instrução'], negativos:['Falta prática'] },
      bad:{ titulo:'Falha formativa', texto:'Sem orientação e com reclamação depois, a cultura se corrompe.', consequencia:'Risco aumentado.', positivos:[], negativos:['Risco','Falha formativa'] }
    }
  }]
},

{
  id:'SS-10', area:'Saúde e Segurança', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Incêndio pequeno no copa',
  contexto:'Micro-ondas superaquece um recipiente e começa a sair fumaça. Sala da equipe fica enfumaçada. Clínica cheia.',
  personagem:{ emoji:'🔥', nome:'Princípio de incêndio', detalhe:'Foco localizado e controlável.' },
  passos:[{
    fase:'Emergência não-clínica',
    pergunta:'Conduta?',
    opcoes:[
      { texto:'Desligar o micro-ondas, cortar energia da copa, usar extintor adequado se seguro, acionar brigada/ Bombeiros se necessário e orientar a evacuação dos pacientes pelo caminho seguro.', qualidade:'good', pontos:10, comps:[8,10,10,9,10,10,7,10] },
      { texto:'Jogar água no micro-ondas ainda ligado.', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] },
      { texto:'Fechar a porta da copa e voltar ao atendimento.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
      { texto:'Apenas gritar "fogo!" na recepção sem orientar.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Brigada na prática', texto:'Desligar a energia antes do extintor, orientar evacuação e acionar 193 são passos básicos.', consequencia:'Incidente contido, ninguém ferido.', positivos:['Brigada','Equipe','Decisão'], negativos:[] },
      ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
      bad:{ titulo:'Erros graves', texto:'Água em equipamento energizado ou gritar "fogo" criam risco elétrico e pânico.', consequencia:'Acidentes em série.', positivos:[], negativos:['Risco elétrico','Pânico'] }
    }
  }]
},

/* ============================================================
   EXPANSÃO — lote 2 (mais cenários para completar ~100)
   ============================================================ */

{
  id:'SE-13', area:'Sala de Espera', complexidade:2, tipo:'Exceção', tempo:8,
  titulo:'Paciente chega sem máscara em temporada de gripe',
  contexto:'Pós-surto de gripe, a clínica recolocou uso de máscara na recepção. O paciente chega sem máscara e diz que "não acredita mais nisso".',
  personagem:{ emoji:'😷', nome:'Sr. Marcos, 52', detalhe:'Resistente à regra.' },
  passos:[{ fase:'Política sanitária', pergunta:'Como conduzir?', opcoes:[
    { texto:'Explicar com cordialidade que é política da clínica, oferecer uma máscara descartável gratuita e acompanhar até a cadeira.', qualidade:'good', pontos:10, comps:[10,8,9,8,10,7,9,10] },
    { texto:'Dizer apenas "é a regra" e devolver para casa.', qualidade:'bad', pontos:2, comps:[2,2,3,4,6,2,2,3] },
    { texto:'Aceitar sem máscara para evitar briga.', qualidade:'bad', pontos:1, comps:[2,1,1,2,1,1,1,1] },
    { texto:'Oferecer máscara mas de forma seca.', qualidade:'ok', pontos:5, comps:[4,5,6,5,7,4,5,5] }
  ], feedbacks:{
    good:{ titulo:'Firme e gentil', texto:'Política clara + acolhimento diminui conflito.', consequencia:'Paciente aceita sem ressentimento.', positivos:['Empatia','Biossegurança'], negativos:[] },
    ok:{ titulo:'Parcial', texto:'Oferecer já é bom, mas o tom firma a relação.', consequencia:'Clima morno.', positivos:['Oferece solução'], negativos:['Frio'] },
    bad:{ titulo:'Erro', texto:'Humilhar ou afrouxar a regra prejudica todos.', consequencia:'Quebra de confiança.', positivos:[], negativos:['Risco','Conflito'] }
  }}]
},

{
  id:'SE-14', area:'Sala de Espera', complexidade:1, tipo:'Normal', tempo:5,
  titulo:'Primeira visita — orientar cadastro',
  contexto:'Paciente novo chega 20 minutos antes, é a primeira vez. Não sabe por onde começar.',
  personagem:{ emoji:'🆕', nome:'Sra. Helena, 41', detalhe:'Primeira visita.' },
  passos:[{ fase:'Acolhimento e cadastro', pergunta:'O que fazer?', opcoes:[
    { texto:'Cumprimentar pelo nome, entregar a ficha com caneta, explicar cada campo e ficar disponível para dúvidas.', qualidade:'good', pontos:10, comps:[10,7,8,7,7,8,7,10] },
    { texto:'Entregar a ficha muda e ir fazer outra coisa.', qualidade:'bad', pontos:2, comps:[2,3,3,3,4,2,2,3] },
    { texto:'Preencher você mesmo sem perguntar nada.', qualidade:'bad', pontos:2, comps:[2,2,2,3,4,3,2,3] },
    { texto:'Dizer "se tiver dúvida chama" e sair.', qualidade:'ok', pontos:6, comps:[5,6,6,6,6,5,5,6] }
  ], feedbacks:{
    good:{ titulo:'Acolhimento de verdade', texto:'Presença ativa na primeira visita marca a experiência.', consequencia:'Fidelização.', positivos:['Acolhimento','Profissionalismo'], negativos:[] },
    ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
    bad:{ titulo:'Erro', texto:'Frieza na primeira visita mancha a experiência.', consequencia:'Paciente pode não voltar.', positivos:[], negativos:['Frieza'] }
  }}]
},

{
  id:'AG-09', area:'Agendamento', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Três filhos no mesmo horário',
  contexto:'A mãe liga pedindo para agendar 3 filhos (5, 8 e 12 anos) no mesmo horário para "adiantar". Só há 2 cadeiras pediátricas.',
  personagem:{ emoji:'👨‍👩‍👧‍👦', nome:'Sra. Carla', detalhe:'Agenda cheia, pressa.' },
  passos:[{ fase:'Gestão de agenda', pergunta:'Como conduzir?', opcoes:[
    { texto:'Explicar a limitação, propor dois agendamentos em sequência (duas cadeiras simultâneas + uma na sequência) e confirmar horários.', qualidade:'good', pontos:10, comps:[9,10,10,8,7,9,9,10] },
    { texto:'Aceitar e torcer para dar certo.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,3] },
    { texto:'Dizer apenas "não dá".', qualidade:'bad', pontos:2, comps:[2,3,3,3,3,2,2,3] },
    { texto:'Marcar um e dizer que depois vê os outros.', qualidade:'ok', pontos:5, comps:[4,5,5,5,5,4,5,5] }
  ], feedbacks:{
    good:{ titulo:'Solução negociada', texto:'Explicar limitação + oferecer plano B respeita mãe e equipe.', consequencia:'Família satisfeita.', positivos:['Resolução','Comunicação'], negativos:[] },
    ok:{ titulo:'Parcial', texto:'Metade da solução é melhor que recusa, mas falta cuidado.', consequencia:'Pode gerar nova ligação.', positivos:['Alguma solução'], negativos:['Incompleto'] },
    bad:{ titulo:'Erro', texto:'Superlotar a agenda quebra a qualidade.', consequencia:'Atraso em cascata.', positivos:[], negativos:['Prejudica equipe'] }
  }}]
},

{
  id:'AG-10', area:'Agendamento', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'Confirmação de consulta por WhatsApp',
  contexto:'Rotina de véspera: confirmar por WhatsApp os 18 pacientes agendados para amanhã.',
  personagem:{ emoji:'📱', nome:'Rotina de confirmação', detalhe:'18 pacientes.' },
  passos:[{ fase:'Comunicação em massa', pergunta:'Como fazer?', opcoes:[
    { texto:'Enviar mensagem personalizada com nome, data, horário e pedir confirmação; registrar quem confirmou e quem não.', qualidade:'good', pontos:10, comps:[9,8,8,7,6,7,7,10] },
    { texto:'Mandar mensagem genérica em lote.', qualidade:'ok', pontos:5, comps:[5,5,5,5,5,5,5,5] },
    { texto:'Não confirmar (já estão na agenda).', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,2] },
    { texto:'Ligar só para quem tem maior procedimento.', qualidade:'ok', pontos:5, comps:[5,6,6,5,5,5,5,6] }
  ], feedbacks:{
    good:{ titulo:'Confirmação ativa', texto:'Mensagem personalizada + registro reduz faltas.', consequencia:'Agenda otimizada.', positivos:['Organização','Comunicação'], negativos:[] },
    ok:{ titulo:'Parcial', texto:'Genérico funciona mas engaja menos.', consequencia:'Algumas faltas.', positivos:['Ok'], negativos:['Frio'] },
    bad:{ titulo:'Erro', texto:'Sem confirmação → faltas frequentes.', consequencia:'Buracos na agenda.', positivos:[], negativos:['Falta'] }
  }}]
},

{
  id:'AG-11', area:'Agendamento', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Pedido de encaixe social',
  contexto:'Paciente recorrente liga pedindo um "encaixe social" porque está sem plano e precisa cuidar de um canal. A política prevê descontos em casos específicos, mas com aprovação.',
  personagem:{ emoji:'🤝', nome:'Sr. Joaquim', detalhe:'Situação financeira difícil.' },
  passos:[{ fase:'Política de acesso', pergunta:'Como proceder?', opcoes:[
    { texto:'Escutar, registrar a situação, oferecer um horário condicional e levar o pedido ao dentista/coordenação para avaliar desconto.', qualidade:'good', pontos:10, comps:[10,9,8,7,6,9,9,10] },
    { texto:'Aprovar desconto por conta própria.', qualidade:'bad', pontos:2, comps:[4,3,2,3,3,2,2,3] },
    { texto:'Dizer que sem pagar não tem jeito.', qualidade:'bad', pontos:1, comps:[2,2,2,3,3,1,1,2] },
    { texto:'Encaminhar sem passar pelo dentista.', qualidade:'ok', pontos:5, comps:[5,5,5,5,5,5,4,5] }
  ], feedbacks:{
    good:{ titulo:'Acolher com protocolo', texto:'Acolher + encaminhar para decisão respeita o paciente e a política.', consequencia:'Decisão adequada pela coordenação.', positivos:['Empatia','Protocolo'], negativos:[] },
    ok:{ titulo:'Parcial', texto:'Falta levar à decisão formal.', consequencia:'Desorganização.', positivos:['Tenta ajudar'], negativos:['Sem protocolo'] },
    bad:{ titulo:'Erro', texto:'Extremos geram falhas.', consequencia:'Perda de confiança ou dano financeiro.', positivos:[], negativos:['Risco'] }
  }}]
},

{
  id:'CO-16', area:'Consultório', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Autoclavagem duvidosa na bandeja',
  contexto:'Ao montar a bandeja, você percebe que a fita indicadora está duvidosa e a data da embalagem passou do prazo.',
  personagem:{ emoji:'🧪', nome:'Bandeja duvidosa', detalhe:'Integridade comprometida.' },
  passos:[{ fase:'Biossegurança', pergunta:'Conduta?', opcoes:[
    { texto:'Descartar para reesterilização, montar bandeja nova, registrar a ocorrência no controle de esterilização.', qualidade:'good', pontos:10, comps:[7,9,9,9,10,9,7,10] },
    { texto:'Usar assim mesmo, "não vai dar nada".', qualidade:'bad', pontos:1, comps:[1,1,1,2,1,1,1,1] },
    { texto:'Passar álcool e usar.', qualidade:'bad', pontos:1, comps:[2,2,2,2,1,2,1,2] },
    { texto:'Avisar o dentista e esperar ele decidir sem tirar da bandeja.', qualidade:'ok', pontos:5, comps:[5,5,5,5,5,6,5,6] }
  ], feedbacks:{
    good:{ titulo:'Biosseg. sem concessões', texto:'Validade da esterilização é regra — sem atalhos.', consequencia:'Paciente protegido.', positivos:['Biossegurança','Técnico'], negativos:[] },
    ok:{ titulo:'Parcial', texto:'Avisar é bom, mas não tirar da bandeja é risco.', consequencia:'Risco se alguém usar por engano.', positivos:['Comunica'], negativos:['Incompleto'] },
    bad:{ titulo:'Erro grave', texto:'Usar instrumental sem esterilização válida é infração sanitária.', consequencia:'Risco infeccioso.', positivos:[], negativos:['Infecção cruzada'] }
  }}]
},

{
  id:'CO-17', area:'Consultório', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Alergia ao látex descoberta na cadeira',
  contexto:'Durante a anamnese, o paciente revela alergia ao látex. Luvas, dique e garrote usados são de látex.',
  personagem:{ emoji:'🚫', nome:'Sra. Irene, 39', detalhe:'Alergia severa.' },
  passos:[{ fase:'Substituição de materiais', pergunta:'Conduta?', opcoes:[
    { texto:'Pausar, trocar todos os itens por versões nitrílicas/silicone, comunicar o dentista e registrar a alergia no prontuário em destaque.', qualidade:'good', pontos:10, comps:[9,9,10,10,10,9,8,10] },
    { texto:'Continuar com o material disponível.', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] },
    { texto:'Só trocar as luvas.', qualidade:'bad', pontos:2, comps:[2,2,3,3,2,3,2,3] },
    { texto:'Adiar o procedimento sem tentar trocar.', qualidade:'ok', pontos:5, comps:[5,5,5,5,5,5,5,6] }
  ], feedbacks:{
    good:{ titulo:'Segurança do paciente', texto:'Substituição completa e registro evitam reação anafilática.', consequencia:'Paciente protegido.', positivos:['Biosseg.','Técnico'], negativos:[] },
    ok:{ titulo:'Parcial', texto:'Adiar é seguro mas perde a oportunidade se havia material.', consequencia:'Aborrecimento.', positivos:['Seguro'], negativos:['Ineficiente'] },
    bad:{ titulo:'Risco', texto:'Exposição ao látex em alérgico pode causar anafilaxia.', consequencia:'Emergência.', positivos:[], negativos:['Anafilaxia'] }
  }}]
},

{
  id:'CO-18', area:'Consultório', complexidade:3, tipo:'Emergência', tempo:15,
  titulo:'Broca fraturada intracanal',
  contexto:'Durante endodontia, a broca fratura e um pedaço fica retido no canal.',
  personagem:{ emoji:'⚠️', nome:'Intercorrência', detalhe:'Fragmento intracanal.' },
  passos:[{ fase:'Gestão de intercorrência', pergunta:'Conduta?', opcoes:[
    { texto:'Comunicar o dentista imediatamente, preparar material de remoção/irrigação e anotar a ocorrência no prontuário com honestidade.', qualidade:'good', pontos:10, comps:[9,10,10,10,9,10,8,10] },
    { texto:'Esconder o ocorrido do paciente.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
    { texto:'Continuar sem comunicar.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
    { texto:'Comunicar só depois, no final.', qualidade:'ok', pontos:5, comps:[5,5,5,6,5,6,5,6] }
  ], feedbacks:{
    good:{ titulo:'Transparência clínica', texto:'Comunicar em tempo real e registrar protege paciente e equipe.', consequencia:'Manejo correto.', positivos:['Profissionalismo','Equipe'], negativos:[] },
    ok:{ titulo:'Parcial', texto:'Registro tardio funciona menos bem.', consequencia:'Risco documental.', positivos:['Registra'], negativos:['Atrasa manejo'] },
    bad:{ titulo:'Erro grave', texto:'Omitir intercorrência é falha ética e jurídica.', consequencia:'Processo disciplinar.', positivos:[], negativos:['Ética','Risco legal'] }
  }}]
},

{
  id:'CO-19', area:'Consultório', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'Paciente muito ansioso na cadeira',
  contexto:'Paciente senta tremendo e diz que tem pavor de dentista.',
  personagem:{ emoji:'😰', nome:'Sr. Paulo, 36', detalhe:'Odontofobia.' },
  passos:[{ fase:'Acolhimento', pergunta:'Conduta?', opcoes:[
    { texto:'Falar calmamente, explicar passo a passo, combinar o "sinal de pausa" com a mão e ajustar o posicionamento da cadeira.', qualidade:'good', pontos:10, comps:[10,8,8,7,7,8,7,10] },
    { texto:'Dizer "não é nada" e começar.', qualidade:'bad', pontos:2, comps:[2,2,3,3,3,2,2,3] },
    { texto:'Ignorar e deixar o dentista resolver.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,3] },
    { texto:'Falar com ele mas sem o "sinal de pausa".', qualidade:'ok', pontos:6, comps:[6,6,6,6,6,6,6,7] }
  ], feedbacks:{
    good:{ titulo:'Redução de ansiedade', texto:'Explicar + combinar sinal dá controle ao paciente.', consequencia:'Procedimento sem sobressaltos.', positivos:['Empatia','Técnico'], negativos:[] },
    ok:{ titulo:'Parcial', texto:'Falar sem o sinal é metade da solução.', consequencia:'Cooperação parcial.', positivos:['Comunica'], negativos:['Incompleto'] },
    bad:{ titulo:'Erro', texto:'Minimizar o medo piora o quadro.', consequencia:'Procedimento comprometido.', positivos:[], negativos:['Pânico'] }
  }}]
},

{
  id:'ES-11', area:'Estoque', complexidade:2, tipo:'Normal', tempo:8,
  titulo:'Conferência mensal do estoque',
  contexto:'Fim do mês: conferir estoque físico × sistema, identificar desvios e abrir pedidos.',
  personagem:{ emoji:'📦', nome:'Rotina de estoque', detalhe:'Conferência cíclica.' },
  passos:[{ fase:'Controle', pergunta:'Como organizar?', opcoes:[
    { texto:'Seguir lista item-a-item, conferir quantidade, validade e lote, registrar divergências e abrir pedidos a partir do ponto de reposição.', qualidade:'good', pontos:10, comps:[7,9,9,8,8,7,7,10] },
    { texto:'Fazer de memória porque "sei tudo o que tem".', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
    { texto:'Conferir só o que parece estar acabando.', qualidade:'ok', pontos:5, comps:[5,5,5,5,5,5,5,5] },
    { texto:'Passar a tarefa integralmente para outro colega sem acompanhar.', qualidade:'bad', pontos:2, comps:[2,2,3,3,3,2,2,3] }
  ], feedbacks:{
    good:{ titulo:'Conferência correta', texto:'Método item-a-item evita desvios.', consequencia:'Estoque saudável.', positivos:['Organização','Técnico'], negativos:[] },
    ok:{ titulo:'Parcial', texto:'Amostra pode mascarar perdas.', consequencia:'Risco de furo.', positivos:['Econômico'], negativos:['Incompleto'] },
    bad:{ titulo:'Erro', texto:'Sem método → furos, perdas, vencidos.', consequencia:'Prejuízo.', positivos:[], negativos:['Prejuízo'] }
  }}]
},

{
  id:'ES-12', area:'Estoque', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Recebimento com NF divergente',
  contexto:'Chega uma remessa em que a NF indica 20 tubetes de anestésico, mas na caixa só há 15.',
  personagem:{ emoji:'📋', nome:'Recebimento', detalhe:'NF ≠ físico.' },
  passos:[{ fase:'Protocolo de recebimento', pergunta:'Conduta?', opcoes:[
    { texto:'Não aceitar a mercadoria sem ajuste, anotar no verso da NF a divergência com data/assinatura, contatar o fornecedor.', qualidade:'good', pontos:10, comps:[8,10,10,8,7,8,9,10] },
    { texto:'Assinar a NF e depois ver no que dá.', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
    { texto:'Aceitar os 15 sem registrar nada.', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,3] },
    { texto:'Recusar tudo e mandar de volta sem tentar conciliar.', qualidade:'ok', pontos:5, comps:[5,5,6,5,5,5,6,5] }
  ], feedbacks:{
    good:{ titulo:'Receber com controle', texto:'Registrar divergência por escrito protege a clínica.', consequencia:'Cobrança correta.', positivos:['Organização','Profissionalismo'], negativos:[] },
    ok:{ titulo:'Parcial', texto:'Recusa total sem conciliar é extremo.', consequencia:'Perde 15 unidades úteis.', positivos:['Firme'], negativos:['Ineficiente'] },
    bad:{ titulo:'Erro', texto:'Assinar sem conferir → pagar por algo não recebido.', consequencia:'Prejuízo.', positivos:[], negativos:['Prejuízo'] }
  }}]
},

{
  id:'ES-13', area:'Estoque', complexidade:2, tipo:'Exceção', tempo:8,
  titulo:'Anestésico exposto a calor',
  contexto:'Após uma falha elétrica de 2 dias, o termômetro do estoque marcou 32°C. Vários tubetes de anestésico estavam lá.',
  personagem:{ emoji:'🌡️', nome:'Cadeia térmica', detalhe:'Falha de climatização.' },
  passos:[{ fase:'Validade térmica', pergunta:'Conduta?', opcoes:[
    { texto:'Separar o lote exposto, consultar fabricante/bula sobre integridade e registrar a ocorrência no mapa de estoque antes de decidir descarte ou manter.', qualidade:'good', pontos:10, comps:[7,9,10,10,10,8,8,10] },
    { texto:'Usar normalmente.', qualidade:'bad', pontos:1, comps:[1,1,1,2,1,1,1,1] },
    { texto:'Descartar tudo imediatamente sem consultar.', qualidade:'ok', pontos:6, comps:[5,6,6,6,8,5,5,7] },
    { texto:'Colocar na geladeira "para recuperar".', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,3] }
  ], feedbacks:{
    good:{ titulo:'Manejo técnico', texto:'Avaliar antes de descartar ou usar é profissional.', consequencia:'Decisão fundamentada.', positivos:['Técnico','Biossegurança'], negativos:[] },
    ok:{ titulo:'Descartar conservador', texto:'Descarte total é seguro mas caro — consulte antes.', consequencia:'Prejuízo evitável.', positivos:['Seguro'], negativos:['Desperdício'] },
    bad:{ titulo:'Erro', texto:'Usar sem avaliação pode inutilizar efeito ou dar reação.', consequencia:'Risco clínico.', positivos:[], negativos:['Risco'] }
  }}]
},

{
  id:'FI-09', area:'Financeiro', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Contestação de coparticipação',
  contexto:'Paciente diz que o convênio cobriria 100%, mas a guia aponta coparticipação de R$ 80.',
  personagem:{ emoji:'💳', nome:'Sra. Denise', detalhe:'Convênio empresarial.' },
  passos:[{ fase:'Transparência financeira', pergunta:'Conduta?', opcoes:[
    { texto:'Mostrar a guia do convênio, explicar coparticipação de forma simples e oferecer ligar para o convênio junto se ela quiser.', qualidade:'good', pontos:10, comps:[10,9,8,7,6,7,10,10] },
    { texto:'Dar desconto na hora sem autorização.', qualidade:'bad', pontos:2, comps:[4,3,2,3,2,2,2,3] },
    { texto:'Dizer apenas "é assim mesmo".', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,3] },
    { texto:'Pedir para ela resolver sozinha com o convênio.', qualidade:'ok', pontos:5, comps:[5,5,5,5,5,5,5,5] }
  ], feedbacks:{
    good:{ titulo:'Transparência', texto:'Explicar e oferecer ajuda resolve sem perder cliente.', consequencia:'Confiança mantida.', positivos:['Comunicação','Empatia'], negativos:[] },
    ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
    bad:{ titulo:'Erro', texto:'Resposta fria ou autoaprovação de desconto geram problemas.', consequencia:'Conflito ou prejuízo.', positivos:[], negativos:['Conflito'] }
  }}]
},

{
  id:'RE-07', area:'Relacionamento', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Piada inconveniente com colega',
  contexto:'Na recepção, um paciente faz um comentário constrangedor à colega recepcionista.',
  personagem:{ emoji:'😐', nome:'Paciente inadequado', detalhe:'Comportamento desrespeitoso.' },
  passos:[{ fase:'Ambiente profissional', pergunta:'Conduta?', opcoes:[
    { texto:'Interromper com firmeza, pedir respeito, apoiar a colega e, se persistir, comunicar a coordenação.', qualidade:'good', pontos:10, comps:[9,10,10,8,7,10,10,10] },
    { texto:'Rir junto para "aliviar".', qualidade:'bad', pontos:1, comps:[1,1,1,2,2,1,1,1] },
    { texto:'Fingir que não ouviu.', qualidade:'bad', pontos:2, comps:[2,2,2,3,2,2,2,2] },
    { texto:'Chamar o paciente em separado para conversar depois.', qualidade:'ok', pontos:6, comps:[6,6,6,6,6,6,6,7] }
  ], feedbacks:{
    good:{ titulo:'Postura correta', texto:'Defender a colega e manter padrão protege toda a equipe.', consequencia:'Clima saudável.', positivos:['Equipe','Profissionalismo'], negativos:[] },
    ok:{ titulo:'Parcial', texto:'Falar depois é melhor que nada, mas o constrangimento já aconteceu.', consequencia:'Desconforto prolongado.', positivos:['Aborda'], negativos:['Tardio'] },
    bad:{ titulo:'Erro', texto:'Rir ou ignorar valida o comportamento.', consequencia:'Ambiente hostil.', positivos:[], negativos:['Assédio'] }
  }}]
},

{
  id:'RE-08', area:'Relacionamento', complexidade:1, tipo:'Normal', tempo:6,
  titulo:'Reconhecimento a colega',
  contexto:'A colega resolveu uma emergência complexa com sangue frio. Você quer reconhecer.',
  personagem:{ emoji:'🙌', nome:'Equipe', detalhe:'Cultura de reconhecimento.' },
  passos:[{ fase:'Cultura positiva', pergunta:'Como fazer?', opcoes:[
    { texto:'Dar um feedback específico e público, destacando exatamente o que ela fez bem (não só "parabéns").', qualidade:'good', pontos:10, comps:[10,7,7,7,6,10,8,10] },
    { texto:'Não dizer nada, "é obrigação".', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,3,2,3] },
    { texto:'Elogiar genericamente "você é demais".', qualidade:'ok', pontos:6, comps:[6,5,5,5,5,7,5,7] },
    { texto:'Elogiar só para o chefe, sem falar com ela.', qualidade:'ok', pontos:5, comps:[5,5,5,5,5,6,5,6] }
  ], feedbacks:{
    good:{ titulo:'Feedback positivo de qualidade', texto:'Reconhecimento específico reforça o comportamento certo.', consequencia:'Cultura fortalecida.', positivos:['Liderança','Equipe'], negativos:[] },
    ok:{ titulo:'Parcial', texto:'Elogio genérico tem metade do efeito.', consequencia:'Reconhecimento morno.', positivos:['Elogia'], negativos:['Sem detalhe'] },
    bad:{ titulo:'Erro', texto:'Silêncio desmotiva quem fez certo.', consequencia:'Desgaste.', positivos:[], negativos:['Desmotivação'] }
  }}]
},

{
  id:'RE-09', area:'Relacionamento', complexidade:2, tipo:'Exceção', tempo:10,
  titulo:'Conflito interno entre colegas',
  contexto:'Duas colegas estão em atrito há dias sobre quem limpa o consultório no fim do dia. A discussão subiu de tom.',
  personagem:{ emoji:'⚡', nome:'Conflito interno', detalhe:'Clima ruim.' },
  passos:[{ fase:'Mediação', pergunta:'Como agir?', opcoes:[
    { texto:'Chamar as duas em privado, ouvir cada uma, buscar um combinado por escrito (escala) e acompanhar por uma semana.', qualidade:'good', pontos:10, comps:[10,10,10,7,6,10,10,10] },
    { texto:'Tomar partido de uma imediatamente.', qualidade:'bad', pontos:1, comps:[1,2,2,3,3,1,1,1] },
    { texto:'Ignorar e deixar elas resolverem.', qualidade:'bad', pontos:2, comps:[2,2,3,3,3,2,2,3] },
    { texto:'Dar bronca nas duas de uma vez no grupo.', qualidade:'bad', pontos:2, comps:[2,3,3,3,3,2,2,3] }
  ], feedbacks:{
    good:{ titulo:'Mediação correta', texto:'Ouvir, combinar e acompanhar resolve de verdade.', consequencia:'Paz no ambiente.', positivos:['Gestão de conflito'], negativos:[] },
    ok:{ titulo:'-', texto:'', consequencia:'', positivos:[], negativos:[] },
    bad:{ titulo:'Erro', texto:'Parcialidade, omissão ou exposição pública pioram.', consequencia:'Conflito escala.', positivos:[], negativos:['Ambiente tóxico'] }
  }}]
},

{
  id:'SS-11', area:'Saúde e Segurança', complexidade:3, tipo:'Emergência', tempo:15,
  titulo:'Acidente com perfurocortante',
  contexto:'Você se fere com uma agulha usada ao tentar recapsular (contra o protocolo).',
  personagem:{ emoji:'🩸', nome:'Acidente', detalhe:'Exposição biológica.' },
  passos:[{ fase:'Protocolo pós-exposição', pergunta:'Conduta?', opcoes:[
    { texto:'Lavar com água e sabão, não espremer, comunicar imediatamente, registrar CAT, coletar sorologia da fonte e da profissional, avaliação médica em até 2h para eventual profilaxia.', qualidade:'good', pontos:10, comps:[7,10,10,10,10,10,8,10] },
    { texto:'Ignorar, "é só um arranhão".', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] },
    { texto:'Espremer até sangrar bem e lavar com álcool 70%.', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] },
    { texto:'Cuidar do acidente mas não abrir CAT.', qualidade:'ok', pontos:5, comps:[5,5,5,6,7,5,5,6] }
  ], feedbacks:{
    good:{ titulo:'NR-32 e pós-exposição', texto:'Protocolo completo protege a profissional e a clínica.', consequencia:'Caso gerido corretamente.', positivos:['Biosseg.','Profissional'], negativos:[] },
    ok:{ titulo:'Parcial', texto:'Sem CAT perde direitos e rastreabilidade.', consequencia:'Problema jurídico futuro.', positivos:['Cuida do ferimento'], negativos:['Documentação'] },
    bad:{ titulo:'Erro', texto:'Espremer ou usar álcool lesiona mais; ignorar é perigoso.', consequencia:'Risco de infecção.', positivos:[], negativos:['Risco'] }
  }}]
},

{
  id:'SS-12', area:'Saúde e Segurança', complexidade:2, tipo:'Normal', tempo:8,
  titulo:'Descarte de resíduos do consultório',
  contexto:'Ao final do atendimento: gaze com sangue, tubete de anestésico vazio, restauração em amálgama e copo descartável.',
  personagem:{ emoji:'♻️', nome:'Descarte de resíduos', detalhe:'RDC 222/2018.' },
  passos:[{ fase:'Segregação', pergunta:'Conduta?', opcoes:[
    { texto:'Gaze → infectante (A); tubete → perfurocortante (E) no DescarPack; amálgama → recipiente específico com selo; copo → comum (D).', qualidade:'good', pontos:10, comps:[6,9,9,10,10,7,7,10] },
    { texto:'Jogar tudo no lixo comum.', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] },
    { texto:'Gaze + tubete no lixo comum, amálgama no infectante.', qualidade:'bad', pontos:2, comps:[2,2,2,3,2,2,2,3] },
    { texto:'Gaze e tubete no infectante, amálgama no comum.', qualidade:'ok', pontos:5, comps:[5,5,5,6,6,5,5,6] }
  ], feedbacks:{
    good:{ titulo:'Segregação correta', texto:'RDC 222 define com clareza cada grupo.', consequencia:'Ambiente e equipe protegidos.', positivos:['Biosseg.','Técnico'], negativos:[] },
    ok:{ titulo:'Parcial', texto:'Misturar amálgama no comum é erro ambiental.', consequencia:'Multa sanitária.', positivos:['Parte certa'], negativos:['Amálgama errado'] },
    bad:{ titulo:'Erro grave', texto:'Sem segregação, o risco é para a coleta toda.', consequencia:'Multa e contaminação.', positivos:[], negativos:['Risco'] }
  }}]
},

{
  id:'SS-13', area:'Saúde e Segurança', complexidade:3, tipo:'Emergência', tempo:15,
  titulo:'Aspiração de corpo estranho',
  contexto:'Durante restauração, a paciente tosse, engasga e há suspeita de aspiração da matriz metálica.',
  personagem:{ emoji:'🆘', nome:'Aspiração de corpo estranho', detalhe:'Risco respiratório.' },
  passos:[{ fase:'Conduta imediata', pergunta:'Conduta?', opcoes:[
    { texto:'Parar o procedimento, inclinar a paciente, estimular tosse; se obstrução completa com sinais, Heimlich; acionar SAMU; encaminhar para RX torácico/abdominal para localizar o objeto.', qualidade:'good', pontos:10, comps:[8,10,10,10,9,10,8,10] },
    { texto:'Dar água "para descer".', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] },
    { texto:'Mandar a paciente para casa e observar.', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] },
    { texto:'Só estimular tosse sem encaminhar para RX.', qualidade:'ok', pontos:5, comps:[5,5,5,6,6,5,5,6] }
  ], feedbacks:{
    good:{ titulo:'Protocolo de aspiração', texto:'Manejo imediato + imagem = conduta de referência.', consequencia:'Caso resolvido.', positivos:['Decisão','Técnico'], negativos:[] },
    ok:{ titulo:'Parcial', texto:'Sem imagem não se confirma se foi deglutido ou aspirado.', consequencia:'Risco pulmonar oculto.', positivos:['Início correto'], negativos:['Sem RX'] },
    bad:{ titulo:'Erro grave', texto:'Água ou dispensa podem matar.', consequencia:'Parada respiratória.', positivos:[], negativos:['Risco de morte'] }
  }}]
}


/* ============================================================
   NOVOS CENÁRIOS — FASE 2 (60 cenários)
   Estrutura: 20 Multi-Passos + 20 Materiais + 20 Agendamentos
   ============================================================ */
},{
  id:'MP-01', area:'Clínica', complexidade:2, tipo:'Caso Clínico', tempo:12,
  titulo:'Dor pós-RCT',
  contexto:'Paciente com dor após tratamento endodôntico.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Apreensivo' },
  passos:[{
    fase:'Avaliação',
    pergunta:'Como investigar a causa?',
    opcoes:[
      { texto:'Questionar localização, intensidade; testar vitalidade; fazer RX para descartar fratura', qualidade:'good', pontos:10, comps:[8,9,8,9,7,8,7,9] },
      { texto:'Prescrever analgésico mais forte', qualidade:'ok', pontos:6, comps:[4,5,5,5,4,5,4,6] },
      { texto:'Dizer que é normal', qualidade:'bad', pontos:2, comps:[2,2,2,3,3,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Diagnóstico preciso', texto:'Investigou causas.', consequencia:'Tratamento adequado.', positivos:['Técnico'], negativos:[] },
      ok:{ titulo:'Parcial', texto:'Sem investigação.', consequencia:'Risco.', positivos:[], negativos:[] },
      bad:{ titulo:'Negligência', texto:'Grave.', consequencia:'Complicação.', positivos:[], negativos:[] }
    }
  },{
    fase:'Conduta',
    pergunta:'Se fratura confirmada, qual abordagem?',
    opcoes:[
      { texto:'Informar paciente, documentar, considerar extração ou retratamento', qualidade:'good', pontos:10, comps:[9,9,8,9,7,8,7,10] },
      { texto:'Tentar refazer RCT', qualidade:'ok', pontos:5, comps:[5,5,5,5,5,5,5,5] },
      { texto:'Ignorar', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Ético', texto:'Comunicação honesta.', consequencia:'Confiança.', positivos:['Honesto'], negativos:[] },
      ok:{ titulo:'Tentativa', texto:'Prognóstico pobre.', consequencia:'Risco de falha.', positivos:[], negativos:[] },
      bad:{ titulo:'Omissão', texto:'Grave problema.', consequencia:'Processo.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-02', area:'Clínica', complexidade:2, tipo:'Caso Clínico', tempo:12,
  titulo:'Sangramento excessivo diabético',
  contexto:'Paciente sangra muito durante limpeza. É diabético tipo 2.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Diabético' },
  passos:[{
    fase:'Reconhecimento',
    pergunta:'Como ajustar o plano?',
    opcoes:[
      { texto:'Parar, registrar, encaminhar para médico avaliar hemostasia', qualidade:'good', pontos:10, comps:[8,9,8,8,8,8,7,9] },
      { texto:'Continuar com antibiótico preventivo', qualidade:'ok', pontos:6, comps:[4,5,5,5,6,6,4,6] },
      { texto:'Culpabilizar o paciente', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,1,2] }
    ],
    feedbacks:{
      good:{ titulo:'Manejo', texto:'Reconheceu impacto.', consequencia:'Seguro.', positivos:['Interdisciplinar'], negativos:[] },
      ok:{ titulo:'Risco', texto:'Sem investigação.', consequencia:'Negligência.', positivos:[], negativos:[] },
      bad:{ titulo:'Culpa', texto:'Quebra vínculo.', consequencia:'Perde paciente.', positivos:[], negativos:[] }
    }
  },{
    fase:'Acompanhamento',
    pergunta:'Frequência de limpeza ideal?',
    opcoes:[
      { texto:'A cada 3 meses + higiene intensiva + coordenar com médico', qualidade:'good', pontos:10, comps:[8,9,8,8,8,8,7,9] },
      { texto:'Semestral como pacientes normais', qualidade:'ok', pontos:5, comps:[4,4,4,4,4,4,4,4] },
      { texto:'Remarcar se houver queixa', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Apropriado', texto:'Vigilância frequente.', consequencia:'Melhor prognóstico.', positivos:['Preventiva'], negativos:[] },
      ok:{ titulo:'Insuficiente', texto:'Progressão mais rápida.', consequencia:'Perda dentária.', positivos:[], negativos:[] },
      bad:{ titulo:'Negligência', texto:'Agravamento certo.', consequencia:'Culpa profissional.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-03', area:'Clínica', complexidade:2, tipo:'Caso Clínico', tempo:12,
  titulo:'Discrepância oclusal',
  contexto:'Contato prematuro após restauração confirmado com carbono.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Atento' },
  passos:[{
    fase:'Ajuste',
    pergunta:'Como garantir harmonia?',
    opcoes:[
      { texto:'Baixar ponto, testar, refinar até harmonia em oclusão cêntrica e excursões', qualidade:'good', pontos:10, comps:[8,9,8,9,8,8,8,9] },
      { texto:'Normal, vai se ajustar em semanas', qualidade:'ok', pontos:5, comps:[3,3,4,4,3,3,3,4] },
      { texto:'Culpar o paciente pela mordida', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Preciso', texto:'Corrigiu imediatamente.', consequencia:'Satisfação.', positivos:['Qualidade'], negativos:[] },
      ok:{ titulo:'Espera', texto:'Pode funcionar.', consequencia:'Desconforto temporário.', positivos:[], negativos:[] },
      bad:{ titulo:'Negligência', texto:'Unprofessional.', consequencia:'Muda de dentista.', positivos:[], negativos:[] }
    }
  },{
    fase:'Finalização',
    pergunta:'O que fazer após ajuste?',
    opcoes:[
      { texto:'Refazer testes finais em carbono, orientar, marcar revisão em 1 semana', qualidade:'good', pontos:10, comps:[8,8,8,9,8,8,8,9] },
      { texto:'Apenas polir', qualidade:'ok', pontos:6, comps:[4,4,4,5,4,4,4,5] },
      { texto:'Nada', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Total', texto:'Garantiu longevidade.', consequencia:'Duradoura.', positivos:['Profissional'], negativos:[] },
      ok:{ titulo:'Parcial', texto:'Funcional sem garantia.', consequencia:'Reajuste depois.', positivos:[], negativos:[] },
      bad:{ titulo:'Irresponsável', texto:'Negligência.', consequencia:'Fracasso rápido.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-04', area:'Clínica', complexidade:2, tipo:'Caso Clínico', tempo:12,
  titulo:'Mobilidade dentária',
  contexto:'Paciente com mobilidade anormal nos dentes 36 e 37.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Fumante' },
  passos:[{
    fase:'Diagnóstico',
    pergunta:'Qual conduta diagnóstica?',
    opcoes:[
      { texto:'RX periapical, testar vitalidade, registrar, avaliar apertamento, investigar trauma oclusal', qualidade:'good', pontos:10, comps:[8,9,8,9,8,8,7,9] },
      { texto:'Só observar e remarcar em 3 meses', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Extrair imediatamente', qualidade:'bad', pontos:1, comps:[1,2,1,2,2,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Investigação', texto:'Investigou causas.', consequencia:'Diagnóstico preciso.', positivos:['Sistemático'], negativos:[] },
      ok:{ titulo:'Espera', texto:'Sem investigação.', consequencia:'Progressão silenciosa.', positivos:[], negativos:[] },
      bad:{ titulo:'Mutilação', texto:'Desnecessária.', consequencia:'Perda do dente.', positivos:[], negativos:[] }
    }
  },{
    fase:'Tratamento',
    pergunta:'Se trauma oclusal + periodontite, qual abordagem?',
    opcoes:[
      { texto:'Ajuste oclusal, higiene intensiva, placa noturna, antibiótico se necessário, reavaliação', qualidade:'good', pontos:10, comps:[8,9,8,9,9,8,8,9] },
      { texto:'Apenas profilaxia e esperar', qualidade:'ok', pontos:5, comps:[4,4,4,4,4,4,4,4] },
      { texto:'Extração preventiva', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Multifatorial', texto:'Atacou as causas.', consequencia:'Melhor estabilização.', positivos:['Holístico'], negativos:[] },
      ok:{ titulo:'Incompleto', texto:'Sem controle oclusal.', consequencia:'Progressão contínua.', positivos:[], negativos:[] },
      bad:{ titulo:'Destrutivo', texto:'Remove o que pode salvar.', consequencia:'Dano permanente.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-05', area:'Clínica', complexidade:3, tipo:'Caso Clínico', tempo:15,
  titulo:'Lesão erosiva com sensibilidade',
  contexto:'Paciente com erosão cervical severa. Dentes muito sensíveis. Refere vômitos frequentes.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Bulímico' },
  passos:[{
    fase:'Identificação causa',
    pergunta:'Como abordar a causa raiz?',
    opcoes:[
      { texto:'Questionar sobre hábitos, vômitos, bebidas ácidas; encaminhar para nutricionista/psicólogo se necessário', qualidade:'good', pontos:10, comps:[9,9,8,9,9,8,8,9] },
      { texto:'Prescrever dessensibilizante apenas', qualidade:'ok', pontos:5, comps:[4,4,4,4,4,4,4,4] },
      { texto:'Ignorar a causa', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Holístico', texto:'Atacou origem.', consequencia:'Solução duradoura.', positivos:['Interdisciplinar'], negativos:[] },
      ok:{ titulo:'Paliativo', texto:'Sem causa.', consequencia:'Piora progressiva.', positivos:[], negativos:[] },
      bad:{ titulo:'Negligência', texto:'Dano contínuo.', consequencia:'Destruição progressiva.', positivos:[], negativos:[] }
    }
  },{
    fase:'Tratamento',
    pergunta:'Qual abordagem para erosão avançada?',
    opcoes:[
      { texto:'Fluoretos tópicos, adesivos resinosos nas lesões, protetor bucal noturno se bruxismo, reavaliação periódica', qualidade:'good', pontos:10, comps:[9,9,9,9,8,8,8,9] },
      { texto:'Apenas fluoreto gel caseiro', qualidade:'ok', pontos:6, comps:[5,5,5,5,5,5,5,5] },
      { texto:'Restauração agressiva', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Conservador', texto:'Preservou estrutura.', consequencia:'Estável.', positivos:['Prudente'], negativos:[] },
      ok:{ titulo:'Limitado', texto:'Pode ajudar.', consequencia:'Resultado incerto.', positivos:[], negativos:[] },
      bad:{ titulo:'Destrutivo', texto:'Removeu saudável.', consequencia:'Dano irreversível.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-06', area:'Clínica', complexidade:3, tipo:'Caso Clínico', tempo:15,
  titulo:'Inflamação pós-implante',
  contexto:'Paciente 3 meses pós-cirurgia de implante. Inchaço localizado e dor no sítio.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Pós-cirurgia' },
  passos:[{
    fase:'Avaliação',
    pergunta:'O que deve ser feito primeiro?',
    opcoes:[
      { texto:'RX do sítio, examinar, verificar estabilidade do implante, verificar higiene, testar vitalidade dos dentes adjacentes', qualidade:'good', pontos:10, comps:[9,9,8,9,8,8,8,9] },
      { texto:'Prescrever antibiótico preventivo', qualidade:'ok', pontos:5, comps:[4,4,4,4,4,4,4,4] },
      { texto:'Reindicando que é normal', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Investigativo', texto:'Investigou complicações.', consequencia:'Diagnóstico preciso.', positivos:['Completo'], negativos:[] },
      ok:{ titulo:'Prescrição prematura', texto:'Sem investigação.', consequencia:'Pode mascarar problema.', positivos:[], negativos:[] },
      bad:{ titulo:'Negligência', texto:'Grave.', consequencia:'Perda de implante.', positivos:[], negativos:[] }
    }
  },{
    fase:'Conduta',
    pergunta:'Se periimplantite confirmada, qual tratamento?',
    opcoes:[
      { texto:'Higienização mecânica, instruções rigorosas, antimicrobianos tópicos, desbridamento se necessário, acompanhamento próximo', qualidade:'good', pontos:10, comps:[9,9,8,9,9,8,8,9] },
      { texto:'Apenas enxaguante bucal', qualidade:'ok', pontos:5, comps:[3,3,3,3,3,3,3,3] },
      { texto:'Remover implante imediatamente', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Conservador', texto:'Tentou preservar.', consequencia:'Chance de sucesso.', positivos:['Prudente'], negativos:[] },
      ok:{ titulo:'Insuficiente', texto:'Sem ação mecânica.', consequencia:'Progressão.', positivos:[], negativos:[] },
      bad:{ titulo:'Precipitado', texto:'Destruiu solução.', consequencia:'Dano permanente.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-07', area:'Clínica', complexidade:2, tipo:'Caso Clínico', tempo:12,
  titulo:'Halitose crônica',
  contexto:'Paciente com halitose persistente apesar de boa higiene.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Constrangido' },
  passos:[{
    fase:'Diagnóstico',
    pergunta:'Como investigar a origem?',
    opcoes:[
      { texto:'Questionar medicações, doenças sistêmicas, avaliação periodontal completa, dorso de língua, orofaringe', qualidade:'good', pontos:10, comps:[8,9,8,9,8,8,7,9] },
      { texto:'Prescrever enxaguante bucal', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Dizer que é normal', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Detalhado', texto:'Investigação completa.', consequencia:'Causa identificada.', positivos:['Sistemático'], negativos:[] },
      ok:{ titulo:'Superficial', texto:'Sem investigação.', consequencia:'Risco de falha.', positivos:[], negativos:[] },
      bad:{ titulo:'Negligência', texto:'Impacto emocional grave.', consequencia:'Perda de confiança.', positivos:[], negativos:[] }
    }
  },{
    fase:'Tratamento',
    pergunta:'Se origem periodontal confirmada, qual estratégia?',
    opcoes:[
      { texto:'Desbridamento, limpeza periodontal, higiene intensiva, instrução de língua, reavaliação em 2 semanas', qualidade:'good', pontos:10, comps:[8,9,8,9,8,8,8,9] },
      { texto:'Só enxaguante', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Encaminhar sem intervir', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Completo', texto:'Múltiplas estratégias.', consequencia:'Melhora significativa.', positivos:['Efetivo'], negativos:[] },
      ok:{ titulo:'Paliativo', texto:'Mascara sem resolver.', consequencia:'Recorrência.', positivos:[], negativos:[] },
      bad:{ titulo:'Adiamento', texto:'Sem ação imediata.', consequencia:'Frustração do paciente.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-08', area:'Clínica', complexidade:3, tipo:'Caso Clínico', tempo:15,
  titulo:'Fratura de raiz residual',
  contexto:'Paciente com sintoma de dor crônica. RX mostra fragmento radicular retido.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Dor crônica' },
  passos:[{
    fase:'Decisão cirúrgica',
    pergunta:'Como proceder com raiz retida?',
    opcoes:[
      { texto:'Avaliar sintomatologia, RX periapical/oclusal, se assintomática documentar e acompanhar, se sintomática remover sob rigor asséptico', qualidade:'good', pontos:10, comps:[9,9,8,9,9,8,8,9] },
      { texto:'Remover imediatamente', qualidade:'ok', pontos:5, comps:[4,4,4,5,4,4,4,5] },
      { texto:'Ignorar e medicar', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Prudente', texto:'Respeitou evidência.', consequencia:'Menos trauma.', positivos:['Baseado em evidência'], negativos:[] },
      ok:{ titulo:'Agressivo', texto:'Desnecessário em caso assintomático.', consequencia:'Trauma adicional.', positivos:[], negativos:[] },
      bad:{ titulo:'Negligência', texto:'Inflamação contínua.', consequencia:'Complicação progressiva.', positivos:[], negativos:[] }
    }
  },{
    fase:'Técnica',
    pergunta:'Se decisão for remover, qual técnica?',
    opcoes:[
      { texto:'Anestesia suficiente, incisão criterioso, elevação delicada, preservação de estrutura, suturas, pós-op adequado', qualidade:'good', pontos:10, comps:[9,9,8,9,9,8,8,9] },
      { texto:'Remoção pela força com instrumento único', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Sem protocolo asséptico', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Profissional', texto:'Técnica refinada.', consequencia:'Cicatrização adequada.', positivos:['Atraumático'], negativos:[] },
      ok:{ titulo:'Rústico', texto:'Funciona mas lesivo.', consequencia:'Cicatrização lenta.', positivos:[], negativos:[] },
      bad:{ titulo:'Perigoso', texto:'Risco de infecção.', consequencia:'Abscessos secundários.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-09', area:'Clínica', complexidade:2, tipo:'Caso Clínico', tempo:12,
  titulo:'Alergia a anestésico',
  contexto:'Paciente relata reação alérgica a anestésicos locais em passado.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Alérgico' },
  passos:[{
    fase:'Avaliação de alergia',
    pergunta:'Como proceder com suspeita de alergia?',
    opcoes:[
      { texto:'Questionar tipo de anestésico, sintomas, quando aconteceu, documentar detalhadamente, considerar teste de contato', qualidade:'good', pontos:10, comps:[9,9,8,9,8,8,8,9] },
      { texto:'Usar anestésico diferente sem investigação', qualidade:'ok', pontos:5, comps:[4,4,4,5,4,4,4,5] },
      { texto:'Negar atendimento', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Investigativo', texto:'Diferenciou reação.', consequencia:'Segurança confirmada.', positivos:['Cuidadoso'], negativos:[] },
      ok:{ titulo:'Prático mas incompleto', texto:'Pode funcionar.', consequencia:'Risco futuro.', positivos:[], negativos:[] },
      bad:{ titulo:'Discriminação', texto:'Abandono injustificado.', consequencia:'Perda de paciente.', positivos:[], negativos:[] }
    }
  },{
    fase:'Alternativa segura',
    pergunta:'Se alergia confirmada, qual anestésico usar?',
    opcoes:[
      { texto:'Prilocaína sem vasoconstritor ou articaína, teste intradérmico antes, dosajar com cuidado', qualidade:'good', pontos:10, comps:[8,9,8,9,8,8,8,9] },
      { texto:'Qualquer anestésico de classe diferente', qualidade:'ok', pontos:6, comps:[4,4,4,5,4,4,4,5] },
      { texto:'Trabalhar sem anestesia', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Seguro', texto:'Evidência de segurança.', consequencia:'Tratamento sem risco.', positivos:['Eficaz'], negativos:[] },
      ok:{ titulo:'Tenta de novo', texto:'Sem certeza de segurança.', consequencia:'Risco de reação.', positivos:[], negativos:[] },
      bad:{ titulo:'Impossível', texto:'Paciente sofre.', consequencia:'Abandono de caso.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-10', area:'Clínica', complexidade:2, tipo:'Caso Clínico', tempo:12,
  titulo:'Manchamento dentário por tetraciclina',
  contexto:'Paciente jovem com descoloração azul-cinzenta generalizada por uso de tetraciclina na infância.',
  personagem:{ emoji:'🦷', nome:'Paciente jovem', detalhe:'Constrangido' },
  passos:[{
    fase:'Educação',
    pergunta:'Como explicar o problema?',
    opcoes:[
      { texto:'Explicar origem medicamentosa, informar sobre opções de tratamento, estabelecer expectativas realistas', qualidade:'good', pontos:10, comps:[8,9,8,9,8,8,8,9] },
      { texto:'Oferecer clareamento imediato', qualidade:'ok', pontos:6, comps:[4,4,4,5,4,4,4,5] },
      { texto:'Dizer que é grave e não tem solução', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Educativo', texto:'Informou e incluiu.', consequencia:'Confiança.', positivos:['Transparente'], negativos:[] },
      ok:{ titulo:'Promessa rápida', texto:'Pode não funcionar bem.', consequencia:'Decepção.', positivos:[], negativos:[] },
      bad:{ titulo:'Desestimulador', texto:'Sem opções.', consequencia:'Perda de confiança.', positivos:[], negativos:[] }
    }
  },{
    fase:'Tratamento',
    pergunta:'Qual opção para mancha por tetraciclina?',
    opcoes:[
      { texto:'Clareamento interno + externo prolongado, microabrasão, ou restauração/laminado se não responder', qualidade:'good', pontos:10, comps:[8,9,8,9,8,8,8,9] },
      { texto:'Clareamento simples', qualidade:'ok', pontos:6, comps:[4,4,4,5,4,4,4,5] },
      { texto:'Apenas restauração protética', qualidade:'bad', pontos:3, comps:[3,3,3,3,3,3,3,3] }
    ],
    feedbacks:{
      good:{ titulo:'Multimodal', texto:'Opções progressivas.', consequencia:'Melhor resultado.', positivos:['Sofisticado'], negativos:[] },
      ok:{ titulo:'Limitado', texto:'Pode não resolver.', consequencia:'Necessidade de restauração.', positivos:[], negativos:[] },
      bad:{ titulo:'Destruidor', texto:'Remove estrutura.', consequencia:'Dependência futura.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-11', area:'Clínica', complexidade:3, tipo:'Caso Clínico', tempo:15,
  titulo:'Síndrome de ardência bucal',
  contexto:'Paciente com dor crônica em boca mas sem lesão visível. Múltiplas especialidades já avaliaram.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Frustrado' },
  passos:[{
    fase:'Diagnóstico diferencial',
    pergunta:'Como abordagem a queixa?',
    opcoes:[
      { texto:'Analisar medicações, deficiências nutricionais, ansiedade, fazer testes de vitalidade, biópsia se necessário', qualidade:'good', pontos:10, comps:[9,9,8,9,9,8,8,9] },
      { texto:'Concordar que é psicológico', qualidade:'ok', pontos:5, comps:[3,3,3,3,3,3,3,3] },
      { texto:'Dizer que é fantasia', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Integrado', texto:'Avaliação multifatorial.', consequencia:'Diagnóstico preciso.', positivos:['Holístico'], negativos:[] },
      ok:{ titulo:'Simplificação', texto:'Parcialmente correto.', consequencia:'Perda de outras causas.', positivos:[], negativos:[] },
      bad:{ titulo:'Invalidação', texto:'Quebra confiança.', consequencia:'Paciente abandona.', positivos:[], negativos:[] }
    }
  },{
    fase:'Manejo',
    pergunta:'Se síndrome de ardência confirmada, qual tratamento?',
    opcoes:[
      { texto:'Substituir medicações se possível, suplementar deficiências, considerar antidepressivos tópicos/sistêmicos, acompanhamento psicológico', qualidade:'good', pontos:10, comps:[9,9,8,9,9,8,8,9] },
      { texto:'Prescrever anestésico tópico permanente', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Nenhum tratamento disponível', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Multidisciplinar', texto:'Abordagem integrada.', consequencia:'Melhora significativa.', positivos:['Eficaz'], negativos:[] },
      ok:{ titulo:'Limitado', texto:'Paliativa apenas.', consequencia:'Dependência de anestésico.', positivos:[], negativos:[] },
      bad:{ titulo:'Abandono', texto:'Sem esperança.', consequencia:'Depressão do paciente.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-12', area:'Clínica', complexidade:2, tipo:'Caso Clínico', tempo:12,
  titulo:'Rejeição a aparelho ortodôntico',
  contexto:'Paciente com aparelho há 2 meses. Queixa-se de desconforto persistente e quer remover.',
  personagem:{ emoji:'🦷', nome:'Paciente adolescente', detalhe:'Impaciente' },
  passos:[{
    fase:'Aconselhamento',
    pergunta:'Como motivar a continuidade?',
    opcoes:[
      { texto:'Ouvir, validar desconforto, explicar timeline, mostrar progresso, ajustar aperturas, propor metas intermediárias', qualidade:'good', pontos:10, comps:[8,9,8,9,8,8,8,9] },
      { texto:'Insistir que é normal sofrer', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Permitir remoção imediatamente', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Empático', texto:'Envolveu paciente.', consequencia:'Adesão melhorada.', positivos:['Motivador'], negativos:[] },
      ok:{ titulo:'Resistente', texto:'Minimizou queixa.', consequencia:'Risco de abandono.', positivos:[], negativos:[] },
      bad:{ titulo:'Capitulação', texto:'Sem resistência.', consequencia:'Falha do tratamento.', positivos:[], negativos:[] }
    }
  },{
    fase:'Ajuste técnico',
    pergunta:'Se dor persistente apesar de motivação, qual ação?',
    opcoes:[
      { texto:'Verificar fios soltos, brackets desalinhados, reduzir força, usar analgésicos por dias, considerar pausa estratégica', qualidade:'good', pontos:10, comps:[8,9,8,9,8,8,8,9] },
      { texto:'Manter mesmo protocolo', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Intensificar a força', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Adaptável', texto:'Ajustou conforme necessário.', consequencia:'Conforto e progresso.', positivos:['Flexível'], negativos:[] },
      ok:{ titulo:'Inflexível', texto:'Sem mudança.', consequencia:'Dor contínua.', positivos:[], negativos:[] },
      bad:{ titulo:'Prejudicial', texto:'Piorou situação.', consequencia:'Dano dentário.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-13', area:'Clínica', complexidade:2, tipo:'Caso Clínico', tempo:12,
  titulo:'Gengivite por aparelho de prótese',
  contexto:'Paciente com prótese total. Gengiva inflamada, eritematosa, edemaciada sob placa de prótese.',
  personagem:{ emoji:'🦷', nome:'Paciente idoso', detalhe:'Prótese' },
  passos:[{
    fase:'Diagnóstico',
    pergunta:'Como investigar a inflamação?',
    opcoes:[
      { texto:'Avaliar higiene da prótese, ajuste, frequência de remoção, presença de fungos, biópsia se ulceração', qualidade:'good', pontos:10, comps:[8,9,8,9,8,8,8,9] },
      { texto:'Prescrever antifúngico genérico', qualidade:'ok', pontos:5, comps:[4,4,4,5,4,4,4,5] },
      { texto:'Remover a prótese definitivamente', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Completo', texto:'Investigou causas.', consequencia:'Diagnóstico preciso.', positivos:['Sistemático'], negativos:[] },
      ok:{ titulo:'Presuntivo', texto:'Sem investigação.', consequencia:'Risco de falha.', positivos:[], negativos:[] },
      bad:{ titulo:'Destrutivo', texto:'Remove solução.', consequencia:'Dano permanente.', positivos:[], negativos:[] }
    }
  },{
    fase:'Tratamento',
    pergunta:'Se candidíase confirmada, qual protocolo?',
    opcoes:[
      { texto:'Higiene intensiva da prótese + antifúngico tópico + remoção noturna da prótese + possivelmente sistêmico', qualidade:'good', pontos:10, comps:[8,9,8,9,8,8,8,9] },
      { texto:'Apenas colutório antifúngico', qualidade:'ok', pontos:6, comps:[4,4,4,5,4,4,4,5] },
      { texto:'Remover placa com alta velocidade', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Multimodal', texto:'Múltiplas estratégias.', consequencia:'Remissão duradoura.', positivos:['Eficaz'], negativos:[] },
      ok:{ titulo:'Paliativo', texto:'Sem eliminar causa.', consequencia:'Recorrência.', positivos:[], negativos:[] },
      bad:{ titulo:'Lesivo', texto:'Danifica prótese.', consequencia:'Substituição necessária.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-14', area:'Clínica', complexidade:3, tipo:'Caso Clínico', tempo:15,
  titulo:'Bruxismo severo com desgaste',
  contexto:'Paciente jovem com desgaste oclusal severo, DTM sintomática, bruxismo noturno comprovado.',
  personagem:{ emoji:'🦷', nome:'Paciente jovem', detalhe:'Estressado' },
  passos:[{
    fase:'Investigação',
    pergunta:'Como abordar as múltiplas causas?',
    opcoes:[
      { texto:'Histórico de estresse, sono, hábitos, RX, DTM avaliação, possivelmente sleep study', qualidade:'good', pontos:10, comps:[9,9,8,9,9,8,8,9] },
      { texto:'Prescrever placa oclusal imediatamente', qualidade:'ok', pontos:5, comps:[4,4,4,5,4,4,4,5] },
      { texto:'Culpabilizar o paciente', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Multifatorial', texto:'Investigação integrada.', consequencia:'Diagnóstico completo.', positivos:['Profundo'], negativos:[] },
      ok:{ titulo:'Protetor apenas', texto:'Sem causa.', consequencia:'Sintoma escondido.', positivos:[], negativos:[] },
      bad:{ titulo:'Hostil', texto:'Sem empatia.', consequencia:'Perda de paciente.', positivos:[], negativos:[] }
    }
  },{
    fase:'Tratamento integrado',
    pergunta:'Qual estratégia multidisciplinar?',
    opcoes:[
      { texto:'Placa oclusal + terapia comportamental + possível CPAP se apneia + restauração futura se desgaste extremo', qualidade:'good', pontos:10, comps:[9,9,8,9,9,8,8,9] },
      { texto:'Apenas placa', qualidade:'ok', pontos:6, comps:[4,4,4,5,4,4,4,5] },
      { texto:'Restauração agressiva dos dentes', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Integrado', texto:'Atacou origem e proteção.', consequencia:'Melhora DTM e desgaste.', positivos:['Eficaz'], negativos:[] },
      ok:{ titulo:'Protetor', texto:'Sem causa raiz.', consequencia:'Sintomas contínuos.', positivos:[], negativos:[] },
      bad:{ titulo:'Prejudicial', texto:'Restaurações falham rapidamente.', consequencia:'Gasto desnecessário.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-15', area:'Clínica', complexidade:2, tipo:'Caso Clínico', tempo:12,
  titulo:'Cárie severa em bebê',
  contexto:'Criança 3 anos com cárie rampante nos incisivos superiores.',
  personagem:{ emoji:'🦷', nome:'Criança', detalhe:'Bebê' },
  passos:[{
    fase:'Educação familiar',
    pergunta:'Como orientar os pais?',
    opcoes:[
      { texto:'Explicar ECC, causa (mamadeiras açucaradas), mudar hábitos, higiene desde agora, fluorose prevenção', qualidade:'good', pontos:10, comps:[9,9,8,9,8,8,8,9] },
      { texto:'Simplesmente restaurar', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Dizer que dentes de leite caem de qualquer forma', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Preventivo', texto:'Educar pais.', consequencia:'Mudança comportamental.', positivos:['Futuro'], negativos:[] },
      ok:{ titulo:'Reativo', texto:'Sem mudança.', consequencia:'Novo episódio.', positivos:[], negativos:[] },
      bad:{ titulo:'Negligência', texto:'Prejudicial ao desenvolvimento.', consequencia:'Sequelas permanentes.', positivos:[], negativos:[] }
    }
  },{
    fase:'Tratamento',
    pergunta:'Qual abordagem pediátrica?',
    opcoes:[
      { texto:'Dessensibilização, restaurações atraumáticas se possível, fluoretos, acompanhamento próximo, evitar sedação se possível', qualidade:'good', pontos:10, comps:[8,9,8,9,8,8,8,9] },
      { texto:'Sedação profunda e restauração agressiva', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Extrair todos os dentes afetados', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Gentil', texto:'Respeitou desenvolvimento.', consequencia:'Criança cooperativa.', positivos:['Humano'], negativos:[] },
      ok:{ titulo:'Invasivo', texto:'Funciona mas traumatiza.', consequencia:'Fobia futura.', positivos:[], negativos:[] },
      bad:{ titulo:'Mutilador', texto:'Remove permanentes.', consequencia:'Dano irreversível.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-16', area:'Clínica', complexidade:3, tipo:'Caso Clínico', tempo:15,
  titulo:'Atipia epitelial premalign',
  contexto:'RX ou clínica revela lesão potencialmente maligna. Margem indefinida, cor anormal.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Fumante/etilista' },
  passos:[{
    fase:'Avaliação',
    pergunta:'Como proceder com suspeita oncológica?',
    opcoes:[
      { texto:'Foto documentação, dimensões, palpação, biópsia incisional, encaminhar para oncologista, não excisionar intacto', qualidade:'good', pontos:10, comps:[9,9,8,9,9,8,9,10] },
      { texto:'Observar por 3 meses', qualidade:'ok', pontos:3, comps:[2,2,2,2,2,2,2,2] },
      { texto:'Excisionar completo', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Correto', texto:'Protocolo oncológico.', consequencia:'Diagnóstico e estadiamento adequado.', positivos:['Seguro'], negativos:[] },
      ok:{ titulo:'Perigoso', texto:'Atraso diagnóstico.', consequencia:'Progressão.', positivos:[], negativos:[] },
      bad:{ titulo:'Prejudicial', texto:'Rompe integridade.', consequencia:'Classificação inadequada.', positivos:[], negativos:[] }
    }
  },{
    fase:'Conduta',
    pergunta:'Após biópsia com atipia, qual próximo passo?',
    opcoes:[
      { texto:'Encaminhar imediatamente para cirurgião de cabeça/pescoço, informar paciente, documentar tudo, acompanhar encaminhamento', qualidade:'good', pontos:10, comps:[10,10,9,10,9,9,9,10] },
      { texto:'Apenas acompanhar clinicamente', qualidade:'ok', pontos:3, comps:[2,2,2,2,2,2,2,2] },
      { texto:'Prescrever antifúngico para resolver', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Responsável', texto:'Garantiu especialista.', consequencia:'Sobrevida melhorada.', positivos:['Crítico'], negativos:[] },
      ok:{ titulo:'Negligência', texto:'Sem encaminhamento rápido.', consequencia:'Pior prognóstico.', positivos:[], negativos:[] },
      bad:{ titulo:'Criminoso', texto:'Negação de cuidado.', consequencia:'Morte evitável.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-17', area:'Clínica', complexidade:2, tipo:'Caso Clínico', tempo:12,
  titulo:'Infecção pós-exodontia',
  contexto:'Paciente 5 dias pós-exodontia. Dor, inchaço progressivo, febre baixa.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Pós-operatório' },
  passos:[{
    fase:'Diagnóstico',
    pergunta:'Como investigar infecção?',
    opcoes:[
      { texto:'Anamnese completa, inspeção, palpação, drenagem purulenta?, RX se possível, temperatura, antibióticos se positivo', qualidade:'good', pontos:10, comps:[9,9,8,9,8,8,8,9] },
      { texto:'Prescrever antibiótico preventivo', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Dizer que é normal', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Investigativo', texto:'Confirmou infecção.', consequencia:'Tratamento adequado.', positivos:['Direto'], negativos:[] },
      ok:{ titulo:'Presunção', texto:'Sem evidência.', consequencia:'Antib desnecessário.', positivos:[], negativos:[] },
      bad:{ titulo:'Negligência', texto:'Sem ação.', consequencia:'Progressão para severa.', positivos:[], negativos:[] }
    }
  },{
    fase:'Manejo',
    pergunta:'Se infecção localizada confirmada, qual protocolo?',
    opcoes:[
      { texto:'Drenagem se flutuante, desbridamento, antibiótico, analgesia, reavaliação em 48h, pós-op reforçado', qualidade:'good', pontos:10, comps:[9,9,8,9,8,8,8,9] },
      { texto:'Apenas antibiótico sistêmico', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Reoperação', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Completo', texto:'Drenagem + antib.', consequencia:'Resolução rápida.', positivos:['Eficaz'], negativos:[] },
      ok:{ titulo:'Paliativo', texto:'Sem drenagem mecânica.', consequencia:'Demora resolução.', positivos:[], negativos:[] },
      bad:{ titulo:'Agressivo', texto:'Trauma desnecessário.', consequencia:'Complicação pior.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-18', area:'Clínica', complexidade:2, tipo:'Caso Clínico', tempo:12,
  titulo:'Recessão gengival progressiva',
  contexto:'Paciente jovem com recessão gengival bilateral simétrica. Queixa sensibilidade.',
  personagem:{ emoji:'🦷', nome:'Paciente jovem', detalhe:'Higiene agressiva' },
  passos:[{
    fase:'Causa',
    pergunta:'Como identificar a causa?',
    opcoes:[
      { texto:'Observar técnica de escovação, avaliação periodontal, frenulo, trauma oclusal, hábitos (piercings), tabagismo', qualidade:'good', pontos:10, comps:[8,9,8,9,8,8,8,9] },
      { texto:'Prescrever enxaguante', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Restaurar agressivamente', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Investigativo', texto:'Causa identificada.', consequencia:'Prevenção possível.', positivos:['Preventivo'], negativos:[] },
      ok:{ titulo:'Simplista', texto:'Sem causa.', consequencia:'Progressão.', positivos:[], negativos:[] },
      bad:{ titulo:'Prejudicial', texto:'Piora com restauração.', consequencia:'Recessão + dano.', positivos:[], negativos:[] }
    }
  },{
    fase:'Tratamento',
    pergunta:'Qual estratégia de recuperação?',
    opcoes:[
      { texto:'Modificar técnica, dessensibilizante tópico, adesivo resinoso conservador, enxerto gengival se profundo e sintomático', qualidade:'good', pontos:10, comps:[8,9,8,9,8,8,8,9] },
      { texto:'Apenas enxerto', qualidade:'ok', pontos:6, comps:[4,4,4,5,4,4,4,5] },
      { texto:'Nada fazer', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Progressivo', texto:'Múltiplas opções.', consequencia:'Melhora progressiva.', positivos:['Inteligente'], negativos:[] },
      ok:{ titulo:'Agressivo', texto:'Sem tentar conservador.', consequencia:'Dano desnecessário.', positivos:[], negativos:[] },
      bad:{ titulo:'Pessimista', texto:'Sem esperança.', consequencia:'Progressão contínua.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-19', area:'Clínica', complexidade:3, tipo:'Caso Clínico', tempo:15,
  titulo:'DTM severa com travamento',
  contexto:'Paciente com dor articular severa, clicks, limitação de abertura, impossibilidade de comer.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Incapacitado' },
  passos:[{
    fase:'Avaliação',
    pergunta:'Como investigar DTM?',
    opcoes:[
      { texto:'Questionário DTM, palpação, RDC/TMD, testes específicos, RX/RM articular, avaliar oclusão', qualidade:'good', pontos:10, comps:[9,9,8,9,9,8,8,9] },
      { texto:'Prescrever antalgésico', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Prescrever repouso absoluto', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Integrado', texto:'Avaliação multifatorial.', consequencia:'Diagnóstico preciso.', positivos:['Profundo'], negativos:[] },
      ok:{ titulo:'Superficial', texto:'Sem investigação.', consequencia:'Diagnóstico incerto.', positivos:[], negativos:[] },
      bad:{ titulo:'Prejudicial', texto:'Imobilidade causa rigidez.', consequencia:'Piora do quadro.', positivos:[], negativos:[] }
    }
  },{
    fase:'Tratamento',
    pergunta:'Se deslocamento discal com travamento, qual ação?',
    opcoes:[
      { texto:'Fisioterapia ativa, relaxantes musculares, possível injeção articular, placa oclusal, raramente cirurgia', qualidade:'good', pontos:10, comps:[9,9,8,9,9,8,8,9] },
      { texto:'Cirurgia imediata', qualidade:'ok', pontos:3, comps:[2,2,2,2,2,2,2,2] },
      { texto:'Nada fazer', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Conservador primeiro', texto:'Prognóstico cirurgia pior.', consequencia:'Melhor desfecho.', positivos:['Sábio'], negativos:[] },
      ok:{ titulo:'Agressivo', texto:'Sem tentar conservador.', consequencia:'Risco de pior resultado.', positivos:[], negativos:[] },
      bad:{ titulo:'Negligência', texto:'Sofrimento desnecessário.', consequencia:'Incapacidade permanente.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MP-20', area:'Clínica', complexidade:2, tipo:'Caso Clínico', tempo:12,
  titulo:'Xerostomia medicamentosa',
  contexto:'Paciente idoso com múltiplas medicações. Queixa seca bucal, dificuldade mastigação, cáries rápidas.',
  personagem:{ emoji:'🦷', nome:'Paciente idoso', detalhe:'Polifarmacêutico' },
  passos:[{
    fase:'Diagnóstico',
    pergunta:'Como abordar xerostomia?',
    opcoes:[
      { texto:'Revisar todas as medicações com farmacêutico/médico, teste de fluxo salivar, avaliar possibilidade de substituição', qualidade:'good', pontos:10, comps:[9,9,8,9,9,8,8,9] },
      { texto:'Prescrever estimulante salivar', qualidade:'ok', pontos:6, comps:[4,4,4,5,4,4,4,5] },
      { texto:'Aceitar como normal da idade', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Interdisciplinar', texto:'Coordenou com médico.', consequencia:'Possível melhora.', positivos:['Integrado'], negativos:[] },
      ok:{ titulo:'Paliativo', texto:'Sem causa.', consequencia:'Sintoma contínuo.', positivos:[], negativos:[] },
      bad:{ titulo:'Resignação', texto:'Sem ação.', consequencia:'Cáries rampantes.', positivos:[], negativos:[] }
    }
  },{
    fase:'Manejo',
    pergunta:'Qual protocolo para prevenir complicações?',
    opcoes:[
      { texto:'Estimuladores salivares, fluoreto diário concentrado, higiene intensiva, recall cada 3 meses, avaliar candidíase regularmente', qualidade:'good', pontos:10, comps:[9,9,8,9,9,8,8,9] },
      { texto:'Apenas instruir higiene', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Restauração agressiva preventiva', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Preventivo', texto:'Múltiplas estratégias.', consequencia:'Preserva dentes.', positivos:['Eficaz'], negativos:[] },
      ok:{ titulo:'Incompleto', texto:'Sem fluoreto ou recall.', consequencia:'Cáries irão ocorrer.', positivos:[], negativos:[] },
      bad:{ titulo:'Destrutivo', texto:'Danos futuros.', consequencia:'Perda dentária.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MT-01', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Restauração em dente posterior',
  contexto:'Paciente necessita restauração em dente 36 com grande carga mastigatória.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Carga posterior' },
  passos:[{
    fase:'Seleção material',
    pergunta:'Qual material para dente posterior?',
    opcoes:[
      { texto:'Resina composta bulk-fill - durável, estético, resiste à carga', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Ionômero de vidro - frágil para posterior', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] },
      { texto:'Amálgama - robusto mas sem adesão', qualidade:'ok', pontos:6, comps:[6,6,6,6,6,6,6,6] }
    ],
    feedbacks:{
      good:{ titulo:'Excelente', texto:'Bulk-fill ideal para carga.', consequencia:'Duradoura.', positivos:['Moderno','Durável'], negativos:[] },
      bad:{ titulo:'Inadequado', texto:'Ionômero fraco.', consequencia:'Fracasso rápido.', positivos:[], negativos:['Fraco'] },
      ok:{ titulo:'Aceitável', texto:'Amálgama funciona.', consequencia:'Obra.', positivos:['Durável'], negativos:['Sem adesão'] }
    }
  }]
},{
  id:'MT-02', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Selante de fissura em criança',
  contexto:'Criança 8 anos, dente 16 sem cárie mas com fissuras profundas.',
  personagem:{ emoji:'🦷', nome:'Criança 8 anos', detalhe:'Prevenção' },
  passos:[{
    fase:'Seleção selante',
    pergunta:'Qual tipo de selante é apropriado?',
    opcoes:[
      { texto:'Resinoso fotopolimerizável visível - fácil remoção, reavaliação possível', qualidade:'good', pontos:10, comps:[8,8,9,8,8,9,8,9] },
      { texto:'Ionômero convencional - libera flúor mas difícil remover', qualidade:'ok', pontos:6, comps:[6,6,6,7,7,6,6,7] },
      { texto:'Sem selante - risco de cárie', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Ideal pediátrico', texto:'Resinoso padrão ouro.', consequencia:'Proteção duradoura.', positivos:['Prático','Removível'], negativos:[] },
      ok:{ titulo:'Funcional', texto:'Oferece flúor.', consequencia:'Difícil remover se falhar.', positivos:['Flúor'], negativos:['Fixo'] },
      bad:{ titulo:'Negligência', texto:'Risco de cárie.', consequencia:'Cárie rápida.', positivos:[], negativos:['Alto risco'] }
    }
  }]
},{
  id:'MT-03', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Cimento para coroa permanente',
  contexto:'Cimentação de coroa totalmente cerâmica em dente anterior.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Anterior' },
  passos:[{
    fase:'Seleção cimento',
    pergunta:'Qual cimento é mais apropriado?',
    opcoes:[
      { texto:'Cimento resinoso autoadesivo - melhor retenção, pode remover excessos, adequado para cerâmica', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Cimento óxido de zinco - fraco para anterior', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] },
      { texto:'Cimento à base de fosfato - trabalhoso', qualidade:'ok', pontos:6, comps:[4,4,4,4,4,4,4,4] }
    ],
    feedbacks:{
      good:{ titulo:'Moderno', texto:'Resinoso ideal.', consequencia:'Retenção superior.', positivos:['Estético','Durável'], negativos:[] },
      bad:{ titulo:'Fraco', texto:'Óxido de zinco inadequado.', consequencia:'Descolagem rápida.', positivos:[], negativos:['Fraco'] },
      ok:{ titulo:'Aceitável', texto:'Fosfato funciona.', consequencia:'Retenção aceitável.', positivos:[], negativos:['Trabalhoso'] }
    }
  }]
},{
  id:'MT-04', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Base cavitária em cárie profunda',
  contexto:'Preparo próximo à polpa, necessário isolamento e proteção.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Cárie profunda' },
  passos:[{
    fase:'Seleção base',
    pergunta:'Qual material de proteção?',
    opcoes:[
      { texto:'Hidróxido de cálcio ou cimento de ionômero - biocompatível, estimula dentina, previne inflamação', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Resina diretamente - sem barreira', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] },
      { texto:'Guta-percha - inadequada', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Protetor', texto:'Barreira biológica.', consequencia:'Menor sensibilidade.', positivos:['Conservador'], negativos:[] },
      bad:{ titulo:'Nocivo', texto:'Sem proteção.', consequencia:'Inflamação.', positivos:[], negativos:['Risco'] },
      bad:{ titulo:'Errado', texto:'Material inadequado.', consequencia:'Falha.', positivos:[], negativos:['Inadequado'] }
    }
  }]
},{
  id:'MT-05', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Clareador para tratamento caseiro',
  contexto:'Paciente deseja clarear dentes usando moldeira individualizada.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Estético' },
  passos:[{
    fase:'Seleção clareador',
    pergunta:'Qual concentração é segura?',
    opcoes:[
      { texto:'Peróxido de carbamida 10% - eficaz, seguro para uso caseiro, menor irritação', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Peróxido de hidrogênio 30% - irritação e sensibilidade', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Gel sem conhecimento - risco de dano', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Seguro', texto:'Concentração apropriada.', consequencia:'Clareamento eficaz sem dano.', positivos:['Equilibrado'], negativos:[] },
      ok:{ titulo:'Forte', texto:'Pode irritar gengiva.', consequencia:'Sensibilidade temporária.', positivos:[], negativos:[] },
      bad:{ titulo:'Perigoso', texto:'Sem supervisão.', consequencia:'Dano pulpar.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MT-06', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Placa de bruxismo noturno',
  contexto:'Paciente com bruxismo. Necessário protetor para evitar desgaste.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Bruxista' },
  passos:[{
    fase:'Tipo de placa',
    pergunta:'Qual tipo de placa é ideal?',
    opcoes:[
      { texto:'Placa rígida superior com guia molar - distribui forças, fácil limpeza, durável', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Placa flexível - confortável mas desgasta rápido', qualidade:'ok', pontos:6, comps:[5,5,5,5,5,5,5,5] },
      { texto:'Sem placa - deixar desgastar naturalmente', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Profissional', texto:'Rígida com guia.', consequencia:'Proteção duradoura.', positivos:['Durável'], negativos:[] },
      ok:{ titulo:'Confortável', texto:'Menos durável.', consequencia:'Reposição frequente.', positivos:['Conforto'], negativos:['Frágil'] },
      bad:{ titulo:'Negligência', texto:'Sem proteção.', consequencia:'Desgaste severo.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MT-07', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Adesivo dentinário para restauração',
  contexto:'Restauração em dente com dentina exposta. Necessário selamento adequado.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Dentina exposta' },
  passos:[{
    fase:'Seleção adesivo',
    pergunta:'Qual adesivo garante melhor selamento?',
    opcoes:[
      { texto:'Adesivo universal automorfologicamente à umidade - etch-and-rinse ou autogravante, todas gerações', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Adesivo older generation - técnica sensível à umidade', qualidade:'ok', pontos:5, comps:[4,4,4,4,4,4,4,4] },
      { texto:'Sem adesivo - usar selador', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Moderno', texto:'Adesivo universal.', consequencia:'Selamento superior.', positivos:['Versátil'], negativos:[] },
      ok:{ titulo:'Antigo', texto:'Funciona com cuidado.', consequencia:'Risco de falha.', positivos:[], negativos:[] },
      bad:{ titulo:'Inadequado', texto:'Sem ligação.', consequencia:'Microinfiltração.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MT-08', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Verniz de flúor tópico',
  contexto:'Criança com alto risco de cárie. Precisa proteção com flúor tópico.',
  personagem:{ emoji:'🦷', nome:'Criança', detalhe:'Alto risco' },
  passos:[{
    fase:'Seleção produto',
    pergunta:'Qual forma de flúor tópico?',
    opcoes:[
      { texto:'Verniz fluoretado (22000ppm) - aplicação profissional, aderência prolongada, seguro pediátrico', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Gel fluoretado 1000ppm - risco de ingestão em criança', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Sem flúor profissional', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Seguro pediátrico', texto:'Verniz apropriado.', consequencia:'Proteção sem risco.', positivos:['Eficaz'], negativos:[] },
      ok:{ titulo:'Risco ingestão', texto:'Gel para adulto.', consequencia:'Possível fluorose.', positivos:[], negativos:[] },
      bad:{ titulo:'Sem proteção', texto:'Sem aplicação.', consequencia:'Cáries progressivas.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MT-09', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Porta implante para prótese',
  contexto:'Planejamento de prótese sobre implante. Escolha de conexão critério.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Implante' },
  passos:[{
    fase:'Tipo de conexão',
    pergunta:'Qual tipo de conexão é vantajoso?',
    opcoes:[
      { texto:'Cone Morse - melhor retenção, menor afrouxamento, preserva crista', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Hexágono externo - mais comum mas com micro gaps', qualidade:'ok', pontos:6, comps:[5,5,5,5,5,5,5,5] },
      { texto:'Hexágono interno - intermediário', qualidade:'ok', pontos:6, comps:[5,5,5,5,5,5,5,5] }
    ],
    feedbacks:{
      good:{ titulo:'Avançado', texto:'Cone Morse.', consequencia:'Menos complicações.', positivos:['Superior'], negativos:[] },
      ok:{ titulo:'Comum', texto:'Hexágono externo.', consequencia:'Funcional.', positivos:['Acessível'], negativos:['Micro gaps'] },
      ok:{ titulo:'Intermediário', texto:'Hexágono interno.', consequencia:'Bom compromisso.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MT-10', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Cápsula de polimento final',
  contexto:'Acabamento final de restauração direta. Que sistema usar?',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Estético' },
  passos:[{
    fase:'Sistema de polimento',
    pergunta:'Qual sistema garante melhor polimento?',
    opcoes:[
      { texto:'Disco de polimento progressivo + pasta de polimento - mantém cor, brilho, margem controlada', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Taça de borracha apenas - rápido mas menos refinado', qualidade:'ok', pontos:6, comps:[4,4,4,4,4,4,4,4] },
      { texto:'Sem polimento', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Profissional', texto:'Sistema progressivo.', consequencia:'Restauração brilhante.', positivos:['Estético'], negativos:[] },
      ok:{ titulo:'Básico', texto:'Taça apenas.', consequencia:'Aceitável mas menos brilho.', positivos:[], negativos:[] },
      bad:{ titulo:'Negligência', texto:'Sem acabamento.', consequencia:'Aspecto opaco.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MT-11', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Material de endodontia',
  contexto:'Obturação de canal radicular. Escolha de material obturador.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'RCT' },
  passos:[{
    fase:'Material obturador',
    pergunta:'Qual é o padrão ouro?',
    opcoes:[
      { texto:'Guta-percha com cimento resinoso - biocompatível, selamento apical superior, removível', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Guta-percha com cimento à base de óxido de zinco - menos retentivo', qualidade:'ok', pontos:6, comps:[4,4,4,4,4,4,4,4] },
      { texto:'Apenas cimento', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Padrão ouro', texto:'Guta + resinoso.', consequencia:'Melhor prognóstico.', positivos:['Comprovado'], negativos:[] },
      ok:{ titulo:'Menos ideal', texto:'Óxido de zinco.', consequencia:'Aceitável.', positivos:[], negativos:[] },
      bad:{ titulo:'Inadequado', texto:'Sem guta.', consequencia:'Falha previsível.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MT-12', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Resina de preenchimento',
  contexto:'Restauração grande em dente posterior. Técnica incrementada.',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Restauração grande' },
  passos:[{
    fase:'Tipo de resina',
    pergunta:'Qual resina para increments grandes?',
    opcoes:[
      { texto:'Resina bulk-fill nanoparticulada - polimeriza profundamente, reduz tempo, menor contração', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Resina convencional microhíbrida - mais controle mas técnica sensível', qualidade:'ok', pontos:6, comps:[5,5,5,5,5,5,5,5] },
      { texto:'Compômero - fraco para posterior', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Ideal', texto:'Bulk-fill.', consequencia:'Restauração duradoura.', positivos:['Eficiente'], negativos:[] },
      ok:{ titulo:'Sensível', texto:'Convencional.', consequencia:'Risco de falha.', positivos:[], negativos:[] },
      bad:{ titulo:'Fraco', texto:'Compômero.', consequencia:'Falha rápida.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MT-13', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Dessensibilizante dentinário',
  contexto:'Paciente com sensibilidade cervical. Que produto usar?',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Sensível' },
  passos:[{
    fase:'Tipo dessensibilizante',
    pergunta:'Qual é mais eficaz?',
    opcoes:[
      { texto:'Adesivo dessensibilizante ou nitrato de potássio - oclusão tubular, reduz transmissão', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Enxaguante fluoretado - menos eficaz', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Sem tratamento', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Eficaz', texto:'Adesivo ou nitrato.', consequencia:'Alívio rápido.', positivos:['Comprovado'], negativos:[] },
      ok:{ titulo:'Paliativo', texto:'Fluoreto limitado.', consequencia:'Melhora leve.', positivos:[], negativos:[] },
      bad:{ titulo:'Sem ajuda', texto:'Sem intervenção.', consequencia:'Sensibilidade crônica.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MT-14', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Fio para limpeza interproximal',
  contexto:'Paciente com dificuldade interproximal. Qual fio recomendar?',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Higiene' },
  passos:[{
    fase:'Tipo de fio',
    pergunta:'Qual fio é mais efetivo?',
    opcoes:[
      { texto:'Fio dental expandível ou Superfloss - adapta a espaços variáveis, mais eficiente', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Fio convencional - pode não alcançar', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Palito de dente apenas', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Adaptável', texto:'Expandível.', consequencia:'Limpeza completa.', positivos:['Versátil'], negativos:[] },
      ok:{ titulo:'Limitado', texto:'Convencional.', consequencia:'Pode deixar resíduos.', positivos:[], negativos:[] },
      bad:{ titulo:'Inadequado', texto:'Palito.', consequencia:'Lesão gengival.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MT-15', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Matriz de contorno para restauração classe II',
  contexto:'Restauração posterior com cárie interproximal. Que matriz usar?',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Classe II' },
  passos:[{
    fase:'Sistema de matriz',
    pergunta:'Qual sistema permite melhor contato?',
    opcoes:[
      { texto:'Sistema de matriz automatizado (Tofflemire ou Sectional) - contato proximal seguro, anatomia correta', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Matriz simples de tira - menos controle', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Sem matriz', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Profissional', texto:'Matriz automática.', consequencia:'Contato perfeito.', positivos:['Preciso'], negativos:[] },
      ok:{ titulo:'Básico', texto:'Tira simples.', consequencia:'Contato incerto.', positivos:[], negativos:[] },
      bad:{ titulo:'Impossível', texto:'Sem matriz.', consequencia:'Sem contato proximal.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MT-16', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Corante para identificação de cárie',
  contexto:'Detecção de cárie em lesão escura. Qual corante usar?',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Cárie' },
  passos:[{
    fase:'Tipo de corante',
    pergunta:'Qual corante diferencia cárie ativa?',
    opcoes:[
      { texto:'Corante específico para cárie (formalina-fucsina) - específico para colágeno desnaturado', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Azul de metileno simples - menos específico', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Sem corante - visual apenas', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Específico', texto:'Corante especial.', consequencia:'Diagnóstico seguro.', positivos:['Eficaz'], negativos:[] },
      ok:{ titulo:'Genérico', texto:'Azul comum.', consequencia:'Menos preciso.', positivos:[], negativos:[] },
      bad:{ titulo:'Visual', texto:'Sem ajuda.', consequencia:'Risco de deixar cárie.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MT-17', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Abrasivo para desgaste dental seletivo',
  contexto:'Ajuste oclusal fino. Qual abrasivo usar?',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Oclusão' },
  passos:[{
    fase:'Granulação',
    pergunta:'Qual granulação para acabamento fino?',
    opcoes:[
      { texto:'Disco de granulação fina (220-400) progressiva - controle fino, bom acabamento', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Disco grosso (80-120) - remove muito rápido', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Lixa manual - lento demais', qualidade:'bad', pontos:2, comps:[2,2,2,2,2,2,2,2] }
    ],
    feedbacks:{
      good:{ titulo:'Preciso', texto:'Granulação fina.', consequencia:'Ajuste perfeito.', positivos:['Controle'], negativos:[] },
      ok:{ titulo:'Rápido', texto:'Disco grosso.', consequencia:'Risco excesso.', positivos:[], negativos:[] },
      bad:{ titulo:'Impraticável', texto:'Lixa manual.', consequencia:'Tempo excessivo.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MT-18', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Material para impressão dentada',
  contexto:'Impressão para prótese dentada. Material apropriado?',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Prótese' },
  passos:[{
    fase:'Material impressão',
    pergunta:'Qual material oferece melhor precisão?',
    opcoes:[
      { texto:'Alginato ou elastômero (silicone) - estável, detalhado, fácil manejo', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Pasta à base de óxido de zinco - menos detalhada', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Gesso - duro demais', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Moderno', texto:'Alginato/elastômero.', consequencia:'Prótese precisa.', positivos:['Detalhe'], negativos:[] },
      ok:{ titulo:'Antigo', texto:'Pasta ZnO.', consequencia:'Menos preciso.', positivos:[], negativos:[] },
      bad:{ titulo:'Inadequado', texto:'Gesso.', consequencia:'Impressão quebra.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MT-19', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Agente clareador para clareamento vital',
  contexto:'Clareamento de dente vital. Qual agente?',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Clareamento' },
  passos:[{
    fase:'Clareador vital',
    pergunta:'Qual agente para clareamento consultório?',
    opcoes:[
      { texto:'Peróxido de hidrogênio 35-40% - rápido, controlado, proteção gengival com barreira', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Concentração caseira em consultório - menos eficaz', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Sem barreira gengival', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Profissional', texto:'Concentração alta + barreira.', consequencia:'Clareamento rápido.', positivos:['Seguro'], negativos:[] },
      ok:{ titulo:'Fraco', texto:'Concentração baixa.', consequencia:'Resultado lento.', positivos:[], negativos:[] },
      bad:{ titulo:'Perigoso', texto:'Sem barreira.', consequencia:'Queimadura gengival.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'MT-20', area:'Materiais', complexidade:2, tipo:'Seleção Material', tempo:10,
  titulo:'Vedante de fenda de implante',
  contexto:'Vedação de implante após pré-fabricado. Qual selador?',
  personagem:{ emoji:'🦷', nome:'Paciente', detalhe:'Implante' },
  passos:[{
    fase:'Material vedante',
    pergunta:'Qual vedante é mais duradouro?',
    opcoes:[
      { texto:'Vedante de ouro ou resiliente específico - estável, reutilizável, fácil remoção', qualidade:'good', pontos:10, comps:[8,8,9,9,8,8,8,9] },
      { texto:'Cimento genérico - pode aderir permanentemente', qualidade:'ok', pontos:5, comps:[3,3,3,4,3,3,3,4] },
      { texto:'Sem vedante', qualidade:'bad', pontos:1, comps:[1,1,1,1,1,1,1,1] }
    ],
    feedbacks:{
      good:{ titulo:'Apropriado', texto:'Vedante específico.', consequencia:'Proteção duradoura.', positivos:['Removível'], negativos:[] },
      ok:{ titulo:'Improviso', texto:'Cimento genérico.', consequencia:'Pode prender.', positivos:[], negativos:[] },
      bad:{ titulo:'Negligência', texto:'Sem vedação.', consequencia:'Contaminação.', positivos:[], negativos:[] }
    }
  }]
},{
  id:'AG-21', titulo:'Agendamento: Limpeza com orientação',
  tipo:'agendamento', modalidade:'agendamento', tempo:30,
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
},{
  id:'AG-22', titulo:'Agendamento: Avaliação estética',
  tipo:'agendamento', modalidade:'agendamento', tempo:40,
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
},{
  id:'AG-23', titulo:'Agendamento: Tratamento de cárie',
  tipo:'agendamento', modalidade:'agendamento', tempo:45,
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
},{
  id:'AG-24', titulo:'Agendamento: Profilaxia e flúor',
  tipo:'agendamento', modalidade:'agendamento', tempo:20,
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
},{
  id:'AG-25', titulo:'Agendamento: Extração dentária',
  tipo:'agendamento', modalidade:'agendamento', tempo:60,
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
},{
  id:'AG-26', titulo:'Agendamento: Avalição de DTM',
  tipo:'agendamento', modalidade:'agendamento', tempo:50,
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
},{
  id:'AG-27', titulo:'Agendamento: Clareamento de consultório',
  tipo:'agendamento', modalidade:'agendamento', tempo:60,
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
},{
  id:'AG-28', titulo:'Agendamento: Periodontia básica',
  tipo:'agendamento', modalidade:'agendamento', tempo:40,
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
},{
  id:'AG-29', titulo:'Agendamento: Endodontia diagnóstica',
  tipo:'agendamento', modalidade:'agendamento', tempo:30,
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
},{
  id:'AG-30', titulo:'Agendamento: Ajuste oclusal simples',
  tipo:'agendamento', modalidade:'agendamento', tempo:25,
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
},{
  id:'AG-31', titulo:'Agendamento: Restauração de emergência',
  tipo:'agendamento', modalidade:'agendamento', tempo:45,
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
},{
  id:'AG-32', titulo:'Agendamento: Moldagem para prótese',
  tipo:'agendamento', modalidade:'agendamento', tempo:40,
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
},{
  id:'AG-33', titulo:'Agendamento: Instalação de implante',
  tipo:'agendamento', modalidade:'agendamento', tempo:90,
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
},{
  id:'AG-34', titulo:'Agendamento: Cimentação de coroa',
  tipo:'agendamento', modalidade:'agendamento', tempo:30,
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
},{
  id:'AG-35', titulo:'Agendamento: Remoção de aparelho ortodôntico',
  tipo:'agendamento', modalidade:'agendamento', tempo:45,
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
},{
  id:'AG-36', titulo:'Agendamento: Tratamento de afta',
  tipo:'agendamento', modalidade:'agendamento', tempo:20,
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
},{
  id:'AG-37', titulo:'Agendamento: Avaliação de bruxismo',
  tipo:'agendamento', modalidade:'agendamento', tempo:35,
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
},{
  id:'AG-38', titulo:'Agendamento: Sondagem periodontal',
  tipo:'agendamento', modalidade:'agendamento', tempo:40,
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
},{
  id:'AG-39', titulo:'Agendamento: Consulta de follow-up',
  tipo:'agendamento', modalidade:'agendamento', tempo:20,
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
    { id:'m4', nome:'Formul de avaliação' },
    { id:'m5', nome:'Pasta de polimento' }
  ], corretos:['m1','m4'] }
},{
  id:'AG-40', titulo:'Agendamento: Orientação de paciente novo',
  tipo:'agendamento', modalidade:'agendamento', tempo:25,
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
  ], corretos:['m1','m2','m4'] }

/* ============================================================
   AGENDAMENTOS CONSOLIDADOS (30 tipos)
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
