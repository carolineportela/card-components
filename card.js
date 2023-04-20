'use strict'

//cardjs vai ser o componente que a gente vai criar

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })  
        this.nome = 'Nome do Aluno'   
        this.foto = null
        this.cor = 'black'
        this.turma = 'Nome da turma'
    }

    static get observedAttributes(){
        return ['nome', 'foto', 'cor', 'turma']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        
        // this.nome = newValue
        this[nameAttr] = newValue
       
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())

}

styles(){
    const css = document.createElement('style')
    css.textContent = `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .card{
        width: 200px;
        height:300px;
        display: grid;
        grid-template-rows: 20% 60% 20%;
        place-items: center;
        background-color:#808;
        font-family: 'Courier New', Courier, monospace;
    }
    .card__text{
        color: #fff;
        font-size: 1.5rem;
        font-weight: 600;
    }
    .card__image{
        height: 150px;
        width: 150px;
       border-radius:50%;
       background-color: tomato;
       background-image: url(${this.foto});
       background-size:cover;
    }

    `
    return css
}

    component(){
        const card = document.createElement('div')
        card.classList.add('card')
        card.style.background = this.cor

        const nomeAluno = document.createElement('div')
        nomeAluno.classList.add('card__text')
        nomeAluno.textContent = this.nome

        const imagem = document.createElement('div')
        imagem.classList.add('card__image')

        const turma = document.createElement('div')
        turma.classList.add('card__text')
        turma.textContent = this.turma

        card.append(nomeAluno,imagem,turma)

        return card

    }

}

customElements.define('card-carol', card)





































// const titulo = document.createElement('div')
// titulo.textContent = "Senai- Jandira"
// const css = document.createElement('style')
// css.textContent = `
// div{
//     display : grid;
//     place-items : center;
//     width:200px;
//     height:200px;
//     background-color: blue;
//     color:white;
// }     
// `
// shadow.append(titulo,css)