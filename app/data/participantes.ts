// Fuente: PLAYERAS COMPETENCIA FFC OAX.xlsx, hoja PLAYERAS FFC.
// NUMT es el número de kit. El género de TEENS MIXTO no está especificado en la fuente.
export type AtletaEquipo = {
  nombre: string;
  talla: string;
  genero: string;
};

export type EquipoParticipante = {
  num: number;
  equipo: string;
  categoria: string;
  atletas: AtletaEquipo[];
};

export const PARTICIPANTES: EquipoParticipante[] = [
  {
    "num": 1,
    "equipo": "ROMINA SARMIENTO",
    "categoria": "TEENS 12-15 MIXTO",
    "atletas": [
      {
        "nombre": "ROMINA SARMIENTO",
        "talla": "M",
        "genero": ""
      }
    ]
  },
  {
    "num": 2,
    "equipo": "Santiago Garrido Cervantes",
    "categoria": "TEENS 12-15 MIXTO",
    "atletas": [
      {
        "nombre": "Santiago Garrido Cervantes",
        "talla": "M",
        "genero": ""
      }
    ]
  },
  {
    "num": 3,
    "equipo": "Alan David Trujillo Vargas",
    "categoria": "TEENS 12-15 MIXTO",
    "atletas": [
      {
        "nombre": "Alan David Trujillo Vargas",
        "talla": "L",
        "genero": ""
      }
    ]
  },
  {
    "num": 4,
    "equipo": "Ruben Jaasiel Vasquez Rivera",
    "categoria": "TEENS 12-15 MIXTO",
    "atletas": [
      {
        "nombre": "Ruben Jaasiel Vasquez Rivera",
        "talla": "M",
        "genero": ""
      }
    ]
  },
  {
    "num": 5,
    "equipo": "Aranza Bolan",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Aranza Bolan",
        "talla": "L",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 6,
    "equipo": "Carmen Ramires",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Carmen Ramires",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 7,
    "equipo": "Salma Diaz",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Salma Diaz",
        "talla": "L",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 8,
    "equipo": "Dulce Maritzel Luis Sanchez",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Dulce Maritzel Luis Sanchez",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 9,
    "equipo": "Maricarmen Villa Ortiz",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Maricarmen Villa Ortiz",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 10,
    "equipo": "SAIDA ENEIDA PEREZ",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "SAIDA ENEIDA PEREZ",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 11,
    "equipo": "Quetzalin Yadel",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Quetzalin Yadel",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 12,
    "equipo": "Lirio Martínez Pineda",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Lirio Martínez Pineda",
        "talla": "L",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 13,
    "equipo": "May lee Aquino cano",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "May lee Aquino cano",
        "talla": "XL",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 14,
    "equipo": "Maritza Díaz López",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Maritza Díaz López",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 15,
    "equipo": "Andrea Donaji Cruz Guzman",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Andrea Donaji Cruz Guzman",
        "talla": "L",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 16,
    "equipo": "Sagrario Rivera Martínez",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Sagrario Rivera Martínez",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 17,
    "equipo": "Camila Ramírez",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Camila Ramírez",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 18,
    "equipo": "yanet Cervantes López",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "yanet Cervantes López",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 19,
    "equipo": "Mariana Miranda Avila",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Mariana Miranda Avila",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 20,
    "equipo": "Marintia García",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Marintia García",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 21,
    "equipo": "Issel Gómez Angoa",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Issel Gómez Angoa",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 22,
    "equipo": "Janet Lucero Jiménez",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Janet Lucero Jiménez",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 23,
    "equipo": "Vanesa Alcazar Ramírez",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Vanesa Alcazar Ramírez",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 24,
    "equipo": "Alexha Vargas Palacios",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Alexha Vargas Palacios",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 25,
    "equipo": "Yaretzi Velasco Ramírez",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Yaretzi Velasco Ramírez",
        "talla": "XS",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 26,
    "equipo": "Dulce Isela Osorio Gómez",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Dulce Isela Osorio Gómez",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 27,
    "equipo": "Joselin Velázquez Martínez",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Joselin Velázquez Martínez",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 28,
    "equipo": "Rosario Siadani García Valencia",
    "categoria": "PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Rosario Siadani García Valencia",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 34,
    "equipo": "Alberto Sierra",
    "categoria": "PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "Alberto Sierra",
        "talla": "XL",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 35,
    "equipo": "Abimael Santiago Soriano",
    "categoria": "PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "Abimael Santiago Soriano",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 36,
    "equipo": "Fernando Santiago Soriano",
    "categoria": "PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "Fernando Santiago Soriano",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 37,
    "equipo": "Gregorio González Flores",
    "categoria": "PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "Gregorio González Flores",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 38,
    "equipo": "Iván Caballero",
    "categoria": "PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "Iván Caballero",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 39,
    "equipo": "Fredy Alexander Figueroa Martínez",
    "categoria": "PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "Fredy Alexander Figueroa Martínez",
        "talla": "S",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 40,
    "equipo": "Luis Angel Pérez Herrera",
    "categoria": "PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "Luis Angel Pérez Herrera",
        "talla": "XL",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 41,
    "equipo": "Neftali Ramos Aleman",
    "categoria": "PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "Neftali Ramos Aleman",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 42,
    "equipo": "Jafet Lopez",
    "categoria": "PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "Jafet Lopez",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 43,
    "equipo": "Yaravid Velázquez Ramírez",
    "categoria": "INTERMEDIOS FEMENIL",
    "atletas": [
      {
        "nombre": "Yaravid Velázquez Ramírez",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 44,
    "equipo": "SONIA POSADAS REYES",
    "categoria": "INTERMEDIOS FEMENIL",
    "atletas": [
      {
        "nombre": "SONIA POSADAS REYES",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 48,
    "equipo": "emmanuel díaz garcía",
    "categoria": "INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "emmanuel díaz garcía",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 49,
    "equipo": "Alexis Antonio Rodríguez Galindo",
    "categoria": "INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Alexis Antonio Rodríguez Galindo",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 50,
    "equipo": "MISAEL BOHORQUEZ OJEDA",
    "categoria": "INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "MISAEL BOHORQUEZ OJEDA",
        "talla": "S",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 51,
    "equipo": "José Antonio Toledo Villalobos",
    "categoria": "INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "José Antonio Toledo Villalobos",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 52,
    "equipo": "Darwing García Andrede",
    "categoria": "INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Darwing García Andrede",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 53,
    "equipo": "Darwing García Andrade",
    "categoria": "INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Darwing García Andrade",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 54,
    "equipo": "José Daniel García Santos",
    "categoria": "INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "José Daniel García Santos",
        "talla": "XS",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 55,
    "equipo": "Freddy Guzmán santiago",
    "categoria": "INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Freddy Guzmán santiago",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 56,
    "equipo": "Hugo Orlando García González",
    "categoria": "INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Hugo Orlando García González",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 57,
    "equipo": "Juan Montesinos Ibáñez",
    "categoria": "INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Juan Montesinos Ibáñez",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 58,
    "equipo": "Andrés ESCOBAR JIMENEZ",
    "categoria": "INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Andrés ESCOBAR JIMENEZ",
        "talla": "S",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 59,
    "equipo": "Luis Alberto Ortiz",
    "categoria": "INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Luis Alberto Ortiz",
        "talla": "S",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 60,
    "equipo": "Herman enrique Balanzar Guzmán",
    "categoria": "INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Herman enrique Balanzar Guzmán",
        "talla": "XL",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 65,
    "equipo": "Ivany Culebro De Lucio",
    "categoria": "AVANZADOS FEMENIL",
    "atletas": [
      {
        "nombre": "Ivany Culebro De Lucio",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 66,
    "equipo": "Ayumi Lopez",
    "categoria": "AVANZADOS FEMENIL",
    "atletas": [
      {
        "nombre": "Ayumi Lopez",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 67,
    "equipo": "Herman Isaac Balanzar Guzman",
    "categoria": "AVANZADOS VARONIL",
    "atletas": [
      {
        "nombre": "Herman Isaac Balanzar Guzman",
        "talla": "XL",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 68,
    "equipo": "Darien Sanchez Vasconcelos",
    "categoria": "AVANZADOS VARONIL",
    "atletas": [
      {
        "nombre": "Darien Sanchez Vasconcelos",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 69,
    "equipo": "Valentín Elorza",
    "categoria": "AVANZADOS VARONIL",
    "atletas": [
      {
        "nombre": "Valentín Elorza",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 70,
    "equipo": "Ricardo Castillejos Hernández",
    "categoria": "AVANZADOS VARONIL",
    "atletas": [
      {
        "nombre": "Ricardo Castillejos Hernández",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 73,
    "equipo": "Pedro Barrita pacheco",
    "categoria": "AVANZADOS VARONIL",
    "atletas": [
      {
        "nombre": "Pedro Barrita pacheco",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  }
];
