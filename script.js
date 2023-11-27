// change text on button click
{
let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    document.getElementById('para').innerHTML = "To infinity and beyond";
  });
}

//  creating a to-do list
{
  function  addli()
  {
   let add =document.getElementById("add").value,
      listNode=document.getElementById("list"),
      liNode= document.createElement("LI"),
      addNode=document.createTextNode(add); 

      liNode.appendChild(addNode);
      listNode.appendChild(liNode);
  }
}

// form validation
{
  let name =document.getElementById("name");
  name.addEventListener("keydown",function(){
      alert("check name");
  })

  let email =document.getElementById("email");
  email.addEventListener("keydown",function(){
      alert("Input email contains both @ and .com ");
  })

  let passw =document.getElementById("passw");
  passw.addEventListener("keydown",function(){
      alert("At least 12 characters long but 14 or more is better");
  })

}

