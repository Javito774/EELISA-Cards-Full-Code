export default function shotit () {
  html2canvas(document.getElementById("tarjeta"),{backgroundColor: null}).then(function (canvas) {
      download(canvas);
  });
};
const download = function (canvas) {
  var link = document.createElement('a');
  link.download = document.querySelector("#tarjeta .titulo").innerText.toUpperCase()+'.png';
  link.href = canvas.toDataURL();
  link.click();
};