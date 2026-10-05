// Datos de Black Experience 2026, conciliados con la lista manual del 5 de octubre de 2026.
export type AtletaEquipo = {
  nombre: string;
  talla: string;
  genero: string;
};

export type EquipoParticipante = {
  num: number;
  numCategoria: number;
  equipo: string;
  box: string;
  categoria: string;
  status: string;
  atletas: AtletaEquipo[];
};

export const PARTICIPANTES: EquipoParticipante[] = [
  {
    "num": 1,
    "numCategoria": 1,
    "equipo": "Paulina Cruz",
    "box": "RAVIC-A.D.L. Program",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Paulina Cruz",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 2,
    "numCategoria": 2,
    "equipo": "Elizabeth Sanchez",
    "box": "Elite Community",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Elizabeth Sanchez",
        "talla": "L",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 3,
    "numCategoria": 3,
    "equipo": "Mireille Lugo",
    "box": "Mercenarios",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Mireille Lugo",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 4,
    "numCategoria": 4,
    "equipo": "Naomi Tapia",
    "box": "Hybrid zone",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Naomi Tapia",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 5,
    "numCategoria": 5,
    "equipo": "Carla Cortés González",
    "box": "Mercenarios",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Carla Cortés González",
        "talla": "L",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 6,
    "numCategoria": 1,
    "equipo": "Oliver González Rodríguez",
    "box": "Black Mel CrossFit",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Oliver González Rodríguez",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 7,
    "numCategoria": 2,
    "equipo": "Emiliano Osornio Cuenca",
    "box": "Mercenarios",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Emiliano Osornio Cuenca",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 8,
    "numCategoria": 3,
    "equipo": "Diego Martín Gonzalez Mancilla",
    "box": "",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Diego Martín Gonzalez Mancilla",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 9,
    "numCategoria": 4,
    "equipo": "Issai Martinez Garcia",
    "box": "Mercenarios",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Issai Martinez Garcia",
        "talla": "S",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 10,
    "numCategoria": 5,
    "equipo": "Diego Emiliano Cortes peña",
    "box": "Elite community",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Diego Emiliano Cortes peña",
        "talla": "S",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 11,
    "numCategoria": 6,
    "equipo": "Emilio Eduardo Reyes Mireles",
    "box": "Mercenarios",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Emilio Eduardo Reyes Mireles",
        "talla": "S",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 12,
    "numCategoria": 7,
    "equipo": "Fernando Arteaga gutierrez",
    "box": "",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Fernando Arteaga gutierrez",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 13,
    "numCategoria": 8,
    "equipo": "Gian Alberto Martínez Quiroz",
    "box": "Train hard",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Gian Alberto Martínez Quiroz",
        "talla": "S",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 14,
    "numCategoria": 1,
    "equipo": "Daniela Dominguez Torres",
    "box": "",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Daniela Dominguez Torres",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 15,
    "numCategoria": 2,
    "equipo": "Brenda Gabriela Martínez Sánchez",
    "box": "Élite community",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Brenda Gabriela Martínez Sánchez",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 16,
    "numCategoria": 3,
    "equipo": "Ingrid Fernanda Arredondo Sanchez",
    "box": "Black Pearl",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Ingrid Fernanda Arredondo Sanchez",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 17,
    "numCategoria": 4,
    "equipo": "Ana Maria Ponce Cortez",
    "box": "",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Ana Maria Ponce Cortez",
        "talla": "XL",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 18,
    "numCategoria": 5,
    "equipo": "Andrea Alarcón López",
    "box": "Wolf Functional Training / Voltio Fitness",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Andrea Alarcón López",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 19,
    "numCategoria": 6,
    "equipo": "Dayan Suárez Ortiz",
    "box": "Ravic",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Dayan Suárez Ortiz",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 20,
    "numCategoria": 7,
    "equipo": "Karen Anahid Solís Lozano",
    "box": "NSF Studio",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Karen Anahid Solís Lozano",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 21,
    "numCategoria": 8,
    "equipo": "Pamela Bogarin barrera",
    "box": "No shortcuts fitness studio",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Pamela Bogarin barrera",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 22,
    "numCategoria": 9,
    "equipo": "Fernanda Granados",
    "box": "Club deportivo azteca",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Fernanda Granados",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 23,
    "numCategoria": 10,
    "equipo": "Maria José Vera Sanchez",
    "box": "Elite comunity",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Maria José Vera Sanchez",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 24,
    "numCategoria": 11,
    "equipo": "Lia Romero García",
    "box": "Train Hard",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Lia Romero García",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 25,
    "numCategoria": 12,
    "equipo": "Inzy Cruz",
    "box": "Ravic-ADL program",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Inzy Cruz",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 26,
    "numCategoria": 13,
    "equipo": "Diana Gabriela Tinajero Fonseca",
    "box": "NATION",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Diana Gabriela Tinajero Fonseca",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 27,
    "numCategoria": 14,
    "equipo": "Ximena Licona García",
    "box": "Mercenarios",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Ximena Licona García",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 28,
    "numCategoria": 15,
    "equipo": "Fabiola Tovar",
    "box": "Ragnarok Integral Training",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Fabiola Tovar",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 29,
    "numCategoria": 16,
    "equipo": "Ilse Yesenia Alarcon Gomez",
    "box": "Zion",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Ilse Yesenia Alarcon Gomez",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 30,
    "numCategoria": 1,
    "equipo": "Heriberto González Herrera",
    "box": "Spartan NR",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Heriberto González Herrera",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 31,
    "numCategoria": 2,
    "equipo": "Alan Tapia",
    "box": "Hybrid Zone",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Alan Tapia",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 32,
    "numCategoria": 3,
    "equipo": "José Antonio Rodriguez Reyes",
    "box": "Elizium",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "José Antonio Rodriguez Reyes",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 33,
    "numCategoria": 4,
    "equipo": "Raul Cabrales Bravo",
    "box": "Crossbones/Clandestino Crosstraning",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Raul Cabrales Bravo",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 34,
    "numCategoria": 5,
    "equipo": "Nicolás Martínez Martínez",
    "box": "Omnia CrossFit (Crossbones)",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Nicolás Martínez Martínez",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 35,
    "numCategoria": 6,
    "equipo": "Emmanuel Gilberto Hernández Rosas",
    "box": "Spartan México Nr",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Emmanuel Gilberto Hernández Rosas",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 36,
    "numCategoria": 7,
    "equipo": "Carlos Villeda",
    "box": "CrossLover's",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Carlos Villeda",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 37,
    "numCategoria": 8,
    "equipo": "José Luis Soñanes",
    "box": "Moonlight",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "José Luis Soñanes",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 38,
    "numCategoria": 9,
    "equipo": "Angel yoreth Cortes barrientos",
    "box": "Black Mel CrossFit",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Angel yoreth Cortes barrientos",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 39,
    "numCategoria": 10,
    "equipo": "Alan Uriel Ramírez Cedillo",
    "box": "Black Mel Training Club",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Alan Uriel Ramírez Cedillo",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 40,
    "numCategoria": 11,
    "equipo": "Arturo de Jesús Alvarado Medina",
    "box": "Elite Community",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Arturo de Jesús Alvarado Medina",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 41,
    "numCategoria": 12,
    "equipo": "Luis Ignacio Vera Vazquez",
    "box": "Cachimbas Box / Elizium",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Luis Ignacio Vera Vazquez",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 42,
    "numCategoria": 13,
    "equipo": "Carlos Yamir Escobar González",
    "box": "Mercenarios",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Carlos Yamir Escobar González",
        "talla": "XL",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 43,
    "numCategoria": 14,
    "equipo": "Ricardo Fernando Carranza Ortiz",
    "box": "Spartan México Nr",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Ricardo Fernando Carranza Ortiz",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 44,
    "numCategoria": 15,
    "equipo": "Angel Barreto",
    "box": "Krieger",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Angel Barreto",
        "talla": "S",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 45,
    "numCategoria": 16,
    "equipo": "Adán Alejandro Reyna Cortes",
    "box": "DM fitnes/Cross Lover’s",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Adán Alejandro Reyna Cortes",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 46,
    "numCategoria": 17,
    "equipo": "Jonathan alexis mendoza",
    "box": "",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jonathan alexis mendoza",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 47,
    "numCategoria": 18,
    "equipo": "Ricardo Alejandro Gonzalez Perez",
    "box": "Xibalba Norte",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Ricardo Alejandro Gonzalez Perez",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 48,
    "numCategoria": 19,
    "equipo": "Mauricio Plata Isunza",
    "box": "Crossbones, La jungla",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Mauricio Plata Isunza",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 49,
    "numCategoria": 20,
    "equipo": "Kevin odun Pérez Ortega",
    "box": "Centuriones",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Kevin odun Pérez Ortega",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 50,
    "numCategoria": 21,
    "equipo": "Luis Alberto Hernández Guzmán",
    "box": "Mercenarios",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Luis Alberto Hernández Guzmán",
        "talla": "S",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 51,
    "numCategoria": 22,
    "equipo": "Teaquiani Tonalli Torres Mejía",
    "box": "Crossbones team, la Jungla.",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Teaquiani Tonalli Torres Mejía",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 52,
    "numCategoria": 23,
    "equipo": "Daniel Arturo Aguiñaga Ramirez",
    "box": "Barrio",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Daniel Arturo Aguiñaga Ramirez",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 53,
    "numCategoria": 24,
    "equipo": "Carlos Alberto Rivera Alvarez",
    "box": "Horus",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Carlos Alberto Rivera Alvarez",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 54,
    "numCategoria": 1,
    "equipo": "Yareth Rosales Martínez",
    "box": "Horus",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Yareth Rosales Martínez",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 55,
    "numCategoria": 2,
    "equipo": "Alejandra Hernández",
    "box": "Partners",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Alejandra Hernández",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 56,
    "numCategoria": 3,
    "equipo": "Ángela Monserrat Meléndez Hernández",
    "box": "Omnia CFT/Crossbones",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Ángela Monserrat Meléndez Hernández",
        "talla": "L",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 57,
    "numCategoria": 4,
    "equipo": "Isabel Delgado",
    "box": "Mercenarios",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Isabel Delgado",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 58,
    "numCategoria": 5,
    "equipo": "Vianey Nava limon",
    "box": "Black Tomahawk",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Vianey Nava limon",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 59,
    "numCategoria": 6,
    "equipo": "María Fernanda Chacon",
    "box": "Mercenarios",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "María Fernanda Chacon",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 60,
    "numCategoria": 7,
    "equipo": "Karla Marín odonel",
    "box": "Crossbones / Crosstraining 13-09",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Karla Marín odonel",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 61,
    "numCategoria": 8,
    "equipo": "Cinthya Jazmín Rodríguez",
    "box": "CLANDESTINO/CROSSBONES",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Cinthya Jazmín Rodríguez",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 62,
    "numCategoria": 9,
    "equipo": "Lourdes Rodriguez ibarra",
    "box": "Spartan",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Lourdes Rodriguez ibarra",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 63,
    "numCategoria": 1,
    "equipo": "Jorge Adrian Vilchis Arzate",
    "box": "Vista Fitness Center",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jorge Adrian Vilchis Arzate",
        "talla": "S",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 64,
    "numCategoria": 2,
    "equipo": "Víctor Eugenio Hernandez Ramos",
    "box": "Noshortcuts Fitness Studio",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Víctor Eugenio Hernandez Ramos",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 65,
    "numCategoria": 3,
    "equipo": "Said Galindo Flores",
    "box": "Cross bones program",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Said Galindo Flores",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 66,
    "numCategoria": 4,
    "equipo": "David Zarazua",
    "box": "Elite community",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "David Zarazua",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 67,
    "numCategoria": 5,
    "equipo": "Haniel Vazquez",
    "box": "Red Zone by san Moi",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Haniel Vazquez",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 68,
    "numCategoria": 6,
    "equipo": "Jorge Luis Cano Torres",
    "box": "Omnia CFT/Crossbones",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jorge Luis Cano Torres",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 69,
    "numCategoria": 7,
    "equipo": "Norman Neyshbitt Escobar Sánchez",
    "box": "Orión",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Norman Neyshbitt Escobar Sánchez",
        "talla": "XL",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 70,
    "numCategoria": 8,
    "equipo": "Daniel Patiño",
    "box": "CROSSBONES",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Daniel Patiño",
        "talla": "XL",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 71,
    "numCategoria": 9,
    "equipo": "Jorge Jose Luis Reyes García",
    "box": "X4U",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jorge Jose Luis Reyes García",
        "talla": "S",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 72,
    "numCategoria": 10,
    "equipo": "Francisco Perez",
    "box": "Elite Community",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Francisco Perez",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 73,
    "numCategoria": 11,
    "equipo": "omar emmanuel alvarez briones",
    "box": "Moonlight",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "omar emmanuel alvarez briones",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 74,
    "numCategoria": 1,
    "equipo": "Karina Calderón",
    "box": "Elite Community",
    "categoria": "AVANZADOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Karina Calderón",
        "talla": "L",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 75,
    "numCategoria": 2,
    "equipo": "Semiramis Huerta Lopez",
    "box": "Corazon de León/Crossbones",
    "categoria": "AVANZADOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Semiramis Huerta Lopez",
        "talla": "S",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 76,
    "numCategoria": 3,
    "equipo": "Samantha Sánchez",
    "box": "X4u",
    "categoria": "AVANZADOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Samantha Sánchez",
        "talla": "M",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 77,
    "numCategoria": 4,
    "equipo": "Carolina Novas",
    "box": "The North Fitness",
    "categoria": "AVANZADOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Carolina Novas",
        "talla": "L",
        "genero": "MUJER"
      }
    ]
  },
  {
    "num": 78,
    "numCategoria": 1,
    "equipo": "Gilberto Mendez",
    "box": "Élite community",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Gilberto Mendez",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 79,
    "numCategoria": 2,
    "equipo": "felipe jesus elizalde jimenez",
    "box": "Crossbones/ NehActive",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "felipe jesus elizalde jimenez",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 80,
    "numCategoria": 3,
    "equipo": "Juan Pablo Reyes García",
    "box": "X4U y Elizium",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Juan Pablo Reyes García",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 81,
    "numCategoria": 4,
    "equipo": "Mauricio Avila",
    "box": "CrossFit black horse @adlprogram",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Mauricio Avila",
        "talla": "S",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 82,
    "numCategoria": 5,
    "equipo": "Daniel Eduardo Yniesta Hernández",
    "box": "NATION/CROSSBONES",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Daniel Eduardo Yniesta Hernández",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 83,
    "numCategoria": 6,
    "equipo": "Aldo Oliva",
    "box": "Centuriones",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Aldo Oliva",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 84,
    "numCategoria": 7,
    "equipo": "Yhovani Rocha",
    "box": "Elite community",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Yhovani Rocha",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 85,
    "numCategoria": 8,
    "equipo": "Manuel Barreto",
    "box": "Centuriones",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Manuel Barreto",
        "talla": "M",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 86,
    "numCategoria": 9,
    "equipo": "Saúl Pescador",
    "box": "Mercenarios",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Saúl Pescador",
        "talla": "L",
        "genero": "HOMBRE"
      }
    ]
  },
  {
    "num": 87,
    "numCategoria": 1,
    "equipo": "Camila De Jesús González",
    "box": "Nation Hybrid Training",
    "categoria": "PRE TEENS 9-12",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Camila De Jesús González",
        "talla": "S",
        "genero": "TEENS"
      }
    ]
  },
  {
    "num": 88,
    "numCategoria": 2,
    "equipo": "Matias Suárez Díaz",
    "box": "Crossbones",
    "categoria": "PRE TEENS 9-12",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Matias Suárez Díaz",
        "talla": "S",
        "genero": "TEENS"
      }
    ]
  },
  {
    "num": 89,
    "numCategoria": 3,
    "equipo": "Danya Lozano Lopez",
    "box": "CrossLovers",
    "categoria": "PRE TEENS 9-12",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Danya Lozano Lopez",
        "talla": "S",
        "genero": "TEENS"
      }
    ]
  },
  {
    "num": 90,
    "numCategoria": 4,
    "equipo": "Kory Matias Ceron Quesada",
    "box": "Zona Fitness Tizayuca",
    "categoria": "PRE TEENS 9-12",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Kory Matias Ceron Quesada",
        "talla": "M",
        "genero": "TEENS"
      }
    ]
  },
  {
    "num": 91,
    "numCategoria": 5,
    "equipo": "Lia Orive Pérez",
    "box": "TeamUrsos",
    "categoria": "PRE TEENS 9-12",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Lia Orive Pérez",
        "talla": "M",
        "genero": "TEENS"
      }
    ]
  },
  {
    "num": 92,
    "numCategoria": 6,
    "equipo": "Mateo Tadeo Clemente Arellano",
    "box": "Triton",
    "categoria": "PRE TEENS 9-12",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Mateo Tadeo Clemente Arellano",
        "talla": "M",
        "genero": "TEENS"
      }
    ]
  },
  {
    "num": 93,
    "numCategoria": 7,
    "equipo": "María Fernanda Trujillo Pastrana",
    "box": "Amazonas crosstraining",
    "categoria": "PRE TEENS 9-12",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "María Fernanda Trujillo Pastrana",
        "talla": "M",
        "genero": "TEENS"
      }
    ]
  },
  {
    "num": 94,
    "numCategoria": 8,
    "equipo": "Yainne Adán Villa",
    "box": "Amazonas Crosstraining",
    "categoria": "PRE TEENS 9-12",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Yainne Adán Villa",
        "talla": "M",
        "genero": "TEENS"
      }
    ]
  },
  {
    "num": 95,
    "numCategoria": 9,
    "equipo": "André Daniel Bautista Canales",
    "box": "Horus",
    "categoria": "PRE TEENS 9-12",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "André Daniel Bautista Canales",
        "talla": "M",
        "genero": "TEENS"
      }
    ]
  },
  {
    "num": 96,
    "numCategoria": 1,
    "equipo": "Francisco Sebastian Sepulveda Guzmán",
    "box": "Centuriones CrossFit",
    "categoria": "TEENS 13-15 VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Francisco Sebastian Sepulveda Guzmán",
        "talla": "L",
        "genero": "TEENS"
      }
    ]
  },
  {
    "num": 97,
    "numCategoria": 2,
    "equipo": "Diego Zared Arroyo Ojeda",
    "box": "PFM Toluca",
    "categoria": "TEENS 13-15 VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Diego Zared Arroyo Ojeda",
        "talla": "S",
        "genero": "TEENS"
      }
    ]
  },
  {
    "num": 98,
    "numCategoria": 3,
    "equipo": "Isaac Zahir Nahuacatl",
    "box": "Iron Black",
    "categoria": "TEENS 13-15 VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Isaac Zahir Nahuacatl",
        "talla": "L",
        "genero": "TEENS"
      }
    ]
  }
];
