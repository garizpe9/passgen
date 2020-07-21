
 //Variables needed
     
 var concatination = "" ;
 var passwordcomplete = "" ;
 var generate = document.querySelector("#generate");
  
 //array 
 var sparray = ["!@#%&*?$."]
 var numarray = ["1234567890"]
 var dwnarray = ["abcdefghijklmnopqrstuvwxyz"]
 var uparray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

  //Beginning prompt
generate.addEventListener("click", function() {

    var characters = prompt("Enter number of characters");
    if (characters === ""  || characters > 128 || characters<8){
        characters = prompt ("Please enter a number between 8 and 128");
  }
 
 //Character confirm
    var confirmsp = confirm("Do you want to include special characters?");
    var confirmup = confirm("Do you want to include capitaized characters?");
    var confirmlc = confirm("Do you want to include lower case characters?");
    var confirmnm = confirm("Do you want to include numeric characters?");


  //arrays to include
  if (confirmsp !== true){
    concatination = concatination        
  }
  else concatination = concatination + sparray

  if (confirmup !== true){
    concatination = concatination
    }
  else concatination = concatination + uparray

  if (confirmlc !== true){
    concatination = concatination
    }
  else concatination = concatination + dwnarray

  if (confirmnm !== true){
    concatination = concatination
    }
  else concatination = concatination + numarray


  //math random loop

  for (var i=0;i<characters; i++) {
    if (characters <8||characters > 128){
      characters = prompt ("Please enter a number between 8 and 128")
    }
    else 
      var num = Math.floor(Math.random() * concatination.length);
      var passwordel = (concatination[num]);
      passwordcomplete = passwordcomplete + passwordel;
      console.log(passwordcomplete)
  }

  var passwordText = document.querySelectorAll("#password")
  password.textContent = passwordcomplete;


// // Assignment Code


  passwordcomplete = [];
  for (var i=0;i<characters; i++) {
    var num = Math.floor(Math.random() * concatination.length);
    var passwordel = (concatination[num]);
    passwordcomplete = passwordcomplete + passwordel;
    console.log(passwordcomplete)
}
password.textContent = passwordcomplete;
});

