function displayValues() {
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var input3 = document.getElementById('input3').value;

    var result = "Input 1: " + input1 + "<br>" +
                 "Input 2: " + input2 + "<br>" +
                 "Input 3: " + input3;

    document.getElementById('result').innerHTML = result;
}
