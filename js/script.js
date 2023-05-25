function cadastrocursos() {
    let idade = document.getElementById('idade').value;
    let renda = parseFloat(document.getElementById('renda').value);
    let pessoas = parseInt(document.getElementById('pessoas').value);

    const hoje = new Date();
    const nasc = new Date(idade);
    let idadeconver = hoje.getFullYear() - nasc.getFullYear();

    rendapercapita = (renda / pessoas)

    if (idadeconver >= 16 && rendapercapita <= 1.5) {
        document.getElementById('mostrarcurso').innerHTML = ('Bem Vindo ao PSG. (0800-777-3622)');
    } else if (idadeconver < 16) {
        document.getElementById('mostrarcurso').innerHTML = ('Você Não Tem Idade Suficiente.')
    } else if (rendapercapita > 1.5) {
        document.getElementById('mostrarcurso').innerHTML = ('Você Ultrapassou O Limite Da Renda Per Capita.')
    } else {
        document.getElementById('mostrarcurso').innerHTML = ('Preencha Algum Campo.')
    }
}