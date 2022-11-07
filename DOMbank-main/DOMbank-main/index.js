document.getElementById('submit').addEventListener('click', function(){

const emeilId =  document.getElementById('form2Example1');
const validEmail = emeilId.value;


const userPass =  document.getElementById('form2Example2');
const validUserPass = emeilId.value;

if (validEmail=== 'prithirajkumar8519@gmail.com'  ) {

    window.location.href ='account.html'

  }
  else{
    console.log('Worng Pass')
  }





} )