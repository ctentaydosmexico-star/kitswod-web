# Formato reutilizable para listas de kits WOD

Cada competencia parte de un Excel verificado. Se genera una fila por atleta activo, ordenada por `NUMT`, con estas seis columnas en este orden:

`NUMT,CATEGORIA,NOMBRE PARTICIPANTE,GENERO,TALLA,BOX DE PROCEDENCIA`

Se preparan tres CSV en UTF-8:

- **ETIQUETAS:** las seis columnas estándar.
- **PULSERAS:** las seis columnas estándar.
- **FIRMAS_ENTREGA:** las seis columnas estándar más `FIRMA,FECHA_ENTREGA,ENTREGADO_POR,OBSERVACIONES`, inicialmente vacías.

El archivo fuente debe conservar los datos oficiales de la competencia. Antes de usar los CSV, comprobar que `NUMT` sea único, que cada atleta tenga nombre, categoría, género y talla, y que los conteos de los tres archivos coincidan con el Excel. Los colores, medidas de impresión y códigos QR se agregan solo cuando estén definidos para la competencia. Correos y teléfonos no se incluyen en estas salidas.
