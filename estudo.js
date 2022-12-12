const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.getElementsByClassName("curso")]
const cursos = ['HTML', 'CSS', 'JS', 'PHP', 'REACT', 'React Native']
const btnCursoSelecionado=document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes');
const btnAdicionarNovoCursoDepois = document.getElementById('btnAdicionarNovoCursoDepois');
const nomeCurso = document.getElementById('nomeCurso')

let indice = 0

const criarNovoCurso =(curso)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute("id", "c"+ indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso

   const comandos=document.createElement('div')
   comandos.setAttribute('class','comandos')

   const rb= document.createElement('input')
   rb.setAttribute('type', 'radio')
   rb.setAttribute('name', 'rb_curso')

   comandos.appendChild(rb)

   novoElemento.appendChild(comandos)
   return novoElemento
}

cursos.map((el,chave) => {
   
   const novoElemento = criarNovoCurso(el)
   caixaCursos.appendChild(novoElemento)
   indice++
    //document.getElementById("estudo").style.width = '20px'
})

const radioSelecionado = ()=>{
    const todosRadios=[...document.querySelectorAll('input[type=radio]')]
    let radioSelecionado = todosRadios.filter((ele, ind, arr)=>{
        return ele.checked
        
    })

    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener('click',(evt)=>{
    const rs = radioSelecionado()
    if (rs != undefined){
        const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent
        console.log(cursoSelecionado)
        alert('curso selecionado:'+ cursoSelecionado)
    } else{
        alert('selecione um curso!')
    }
  
})

btnRemoverCurso.addEventListener('click', (evt)=>{
    const rs = radioSelecionado()
    if(rs != undefined){
    const cursoSelecionado = rs.parentNode.parentNode
    cursoSelecionado.remove()
    }else{
        alert('selecione um curso!')
    }
    
})

btnAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{
    const rs = radioSelecionado()
    try{
    if(nomeCurso.value != ""){
    const cursoSelecionado = rs.parentNode.parentNode
    const novoCurso = criarNovoCurso(nomeCurso.value)
    caixaCursos.insertBefore(novoCurso, cursoSelecionado)
    } else{
        alert('digite o nome do curso!')
    }
    }catch(ex){
        alert('selecione um curso!')
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
    const rs = radioSelecionado()
    try{
    if(nomeCurso.value != ""){
    const cursoSelecionado = rs.parentNode.parentNode
    const novoCurso = criarNovoCurso(nomeCurso.value)
    caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)
    } else{
        alert('digite o nome do curso!')
    }
    }catch(ex){
        alert('selecione um curso!')
    }
})







