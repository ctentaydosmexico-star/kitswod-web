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
    "equipo": "Emanuel Becerril",
    "box": "",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Emanuel Becerril",
        "talla": "M",
        "genero": "Hombre",
        "email": "3mm4nu3lbsc@gmail.com",
        "telefono": "5531589177"
      }
    ]
  },
  {
    "num": 2,
    "numCategoria": 2,
    "equipo": "Dante mateo Becerril",
    "box": "",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Dante mateo Becerril",
        "talla": "M",
        "genero": "Hombre",
        "email": "dantemat13@gmail.com",
        "telefono": "5538413382"
      }
    ]
  },
  {
    "num": 3,
    "numCategoria": 3,
    "equipo": "Emiliano Hernandez moreno",
    "box": "Horus",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Emiliano Hernandez moreno",
        "talla": "S",
        "genero": "Hombre",
        "email": "emiliano.hzdm@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 4,
    "numCategoria": 4,
    "equipo": "Joshua uriel Mendoza",
    "box": "Horus",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Joshua uriel Mendoza",
        "talla": "M",
        "genero": "Hombre",
        "email": "dinara_ra@hotmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 5,
    "numCategoria": 5,
    "equipo": "José Manuel Alvarez",
    "box": "CLF Crossfit",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "José Manuel Alvarez",
        "talla": "M",
        "genero": "Hombre",
        "email": "josse_mkl@hotmail.com José Manuel Álvarez Castillo Mediana  CLF Crossfit",
        "telefono": ""
      }
    ]
  },
  {
    "num": 6,
    "numCategoria": 6,
    "equipo": "Carlos Andrés Durán Cruz",
    "box": "",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Carlos Andrés Durán Cruz",
        "talla": "XL",
        "genero": "Hombre",
        "email": "carlos.duran.cruz12@gmail.com",
        "telefono": "5523215250"
      }
    ]
  },
  {
    "num": 7,
    "numCategoria": 7,
    "equipo": "Fernando Junco de la Cruz",
    "box": "",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Fernando Junco de la Cruz",
        "talla": "L",
        "genero": "Hombre",
        "email": "facturasdrjnc@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 8,
    "numCategoria": 8,
    "equipo": "Diego Emiliano Cortes peña",
    "box": "Elite",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Diego Emiliano Cortes peña",
        "talla": "S",
        "genero": "Hombre",
        "email": "diego.emiliano1205@gmail.com",
        "telefono": "5645421444"
      }
    ]
  },
  {
    "num": 9,
    "numCategoria": 9,
    "equipo": "Salvador Sánchez",
    "box": "Big panthers",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Salvador Sánchez",
        "talla": "M",
        "genero": "Hombre",
        "email": "max176179@gmail.com",
        "telefono": "7226098031"
      }
    ]
  },
  {
    "num": 10,
    "numCategoria": 10,
    "equipo": "Rodrigo Ezequiel Huerta Sánchez",
    "box": "Rebelión CrossTraining",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Rodrigo Ezequiel Huerta Sánchez",
        "talla": "M",
        "genero": "Hombre",
        "email": "ezequielhuerta03@outlook.com",
        "telefono": "5613200660"
      }
    ]
  },
  {
    "num": 11,
    "numCategoria": 11,
    "equipo": "Hector Ortiz",
    "box": "Élite Community",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Hector Ortiz",
        "talla": "XL",
        "genero": "Hombre",
        "email": "phectorortiz@hotmail.com",
        "telefono": "5536515552"
      }
    ]
  },
  {
    "num": 12,
    "numCategoria": 12,
    "equipo": "Javier Sánchez",
    "box": "Grizzlycrosstrainig",
    "categoria": "NOVATOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Javier Sánchez",
        "talla": "L",
        "genero": "Hombre",
        "email": "Yavier.sanchez26@gmail.com",
        "telefono": "5565401296"
      }
    ]
  },
  {
    "num": 13,
    "numCategoria": 1,
    "equipo": "Raul Hernandez Hernandez",
    "box": "HORUS CF",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Raul Hernandez Hernandez",
        "talla": "L",
        "genero": "Hombre",
        "email": "luar.hernan5@gmail.com",
        "telefono": "5572245381"
      }
    ]
  },
  {
    "num": 14,
    "numCategoria": 2,
    "equipo": "Emmanuel humberto Alegria",
    "box": "",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Emmanuel humberto Alegria",
        "talla": "M",
        "genero": "Hombre",
        "email": "ehap89@icloud.com",
        "telefono": "5531242194"
      }
    ]
  },
  {
    "num": 15,
    "numCategoria": 3,
    "equipo": "Gérardo Ponce Juarez",
    "box": "Spartan Crossfit Nr",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Gérardo Ponce Juarez",
        "talla": "L",
        "genero": "Hombre",
        "email": "slederpj@gmail.com",
        "telefono": "5576061671"
      }
    ]
  },
  {
    "num": 16,
    "numCategoria": 4,
    "equipo": "Javier Trueba Flores",
    "box": "Elite Community",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Javier Trueba Flores",
        "talla": "L",
        "genero": "Hombre",
        "email": "javiertrueba_8@hotmail.com",
        "telefono": "5514940364"
      }
    ]
  },
  {
    "num": 17,
    "numCategoria": 5,
    "equipo": "Jonathan Caleb Verdeja Muñoz",
    "box": "Fit Mode",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jonathan Caleb Verdeja Muñoz",
        "talla": "XL",
        "genero": "Hombre",
        "email": "Jon27verdeja@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 18,
    "numCategoria": 6,
    "equipo": "Alan Sebastian Hernández Torres",
    "box": "CrossTraining Exiliados",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Alan Sebastian Hernández Torres",
        "talla": "M",
        "genero": "Hombre",
        "email": "hdz32k@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 19,
    "numCategoria": 7,
    "equipo": "David Guerrero",
    "box": "Black Pearl Crosstraining",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "David Guerrero",
        "talla": "M",
        "genero": "Hombre",
        "email": "david12crimi95@outlook.com",
        "telefono": "5611306475"
      }
    ]
  },
  {
    "num": 20,
    "numCategoria": 8,
    "equipo": "Jonathan Zetina Ramirez",
    "box": "Fit Factory",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jonathan Zetina Ramirez",
        "talla": "XL",
        "genero": "Hombre",
        "email": "wzetina83@gmail.com",
        "telefono": "5611657707"
      }
    ]
  },
  {
    "num": 21,
    "numCategoria": 9,
    "equipo": "Agustin David Sanchez Hernandez",
    "box": "Fit Factory",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Agustin David Sanchez Hernandez",
        "talla": "L",
        "genero": "Hombre",
        "email": "davsan280885@outlook.com",
        "telefono": "5560667233"
      }
    ]
  },
  {
    "num": 22,
    "numCategoria": 10,
    "equipo": "Ricardo Fernando Carranza Ortiz",
    "box": "Spartan México Nr",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Ricardo Fernando Carranza Ortiz",
        "talla": "L",
        "genero": "Hombre",
        "email": "fernandocarranzaortiz4@gmail.com",
        "telefono": "5633010687"
      }
    ]
  },
  {
    "num": 23,
    "numCategoria": 11,
    "equipo": "Alber Diaz Robledo",
    "box": "Crossfit CLF",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Alber Diaz Robledo",
        "talla": "L",
        "genero": "Hombre",
        "email": "alberd.robledo@gmail.com",
        "telefono": "5580484214"
      }
    ]
  },
  {
    "num": 24,
    "numCategoria": 12,
    "equipo": "Edgar Resendiz",
    "box": "Black pear",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Edgar Resendiz",
        "talla": "S",
        "genero": "Hombre",
        "email": "edgarresendiz@hotmail.com",
        "telefono": "5544479710"
      }
    ]
  },
  {
    "num": 25,
    "numCategoria": 13,
    "equipo": "Manuel Falcon",
    "box": "Rott's",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Manuel Falcon",
        "talla": "M",
        "genero": "Hombre",
        "email": "manuel.falcon193@gmail.com",
        "telefono": "5539641762"
      }
    ]
  },
  {
    "num": 26,
    "numCategoria": 14,
    "equipo": "Alejandro De La Cruz",
    "box": "Rebelion Cross Training",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Alejandro De La Cruz",
        "talla": "L",
        "genero": "Hombre",
        "email": "delacruzhector244@gmail.com",
        "telefono": "5613322688"
      }
    ]
  },
  {
    "num": 27,
    "numCategoria": 15,
    "equipo": "Francisco Kevin Garduño Ramirez",
    "box": "Grizzly CrossTraining",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Francisco Kevin Garduño Ramirez",
        "talla": "S",
        "genero": "Hombre",
        "email": "kevin.u2elevation@gmail.com",
        "telefono": "5519218599"
      }
    ]
  },
  {
    "num": 28,
    "numCategoria": 16,
    "equipo": "Alejandro Hernández Núñez",
    "box": "CLF crossfit",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Alejandro Hernández Núñez",
        "talla": "L",
        "genero": "Hombre",
        "email": "alejandrohernandezn2705@gmail.com",
        "telefono": "5547676021"
      }
    ]
  },
  {
    "num": 29,
    "numCategoria": 17,
    "equipo": "Cesar Omar Martinez Nolasco",
    "box": "Rebelion Cross Training",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Cesar Omar Martinez Nolasco",
        "talla": "L",
        "genero": "Hombre",
        "email": "omarmar1204@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 30,
    "numCategoria": 18,
    "equipo": "Edgar Lopez olvera",
    "box": "Holkan",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Edgar Lopez olvera",
        "talla": "M",
        "genero": "Hombre",
        "email": "lopezrt1@gmail.com",
        "telefono": "5519421797"
      }
    ]
  },
  {
    "num": 31,
    "numCategoria": 19,
    "equipo": "Raul Flores",
    "box": "CrossTraining Exiliados",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Raul Flores",
        "talla": "M",
        "genero": "Hombre",
        "email": "raulflc8605@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 32,
    "numCategoria": 20,
    "equipo": "Erick Perez",
    "box": "Black Pearl",
    "categoria": "PRINCIPIANTES VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Erick Perez",
        "talla": "XL",
        "genero": "Hombre",
        "email": "ejpbeatz@gmail.com",
        "telefono": "5532760849"
      }
    ]
  },
  {
    "num": 33,
    "numCategoria": 1,
    "equipo": "Pedro Portuguéz Portuguéz",
    "box": "Malibu CrossTrainning",
    "categoria": "MáSTER PRINCIPIANTE +42 VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Pedro Portuguéz Portuguéz",
        "talla": "M",
        "genero": "Hombre",
        "email": "pol.milportuguez@gmail.com",
        "telefono": "5560367529"
      }
    ]
  },
  {
    "num": 34,
    "numCategoria": 2,
    "equipo": "Armando Gutierrez Contreras",
    "box": "Panthers",
    "categoria": "MáSTER PRINCIPIANTE +42 VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Armando Gutierrez Contreras",
        "talla": "M",
        "genero": "Hombre",
        "email": "armandogut@gmail.com",
        "telefono": "7224254527"
      }
    ]
  },
  {
    "num": 35,
    "numCategoria": 3,
    "equipo": "Romel Landeros",
    "box": "CrossTraining Exiliados",
    "categoria": "MáSTER PRINCIPIANTE +42 VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Romel Landeros",
        "talla": "XL",
        "genero": "Hombre",
        "email": "ro_mm_tten@hotmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 36,
    "numCategoria": 4,
    "equipo": "Emanuel Delgado",
    "box": "Rebelion Cross Training",
    "categoria": "MáSTER PRINCIPIANTE +42 VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Emanuel Delgado",
        "talla": "XL",
        "genero": "Hombre",
        "email": "emanuel.delgado.echavarria@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 37,
    "numCategoria": 5,
    "equipo": "José Rodrigo Becerril Robledo",
    "box": "",
    "categoria": "MáSTER PRINCIPIANTE +42 VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "José Rodrigo Becerril Robledo",
        "talla": "L",
        "genero": "Hombre",
        "email": "dodibec@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 38,
    "numCategoria": 6,
    "equipo": "Gerardo Salazar ramirez",
    "box": "Rott's",
    "categoria": "MáSTER PRINCIPIANTE +42 VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Gerardo Salazar ramirez",
        "talla": "M",
        "genero": "Hombre",
        "email": "gesara710108@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 39,
    "numCategoria": 7,
    "equipo": "Miguel Angel Olivera Rodriguez",
    "box": "Rott's",
    "categoria": "MáSTER PRINCIPIANTE +42 VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Miguel Angel Olivera Rodriguez",
        "talla": "L",
        "genero": "Hombre",
        "email": "curacuradoente@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 40,
    "numCategoria": 8,
    "equipo": "Luis Mercado Rodríguez",
    "box": "",
    "categoria": "MáSTER PRINCIPIANTE +42 VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Luis Mercado Rodríguez",
        "talla": "L",
        "genero": "Hombre",
        "email": "lujo1576@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 41,
    "numCategoria": 9,
    "equipo": "Odin alejandro Ramirez",
    "box": "CrossTraining Exiliados",
    "categoria": "MáSTER PRINCIPIANTE +42 VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Odin alejandro Ramirez",
        "talla": "XL",
        "genero": "Hombre",
        "email": "perrito.rockero.666@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 42,
    "numCategoria": 10,
    "equipo": "Erik marco Nogueron",
    "box": "Malibu",
    "categoria": "MáSTER PRINCIPIANTE +42 VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Erik marco Nogueron",
        "talla": "M",
        "genero": "Hombre",
        "email": "nogue27_ama@hotmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 43,
    "numCategoria": 11,
    "equipo": "Oscar Camacho Guerrero",
    "box": "Mosqueda",
    "categoria": "MáSTER PRINCIPIANTE +42 VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Oscar Camacho Guerrero",
        "talla": "M",
        "genero": "Hombre",
        "email": "Guecaos75@gmail.com",
        "telefono": "5520856382"
      }
    ]
  },
  {
    "num": 44,
    "numCategoria": 1,
    "equipo": "Ismael Méndez Bárcenas",
    "box": "Exiliados Crosstraining",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Ismael Méndez Bárcenas",
        "talla": "M",
        "genero": "Hombre",
        "email": "ismael94ipn@gmail.com",
        "telefono": "5520890531"
      }
    ]
  },
  {
    "num": 45,
    "numCategoria": 2,
    "equipo": "Jose Soto",
    "box": "",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jose Soto",
        "talla": "M",
        "genero": "Hombre",
        "email": "josepepe261287@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 46,
    "numCategoria": 3,
    "equipo": "Emmanuel Gilberto Hernández Rosas",
    "box": "Spartan México Nr",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Emmanuel Gilberto Hernández Rosas",
        "talla": "M",
        "genero": "Hombre",
        "email": "emmanuelhr39@gmail.com",
        "telefono": "5584205945"
      }
    ]
  },
  {
    "num": 47,
    "numCategoria": 4,
    "equipo": "Briyan Jiménez",
    "box": "Fit mode",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Briyan Jiménez",
        "talla": "L",
        "genero": "Hombre",
        "email": "bj.figueroa95@outlook.com",
        "telefono": "5545328210"
      }
    ]
  },
  {
    "num": 48,
    "numCategoria": 5,
    "equipo": "William Lorenzo Genchi",
    "box": "",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "William Lorenzo Genchi",
        "talla": "M",
        "genero": "Hombre",
        "email": "williamlorenzogenchi@gmail.com",
        "telefono": "5611255655"
      }
    ]
  },
  {
    "num": 49,
    "numCategoria": 6,
    "equipo": "César Octavio Barragán Hernández",
    "box": "Big panthers",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "César Octavio Barragán Hernández",
        "talla": "XL",
        "genero": "Hombre",
        "email": "barragan_octavio@icloud.com",
        "telefono": "4494380018"
      }
    ]
  },
  {
    "num": 50,
    "numCategoria": 7,
    "equipo": "Mauricio Samuel Chaboya Gómez",
    "box": "BIG PANTHERS",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Mauricio Samuel Chaboya Gómez",
        "talla": "M",
        "genero": "Hombre",
        "email": "mausam1999@hotmail.com",
        "telefono": "7224451681"
      }
    ]
  },
  {
    "num": 51,
    "numCategoria": 8,
    "equipo": "Adan Vidal",
    "box": "Malibú CrossTrainning",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Adan Vidal",
        "talla": "L",
        "genero": "Hombre",
        "email": "adanvidalgarcia@gmail.com",
        "telefono": "5580032958"
      }
    ]
  },
  {
    "num": 52,
    "numCategoria": 9,
    "equipo": "Arnol Monroy Gomez",
    "box": "Rotts",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Arnol Monroy Gomez",
        "talla": "M",
        "genero": "Hombre",
        "email": "amgcamts@gmail.com",
        "telefono": "5529559413"
      }
    ]
  },
  {
    "num": 53,
    "numCategoria": 10,
    "equipo": "Alain Gomez",
    "box": "Wodfitness",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Alain Gomez",
        "talla": "L",
        "genero": "Hombre",
        "email": "alaingomez978@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 54,
    "numCategoria": 11,
    "equipo": "Eduardo Suarez",
    "box": "Crosstraining exiliados",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Eduardo Suarez",
        "talla": "L",
        "genero": "Hombre",
        "email": "eduardouaemlac@gmail.com",
        "telefono": "5534674812"
      }
    ]
  },
  {
    "num": 55,
    "numCategoria": 12,
    "equipo": "Román Cuevas Delfín",
    "box": "Big Panthers",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Román Cuevas Delfín",
        "talla": "XL",
        "genero": "Hombre",
        "email": "theacidroom@gmail.com",
        "telefono": "7221483338"
      }
    ]
  },
  {
    "num": 56,
    "numCategoria": 13,
    "equipo": "Jesús Cruz",
    "box": "Black pearl CrossTraining",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jesús Cruz",
        "talla": "M",
        "genero": "Hombre",
        "email": "jesus.prodherin@gmail.com",
        "telefono": "5632770271"
      }
    ]
  },
  {
    "num": 57,
    "numCategoria": 14,
    "equipo": "Luis Baiza Hernández",
    "box": "Hourus",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Luis Baiza Hernández",
        "talla": "XL",
        "genero": "Hombre",
        "email": "baizahernandezluis@gmail.com",
        "telefono": "5574109410"
      }
    ]
  },
  {
    "num": 58,
    "numCategoria": 15,
    "equipo": "Alejandro Ojeda",
    "box": "CLF/HOLKAN",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Alejandro Ojeda",
        "talla": "L",
        "genero": "Hombre",
        "email": "ojedaale119@gmail.com",
        "telefono": "5525087480"
      }
    ]
  },
  {
    "num": 59,
    "numCategoria": 16,
    "equipo": "Donovan Ramirez López",
    "box": "Holkan CrossTraining",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Donovan Ramirez López",
        "talla": "L",
        "genero": "Hombre",
        "email": "ramidonovan95@gmail.com",
        "telefono": "5591854283"
      }
    ]
  },
  {
    "num": 60,
    "numCategoria": 17,
    "equipo": "Antonio Del Río Segovia",
    "box": "Amarok SC",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Antonio Del Río Segovia",
        "talla": "L",
        "genero": "Hombre",
        "email": "tonosegovia69@gmail.com",
        "telefono": "5510772230"
      }
    ]
  },
  {
    "num": 61,
    "numCategoria": 18,
    "equipo": "Gustavo Rodríguez Morales",
    "box": "Holkan CrossTraining",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Gustavo Rodríguez Morales",
        "talla": "L",
        "genero": "Hombre",
        "email": "gustavo.rodriguez.morales@gmail.com",
        "telefono": "5548336058"
      }
    ]
  },
  {
    "num": 62,
    "numCategoria": 19,
    "equipo": "Fernando Moreno",
    "box": "The Bronx",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Fernando Moreno",
        "talla": "M",
        "genero": "Hombre",
        "email": "fermorenogom@gmail.com",
        "telefono": "5581009802"
      }
    ]
  },
  {
    "num": 63,
    "numCategoria": 20,
    "equipo": "Yair Yonatan Calzada Cabral",
    "box": "Exiliados",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Yair Yonatan Calzada Cabral",
        "talla": "M",
        "genero": "Hombre",
        "email": "ycabralwedding@gmail.com",
        "telefono": "5586655493"
      }
    ]
  },
  {
    "num": 64,
    "numCategoria": 21,
    "equipo": "Jamil Rueda",
    "box": "Elite Community",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jamil Rueda",
        "talla": "L",
        "genero": "Hombre",
        "email": "jamrueda23@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 65,
    "numCategoria": 22,
    "equipo": "Miguel Mendoza",
    "box": "Iron",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Miguel Mendoza",
        "talla": "L",
        "genero": "Hombre",
        "email": "mangell_119@hotmail.com",
        "telefono": "5518679750"
      }
    ]
  },
  {
    "num": 66,
    "numCategoria": 23,
    "equipo": "Gerardo Arreola Montes de Oca",
    "box": "",
    "categoria": "INTERMEDIOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Gerardo Arreola Montes de Oca",
        "talla": "L",
        "genero": "Hombre",
        "email": "gerardomitchellderecho@outlook.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 67,
    "numCategoria": 1,
    "equipo": "Jesus Sinaí Villegas Luna",
    "box": "Exiliados",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jesus Sinaí Villegas Luna",
        "talla": "L",
        "genero": "Hombre",
        "email": "jsinai_060@hotmail.com",
        "telefono": "5530579673"
      }
    ]
  },
  {
    "num": 68,
    "numCategoria": 2,
    "equipo": "Delta Flores",
    "box": "Ek Balam Pro",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Delta Flores",
        "talla": "L",
        "genero": "Hombre",
        "email": "davidfroning3@gmail.com",
        "telefono": "5630324548"
      }
    ]
  },
  {
    "num": 69,
    "numCategoria": 3,
    "equipo": "Carlos Antonio Caudillo Martinez",
    "box": "Dragons cave",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Carlos Antonio Caudillo Martinez",
        "talla": "L",
        "genero": "Hombre",
        "email": "carlosacm1988@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 70,
    "numCategoria": 4,
    "equipo": "Manuel Monroy",
    "box": "La Clica Training",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Manuel Monroy",
        "talla": "L",
        "genero": "Hombre",
        "email": "manuel.h.m.9702@gmail.com",
        "telefono": "7221160370"
      }
    ]
  },
  {
    "num": 71,
    "numCategoria": 5,
    "equipo": "David Martinez Brionez",
    "box": "",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "David Martinez Brionez",
        "talla": "M",
        "genero": "Hombre",
        "email": "brionesxforce@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 72,
    "numCategoria": 6,
    "equipo": "Omar Perez Murillo",
    "box": "",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Omar Perez Murillo",
        "talla": "M",
        "genero": "Hombre",
        "email": "omarperezmurillo@hotmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 73,
    "numCategoria": 7,
    "equipo": "Angel Navarrete",
    "box": "California Cross Training",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Angel Navarrete",
        "talla": "M",
        "genero": "Hombre",
        "email": "navarrete1026@hotmail.com",
        "telefono": "5519196271"
      }
    ]
  },
  {
    "num": 74,
    "numCategoria": 8,
    "equipo": "Emiliano Medina Rivera",
    "box": "Crosstraining Exiliados",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Emiliano Medina Rivera",
        "talla": "L",
        "genero": "Hombre",
        "email": "emilianomedinarivera42@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 75,
    "numCategoria": 9,
    "equipo": "Osvaldo",
    "box": "FITFACTORY_FITNESS & LOSCHIKIS TEAM",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Osvaldo",
        "talla": "M",
        "genero": "Hombre",
        "email": "omarrom.lego@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 76,
    "numCategoria": 10,
    "equipo": "Gil Mendez",
    "box": "Elite community",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Gil Mendez",
        "talla": "L",
        "genero": "Hombre",
        "email": "elite.programacion26@gmail.com",
        "telefono": "5542293329"
      }
    ]
  },
  {
    "num": 77,
    "numCategoria": 11,
    "equipo": "Norman Tiller Cervantes",
    "box": "Alter Ego",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Norman Tiller Cervantes",
        "talla": "M",
        "genero": "Hombre",
        "email": "Tillerjj23@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 78,
    "numCategoria": 12,
    "equipo": "Miguel Ángel Arista Rueda",
    "box": "Oddisea Nutricional",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Miguel Ángel Arista Rueda",
        "talla": "M",
        "genero": "Hombre",
        "email": "miguel.1212939@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 79,
    "numCategoria": 13,
    "equipo": "Iván Cabrera Torres",
    "box": "California Cross",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Iván Cabrera Torres",
        "talla": "L",
        "genero": "Hombre",
        "email": "ivan.cato2393@gmail.com",
        "telefono": "5525635287"
      }
    ]
  },
  {
    "num": 80,
    "numCategoria": 14,
    "equipo": "Saúl Pescador",
    "box": "Mercenarios",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Saúl Pescador",
        "talla": "L",
        "genero": "Hombre",
        "email": "Au_3141@gmail.com",
        "telefono": "5554793954"
      }
    ]
  },
  {
    "num": 81,
    "numCategoria": 15,
    "equipo": "Daniel Vargas",
    "box": "Bronx",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Daniel Vargas",
        "talla": "L",
        "genero": "Hombre",
        "email": "daniel.vargas.velarde@hotmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 82,
    "numCategoria": 16,
    "equipo": "Abraham Castañeda martinez",
    "box": "CrossTraining Exiliados",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Abraham Castañeda martinez",
        "talla": "L",
        "genero": "Hombre",
        "email": "castañeda_vulcanisadora08@hotmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 83,
    "numCategoria": 17,
    "equipo": "Ricardo Castro Luna",
    "box": "Odin Soldiers",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Ricardo Castro Luna",
        "talla": "M",
        "genero": "Hombre",
        "email": "ricardocastroluna80@gmail.com",
        "telefono": "5518327071"
      }
    ]
  },
  {
    "num": 84,
    "numCategoria": 18,
    "equipo": "Pepe Cervantes",
    "box": "Bronx",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Pepe Cervantes",
        "talla": "XL",
        "genero": "Hombre",
        "email": "josecervaits@gmail.con",
        "telefono": ""
      }
    ]
  },
  {
    "num": 85,
    "numCategoria": 19,
    "equipo": "Francisco Herrera",
    "box": "MERCENARIOS",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Francisco Herrera",
        "talla": "L",
        "genero": "Hombre",
        "email": "iam.fcoxhm@gmail.com",
        "telefono": "4341555945"
      }
    ]
  },
  {
    "num": 86,
    "numCategoria": 20,
    "equipo": "Roman Andre Del Aguila Guzman",
    "box": "Luther",
    "categoria": "AVANZADOS VARONIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Roman Andre Del Aguila Guzman",
        "talla": "S",
        "genero": "Hombre",
        "email": "romandelaguila67@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 87,
    "numCategoria": 1,
    "equipo": "Fabiola De Jesús Patricio",
    "box": "CrossTraining Exiliados",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Fabiola De Jesús Patricio",
        "talla": "XL",
        "genero": "Mujer",
        "email": "dejesuspatricio08faby@gmail.com",
        "telefono": "5575259127"
      }
    ]
  },
  {
    "num": 88,
    "numCategoria": 2,
    "equipo": "Fernanda Del Águila Guzmán",
    "box": "Horus",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Fernanda Del Águila Guzmán",
        "talla": "M",
        "genero": "Mujer",
        "email": "f3rsita.guzmann@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 89,
    "numCategoria": 3,
    "equipo": "Xochitl Munguia Cruz",
    "box": "",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Xochitl Munguia Cruz",
        "talla": "M",
        "genero": "Mujer",
        "email": "xochirtcruzsoto@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 90,
    "numCategoria": 4,
    "equipo": "Aislinn Ceron",
    "box": "",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Aislinn Ceron",
        "talla": "M",
        "genero": "Mujer",
        "email": "aislinn.96@hotmail.com",
        "telefono": "5579213340"
      }
    ]
  },
  {
    "num": 91,
    "numCategoria": 5,
    "equipo": "Mariana Acosta Camacho",
    "box": "Toreo",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Mariana Acosta Camacho",
        "talla": "M",
        "genero": "Mujer",
        "email": "hitomikansaki.mx@gmail.com",
        "telefono": "5554763881"
      }
    ]
  },
  {
    "num": 92,
    "numCategoria": 6,
    "equipo": "Sarahi Galán Lopez",
    "box": "Rebelión Cross Training",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Sarahi Galán Lopez",
        "talla": "S",
        "genero": "Mujer",
        "email": "galansarahi0@gmail.com",
        "telefono": "5548525899"
      }
    ]
  },
  {
    "num": 93,
    "numCategoria": 7,
    "equipo": "Tania Dalay Badillo García",
    "box": "Malibu Crosstraining",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Tania Dalay Badillo García",
        "talla": "S",
        "genero": "Mujer",
        "email": "badillotania644@gmail.com",
        "telefono": "5541138228"
      }
    ]
  },
  {
    "num": 94,
    "numCategoria": 8,
    "equipo": "Vane Olvera Luna",
    "box": "",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Vane Olvera Luna",
        "talla": "M",
        "genero": "Mujer",
        "email": "vane.luna.olvera12@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 95,
    "numCategoria": 9,
    "equipo": "Vanessa Melchor Espinosa",
    "box": "Horus CrossFit",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Vanessa Melchor Espinosa",
        "talla": "S",
        "genero": "Mujer",
        "email": "vanss890_uam@hotmail.com",
        "telefono": "5512801203"
      }
    ]
  },
  {
    "num": 96,
    "numCategoria": 10,
    "equipo": "Melany Soto",
    "box": "CrossTraining Exiliados",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Melany Soto",
        "talla": "S",
        "genero": "Mujer",
        "email": "sotomelany700@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 97,
    "numCategoria": 11,
    "equipo": "BERENICE HILARIO",
    "box": "",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "BERENICE HILARIO",
        "talla": "M",
        "genero": "Mujer",
        "email": "lc.berenice.hilario@gmail.com",
        "telefono": "5554726910"
      }
    ]
  },
  {
    "num": 98,
    "numCategoria": 12,
    "equipo": "Tania Sunikey González",
    "box": "Spartan México NR",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Tania Sunikey González",
        "talla": "S",
        "genero": "Mujer",
        "email": "sunikey461@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 99,
    "numCategoria": 13,
    "equipo": "Sandra Saavedra Alvarado",
    "box": "Dragon’s Cave",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Sandra Saavedra Alvarado",
        "talla": "M",
        "genero": "Mujer",
        "email": "lic.sandra.saavedra@gmail.com",
        "telefono": "5531477237"
      }
    ]
  },
  {
    "num": 100,
    "numCategoria": 14,
    "equipo": "Karen Ramirez lopez",
    "box": "Orion",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Karen Ramirez lopez",
        "talla": "M",
        "genero": "Mujer",
        "email": "karenramirez8854@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 101,
    "numCategoria": 15,
    "equipo": "Ingrid valeria Garcia frías",
    "box": "Orion CrossTraining",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Ingrid valeria Garcia frías",
        "talla": "M",
        "genero": "Mujer",
        "email": "ingridvaleria216@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 102,
    "numCategoria": 16,
    "equipo": "Paulina Saldaña",
    "box": "Malibu Cross Training",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Paulina Saldaña",
        "talla": "M",
        "genero": "Mujer",
        "email": "yeah_nash@hotmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 103,
    "numCategoria": 17,
    "equipo": "Sofía Merlo",
    "box": "Orion Crosstraining",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Sofía Merlo",
        "talla": "M",
        "genero": "Mujer",
        "email": "ranya.merlo@gmail.com",
        "telefono": "5587754954"
      }
    ]
  },
  {
    "num": 104,
    "numCategoria": 18,
    "equipo": "Itzayana Berenice Barrón Gutiérrez",
    "box": "Rocko fitness center",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Itzayana Berenice Barrón Gutiérrez",
        "talla": "S",
        "genero": "Mujer",
        "email": "erikagr0509@gmail.com",
        "telefono": "5610733608"
      }
    ]
  },
  {
    "num": 105,
    "numCategoria": 19,
    "equipo": "Daniela Corolina Anaya Navarrete",
    "box": "California",
    "categoria": "NOVATOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Daniela Corolina Anaya Navarrete",
        "talla": "M",
        "genero": "Mujer",
        "email": "carolinaanayanavarrete@gmail.com",
        "telefono": "5512686935"
      }
    ]
  },
  {
    "num": 106,
    "numCategoria": 1,
    "equipo": "Fernanda Chacon",
    "box": "Mercenarios",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Fernanda Chacon",
        "talla": "S",
        "genero": "Mujer",
        "email": "maferchavizueth@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 107,
    "numCategoria": 2,
    "equipo": "Claudia Rodriguez Mata",
    "box": "The North",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Claudia Rodriguez Mata",
        "talla": "M",
        "genero": "Mujer",
        "email": "claudemate@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 108,
    "numCategoria": 3,
    "equipo": "Karla Susana Sanchez Diaz",
    "box": "CLF Crossfit",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Karla Susana Sanchez Diaz",
        "talla": "S",
        "genero": "Mujer",
        "email": "susanasan1393@gmail.con",
        "telefono": ""
      }
    ]
  },
  {
    "num": 109,
    "numCategoria": 4,
    "equipo": "Andrea Marisol Carranza Landeros",
    "box": "California",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Andrea Marisol Carranza Landeros",
        "talla": "M",
        "genero": "Mujer",
        "email": "carrlanders@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 110,
    "numCategoria": 5,
    "equipo": "Daniela Guadalupe Nicanor Diaz",
    "box": "Amarok",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Daniela Guadalupe Nicanor Diaz",
        "talla": "S",
        "genero": "Mujer",
        "email": "honeyganjah@gmail.com",
        "telefono": "5512618381"
      }
    ]
  },
  {
    "num": 111,
    "numCategoria": 6,
    "equipo": "Estefania Torres Inclan",
    "box": "Viktory CrossTraining",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Estefania Torres Inclan",
        "talla": "M",
        "genero": "Mujer",
        "email": "fanny.torinc98@gmail.com",
        "telefono": "5580956707"
      }
    ]
  },
  {
    "num": 112,
    "numCategoria": 7,
    "equipo": "Lilian marlene Castañeda martinez",
    "box": "Grizzly",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Lilian marlene Castañeda martinez",
        "talla": "S",
        "genero": "Mujer",
        "email": "lilimar_lmc@hotmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 113,
    "numCategoria": 8,
    "equipo": "Yessica Venegas Miranda",
    "box": "Fit Mode",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Yessica Venegas Miranda",
        "talla": "S",
        "genero": "Mujer",
        "email": "yexxxxxxxi@gmail.com",
        "telefono": "7297567887"
      }
    ]
  },
  {
    "num": 114,
    "numCategoria": 9,
    "equipo": "Susana Diaz Cervantes",
    "box": "fitmode",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Susana Diaz Cervantes",
        "talla": "S",
        "genero": "Mujer",
        "email": "susidiazcervantes90@gmail.com",
        "telefono": "5518105035"
      }
    ]
  },
  {
    "num": 115,
    "numCategoria": 10,
    "equipo": "Gabriela Astudillo",
    "box": "elite community",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Gabriela Astudillo",
        "talla": "M",
        "genero": "Mujer",
        "email": "Gabriela.astudillo.nateras@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 116,
    "numCategoria": 11,
    "equipo": "Andrea Ramirez",
    "box": "",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Andrea Ramirez",
        "talla": "M",
        "genero": "Mujer",
        "email": "andrea_ramirez235@hotmail.com",
        "telefono": "5528986825"
      }
    ]
  },
  {
    "num": 117,
    "numCategoria": 12,
    "equipo": "Tania Bautista",
    "box": "Crosstraining Exiliados",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Tania Bautista",
        "talla": "M",
        "genero": "Mujer",
        "email": "taniarenee03@outlook.com",
        "telefono": "5575204088"
      }
    ]
  },
  {
    "num": 118,
    "numCategoria": 13,
    "equipo": "Araceli Hernández",
    "box": "Crosstraining Exiliados",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Araceli Hernández",
        "talla": "M",
        "genero": "Mujer",
        "email": "aracelihdz1983@outlook.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 119,
    "numCategoria": 14,
    "equipo": "Lourdes Rodriguez ibarra",
    "box": "Spartan",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Lourdes Rodriguez ibarra",
        "talla": "M",
        "genero": "Mujer",
        "email": "marialourdes.ibarra4547@gmail.com",
        "telefono": "5577282055"
      }
    ]
  },
  {
    "num": 120,
    "numCategoria": 15,
    "equipo": "Sandra Alicia Aguilar Castro",
    "box": "FIT MODE",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Sandra Alicia Aguilar Castro",
        "talla": "M",
        "genero": "Mujer",
        "email": "sandraaliciaaguilar596@gmail.com",
        "telefono": "5545459398"
      }
    ]
  },
  {
    "num": 121,
    "numCategoria": 16,
    "equipo": "Natasha Ceron",
    "box": "CrossTraining Exiliados",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Natasha Ceron",
        "talla": "S",
        "genero": "Mujer",
        "email": "natashaceron82@gmail.com",
        "telefono": "5514522617"
      }
    ]
  },
  {
    "num": 122,
    "numCategoria": 17,
    "equipo": "Isabel Santiago Hernández",
    "box": "Rebelion Crosstraining",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Isabel Santiago Hernández",
        "talla": "M",
        "genero": "Mujer",
        "email": "Izabell111189@gmail.com",
        "telefono": "5518258794"
      }
    ]
  },
  {
    "num": 123,
    "numCategoria": 18,
    "equipo": "Mabel Montserrat Flores Maqueda",
    "box": "Malibu CrossTraining",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Mabel Montserrat Flores Maqueda",
        "talla": "M",
        "genero": "Mujer",
        "email": "mabelmfm@outlook.com",
        "telefono": "5573940565"
      }
    ]
  },
  {
    "num": 124,
    "numCategoria": 19,
    "equipo": "Jaqueline Ramírez Alba",
    "box": "Fit mode",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jaqueline Ramírez Alba",
        "talla": "M",
        "genero": "Mujer",
        "email": "jaquelinrmz@yahoo.com",
        "telefono": "5567858069"
      }
    ]
  },
  {
    "num": 125,
    "numCategoria": 20,
    "equipo": "Marisol Martinez Alvarez",
    "box": "",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Marisol Martinez Alvarez",
        "talla": "M",
        "genero": "Mujer",
        "email": "marisolmmtz26.1@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 126,
    "numCategoria": 21,
    "equipo": "Andrea Guadalupe Garduño Ortíz",
    "box": "Spartan Programming",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Andrea Guadalupe Garduño Ortíz",
        "talla": "L",
        "genero": "Mujer",
        "email": "andrea_ggo@hotmail.com",
        "telefono": "7224697826"
      }
    ]
  },
  {
    "num": 127,
    "numCategoria": 22,
    "equipo": "Monserrat Garduño",
    "box": "Grizzly CrossTraining",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Monserrat Garduño",
        "talla": "S",
        "genero": "Mujer",
        "email": "monsegarduno2010@hotmail.com",
        "telefono": "5527089954"
      }
    ]
  },
  {
    "num": 128,
    "numCategoria": 23,
    "equipo": "Nereida Medina Aviles",
    "box": "",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Nereida Medina Aviles",
        "talla": "S",
        "genero": "Mujer",
        "email": "medinabeba8@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 129,
    "numCategoria": 24,
    "equipo": "Valeria Yanin Mendoza Arrizon",
    "box": "",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Valeria Yanin Mendoza Arrizon",
        "talla": "M",
        "genero": "Mujer",
        "email": "valarrizon0205@gmail.com",
        "telefono": "7226106686"
      }
    ]
  },
  {
    "num": 130,
    "numCategoria": 25,
    "equipo": "Sandra Lucia Olvera Campos",
    "box": "Big Panthers",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Sandra Lucia Olvera Campos",
        "talla": "M",
        "genero": "Mujer",
        "email": "diemsaolvera@gmail.com",
        "telefono": "7222530668"
      }
    ]
  },
  {
    "num": 131,
    "numCategoria": 26,
    "equipo": "Rebeca Sandra Sandoval Paz",
    "box": "",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Rebeca Sandra Sandoval Paz",
        "talla": "S",
        "genero": "Mujer",
        "email": "camila_flaca_23@hotmail.com",
        "telefono": "5517324145"
      }
    ]
  },
  {
    "num": 132,
    "numCategoria": 27,
    "equipo": "Adriana Torrijos Brambila",
    "box": "Rebelions Cross Training",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Adriana Torrijos Brambila",
        "talla": "XL",
        "genero": "Mujer",
        "email": "lictorrijos27@gmail.com",
        "telefono": "5516852106"
      }
    ]
  },
  {
    "num": 133,
    "numCategoria": 28,
    "equipo": "Citlalli “Lali” Maldonado",
    "box": "Grizzly CrossTraining",
    "categoria": "PRINCIPIANTES FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Citlalli “Lali” Maldonado",
        "talla": "L",
        "genero": "Mujer",
        "email": "lalifm17@gmail.com",
        "telefono": "5510583524"
      }
    ]
  },
  {
    "num": 134,
    "numCategoria": 1,
    "equipo": "Blanca Vidal",
    "box": "Dragon´s Cave CF",
    "categoria": "MáSTER PRINCIPIANTE +42 FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Blanca Vidal",
        "talla": "XL",
        "genero": "Mujer",
        "email": "bvidalgarcia@gmail.com",
        "telefono": "5554344143"
      }
    ]
  },
  {
    "num": 135,
    "numCategoria": 2,
    "equipo": "Ofelia Sanchez Uribe",
    "box": "Big Panthers",
    "categoria": "MáSTER PRINCIPIANTE +42 FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Ofelia Sanchez Uribe",
        "talla": "S",
        "genero": "Mujer",
        "email": "ofesan1001@gmail.com",
        "telefono": "7223507449"
      }
    ]
  },
  {
    "num": 136,
    "numCategoria": 3,
    "equipo": "Teresa Mendoza",
    "box": "Jaguars",
    "categoria": "MáSTER PRINCIPIANTE +42 FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Teresa Mendoza",
        "talla": "S",
        "genero": "Mujer",
        "email": "jaguars.crossfit@gmail.com",
        "telefono": "5627087500"
      }
    ]
  },
  {
    "num": 137,
    "numCategoria": 4,
    "equipo": "Jessica Mireya Clemente Jarquin",
    "box": "Rebelión Cross Training",
    "categoria": "MáSTER PRINCIPIANTE +42 FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jessica Mireya Clemente Jarquin",
        "talla": "M",
        "genero": "Mujer",
        "email": "mack_jessy@hotmail.com",
        "telefono": "5518422602"
      }
    ]
  },
  {
    "num": 138,
    "numCategoria": 5,
    "equipo": "Karina Gutierrez",
    "box": "Deus Hybrid Center",
    "categoria": "MáSTER PRINCIPIANTE +42 FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Karina Gutierrez",
        "talla": "S",
        "genero": "Mujer",
        "email": "moka54@outlook.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 139,
    "numCategoria": 6,
    "equipo": "Cecilia Quezada",
    "box": "Crosstraining Exiliados",
    "categoria": "MáSTER PRINCIPIANTE +42 FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Cecilia Quezada",
        "talla": "M",
        "genero": "Mujer",
        "email": "cecyquez@gmail.com",
        "telefono": "5516864632"
      }
    ]
  },
  {
    "num": 140,
    "numCategoria": 7,
    "equipo": "Susana Montes",
    "box": "Crosstraining exiliados",
    "categoria": "MáSTER PRINCIPIANTE +42 FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Susana Montes",
        "talla": "M",
        "genero": "Mujer",
        "email": "susana.ml@hotmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 141,
    "numCategoria": 8,
    "equipo": "Silvia Chavez",
    "box": "Malibu Cross training",
    "categoria": "MáSTER PRINCIPIANTE +42 FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Silvia Chavez",
        "talla": "M",
        "genero": "Mujer",
        "email": "Silvita227@hotmail.com",
        "telefono": "5533925443"
      }
    ]
  },
  {
    "num": 142,
    "numCategoria": 1,
    "equipo": "Andrea Victorica Vázquez",
    "box": "",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Andrea Victorica Vázquez",
        "talla": "S",
        "genero": "Mujer",
        "email": "andreavictoricav@gmail.com",
        "telefono": "5591648908"
      }
    ]
  },
  {
    "num": 143,
    "numCategoria": 2,
    "equipo": "Araceli Gabriela Mondragón Ortiz",
    "box": "",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Araceli Gabriela Mondragón Ortiz",
        "talla": "M",
        "genero": "Mujer",
        "email": "fitvida26@gmail.com",
        "telefono": "5525080160"
      }
    ]
  },
  {
    "num": 144,
    "numCategoria": 3,
    "equipo": "Karla Lomeli lemas",
    "box": "Fitcorner",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Karla Lomeli lemas",
        "talla": "L",
        "genero": "Mujer",
        "email": "karlita.lomelii@gmail.com",
        "telefono": "5527509355"
      }
    ]
  },
  {
    "num": 145,
    "numCategoria": 4,
    "equipo": "Romari Del Aguila Guzman",
    "box": "",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Romari Del Aguila Guzman",
        "talla": "M",
        "genero": "Mujer",
        "email": "delaguilaromari@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 146,
    "numCategoria": 5,
    "equipo": "AMAYA GODÍNEZ",
    "box": "CrossTraining Exiliados by Chikis",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "AMAYA GODÍNEZ",
        "talla": "S",
        "genero": "Mujer",
        "email": "amayaggo@gmail.com",
        "telefono": "5585345454"
      }
    ]
  },
  {
    "num": 147,
    "numCategoria": 6,
    "equipo": "Miriam Alicia Hernandez tovar",
    "box": "Iron wolf",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Miriam Alicia Hernandez tovar",
        "talla": "S",
        "genero": "Mujer",
        "email": "miniemaht93241117@gmail.com",
        "telefono": "6441512774"
      }
    ]
  },
  {
    "num": 148,
    "numCategoria": 7,
    "equipo": "Quetzalli Munguia Cruz",
    "box": "Rebelión CrossTraining",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Quetzalli Munguia Cruz",
        "talla": "M",
        "genero": "Mujer",
        "email": "munguiacruzq@gmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 149,
    "numCategoria": 8,
    "equipo": "Sara Vivian Martínez Velazquez",
    "box": "",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Sara Vivian Martínez Velazquez",
        "talla": "M",
        "genero": "Mujer",
        "email": "smvelazquez48@gmail.com",
        "telefono": "5536641712"
      }
    ]
  },
  {
    "num": 150,
    "numCategoria": 9,
    "equipo": "Jacquelinne Diaz",
    "box": "CrossTraining Exiliados",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Jacquelinne Diaz",
        "talla": "L",
        "genero": "Mujer",
        "email": "yak_diaz@hotmail.com",
        "telefono": ""
      }
    ]
  },
  {
    "num": 151,
    "numCategoria": 10,
    "equipo": "Azu Vidal",
    "box": "Team Peanuts",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Azu Vidal",
        "talla": "XL",
        "genero": "Mujer",
        "email": "vidalgarciazucena@gmail.com",
        "telefono": "5510999477"
      }
    ]
  },
  {
    "num": 152,
    "numCategoria": 11,
    "equipo": "Ana Daniela Monroy Chávez",
    "box": "",
    "categoria": "INTERMEDIOS FEMENIL",
    "status": "Activo",
    "atletas": [
      {
        "nombre": "Ana Daniela Monroy Chávez",
        "talla": "M",
        "genero": "Mujer",
        "email": "danielamonroy991@gmail.com",
        "telefono": "5562291989"
      }
    ]
  }
];
