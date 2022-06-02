document.getElementById("button").addEventListener("click", myFunction);

//Change color function
function changeColor(node){
  //change color
  //Get selected radio from group
  let color = document.querySelector('input[name="colorc"]:checked').value;
  
  //Conditions
  if (color == 'green'){
      node.style.color = 'green'
  }else if(color == 'blue'){
      node.style.color = 'blue'
  }else if(color == 'orange'){
      node.style.color = 'orange'
  }else {
      alert('No selected color')
  }

}

function myFunction() {
  // Create an "li" node:
  const node = document.createElement("li");
  let text = document.getElementById("text").value;

  // Create a text node:
  const textnode = document.createTextNode(text);

  // Append the text node to the "li" node:
  node.appendChild(textnode);

  //Calling changeColor function
  changeColor(node)

  // Append the "li" node to the list:
  document.getElementById("myList").appendChild(node);
}