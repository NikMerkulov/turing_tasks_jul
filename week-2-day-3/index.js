const changeDisplay = () => Array.prototype.forEach.call(document.getElementsByClassName("step-5"), (el) => 
  el.style.display === "" ? el.style.display = "block" : el.style.display = "")
document.getElementById("open").addEventListener("click", changeDisplay)
document.getElementById("close").addEventListener("click", changeDisplay)