function tobe() {
  const ejiofor = document.getElementById("utcTime");
  const date = new Date();
  ejiofor.textContent = ` ${date.toUTCString()}`;
}
setInterval(tobe, 100);
