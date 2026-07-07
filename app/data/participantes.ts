export type AtletaEquipo = {
  nombre: string;
  talla: string;
  genero: string;
  email?: string;
  telefono?: string;
};

export type EquipoParticipante = {
  num: number | string;
  numCategoria: number | string;
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
    "equipo": "LOS SEÑITOS CREW",
    "box": "ARMY'S GARAGE",
    "categoria": "NOVATOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jose Manuel Bautista peña",
        "talla": "XL",
        "genero": "Hombre",
        "email": "zonazeroestb2007_@hotmail.com",
        "telefono": "7721654669"
      },
      {
        "nombre": "María de la luz Celis Portilla",
        "talla": "L",
        "genero": "Mujer",
        "email": "Marukacepo@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Karina Flores Maya",
        "talla": "L",
        "genero": "Mujer",
        "email": "kariflores423@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 2,
    "numCategoria": 2,
    "equipo": "RAK",
    "box": "Army’s garage",
    "categoria": "NOVATOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Karina Herrera Arteaga",
        "talla": "M",
        "genero": "Mujer",
        "email": "herrera.arteaga.karina@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Angelin Montufar Ravelo",
        "talla": "S",
        "genero": "Hombre",
        "email": "angelinmon269@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Regina Zahorí Villeda potrero",
        "talla": "M",
        "genero": "Mujer",
        "email": "Villedareginazahori@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 3,
    "numCategoria": 3,
    "equipo": "Xoconostles",
    "box": "Maswill zona fitness",
    "categoria": "NOVATOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "María Fernanda Castañeda Bautista",
        "talla": "M",
        "genero": "Mujer",
        "email": "castafer0919@gmail.com",
        "telefono": "7721628527"
      },
      {
        "nombre": "Fernando Blancas Guerrero",
        "talla": "M",
        "genero": "Hombre",
        "email": "fer.rollinsp1@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "José Alfredo Blancas Guerrero",
        "talla": "L",
        "genero": "Hombre",
        "email": "blancasjose81@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 4,
    "numCategoria": 4,
    "equipo": "Chicas super poderosas MASWILL",
    "box": "Maswill",
    "categoria": "NOVATOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Diana Laura Pérez Lugo",
        "talla": "L",
        "genero": "Mujer",
        "email": "dianalugo0309@gmail.com",
        "telefono": "7721326862"
      },
      {
        "nombre": "Ale Burrola",
        "talla": "M",
        "genero": "Hombre",
        "email": "Keila_alejandrit@hotmail.com",
        "telefono": ""
      },
      {
        "nombre": "Abigaid Zamora",
        "talla": "M",
        "genero": "Mujer",
        "email": "abigaidlazaro@gmail.com",
        "telefono": "7713930873"
      }
    ]
  },
  {
    "num": 5,
    "numCategoria": 5,
    "equipo": "¿Y SI SÍ?",
    "box": "ATLAS CROSSFIT",
    "categoria": "NOVATOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Gabriela Trejo",
        "talla": "M",
        "genero": "Mujer",
        "email": "gamadariagatr@ucq.edu.mx",
        "telefono": "7715688924"
      },
      {
        "nombre": "Hareth Jassam Corona Simón",
        "talla": "M",
        "genero": "Hombre",
        "email": "corona32190@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Alessandro Barrera Hernández",
        "talla": "M",
        "genero": "Hombre",
        "email": "alexbarrerin777@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 6,
    "numCategoria": 6,
    "equipo": "Tres de Acero BR",
    "box": "Body Rock",
    "categoria": "NOVATOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Marisol aurora Vargas noche",
        "talla": "M",
        "genero": "Mujer",
        "email": "marivm_89@hotmail.com",
        "telefono": "5511227699"
      },
      {
        "nombre": "Jose Jorge Estrada torres",
        "talla": "M",
        "genero": "Hombre",
        "email": "maisolvargas@teschi.edu.mx",
        "telefono": ""
      },
      {
        "nombre": "Luis Miguel Cortes ruiz",
        "talla": "M",
        "genero": "Hombre",
        "email": "red-luis_bull@hotmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 7,
    "numCategoria": 7,
    "equipo": "MINI BODY ROCK",
    "box": "",
    "categoria": "NOVATOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Danna Josimar Estrada Vargas",
        "talla": "M",
        "genero": "Mujer",
        "email": "dannaestradavargas0@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Joshua yael cortes Vázquez",
        "talla": "M",
        "genero": "Hombre",
        "email": "Josh.yael.110916@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Edwin Esteban Domínguez",
        "talla": "M",
        "genero": "Hombre",
        "email": "Marlenzita22@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 8,
    "numCategoria": 8,
    "equipo": "Los Sueñitos",
    "box": "ATLAS CROSSFIT",
    "categoria": "NOVATOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Anaeli Domínguez Secundino",
        "talla": "M",
        "genero": "Mujer",
        "email": "eliodora.ds@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Gustavo Pérez Nube",
        "talla": "M",
        "genero": "Hombre",
        "email": "gustavo.ca1602@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Gil Herrera Mendoza",
        "talla": "M",
        "genero": "Hombre",
        "email": "Gilehm1208@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 9,
    "numCategoria": 9,
    "equipo": "Mercenarios",
    "box": "ATLAS CROSSFIT",
    "categoria": "NOVATOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Daniela Saldivar Guerrero",
        "talla": "M",
        "genero": "Mujer",
        "email": "Saldivardaniela205@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Jorge Hazael Vallejos Arumir",
        "talla": "XL",
        "genero": "Hombre",
        "email": "jorgehvallejos77@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Jovani Martinez",
        "talla": "M",
        "genero": "Hombre",
        "email": "mtzjovani0102@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 10,
    "numCategoria": 10,
    "equipo": "ImproWOD Crew",
    "box": "army",
    "categoria": "NOVATOS HHM",
    "status": "Pendiente",
    "atletas": [
      {
        "nombre": "Fernando Sánchez Gómez",
        "talla": "M",
        "genero": "Hombre",
        "email": "sfher8929@gmail.com",
        "telefono": "7721295444"
      },
      {
        "nombre": "Brenda Patricia Espinoza Vargas",
        "talla": "M",
        "genero": "Mujer",
        "email": "ningui2005@gmail.com",
        "telefono": "7721333418"
      },
      {
        "nombre": "Adolfo Pérez Moctezuma",
        "talla": "L",
        "genero": "Hombre",
        "email": "adolfoperezmoctezuma784@gmail.com",
        "telefono": "7721509150"
      }
    ]
  },
  {
    "num": 11,
    "numCategoria": 1,
    "equipo": "FIT CREW",
    "box": "LycanCross Fitness",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Martha Perez ramirez",
        "talla": "S",
        "genero": "Mujer",
        "email": "martixperez@gmail.com",
        "telefono": "7751294251"
      },
      {
        "nombre": "Oscar Hernandez Meza",
        "talla": "M",
        "genero": "Hombre",
        "email": "karchavez@outlook.com",
        "telefono": "7712026315"
      },
      {
        "nombre": "Ángel Fernando Leon Castañeda",
        "talla": "M",
        "genero": "Hombre",
        "email": "fernandoleon1711@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 12,
    "numCategoria": 2,
    "equipo": "Los Desconocidos",
    "box": "Maswill",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Valeria Zambrano orozco",
        "talla": "S",
        "genero": "Mujer",
        "email": "zambranovaleria565@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Leandro Sanchez Palacios",
        "talla": "S",
        "genero": "Hombre",
        "email": "leansanpal@gmail.com",
        "telefono": "7721619255"
      },
      {
        "nombre": "Gerson Flores Sánchez",
        "talla": "S",
        "genero": "Hombre",
        "email": "tkdgerson@gmail.com",
        "telefono": "7721876742"
      }
    ]
  },
  {
    "num": 13,
    "numCategoria": 3,
    "equipo": "Los compas",
    "box": "Inside",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "victor silva",
        "talla": "L",
        "genero": "Hombre",
        "email": "vicott78@gmail.com",
        "telefono": "7717042717"
      },
      {
        "nombre": "Víctor Javin Silva Hernández",
        "talla": "XL",
        "genero": "Hombre",
        "email": "vicjavs9@gmail.com",
        "telefono": "7713970314"
      },
      {
        "nombre": "Claudia Martínez Hernández",
        "talla": "M",
        "genero": "Mujer",
        "email": "clama691@hotmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 14,
    "numCategoria": 4,
    "equipo": "Vulnerables M.C.",
    "box": "Maswill Crossfit",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jesus García Cordova",
        "talla": "L",
        "genero": "Hombre",
        "email": "jesuscordova20@icloud.com",
        "telefono": "7713854988"
      },
      {
        "nombre": "Sabas Macario Jiménez",
        "talla": "M",
        "genero": "Hombre",
        "email": "Mack2106@gmail.com",
        "telefono": "7721718435"
      },
      {
        "nombre": "Yanira Guadalupe Luego Andrade",
        "talla": "M",
        "genero": "Mujer",
        "email": "yanyanis.999@gmail.com",
        "telefono": "7721295155"
      }
    ]
  },
  {
    "num": 15,
    "numCategoria": 5,
    "equipo": "En qué WOD nos metimos?",
    "box": "Xibalba trainig club",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Angel Francisco gonzalez",
        "talla": "L",
        "genero": "Hombre",
        "email": "anyel4488@gmail.com",
        "telefono": "5613977517"
      },
      {
        "nombre": "Martín Celso López gomez",
        "talla": "L",
        "genero": "Hombre",
        "email": "martincelsolop@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Leilani Cruz campos",
        "talla": "M",
        "genero": "Mujer",
        "email": "Leigp11@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 16,
    "numCategoria": 6,
    "equipo": "Patrulla Roja",
    "box": "Maswill Tepa",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Luis Rodríguez",
        "talla": "L",
        "genero": "Hombre",
        "email": "selfwlir@gmail.com",
        "telefono": "7721227921"
      },
      {
        "nombre": "Lucero Contreras Gómez",
        "talla": "L",
        "genero": "Mujer",
        "email": "lu.contrerasgomez29@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Mike Pérez Hernández",
        "talla": "L",
        "genero": "Hombre",
        "email": "mike.pedagogo@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 17,
    "numCategoria": 7,
    "equipo": "NOS VALE BURPEE",
    "box": "BodyRock",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Julio César Vega Hernandez",
        "talla": "M",
        "genero": "Hombre",
        "email": "jcvegah@gmail.com",
        "telefono": "5521497544"
      },
      {
        "nombre": "Teresa Méndez",
        "talla": "S",
        "genero": "Mujer",
        "email": "teresamendezsierra@hotmail.com",
        "telefono": "5510615425"
      },
      {
        "nombre": "Cesar Ricardo Morales Vega",
        "talla": "S",
        "genero": "Hombre",
        "email": "rocky_cmv@yahoo.com.mx",
        "telefono": ""
      }
    ]
  },
  {
    "num": 18,
    "numCategoria": 8,
    "equipo": "Trío Dinamita",
    "box": "",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Emanuel Luna Cabrera",
        "talla": "L",
        "genero": "Hombre",
        "email": "emanuellunac@gmail.com",
        "telefono": "5584032039"
      },
      {
        "nombre": "Leda Ocampo Gomez",
        "talla": "M",
        "genero": "Mujer",
        "email": "moraldre666@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Leo Santoyo",
        "talla": "L",
        "genero": "Hombre",
        "email": "leonardosantoyo04@gmail.com",
        "telefono": "5635552829"
      }
    ]
  },
  {
    "num": 19,
    "numCategoria": 9,
    "equipo": "Zenith Force",
    "box": "X7raining",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Abel Castillo Olguín",
        "talla": "M",
        "genero": "Hombre",
        "email": "abelco1013@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Jerónimo Domínguez Báez",
        "talla": "M",
        "genero": "Hombre",
        "email": "baezjeronimo08@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Matilde Gil Gómez",
        "talla": "S",
        "genero": "Mujer",
        "email": "gil762137@gmail.com",
        "telefono": "2431311495"
      }
    ]
  },
  {
    "num": 20,
    "numCategoria": 10,
    "equipo": "Burpees and Beer",
    "box": "MasWill",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Cele Garnica",
        "talla": "L",
        "genero": "Hombre",
        "email": "lg.garnica@hotmail.com",
        "telefono": "7721315882"
      },
      {
        "nombre": "Karina Vázquez Coronel",
        "talla": "S",
        "genero": "Mujer",
        "email": "karinavazquezcoronel@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Jhobany Campos Hernandez",
        "talla": "M",
        "genero": "Hombre",
        "email": "eldanellyreyes0@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 21,
    "numCategoria": 11,
    "equipo": "GVE",
    "box": "X7RAINING",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Eugenio Carbajal",
        "talla": "M",
        "genero": "Hombre",
        "email": "carbajaleugenio5@gmail.com",
        "telefono": "2431060186"
      },
      {
        "nombre": "Vania Flores Morgan",
        "talla": "S",
        "genero": "Mujer",
        "email": "vaniamorgan64@gmail.com",
        "telefono": "2431068807"
      },
      {
        "nombre": "José Carlos Guillén Coello",
        "talla": "S",
        "genero": "Hombre",
        "email": "gcjcarloos@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 22,
    "numCategoria": 12,
    "equipo": "Los Titanes del Twins",
    "box": "Cross Twins",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Rebeca Plácido Alvarez",
        "talla": "M",
        "genero": "Mujer",
        "email": "junprisecc@gmail.com",
        "telefono": "5562318980"
      },
      {
        "nombre": "David Crespo Jiménez",
        "talla": "M",
        "genero": "Hombre",
        "email": "davidcressjimenez@hotmail.com",
        "telefono": ""
      },
      {
        "nombre": "José Eduardo Durán Palacios",
        "talla": "L",
        "genero": "Hombre",
        "email": "j.laaloduraan@gmail.com",
        "telefono": "5513049614"
      }
    ]
  },
  {
    "num": 23,
    "numCategoria": 13,
    "equipo": "Proyecto Norte",
    "box": "Tigres crossfit",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Roberto Cruz ramirez",
        "talla": "XL",
        "genero": "Hombre",
        "email": "roberto1727a@gmail.com",
        "telefono": "7832070223"
      },
      {
        "nombre": "Hanna Jamileth Pablo Cruz",
        "talla": "M",
        "genero": "Mujer",
        "email": "hannahpablocruz@gmail.com",
        "telefono": "7461521775"
      },
      {
        "nombre": "Oscar Uriel Santiago García",
        "talla": "L",
        "genero": "Hombre",
        "email": "oscar_santiago0110@hotmail.com",
        "telefono": "7841016167"
      }
    ]
  },
  {
    "num": 24,
    "numCategoria": 14,
    "equipo": "Alpha Jr",
    "box": "",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "María Guadalupe Cruz Hernández",
        "talla": "L",
        "genero": "Mujer",
        "email": "Miguel.angel.resebdiz.marquez@gmail.com",
        "telefono": "7727368022"
      },
      {
        "nombre": "Brando Meza Contreras",
        "talla": "L",
        "genero": "Hombre",
        "email": "apacruz000@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Shane Sebastián Ramirez Rivera",
        "talla": "M",
        "genero": "Hombre",
        "email": "apacruz000@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 25,
    "numCategoria": 15,
    "equipo": "\"Es lo que hay\"",
    "box": "Army's Garage",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Ixcatzin Hernandez Mendoza",
        "talla": "L",
        "genero": "Mujer",
        "email": "ixcahernan@gmail.com",
        "telefono": "5277213267"
      },
      {
        "nombre": "Fernando Pérez Lopez",
        "talla": "XL",
        "genero": "Hombre",
        "email": "ferxxo026@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Norberto Carranza Zúñiga",
        "talla": "L",
        "genero": "Hombre",
        "email": "bettozzu@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 26,
    "numCategoria": 16,
    "equipo": "40 & 20’s",
    "box": "Lycan Cross",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Karen Dominguez Balderas",
        "talla": "L",
        "genero": "Mujer",
        "email": "karen25b@icloud.com",
        "telefono": "7751185388"
      },
      {
        "nombre": "Héctor Marlon Olvera Martínez",
        "talla": "L",
        "genero": "Hombre",
        "email": "olveramartinezmarlonhector@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Julio César Yáñez Muñiz",
        "talla": "M",
        "genero": "Hombre",
        "email": "Juliocyam@hotmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 27,
    "numCategoria": 17,
    "equipo": "Burpees & chill",
    "box": "Army’s garage",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Rocio Lorein Roldan Balderrama",
        "talla": "M",
        "genero": "Mujer",
        "email": "loreinrb02@gmail.com",
        "telefono": "7721395693"
      },
      {
        "nombre": "Juan Villeda",
        "talla": "XL",
        "genero": "Hombre",
        "email": "alejandrovilleda775@gmail.com",
        "telefono": "7731432466"
      },
      {
        "nombre": "Juan Carlos Dionisio Lopez",
        "talla": "L",
        "genero": "Hombre",
        "email": "dioniciojuancarlos51@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 28,
    "numCategoria": 18,
    "equipo": "Los Guerreros Del Armys",
    "box": "Army’s garage",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Cristian Hernández",
        "talla": "XL",
        "genero": "Hombre",
        "email": "ch423939@gmail.com",
        "telefono": "7722733564"
      },
      {
        "nombre": "Luis angel Villeda potrero",
        "talla": "XL",
        "genero": "Hombre",
        "email": "Villedala5@gmail.com",
        "telefono": "2226808664"
      },
      {
        "nombre": "Abigail Bautista",
        "talla": "M",
        "genero": "Mujer",
        "email": "abbybautista02e@gmail.com",
        "telefono": "7721451382"
      }
    ]
  },
  {
    "num": 29,
    "numCategoria": 19,
    "equipo": "Los SparYamis",
    "box": "",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Federico Islas Olivares",
        "talla": "L",
        "genero": "Hombre",
        "email": "fedeislasolivares@gmail.com",
        "telefono": "7717952414"
      },
      {
        "nombre": "Yamaira García Villegas",
        "talla": "L",
        "genero": "Mujer",
        "email": "mairagarcia741@gmail.com",
        "telefono": "6847640"
      },
      {
        "nombre": "Gabriel Hernandez",
        "talla": "M",
        "genero": "Hombre",
        "email": "gahe0014@gmail.com",
        "telefono": "7716999039"
      }
    ]
  },
  {
    "num": 30,
    "numCategoria": 20,
    "equipo": "Triple Threat",
    "box": "Hánuman",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Lilian González Núñez",
        "talla": "L",
        "genero": "Mujer",
        "email": "lgn_253@hotmail.com",
        "telefono": "7711261527"
      },
      {
        "nombre": "Luciano Galindo",
        "talla": "L",
        "genero": "Hombre",
        "email": "Lucianojuan19@gmail.com",
        "telefono": "7715025293"
      },
      {
        "nombre": "Juan Manuel Ramírez Meneses",
        "talla": "S",
        "genero": "Hombre",
        "email": "jumarm177@gmail.com",
        "telefono": "7712274206"
      }
    ]
  },
  {
    "num": 31,
    "numCategoria": 21,
    "equipo": "Los 3 cochinitos de HANU",
    "box": "Hanuman",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Cesar Casillas Santillan",
        "talla": "M",
        "genero": "Hombre",
        "email": "cesarcasillas10@hotmail.com",
        "telefono": "7712026637"
      },
      {
        "nombre": "Stephanie Samanta Santillán Olvera",
        "talla": "M",
        "genero": "Mujer",
        "email": "samyfloyd2009@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Jaime Reyes Camargo",
        "talla": "L",
        "genero": "Hombre",
        "email": "jaimereycam@gmail.com",
        "telefono": "7711503943"
      }
    ]
  },
  {
    "num": 32,
    "numCategoria": 22,
    "equipo": "THE BULLIES",
    "box": "Black Bull Fitness Pachuca",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Pablo Alderete",
        "talla": "L",
        "genero": "Hombre",
        "email": "pauluspersonal@gmail.com",
        "telefono": "7717618891"
      },
      {
        "nombre": "alejandro Fernandez Cruz",
        "talla": "M",
        "genero": "Hombre",
        "email": "Alexfc087@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Estefania Gutierrez Castillo",
        "talla": "XS",
        "genero": "Mujer",
        "email": "fgtz0048@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 33,
    "numCategoria": 23,
    "equipo": "Los inoxidables",
    "box": "Army's Garage",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Pendiente",
    "atletas": [
      {
        "nombre": "Christopher Herrera",
        "talla": "L",
        "genero": "Hombre",
        "email": "mi_factura@outlook.com",
        "telefono": "7721199839"
      },
      {
        "nombre": "Caty Angeles",
        "talla": "S",
        "genero": "Mujer",
        "email": "ac2805@gmail.com",
        "telefono": "7711922630"
      },
      {
        "nombre": "José Antonio Celis",
        "talla": "M",
        "genero": "Hombre",
        "email": "Pepirrino1985@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 34,
    "numCategoria": 24,
    "equipo": "Las Armas del Huarache",
    "box": "Armys Garage",
    "categoria": "PRINCIPIANTES HHM",
    "status": "Pendiente",
    "atletas": [
      {
        "nombre": "Beto Calva Rendon",
        "talla": "XL",
        "genero": "Hombre",
        "email": "calvarendonbeto@gmail.com",
        "telefono": "7721041369"
      },
      {
        "nombre": "Héctor Hugo Sánchez Mejia",
        "talla": "L",
        "genero": "Hombre",
        "email": "hhugosanme89@gmail.com",
        "telefono": "7721229802"
      },
      {
        "nombre": "Kenia Galilea Martinez Sanchez",
        "talla": "XS",
        "genero": "Mujer",
        "email": "martinezken9090@gmail.com",
        "telefono": "7721433105"
      }
    ]
  },
  {
    "num": 35,
    "numCategoria": 1,
    "equipo": "Los Prestados",
    "box": "Inside",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Alan Sanchez Peña",
        "talla": "L",
        "genero": "Hombre",
        "email": "alan21jaz@gmail.com",
        "telefono": "7717419702"
      },
      {
        "nombre": "Erick Espinosa",
        "talla": "M",
        "genero": "Hombre",
        "email": "nucita_shot_10@hotmail.com",
        "telefono": ""
      },
      {
        "nombre": "Karla García",
        "talla": "M",
        "genero": "Mujer",
        "email": "karla.garcia.colin@gmail.com",
        "telefono": "5585698330"
      }
    ]
  },
  {
    "num": 36,
    "numCategoria": 2,
    "equipo": "ATLAS CROSSFIT",
    "box": "ATLAS CROSSFIT",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Pedro Rello",
        "talla": "XL",
        "genero": "Hombre",
        "email": "relloportillo78@gmail.com",
        "telefono": "7721404140"
      },
      {
        "nombre": "Alba Badillo",
        "talla": "M",
        "genero": "Mujer",
        "email": "albabadillo1411@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Ángel Zaid Cruz Olivares",
        "talla": "M",
        "genero": "Hombre",
        "email": "tumbaviejas01@gmail.com",
        "telefono": "7716849719"
      }
    ]
  },
  {
    "num": 37,
    "numCategoria": 3,
    "equipo": "Alphas",
    "box": "Alpha Center",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jacob Trejo",
        "talla": "M",
        "genero": "Hombre",
        "email": "eduar.meduar@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Ruben Jesus Meza Lugo",
        "talla": "XS",
        "genero": "Hombre",
        "email": "meza6261@gmail.com",
        "telefono": "7721219064"
      },
      {
        "nombre": "Naomi Rubi Zuñiga Meza",
        "talla": "S",
        "genero": "Mujer",
        "email": "zu499815@uaeh.edu.mx",
        "telefono": ""
      }
    ]
  },
  {
    "num": 38,
    "numCategoria": 4,
    "equipo": "Los Juliantla",
    "box": "CrossTraining Exiliados",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jacqueline Ruiz",
        "talla": "M",
        "genero": "Mujer",
        "email": "jbetsaberh@outlook.com",
        "telefono": "5528436718"
      },
      {
        "nombre": "Jesús Sinaí Villegas Luna",
        "talla": "L",
        "genero": "Hombre",
        "email": "jsinai_060@hotmail.com",
        "telefono": "5530579673"
      },
      {
        "nombre": "Julio César Gasga Alavez",
        "talla": "L",
        "genero": "Hombre",
        "email": "cresa.ala@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 39,
    "numCategoria": 5,
    "equipo": "Amantes de la magnesia",
    "box": "X7RAINING",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Miguel Ángel Ruiz",
        "talla": "M",
        "genero": "Hombre",
        "email": "maruizmoreno87@gmail.com",
        "telefono": "2434342911"
      },
      {
        "nombre": "Sandy Anahí Aguilar Vega",
        "talla": "S",
        "genero": "Mujer",
        "email": "sandyanaagve@hotmail.com",
        "telefono": "2431043847"
      },
      {
        "nombre": "Fernanda Soto",
        "talla": "L",
        "genero": "Mujer",
        "email": "mariafernandasotoreyes97@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 40,
    "numCategoria": 6,
    "equipo": "Viernes 13 RJX",
    "box": "X7raining",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Rebeca Soto Reyes",
        "talla": "M",
        "genero": "Mujer",
        "email": "Rebeladelx7raining@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Jasson Cortes Escamilla",
        "talla": "M",
        "genero": "Hombre",
        "email": "tvjasson@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Ximena Meneses",
        "talla": "S",
        "genero": "Mujer",
        "email": "xmeneses752@gmail.com",
        "telefono": "2431001432"
      }
    ]
  },
  {
    "num": 41,
    "numCategoria": 7,
    "equipo": "Bella y las Bestias",
    "box": "X7raining",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Yamil Castillo Olguín",
        "talla": "L",
        "genero": "Hombre",
        "email": "yamil1027p@gmail.com",
        "telefono": "2213081708"
      },
      {
        "nombre": "Bianca Ines Antolin Vargas",
        "talla": "M",
        "genero": "Mujer",
        "email": "biancaantolin1903@icloud.com",
        "telefono": ""
      },
      {
        "nombre": "Dalia Valero Reyes",
        "talla": "M",
        "genero": "Mujer",
        "email": "dalia_valero@hotmail.com",
        "telefono": "2431003335"
      }
    ]
  },
  {
    "num": 42,
    "numCategoria": 8,
    "equipo": "Triple Threat",
    "box": "Xibalba Training Club",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Christian Enríquez Arceño",
        "talla": "M",
        "genero": "Hombre",
        "email": "enar.christian@gmail.com",
        "telefono": "5547890616"
      },
      {
        "nombre": "Pamela Perea oliva",
        "talla": "S",
        "genero": "Mujer",
        "email": "Pereapame14@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Cuauhtemoc García Huerta",
        "talla": "M",
        "genero": "Hombre",
        "email": "proyectomotos1.0@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 43,
    "numCategoria": 9,
    "equipo": "NAPOLITANOS",
    "box": "Maswill Zona Fitness",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Victor Andres Hernandez Jimenez",
        "talla": "M",
        "genero": "Hombre",
        "email": "blancaselenes@hotmail.com",
        "telefono": "7721397295"
      },
      {
        "nombre": "Rotsen Blancas Santander",
        "talla": "S",
        "genero": "Mujer",
        "email": "rotsenblancassantander@gmail.com",
        "telefono": "7712953987"
      },
      {
        "nombre": "Martin Cristian Cosio Angeles",
        "talla": "L",
        "genero": "Hombre",
        "email": "martinccossioangeles@gmail.com",
        "telefono": "7721423656"
      }
    ]
  },
  {
    "num": 44,
    "numCategoria": 10,
    "equipo": "Kettlebelindos",
    "box": "LycanCross",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Carlos Pureco",
        "talla": "M",
        "genero": "Hombre",
        "email": "carlos.pureco@yahoo.com.mx",
        "telefono": "5520963725"
      },
      {
        "nombre": "Gabriela Zarate",
        "talla": "M",
        "genero": "Mujer",
        "email": "lic.zaratee.gabriela@gmail.com",
        "telefono": "5537064548"
      },
      {
        "nombre": "Aldo Hashim Jimenez Roldan",
        "talla": "S",
        "genero": "Hombre",
        "email": "hashimcross2007@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 45,
    "numCategoria": 11,
    "equipo": "LoscasiRX",
    "box": "Alpha Center",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Salvador Hernandez Lumbreras",
        "talla": "M",
        "genero": "Hombre",
        "email": "lumbreras.hernandez.shl@gmail.com",
        "telefono": "4922254113"
      },
      {
        "nombre": "Noe Yair Trejo Mesa",
        "talla": "M",
        "genero": "Hombre",
        "email": "ntrejomeza@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Samanta Contreras Abarc",
        "talla": "S",
        "genero": "Mujer",
        "email": "samanta.contreras98@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 46,
    "numCategoria": 12,
    "equipo": "Gallos sin miedo",
    "box": "",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Santos Martinez",
        "talla": "XL",
        "genero": "Hombre",
        "email": "Santos.abraham.mtz@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Aram Ibrahim Martinez Valladares",
        "talla": "M",
        "genero": "Hombre",
        "email": "arammartinezk99@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Carla Ximena Ortiz Castillo",
        "talla": "M",
        "genero": "Mujer",
        "email": "carlitaortiz19935@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 47,
    "numCategoria": 13,
    "equipo": "The Warriors",
    "box": "Alpha Center",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Bryan López Acosta",
        "talla": "M",
        "genero": "Hombre",
        "email": "dekuhero3142@gmail.com",
        "telefono": "5526959609"
      },
      {
        "nombre": "Ana Paola Resendiz Cruz",
        "talla": "M",
        "genero": "Mujer",
        "email": "anapaolaresendizcruz5@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "Gilberto Trejo Zúñiga",
        "talla": "XL",
        "genero": "Hombre",
        "email": "karina_trejo200@hotmail.com",
        "telefono": "7721451115"
      }
    ]
  },
  {
    "num": 48,
    "numCategoria": 14,
    "equipo": "INTREPIDOS",
    "box": "",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Elizabeth adriana Lopez Diaz",
        "talla": "M",
        "genero": "Mujer",
        "email": "Addyson94@gmail.com",
        "telefono": "7228307828"
      },
      {
        "nombre": "Miguel Ángel Martín del Campo Delgado",
        "talla": "L",
        "genero": "Hombre",
        "email": "blackc_7@hotmail.com",
        "telefono": ""
      },
      {
        "nombre": "David Romero",
        "talla": "M",
        "genero": "Hombre",
        "email": "david.romero.uaemex@gmail.com",
        "telefono": "7223370882"
      }
    ]
  },
  {
    "num": 49,
    "numCategoria": 15,
    "equipo": "ONE MORE REP!",
    "box": "",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Janely Joselyn Arteaga Martínez",
        "talla": "M",
        "genero": "Mujer",
        "email": "mjoselyn4@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "JOSE MANUEL AGUILAR",
        "talla": "M",
        "genero": "Hombre",
        "email": "josmanaguilar03@gmail.com",
        "telefono": "7751250716"
      },
      {
        "nombre": "",
        "talla": "M",
        "genero": "Hombre",
        "email": "",
        "telefono": ""
      }
    ]
  },
  {
    "num": 50,
    "numCategoria": 16,
    "equipo": "Team Amargados",
    "box": "FÉNIX CROSSFIT",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Luis Constantino Córdova Solís",
        "talla": "M",
        "genero": "Hombre",
        "email": "luis.ctino@gmail.com",
        "telefono": "7822320940"
      },
      {
        "nombre": "Camila isabela cruz reyes",
        "talla": "M",
        "genero": "Mujer",
        "email": "camilacruzreyes14@gmail.com",
        "telefono": "7821923203"
      },
      {
        "nombre": "Carlos Eduardo Almora Sánchez",
        "talla": "M",
        "genero": "Hombre",
        "email": "charlyalmora30@gmail.com",
        "telefono": "7821007072"
      }
    ]
  },
  {
    "num": 51,
    "numCategoria": 17,
    "equipo": "Stormtoorpers",
    "box": "Black Fit CF",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Sergio Pablo Sarabia",
        "talla": "L",
        "genero": "Hombre",
        "email": "spablo.sarabiav@hotmail.com",
        "telefono": "5534884755"
      },
      {
        "nombre": "Marco Antonio Andrade González",
        "talla": "L",
        "genero": "Hombre",
        "email": "marcoandrade298@gmail.com",
        "telefono": "5535566721"
      },
      {
        "nombre": "Wendy Ochoa Ramírez",
        "talla": "M",
        "genero": "Mujer",
        "email": "wendydisenografico@gmail.com",
        "telefono": "5558261139"
      }
    ]
  },
  {
    "num": 52,
    "numCategoria": 18,
    "equipo": "Dos bestias y media",
    "box": "Black bull",
    "categoria": "INTERMEDIOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Beatriz Aparicio Casimiro",
        "talla": "XL",
        "genero": "Mujer",
        "email": "baparicio272@gmail.com",
        "telefono": "7713382987"
      },
      {
        "nombre": "Mario Villarreal Mares",
        "talla": "L",
        "genero": "Hombre",
        "email": "arq.mvm89@gmail.com",
        "telefono": "7712668560"
      },
      {
        "nombre": "Joel Ramirez Ortega",
        "talla": "M",
        "genero": "Hombre",
        "email": "joelrro@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 53,
    "numCategoria": 19,
    "equipo": "#NosFaltaJuan by Unbroken",
    "box": "Army’s Garage",
    "categoria": "INTERMEDIOS HHM",
    "status": "Pendiente",
    "atletas": [
      {
        "nombre": "Areli Blancas Cruz",
        "talla": "L",
        "genero": "Mujer",
        "email": "blancas.cruz12@gmail.com",
        "telefono": "7721067876"
      },
      {
        "nombre": "Oscar Silva Arteaga",
        "talla": "M",
        "genero": "Hombre",
        "email": "derosa114@gmail.com",
        "telefono": "7721017254"
      },
      {
        "nombre": "Jesús Enrique Acosta Fernandez",
        "talla": "M",
        "genero": "Hombre",
        "email": "jesus_yugi007@hotmail.com",
        "telefono": "7721019001"
      }
    ]
  },
  {
    "num": 54,
    "numCategoria": 20,
    "equipo": "Artilleria Pesada",
    "box": "Armys Garage",
    "categoria": "INTERMEDIOS HHM",
    "status": "Pendiente",
    "atletas": [
      {
        "nombre": "Mizar Lael Mendoza Hernández",
        "talla": "M",
        "genero": "Hombre",
        "email": "mizarmendoza15@gmail.com",
        "telefono": "7721141380"
      },
      {
        "nombre": "Ronald de Jesus Bautista Campos",
        "talla": "M",
        "genero": "Hombre",
        "email": "ronaldcampost@icloud.com",
        "telefono": ""
      },
      {
        "nombre": "Susana Trejo Herrera",
        "talla": "L",
        "genero": "Mujer",
        "email": "trejosusana334@gmail.com",
        "telefono": "7717740632"
      }
    ]
  },
  {
    "num": 55,
    "numCategoria": 1,
    "equipo": "2 de maíz x 1 de mole",
    "box": "X7raining",
    "categoria": "AVANZADOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Oscar Aguilar gallardo",
        "talla": "M",
        "genero": "Hombre",
        "email": "ossruba7@gmail.com",
        "telefono": "2431214100"
      },
      {
        "nombre": "Jose Gabriel Cantero Valiente",
        "talla": "M",
        "genero": "Hombre",
        "email": "ti.tovilla2010@hotmail.com",
        "telefono": ""
      },
      {
        "nombre": "Ana Laura Soto Reyes",
        "talla": "M",
        "genero": "Mujer",
        "email": "analaurasotoreyes34@gmail.com",
        "telefono": "2431319521"
      }
    ]
  },
  {
    "num": 56,
    "numCategoria": 2,
    "equipo": "Holy Buffalo",
    "box": "Holysseum",
    "categoria": "AVANZADOS HHM",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Alfredo Molina",
        "talla": "M",
        "genero": "Hombre",
        "email": "alfredom99tr@gmail.com",
        "telefono": ""
      },
      {
        "nombre": "SERGIO FLORES",
        "talla": "M",
        "genero": "Hombre",
        "email": "sergiochido19@gmail.com",
        "telefono": "7717941820"
      },
      {
        "nombre": "Xóchitl Yasmin Mendoza Espinoza",
        "talla": "S",
        "genero": "Mujer",
        "email": "mendozayasmin374@gmail.com",
        "telefono": "7731333552"
      }
    ]
  },
  {
    "num": 57,
    "numCategoria": 1,
    "equipo": "Raymundo Sánchez",
    "box": "Gorilla 115",
    "categoria": "ELITE VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Raymundo Sánchez",
        "talla": "XL",
        "genero": "Hombre",
        "email": "raymundo.sanchez.morales1992@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 58,
    "numCategoria": 2,
    "equipo": "Edwin Domínguez Martínez",
    "box": "Ñam team",
    "categoria": "ELITE VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Edwin Domínguez Martínez",
        "talla": "XL",
        "genero": "Hombre",
        "email": "edwinel1897@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 59,
    "numCategoria": 3,
    "equipo": "EDUARDO GUADARRAMA",
    "box": "Iron crossfit",
    "categoria": "ELITE VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "EDUARDO GUADARRAMA",
        "talla": "M",
        "genero": "Hombre",
        "email": "guadarramasanchezeduardo3iv2@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 60,
    "numCategoria": 4,
    "equipo": "Héctor Gregory Sánchez Gutiérrez",
    "box": "Lycan cross",
    "categoria": "ELITE VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Héctor Gregory Sánchez Gutiérrez",
        "talla": "L",
        "genero": "Hombre",
        "email": "sg.hecgre30@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 61,
    "numCategoria": 5,
    "equipo": "Aswel Eduardo Morales Rodríguez",
    "box": "X7RAINING",
    "categoria": "ELITE VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Aswel Eduardo Morales Rodríguez",
        "talla": "M",
        "genero": "Hombre",
        "email": "masweleduardo@gmail.com",
        "telefono": ""
      }
    ]
  }
];
