//  1 Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
//  2 Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
//  3 Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

//
//
// var student = {
//   'nome' : 'Marco',
//   'cognome' : 'Fontaine',
//   'età' : 29 ,
//   'media': 4
// };
// console.log(student);
//
// for (var key in student){
// $('#list').append(key + ': ' + student[key] + '<br>');
// console.log(key + ':' + student[key]);
// };








var students = [
  {
   'nome' : 'Marco',
   'cognome' : 'Fontaine',
   'età' : 29 ,
   'media': 4
 },
  {
   'nome' : 'Giovanni',
   'cognome' : 'Rossi',
   'età' : 20 ,
   'media': 5
 },
  {
   'nome' : 'Ellie',
   'cognome' : 'Blow',
   'età' : 27 ,
   'media': 8
 },
  {
   'nome' : 'Joel',
   'cognome' : 'Smith',
   'età' : 35 ,
   'media': 6
 },
  {
   'nome' : 'Abby',
   'cognome' : 'Lang',
   'età' : 25 ,
   'media': 9
  }
];
$('#button').click(function(){
var newStudent = {};

newStudent.nome = $('#nameText').val();
$('#nameText').val('');

newStudent.cognome = $('#surnameText').val();
$('#surnameText').val('');

newStudent.età = $('#ageText').val();
$('#ageText').val('');

newStudent.media = $('#gradesText').val();
$('#gradesText').val('');

students.push(newStudent);
console.log(students);
for (var i = 0; i < students.length; i++){
  // console.log(students[i])
   for (key in students[i]){
     $('#listContact').append(key + ': ' + students[i][key] + '<br>');
   };
};
});
