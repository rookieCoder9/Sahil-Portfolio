


var arr = ['Web Developer', 'Programming Enthusiast'];
var delay = 200;
$(document).ready(typeWriter);
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function typeWriter() {

    var i = 0;
    for (i = 0; i < arr.length; i++) {
        let txt = arr[i], j = 0;
        while (j < txt.length) {
            document.getElementById("content").innerHTML += txt.charAt(j);
            j++;
            await sleep(delay);
        }
        await sleep(delay);
        document.getElementById("content").innerHTML = "";

    }
    typeWriter();

}