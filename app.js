const express = require('express');

const app =express();

app.set('view engine','ejs');
app.use(express(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const employees =[
    {
        employeeID: "ESC200",
        name: "yankey baah",
        position: "production manager"
    },
    {
        employeeID: "ESC201",
        name: "malcom anaba",
        position: "IT manager"
    },
    {
        employeeID: "ESC203",
        name: "palmer kwesi",
        position: "general manager"
    }
]

app.get('/',(req,res) =>{
    res.json(employees);
})

const port =2001
app.listen(port,() => {
    console.log('Server has started on port ${port}');
});