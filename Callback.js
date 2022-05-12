const datas = [
    {Name: "Vishal", LastName: "Palode", age: 22 },
    {Name: "Ronit", LastName: "Waje", age: 22}
];
function getDatas(){
    setTimeout(() => {
        datas.forEach((data, index)=>{
            console.log(data.Name);
        })
    },2000)
}

function createData(newData, callback) {
    setTimeout(()=> {
        datas.push(newData)
        callback();
    },4000)
}
createData({Name:"Pawan", LastName:"Gupta"}, getDatas);
