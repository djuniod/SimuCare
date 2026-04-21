/* ============================================================
   SimuCare — Cenários Consolidados (140 cenários — Abril 2026)
   ============================================================
   AGENDAMENTOS (60): AG-01 a AG-60
   MATERIAIS (40): MAT-01 a MAT-40
   CASOS CLÍNICOS (40): CC-01 a CC-40 [NÍVEL TÉCNICO/AUXILIAR]
   ============================================================ */

window.CENARIOS = [
{
  "id": "AG-01",
  "titulo": "Emergência: criança caiu e quebrou o dente da frente",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 3,
  "tempo": 3,
  "contexto": "O pai Rogério Paz liga assustado: a filha Sofia, 8 anos, acabou de cair na escola e quebrou o dente da frente. Está com sangramento, chorando, sem perda de consciência. Ele está a 15 minutos da clínica. Pergunta se pode ir direto.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome_crianca",
        "label": "Nome da criança",
        "obrigatorio": true
      },
      {
        "chave": "idade",
        "label": "Idade",
        "obrigatorio": true
      },
      {
        "chave": "responsavel",
        "label": "Responsável",
        "obrigatorio": true
      },
      {
        "chave": "telefone",
        "label": "Telefone",
        "obrigatorio": true
      },
      {
        "chave": "tipo_atendimento",
        "label": "Tipo de atendimento",
        "obrigatorio": true
      },
      {
        "chave": "grau_urgencia",
        "label": "Grau de urgência (1-5)",
        "obrigatorio": true
      },
      {
        "chave": "sangramento",
        "label": "Há sangramento ativo?",
        "obrigatorio": true
      },
      {
        "chave": "consciencia",
        "label": "Perda de consciência?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório de Emergência",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta",
        "sábado"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Luvas de nitrila"
      },
      {
        "id": "m2",
        "nome": "Máscara cirúrgica"
      },
      {
        "id": "m3",
        "nome": "Gaze estéril"
      },
      {
        "id": "m4",
        "nome": "Anestésico tópico"
      },
      {
        "id": "m5",
        "nome": "Lidocaína 2% com epinefrina"
      },
      {
        "id": "m6",
        "nome": "Seringa carpule"
      },
      {
        "id": "m7",
        "nome": "Agulha 30x20"
      },
      {
        "id": "m8",
        "nome": "Espelho intraoral"
      },
      {
        "id": "m9",
        "nome": "Explorador"
      },
      {
        "id": "m10",
        "nome": "Pinça"
      },
      {
        "id": "m11",
        "nome": "Sutura reabsorvível"
      },
      {
        "id": "m12",
        "nome": "Fio de seda"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8",
      "m9",
      "m10",
      "m11"
    ]
  },
  "competencias": [
    9,
    9,
    9,
    9,
    9,
    8,
    8,
    9
  ]
},
{
  "id": "AG-02",
  "titulo": "Limpeza de rotina com orientação de higiene",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 1,
  "tempo": 2,
  "contexto": "Paciente com acúmulo de biofilme solicita limpeza profissional. Paciente de baixo risco, mantém boa higiene.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "idade",
        "label": "Idade",
        "obrigatorio": true
      },
      {
        "chave": "freq_escova",
        "label": "Frequência de escovação (vezes/dia)",
        "obrigatorio": true
      },
      {
        "chave": "usa_fio",
        "label": "Usa fio dental?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "10:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Escova de dentes macia"
      },
      {
        "id": "m2",
        "nome": "Fio dental 50m"
      },
      {
        "id": "m3",
        "nome": "Clorexidina 0.12%"
      },
      {
        "id": "m4",
        "nome": "Pasta de dente com flúor"
      },
      {
        "id": "m5",
        "nome": "Raspador de língua"
      },
      {
        "id": "m6",
        "nome": "Taça de borracha"
      },
      {
        "id": "m7",
        "nome": "Pasta de polimento"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m6",
      "m7"
    ]
  },
  "competencias": [
    8,
    6,
    6,
    7,
    8,
    8,
    6,
    8
  ]
},
{
  "id": "AG-03",
  "titulo": "Restauração de cárie em primeiro molar",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente com cárie interproximal confirmada em primeiro molar inferior. Necessita restauração com resina.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "qual_dente",
        "label": "Qual dente afetado?",
        "obrigatorio": true
      },
      {
        "chave": "sensibilidade",
        "label": "Tem sensibilidade?",
        "obrigatorio": true
      },
      {
        "chave": "ultima_limpeza",
        "label": "Última limpeza quando?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:30",
        "09:30",
        "14:30",
        "15:30"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Dique de borracha"
      },
      {
        "id": "m2",
        "nome": "Resina composta bulk-fill"
      },
      {
        "id": "m3",
        "nome": "Adesivo universal"
      },
      {
        "id": "m4",
        "nome": "Matriz de contorno"
      },
      {
        "id": "m5",
        "nome": "Ácido fosfórico 37%"
      },
      {
        "id": "m6",
        "nome": "Luz de LED"
      },
      {
        "id": "m7",
        "nome": "Anestésico"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7"
    ]
  },
  "competencias": [
    7,
    8,
    8,
    9,
    8,
    7,
    7,
    8
  ]
},
{
  "id": "AG-04",
  "titulo": "Avaliação estética do sorriso",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente insatisfeito com estética dos dentes. Quer saber sobre possibilidades de melhoramento.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "insatisfacao",
        "label": "O que deseja melhorar?",
        "obrigatorio": true
      },
      {
        "chave": "expectativa",
        "label": "Expectativa realista?",
        "obrigatorio": true
      },
      {
        "chave": "orcamento",
        "label": "Orçamento definido?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Estético",
      "dias": [
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "10:00",
        "11:00",
        "14:00",
        "15:00",
        "16:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Guia de cor VITA"
      },
      {
        "id": "m2",
        "nome": "Espelho intraoral"
      },
      {
        "id": "m3",
        "nome": "Paquímetro digital"
      },
      {
        "id": "m4",
        "nome": "Câmera fotográfica"
      },
      {
        "id": "m5",
        "nome": "Tomografia digital"
      },
      {
        "id": "m6",
        "nome": "Software de simulação"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m4",
      "m6"
    ]
  },
  "competencias": [
    9,
    7,
    8,
    8,
    6,
    8,
    7,
    9
  ]
},
{
  "id": "AG-05",
  "titulo": "Extração dentária programada",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 3,
  "tempo": 2,
  "contexto": "Paciente com dente irrecuperável ou impactado necessita extração. Procedimento cirúrgico programado.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "qual_dente",
        "label": "Qual dente será extraído?",
        "obrigatorio": true
      },
      {
        "chave": "motivo",
        "label": "Motivo da extração?",
        "obrigatorio": true
      },
      {
        "chave": "ansiedade",
        "label": "Nível de ansiedade (1-5)?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Cirúrgico",
      "dias": [
        "segunda",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "14:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Fórceps para extração"
      },
      {
        "id": "m2",
        "nome": "Elevador dentário"
      },
      {
        "id": "m3",
        "nome": "Gaze estéril"
      },
      {
        "id": "m4",
        "nome": "Sutura reabsorvível"
      },
      {
        "id": "m5",
        "nome": "Anestésico potente"
      },
      {
        "id": "m6",
        "nome": "Seringa carpule"
      },
      {
        "id": "m7",
        "nome": "Agulha 30x20"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7"
    ]
  },
  "competencias": [
    8,
    9,
    8,
    9,
    9,
    8,
    8,
    9
  ]
},
{
  "id": "AG-06",
  "titulo": "Profilaxia com aplicação de flúor",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 1,
  "tempo": 2,
  "contexto": "Paciente em manutenção periódica. Limpeza simples e aplicação de flúor tópico.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "ultima_profilaxia",
        "label": "Última profilaxia quando?",
        "obrigatorio": true
      },
      {
        "chave": "alergias",
        "label": "Alergias conhecidas?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório C",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Taça de borracha"
      },
      {
        "id": "m2",
        "nome": "Pasta de polimento"
      },
      {
        "id": "m3",
        "nome": "Verniz de flúor 22000ppm"
      },
      {
        "id": "m4",
        "nome": "Fio dental"
      },
      {
        "id": "m5",
        "nome": "Gel fluoretado"
      },
      {
        "id": "m6",
        "nome": "Escova de dentes"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m6"
    ]
  },
  "competencias": [
    8,
    6,
    6,
    7,
    7,
    8,
    6,
    8
  ]
},
{
  "id": "AG-07",
  "titulo": "Tratamento de gengivite",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente com inflamação gengival leve. Necessita instruções de higiene e raspagem leve.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "sangramento",
        "label": "Intensidade do sangramento (1-5)?",
        "obrigatorio": true
      },
      {
        "chave": "fumante",
        "label": "É fumante?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Escova de dentes macia"
      },
      {
        "id": "m2",
        "nome": "Fio dental"
      },
      {
        "id": "m3",
        "nome": "Clorexidina gel"
      },
      {
        "id": "m4",
        "nome": "Pasta dentifrícia com flúor"
      },
      {
        "id": "m5",
        "nome": "Ultrassom periodontal"
      },
      {
        "id": "m6",
        "nome": "Enxaguante bucal"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6"
    ]
  },
  "competencias": [
    8,
    7,
    7,
    8,
    8,
    8,
    7,
    8
  ]
},
{
  "id": "AG-08",
  "titulo": "Ajuste oclusal simples",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente com desconforto oclusal após restauração. Necessita ajuste de contatos prematuros.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "qual_dente",
        "label": "Qual dente tem desconforto?",
        "obrigatorio": true
      },
      {
        "chave": "tipo_desconforto",
        "label": "Como se manifesta o desconforto?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:30",
        "09:30",
        "14:30",
        "15:30"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Papel carbono"
      },
      {
        "id": "m2",
        "nome": "Disco de desgaste fino"
      },
      {
        "id": "m3",
        "nome": "Disco de polimento"
      },
      {
        "id": "m4",
        "nome": "Pasta de polimento"
      },
      {
        "id": "m5",
        "nome": "Espelho intraoral"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5"
    ]
  },
  "competencias": [
    7,
    8,
    8,
    8,
    8,
    7,
    6,
    8
  ]
},
{
  "id": "AG-09",
  "titulo": "Moldagem para prótese dentária",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente edêntulo necessitando de prótese. Moldagem preliminar e final.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "tipo_prótese",
        "label": "Que tipo de prótese?",
        "obrigatorio": true
      },
      {
        "chave": "expectativa",
        "label": "Qual sua expectativa?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Protético",
      "dias": [
        "terça",
        "quinta"
      ],
      "horarios": [
        "10:00",
        "11:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Alginato"
      },
      {
        "id": "m2",
        "nome": "Espátula de moldagem"
      },
      {
        "id": "m3",
        "nome": "Bandeja de moldagem"
      },
      {
        "id": "m4",
        "nome": "Gesso tipo III"
      },
      {
        "id": "m5",
        "nome": "Elastômero"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4"
    ]
  },
  "competencias": [
    8,
    7,
    7,
    8,
    7,
    8,
    7,
    8
  ]
},
{
  "id": "AG-10",
  "titulo": "Aplicação de selante de fosseta",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 1,
  "tempo": 2,
  "contexto": "Criança com molares permanentes propensos a cárie. Selagem preventiva de fossetas e fissuras.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome da criança",
        "obrigatorio": true
      },
      {
        "chave": "idade",
        "label": "Qual é a idade?",
        "obrigatorio": true
      },
      {
        "chave": "higiene",
        "label": "Higiene oral atual?",
        "obrigatorio": true
      },
      {
        "chave": "historico_carie",
        "label": "Tem histórico de cárie?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Pediátrico",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "15:00",
        "16:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Selante de fosseta/fissura"
      },
      {
        "id": "m2",
        "nome": "Ácido fosfórico 37%"
      },
      {
        "id": "m3",
        "nome": "Primer"
      },
      {
        "id": "m4",
        "nome": "Microescova de limpeza"
      },
      {
        "id": "m5",
        "nome": "Gaze absorvente"
      },
      {
        "id": "m6",
        "nome": "Luz de LED"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m4",
      "m6"
    ]
  },
  "competencias": [
    8,
    6,
    7,
    8,
    8,
    8,
    7,
    8
  ]
},
{
  "id": "AG-11",
  "titulo": "Avaliação de bruxismo",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente com suspeita de bruxismo noturno. Necessita avaliação e possível confecção de placa oclusal.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "quem_refere",
        "label": "Quem notou (você/familiar)?",
        "obrigatorio": true
      },
      {
        "chave": "desgaste",
        "label": "Nota desgaste dentário?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "14:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Arco facial"
      },
      {
        "id": "m2",
        "nome": "Papel carbono"
      },
      {
        "id": "m3",
        "nome": "Moldeira de bruxismo"
      },
      {
        "id": "m4",
        "nome": "Elastômero"
      },
      {
        "id": "m5",
        "nome": "Resina acrílica"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5"
    ]
  },
  "competencias": [
    8,
    7,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "AG-12",
  "titulo": "Endodontia diagnóstica",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente com suspeita de envolvimento pulpar. Necessita avaliação de vitalidade e diagnóstico.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "tipo_dor",
        "label": "Tipo de dor (espontânea/provocada)?",
        "obrigatorio": true
      },
      {
        "chave": "duracao",
        "label": "Quanto tempo dura a dor?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Teste de vitalidade térmica"
      },
      {
        "id": "m2",
        "nome": "Teste elétrico"
      },
      {
        "id": "m3",
        "nome": "Radiografia periapical"
      },
      {
        "id": "m4",
        "nome": "Teste de percussão"
      },
      {
        "id": "m5",
        "nome": "Teste de mobilidade"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4"
    ]
  },
  "competencias": [
    8,
    8,
    8,
    9,
    8,
    8,
    7,
    8
  ]
},
{
  "id": "AG-13",
  "titulo": "Clareamento de consultório",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente deseja clarear dentes vitais. Clareamento profissional com peróxido concentrado.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "sensibilidade",
        "label": "Tem sensibilidade atual?",
        "obrigatorio": true
      },
      {
        "chave": "expectativa",
        "label": "Cor final desejada?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Estético",
      "dias": [
        "terça",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "10:00",
        "11:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Peróxido de hidrogênio 35%"
      },
      {
        "id": "m2",
        "nome": "Barreira gengival"
      },
      {
        "id": "m3",
        "nome": "Escala de cor VITA"
      },
      {
        "id": "m4",
        "nome": "Gel dessensibilizante"
      },
      {
        "id": "m5",
        "nome": "Protetor labial"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5"
    ]
  },
  "competencias": [
    8,
    7,
    8,
    8,
    7,
    8,
    7,
    9
  ]
},
{
  "id": "AG-14",
  "titulo": "Avaliação de DTM",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente com sintomas de disfunção temporomandibular. Avaliação completa necessária.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "dor_articular",
        "label": "Onde sente dor?",
        "obrigatorio": true
      },
      {
        "chave": "clicks",
        "label": "Tem estalos ou clicks?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório B",
      "dias": [
        "terça",
        "quarta",
        "quinta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Eletromiografia"
      },
      {
        "id": "m2",
        "nome": "Arco facial"
      },
      {
        "id": "m3",
        "nome": "Palpador de articulação"
      },
      {
        "id": "m4",
        "nome": "Tomografia articular"
      },
      {
        "id": "m5",
        "nome": "Ressonância magnética"
      }
    ],
    "corretos": [
      "m2",
      "m3",
      "m4"
    ]
  },
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "AG-15",
  "titulo": "Reparação de restauração com defeito",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Restauração anterior com defeito marginal. Necessita reparo.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "qual_dente",
        "label": "Qual dente?",
        "obrigatorio": true
      },
      {
        "chave": "tipo_defeito",
        "label": "Tipo de defeito?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Estético",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Resina composta"
      },
      {
        "id": "m2",
        "nome": "Adesivo universal"
      },
      {
        "id": "m3",
        "nome": "Ácido fosfórico"
      },
      {
        "id": "m4",
        "nome": "Matriz de contorno"
      },
      {
        "id": "m5",
        "nome": "Luz de LED"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m5"
    ]
  },
  "competencias": [
    7,
    8,
    8,
    8,
    8,
    7,
    7,
    8
  ]
},
{
  "id": "AG-16",
  "titulo": "Consulta de reavaliação pós-tratamento",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 1,
  "tempo": 1,
  "contexto": "Paciente em acompanhamento pós-tratamento. Reavaliação de resposta e orientações finais.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "qual_tratamento",
        "label": "Que tratamento foi feito?",
        "obrigatorio": true
      },
      {
        "chave": "como_esta",
        "label": "Como está se sentindo?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "10:00",
        "14:00",
        "15:00",
        "16:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Instrumentos de inspeção"
      },
      {
        "id": "m2",
        "nome": "Fotografia intraoral"
      },
      {
        "id": "m3",
        "nome": "Radiografia periapical"
      },
      {
        "id": "m4",
        "nome": "Formulário de avaliação"
      },
      {
        "id": "m5",
        "nome": "Pasta de polimento"
      }
    ],
    "corretos": [
      "m1",
      "m3",
      "m4"
    ]
  },
  "competencias": [
    8,
    6,
    6,
    7,
    7,
    8,
    6,
    8
  ]
},
{
  "id": "AG-17",
  "titulo": "Avaliação de novo paciente",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente primeira vez na clínica. Anamnese completa e orientação de procedimentos.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "motivo_visita",
        "label": "Principal queixa?",
        "obrigatorio": true
      },
      {
        "chave": "ultima_visita",
        "label": "Última visita ao dentista quando?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Questionário de anamnese"
      },
      {
        "id": "m2",
        "nome": "Radiografia panorâmica"
      },
      {
        "id": "m3",
        "nome": "Fotografias faciais"
      },
      {
        "id": "m4",
        "nome": "Glossário de procedimentos"
      },
      {
        "id": "m5",
        "nome": "Formulário de consentimento"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m5"
    ]
  },
  "competencias": [
    9,
    6,
    7,
    7,
    7,
    8,
    7,
    8
  ]
},
{
  "id": "AG-18",
  "titulo": "Tratamento de afta",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 1,
  "tempo": 1,
  "contexto": "Paciente com afta dolorosa. Diagnóstico e tratamento.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "localizacao",
        "label": "Onde está a afta?",
        "obrigatorio": true
      },
      {
        "chave": "duracao",
        "label": "Há quanto tempo?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "10:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Cauterizador de afta"
      },
      {
        "id": "m2",
        "nome": "Gel anestésico"
      },
      {
        "id": "m3",
        "nome": "Enxaguante bucal"
      },
      {
        "id": "m4",
        "nome": "Protetor oral"
      },
      {
        "id": "m5",
        "nome": "Antiviral"
      }
    ],
    "corretos": [
      "m2",
      "m3",
      "m4"
    ]
  },
  "competencias": [
    8,
    6,
    7,
    7,
    7,
    8,
    7,
    8
  ]
},
{
  "id": "AG-19",
  "titulo": "Sondagem periodontal",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente com suspeita de periodontite. Sondagem completa e documentação.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "sangramento",
        "label": "Sangramento durante sondagem?",
        "obrigatorio": true
      },
      {
        "chave": "ultimo_rx",
        "label": "Último RX quando?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:30",
        "09:30",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Sonda periodontal milimetrada"
      },
      {
        "id": "m2",
        "nome": "Explorador duplo"
      },
      {
        "id": "m3",
        "nome": "Espelho intraoral"
      },
      {
        "id": "m4",
        "nome": "Papel carbono"
      },
      {
        "id": "m5",
        "nome": "Gaze"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3"
    ]
  },
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    7,
    8
  ]
},
{
  "id": "AG-20",
  "titulo": "Limpeza supragengival com ultrassom",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Remoção de tártaro com ultrassom em paciente com gengivite.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "sangramento",
        "label": "Sangra durante escovação?",
        "obrigatorio": true
      },
      {
        "chave": "fumante",
        "label": "É fumante?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Ultrassom periodontal"
      },
      {
        "id": "m2",
        "nome": "Pontas ultrassônicas"
      },
      {
        "id": "m3",
        "nome": "Aspirador de saliva"
      },
      {
        "id": "m4",
        "nome": "Clorexidina gel"
      },
      {
        "id": "m5",
        "nome": "Pasta de polimento"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m5"
    ]
  },
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    7,
    8
  ]
},
{
  "id": "AG-21",
  "titulo": "Restauração com resina direct",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Restauração estética anterior com resina fotopolimerizável.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "motivo",
        "label": "Motivo (cárie/fratura)?",
        "obrigatorio": true
      },
      {
        "chave": "tamanho",
        "label": "Tamanho da lesão?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Estético",
      "dias": [
        "terça",
        "quarta",
        "sexta"
      ],
      "horarios": [
        "10:00",
        "11:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Resina micropartículas"
      },
      {
        "id": "m2",
        "nome": "Adesivo"
      },
      {
        "id": "m3",
        "nome": "Guia de cor VITA"
      },
      {
        "id": "m4",
        "nome": "Lâmina de polímero"
      },
      {
        "id": "m5",
        "nome": "Discos de polimento"
      },
      {
        "id": "m6",
        "nome": "Ácido fosfórico"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m6"
    ]
  },
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "AG-22",
  "titulo": "Cimentação de coroa protética",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Instalação de coroa protética sobre dente preparado.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "qual_coroa",
        "label": "Qual dente receberá coroa?",
        "obrigatorio": true
      },
      {
        "chave": "tipo_coroa",
        "label": "Tipo (cerâmica/ouro)?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Protético",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Cimento resinoso dual"
      },
      {
        "id": "m2",
        "nome": "Fio de retração gengival"
      },
      {
        "id": "m3",
        "nome": "Papel de carbono"
      },
      {
        "id": "m4",
        "nome": "Escova de dentes"
      },
      {
        "id": "m5",
        "nome": "Espelho"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3"
    ]
  },
  "competencias": [
    8,
    8,
    8,
    9,
    9,
    8,
    8,
    8
  ]
},
{
  "id": "AG-23",
  "titulo": "Remoção de aparelho ortodôntico",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Remoção de aparelho fixo e planejamento de contenção.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "tempo_uso",
        "label": "Por quanto tempo usou aparelho?",
        "obrigatorio": true
      },
      {
        "chave": "satisfacao",
        "label": "Satisfeito com resultado?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Ortho",
      "dias": [
        "segunda",
        "quarta",
        "quinta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "14:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Alicate para bracket"
      },
      {
        "id": "m2",
        "nome": "Pasta de remoção"
      },
      {
        "id": "m3",
        "nome": "Escova de remoção"
      },
      {
        "id": "m4",
        "nome": "Retentor fixo"
      },
      {
        "id": "m5",
        "nome": "Contentor removível"
      }
    ],
    "corretos": [
      "m1",
      "m3",
      "m4",
      "m5"
    ]
  },
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "AG-24",
  "titulo": "Avaliação de halitose",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Diagnóstico de origem de halitose e plano de tratamento.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "tipo_halitose",
        "label": "Matinal ou persistente?",
        "obrigatorio": true
      },
      {
        "chave": "historico",
        "label": "Histórico familiar?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:30",
        "10:00",
        "14:30",
        "15:30"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Halímetro"
      },
      {
        "id": "m2",
        "nome": "Raspador de língua"
      },
      {
        "id": "m3",
        "nome": "Enxaguante com clorexidina"
      },
      {
        "id": "m4",
        "nome": "Escova de língua"
      },
      {
        "id": "m5",
        "nome": "Teste organoléptico"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3"
    ]
  },
  "competencias": [
    8,
    7,
    8,
    8,
    7,
    8,
    7,
    8
  ]
},
{
  "id": "AG-25",
  "titulo": "Instalação de implante",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 3,
  "tempo": 3,
  "contexto": "Cirurgia de colocação de implante osseointegrado.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "regiao",
        "label": "Qual região do implante?",
        "obrigatorio": true
      },
      {
        "chave": "densidade_ossea",
        "label": "Densidade óssea adequada?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Bloco Cirúrgico",
      "dias": [
        "segunda",
        "quarta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Implante dentário"
      },
      {
        "id": "m2",
        "nome": "Abutment"
      },
      {
        "id": "m3",
        "nome": "Guia cirúrgico"
      },
      {
        "id": "m4",
        "nome": "Sutura reabsorvível"
      },
      {
        "id": "m5",
        "nome": "Enzimas hemostáticas"
      },
      {
        "id": "m6",
        "nome": "Anestésico potente"
      },
      {
        "id": "m7",
        "nome": "Seringa carpule"
      }
    ],
    "corretos": [
      "m1",
      "m3",
      "m4",
      "m6",
      "m7"
    ]
  },
  "competencias": [
    8,
    9,
    8,
    10,
    10,
    8,
    9,
    9
  ]
},
{
  "id": "AG-26",
  "titulo": "Limpeza de implante",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Manutenção profissional de implante.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "quando_implante",
        "label": "Quando foi colocado?",
        "obrigatorio": true
      },
      {
        "chave": "higiene",
        "label": "Como está higienizando?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Cirúrgico",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "14:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Ultrassom específico"
      },
      {
        "id": "m2",
        "nome": "Curetas de Gracey"
      },
      {
        "id": "m3",
        "nome": "Escova específica"
      },
      {
        "id": "m4",
        "nome": "Agente antimicrobiano"
      },
      {
        "id": "m5",
        "nome": "Enxaguante"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m4"
    ]
  },
  "competencias": [
    8,
    8,
    8,
    9,
    9,
    8,
    8,
    8
  ]
},
{
  "id": "AG-27",
  "titulo": "Consulta de emergência dental",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 3,
  "tempo": 2,
  "contexto": "Atendimento urgente para dor, trauma ou infecção.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "tipo_emergencia",
        "label": "Tipo de emergência?",
        "obrigatorio": true
      },
      {
        "chave": "duracao",
        "label": "Há quanto tempo?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório de Emergência",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "07:00",
        "08:00",
        "11:00",
        "12:00",
        "17:00",
        "18:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Anestésico potente"
      },
      {
        "id": "m2",
        "nome": "Dique de borracha"
      },
      {
        "id": "m3",
        "nome": "Cimento temporário"
      },
      {
        "id": "m4",
        "nome": "Analgésicos"
      },
      {
        "id": "m5",
        "nome": "Antibióticos"
      },
      {
        "id": "m6",
        "nome": "Gaze estéril"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4"
    ]
  },
  "competencias": [
    9,
    9,
    9,
    9,
    9,
    8,
    9,
    9
  ]
},
{
  "id": "AG-28",
  "titulo": "Avaliação pós-trauma dentário",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Avaliação completa pós-trauma com testes de vitalidade.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "quando_trauma",
        "label": "Quando foi o trauma?",
        "obrigatorio": true
      },
      {
        "chave": "tipo_trauma",
        "label": "Tipo de trauma?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "14:00",
        "15:00",
        "16:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Teste de vitalidade térmica"
      },
      {
        "id": "m2",
        "nome": "Teste de percussão"
      },
      {
        "id": "m3",
        "nome": "Radiografia periapical"
      },
      {
        "id": "m4",
        "nome": "Escala de mobilidade"
      },
      {
        "id": "m5",
        "nome": "Documentação fotográfica"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5"
    ]
  },
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "AG-29",
  "titulo": "Frenectomia",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Cirurgia para remoção de freio labial ou lingual.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "qual_freio",
        "label": "Qual freio?",
        "obrigatorio": true
      },
      {
        "chave": "motivo",
        "label": "Motivo da cirurgia?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Cirúrgico",
      "dias": [
        "segunda",
        "quarta",
        "quinta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "14:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Bisturi fino"
      },
      {
        "id": "m2",
        "nome": "Tesoura de Metzenbaum"
      },
      {
        "id": "m3",
        "nome": "Sutura reabsorvível"
      },
      {
        "id": "m4",
        "nome": "Cauterizador"
      },
      {
        "id": "m5",
        "nome": "Pinça de dissecção"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m5"
    ]
  },
  "competencias": [
    8,
    9,
    8,
    9,
    9,
    8,
    8,
    9
  ]
},
{
  "id": "AG-30",
  "titulo": "Higienização de aparelho removível",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 1,
  "tempo": 1,
  "contexto": "Orientação de paciente sobre limpeza de prótese removível.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "tempo_uso",
        "label": "Há quanto tempo usa prótese?",
        "obrigatorio": true
      },
      {
        "chave": "dificuldades",
        "label": "Tem dificuldades na limpeza?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "10:00",
        "14:00",
        "15:00",
        "16:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Solução efervescente"
      },
      {
        "id": "m2",
        "nome": "Escova macia"
      },
      {
        "id": "m3",
        "nome": "Água morna"
      },
      {
        "id": "m4",
        "nome": "Sabão neutro"
      },
      {
        "id": "m5",
        "nome": "Recipiente para imersão"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m4"
    ]
  },
  "competencias": [
    8,
    6,
    7,
    8,
    7,
    8,
    7,
    8
  ]
},
{
  "id": "AG-31",
  "titulo": "Fluorose dental - avaliação",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 1,
  "tempo": 1,
  "contexto": "Criança com manchas em dentes. Diagnóstico de fluorose.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome da criança",
        "obrigatorio": true
      },
      {
        "chave": "idade",
        "label": "Idade",
        "obrigatorio": true
      },
      {
        "chave": "historia_fluorose",
        "label": "História de exposição ao flúor?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Pediátrico",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "15:00",
        "16:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Índice de fluorose de Dean"
      },
      {
        "id": "m2",
        "nome": "Câmera fotográfica"
      },
      {
        "id": "m3",
        "nome": "Luz LED"
      },
      {
        "id": "m4",
        "nome": "Teste de vitalidade"
      },
      {
        "id": "m5",
        "nome": "Espelho"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3"
    ]
  },
  "competencias": [
    8,
    7,
    7,
    8,
    7,
    8,
    7,
    8
  ]
},
{
  "id": "AG-32",
  "titulo": "Controle de biofilme em criança",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 1,
  "tempo": 1,
  "contexto": "Criança com acúmulo de biofilme. Orientação de higiene lúdica.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome da criança",
        "obrigatorio": true
      },
      {
        "chave": "idade",
        "label": "Idade",
        "obrigatorio": true
      },
      {
        "chave": "freq_escova",
        "label": "Frequência de escovação?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Pediátrico",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "10:00",
        "11:00",
        "15:00",
        "16:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Revelador de biofilme"
      },
      {
        "id": "m2",
        "nome": "Escova de dentes colorida"
      },
      {
        "id": "m3",
        "nome": "Fio dental infantil"
      },
      {
        "id": "m4",
        "nome": "Pasta de dente com flúor"
      },
      {
        "id": "m5",
        "nome": "Material didático"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5"
    ]
  },
  "competencias": [
    9,
    6,
    7,
    8,
    8,
    8,
    7,
    8
  ]
},
{
  "id": "AG-33",
  "titulo": "Avaliação de oclusão",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Avaliação completa da oclusão em criança em desenvolvimento.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome da criança",
        "obrigatorio": true
      },
      {
        "chave": "idade",
        "label": "Idade",
        "obrigatorio": true
      },
      {
        "chave": "queixa",
        "label": "Queixa principal?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Pediátrico",
      "dias": [
        "segunda",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "14:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Papel carbono"
      },
      {
        "id": "m2",
        "nome": "Espelho intraoral"
      },
      {
        "id": "m3",
        "nome": "Sonda exploradora"
      },
      {
        "id": "m4",
        "nome": "Arco facial"
      },
      {
        "id": "m5",
        "nome": "Radiografia panorâmica"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m5"
    ]
  },
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "AG-34",
  "titulo": "Orientação de paciente ansioso",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente com alta ansiedade. Necessita acolhimento e orientação antes do procedimento.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "nivel_ansiedade",
        "label": "Nível de ansiedade (1-10)?",
        "obrigatorio": true
      },
      {
        "chave": "experiencia_anterior",
        "label": "Experiência anterior?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Material didático"
      },
      {
        "id": "m2",
        "nome": "Vídeo educativo"
      },
      {
        "id": "m3",
        "nome": "Música ambiente"
      },
      {
        "id": "m4",
        "nome": "Técnicas de relaxamento"
      },
      {
        "id": "m5",
        "nome": "Anestésico tópico"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m5"
    ]
  },
  "competencias": [
    10,
    7,
    7,
    7,
    7,
    8,
    8,
    9
  ]
},
{
  "id": "AG-35",
  "titulo": "Acompanhamento de implante",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Avaliação periódica de implante osseointegrado após cirurgia.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "quando_cirurgia",
        "label": "Quando foi a cirurgia?",
        "obrigatorio": true
      },
      {
        "chave": "sintomas",
        "label": "Tem sintomas?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Cirúrgico",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Radiografia periapical"
      },
      {
        "id": "m2",
        "nome": "Sonda periodontal"
      },
      {
        "id": "m3",
        "nome": "Teste de mobilidade"
      },
      {
        "id": "m4",
        "nome": "Ultrassom avaliativo"
      },
      {
        "id": "m5",
        "nome": "Teste de ressonância"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3"
    ]
  },
  "competencias": [
    8,
    8,
    8,
    9,
    8,
    8,
    7,
    8
  ]
},
{
  "id": "AG-36",
  "titulo": "Retratamento endodôntico",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 3,
  "tempo": 3,
  "contexto": "Dente com falha no tratamento anterior. Necessita retratamento.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "qual_dente",
        "label": "Qual dente?",
        "obrigatorio": true
      },
      {
        "chave": "quando_original",
        "label": "Quando foi o primeiro tratamento?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "14:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Broca endodôntica"
      },
      {
        "id": "m2",
        "nome": "Dique de borracha"
      },
      {
        "id": "m3",
        "nome": "Limas rotatórias"
      },
      {
        "id": "m4",
        "nome": "Hipoclorito de sódio"
      },
      {
        "id": "m5",
        "nome": "Guta-percha"
      },
      {
        "id": "m6",
        "nome": "Selador endodôntico"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6"
    ]
  },
  "competencias": [
    8,
    9,
    9,
    10,
    9,
    8,
    8,
    9
  ]
},
{
  "id": "AG-37",
  "titulo": "Avaliação de cárie radicular",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente idoso com recessão gengival e cárie radicular.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "idade",
        "label": "Idade",
        "obrigatorio": true
      },
      {
        "chave": "sensibilidade",
        "label": "Tem sensibilidade radicular?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Resina de baixa contração"
      },
      {
        "id": "m2",
        "nome": "Adesivo universal"
      },
      {
        "id": "m3",
        "nome": "Dique de borracha"
      },
      {
        "id": "m4",
        "nome": "Cimento de vidro ionomérico"
      },
      {
        "id": "m5",
        "nome": "Gel dessensibilizante"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5"
    ]
  },
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "AG-38",
  "titulo": "Ajuste de prótese removível",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 1,
  "tempo": 1,
  "contexto": "Ajuste de prótese removível em paciente com desconforto.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "onde_dor",
        "label": "Onde dói?",
        "obrigatorio": true
      },
      {
        "chave": "quando_feita",
        "label": "Quando foi feita a prótese?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Protético",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "14:00",
        "15:00",
        "16:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Pasta marcadora"
      },
      {
        "id": "m2",
        "nome": "Fresa de ajuste"
      },
      {
        "id": "m3",
        "nome": "Disco de polimento"
      },
      {
        "id": "m4",
        "nome": "Pasta de polimento"
      },
      {
        "id": "m5",
        "nome": "Espelho"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4"
    ]
  },
  "competencias": [
    8,
    7,
    7,
    8,
    7,
    7,
    7,
    8
  ]
},
{
  "id": "AG-39",
  "titulo": "Fotopolimerização segura",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 1,
  "tempo": 1,
  "contexto": "Restauração com protocolo seguro de fotopolimerização.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "tipo_restauracao",
        "label": "Tipo de restauração?",
        "obrigatorio": true
      },
      {
        "chave": "sensibilidade",
        "label": "Tem sensibilidade?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "10:00",
        "14:00",
        "15:00",
        "16:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Luz de LED"
      },
      {
        "id": "m2",
        "nome": "Proteção ocular"
      },
      {
        "id": "m3",
        "nome": "Máscara facial"
      },
      {
        "id": "m4",
        "nome": "Ponta com filtro"
      },
      {
        "id": "m5",
        "nome": "Manejo de tempo"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m4"
    ]
  },
  "competencias": [
    8,
    7,
    7,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "AG-40",
  "titulo": "Reparação de fratura de resina",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 1,
  "tempo": 1,
  "contexto": "Reparação de restauração de resina com fratura marginal.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "qual_dente",
        "label": "Qual dente?",
        "obrigatorio": true
      },
      {
        "chave": "tipo_fratura",
        "label": "Tipo de fratura?",
        "obrigatorio": true
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "10:00",
        "14:00",
        "15:00",
        "16:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Resina composta"
      },
      {
        "id": "m2",
        "nome": "Adesivo"
      },
      {
        "id": "m3",
        "nome": "Ácido fosfórico"
      },
      {
        "id": "m4",
        "nome": "Matriz de contorno"
      },
      {
        "id": "m5",
        "nome": "Luz de LED"
      },
      {
        "id": "m6",
        "nome": "Discos de polimento"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m5",
      "m6"
    ]
  },
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    7,
    7,
    8
  ]
},
{
  "id": "AG-41",
  "titulo": "Sondagem periodontal em paciente com gengivite",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente com inflamação gengival, sangramento ao passar fio dental. Necessário fazer sondagem periodontal para avaliar profundidade de bolsas.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "tempo_sintomas",
        "label": "Há quanto tempo tem sangramento?",
        "obrigatorio": true
      },
      {
        "chave": "fumante",
        "label": "É fumante?",
        "obrigatorio": true
      },
      {
        "chave": "dieta",
        "label": "Tem dificuldade em higienizar?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório B",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Sonda periodontal"
      },
      {
        "id": "m2",
        "nome": "Espelho intraoral"
      },
      {
        "id": "m3",
        "nome": "Explorador"
      },
      {
        "id": "m4",
        "nome": "Luvas de nitrila"
      },
      {
        "id": "m5",
        "nome": "Máscara cirúrgica"
      },
      {
        "id": "m6",
        "nome": "Gaze estéril"
      },
      {
        "id": "m7",
        "nome": "Clorexidina 0.12%"
      },
      {
        "id": "m8",
        "nome": "Seringa de irrigação"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8"
    ]
  },
  "area": "Periodontia",
  "competencias": [
    8,
    7,
    8,
    8,
    7,
    7,
    8,
    7
  ]
},
{
  "id": "AG-42",
  "titulo": "Avaliação de osseointegração após 4 meses",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 3,
  "tempo": 3,
  "contexto": "Paciente com implante colocado há 4 meses. Necessário avaliar estabilidade e planejar próxima etapa (moldagem ou carga).",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "data_implante",
        "label": "Data da colocação do implante",
        "obrigatorio": true
      },
      {
        "chave": "mobilidade_percebida",
        "label": "Paciente sente movimento?",
        "obrigatorio": true
      },
      {
        "chave": "dor",
        "label": "Tem dor na região?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Implantologia",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "11:00",
        "13:00",
        "14:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Teste de percussão (martelo)"
      },
      {
        "id": "m2",
        "nome": "Radiografia periapical"
      },
      {
        "id": "m3",
        "nome": "Sonda periodontal"
      },
      {
        "id": "m4",
        "nome": "Espelho intraoral"
      },
      {
        "id": "m5",
        "nome": "Luvas de nitrila"
      },
      {
        "id": "m6",
        "nome": "Anestésico tópico"
      },
      {
        "id": "m7",
        "nome": "Gaze estéril"
      },
      {
        "id": "m8",
        "nome": "Pinça"
      },
      {
        "id": "m9",
        "nome": "Cuba de metal"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8"
    ]
  },
  "area": "Implantologia",
  "competencias": [
    9,
    8,
    9,
    9,
    8,
    8,
    9,
    8
  ]
},
{
  "id": "AG-43",
  "titulo": "Tratamento endodôntico em molar inferior",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 3,
  "tempo": 3,
  "contexto": "Paciente com cárie profunda em molar inferior, teste de vitalidade positivo, necessário tratamento de canal.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "qual_dente",
        "label": "Qual dente?",
        "obrigatorio": true
      },
      {
        "chave": "dor_espontanea",
        "label": "Tem dor espontânea?",
        "obrigatorio": true
      },
      {
        "chave": "tempo_dor",
        "label": "Há quanto tempo sente dor?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Endodontia",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "13:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Dique de borracha"
      },
      {
        "id": "m2",
        "nome": "Clamp e arco de borracha"
      },
      {
        "id": "m3",
        "nome": "Brocas de acesso"
      },
      {
        "id": "m4",
        "nome": "Limas endodônticas"
      },
      {
        "id": "m5",
        "nome": "Localizador apical eletrônico"
      },
      {
        "id": "m6",
        "nome": "Hipoclorito de sódio"
      },
      {
        "id": "m7",
        "nome": "Guta-percha"
      },
      {
        "id": "m8",
        "nome": "Cimento obturador"
      },
      {
        "id": "m9",
        "nome": "Anestésico"
      },
      {
        "id": "m10",
        "nome": "Seringa carpule"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8",
      "m9"
    ]
  },
  "area": "Endodontia",
  "competencias": [
    9,
    9,
    9,
    9,
    9,
    8,
    8,
    9
  ]
},
{
  "id": "AG-44",
  "titulo": "Ortodontia: avaliação cefalométrica e planejamento",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 3,
  "tempo": 3,
  "contexto": "Paciente adolescente com sobremordida, solicita avaliação ortodôntica completa e planejamento de tratamento.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "idade",
        "label": "Idade",
        "obrigatorio": true
      },
      {
        "chave": "problemas_funcionais",
        "label": "Tem problemas funcionais (mastigação/fala)?",
        "obrigatorio": true
      },
      {
        "chave": "expectativa",
        "label": "Expectativa com tratamento",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Ortodontia",
      "dias": [
        "segunda",
        "quarta",
        "sexta"
      ],
      "horarios": [
        "10:00",
        "11:00",
        "14:00",
        "15:00",
        "16:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Radiografia cefalométrica"
      },
      {
        "id": "m2",
        "nome": "Fotografias intraorais"
      },
      {
        "id": "m3",
        "nome": "Modelos de gesso"
      },
      {
        "id": "m4",
        "nome": "Compasso de calibração"
      },
      {
        "id": "m5",
        "nome": "Régua milimetrada"
      },
      {
        "id": "m6",
        "nome": "Paquímetro"
      },
      {
        "id": "m7",
        "nome": "Espelho intraoral"
      },
      {
        "id": "m8",
        "nome": "Software de análise cefalométrica"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8"
    ]
  },
  "area": "Ortodontia",
  "competencias": [
    8,
    8,
    8,
    9,
    8,
    8,
    8,
    9
  ]
},
{
  "id": "AG-45",
  "titulo": "Odontopediatria: restauração com ionômero de vidro",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Criança de 6 anos com cárie em dente decíduo. Restauração com ionômero de vidro para facilitar cooperação.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome_crianca",
        "label": "Nome da criança",
        "obrigatorio": true
      },
      {
        "chave": "idade",
        "label": "Idade",
        "obrigatorio": true
      },
      {
        "chave": "cooperacao",
        "label": "Nível de cooperação esperado",
        "obrigatorio": true
      },
      {
        "chave": "higiene_parental",
        "label": "Higiene supervisionada pelos pais?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Pediátrico",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "10:00",
        "14:00",
        "15:00",
        "16:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Boca livre pediátrica"
      },
      {
        "id": "m2",
        "nome": "Ionômero de vidro"
      },
      {
        "id": "m3",
        "nome": "Ácido fosfórico 37%"
      },
      {
        "id": "m4",
        "nome": "Primer/adesivo"
      },
      {
        "id": "m5",
        "nome": "Espelho infantil"
      },
      {
        "id": "m6",
        "nome": "Sugador pediátrico"
      },
      {
        "id": "m7",
        "nome": "Anestésico tópico"
      },
      {
        "id": "m8",
        "nome": "Matriz tiras Mylar"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8"
    ]
  },
  "area": "Odontopediatria",
  "competencias": [
    7,
    7,
    8,
    8,
    7,
    8,
    7,
    8
  ]
},
{
  "id": "AG-46",
  "titulo": "Prostodontia: cimentação de prótese fixa",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 3,
  "tempo": 3,
  "contexto": "Prótese parcial fixa (3 unidades) pronta para cimentação em preparos 14-15-16. Necessário cimentação definitiva com cimento autoadesivo.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "quais_dentes",
        "label": "Quais dentes serão cimentados?",
        "obrigatorio": true
      },
      {
        "chave": "sensibilidade_pre",
        "label": "Tinha sensibilidade antes?",
        "obrigatorio": true
      },
      {
        "chave": "tempo_provisorio",
        "label": "Há quanto tempo com provisório?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "14:00",
        "15:00",
        "16:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Prótese fixa"
      },
      {
        "id": "m2",
        "nome": "Cimento autoadesivo"
      },
      {
        "id": "m3",
        "nome": "Remover provisório com instrumento"
      },
      {
        "id": "m4",
        "nome": "Limpeza com escova/pedra pomes"
      },
      {
        "id": "m5",
        "nome": "Anestésico tópico"
      },
      {
        "id": "m6",
        "nome": "Fio de retenção"
      },
      {
        "id": "m7",
        "nome": "Gaze estéril"
      },
      {
        "id": "m8",
        "nome": "Pano de isolamento"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8"
    ]
  },
  "area": "Prostodontia",
  "competencias": [
    8,
    8,
    8,
    9,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "AG-47",
  "titulo": "Clareamento dentário supervisionado com luz LED",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente com manchas intrínsecas nos dentes anteriores. Quer fazer clareamento profissional com técnica de consultório.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "sensibilidade_prvia",
        "label": "Tem sensibilidade dental?",
        "obrigatorio": true
      },
      {
        "chave": "restauracoes",
        "label": "Tem restaurações nos anteriores?",
        "obrigatorio": true
      },
      {
        "chave": "expectativa_tom",
        "label": "Qual tom deseja?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Estética",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "10:00",
        "11:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Gel clareador peróxido"
      },
      {
        "id": "m2",
        "nome": "Luz LED"
      },
      {
        "id": "m3",
        "nome": "Barreira gengival (dam ou vaselina)"
      },
      {
        "id": "m4",
        "nome": "Espelho intraoral"
      },
      {
        "id": "m5",
        "nome": "Moldeira clareadora"
      },
      {
        "id": "m6",
        "nome": "Escala de cor Vita"
      },
      {
        "id": "m7",
        "nome": "Fotografia inicial"
      },
      {
        "id": "m8",
        "nome": "Fluoreto de sódio 2%"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8"
    ]
  },
  "area": "Estética",
  "competencias": [
    7,
    8,
    7,
    8,
    8,
    7,
    8,
    7
  ]
},
{
  "id": "AG-48",
  "titulo": "Cirurgia oral: extração de dente impactado",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 3,
  "tempo": 3,
  "contexto": "Dente 28 (terceiro molar) impactado horizontalmente. Necessário procedimento cirúrgico com osteotomia para remoção.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "qual_dente",
        "label": "Qual dente?",
        "obrigatorio": true
      },
      {
        "chave": "ja_tentou",
        "label": "Tentou extração antes?",
        "obrigatorio": true
      },
      {
        "chave": "medicacoes",
        "label": "Usa medicações contínuas?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Centro Cirúrgico",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "13:00",
        "14:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Mandril e broca para osteotomia"
      },
      {
        "id": "m2",
        "nome": "Fórceps de extração"
      },
      {
        "id": "m3",
        "nome": "Elevador cirúrgico"
      },
      {
        "id": "m4",
        "nome": "Anestésico local com epinefrina"
      },
      {
        "id": "m5",
        "nome": "Bisturi cirúrgico"
      },
      {
        "id": "m6",
        "nome": "Sutura reabsorvível"
      },
      {
        "id": "m7",
        "nome": "Gaze e compressa"
      },
      {
        "id": "m8",
        "nome": "Antibiótico profilático"
      },
      {
        "id": "m9",
        "nome": "Luvas e máscara cirúrgica"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8",
      "m9"
    ]
  },
  "area": "Cirurgia Oral",
  "competencias": [
    9,
    9,
    9,
    9,
    9,
    8,
    8,
    9
  ]
},
{
  "id": "AG-49",
  "titulo": "Laminado cerâmico: preparação e moldagem",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 3,
  "tempo": 3,
  "contexto": "Paciente com desgaste estético nos dentes anteriores. Quer restauração com laminados cerâmicos. Etapa de preparação dental.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "quais_dentes",
        "label": "Quais dentes serão tratados?",
        "obrigatorio": true
      },
      {
        "chave": "objetivo",
        "label": "Objetivo principal (cor/formato/comprimento)?",
        "obrigatorio": true
      },
      {
        "chave": "historico_bleaching",
        "label": "Fez clareamento antes?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Estética",
      "dias": [
        "segunda",
        "quarta",
        "sexta"
      ],
      "horarios": [
        "10:00",
        "11:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Broca diamantada ponta troncocônica"
      },
      {
        "id": "m2",
        "nome": "Disco diamantado"
      },
      {
        "id": "m3",
        "nome": "Ácido fosfórico 37%"
      },
      {
        "id": "m4",
        "nome": "Primer/adesivo"
      },
      {
        "id": "m5",
        "nome": "Resina de teste de cor"
      },
      {
        "id": "m6",
        "nome": "Moldeira customizada"
      },
      {
        "id": "m7",
        "nome": "Pasta abrasiva de polimento"
      },
      {
        "id": "m8",
        "nome": "Dique de borracha"
      },
      {
        "id": "m9",
        "nome": "Fotografia de cores"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8",
      "m9"
    ]
  },
  "area": "Estética",
  "competencias": [
    8,
    8,
    8,
    9,
    8,
    8,
    8,
    9
  ]
},
{
  "id": "AG-50",
  "titulo": "Acompanhamento pós-colocação de implante (1 semana)",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 1,
  "contexto": "Paciente em acompanhamento pós-operatório após colocação de implante 1 semana atrás. Avaliação de cicatrização e higiene.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "qual_dente",
        "label": "Qual região foi implantada?",
        "obrigatorio": true
      },
      {
        "chave": "inchaço_presente",
        "label": "Tem inchaço?",
        "obrigatorio": true
      },
      {
        "chave": "dor_escala",
        "label": "Nível de dor (0-10)",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Implantologia",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Espelho intraoral"
      },
      {
        "id": "m2",
        "nome": "Sonda periodontal"
      },
      {
        "id": "m3",
        "nome": "Anestésico tópico"
      },
      {
        "id": "m4",
        "nome": "Gaze estéril"
      },
      {
        "id": "m5",
        "nome": "Solução fisiológica"
      },
      {
        "id": "m6",
        "nome": "Clorexidina 0.12%"
      },
      {
        "id": "m7",
        "nome": "Antibiótico tópico"
      },
      {
        "id": "m8",
        "nome": "Talisman (para coágulo)"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7"
    ]
  },
  "area": "Implantologia",
  "competencias": [
    7,
    7,
    8,
    7,
    8,
    7,
    7,
    7
  ]
},
{
  "id": "AG-51",
  "titulo": "Retratamento endodôntico com visualização microscópica",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 3,
  "tempo": 3,
  "contexto": "Dente 11 com insucesso de tratamento anterior. Paciente com dor periapical. Necessário retratamento com microscópio.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "qual_dente",
        "label": "Qual dente?",
        "obrigatorio": true
      },
      {
        "chave": "tempo_tratamento_anterior",
        "label": "Há quanto tempo foi o tratamento anterior?",
        "obrigatorio": true
      },
      {
        "chave": "radiografia_disponivel",
        "label": "Tem radiografia anterior?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Endodontia",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "13:00",
        "14:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Microscópio operatório"
      },
      {
        "id": "m2",
        "nome": "Ponta ultrassônica"
      },
      {
        "id": "m3",
        "nome": "Limas endodônticas pós"
      },
      {
        "id": "m4",
        "nome": "Localizador apical eletrônico"
      },
      {
        "id": "m5",
        "nome": "Hipoclorito de sódio"
      },
      {
        "id": "m6",
        "nome": "Guta-percha nova"
      },
      {
        "id": "m7",
        "nome": "Cimento obturador"
      },
      {
        "id": "m8",
        "nome": "Dique de borracha"
      },
      {
        "id": "m9",
        "nome": "Anestésico"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8",
      "m9"
    ]
  },
  "area": "Endodontia",
  "competencias": [
    9,
    9,
    9,
    9,
    9,
    8,
    8,
    9
  ]
},
{
  "id": "AG-52",
  "titulo": "Periodontia: raspagem e alisamento radicular",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente com periodontite generalizada (bolsas de 5-7 mm). Primeira etapa: raspagem e alisamento radicular com anestesia local.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "quais_areas",
        "label": "Quais áreas afetadas?",
        "obrigatorio": true
      },
      {
        "chave": "risco_cardiovascular",
        "label": "Tem fatores de risco cardiovascular?",
        "obrigatorio": true
      },
      {
        "chave": "medicacao_anticoagulante",
        "label": "Usa anticoagulante?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório B",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Curetas periodontais"
      },
      {
        "id": "m2",
        "nome": "Sonda periodontal"
      },
      {
        "id": "m3",
        "nome": "Anestésico local com epinefrina"
      },
      {
        "id": "m4",
        "nome": "Seringa carpule"
      },
      {
        "id": "m5",
        "nome": "Gaze estéril"
      },
      {
        "id": "m6",
        "nome": "Sugador de saliva"
      },
      {
        "id": "m7",
        "nome": "Hipoclorito de sódio 0.12%"
      },
      {
        "id": "m8",
        "nome": "Pó de polimento"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8"
    ]
  },
  "area": "Periodontia",
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    7,
    8,
    8
  ]
},
{
  "id": "AG-53",
  "titulo": "Ortodontia: ativação de aparelho fixo (mensal)",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 1,
  "contexto": "Paciente em tratamento ortodôntico há 3 meses. Retorno mensal para ativação do aparelho e avaliação de progresso.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "meses_tratamento",
        "label": "Há quanto tempo em tratamento?",
        "obrigatorio": true
      },
      {
        "chave": "dor_presente",
        "label": "Está sentindo dor?",
        "obrigatorio": true
      },
      {
        "chave": "higiene_parece_boa",
        "label": "Higiene parece adequada?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Ortodontia",
      "dias": [
        "segunda",
        "quarta",
        "sexta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "11:00",
        "14:00",
        "15:00",
        "16:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Alicate de corte"
      },
      {
        "id": "m2",
        "nome": "Alicate de preensão"
      },
      {
        "id": "m3",
        "nome": "Fio ortodôntico (espessura apropriada)"
      },
      {
        "id": "m4",
        "nome": "Elásticos ortodônticos"
      },
      {
        "id": "m5",
        "nome": "Espelho intraoral"
      },
      {
        "id": "m6",
        "nome": "Explorador"
      },
      {
        "id": "m7",
        "nome": "Escova ortho"
      },
      {
        "id": "m8",
        "nome": "Cera ortodôntica"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8"
    ]
  },
  "area": "Ortodontia",
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    7,
    8
  ]
},
{
  "id": "AG-54",
  "titulo": "Odontopediatria: aplicação de flúor profissional",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 1,
  "tempo": 1,
  "contexto": "Criança de 5 anos com risco de cárie. Consulta para aplicação de gel de flúor profissional e orientação de higiene com responsáveis.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome_crianca",
        "label": "Nome da criança",
        "obrigatorio": true
      },
      {
        "chave": "idade",
        "label": "Idade",
        "obrigatorio": true
      },
      {
        "chave": "ultima_fluorose",
        "label": "Quando foi última aplicação?",
        "obrigatorio": true
      },
      {
        "chave": "frequencia_escova",
        "label": "Frequência de escovação?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Pediátrico",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "10:00",
        "14:00",
        "15:00",
        "16:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Gel de flúor"
      },
      {
        "id": "m2",
        "nome": "Moldeira pediátrica"
      },
      {
        "id": "m3",
        "nome": "Seringa de borracha"
      },
      {
        "id": "m4",
        "nome": "Gaze"
      },
      {
        "id": "m5",
        "nome": "Escova infantil"
      },
      {
        "id": "m6",
        "nome": "Fio dental"
      },
      {
        "id": "m7",
        "nome": "Espelho infantil"
      },
      {
        "id": "m8",
        "nome": "Toucinho para orientação de higiene"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8"
    ]
  },
  "area": "Odontopediatria",
  "competencias": [
    7,
    7,
    7,
    7,
    8,
    8,
    7,
    7
  ]
},
{
  "id": "AG-55",
  "titulo": "Prostodontia removível: prótese total superior",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 3,
  "tempo": 3,
  "contexto": "Paciente edêntulo superior. Primeira consulta para moldagem anátômica e levantamento de dimensão vertical.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "tempo_sem_dentes",
        "label": "Há quanto tempo sem dentes?",
        "obrigatorio": true
      },
      {
        "chave": "usa_protese_antes",
        "label": "Já usou prótese antes?",
        "obrigatorio": true
      },
      {
        "chave": "atividade_profissional",
        "label": "Qual atividade profissional?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório A",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "09:00",
        "10:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Moldeira individual"
      },
      {
        "id": "m2",
        "nome": "Massa de moldagem"
      },
      {
        "id": "m3",
        "nome": "Dimensionador vertical"
      },
      {
        "id": "m4",
        "nome": "Compasso de Willis"
      },
      {
        "id": "m5",
        "nome": "Arco facial"
      },
      {
        "id": "m6",
        "nome": "Relacionador cêntrico"
      },
      {
        "id": "m7",
        "nome": "Fita métrica"
      },
      {
        "id": "m8",
        "nome": "Escala de cor"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8"
    ]
  },
  "area": "Prostodontia",
  "competencias": [
    8,
    8,
    8,
    9,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "AG-56",
  "titulo": "Clareamento caseiro supervisionado (orientação)",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 1,
  "tempo": 1,
  "contexto": "Paciente retornando para receber moldeira customizada e gel de clareamento para uso caseiro. Orientação de uso e cuidados.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "sensibilidade_baseline",
        "label": "Tem sensibilidade base?",
        "obrigatorio": true
      },
      {
        "chave": "expectativa",
        "label": "Expectativa de resultado?",
        "obrigatorio": true
      },
      {
        "chave": "frequencia_escova",
        "label": "Frequência de escovação?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Estética",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta"
      ],
      "horarios": [
        "10:00",
        "11:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Moldeira customizada"
      },
      {
        "id": "m2",
        "nome": "Gel clareador caseiro (peroxido 10-16%)"
      },
      {
        "id": "m3",
        "nome": "Escala de cor Vita"
      },
      {
        "id": "m4",
        "nome": "Fotografia inicial"
      },
      {
        "id": "m5",
        "nome": "Fluoreto de sódio"
      },
      {
        "id": "m6",
        "nome": "Dessensibilizante"
      },
      {
        "id": "m7",
        "nome": "Seringa dosadora"
      },
      {
        "id": "m8",
        "nome": "Instrução escrita para casa"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8"
    ]
  },
  "area": "Estética",
  "competencias": [
    7,
    7,
    7,
    8,
    8,
    7,
    7,
    7
  ]
},
{
  "id": "AG-57",
  "titulo": "Cirurgia: frenectomia lingual",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Criança com anquiloglossia (língua presa). Necessário procedimento cirúrgico para liberar freio lingual.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome_crianca",
        "label": "Nome da criança",
        "obrigatorio": true
      },
      {
        "chave": "idade",
        "label": "Idade",
        "obrigatorio": true
      },
      {
        "chave": "dificuldade_lingua",
        "label": "Qual dificuldade funcional?",
        "obrigatorio": true
      },
      {
        "chave": "peso_saude_geral",
        "label": "Tem outras condições de saúde?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Centro Cirúrgico",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "14:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Bisturi cirúrgico"
      },
      {
        "id": "m2",
        "nome": "Tesoura cirúrgica"
      },
      {
        "id": "m3",
        "nome": "Pinça anatômica"
      },
      {
        "id": "m4",
        "nome": "Anestésico local"
      },
      {
        "id": "m5",
        "nome": "Cauterizador ou laser"
      },
      {
        "id": "m6",
        "nome": "Sutura reabsorvível"
      },
      {
        "id": "m7",
        "nome": "Gaze estéril"
      },
      {
        "id": "m8",
        "nome": "Luvas e máscara"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8"
    ]
  },
  "area": "Cirurgia Oral",
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    7,
    8,
    8
  ]
},
{
  "id": "AG-58",
  "titulo": "Endodontia: tratamento de fratura radicular",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 3,
  "tempo": 3,
  "contexto": "Dente anterior com fratura radicular transversa após trauma. Paciente busca salvar dente. Avaliação de viabilidade e planejamento.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "qual_dente",
        "label": "Qual dente?",
        "obrigatorio": true
      },
      {
        "chave": "data_trauma",
        "label": "Data do trauma",
        "obrigatorio": true
      },
      {
        "chave": "dor_presente",
        "label": "Tem dor atual?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Endodontia",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "13:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Radiografia periapical e oclusal"
      },
      {
        "id": "m2",
        "nome": "CBCT/Tomografia"
      },
      {
        "id": "m3",
        "nome": "Dique de borracha"
      },
      {
        "id": "m4",
        "nome": "Limas endodônticas"
      },
      {
        "id": "m5",
        "nome": "Localizador apical"
      },
      {
        "id": "m6",
        "nome": "Hipoclorito de sódio"
      },
      {
        "id": "m7",
        "nome": "Guta-percha"
      },
      {
        "id": "m8",
        "nome": "Cimento MTA ou hidróxido de cálcio"
      },
      {
        "id": "m9",
        "nome": "Anestésico"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8",
      "m9"
    ]
  },
  "area": "Endodontia",
  "competencias": [
    9,
    9,
    9,
    9,
    9,
    8,
    9,
    9
  ]
},
{
  "id": "AG-59",
  "titulo": "Periodontia: aplicação de enxerto gengival livre",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 3,
  "tempo": 3,
  "contexto": "Paciente com recessão gengival no dente 34. Necessário procedimento de enxertia gengival para aumento de mucosa aderida.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "qual_dente",
        "label": "Qual dente afetado?",
        "obrigatorio": true
      },
      {
        "chave": "tamanho_recessao",
        "label": "Medida da recessão (em mm)",
        "obrigatorio": true
      },
      {
        "chave": "queixa_estetica",
        "label": "Preocupação estética?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Centro Cirúrgico",
      "dias": [
        "segunda",
        "terça",
        "quarta",
        "quinta"
      ],
      "horarios": [
        "08:00",
        "09:00",
        "10:00",
        "13:00",
        "14:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Bisturi cirúrgico"
      },
      {
        "id": "m2",
        "nome": "Tesoura de Castroviejo"
      },
      {
        "id": "m3",
        "nome": "Pinça anatômica"
      },
      {
        "id": "m4",
        "nome": "Anestésico local"
      },
      {
        "id": "m5",
        "nome": "Microsutura (5-0 ou 6-0)"
      },
      {
        "id": "m6",
        "nome": "Membrana de barreira"
      },
      {
        "id": "m7",
        "nome": "Cimento periodontal"
      },
      {
        "id": "m8",
        "nome": "Gaze e compressas"
      },
      {
        "id": "m9",
        "nome": "Luvas e máscara cirúrgica"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8",
      "m9"
    ]
  },
  "area": "Periodontia",
  "competencias": [
    9,
    9,
    9,
    9,
    9,
    8,
    8,
    9
  ]
},
{
  "id": "AG-60",
  "titulo": "Ortodontia: remoção de aparelho e colagem de retentor",
  "tipo": "agendamento",
  "modalidade": "agendamento",
  "complexidade": 2,
  "tempo": 2,
  "contexto": "Paciente completou tratamento ortodôntico (24 meses). Necessário remoção do aparelho, limpeza e colagem de retentor fixo.",
  "dadosPaciente": {
    "campos": [
      {
        "chave": "nome",
        "label": "Nome do paciente",
        "obrigatorio": true
      },
      {
        "chave": "tempo_total",
        "label": "Tempo total de tratamento",
        "obrigatorio": true
      },
      {
        "chave": "satisfacao",
        "label": "Satisfação com resultado?",
        "obrigatorio": true
      },
      {
        "chave": "plano_retencao",
        "label": "Aceitaria usar contenção removível?",
        "obrigatorio": false
      }
    ]
  },
  "agenda": {
    "correto": {
      "sala": "Consultório Ortodontia",
      "dias": [
        "segunda",
        "quarta",
        "sexta"
      ],
      "horarios": [
        "10:00",
        "11:00",
        "14:00",
        "15:00"
      ]
    }
  },
  "materiais": {
    "opcoes": [
      {
        "id": "m1",
        "nome": "Removedor de bracket"
      },
      {
        "id": "m2",
        "nome": "Ponta ultrassônica"
      },
      {
        "id": "m3",
        "nome": "Resina de colagem"
      },
      {
        "id": "m4",
        "nome": "Fio retentor (5 ou 7 fios)"
      },
      {
        "id": "m5",
        "nome": "Ácido fosfórico 37%"
      },
      {
        "id": "m6",
        "nome": "Primer/adesivo"
      },
      {
        "id": "m7",
        "nome": "Escala de cor"
      },
      {
        "id": "m8",
        "nome": "Fotografia final"
      },
      {
        "id": "m9",
        "nome": "Espelho intraoral"
      }
    ],
    "corretos": [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8",
      "m9"
    ]
  },
  "area": "Ortodontia",
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "MAT-01",
  "titulo": "Restauração de cárie classe II com resina composta",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 2,
  "area": "Dentística",
  "contexto": "Paciente com cárie interproximal em molar inferior (dente 36). Você será o responsável pela restauração com resina composta. Quais materiais você precisa para este procedimento?",
  "opcoes": [
    {
      "texto": "Dique de borracha e clamp",
      "correto": true
    },
    {
      "texto": "Matriz de contorno e cunha de madeira",
      "correto": true
    },
    {
      "texto": "Ácido fosfórico 37% e adesivo universal",
      "correto": true
    },
    {
      "texto": "Resina composta (bulk-fill ou incremental)",
      "correto": true
    },
    {
      "texto": "Luz LED para fotopolimerização",
      "correto": true
    },
    {
      "texto": "Seringa tríplice para lavar",
      "correto": true
    },
    {
      "texto": "Guta-percha (para endodontia)",
      "correto": false
    },
    {
      "texto": "Clorexidina para bactérias",
      "correto": false
    },
    {
      "texto": "Fórceps de extração",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    8,
    8,
    8,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-02",
  "titulo": "Tratamento endodôntico: preparo de canal",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 3,
  "tempo": 2,
  "area": "Endodontia",
  "contexto": "Dente anterior com polpa vital inflamada (teste positivo). Você precisa fazer tratamento endodôntico. Quais são os materiais essenciais para preparo e limpeza do canal?",
  "opcoes": [
    {
      "texto": "Dique de borracha e clamp",
      "correto": true
    },
    {
      "texto": "Limas endodônticas (série K ou H)",
      "correto": true
    },
    {
      "texto": "Localizador apical eletrônico",
      "correto": true
    },
    {
      "texto": "Hipoclorito de sódio 2.5%",
      "correto": true
    },
    {
      "texto": "Seringa endodôntica e agulha courva",
      "correto": true
    },
    {
      "texto": "Anestésico com epinefrina",
      "correto": true
    },
    {
      "texto": "Resina composta (para restauração final)",
      "correto": false
    },
    {
      "texto": "Matriz de contorno interproximal",
      "correto": false
    },
    {
      "texto": "Selador de fossetas",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    7,
    7
  ]
},
{
  "id": "MAT-03",
  "titulo": "Aplicação profissional de flúor gel em criança",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 1,
  "tempo": 1,
  "area": "Odontopediatria",
  "contexto": "Criança de 6 anos com risco de cárie. Você vai fazer aplicação de gel de flúor profissional (5000 ppm). Quais são os materiais e ferramentas necessários?",
  "opcoes": [
    {
      "texto": "Gel de flúor 5000 ppm",
      "correto": true
    },
    {
      "texto": "Moldeira pediátrica (ou tabuleiros individualizados)",
      "correto": true
    },
    {
      "texto": "Sugador de saliva",
      "correto": true
    },
    {
      "texto": "Gaze estéril para secar dentes",
      "correto": true
    },
    {
      "texto": "Copo descartável para bochecho pós-aplicação",
      "correto": true
    },
    {
      "texto": "Escova infantil para educação de higiene",
      "correto": true
    },
    {
      "texto": "Guta-percha (para tratamento endo)",
      "correto": false
    },
    {
      "texto": "Resina composta cor tooth-colored",
      "correto": false
    },
    {
      "texto": "Fórceps de extração",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    8,
    8,
    7,
    7
  ]
},
{
  "id": "MAT-04",
  "titulo": "Limpeza e polimento de dentes (profilaxia)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 1,
  "tempo": 1,
  "area": "Periodontia",
  "contexto": "Paciente em visita periódica de profilaxia. Apresenta biofilme moderado e sem doença periodontal. Quais materiais você usará para limpeza e polimento?",
  "opcoes": [
    {
      "texto": "Escaler ultrassônico ou manual",
      "correto": true
    },
    {
      "texto": "Taça de borracha ou escova de polimento",
      "correto": true
    },
    {
      "texto": "Pasta de polimento (RDA apropriado)",
      "correto": true
    },
    {
      "texto": "Sugador de saliva",
      "correto": true
    },
    {
      "texto": "Seringa tríplice",
      "correto": true
    },
    {
      "texto": "Fio dental ou fita para educação",
      "correto": true
    },
    {
      "texto": "Clorexidina 0.12% (não está indicada sem doença)",
      "correto": false
    },
    {
      "texto": "Guta-percha",
      "correto": false
    },
    {
      "texto": "Anestésico local com epinefrina",
      "correto": false
    }
  ],
  "competencias": [
    7,
    6,
    6,
    7,
    7,
    7,
    6,
    6
  ]
},
{
  "id": "MAT-05",
  "titulo": "Sondagem periodontal diagnóstica",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 1,
  "area": "Periodontia",
  "contexto": "Paciente com queixa de sangramento gengival. Você precisa fazer diagnóstico periodontal com sondagem completa. Quais instrumentos e materiais são necessários?",
  "opcoes": [
    {
      "texto": "Sonda periodontal (com marcações)",
      "correto": true
    },
    {
      "texto": "Espelho intraoral",
      "correto": true
    },
    {
      "texto": "Explorador duplo",
      "correto": true
    },
    {
      "texto": "Sugador de saliva",
      "correto": true
    },
    {
      "texto": "Gaze para secar",
      "correto": true
    },
    {
      "texto": "Anestésico tópico (se necessário)",
      "correto": true
    },
    {
      "texto": "Bisturi periodontal",
      "correto": false
    },
    {
      "texto": "Matriz de contorno",
      "correto": false
    },
    {
      "texto": "Guta-percha",
      "correto": false
    }
  ],
  "competencias": [
    8,
    7,
    8,
    7,
    7,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-06",
  "titulo": "Extração dentária simples (exodontia)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 2,
  "area": "Cirurgia Oral",
  "contexto": "Paciente necessita extração de dente 35 (com raiz única, sem impactação). Quais são os materiais principais para esta exodontia?",
  "opcoes": [
    {
      "texto": "Fórceps de extração apropriado (tipo 88)",
      "correto": true
    },
    {
      "texto": "Elevador cirúrgico",
      "correto": true
    },
    {
      "texto": "Anestésico local com epinefrina",
      "correto": true
    },
    {
      "texto": "Seringa carpule",
      "correto": true
    },
    {
      "texto": "Gaze e compressa estéril",
      "correto": true
    },
    {
      "texto": "Sugador de saliva",
      "correto": true
    },
    {
      "texto": "Sutura reabsorvível (para simples não precisa)",
      "correto": false
    },
    {
      "texto": "Limas endodônticas",
      "correto": false
    },
    {
      "texto": "Resina composta",
      "correto": false
    }
  ],
  "competencias": [
    7,
    8,
    8,
    7,
    8,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-07",
  "titulo": "Cimentação de coroa protética",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 2,
  "area": "Prostodontia",
  "contexto": "Coroa cerâmica sobre preparação unitária em dente 14 está pronta. Você fará cimentação definitiva. Quais materiais são necessários?",
  "opcoes": [
    {
      "texto": "Coroa protética (já confeccionada)",
      "correto": true
    },
    {
      "texto": "Cimento resinoso autoadesivo",
      "correto": true
    },
    {
      "texto": "Fio de retenção/retração (se necessário)",
      "correto": true
    },
    {
      "texto": "Gaze e compressa para isolamento",
      "correto": true
    },
    {
      "texto": "Seringa tríplice para lavar",
      "correto": true
    },
    {
      "texto": "Anestésico tópico",
      "correto": true
    },
    {
      "texto": "Dique de borracha (não é obrigatório)",
      "correto": false
    },
    {
      "texto": "Resina composta bulk-fill",
      "correto": false
    },
    {
      "texto": "Guta-percha para endodontia",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-08",
  "titulo": "Clareamento dental de consultório",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 2,
  "area": "Estética",
  "contexto": "Paciente quer clareamento imediato dos dentes anteriores superiores. Você usará técnica de consultório com luz LED. Quais materiais precisa?",
  "opcoes": [
    {
      "texto": "Gel clareador com peróxido (35% ou 38%)",
      "correto": true
    },
    {
      "texto": "Luz LED para ativação",
      "correto": true
    },
    {
      "texto": "Barreira gengival (dam ou vaselina sólida)",
      "correto": true
    },
    {
      "texto": "Escala de cor Vita (para contraste)",
      "correto": true
    },
    {
      "texto": "Sugador de saliva",
      "correto": true
    },
    {
      "texto": "Fluoreto de sódio para pós-tratamento",
      "correto": true
    },
    {
      "texto": "Resina composta para restauração",
      "correto": false
    },
    {
      "texto": "Guta-percha",
      "correto": false
    },
    {
      "texto": "Ácido fosfórico para gravação",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-09",
  "titulo": "Restauração com ionômero de vidro em criança",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 2,
  "area": "Odontopediatria",
  "contexto": "Criança de 5 anos com cárie em dente 64. Você escolhe ionômero de vidro para facilitar cooperação. Quais materiais você necessita?",
  "opcoes": [
    {
      "texto": "Ionômero de vidro convencional ou modificado com resina",
      "correto": true
    },
    {
      "texto": "Ácido poliacrílico 25% (condicionamento)",
      "correto": true
    },
    {
      "texto": "Espelho infantil pequeno",
      "correto": true
    },
    {
      "texto": "Sugador infantil",
      "correto": true
    },
    {
      "texto": "Anestésico tópico",
      "correto": true
    },
    {
      "texto": "Matriz de contorno pediátrica",
      "correto": true
    },
    {
      "texto": "Luz LED (não precisa com ionômero fotopolimerizável)",
      "correto": false
    },
    {
      "texto": "Guta-percha (endodontia)",
      "correto": false
    },
    {
      "texto": "Fórceps de extração",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-10",
  "titulo": "Ajuste oclusal com articulador",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 1,
  "area": "Clínica Geral",
  "contexto": "Paciente relata incômodo após cimentação de coroa. Você suspeita de contato prematuro. Quais materiais para diagnóstico e ajuste?",
  "opcoes": [
    {
      "texto": "Papel de articulação colorido (carbono)",
      "correto": true
    },
    {
      "texto": "Pinça para segurar papel de articulação",
      "correto": true
    },
    {
      "texto": "Bra de alta rotação com ponta de polimento",
      "correto": true
    },
    {
      "texto": "Sugador de saliva",
      "correto": true
    },
    {
      "texto": "Espelho intraoral",
      "correto": true
    },
    {
      "texto": "Seringa tríplice",
      "correto": true
    },
    {
      "texto": "Resina composta para reparar",
      "correto": false
    },
    {
      "texto": "Guta-percha",
      "correto": false
    },
    {
      "texto": "Fórceps de extração",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    8,
    7,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-11",
  "titulo": "Raspagem e alisamento radicular (terapia não-cirúrgica)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 2,
  "area": "Periodontia",
  "contexto": "Paciente com periodontite crônica (bolsas 5-7mm). Primeira fase: raspagem e alisamento radicular com anestesia local. Quais materiais?",
  "opcoes": [
    {
      "texto": "Curetas periodontais (Gracey ou mini-Gracey)",
      "correto": true
    },
    {
      "texto": "Anestésico local com epinefrina",
      "correto": true
    },
    {
      "texto": "Seringa carpule",
      "correto": true
    },
    {
      "texto": "Hipoclorito de sódio 0.12% para lavar",
      "correto": true
    },
    {
      "texto": "Seringa de irrigação com agulha fina",
      "correto": true
    },
    {
      "texto": "Gaze estéril",
      "correto": true
    },
    {
      "texto": "Sutura (não precisa em terapia não-cirúrgica)",
      "correto": false
    },
    {
      "texto": "Guta-percha",
      "correto": false
    },
    {
      "texto": "Resina composta",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-12",
  "titulo": "Moldagem para prótese removível (primeira consulta)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 2,
  "area": "Prostodontia",
  "contexto": "Paciente edêntulo superior. Primeira consulta para moldagem anátômica. Quais materiais você precisa para esta etapa?",
  "opcoes": [
    {
      "texto": "Moldeira individual de estoque (tamanho apropriado)",
      "correto": true
    },
    {
      "texto": "Pasta ou massa de moldagem para moldagem anatômica",
      "correto": true
    },
    {
      "texto": "Alginato ou silicone leve para moldagem funcional (segunda etapa)",
      "correto": true
    },
    {
      "texto": "Compasso de Willis (para dimensão vertical)",
      "correto": true
    },
    {
      "texto": "Espátula para misturar pasta de moldagem",
      "correto": true
    },
    {
      "texto": "Água/ativador para alginato",
      "correto": true
    },
    {
      "texto": "Guta-percha (endodontia)",
      "correto": false
    },
    {
      "texto": "Resina para restauração estética",
      "correto": false
    },
    {
      "texto": "Fórceps de extração",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    7,
    7
  ]
},
{
  "id": "MAT-13",
  "titulo": "Tratamento de sensibilidade dentinária",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 1,
  "tempo": 1,
  "area": "Clínica Geral",
  "contexto": "Paciente com sensibilidade dental generalizada ao frio. Você diagnosticou como hipersensibilidade dentinária. Quais são as opções de material?",
  "opcoes": [
    {
      "texto": "Gel ou pasta dessensibilizante com nitrato de potássio",
      "correto": true
    },
    {
      "texto": "Verniz de flúor para aplicação profissional",
      "correto": true
    },
    {
      "texto": "Resina fluidificada de baixa viscosidade (para ocluir túbulos)",
      "correto": true
    },
    {
      "texto": "Adesivo universal (com efeito dessensibilizante)",
      "correto": true
    },
    {
      "texto": "Escova infantil com cerdas macias (para educação)",
      "correto": true
    },
    {
      "texto": "Clorexidina 0.12% (se houver inflamação)",
      "correto": false
    },
    {
      "texto": "Guta-percha (endodontia)",
      "correto": false
    },
    {
      "texto": "Resina composta opaca",
      "correto": false
    },
    {
      "texto": "Cimento resinoso",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    6,
    6,
    6
  ]
},
{
  "id": "MAT-14",
  "titulo": "Obturação de canal radicular",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 3,
  "tempo": 2,
  "area": "Endodontia",
  "contexto": "Canais foram preparados e comprimento confirmado. Agora você vai obturar os canais. Quais são os materiais essenciais?",
  "opcoes": [
    {
      "texto": "Guta-percha (cones principais e acessórios)",
      "correto": true
    },
    {
      "texto": "Cimento obturador endodôntico (com zinco ou resina epóxi)",
      "correto": true
    },
    {
      "texto": "Localizador apical eletrônico (para confirmar comprimento)",
      "correto": true
    },
    {
      "texto": "Espinha de peixe ou técnica de condensação lateral",
      "correto": true
    },
    {
      "texto": "Plugger (condensador térmico ou mecânico)",
      "correto": true
    },
    {
      "texto": "Hipoclorito de sódio para lavar antes de obturar",
      "correto": true
    },
    {
      "texto": "Resina composta (para restauração coronal depois)",
      "correto": false
    },
    {
      "texto": "Anestésico (já foi usado no preparo)",
      "correto": false
    },
    {
      "texto": "Matriz de contorno",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    7,
    7
  ]
},
{
  "id": "MAT-15",
  "titulo": "Selante de fossetas e fissuras",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 1,
  "tempo": 1,
  "area": "Odontopediatria",
  "contexto": "Criança de 7 anos com primeiros molares permanentes erupcionados. Você vai aplicar selante para prevenir cáries. Quais materiais?",
  "opcoes": [
    {
      "texto": "Selante de fossetas (resinoso ou ionomérico)",
      "correto": true
    },
    {
      "texto": "Ácido fosfórico 37% para gravação",
      "correto": true
    },
    {
      "texto": "Luz LED para fotopolimerização",
      "correto": true
    },
    {
      "texto": "Escova ou gaze para limpeza das superfícies",
      "correto": true
    },
    {
      "texto": "Sugador de saliva",
      "correto": true
    },
    {
      "texto": "Espelho infantil pequeno",
      "correto": true
    },
    {
      "texto": "Clorexidina (não indicada para selante)",
      "correto": false
    },
    {
      "texto": "Guta-percha",
      "correto": false
    },
    {
      "texto": "Resina composta bulk-fill",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    6,
    6
  ]
},
{
  "id": "MAT-16",
  "titulo": "Cimentação de restauração indireta (onlay/inlay)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 2,
  "area": "Dentística",
  "contexto": "Onlay cerâmica sobre preparação no dente 16 está pronta. Você fará cimentação definitiva. Quais materiais você precisa?",
  "opcoes": [
    {
      "texto": "Onlay cerâmica confeccionada",
      "correto": true
    },
    {
      "texto": "Cimento resinoso dual ou autoadesivo",
      "correto": true
    },
    {
      "texto": "Ácido fosfórico 37% (se sistema de duplo condicionamento)",
      "correto": true
    },
    {
      "texto": "Adesivo universal",
      "correto": true
    },
    {
      "texto": "Fio de retenção/retração",
      "correto": true
    },
    {
      "texto": "Sugador de saliva",
      "correto": true
    },
    {
      "texto": "Guta-percha (para endodontia)",
      "correto": false
    },
    {
      "texto": "Resina composta sem catalisador",
      "correto": false
    },
    {
      "texto": "Pasta de polimento abrasiva",
      "correto": false
    }
  ],
  "competencias": [
    7,
    8,
    7,
    7,
    7,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-17",
  "titulo": "Restauração classe V (cárie cervical)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 2,
  "area": "Dentística",
  "contexto": "Cárie cervical no dente 34 (face vestibular). Você escolhe restaurar com resina composta. Quais materiais para preparação e restauração?",
  "opcoes": [
    {
      "texto": "Ácido fosfórico 37% para gravação do esmalte",
      "correto": true
    },
    {
      "texto": "Adesivo universal",
      "correto": true
    },
    {
      "texto": "Resina composta (micropartículada ou flowable)",
      "correto": true
    },
    {
      "texto": "Luz LED para fotopolimerização",
      "correto": true
    },
    {
      "texto": "Tira de poliéster para proteger a papila",
      "correto": true
    },
    {
      "texto": "Anestésico tópico (se necessário)",
      "correto": true
    },
    {
      "texto": "Dique de borracha (difícil em cervical)",
      "correto": false
    },
    {
      "texto": "Guta-percha",
      "correto": false
    },
    {
      "texto": "Cimento obturador de canal",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    8,
    7,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-18",
  "titulo": "Anestesia em endodontia com vaso intenso",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 1,
  "area": "Endodontia",
  "contexto": "Paciente com polpa vital inflamada muito sensível. Anestesia convencional não foi eficaz. Você vai usar técnica complementar. Quais materiais?",
  "opcoes": [
    {
      "texto": "Anestésico local com epinefrina 1:50.000 ou 1:100.000",
      "correto": true
    },
    {
      "texto": "Seringa carpule e agulha apropriada",
      "correto": true
    },
    {
      "texto": "Anestésico tópico (antes da injeção)",
      "correto": true
    },
    {
      "texto": "Técnica intraligamentar (pistola intraligamentar ou seringa)",
      "correto": true
    },
    {
      "texto": "Técnica intraossea (se equipamento disponível)",
      "correto": true
    },
    {
      "texto": "Hipoclorito de sódio (depois da anestesia)",
      "correto": false
    },
    {
      "texto": "Guta-percha",
      "correto": false
    },
    {
      "texto": "Cimento de obturação",
      "correto": false
    },
    {
      "texto": "Coroa protética",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-19",
  "titulo": "Esfoliação assistida de dente decíduo",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 1,
  "tempo": 1,
  "area": "Odontopediatria",
  "contexto": "Dente decíduo 62 com mobilidade grau 3 será extraído. Você decidiu fazer esfoliação controlada. Quais materiais?",
  "opcoes": [
    {
      "texto": "Fórceps pediátrico pequeno",
      "correto": true
    },
    {
      "texto": "Elevador infantil fino",
      "correto": true
    },
    {
      "texto": "Anestésico tópico",
      "correto": true
    },
    {
      "texto": "Gaze estéril para hemostasia",
      "correto": true
    },
    {
      "texto": "Sugador infantil pequeno",
      "correto": true
    },
    {
      "texto": "Água oxigenada para lavar (se houver infecção)",
      "correto": true
    },
    {
      "texto": "Sutura (não precisa em criança)",
      "correto": false
    },
    {
      "texto": "Anestésico local injetável (se apenas tópico bastar)",
      "correto": false
    },
    {
      "texto": "Guta-percha",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-20",
  "titulo": "Tratamento de afta (úlcera oral)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 1,
  "tempo": 1,
  "area": "Clínica Geral",
  "contexto": "Paciente com afta dolorosa em mucosa alveolar. Você vai fazer tratamento tópico. Quais materiais?",
  "opcoes": [
    {
      "texto": "Cauterizante (nitrato de prata ou laser)",
      "correto": true
    },
    {
      "texto": "Gel anestésico tópico com benzocaína",
      "correto": true
    },
    {
      "texto": "Corticosteroide tópico em pasta (se inflamação)",
      "correto": true
    },
    {
      "texto": "Enxaguatório com clorexidina 0.12%",
      "correto": true
    },
    {
      "texto": "Gaze estéril para aplicação",
      "correto": true
    },
    {
      "texto": "Instrução de higiene (álcool ou ácido citrato NÃO)",
      "correto": true
    },
    {
      "texto": "Antibiótico sistêmico (não é indicado para afta simples)",
      "correto": false
    },
    {
      "texto": "Guta-percha",
      "correto": false
    },
    {
      "texto": "Resina composta",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    6,
    6
  ]
},
{
  "id": "MAT-21",
  "titulo": "Instalação de implante (cirurgia)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 3,
  "tempo": 3,
  "area": "Implantologia",
  "contexto": "Cirurgia de colocação de implante dentário em maxila. Qual é a lista completa de materiais e instrumentos?",
  "opcoes": [
    {
      "texto": "Implante dentário (parafuso, tamanho apropriado)",
      "correto": true
    },
    {
      "texto": "Kit de brocas progressivas (para osteotomia)",
      "correto": true
    },
    {
      "texto": "Anestésico local com epinefrina",
      "correto": true
    },
    {
      "texto": "Bisturi cirúrgico e cabo de bisturi",
      "correto": true
    },
    {
      "texto": "Sugador cirúrgico de grande volume",
      "correto": true
    },
    {
      "texto": "Sutura (geralmente reabsorvível)",
      "correto": true
    },
    {
      "texto": "Guta-percha (para endodontia, não para cirurgia)",
      "correto": false
    },
    {
      "texto": "Resina composta (para restauração final, depois)",
      "correto": false
    },
    {
      "texto": "Fio dental (após cicatrização)",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    7,
    7
  ]
},
{
  "id": "MAT-22",
  "titulo": "Prova de coroa protética (segunda consulta)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 1,
  "area": "Prostodontia",
  "contexto": "Coroa protética em processamento está pronta para prova. Você vai avaliar adaptação e oclusão. Quais materiais?",
  "opcoes": [
    {
      "texto": "Coroa protética confeccionada",
      "correto": true
    },
    {
      "texto": "Papel de articulação colorido",
      "correto": true
    },
    {
      "texto": "Escala de cor Vita (para comparação)",
      "correto": true
    },
    {
      "texto": "Paquímetro (para avaliar espessura de espaço)",
      "correto": true
    },
    {
      "texto": "Espelho intraoral",
      "correto": true
    },
    {
      "texto": "Seringa tríplice",
      "correto": true
    },
    {
      "texto": "Cimento de cimentação (já para cimentar na prova)",
      "correto": false
    },
    {
      "texto": "Guta-percha",
      "correto": false
    },
    {
      "texto": "Resina composta",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-23",
  "titulo": "Fluoretação com verniz profissional",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 1,
  "tempo": 1,
  "area": "Odontopediatria",
  "contexto": "Criança com história de cárie. Você vai aplicar verniz de flúor profissional como medida preventiva. Quais materiais?",
  "opcoes": [
    {
      "texto": "Verniz de flúor 22.600 ppm (ou gel 12.300 ppm)",
      "correto": true
    },
    {
      "texto": "Gaze estéril para secar dentes",
      "correto": true
    },
    {
      "texto": "Toucinho ou algodão para isolamento relativo",
      "correto": true
    },
    {
      "texto": "Sugador infantil",
      "correto": true
    },
    {
      "texto": "Copo descartável para enxague pós-aplicação",
      "correto": true
    },
    {
      "texto": "Escova para educação de higiene",
      "correto": true
    },
    {
      "texto": "Clorexidina (não é necessária após fluoração)",
      "correto": false
    },
    {
      "texto": "Guta-percha",
      "correto": false
    },
    {
      "texto": "Resina composta",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    6,
    6
  ]
},
{
  "id": "MAT-24",
  "titulo": "Laminado cerâmico: preparo dental",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 2,
  "area": "Estética",
  "contexto": "Paciente para restauração estética com laminado cerâmico. Você vai fazer o preparo dos dentes anteriores. Quais materiais?",
  "opcoes": [
    {
      "texto": "Broca diamantada ponta troncocônica",
      "correto": true
    },
    {
      "texto": "Disco diamantado de corte fino",
      "correto": true
    },
    {
      "texto": "Ácido fosfórico 37% para gravação",
      "correto": true
    },
    {
      "texto": "Primer e adesivo universal",
      "correto": true
    },
    {
      "texto": "Resina de cor de teste (para preview estético)",
      "correto": true
    },
    {
      "texto": "Sugador de saliva",
      "correto": true
    },
    {
      "texto": "Guta-percha (para endodontia, não estética)",
      "correto": false
    },
    {
      "texto": "Pasta de polimento abrasiva demais",
      "correto": false
    },
    {
      "texto": "Cimento de obturação de canal",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    7,
    8,
    7,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-25",
  "titulo": "Exodontia com alveolectomia (múltiplos dentes)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 3,
  "tempo": 3,
  "area": "Cirurgia Oral",
  "contexto": "Extração de múltiplos dentes deteriorados com alveolectomia para preparo de rebordo. Quais são os materiais cirúrgicos?",
  "opcoes": [
    {
      "texto": "Fórceps de extração (vários tamanhos)",
      "correto": true
    },
    {
      "texto": "Elevadores cirúrgicos",
      "correto": true
    },
    {
      "texto": "Mandril com broca para osteotomia",
      "correto": true
    },
    {
      "texto": "Bisturi cirúrgico para acesso",
      "correto": true
    },
    {
      "texto": "Sugador cirúrgico potente",
      "correto": true
    },
    {
      "texto": "Sutura reabsorvível",
      "correto": true
    },
    {
      "texto": "Guta-percha (endodontia, não cirurgia)",
      "correto": false
    },
    {
      "texto": "Resina composta (para restauração depois)",
      "correto": false
    },
    {
      "texto": "Selante de fossetas",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    7,
    7
  ]
},
{
  "id": "MAT-26",
  "titulo": "Cimentação de pino (núcleo) e coroa em dente tratado",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 2,
  "area": "Endodontia + Prostodontia",
  "contexto": "Dente endodonticamente tratado precisa de reabilitação com pino + núcleo + coroa. Quais são os materiais para cimentação?",
  "opcoes": [
    {
      "texto": "Pino de fibra ou metálico (já selecionado)",
      "correto": true
    },
    {
      "texto": "Cimento resinoso dual ou autoadesivo",
      "correto": true
    },
    {
      "texto": "Ácido fosfórico 37% (se dupla condicionamento)",
      "correto": true
    },
    {
      "texto": "Adesivo universal",
      "correto": true
    },
    {
      "texto": "Sugador de saliva",
      "correto": true
    },
    {
      "texto": "Coroa protética (para depois)",
      "correto": false
    },
    {
      "texto": "Hipoclorito de sódio (já foi usado)",
      "correto": false
    },
    {
      "texto": "Guta-percha (já está no canal)",
      "correto": false
    },
    {
      "texto": "Resina composta simples",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-27",
  "titulo": "Enxerto ósseo para implantologia",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 3,
  "tempo": 3,
  "area": "Implantologia",
  "contexto": "Paciente com volume ósseo insuficiente. Você fará enxerto ósseo para preparar leito implantário. Quais materiais e biomateriais?",
  "opcoes": [
    {
      "texto": "Osso autógeno (coletado da região) ou alógeno/xenógeno",
      "correto": true
    },
    {
      "texto": "Membrana de barreira reabsorvível",
      "correto": true
    },
    {
      "texto": "Parafusos de fixação de membrana",
      "correto": true
    },
    {
      "texto": "Bisturi e elevadores cirúrgicos",
      "correto": true
    },
    {
      "texto": "Sutura reabsorvível",
      "correto": true
    },
    {
      "texto": "Anestésico local com epinefrina",
      "correto": true
    },
    {
      "texto": "Guta-percha (endodontia)",
      "correto": false
    },
    {
      "texto": "Resina composta",
      "correto": false
    },
    {
      "texto": "Selante de fossetas",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    7,
    7
  ]
},
{
  "id": "MAT-28",
  "titulo": "Ajuste de prótese removível (linha de pescoço)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 1,
  "tempo": 1,
  "area": "Prostodontia",
  "contexto": "Prótese removível está causando irritação em mucosa linha do pescoço. Você fará reembasamento localizado. Quais materiais?",
  "opcoes": [
    {
      "texto": "Carbono articulado para marcar área",
      "correto": true
    },
    {
      "texto": "Bra de alta rotação com ponta troncocônica",
      "correto": true
    },
    {
      "texto": "Resina acrílica auto ou termopolimerizável",
      "correto": true
    },
    {
      "texto": "Monômero para misturar à resina",
      "correto": true
    },
    {
      "texto": "Polidora para acabamento final",
      "correto": true
    },
    {
      "texto": "Gaze para ajuste fino",
      "correto": false
    },
    {
      "texto": "Guta-percha (endodontia)",
      "correto": false
    },
    {
      "texto": "Cimento de obturação",
      "correto": false
    },
    {
      "texto": "Laminado cerâmico",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    6,
    6
  ]
},
{
  "id": "MAT-29",
  "titulo": "Retratamento com microscópio cirúrgico",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 3,
  "tempo": 3,
  "area": "Endodontia",
  "contexto": "Dente com insucesso de tratamento anterior. Você fará retratamento com visualização microcirúrgica. Quais são os materiais?",
  "opcoes": [
    {
      "texto": "Microscópio operatório",
      "correto": true
    },
    {
      "texto": "Ponta ultrassônica para remover guta-percha",
      "correto": true
    },
    {
      "texto": "Limas endodônticas de tamanho apropriado",
      "correto": true
    },
    {
      "texto": "Hipoclorito de sódio 5% para limpeza",
      "correto": true
    },
    {
      "texto": "Guta-percha nova",
      "correto": true
    },
    {
      "texto": "Cimento obturador endodôntico",
      "correto": true
    },
    {
      "texto": "Resina composta (após obturação)",
      "correto": false
    },
    {
      "texto": "Coroa protética (consulta posterior)",
      "correto": false
    },
    {
      "texto": "Fio dental preventivo",
      "correto": false
    }
  ],
  "competencias": [
    9,
    9,
    9,
    9,
    9,
    9,
    8,
    8
  ]
},
{
  "id": "MAT-30",
  "titulo": "Limpeza de implante infectado (periimplantite)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 2,
  "area": "Implantologia",
  "contexto": "Implante com sinais de periimplantite. Você fará limpeza cirúrgica da superfície implantária. Quais materiais?",
  "opcoes": [
    {
      "texto": "Curetas de titânio (compatível com implante)",
      "correto": true
    },
    {
      "texto": "Ponta ultrassônica de titânio",
      "correto": true
    },
    {
      "texto": "Clorexidina 0.12% ou peróxido de hidrogênio para lavar",
      "correto": true
    },
    {
      "texto": "Anestésico local",
      "correto": true
    },
    {
      "texto": "Gaze estéril",
      "correto": true
    },
    {
      "texto": "Sugador de saliva",
      "correto": true
    },
    {
      "texto": "Guta-percha (endodontia)",
      "correto": false
    },
    {
      "texto": "Resina composta (não em implante)",
      "correto": false
    },
    {
      "texto": "Antibiótico sistêmico apenas (sem limpeza local)",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-31",
  "titulo": "Reparação de prótese parcial removível (PPR)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 2,
  "area": "Prostodontia",
  "contexto": "Prótese parcial removível com fratura na sela. Você fará reparo. Quais materiais e técnicas?",
  "opcoes": [
    {
      "texto": "Resina acrílica termopolimerizável",
      "correto": true
    },
    {
      "texto": "Primer e agente de ligação para resina",
      "correto": true
    },
    {
      "texto": "Monômero apropriado",
      "correto": true
    },
    {
      "texto": "Mufla para termopolimerização",
      "correto": true
    },
    {
      "texto": "Bra para acabamento final",
      "correto": true
    },
    {
      "texto": "Papel carbono para ajuste oclusal",
      "correto": true
    },
    {
      "texto": "Guta-percha (endodontia)",
      "correto": false
    },
    {
      "texto": "Cimento de obturação",
      "correto": false
    },
    {
      "texto": "Tira de poliéster",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    6,
    6
  ]
},
{
  "id": "MAT-32",
  "titulo": "Tratamento de bruxismo: confecção de placa de proteção",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 1,
  "tempo": 1,
  "area": "Clínica Geral",
  "contexto": "Paciente diagnosticado com bruxismo noturno. Você fará moldagem para placa de proteção. Quais materiais?",
  "opcoes": [
    {
      "texto": "Moldeira de estoque (tamanho apropriado)",
      "correto": true
    },
    {
      "texto": "Alginato ou silicone leve para moldagem",
      "correto": true
    },
    {
      "texto": "Ativador de alginato",
      "correto": true
    },
    {
      "texto": "Resina acrílica para placa (termopolimerizável)",
      "correto": true
    },
    {
      "texto": "Papel carbono para ajuste de contatos",
      "correto": true
    },
    {
      "texto": "Bra para acabamento suave",
      "correto": true
    },
    {
      "texto": "Guta-percha (endodontia)",
      "correto": false
    },
    {
      "texto": "Laminado cerâmico (para estética)",
      "correto": false
    },
    {
      "texto": "Cimento de obturação",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    6,
    6
  ]
},
{
  "id": "MAT-33",
  "titulo": "Diagnóstico de cárie com métodos auxiliares",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 1,
  "area": "Dentística",
  "contexto": "Paciente com suspeita de cárie interproximal não visível clinicamente. Você usará métodos diagnósticos complementares. Quais?",
  "opcoes": [
    {
      "texto": "Radiografia periapical/interproximal",
      "correto": true
    },
    {
      "texto": "Fio dental para detecção tátil",
      "correto": true
    },
    {
      "texto": "Laser de diagnóstico de fluorescência (DIAGNOdent)",
      "correto": true
    },
    {
      "texto": "Explorador duplo (tato fino)",
      "correto": true
    },
    {
      "texto": "Espelho intraoral",
      "correto": true
    },
    {
      "texto": "Luz halógena ou LED para transioniluminação",
      "correto": true
    },
    {
      "texto": "Guta-percha (endodontia)",
      "correto": false
    },
    {
      "texto": "Cimento de obturação",
      "correto": false
    },
    {
      "texto": "Selante de fossetas",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    6,
    6
  ]
},
{
  "id": "MAT-34",
  "titulo": "Drenagem de abcesso perioral",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 1,
  "area": "Cirurgia Oral",
  "contexto": "Paciente com abcesso endodôntico/periodontal drenando pus. Você fará drenagem cirúrgica. Quais materiais?",
  "opcoes": [
    {
      "texto": "Bisturi cirúrgico para incisão",
      "correto": true
    },
    {
      "texto": "Drenagem (tubo de borracha ou gaze iodofórmica)",
      "correto": true
    },
    {
      "texto": "Anestésico local com epinefrina",
      "correto": true
    },
    {
      "texto": "Sugador cirúrgico",
      "correto": true
    },
    {
      "texto": "Gaze estéril para limpeza",
      "correto": true
    },
    {
      "texto": "Cultura para sensibilidade a antibióticos (se indicado)",
      "correto": true
    },
    {
      "texto": "Guta-percha (para endodontia depois)",
      "correto": false
    },
    {
      "texto": "Resina composta (não em cirurgia aguda)",
      "correto": false
    },
    {
      "texto": "Selante de fossetas",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    7,
    7
  ]
},
{
  "id": "MAT-35",
  "titulo": "Controle de placa em criança (educação)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 1,
  "tempo": 1,
  "area": "Odontopediatria",
  "contexto": "Criança de 4 anos com má higiene bucal. Você fará educação em técnica de escovação. Quais materiais?",
  "opcoes": [
    {
      "texto": "Escova infantil de cerdas macias",
      "correto": true
    },
    {
      "texto": "Pasta de dente infantil (com flúor adequado)",
      "correto": true
    },
    {
      "texto": "Fio dental infantil",
      "correto": true
    },
    {
      "texto": "Modelo de dente grande para demonstração",
      "correto": true
    },
    {
      "texto": "Revelador de placa (solução/pastilha)",
      "correto": true
    },
    {
      "texto": "Espelho infantil para o paciente ver",
      "correto": true
    },
    {
      "texto": "Clorexidina 0.12% (apenas se gengivite)",
      "correto": false
    },
    {
      "texto": "Guta-percha (endodontia)",
      "correto": false
    },
    {
      "texto": "Resina composta",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    6,
    6
  ]
},
{
  "id": "MAT-36",
  "titulo": "Moldagem para coroa protética (primeira etapa)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 2,
  "area": "Prostodontia",
  "contexto": "Dente 14 preparado para coroa. Primeira etapa: moldagem de precisão. Quais materiais e técnicas?",
  "opcoes": [
    {
      "texto": "Silicone putty para moldeira individual",
      "correto": true
    },
    {
      "texto": "Silicone leve para moldagem de precisão",
      "correto": true
    },
    {
      "texto": "Espátula para silicone",
      "correto": true
    },
    {
      "texto": "Fio de retenção/retração se necessário",
      "correto": true
    },
    {
      "texto": "Seringa tríplice para lavar",
      "correto": true
    },
    {
      "texto": "Moldeira de estoque para base",
      "correto": true
    },
    {
      "texto": "Guta-percha (endodontia)",
      "correto": false
    },
    {
      "texto": "Resina composta para toque final (na moldagem)",
      "correto": false
    },
    {
      "texto": "Cimento de obturação",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    6,
    6
  ]
},
{
  "id": "MAT-37",
  "titulo": "Sutura e pontos após cirurgia oral",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 1,
  "area": "Cirurgia Oral",
  "contexto": "Cirurgia de extração com alveolectomia realizada. Agora você fará sutura dos retalhos. Quais materiais?",
  "opcoes": [
    {
      "texto": "Sutura reabsorvível (ácido poliglicólico ou polidioxanona)",
      "correto": true
    },
    {
      "texto": "Agulha apropriada para cirurgia (triangular)",
      "correto": true
    },
    {
      "texto": "Pinça anatômica para retalho",
      "correto": true
    },
    {
      "texto": "Tesoura cirúrgica para corte",
      "correto": true
    },
    {
      "texto": "Porta-agulha cirúrgico",
      "correto": true
    },
    {
      "texto": "Gaze estéril para secar antes de suturar",
      "correto": true
    },
    {
      "texto": "Guta-percha (endodontia)",
      "correto": false
    },
    {
      "texto": "Resina composta (restauração)",
      "correto": false
    },
    {
      "texto": "Selante de fossetas",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    7,
    7
  ]
},
{
  "id": "MAT-38",
  "titulo": "Sensibilidade dental - teste diagnóstico",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 1,
  "area": "Clínica Geral",
  "contexto": "Paciente relata dor ao frio. Você vai fazer testes para confirmar hipersensibilidade dentinária. Quais testes?",
  "opcoes": [
    {
      "texto": "Teste com ar comprimido (resposta dor rápida)",
      "correto": true
    },
    {
      "texto": "Teste com escovação leve",
      "correto": true
    },
    {
      "texto": "Teste com água gelada (resposta nítida)",
      "correto": true
    },
    {
      "texto": "Teste de sensibilidade elétrica (se endodontia)",
      "correto": true
    },
    {
      "texto": "Teste com explorador para tato de cavitação",
      "correto": true
    },
    {
      "texto": "Teste com álcool (irritante, evitar)",
      "correto": false
    },
    {
      "texto": "Teste com suco de limão fresco (irritante)",
      "correto": false
    },
    {
      "texto": "Guta-percha para tratamento imediato",
      "correto": false
    },
    {
      "texto": "Resina composta sem diagnóstico prévio",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    7,
    7,
    7
  ]
},
{
  "id": "MAT-39",
  "titulo": "Aumento de rebordo gengival com Botox (estética)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 2,
  "tempo": 1,
  "area": "Estética",
  "contexto": "Paciente com sorriso gengival por hiperatividade muscular. Você vai fazer aplicação de Botox. Quais materiais?",
  "opcoes": [
    {
      "texto": "Botulinum toxin (marca apropriada)",
      "correto": true
    },
    {
      "texto": "Seringa de insulina 1 mL para aplicação",
      "correto": true
    },
    {
      "texto": "Agulha fina 30 ou 31G",
      "correto": true
    },
    {
      "texto": "Algodão com álcool 70% para assepsia",
      "correto": true
    },
    {
      "texto": "Luvas cirúrgicas estéreis",
      "correto": true
    },
    {
      "texto": "Anestésico tópico ou crioterapia",
      "correto": true
    },
    {
      "texto": "Guta-percha (endodontia)",
      "correto": false
    },
    {
      "texto": "Resina composta",
      "correto": false
    },
    {
      "texto": "Selante de fossetas",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    6,
    6
  ]
},
{
  "id": "MAT-40",
  "titulo": "Avaliação de mobilidade dental (periodontia)",
  "modalidade": "materiais",
  "tipo": "Caso Clínico - Materiais",
  "complexidade": 1,
  "tempo": 1,
  "area": "Periodontia",
  "contexto": "Paciente com periodontite. Você vai avaliar graus de mobilidade dos dentes (1, 2, 3). Quais instrumentos?",
  "opcoes": [
    {
      "texto": "Espelho intraoral para visualização",
      "correto": true
    },
    {
      "texto": "Duas hastes de instrumento (cabo de espelho + explorador)",
      "correto": true
    },
    {
      "texto": "Palpação digital para sentir movimento",
      "correto": true
    },
    {
      "texto": "Sonda periodontal para referência de movimento",
      "correto": true
    },
    {
      "texto": "Radiografia periapical para avaliar altura óssea",
      "correto": true
    },
    {
      "texto": "Anotação clara em prontuário dos graus",
      "correto": true
    },
    {
      "texto": "Guta-percha (endodontia)",
      "correto": false
    },
    {
      "texto": "Resina composta (tratamento)",
      "correto": false
    },
    {
      "texto": "Selante de fossetas",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    6,
    6
  ]
},
{
  "id": "CC-01",
  "titulo": "Escovação adequada: qual é a técnica correta?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Prevenção",
  "contexto": "Um auxiliar está ensinando higiene bucal para uma criança. Qual é a técnica de escovação mais recomendada para remover placa bacteriana de forma eficaz?",
  "opcoes": [
    {
      "texto": "Técnica circular (ou de Fones) - escova em movimento circular nos dentes",
      "correto": true
    },
    {
      "texto": "Técnica horizontal - escova movimentando-se apenas de um lado para o outro",
      "correto": false
    },
    {
      "texto": "Técnica aleatória - escova com movimentos sem padrão definido",
      "correto": false
    },
    {
      "texto": "Técnica de força - escova com movimento forte e rápido em uma direção",
      "correto": false
    }
  ],
  "competencias": [
    8,
    7,
    8,
    6,
    7,
    8,
    7,
    8
  ]
},
{
  "id": "CC-02",
  "titulo": "Frequência de escovação: qual é o recomendado?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Prevenção",
  "contexto": "Um paciente pergunta ao auxiliar: \"Quantas vezes por dia devo escovar os dentes?\" Qual é a resposta mais correta?",
  "opcoes": [
    {
      "texto": "Pelo menos 2 vezes ao dia (manhã e noite), idealmente após refeições",
      "correto": true
    },
    {
      "texto": "Uma vez ao dia é suficiente (de preferência à noite)",
      "correto": false
    },
    {
      "texto": "3 a 4 vezes ao dia, sempre com força",
      "correto": false
    },
    {
      "texto": "Apenas quando houver sintomas de cárie ou dor",
      "correto": false
    }
  ],
  "competencias": [
    7,
    6,
    7,
    5,
    6,
    7,
    6,
    7
  ]
},
{
  "id": "CC-03",
  "titulo": "Uso do fio dental: quando é o momento ideal?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Prevenção",
  "contexto": "O auxiliar está orientando um paciente sobre o uso correto do fio dental. Em qual momento do dia o fio dental deve ser usado?",
  "opcoes": [
    {
      "texto": "À noite, antes de dormir, após a escovação",
      "correto": true
    },
    {
      "texto": "Apenas uma vez ao mês, para limpeza profunda",
      "correto": false
    },
    {
      "texto": "Somente quando há restos de comida visíveis",
      "correto": false
    },
    {
      "texto": "Pela manhã, como substituto da escovação",
      "correto": false
    }
  ],
  "competencias": [
    7,
    6,
    8,
    6,
    7,
    8,
    6,
    7
  ]
},
{
  "id": "CC-04",
  "titulo": "Fluorose dental: qual é a causa principal?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Prevenção",
  "contexto": "Um paciente apresenta manchas brancas/acinzentadas nos dentes. O auxiliar suspeita de fluorose. Qual é a principal causa dessa condição?",
  "opcoes": [
    {
      "texto": "Excesso de flúor durante a formação dos dentes (infância)",
      "correto": true
    },
    {
      "texto": "Falta de escovação adequada dos dentes",
      "correto": false
    },
    {
      "texto": "Consumo excessivo de açúcar",
      "correto": false
    },
    {
      "texto": "Herança genética apenas",
      "correto": false
    }
  ],
  "competencias": [
    8,
    7,
    8,
    7,
    8,
    7,
    7,
    8
  ]
},
{
  "id": "CC-05",
  "titulo": "Flúor em pasta de dente: qual é a concentração recomendada para crianças?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Prevenção",
  "contexto": "Uma mãe pergunta qual pasta de dente usar para sua filha de 4 anos. O auxiliar recomenda pasta com baixo teor de flúor. Qual é o teor adequado?",
  "opcoes": [
    {
      "texto": "500-1000 ppm de flúor (apenas pasta com baixa concentração)",
      "correto": true
    },
    {
      "texto": "5000 ppm de flúor (concentração de adulto)",
      "correto": false
    },
    {
      "texto": "Sem flúor (apenas mecânica de escovação)",
      "correto": false
    },
    {
      "texto": "10000 ppm de flúor (máxima proteção)",
      "correto": false
    }
  ],
  "competencias": [
    8,
    7,
    8,
    7,
    8,
    7,
    7,
    8
  ]
},
{
  "id": "CC-06",
  "titulo": "EPI essencial: qual é o equipamento de proteção mais importante?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Biossegurança",
  "contexto": "Um auxiliar está se preparando para realizar limpeza supragengival em um paciente. Qual é o EPI (Equipamento de Proteção Individual) mais crítico nesse procedimento?",
  "opcoes": [
    {
      "texto": "Luvas, máscara e protetor facial/óculos de proteção",
      "correto": true
    },
    {
      "texto": "Apenas avental de proteção",
      "correto": false
    },
    {
      "texto": "Apenas máscara cirúrgica",
      "correto": false
    },
    {
      "texto": "Apenas luvas de procedimento",
      "correto": false
    }
  ],
  "competencias": [
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9
  ]
},
{
  "id": "CC-07",
  "titulo": "Higienização das mãos: quando é obrigatório lavar as mãos?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Biossegurança",
  "contexto": "Um técnico pergunta qual é o protocolo correto para higienização de mãos. Quando as mãos devem ser lavadas?",
  "opcoes": [
    {
      "texto": "Antes e após atender cada paciente, antes de colocar luvas e após removê-las",
      "correto": true
    },
    {
      "texto": "Apenas ao final do expediente",
      "correto": false
    },
    {
      "texto": "Apenas quando visualmente sujas",
      "correto": false
    },
    {
      "texto": "Não é necessário se usar luvas",
      "correto": false
    }
  ],
  "competencias": [
    9,
    8,
    9,
    8,
    9,
    9,
    8,
    9
  ]
},
{
  "id": "CC-08",
  "titulo": "Exposição a sangue: qual é o procedimento correto?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 2,
  "area": "Biossegurança",
  "contexto": "Durante um procedimento, há exposição acidental de sangue de paciente na pele do auxiliar. Qual é a conduta imediata correta?",
  "opcoes": [
    {
      "texto": "Lavar abundantemente com água e sabão, comunicar ao responsável e documentar",
      "correto": true
    },
    {
      "texto": "Aplicar apenas álcool 70%",
      "correto": false
    },
    {
      "texto": "Continuar o procedimento normalmente, sem preocupação",
      "correto": false
    },
    {
      "texto": "Apenas limpar com papel e esperar",
      "correto": false
    }
  ],
  "competencias": [
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9
  ]
},
{
  "id": "CC-09",
  "titulo": "Descarte de agulhas: qual é o procedimento correto?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Biossegurança",
  "contexto": "Um auxiliar usado uma agulha para anestesia. Como deve ser o descarte correto dessa agulha?",
  "opcoes": [
    {
      "texto": "Em recipiente rígido específico (caixa de perfurocortante) - nunca reutilizar",
      "correto": true
    },
    {
      "texto": "Em lixo comum, envolvida em gaze",
      "correto": false
    },
    {
      "texto": "Enterrada no jardim da clínica",
      "correto": false
    },
    {
      "texto": "Desinfetada e reutilizada",
      "correto": false
    }
  ],
  "competencias": [
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9
  ]
},
{
  "id": "CC-10",
  "titulo": "Esterilização: qual é o método mais comum para instrumentais?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Biossegurança",
  "contexto": "Os instrumentais odontológicos devem ser esterilizados após cada uso. Qual é o método mais confiável para esterilizar instrumentais de aço?",
  "opcoes": [
    {
      "texto": "Autoclave a vapor (121°C, 15-20 minutos)",
      "correto": true
    },
    {
      "texto": "Apenas lavar com água morna e sabão",
      "correto": false
    },
    {
      "texto": "Apenas desinfectar com álcool 70%",
      "correto": false
    },
    {
      "texto": "Expor ao sol por algumas horas",
      "correto": false
    }
  ],
  "competencias": [
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9
  ]
},
{
  "id": "CC-11",
  "titulo": "Instrumental: qual é a função da sonda exploradora?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Instrumentais",
  "contexto": "Um auxiliar está preparando instrumentais para limpeza. Para que serve a sonda exploradora?",
  "opcoes": [
    {
      "texto": "Detectar cáries, cálculos e alterações na superfície dental",
      "correto": true
    },
    {
      "texto": "Remover placa bacteriana acima da gengiva",
      "correto": false
    },
    {
      "texto": "Polir os dentes",
      "correto": false
    },
    {
      "texto": "Aplicar flúor nos dentes",
      "correto": false
    }
  ],
  "competencias": [
    8,
    7,
    8,
    7,
    8,
    8,
    7,
    8
  ]
},
{
  "id": "CC-12",
  "titulo": "Instrumental: qual é a função do espelho intraoral?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Instrumentais",
  "contexto": "Durante o atendimento, o auxiliar usa o espelho intraoral. Qual é sua principal função?",
  "opcoes": [
    {
      "texto": "Visualizar áreas de difícil acesso e refletir luz",
      "correto": true
    },
    {
      "texto": "Aplicar flúor nos dentes posteriores",
      "correto": false
    },
    {
      "texto": "Remover cálculos dentários",
      "correto": false
    },
    {
      "texto": "Secar a boca do paciente",
      "correto": false
    }
  ],
  "competencias": [
    7,
    6,
    7,
    6,
    7,
    7,
    6,
    7
  ]
},
{
  "id": "CC-13",
  "titulo": "Instrumental: qual é a função do sugador de saliva?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Instrumentais",
  "contexto": "O sugador de saliva é um instrumental importante. Qual é sua função principal?",
  "opcoes": [
    {
      "texto": "Remover saliva e manter a visibilidade do campo operatório",
      "correto": true
    },
    {
      "texto": "Remover tártaro dos dentes",
      "correto": false
    },
    {
      "texto": "Aplicar medicamentos",
      "correto": false
    },
    {
      "texto": "Fazer polimento",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    6,
    7,
    7,
    7,
    7
  ]
},
{
  "id": "CC-14",
  "titulo": "Instrumental: qual é a função do raspador de tártaro (Scaler)?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Instrumentais",
  "contexto": "O raspador de tártaro (scaler) é usado em limpeza profissional. Qual é sua função?",
  "opcoes": [
    {
      "texto": "Remover cálculos (tártaro) acima e abaixo da linha da gengiva",
      "correto": true
    },
    {
      "texto": "Polir os dentes após limpeza",
      "correto": false
    },
    {
      "texto": "Aplicar selador de fossetas",
      "correto": false
    },
    {
      "texto": "Remover apenas placa bacteriana",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "CC-15",
  "titulo": "Instrumental: qual é a função da taça de borracha?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Instrumentais",
  "contexto": "A taça de borracha é acoplada a uma peça de mão. Para que ela serve?",
  "opcoes": [
    {
      "texto": "Fazer polimento dental com pasta de profilaxia",
      "correto": true
    },
    {
      "texto": "Remover cálculos",
      "correto": false
    },
    {
      "texto": "Anestesiar o dente",
      "correto": false
    },
    {
      "texto": "Aplicar flúor em gel",
      "correto": false
    }
  ],
  "competencias": [
    8,
    7,
    8,
    7,
    8,
    8,
    7,
    8
  ]
},
{
  "id": "CC-16",
  "titulo": "Materiais: qual é a função do dique de borracha?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Materiais",
  "contexto": "O dique de borracha é usado em vários procedimentos. Qual é sua principal função?",
  "opcoes": [
    {
      "texto": "Isolar o dente e área de trabalho, protegendo o paciente e facilitando o procedimento",
      "correto": true
    },
    {
      "texto": "Secar os dentes após limpeza",
      "correto": false
    },
    {
      "texto": "Substituir o sugador de saliva",
      "correto": false
    },
    {
      "texto": "Apenas proteger o avental do paciente",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "CC-17",
  "titulo": "Materiais: qual é a composição da pasta de profilaxia?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Materiais",
  "contexto": "A pasta de profilaxia é usada para polimento dental. Do que ela é composta?",
  "opcoes": [
    {
      "texto": "Abrasivo (pó), flúor e aglutinante",
      "correto": true
    },
    {
      "texto": "Apenas água destilada",
      "correto": false
    },
    {
      "texto": "Apenas álcool e glicerina",
      "correto": false
    },
    {
      "texto": "Apenas resina e catalisador",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "CC-18",
  "titulo": "Materiais: qual é a função do ácido fosfórico?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Materiais",
  "contexto": "O ácido fosfórico é usado em alguns procedimentos. Qual é sua função principal?",
  "opcoes": [
    {
      "texto": "Preparar a superfície do dente para melhor adesão de materiais (selador, resina)",
      "correto": true
    },
    {
      "texto": "Matar bactérias e desinfetar",
      "correto": false
    },
    {
      "texto": "Dessensibilizar o dente",
      "correto": false
    },
    {
      "texto": "Remover cálculos",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "CC-19",
  "titulo": "Materiais: qual é a função do selador de fossetas?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Materiais",
  "contexto": "O selador de fossetas é um material preventivo. Qual é sua função?",
  "opcoes": [
    {
      "texto": "Selar fossetas e fissuras para evitar cáries",
      "correto": true
    },
    {
      "texto": "Remover cáries já existentes",
      "correto": false
    },
    {
      "texto": "Fazer branqueamento dental",
      "correto": false
    },
    {
      "texto": "Tratar inflamação gengival",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "CC-20",
  "titulo": "Materiais: qual é a diferença entre flúor em gel e em solução?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Materiais",
  "contexto": "Na clínica, há disponível flúor em gel e em solução. Qual é a diferença de aplicação?",
  "opcoes": [
    {
      "texto": "Gel é para aplicação tópica prolongada em moldeira; solução para bochecho rápido",
      "correto": true
    },
    {
      "texto": "São iguais, apenas em formas diferentes",
      "correto": false
    },
    {
      "texto": "Gel é para ingerir; solução para uso tópico",
      "correto": false
    },
    {
      "texto": "Solução é mais forte e nunca deve ser usada",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "CC-21",
  "titulo": "Estruturas: qual é a estrutura mais externa do dente?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Anatomia",
  "contexto": "Um aluno pergunta qual é a estrutura mais dura e externa do dente. Qual é a resposta correta?",
  "opcoes": [
    {
      "texto": "Esmalte (estrutura mineralizada mais dura)",
      "correto": true
    },
    {
      "texto": "Dentina",
      "correto": false
    },
    {
      "texto": "Cemento",
      "correto": false
    },
    {
      "texto": "Polpa dentária",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    6,
    7,
    7,
    7,
    7
  ]
},
{
  "id": "CC-22",
  "titulo": "Estruturas: qual é a camada logo abaixo do esmalte?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Anatomia",
  "contexto": "Qual é a estrutura localizada logo abaixo do esmalte dentário?",
  "opcoes": [
    {
      "texto": "Dentina (mais macia que o esmalte, com sensibilidade)",
      "correto": true
    },
    {
      "texto": "Cemento",
      "correto": false
    },
    {
      "texto": "Osso alveolar",
      "correto": false
    },
    {
      "texto": "Polpa",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    6,
    7,
    7,
    7,
    7
  ]
},
{
  "id": "CC-23",
  "titulo": "Estruturas: qual é a função da polpa dentária?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Anatomia",
  "contexto": "A polpa dentária está no interior do dente. Qual é sua função?",
  "opcoes": [
    {
      "texto": "Nutrir e dar sensibilidade ao dente (contém vasos e nervos)",
      "correto": true
    },
    {
      "texto": "Proteger o dente de atritos",
      "correto": false
    },
    {
      "texto": "Aumentar a dureza do esmalte",
      "correto": false
    },
    {
      "texto": "Apenas preencher o espaço vazio",
      "correto": false
    }
  ],
  "competencias": [
    8,
    7,
    8,
    7,
    8,
    8,
    7,
    8
  ]
},
{
  "id": "CC-24",
  "titulo": "Estruturas: qual é a função do cemento dentário?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Anatomia",
  "contexto": "O cemento é encontrado na raiz do dente. Qual é sua função?",
  "opcoes": [
    {
      "texto": "Fixar o dente ao osso alveolar através do ligamento periodontal",
      "correto": true
    },
    {
      "texto": "Proteger a polpa do dente",
      "correto": false
    },
    {
      "texto": "Aumentar a dureza do dente",
      "correto": false
    },
    {
      "texto": "Apenas recobrir a raiz",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    7,
    8,
    8,
    7,
    8
  ]
},
{
  "id": "CC-25",
  "titulo": "Estruturas: qual é o tipo de dente com 2 cúspides?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Anatomia",
  "contexto": "Durante a revisão de anatomia, qual é o tipo de dente que possui 2 cúspides?",
  "opcoes": [
    {
      "texto": "Prémolar (ou pré-molar)",
      "correto": true
    },
    {
      "texto": "Molar (3 ou mais cúspides)",
      "correto": false
    },
    {
      "texto": "Incisivo (cortante, sem cúspides)",
      "correto": false
    },
    {
      "texto": "Canino (1 cúspide)",
      "correto": false
    }
  ],
  "competencias": [
    8,
    7,
    8,
    7,
    8,
    8,
    7,
    8
  ]
},
{
  "id": "CC-26",
  "titulo": "Procedimento: qual é a sequência correta de limpeza?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 2,
  "area": "Procedimentos",
  "contexto": "Um técnico está começando uma limpeza profissional. Qual é a sequência correta de procedimentos?",
  "opcoes": [
    {
      "texto": "1. Remover cálculo (scaler) 2. Escovar com taça 3. Aplicar flúor",
      "correto": true
    },
    {
      "texto": "1. Aplicar flúor 2. Escovar com taça 3. Remover cálculo",
      "correto": false
    },
    {
      "texto": "1. Escovar com taça 2. Remover cálculo 3. Aplicar flúor",
      "correto": false
    },
    {
      "texto": "Qualquer ordem funciona",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "CC-27",
  "titulo": "Procedimento: quanto tempo deve durar uma limpeza?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Procedimentos",
  "contexto": "Qual é o tempo médio recomendado para uma limpeza profissional (profilaxia)?",
  "opcoes": [
    {
      "texto": "30 a 60 minutos (depende da quantidade de cálculo)",
      "correto": true
    },
    {
      "texto": "5 minutos apenas",
      "correto": false
    },
    {
      "texto": "2 a 3 horas",
      "correto": false
    },
    {
      "texto": "Quanto menos tempo melhor",
      "correto": false
    }
  ],
  "competencias": [
    7,
    6,
    7,
    6,
    7,
    7,
    6,
    7
  ]
},
{
  "id": "CC-28",
  "titulo": "Procedimento: qual é o cuidado ao trabalhar com scaler?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Procedimentos",
  "contexto": "Ao usar o scaler para remover cálculo, qual é o cuidado mais importante?",
  "opcoes": [
    {
      "texto": "Usar movimentos suaves e não danificar o esmalte; evitar forçar",
      "correto": true
    },
    {
      "texto": "Usar força máxima para remover rápido",
      "correto": false
    },
    {
      "texto": "Trabalhar sem cuidado com a gengiva",
      "correto": false
    },
    {
      "texto": "Não usar proteção individual",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "CC-29",
  "titulo": "Procedimento: qual é o tempo de aplicação de flúor em gel?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Procedimentos",
  "contexto": "Quanto tempo o flúor em gel deve permanecer em contato com os dentes?",
  "opcoes": [
    {
      "texto": "4 a 5 minutos (seguindo a orientação do fabricante)",
      "correto": true
    },
    {
      "texto": "30 segundos apenas",
      "correto": false
    },
    {
      "texto": "15 a 20 minutos",
      "correto": false
    },
    {
      "texto": "Quanto mais tempo melhor",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    6,
    7,
    7,
    7,
    7
  ]
},
{
  "id": "CC-30",
  "titulo": "Procedimento: o que o paciente não deve fazer após flúor?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Procedimentos",
  "contexto": "Após a aplicação de flúor em gel, qual é a orientação importante para o paciente?",
  "opcoes": [
    {
      "texto": "Não beber água, não comer nem falar muito por 30 minutos",
      "correto": true
    },
    {
      "texto": "Beber bastante água imediatamente",
      "correto": false
    },
    {
      "texto": "Comer alimentos ácidos para melhorar absorção",
      "correto": false
    },
    {
      "texto": "Lavar a boca vigorosamente",
      "correto": false
    }
  ],
  "competencias": [
    8,
    7,
    8,
    7,
    8,
    8,
    7,
    8
  ]
},
{
  "id": "CC-31",
  "titulo": "Ergonomia: qual é a posição correta do auxiliar?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Ergonomia",
  "contexto": "Durante o atendimento, qual é a posição ergonomicamente correta para o auxiliar?",
  "opcoes": [
    {
      "texto": "Posição 4 e 5 (atrás ou ao lado do paciente, coluna reta)",
      "correto": true
    },
    {
      "texto": "De pé em qualquer posição",
      "correto": false
    },
    {
      "texto": "Sentado de frente para o paciente",
      "correto": false
    },
    {
      "texto": "Agachado",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "CC-32",
  "titulo": "Ergonomia: qual é a altura correta da cadeira do paciente?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Ergonomia",
  "contexto": "A cadeira do paciente deve estar em qual altura durante o procedimento?",
  "opcoes": [
    {
      "texto": "Altura que permita o auxiliar trabalhar com braços na altura do cotovelo (90°)",
      "correto": true
    },
    {
      "texto": "Muito alta para facilitar visualização",
      "correto": false
    },
    {
      "texto": "Muito baixa para melhor controle",
      "correto": false
    },
    {
      "texto": "Qualquer altura",
      "correto": false
    }
  ],
  "competencias": [
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7
  ]
},
{
  "id": "CC-33",
  "titulo": "Ergonomia: qual é o risco de má postura?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Ergonomia",
  "contexto": "Qual é o principal risco de uma postura incorreta durante o trabalho odontológico?",
  "opcoes": [
    {
      "texto": "LER (Lesão por Esforço Repetitivo) e problemas na coluna",
      "correto": true
    },
    {
      "texto": "Melhor visibilidade do campo operatório",
      "correto": false
    },
    {
      "texto": "Maior velocidade de trabalho",
      "correto": false
    },
    {
      "texto": "Não há risco",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "CC-34",
  "titulo": "Ergonomia: qual é o tempo recomendado de pausa?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Ergonomia",
  "contexto": "Qual é o tempo recomendado de pausa a cada 2 horas de trabalho?",
  "opcoes": [
    {
      "texto": "10 a 15 minutos para descanso e alongamento",
      "correto": true
    },
    {
      "texto": "Trabalhar sem pausa o turno todo",
      "correto": false
    },
    {
      "texto": "5 minutos apenas",
      "correto": false
    },
    {
      "texto": "2 horas de pausa",
      "correto": false
    }
  ],
  "competencias": [
    7,
    6,
    7,
    6,
    7,
    7,
    6,
    7
  ]
},
{
  "id": "CC-35",
  "titulo": "Ergonomia: qual é a melhor maneira de transportar equipamentos pesados?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 1,
  "tempo": 1,
  "area": "Ergonomia",
  "contexto": "Como deve ser feito o transporte de materiais pesados na clínica?",
  "opcoes": [
    {
      "texto": "Dobrar as pernas, manter a coluna reta e aproximar o objeto do corpo",
      "correto": true
    },
    {
      "texto": "Dobrar a coluna e levantar com os braços",
      "correto": false
    },
    {
      "texto": "Torcer o tronco enquanto levanta",
      "correto": false
    },
    {
      "texto": "Arrastrar o objeto no chão",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "CC-36",
  "titulo": "Emergência: paciente sente dor durante procedimento. O que fazer?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 2,
  "area": "Emergência",
  "contexto": "Um paciente relata dor durante a limpeza. Qual é a ação correta do auxiliar?",
  "opcoes": [
    {
      "texto": "Parar imediatamente, avisar o dentista e oferecer anestesia se necessário",
      "correto": true
    },
    {
      "texto": "Continuar o procedimento ignorando a dor",
      "correto": false
    },
    {
      "texto": "Pedir ao paciente para relaxar e continuar",
      "correto": false
    },
    {
      "texto": "Remover apenas o instrumento e deixar o paciente esperando",
      "correto": false
    }
  ],
  "competencias": [
    9,
    8,
    9,
    9,
    8,
    9,
    8,
    9
  ]
},
{
  "id": "CC-37",
  "titulo": "Emergência: paciente tem tonteira no consultório. O que fazer?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 2,
  "area": "Emergência",
  "contexto": "Um paciente começa a sentir tonteira durante o atendimento. Qual é a conduta correta?",
  "opcoes": [
    {
      "texto": "Deitar o paciente na cadeira com a cabeça para trás, avisar o dentista, oferecer água",
      "correto": true
    },
    {
      "texto": "Pedir ao paciente para sair da sala",
      "correto": false
    },
    {
      "texto": "Continuar o procedimento normalmente",
      "correto": false
    },
    {
      "texto": "Dar medicamento sem avisar o dentista",
      "correto": false
    }
  ],
  "competencias": [
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9
  ]
},
{
  "id": "CC-38",
  "titulo": "Emergência: paciente está com gengivite severa. O que fazer?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Emergência",
  "contexto": "Um paciente apresenta gengivite severa com sangramento abundante. Qual é a conduta?",
  "opcoes": [
    {
      "texto": "Realizar limpeza suave, orientar sobre higiene e marcar reavaliação",
      "correto": true
    },
    {
      "texto": "Realizar raspagem profunda imediatamente",
      "correto": false
    },
    {
      "texto": "Não fazer nada, apenas orientar",
      "correto": false
    },
    {
      "texto": "Remover os dentes",
      "correto": false
    }
  ],
  "competencias": [
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ]
},
{
  "id": "CC-39",
  "titulo": "Emergência: paciente tem alergia a látex. Como proceder?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 2,
  "tempo": 1,
  "area": "Emergência",
  "contexto": "Um paciente relata alergia a látex. Qual é o procedimento correto?",
  "opcoes": [
    {
      "texto": "Usar luvas e equipamentos sem látex durante todo atendimento",
      "correto": true
    },
    {
      "texto": "Usar luvas de látex normalmente (alergia é rara)",
      "correto": false
    },
    {
      "texto": "Não usar nenhuma proteção",
      "correto": false
    },
    {
      "texto": "Usar apenas látex de qualidade premium",
      "correto": false
    }
  ],
  "competencias": [
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9
  ]
},
{
  "id": "CC-40",
  "titulo": "Emergência: paciente apresenta reação alérgica. O que fazer?",
  "modalidade": "clinico",
  "tipo": "Caso Clínico",
  "complexidade": 3,
  "tempo": 2,
  "area": "Emergência",
  "contexto": "Um paciente desenvolve reação alérgica (prurido, inchaço de lábios) durante atendimento. Qual é a ação?",
  "opcoes": [
    {
      "texto": "Parar procedimento, avisar dentista, remover agente causador, manter paciente calmo, chamar socorro se necessário",
      "correto": true
    },
    {
      "texto": "Continuar o procedimento normalmente",
      "correto": false
    },
    {
      "texto": "Apenas oferecer água",
      "correto": false
    },
    {
      "texto": "Deixar o paciente sair da sala sozinho",
      "correto": false
    }
  ],
  "competencias": [
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9
  ]
}
];
