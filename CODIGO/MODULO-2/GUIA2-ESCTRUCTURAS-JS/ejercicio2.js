/*

EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente:
•Examen =20%
•tareas = 40%
•asistencia = 10%
•investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.

*/

function calcularNota(nombreParam, carnetParam, examenParam, tareasParam, asistenciaParam, investigacionParam) {
    let notaFinal=(examenParam*0.20)+(tareasParam*0.40)+(asistenciaParam*0.10)+(investigacionParam*0.30);
    
    console.log("Nombre del Alumno: " + nombreParam);
    console.log("Carnet del Alumno: " + carnetParam);
    console.log("Nota Final: " + notaFinal);
}
//Datos
let nombreAlumno="Luka Doncic";
let carnetAlumno="K0000"
let notaExamen=9;
let notaTareas=8;
let notaAsistencia=10;
let notaInvestigacion=9;

calcularNota(nombreAlumno,carnetAlumno, notaExamen,notaTareas,notaAsistencia,notaInvestigacion);
