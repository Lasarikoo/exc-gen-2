let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

window.onload = function () {
   random1 = Math.floor(Math.random() * 4);
   random2 = Math.floor(Math.random() * 4);
   random3 = Math.floor(Math.random() * 4);
   random4 = Math.floor(Math.random() * 5);
   document.getElementById("excuse").innerText = `${who[random1]} ${action[random2]} ${what[random3]} ${when[random4]}`;
}

 document.getElementById("btn").onclick = function() {
    window.location.reload();
 }
