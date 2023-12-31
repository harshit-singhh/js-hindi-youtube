// const newpromise = new Promise(function(resolve , reject){
//     let allgood = true;
//     if(allgood == true){
//         console.log("allgood is true");
//         resolve("bhai sab badhiya chal rhis he");
//     }
//     else{
//         console.log("allgood is false");
//         reject("ERROR HE BHAIIISAAABB");
//     }
// })


// newpromise.then(function(data){
//     console.log(data);
//     return "ye dusre then ke liye bhej rha hu";
// })
// .then((data) =>{
//     console.log(data);
// })
// .catch(function(error){
//     console.log(error)
// })


// function giveage(age){
//     this.age = age;
// }

// function createobj(name , age){
//     this.name= name;

//     giveage.call(this, age);
// }

// let obj = new createobj("harshit" , 18);

// console.log(obj);


setTimeout(() => {
    console.log("timer done");
}, 0);



function run(){
    
    console.log("came inside function");
    for(let i = 0 ; i < 10000000000 ; i++){
        
    }
    
    console.log("loop done");
}
run();

function hehe(){
    console.log("yoyo");
}

hehe();