const buttonRandom = document.getElementById('button')

buttonRandom.onclick = function() {
    let field1 = document.getElementById('field');
    let out='';
        out += `<p class="alert" role="alert">${rand()} </p>`;
        field1.innerHTML = out;

}

function rand() {
    var output = Math.floor(Math.random() * 15 + 3)
    return output;
}