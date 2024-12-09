/* Put code for the task below */
<h3>Task 1 - The Image</h3>
<img onClick="functionName()" src="assets/img/compIcon.png" id="imageTask1"/>
<br/>
<button type="button" onClick="toggle()">Toggle</button>
<script>
    function toggle() {

    const image = document.getElementById("imageTask1");


    if (image.style.display === "block"){
    image.style.display = "none";
} else {
    image.style.display = "block";
}
}
</script>
