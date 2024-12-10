/* Put code for the task below */
<script>
    function add(){
    let value1 = Number(document.getElementById("value1").value);
    let value2 = Number(document.getElementById("value2").value);

    alert("Your total is:" + (value1 + value2));
}
    function check() {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;

    if (value1 == "") {
    document.getElementById("value1").style.backgroundColor = "red";
}
    if (value2 == "") {
    document.getElementById("value2").style.backgroundColor = "red";
}
}
</script>