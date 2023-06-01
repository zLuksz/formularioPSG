function cadastrocursos() {
    let nome = document.getElementById('nomealuno').value;
    let idade = document.getElementById('idade').value;
    let renda = parseFloat(document.getElementById('renda').value);
    let pessoas = parseInt(document.getElementById('pessoas').value);
    let cursos = document.getElementById('cursos').value;

    const hoje = new Date();
    const nasc = new Date(idade);
    let idadeconver = hoje.getFullYear() - nasc.getFullYear();

    matricula = Math.floor(Math.random() * 1000000);

    rendapercapita = (renda / pessoas)

    document.getElementById('nomealuno').value = null
    document.getElementById('idade').value = null
    document.getElementById('renda').value = null
    document.getElementById('pessoas').value = null
    document.getElementById('cursos').value = null

    if (idadeconver >= 16 && rendapercapita <= 1950) {

        switch (cursos) {
            case ('1'):
                document.getElementById('mostrarcurso').innerHTML = (`Bem vindo(a) ${nome} ao curso de (Administrador de Banco de Dados), (0800-777-3622) Sua matricula e: ${matricula}`);
                break;
            case ('2'):
                document.getElementById('mostrarcurso').innerHTML = (`Bem vindo(a) ${nome} ao curso de (Programador de Sistemas), (0800-777-3622) Sua matricula e: ${matricula}`);
                break;
            case ('3'):
                document.getElementById('mostrarcurso').innerHTML = (`Bem vindo(a) ${nome} ao curso de (Logica De Programação), (0800-777-3622) Sua matricula e: ${matricula}`);
                break;
            case ('4'):
                document.getElementById('mostrarcurso').innerHTML = (`Bem vindo(a) ${nome} ao curso de (UX/UI Design), (0800-777-3622) Sua matricula e: ${matricula}`);
                break;
            case ('5'):
                document.getElementById('mostrarcurso').innerHTML = (`Bem vindo(a) ${nome} ao curso de (Tecnico De Informatica), (0800-777-3622) Sua matricula e: ${matricula}`);
                break;
            case ('6'):
                document.getElementById('mostrarcurso').innerHTML = (`Bem vindo(a) ${nome} ao curso de (Programador Web), (0800-777-3622) Sua matricula e: ${matricula}`);
                break;
        }
        document.getElementById('mostrarcurserro').innerHTML = ('');
        document.getElementById('mostrarcursoidade').innerHTML = ('');
        document.getElementById('mostrarcursopreencher').innerHTML = ('');
    } else if (idadeconver < 16) {
        document.getElementById('mostrarcurserro').innerHTML = ('');
        document.getElementById('mostrarcursopreencher').innerHTML = ('');
        document.getElementById('mostrarcurso').innerHTML = ('');
        let minhaDiv = document.getElementById('mostrarcursoidade');
        minhaDiv.style.backgroundColor = '#059b9a';
        document.getElementById('mostrarcursoidade').innerHTML = ('Você não tem idade suficiente.');
    } else if (rendapercapita > 1.5) {
        document.getElementById('mostrarcursoidade').innerHTML = ('');
        document.getElementById('mostrarcursopreencher').innerHTML = ('');
        document.getElementById('mostrarcurso').innerHTML = ('');
        let minhaDiv = document.getElementById('mostrarcurserro');
        minhaDiv.style.backgroundColor = '#ff4a4a';
        document.getElementById('mostrarcurserro').innerHTML = ('Você ultrapassou o limite da renda per capita.')
    } else {
        document.getElementById('mostrarcursoidade').innerHTML = ('');
        document.getElementById('mostrarcurserro').innerHTML = ('');
        document.getElementById('mostrarcurso').innerHTML = ('');
        let minhaDiv = document.getElementById('mostrarcursopreencher');
        minhaDiv.style.backgroundColor = '#e0d124';
        document.getElementById('mostrarcursopreencher').innerHTML = ('Preencha todos os campos.')
    }
}


function media_alunos() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    media_ponderada = ((nota1 + nota2 + nota3) / 3).toFixed(2);
    
    return media_ponderada;
}

function situacao_aluno() {
    let veio = document.getElementsByClassName('vieram');
    let vieram = 0.0;

    for (let index = 0; index < veio.length; index++) {
        if (veio[index].checked == true) {
            vieram += parseFloat(veio[index].value);
        }
    } 
  
    percentual = (vieram / 12).toFixed(2);

    return percentual;
}

function calcular() { 
    let nveio = document.getElementsByClassName('naoveio');
    let nvieram = 0
    for (let index = 0; index < nveio.length; index++) {
        if (nveio[index].checked == true) {
            nvieram ++
        }
    }
    
    nveio = ((nvieram / 12) * 100)

    console.log(nveio,situacao_aluno())
    
    console.log(media_alunos())
    if (media_alunos() < 0) {
        document.getElementById('calculofeito').innerHTML = ('Insira Um Valor Valido Nas Notas!')
        return;
    }
    if (media_alunos() == 'NaN'|| !(parseFloat(situacao_aluno()) + ((nvieram / 12) * 100) > 98 )) {
        document.getElementById('calculofeito').innerHTML = ('Todos Os Campos São Obrigatorios!!!')
        return;
    }


    if (media_alunos() >= 6.0 && situacao_aluno() >= 75.0) {
        document.getElementById('calculofeito').innerHTML = ('Parabéns!!! Este Aluno Esta Aprovado.')
        return
    } 
    if (media_alunos() >= 5.0 && media_alunos() < 6.0 && situacao_aluno() >= 75.0) {
        document.getElementById('calculofeito').innerHTML = ('Não Foi Desta Vez!!! Este Aluno Esta Em Recuperação.')
        return
    } else {
        document.getElementById('calculofeito').innerHTML = ('Não Foi Desta Vez!!! Este Aluno Esta Reprovado.')
        return
    }
}