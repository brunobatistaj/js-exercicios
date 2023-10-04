    const nomeInput = document.querySelector('#nome')
    const nota1Input = document.querySelector('#nota1')
    const nota2Input = document.querySelector('#nota2')
    const btn = document.querySelector('#btn')
    const tabela = document.querySelector('#alunos')
    const resp = document.querySelector('#resp')
    const notaTemp = document.querySelector('#notaTemp')

    let alunoCounter = 1; // Variável para contar o número de alunos.

    btn.addEventListener('click', insereAluno)

        function insereAluno() {
            const nome = nomeInput.value
            const nota1 = parseFloat(nota1Input.value)
            const nota2 = parseFloat(nota2Input.value)

            if (isNaN(nota1) || isNaN(nota2)) {
                alert('Insira notas válidas.')
                return;
            }

            const media = (nota1 + nota2) / 2

            let situacao = 'Reprovado'
            if (media >= 6) {
                situacao = 'Aprovado'
            }

            // Cria uma nova linha na tabela
            const newRow = document.createElement('tr')
            newRow.innerHTML = `
                <td>${alunoCounter}</td>
                <td>${nome}</td>
                <td>${nota1}</td>
                <td>${nota2}</td>
                <td>${media.toFixed(2)}</td>
                <td>${situacao}</td>
            `
            tabela.querySelector('tbody').appendChild(newRow)

            atualizaMediaTurma()
            alunoCounter++

            nomeInput.value = ''
            nota1Input.value = ''
            nota2Input.value = ''

            // Remove a linha de exemplo
            if (notaTemp.parentNode) {
                notaTemp.parentNode.removeChild(notaTemp);
            }
        }

        //atualiza a media --peguei google
        function atualizaMediaTurma() {
            const rows = tabela.querySelectorAll('tbody tr')
            let totalMedia = 0;

            for (let i = 0; i < rows.length; i++) {
                const mediaCell = rows[i].querySelectorAll('td')[4]
                totalMedia += parseFloat(mediaCell.textContent)
            }

            const mediaTurma = totalMedia / rows.length
            tabela.querySelector('tfoot td:nth-child(3)').textContent = mediaTurma.toFixed(2)
        }