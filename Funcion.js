//se importa fs
const fs = require('fs');

function editarParteArchivoRTF(archivo, parteEditar, nuevoTexto) {
    fs.readFile(archivo, 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo:', err);
        return;
      }
  
      // Buscar la parte a editar
      const inicioParte = data.indexOf(parteEditar);
      if (inicioParte === -1) {
        console.log('No se encontró la parte a editar en el archivo.');
        return;
      }
  
      // Calcular el final de la parte a editar
      const finParte = inicioParte + parteEditar.length;
  
      // Reemplazar la parte con el nuevo texto
      const nuevoContenido = data.slice(0, inicioParte) + nuevoTexto + data.slice(finParte);
  
      // Escribir el archivo con el contenido actualizado
      fs.writeFile(archivo, nuevoContenido, 'utf8', (err) => {
        if (err) {
          console.error('Error al escribir en el archivo:', err);
          return;
        }
        console.log('Archivo actualizado correctamente.');
      });
    });
  }
  
  // Ejemplo de uso
  const archivoRTF = 'Plantilla_Facturacion.rtf';
  const parteAEditar = 'rtfRFCEMISOR';
  const nuevoTexto = 'Hola';
  
  editarParteArchivoRTF(archivoRTF, parteAEditar, nuevoTexto);