

document.getElementById('addExpenses').onclick = function () {

    document.getElementById('addDescription').style.display = 'block';

};


document.getElementById('closeAddDiv').onclick = function () {

    document.getElementById('addDescription').style.display = 'none';

};



let description = document.getElementById('descriptionLine');
let value = document.getElementById('valueLine');

let removeButton = document.getElementById('removeDescriptionButton');

let totalIncome = document.getElementsByClassName('totalIncome');
let totalExpenses = document.getElementsByClassName('totalExpenses');

let result = document.getElementById('totalValue');


let descriptionInput = document.getElementById('textDescription').value;
let valueInput = document.getElementById('valueDescription').value;


function clearInput () {
    document.getElementById('textDescription').value = "";
    document.getElementById('valueDescription').value = "";

}



function remove (row) {

   
    let valorIncome = parseFloat (row.parentElement.parentElement.children[1].innerText.slice(3,));

    let valorTotalIncome = parseFloat (document.getElementsByClassName('totalIncome')[0].innerText.slice(3, 10));

    let novoValorTotalIncome = valorTotalIncome - valorIncome;

    document.getElementById('totalReceitas').innerHTML = 'R$ ' + novoValorTotalIncome + ',00';    
    
    row.parentElement.parentElement.remove();

    resultado();
    
};

function removeDespesa (row) {
    
    let valorDespesa = parseFloat (row.parentElement.parentElement.children[1].innerText.slice(3,));

    let valorTotalDespesas = parseFloat (document.getElementsByClassName('totalExpenses')[0].innerText.slice(3, 10));

    let novoValorTotalDespesas = valorTotalDespesas - valorDespesa;

    document.getElementById('totalDespesas').innerHTML = 'R$ ' + novoValorTotalDespesas + ',00';


    row.parentElement.parentElement.remove();

    resultado();
};


function resultado () {
    let receitas = parseFloat(document.getElementById('totalReceitas').innerText.slice(3,));

        if (isNaN(receitas)) {
            receitas = 0;
        }

    let despesas = parseFloat(document.getElementById('totalDespesas').innerText.slice(3,));

        if (isNaN(despesas)) {
            despesas = 0;
        }


    let resultado = receitas - despesas;

        document.getElementById('totalValue').innerHTML = 'R$ ' + resultado + ',00';

            if (resultado < 0 ) {
                document.getElementById('totalValue').style.color = 'red';
            } else if (resultado > 0) {
                document.getElementById('totalValue').style.color = 'green'
            }

    
        }





document.getElementById('addDescriptionButton').onclick = function() {
    
    

    let descriptionInput = document.getElementById('textDescription').value;
    let valueInput = document.getElementById('valueDescription').value;
    let removeButton = document.getElementById('removeDescriptionButton');

    let radio = document.getElementsByName('option');


        if (radio[0].checked == true) {
         
            let description = '<td id="descriptionLine" >' + descriptionInput + '</td>';
            let valor = '<td id="valueLine" >' + 'R$ ' + valueInput + ',00' + '</td>';
            let remover = '<td id="removeDescription"><button id="removeDescriptionButton" type="button" onclick="remove(this)" class="btn btn-outline-danger">Remover</button></td>';

            for (i = 0; i < 1; i++) {

            let item = document.getElementById('incomesTable').innerHTML +=   
                        '<tr id="completeDescriptionIncome" >' + description + valor + remover + '</tr>';

            };


            let incomeTotal = parseFloat (document.getElementsByClassName('totalIncome')[0].innerText.slice(3, 10));

            if (isNaN(incomeTotal)) {
                incomeTotal = 0;
            } 


            let newValue = parseFloat (document.getElementById('valueDescription').value);


            let totalIncomes = incomeTotal + newValue;

            document.getElementById('totalReceitas').innerHTML = 'R$ ' + totalIncomes +',00';
  
            
            

            /* document.getElementById('removeDescriptionButton').onclick = function () {
                document.getElementById('descriptionLine').innerHTML = '';
                document.getElementById('valueLine').innerHTML = '';
                document.getElementById('removeDescription').innerHTML = '';
                
            } */

            document.getElementById('tableHeadIncome').style.display = 'contents';

            clearInput();


        } else if (radio[1].checked == true) {
            document.getElementById('expensesTable').innerHTML += 
            '<tr id="completeDescriptionExpense" >' +
                '<td id="descriptionLine" >' + descriptionInput + '</td>' + 
                '<td id="valueLine" >' + 'R$ ' + valueInput + ',00' + '</td>' + 
                '<td id="removeDescription"><button id="removeDescriptionButton" type="button" onclick="removeDespesa(this);" class="btn btn-outline-danger">Remover</button></td>'
            '</tr>';

            let expenseTotal = parseFloat (document.getElementsByClassName('totalExpenses')[0].innerText.slice(3, 10));

            if (isNaN(expenseTotal)) {
                expenseTotal = 0;
            } 

            let newValue = parseFloat (document.getElementById('valueDescription').value);
  
            let totalExpenses = expenseTotal + newValue;


            document.getElementById('totalDespesas').innerHTML = 'R$ ' + totalExpenses +',00';



            document.getElementById('tableHeadExpenses').style.display = 'contents';
            clearInput();

        }

        
        
        document.getElementById('addDescription').style.display = 'none';
          
        resultado();
             

};

