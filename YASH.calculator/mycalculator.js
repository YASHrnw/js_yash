let tr = '';

const adddata = ((i) => {
    tr = tr + i;
    document.getElementById("Calculator").value = tr;
})


// Answer fuction
function getans() {
    let data = document.getElementById("Calculator").value;
    let ans = eval(data);
    document.getElementById("Calculator").value = ans;
    tr = '';


}

//clear function
function clearall() {
    document.getElementById("Calculator").value = '';
    tr = '';
}


function backspace() {
    let data = document.getElementById("Calculator").value;
    newdata = data.toString().slice(0, -1);
    tr = newdata;
    document.getElementById("Calculator").value = tr;
}







