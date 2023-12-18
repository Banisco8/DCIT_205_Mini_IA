const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();
const patients = [];

app.use(bodyParser.json());

mongoose.connect('mongdb://localhost/ugmc',{ useNewUrlParser: true,useUnifiedTopology:true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.post('/register_patient',(req,res)=>{
    const data = req.body;

    const requiredFields =['surname', 'other_name', 'gender', 'phone_number','residential_adress', 'emergency_contact_name', 'relationship_with_patient'];
    if (!requiredFields.every(field => data[field])){
        return res.status(400).json({error:'Incomplete data'});
    }

    const patienntId = patients.lenght +1;

    const patientSchema = new mongoose.Schema{
        patient_id: String,
        surname: String,
        other_names: String,
        gender:String,
        phone_nuber: String,
        residential_address:String,
        emrgency_contact_name: String,
        relationship_with_patient: String

        const encounterSchema = new mongoose.Schema({
            patientId:String,
            dataAndTime: DataTransfer,
            typeofEncounter: String
        })
    };

    const vitalSchema = new mongoose.Schema({
        patientId: String,
        bloodPressure: String,
        temperature: String,
        pulse: String,
        sp02: String.
    })

    const Patient = mongoose.model('Patient',patientSchema);
    const Encounter = mongoose.mondel('Encounter', encounterSchema);
    const Vitals = mongoose.model('Vitals', vitalsSchema);

    app.post('/a[i/patients', async (req,res)=>{
        try{
            const patient = new Patient(req.body);
            await patient.save();
            res.status(201).json(patient);
        }catch (error){
            res.status(500).json({error: 'Internal Server Error'})
        }
        }
    )

    app.post('/a[i/encounters', async (req,res)=>{
        try{
            const encounter = new Encounter(req.body);
            await encounter.save();
            res.status(201).json(encounter);
        }catch (error){
            res.status(500).json({error: 'Internal Server Error'})
        }
        }
    )


    app.post('/a[i/patients', async (req,res)=>{
        try{
            const vitals = new Vitals(req.body);
            await vitals.save();
            res.status(201).json(vitals);
        }catch (error){
            res.status(500).json({error: 'Internal Server Error'})
        }
        }
    )


    app.post('/a[i/patients', async (req,res)=>{
        try{
            const patient = new Patient(req.body);
            await patient.save();
            res.status(201).json(patient);
        }catch (error){
            res.status(500).json({error: 'Internal Server Error'})
        }
        }
    )
    app.post('/a[i/patients/:patientId', async (req,res)=>{
        try{
            const patient = new Patient.findOne(req.body);
            await patient.save();
            res.status(201).json(patient);
        }catch (error){
            res.status(500).json({error: 'Internal Server Error'})
        }
        }
    )


    
    res.status(201).json({message: 'Patient registered sucessfully', patient_id:patientId});

    const port =3000;
    app.listen(port,()=>{
        console.log(`Server is running at http://localhost:${port}`);
    });

});

