const datas= [
    {firstName: "Vishal", lastName: "Palode", age: 22},
    {firstName: "Ronit", lastName: "Waje", age: 22}
];
function getDatas(){
    setTimeout(() => {
        datas.forEach((data, index) =>{
             console.log(data.firstName);
        })
    }, 3000) 
}

function createData(newData) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            datas.push(newData);
            let error = false;
            if (!error){
                 resolve();
            }else {
            reject ("Error Occured...")
            }
        },1000)
    })
}
async function start(){
    await createData({firstName: "Pawan", lastName: "Gupta"});
    getDatas();
}
start();