// function button (){
//     document.body.style.backgroundColor = 'salmon';
// }

// function button1 (){
//     document.body.style.backgroundColor = 'red';
// }
// function button2 (){
//     document.body.style.backgroundColor = 'blue';
// }function button3 (){
//     document.body.style.backgroundColor = 'yellow';
// }
// function button4 (){
//     document.body.style.backgroundColor = 'hotpink';
// }




// const data = document.getElementById('firstbutton');
// data.addEventListener('click', button)

// function button (){
//     document.body.style.backgroundColor = 'salmon';
// }



// const data2 = document.getElementById('firstbutton2');
// data2.addEventListener('click', button2)

// function button2 (){
//     document.body.style.backgroundColor = 'red';
// }

// const data3 = document.getElementById('firstbutton3');
// data3.addEventListener('click', button3)

// function button3 (){
//     document.body.style.backgroundColor = 'blue';
// }

// const data4 = document.getElementById('firstbutton4');
// data4.addEventListener('click', button4)

// function button4 (){
//     document.body.style.backgroundColor = 'pink';
// }

// const data5 = document.getElementById('firstbutton5');
// data5.addEventListener('click', button5)

// function button5 (){
//     document.body.style.backgroundColor = 'hotpink';
// }



// function changeData(){
//     const dataChange = document.getElementById('changes')
//     dataChange.innerText = "Amar sonar banla";
// }


document.getElementById('clickdata').addEventListener('click',function(){
    const resultData= document.getElementById('com-comman');
    const getData = resultData.value;
    
    const showData= document.getElementById('showdata');
     
    const h4 = document.createElement('h4');

    h4.innerText=getData;
    showData.appendChild(h4);
    resultData.value='';


    




})
