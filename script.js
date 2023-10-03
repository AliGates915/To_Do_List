const inputBox= document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//Button Script
function addTask()
{
  if(inputBox.value === ''){
    alert("You must write Something!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    // for display message in the form of list
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value ="";
  // this below function updated content in the browser.
  saveData(); 
}
 
listContainer.addEventListener("click", function(e)
{
  // if this scrpit is line-through
  if(e.target.tagName == "LI")
  {
    e.target.classList.toggle("checked");
    saveData();
  }
  // if this scrpit is remove this task
  else if(e.target.tagName == "SPAN"){
      e.target.parentElement.remove();
      saveData();
  }
}, false);

// for storing data
function saveData()
{
  localStorage.setItem("data",listContainer.innerHTML);
}

function showTask()
{
  listContainer.innerHTML = localStorage.getItem("data"); 
}
showTask();   