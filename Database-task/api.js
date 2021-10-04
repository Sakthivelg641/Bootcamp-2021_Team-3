const client = require('./connection.js')
const bodyparser = require('body-parser')
const express = require('express');
const app = express();


app.use(bodyparser.urlencoded({
    limit: '5000mb',
    parameterLimit: 1000000,
    extended: true }))

app.use(bodyparser.json({
    limit: '50mb'
}))

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})
client.connect();


app.get('/user_cred', (req, res)=>{
    client.query(`Select * from user_cred`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.post('/user_cred', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into user_cred(user_id, username,password) 
                       values(${user.user_id}, '${user.username}', '${user.password}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

//Patient API

app.get('/patient', (req, res)=>{
    client.query(`Select * from patient`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/patient', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into patient(patient_id, patient_name,patient_address,patient_contact,patient_emergencycontact,hospital_id,user_id) 
                       values(${user.patient_id}, '${user.patient_name}', '${user.patient_address}','${user.patient_contact}','${user.patient_emergencycontact}','${user.hospital_id}','${user.user_id}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


//Billing API(Transaction)


app.get('/billing', (req, res)=>{
    client.query(`Select * from billing`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
       
    });
    client.end;
})

app.post('/billing', (req, res)=> {
    
    const user = req.body;
    
    let VALUES = ``;
    for (let i = 0; i < user.length-1; i++) {
        const data = user[i];
        VALUES += `('${data.service_cost}', '${data.patient_id}','${data.test_cost}','${data.bill_date}','${data.total_amount}'), `;
    }
    const data = user[user.length - 1];
    VALUES += `('${data.service_cost}', '${data.patient_id}','${data.test_cost}','${data.bill_date}','${data.total_amount}');`;

    let insertQuery = `INSERT INTO billing (service_cost, patient_id, test_cost, bill_date, total_amount) 
                    VALUES ${VALUES}`;


    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion successful')
        }
        else{ console.log('Error in insert ', err) }
    })
    client.end;
})


//Treatment API

app.get('/treatment', (req, res)=>{
    client.query(`Select * from treatment`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
       
    });
    client.end;
})




app.post('/treatment', (req, res)=> {
    
    const user = req.body;
    
    let VALUES = ``;
    for (let i = 0; i < user.length-1; i++) {
        const data = user[i];
        VALUES += `('${data.hospital_id}', '${data.patient_id}','${data.doctor_id}','${data.timestamp}','${data.summary_notes}','${data.bill_id}'), `;
    }
    const data = user[user.length - 1];
    VALUES += `('${data.hospital_id}', '${data.patient_id}','${data.doctor_id}','${data.timestamp}','${data.summary_notes}','${data.bill_id}')`;

    let insertQuery = `INSERT INTO treatment (hospital_id, patient_id, doctor_id, timestamp, summary_notes,bill_id) 
                    VALUES ${VALUES}`;


    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion successful')
        }
        else{ console.log('Error in insert ', err) }
    })
    client.end;
})