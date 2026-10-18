// Fuente: Coliseum2026_20261018125212.xlsx, hoja TODOS (corte 18/10/2026).
// NUMT identifica el kit; las parejas tienen dos atletas y Masters uno.
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
    "equipo": "TITAN STRIKE",
    "categoria": "PARTNER NOVATO VARONIL",
    "atletas": [
      {
        "nombre": "Daniel Tetepa Ramirez",
        "talla": "M",
        "genero": "Hombre"
      },
      {
        "nombre": "Alan Zepeda Casas",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 2,
    "equipo": "LAS BICOLOR ??????????",
    "categoria": "PARTNER NOVATO VARONIL",
    "atletas": [
      {
        "nombre": "Rodrigo Del angel",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "Eduardo Blas Blanco",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 3,
    "equipo": "Rocko boys",
    "categoria": "PARTNER NOVATO VARONIL",
    "atletas": [
      {
        "nombre": "Ángel Cruz",
        "talla": "S",
        "genero": "Hombre"
      },
      {
        "nombre": "Rafael Vilchis",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 4,
    "equipo": "Mateatletas",
    "categoria": "PARTNER NOVATO VARONIL",
    "atletas": [
      {
        "nombre": "Hector Guzman Rojas",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "Eduardo Alexis Valencia Dorantes",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 5,
    "equipo": "TlaloKittys",
    "categoria": "PARTNER NOVATO FEMENIL",
    "atletas": [
      {
        "nombre": "Jimena López Munguia",
        "talla": "XL",
        "genero": "Mujer"
      },
      {
        "nombre": "Karen Verónica Castro Santillán",
        "talla": "S",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 6,
    "equipo": "Charon y su jefa",
    "categoria": "PARTNER NOVATO FEMENIL",
    "atletas": [
      {
        "nombre": "Sharon Alexia Murillo Islas",
        "talla": "L",
        "genero": "Mujer"
      },
      {
        "nombre": "Elizabeth Islas Ruiz",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 7,
    "equipo": "Las Sin Recreo",
    "categoria": "PARTNER NOVATO FEMENIL",
    "atletas": [
      {
        "nombre": "María de Jesús Ortiz Ramírez",
        "talla": "M",
        "genero": "Mujer"
      },
      {
        "nombre": "Ivette del Angel Luna",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 8,
    "equipo": "Bombón & Bellota",
    "categoria": "PARTNER NOVATO FEMENIL",
    "atletas": [
      {
        "nombre": "Mercedes Mejía Serrano",
        "talla": "L",
        "genero": "Mujer"
      },
      {
        "nombre": "Itzel Irais Hernandez Gomez Gil",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 9,
    "equipo": "She-WODs",
    "categoria": "PARTNER NOVATO FEMENIL",
    "atletas": [
      {
        "nombre": "Melissa Ramos",
        "talla": "M",
        "genero": "Mujer"
      },
      {
        "nombre": "Paulina Cerón Juárez",
        "talla": "L",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 10,
    "equipo": "Las \"Y si sí\"",
    "categoria": "PARTNER NOVATO FEMENIL",
    "atletas": [
      {
        "nombre": "Norma Angelica Guerrero Soliman",
        "talla": "L",
        "genero": "Mujer"
      },
      {
        "nombre": "Esmeralda Moran Corona",
        "talla": "XL",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 11,
    "equipo": "Lobas tóxicas",
    "categoria": "PARTNER NOVATO FEMENIL",
    "atletas": [
      {
        "nombre": "Irais Adriana Medina Sánchez",
        "talla": "L",
        "genero": "Mujer"
      },
      {
        "nombre": "Tania Rodríguez villaseñor",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 12,
    "equipo": "The Chosen",
    "categoria": "PARTNER NOVATO FEMENIL",
    "atletas": [
      {
        "nombre": "Martha Medina Villanueva",
        "talla": "S",
        "genero": "Mujer"
      },
      {
        "nombre": "Beatriz Villanueva",
        "talla": "S",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 13,
    "equipo": "Las Mamásonicas",
    "categoria": "PARTNER NOVATO FEMENIL",
    "atletas": [
      {
        "nombre": "Lau Bello Ubario",
        "talla": "L",
        "genero": "Mujer"
      },
      {
        "nombre": "Miriam De anda",
        "talla": "L",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 14,
    "equipo": "BH Stars",
    "categoria": "PARTNER NOVATO FEMENIL",
    "atletas": [
      {
        "nombre": "Jessica Téllez Ramírez",
        "talla": "S",
        "genero": "Mujer"
      },
      {
        "nombre": "Rebeca Ramírez Blas",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 15,
    "equipo": "Las Catrinas de Concepto",
    "categoria": "PARTNER NOVATO FEMENIL",
    "atletas": [
      {
        "nombre": "Ana Karen Velazquez Cuevas",
        "talla": "XL",
        "genero": "Mujer"
      },
      {
        "nombre": "Alexia Jalpa Flores",
        "talla": "L",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 16,
    "equipo": "LUKA",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Luz María Méndez Marcos",
        "talla": "S",
        "genero": "Mujer"
      },
      {
        "nombre": "Karla Alejandra Pérez Rodríguez",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 17,
    "equipo": "Umbral Athletics",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "EVELYN NUÑEZ LIMAS",
        "talla": "L",
        "genero": "Mujer"
      },
      {
        "nombre": "Citlalli Yoltzin Franco Maldonado",
        "talla": "L",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 18,
    "equipo": "Las dramáticas de dragons",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Erika Acevedo",
        "talla": "M",
        "genero": "Mujer"
      },
      {
        "nombre": "Miriam Cruz Palacios",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 19,
    "equipo": "DaVi Power",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Victoria Morales Ocampo",
        "talla": "L",
        "genero": "Mujer"
      },
      {
        "nombre": "Daniela Rosas",
        "talla": "L",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 20,
    "equipo": "Wolfs Girls",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Sheila Morán Corona",
        "talla": "L",
        "genero": "Mujer"
      },
      {
        "nombre": "Elizabeth Vera Sánchez",
        "talla": "S",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 21,
    "equipo": "Rocko girls",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Sofia Guadalupe Delgado Pimentel",
        "talla": "S",
        "genero": "Mujer"
      },
      {
        "nombre": "Elisabeth De Jesús de Jesús",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 22,
    "equipo": "Burpee Babes",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Andrea Valencia",
        "talla": "M",
        "genero": "Mujer"
      },
      {
        "nombre": "Karen Yozelin Villalva Garcia",
        "talla": "S",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 23,
    "equipo": "Amonos reSio",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Angelica Roman Garcia",
        "talla": "L",
        "genero": "Mujer"
      },
      {
        "nombre": "Paola Chavez",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 24,
    "equipo": "Pink Queens",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Katia Martinez",
        "talla": "S",
        "genero": "Mujer"
      },
      {
        "nombre": "Alejandra Monserrat Martínez Aguilar",
        "talla": "S",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 25,
    "equipo": "Double Trouble",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Ana Elisa Montiel Jarillo",
        "talla": "M",
        "genero": "Mujer"
      },
      {
        "nombre": "Marcela Bastida Uribe",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 26,
    "equipo": "Las umbralitas del Iron",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Samanta Valle Hernandez",
        "talla": "M",
        "genero": "Mujer"
      },
      {
        "nombre": "Bibiana Elizabet García Paz",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 27,
    "equipo": "40 y 20",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Evelyn Danelia Hernández llamas",
        "talla": "L",
        "genero": "Mujer"
      },
      {
        "nombre": "Danelia Alejandra Obregón Hernández",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 28,
    "equipo": "Valkirias",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Vanessa Monserrat González Jiménez",
        "talla": "M",
        "genero": "Mujer"
      },
      {
        "nombre": "Lidia Leticia Osornio Manzano",
        "talla": "L",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 29,
    "equipo": "Casi atletas",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Brenda Lizbeth Rivera Zavala",
        "talla": "M",
        "genero": "Mujer"
      },
      {
        "nombre": "Geraldine Alexey Mercado Hernández",
        "talla": "L",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 30,
    "equipo": "Woderpuff",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Ana Karen Sánchez Utrilla",
        "talla": "L",
        "genero": "Mujer"
      },
      {
        "nombre": "Valeria Eleana Pichardo Vargas",
        "talla": "L",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 31,
    "equipo": "Crossfiteras del Barrio",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Susana Hermenegildo Cano",
        "talla": "L",
        "genero": "Mujer"
      },
      {
        "nombre": "Maria Fernanda Aguilar  Mayoral",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 32,
    "equipo": "Gordolobas",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Minerva Gurría Orduña",
        "talla": "XL",
        "genero": "Mujer"
      },
      {
        "nombre": "Maria del Rosario Ramos Millán",
        "talla": "S",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 33,
    "equipo": "Latin Power",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Alexandra Jimenez Moncada",
        "talla": "M",
        "genero": "Mujer"
      },
      {
        "nombre": "Erika Isabella García Mendoza",
        "talla": "L",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 34,
    "equipo": "Las Inestables",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Nimsi Campos Xolalpa",
        "talla": "M",
        "genero": "Mujer"
      },
      {
        "nombre": "Anayeli Alejandre",
        "talla": "S",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 35,
    "equipo": "Apocalipticas",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Alejandra Parra Pasohondo",
        "talla": "L",
        "genero": "Mujer"
      },
      {
        "nombre": "Diana González S",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 36,
    "equipo": "Barbell Besties",
    "categoria": "PARTNERS PRINCIPIANTES FEMENIL",
    "atletas": [
      {
        "nombre": "Sandra Saavedra Alvarado",
        "talla": "M",
        "genero": "Mujer"
      },
      {
        "nombre": "Paulina Viramontes Hernández",
        "talla": "L",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 37,
    "equipo": "LIONHEART",
    "categoria": "PARTNERS PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "José Ángel Chávez Sánchez",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "Jhonatan Carlos Ramos",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 38,
    "equipo": "The brothes Mali",
    "categoria": "PARTNERS PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "Luis Eduardo González Nogueron",
        "talla": "M",
        "genero": "Hombre"
      },
      {
        "nombre": "Erik Marco Nogueron Fragoso",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 39,
    "equipo": "????Q2",
    "categoria": "PARTNERS PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "Andrés Antonio Hernández Alderete",
        "talla": "S",
        "genero": "Hombre"
      },
      {
        "nombre": "Marlon Gerardo Mercado Hernandez",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 40,
    "equipo": "Kame Black",
    "categoria": "PARTNERS PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "Giovanni Rocha",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "Edwar Gomez Jimenez",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 41,
    "equipo": "Luis por Luis",
    "categoria": "PARTNERS PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "Luis Gerardo Fosado Baños",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "Luis felipe Ruiz hernandez",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 42,
    "equipo": "The Punisher’s",
    "categoria": "PARTNERS PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "Luis Guevara",
        "talla": "XL",
        "genero": "Hombre"
      },
      {
        "nombre": "omar cesar sandoval pardave",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 43,
    "equipo": "Balamcitos",
    "categoria": "PARTNERS PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "José Eduardo Diaz Cristóbal",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "Juan Castillo contreras",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 44,
    "equipo": "Los sin prisa pero sin pausa",
    "categoria": "PARTNERS PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "Victor Mejia",
        "talla": "M",
        "genero": "Hombre"
      },
      {
        "nombre": "David Campos",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 45,
    "equipo": "Los rucainols bh",
    "categoria": "PARTNERS PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "CESAR israel Valle GARCIA",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "Ivan Moreno",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 46,
    "equipo": "Los sin aire",
    "categoria": "PARTNERS PRINCIPIANTES VARONIL",
    "atletas": [
      {
        "nombre": "Abraham Isaí Rodriguez Lozano",
        "talla": "S",
        "genero": "Hombre"
      },
      {
        "nombre": "Isaac E",
        "talla": "S",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 47,
    "equipo": "Papois",
    "categoria": "PARTNERS INTERMEDIOS FEMENIL",
    "atletas": [
      {
        "nombre": "Carolina Ré Pillado",
        "talla": "S",
        "genero": "Mujer"
      },
      {
        "nombre": "Nailea Tapia",
        "talla": "S",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 48,
    "equipo": "The wod Warriors",
    "categoria": "PARTNERS INTERMEDIOS FEMENIL",
    "atletas": [
      {
        "nombre": "Elizabeth Altamirano flores",
        "talla": "M",
        "genero": "Mujer"
      },
      {
        "nombre": "Fabiola Salinas Ramírez",
        "talla": "L",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 49,
    "equipo": "LIFT HAPPENS",
    "categoria": "PARTNERS INTERMEDIOS FEMENIL",
    "atletas": [
      {
        "nombre": "Andrea Victorica Vázquez",
        "talla": "S",
        "genero": "Mujer"
      },
      {
        "nombre": "KARLA LOMELI",
        "talla": "L",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 50,
    "equipo": "Paws to Bar",
    "categoria": "PARTNERS INTERMEDIOS FEMENIL",
    "atletas": [
      {
        "nombre": "Emmanuelle Stevenin",
        "talla": "M",
        "genero": "Mujer"
      },
      {
        "nombre": "Coral Paz Lemus",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 51,
    "equipo": "Las chinas de Cam",
    "categoria": "PARTNERS INTERMEDIOS FEMENIL",
    "atletas": [
      {
        "nombre": "Claudia Belem Alfaro Fragoso",
        "talla": "M",
        "genero": "Mujer"
      },
      {
        "nombre": "Miriam Alicia Hernandez tovar",
        "talla": "S",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 52,
    "equipo": "Blazing Dragons",
    "categoria": "PARTNERS INTERMEDIOS FEMENIL",
    "atletas": [
      {
        "nombre": "Ariana Aguilera Mendoza",
        "talla": "M",
        "genero": "Mujer"
      },
      {
        "nombre": "Nancy Martínez Jiménez",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 53,
    "equipo": "Catcerberus",
    "categoria": "PARTNERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Gildardo Rodriguez",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "Rodolfo Artuto Campos Monroy",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 54,
    "equipo": "CrossBonitos",
    "categoria": "PARTNERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Axel Varela",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "Luis Gabriel Torres Meza",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 55,
    "equipo": "HELLFISH",
    "categoria": "PARTNERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Pedro Ortiz R",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "Sergio Sánchez Landeros",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 56,
    "equipo": "De Norte a Sur",
    "categoria": "PARTNERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Agustin Merli",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "Jorge Luis Ayala Hernández",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 57,
    "equipo": "Kame House",
    "categoria": "PARTNERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "William Lorenzo Genchi",
        "talla": "M",
        "genero": "Hombre"
      },
      {
        "nombre": "Rafael Gonzalez",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 58,
    "equipo": "The barbell club",
    "categoria": "PARTNERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Oscar Millan Guevara",
        "talla": "M",
        "genero": "Hombre"
      },
      {
        "nombre": "Christian Martinez",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 59,
    "equipo": "Bellbits",
    "categoria": "PARTNERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Tony Pierre Gérard Louis Mathey",
        "talla": "XL",
        "genero": "Hombre"
      },
      {
        "nombre": "Jorge Xavier Morales Arévalo",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 60,
    "equipo": "Toes 2 boys",
    "categoria": "PARTNERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Diego Alan Hernández Coronado",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "Raúl Trinidad Barreto",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 61,
    "equipo": "Los Miche y Lada",
    "categoria": "PARTNERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Ulises Perea Garita",
        "talla": "XL",
        "genero": "Hombre"
      },
      {
        "nombre": "Sebastian Ponce Hernandez",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 62,
    "equipo": "Los titanes del Twins",
    "categoria": "PARTNERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Damian García Ramírez",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "David Crespo Jiménez",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 63,
    "equipo": "Los Trinidad",
    "categoria": "PARTNERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "EMMANUEL TRINIDAD GALLEGOS",
        "talla": "M",
        "genero": "Hombre"
      },
      {
        "nombre": "IAN AXEL TRINIDAD GALLEGOS",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 64,
    "equipo": "Rehechos en Holkan",
    "categoria": "PARTNERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Alejandro Ojeda",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "Donovan Ramirez Lopez",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 65,
    "equipo": "Nacho y Esqueleto",
    "categoria": "PARTNERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Armando Cruz",
        "talla": "XL",
        "genero": "Hombre"
      },
      {
        "nombre": "Santiago Martinez",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 66,
    "equipo": "UNBROKEN BAG",
    "categoria": "PARTNERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Johan Adrian Aleman Novoa",
        "talla": "S",
        "genero": "Hombre"
      },
      {
        "nombre": "Ricardo Kal-El Sayid Rosales Olvera",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 67,
    "equipo": "Incredigrizz",
    "categoria": "PARTNERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Aldo Corona Bacelis",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "Alexis Resendiz",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 68,
    "equipo": "Los Exiliados del Escuadron",
    "categoria": "PARTNERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Shoko Luchador",
        "talla": "S",
        "genero": "Hombre"
      },
      {
        "nombre": "Abraham Fuentes",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 69,
    "equipo": "Valkirias de Dragons.",
    "categoria": "PARTNERS AVANZADOS FEMENIL",
    "atletas": [
      {
        "nombre": "Adriana Castañeda Serna",
        "talla": "L",
        "genero": "Mujer"
      },
      {
        "nombre": "Diana Elizabeth Cano Cisneros",
        "talla": "L",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 70,
    "equipo": "Las Hermanas de black",
    "categoria": "PARTNERS AVANZADOS FEMENIL",
    "atletas": [
      {
        "nombre": "Michelle Jimenez Carmona",
        "talla": "S",
        "genero": "Mujer"
      },
      {
        "nombre": "Maya Nicole Jiménez Carmona",
        "talla": "S",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 71,
    "equipo": "Umbral x Elite",
    "categoria": "PARTNERS AVANZADOS FEMENIL",
    "atletas": [
      {
        "nombre": "Karina Calderón",
        "talla": "L",
        "genero": "Mujer"
      },
      {
        "nombre": "Zara Madai Madai Gonzalez",
        "talla": "M",
        "genero": "Mujer"
      }
    ]
  },
  {
    "num": 72,
    "equipo": "Las mojarras",
    "categoria": "PARTNERS AVANZADOS VARONIL",
    "atletas": [
      {
        "nombre": "Manuel Alejandro Cruz Hernández",
        "talla": "M",
        "genero": "Hombre"
      },
      {
        "nombre": "Esteban Delgado Castruita",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 73,
    "equipo": "Los Ponchiquis",
    "categoria": "PARTNERS AVANZADOS VARONIL",
    "atletas": [
      {
        "nombre": "Alfonso Castro Flores",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "Melquicedec Aguilar Gonzalez",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 74,
    "equipo": "MERO Rwrds",
    "categoria": "PARTNERS AVANZADOS VARONIL",
    "atletas": [
      {
        "nombre": "Juan Pablo Mejía Romo",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "Jesus Mondragon",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 75,
    "equipo": "Black Bros",
    "categoria": "PARTNERS AVANZADOS VARONIL",
    "atletas": [
      {
        "nombre": "Hugo Hernández Hernández",
        "talla": "M",
        "genero": "Hombre"
      },
      {
        "nombre": "Angel Emiliano Malagon Garcia",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 76,
    "equipo": "One and a half men",
    "categoria": "PARTNERS AVANZADOS VARONIL",
    "atletas": [
      {
        "nombre": "Luis Jesús Aguilar",
        "talla": "L",
        "genero": "Hombre"
      },
      {
        "nombre": "David Alexander Peña Franco",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 77,
    "equipo": "Jose Alberto Guerrero Arreola",
    "categoria": "MASTERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Jose Alberto Guerrero Arreola",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 78,
    "equipo": "Christian Yaid Galicia",
    "categoria": "MASTERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Christian Yaid Galicia",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 79,
    "equipo": "Luis Amaya Ibarra",
    "categoria": "MASTERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Luis Amaya Ibarra",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 80,
    "equipo": "Raúl Álvarez Aguileta",
    "categoria": "MASTERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Raúl Álvarez Aguileta",
        "talla": "S",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 81,
    "equipo": "Marco Antonio Garcia Cortes",
    "categoria": "MASTERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Marco Antonio Garcia Cortes",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 82,
    "equipo": "Elías Gonzales",
    "categoria": "MASTERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Elías Gonzales",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 83,
    "equipo": "Gil Bermúdez",
    "categoria": "MASTERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Gil Bermúdez",
        "talla": "L",
        "genero": "Hombre"
      }
    ]
  },
  {
    "num": 84,
    "equipo": "Oliver Mancera Gonzalez",
    "categoria": "MASTERS INTERMEDIOS VARONIL",
    "atletas": [
      {
        "nombre": "Oliver Mancera Gonzalez",
        "talla": "M",
        "genero": "Hombre"
      }
    ]
  }
];
