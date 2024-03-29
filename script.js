const students = [
  {
    name: prompt('Insira o nome do 1° estudante'),
    firstGrade: prompt('Insira a primeira nota do estudante'),
    secondGrade: prompt('Insira a segunda nota do estudante'),
  },
  {
    name: prompt('Insira o nome do 2° estudante'),
    firstGrade: prompt('Insira a primeira nota do estudante'),
    secondGrade: prompt('Insira a segunda nota do estudante'),
  },
  {
    name: prompt('Insira o nome do 3° estudante'),
    firstGrade: prompt('Insira a primeira nota do estudante'),
    secondGrade: prompt('Insira a segunda nota do estudante'),
  },
  {
    name: prompt('Insira o nome do 4° estudante'),
    firstGrade: prompt('Insira a primeira nota do estudante'),
    secondGrade: prompt('Insira a segunda nota do estudante'),
  },
]

let index = 0;

while (index < students.length) {
  let averageGrade = ((Number(students[index].firstGrade) + Number(students[index].secondGrade)) / 2).toFixed(1)
 
  if(averageGrade >= 7) {
    alert(`
    A média do(a) aluno(a) ${students[index].name} é: ${averageGrade} \n
    Parabéns, ${students[index].name}! Você foi aprovado(a) no concurso!
    `)
  } else {
    alert(`
    A média do(a) aluno(a) ${students[index].name} é: ${averageGrade} \n
    Não foi dessa vez, ${students[index].name}. Tente novamente!
    `)
  }
  index++
}