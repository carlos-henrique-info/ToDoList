//a função concluir tarefas recebe o checkbox
//e a partir dele seleciona o li pai mais próximo
//e remove o item usando o remove
function concluirTarefa(checkbox){
    const tarefa = checkbox.closest('li');
    tarefa.remove();
};

//let inputTarefa = document.querySelector('#input-add-todo'); também funciona!

//para adicionar tarefas é criada uma função
//que vai retornar o envio do formulário
function adicionarTarefa(event){
    event.preventDefault();                         //evita o comportamento padrão de recarregar a página
    const inputTarefa = event.target.task;          //pega o texto da tarefa
    const textoTarefa = inputTarefa.value.trim();   //tira espaços das pontas do texto

    //caso o valor seja vazio, vai mostrar um alerta
    if (textoTarefa == ''){
        alert("A tarefa precisa de um título");
        return;
    }

    //se o valor for válido, vai criar um item novo para a lista
    //e inserir o evento de concluir tarefa no onclick
    const htmlTarefa = `
        <li>
            <input type="checkbox" onclick="concluirTarefa(this)"/>
            <span>${textoTarefa}</span>
        </li>
    `;

    //seleciona a lista, adiciona o item e limpa o fomulario
    document.querySelector('#todo-list').insertAdjacentHTML('beforeend', htmlTarefa.trim());

    inputTarefa.value = '';
}
//com a função adicionarTarefa definida,
//basta passar a função para o eventListener
document.querySelector('#form-add-todo').addEventListener('submit', adicionarTarefa)
