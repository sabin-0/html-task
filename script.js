{
    let myform=document.getElementById('myform');
    var datas={};
    let arr1=[];
  
    myform.addEventListener('submit', function(e){
  
      e.preventDefault(); //to stop default behaviour of function
  
  
      let firstname=document.getElementById('firstname');
      let firstname_value=firstname.value;
      console.log("firstname:",firstname_value);

      let lastname=document.getElementById('lastname');
      let lastname_value=lastname.value;
      console.log("lastname:",lastname_value);

      let username=document.getElementById('username');
      let username_value=username.value;
      console.log("username:",username_value);

      let email=document.getElementById('email');
      let email_value=email.value;
      console.log("email:",email_value);
  
      let password=document.getElementById('password');
      let password_value=password.value;
      console.log("password:",password_value);

      let place=document.getElementById('place');
      let place_value=place.value;
      console.log("place:",place_value);

      let phonenumber=document.getElementById('phonenumber');
      let phonenumber_value=phonenumber.value;
      console.log("phonenumber:",phonenumber_value);

      let age=document.getElementById('age');
      let age_value=age.value;
      console.log("age:",age_value);

      datas.firstname=firstname_value;
      datas.lastname=lastname_value;
      datas.username=username_value;
      datas.email=email_value;
      datas.password=password_value;
      datas.place=place_value;
      datas.phonenumber=phonenumber_value;
      datas.age=age_value;
  
      // console.log("datas:",datas);
      handledatas(datas);
    })
  
  function handledatas(datas){
    console.log("Datas:",datas);
  
    let Message = document.getElementById('message');
  
  
    //Validation 
    if (arr1.length>0){
      for(let i=0;i<arr1.length;i++){
  
        if(arr1[i].email==datas.email){
          Message.innerHTML="Email already found";
          return;
        }
        if(arr1[i].phonenumber==datas.phonenumber){
            Message.innerHTML="phonenumber already found";
            return;
          }
      }
    }
  
    arr1.push(datas);
    Message.innerHTML="succes";
    console.log("arr:",arr1);
   }
  }