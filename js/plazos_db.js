const normativas_db = {
  "civil": {
    "nombre": "Civil (COGEP)",
    "procedimientos": [
      {
        "nombre": "Procedimiento Ordinario",
        "actuaciones": [
          { "nombre": "Contestación a la demanda", "dias": 30, "tipo": "termino", "base_legal": "Art. 291 COGEP" },
          { "nombre": "Reconvención (contestación)", "dias": 30, "tipo": "termino", "base_legal": "Art. 291 COGEP" },
          { "nombre": "Tercería", "dias": 10, "tipo": "termino", "base_legal": "Art. 48 COGEP", "excepciones": "Se propondrá dentro del término de 10 días después de la notificación de la convocatoria a audiencia de juicio." }
        ]
      },
      {
        "nombre": "Procedimiento Sumario",
        "actuaciones": [
          { "nombre": "Contestación a la demanda", "dias": 15, "tipo": "termino", "base_legal": "Art. 333 num 3 COGEP" },
          { "nombre": "Tercería", "dias": 5, "tipo": "termino", "base_legal": "Art. 48 COGEP", "excepciones": "Dentro de los 5 días antes de la fecha de realización de la respectiva audiencia." }
        ]
      },
      {
        "nombre": "Procedimiento Ejecutivo",
        "actuaciones": [
          { "nombre": "Contestación a la demanda (Oposición/Pago)", "dias": 15, "tipo": "termino", "base_legal": "Art. 351 COGEP" },
          { "nombre": "Apelación de sentencia", "dias": 10, "tipo": "termino", "base_legal": "Art. 256 COGEP", "excepciones": "Únicamente con efecto no suspensivo." }
        ]
      },
      {
        "nombre": "Recursos Horizontales y Verticales",
        "actuaciones": [
          { "nombre": "Aclaración o ampliación (por escrito)", "dias": 3, "tipo": "termino", "base_legal": "Art. 255 COGEP" },
          { "nombre": "Apelación de sentencia o auto", "dias": 10, "tipo": "termino", "base_legal": "Art. 256 COGEP", "excepciones": "5 días en materia de Niñez y Adolescencia." },
          { "nombre": "Casación", "dias": 30, "tipo": "termino", "base_legal": "Art. 266 COGEP" },
          { "nombre": "Recurso de Hecho", "dias": 3, "tipo": "termino", "base_legal": "Art. 280 COGEP" }
        ]
      }
    ]
  },
  "penal": {
    "nombre": "Penal (COIP)",
    "procedimientos": [
      {
        "nombre": "Instrucción Fiscal",
        "actuaciones": [
          { "nombre": "Duración de Instrucción (Delitos flagrantes)", "dias": 30, "tipo": "plazo", "base_legal": "Art. 592 COIP" },
          { "nombre": "Duración de Instrucción (Delitos tránsito)", "dias": 45, "tipo": "plazo", "base_legal": "Art. 592 COIP" },
          { "nombre": "Duración de Instrucción (Ordinario)", "dias": 90, "tipo": "plazo", "base_legal": "Art. 592 COIP", "excepciones": "Puede extenderse hasta 30 días más en caso de vinculaciones, sin superar los 120 días." }
        ]
      },
      {
        "nombre": "Recursos en Materia Penal",
        "actuaciones": [
          { "nombre": "Aclaración o ampliación", "dias": 3, "tipo": "termino", "base_legal": "Art. 652 num 8 COIP" },
          { "nombre": "Apelación de auto o sentencia", "dias": 3, "tipo": "termino", "base_legal": "Art. 653 COIP" },
          { "nombre": "Casación", "dias": 5, "tipo": "termino", "base_legal": "Art. 657 COIP" },
          { "nombre": "Revisión", "dias": 0, "tipo": "indefinido", "base_legal": "Art. 658 COIP", "excepciones": "Podrá proponerse en cualquier tiempo, después de ejecutoriada la sentencia condenatoria." }
        ]
      }
    ]
  },
  "laboral": {
    "nombre": "Laboral (CT - COGEP)",
    "procedimientos": [
      {
        "nombre": "Fase Administrativa (Visto Bueno)",
        "actuaciones": [
          { "nombre": "Contestación al Visto Bueno", "dias": 2, "tipo": "termino", "base_legal": "Art. 621 Código del Trabajo" },
          { "nombre": "Resolución de Inspector de Trabajo", "dias": 3, "tipo": "termino", "base_legal": "Art. 621 Código del Trabajo" }
        ]
      },
      {
        "nombre": "Fase Judicial (Sumario Laboral)",
        "actuaciones": [
          { "nombre": "Contestación a la demanda", "dias": 15, "tipo": "termino", "base_legal": "Art. 333 num 3 COGEP", "excepciones": "10 días si se trata de despido intempestivo de mujeres embarazadas, en lactancia o dirigentes sindicales." },
          { "nombre": "Apelación", "dias": 10, "tipo": "termino", "base_legal": "Art. 256 COGEP" }
        ]
      }
    ]
  },
  "familia": {
    "nombre": "Familia (CNA - COGEP)",
    "procedimientos": [
      {
        "nombre": "Alimentos y Visitas (Sumario)",
        "actuaciones": [
          { "nombre": "Contestación a la demanda", "dias": 15, "tipo": "termino", "base_legal": "Art. 333 COGEP" },
          { "nombre": "Apelación", "dias": 5, "tipo": "termino", "base_legal": "Art. 256 COGEP / Reforma R.O. 517-S", "excepciones": "En materia de niñez y adolescencia el término para apelar y contestar es de 5 días." }
        ]
      }
    ]
  },
  "administrativo": {
    "nombre": "Administrativo (COA - COGEP)",
    "procedimientos": [
      {
        "nombre": "Sede Administrativa (COA)",
        "actuaciones": [
          { "nombre": "Recurso de Apelación", "dias": 10, "tipo": "termino", "base_legal": "Art. 224 COA" },
          { "nombre": "Recurso Extraordinario de Revisión", "dias": 20, "tipo": "termino", "base_legal": "Art. 232 COA", "excepciones": "Para actos nulos (num 1): 1 año desde el acto. Para otros nums (2,3,4,5): 20 días desde el conocimiento del motivo." },
          { "nombre": "Resolución de Apelación", "dias": 30, "tipo": "termino", "base_legal": "Art. 226 COA" }
        ]
      },
      {
        "nombre": "Sede Judicial (Contencioso Administrativo - COGEP)",
        "actuaciones": [
          { "nombre": "Demanda subjetiva o plena jurisdicción", "dias": 90, "tipo": "termino", "base_legal": "Art. 306 num 1 COGEP" },
          { "nombre": "Demanda objetiva o anulación por exceso de poder", "dias": 1095, "tipo": "plazo", "base_legal": "Art. 306 num 2 COGEP", "excepciones": "Equivalente a 3 años." },
          { "nombre": "Contestación a la demanda", "dias": 30, "tipo": "termino", "base_legal": "Art. 291 COGEP" }
        ]
      }
    ]
  },
  "constitucional": {
    "nombre": "Constitucional (LOGJCC)",
    "procedimientos": [
      {
        "nombre": "Garantías Jurisdiccionales",
        "actuaciones": [
          { "nombre": "Apelación (Acción de Protección, Hábeas Corpus, etc)", "dias": 3, "tipo": "termino", "base_legal": "Art. 24 LOGJCC" },
          { "nombre": "Acción Extraordinaria de Protección", "dias": 20, "tipo": "termino", "base_legal": "Art. 60 LOGJCC", "excepciones": "20 días contados desde la notificación del auto definitivo o sentencia ejecutoriada." },
          { "nombre": "Acción de Incumplimiento", "dias": 40, "tipo": "termino", "base_legal": "Art. 54 LOGJCC", "excepciones": "40 días desde que el funcionario debió cumplir o se requirió su cumplimiento." }
        ]
      }
    ]
  },
  "transito": {
    "nombre": "Tránsito (COIP - LOTTTSV)",
    "procedimientos": [
      {
        "nombre": "Contravenciones de Tránsito",
        "actuaciones": [
          { "nombre": "Impugnación de boleta de tránsito", "dias": 3, "tipo": "termino", "base_legal": "Art. 644 COIP", "excepciones": "Contados a partir de la notificación de la boleta." }
        ]
      },
      {
        "nombre": "Vía Administrativa",
        "actuaciones": [
          { "nombre": "Apelación de resolución administrativa", "dias": 10, "tipo": "termino", "base_legal": "Art. 224 COA (aplicación supletoria)" }
        ]
      }
    ]
  }
};
