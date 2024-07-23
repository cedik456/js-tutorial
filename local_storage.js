
function saveUsername(){
  
    const username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    alert("Username saved!");
}

function showUsername(){

    const username = localStorage.getItem("username");
    if(username){
      document.getElementById("output").innerText = `Saved Username: ${username}`
    }
    else{
      document.getElementById("output").innerText = `No username found!`
    }
}

function removeUsername(){

    localStorage.removeItem("username");
    alert("Username removed!");
    document.getElementById("output").innerText = "";
}