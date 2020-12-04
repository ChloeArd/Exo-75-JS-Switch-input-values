let button = document.getElementById('switch');

function permuter() {
    let input1 = document.getElementById('input1').value;
    console.log("Vous avez saisi " + input1);

    let input2 = document.getElementById('input2').value;
    console.log("Vous avez saisi " + input2);

    input1.value = input2.value;
}

button.addEventListener("click", permuter);