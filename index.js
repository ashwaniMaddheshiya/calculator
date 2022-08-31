let display_id = document.getElementById('result');

function display(val){
    let b = display_id.value;
    display_id.value += val;
    return val;
}

function solve(){
    let x = display_id.value
    let y = eval(x);
    display_id.value = y;
    return y;
}

function clearScreen(){
    display_id.value = "";
}

function deleteLast(){
    display_id.value = display_id.value.slice(0,-1);

}

function negate(){
    display_id.value += "-";
}

function operator(data){
    let a = display_id.value;
    if(a!=""){
        display_id.value += data;
    }
}