

let ranNumb = Math.floor(Math.random() * 10000) +1;

const sb = document.getElementById("submit");
 sb.addEventListener('click', function (event) {
   alert (ranNumb);
});

