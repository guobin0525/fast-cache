import "./index.css";


var oP=document.getElementsByTagName("p")[0];
oP.onclick=(e)=>{
    alert(e.target.innerHTML);
}