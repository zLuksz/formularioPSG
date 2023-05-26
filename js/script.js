function cadastrocursos() {
    let idade = document.getElementById('idade').value;
    let renda = parseFloat(document.getElementById('renda').value);
    let pessoas = parseInt(document.getElementById('pessoas').value);

    const hoje = new Date();
    const nasc = new Date(idade);
    let idadeconver = hoje.getFullYear() - nasc.getFullYear();

    matricula = Math.floor(Math.random() * 1000000);

    rendapercapita = (renda / pessoas)

    if (idadeconver >= 16 && rendapercapita <= 1.5) {
        document.getElementById('mostrarcurso').innerHTML = (`Bem Vindo ao PSG. (0800-777-3622) Sua Matricula e: ${matricula}`);
        document.getElementById('mostrarcurserro').innerHTML = ('');
        document.getElementById('mostrarcursoidade').innerHTML = ('');
        document.getElementById('mostrarcursopreencher').innerHTML = ('');
    } else if (idadeconver < 16) {
        document.getElementById('mostrarcurserro').innerHTML = ('');
        document.getElementById('mostrarcursopreencher').innerHTML = ('');
        document.getElementById('mostrarcurso').innerHTML = ('');
        let minhaDiv = document.getElementById('mostrarcursoidade');
        minhaDiv.style.backgroundColor = '#059b9a';
        document.getElementById('mostrarcursoidade').innerHTML = ('Você Não Tem Idade Suficiente.');
    } else if (rendapercapita > 1.5) {
        document.getElementById('mostrarcursoidade').innerHTML = ('');
        document.getElementById('mostrarcursopreencher').innerHTML = ('');
        document.getElementById('mostrarcurso').innerHTML = ('');
        let minhaDiv = document.getElementById('mostrarcurserro');
        minhaDiv.style.backgroundColor = '#ff4a4a';
        document.getElementById('mostrarcurserro').innerHTML = ('Você Ultrapassou O Limite Da Renda Per Capita.')
    } else {
        document.getElementById('mostrarcursoidade').innerHTML = ('');
        document.getElementById('mostrarcurserro').innerHTML = ('');
        document.getElementById('mostrarcurso').innerHTML = ('');
        let minhaDiv = document.getElementById('mostrarcursopreencher');
        minhaDiv.style.backgroundColor = '#e0d124';
        document.getElementById('mostrarcursopreencher').innerHTML = ('Preencha Algum Campo.')
    }
}