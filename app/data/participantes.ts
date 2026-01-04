export type Participante = {
  id: number;
  nombre: string;
  box: string;
  correo: string;
  telefono: string;
  kit: string;
};

export const PARTICIPANTES: Participante[] = [
  {
    id: 1,
    nombre: "Ejemplo Aarón",
    box: "The Zone",
    correo: "correo@gmail.com",
    telefono: "5512345678",
    kit: "A-12",
  },
  {
    id: 2,
    nombre: "Ejemplo Sofía",
    box: "WOD Studio",
    correo: "sofia@gmail.com",
    telefono: "5587654321",
    kit: "B-07",
  },
];