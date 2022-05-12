const datas = [
        {firstName: "Vishal", lastName: "Palode", age: 22},
        {firstName: "Ronit", lastName: "Waje", age: 22}
];

function getDatas(){
    setTimeout(() => {
        datas.forEach((data, index) =>{
            console.log(data.Name);
        })
    }, 2000) 
}

function createData(newData) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            datas.push(newData);
            let error = true;
            if (!error){
                resolve();
            }else {
                reject ("Error Occured...");
            }
        },3000)
    })
}
createData({Name: "Pawan", lastName: "Gupta"}).then(getDatas).catch(err => console.log(err))
