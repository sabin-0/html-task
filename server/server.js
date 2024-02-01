const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

app.use(express.static(__dirname + "/../client"));
app.use(express.json());

app.get('/test',(req,res)=>{
    res.status(200).send("success");
})

app.post('/submit',(req,res)=>{
    const datas = req.body;
    console.log("datas : ", datas);

    let folderPath = "./datas";
    let fileName = "datas.json";
    let filePath = path.join(folderPath,fileName);

    let datasArr = [];
    datasArr.push(datas);

    let jsonDatasArr = JSON.stringify(datasArr);

    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath, {recursive : true});
    }
            
                
                if (fs.existsSync(filePath)) {
                    
                    fs.readFile(filePath, 'utf8', (readErr, data) => {
                        if (readErr) {
                            console.log("readErr: ", readErr);
                            res.status(500).send("Internal Server Error");
                            return;
                        }
            
                        let datasArr = JSON.parse(data);
            
                     
                        datasArr.push(datas);
            
                     
                        let jsonDatasArr = JSON.stringify(datasArr);
            
                       
                        fs.writeFile(filePath, jsonDatasArr, (writeErr) => {
                            if (writeErr) {
                                console.log("writeErr: ", writeErr);
                                res.status(500).send("Internal Server Error");
                            } else {
                                console.log("success");
                                res.status(201).send("success");
                            }
                        });
                    });
                } else {
                 
                    let datasArr = [datas];
                    let jsonDatasArr = JSON.stringify(datasArr);
            
                    if (!fs.existsSync(folderPath)) {
                        fs.mkdirSync(folderPath, { recursive: true });
                    }
            
                    fs.writeFile(filePath, jsonDatasArr, (err) => {
                        if (err) {
                            console.log("err: ", err);
                            res.status(500).send("Internal Server Error");
                        } else {
                            console.log("success");
                            res.status(201).send("success");
                        }
                    });
                }

            
   
        })

//get request
app.get('/getData', (req, res) => {
    let folderPath = "./datas";
    let fileName = "datas.json";
    let filePath = path.join(folderPath, fileName);

    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, 'utf8', (readErr, data) => {
            if (readErr) {
                console.log("readErr: ", readErr);
                res.status(500).send("Internal Server Error");
                return;
            }

            let datasArr = JSON.parse(data);
            res.status(200).json(datasArr);
        });
    } else {
        res.status(404).send("Data not found");
    }
});


//edit data

app.put('/editData', (req, res) => {
    const editedData = req.body;

    if (!editedData || Object.keys(editedData).length === 0) {
        return res.status(400).send("Invalid data for editing");
    }

    let folderPath = "./datas";
    let fileName = "datas.json";
    let filePath = path.join(folderPath, fileName);

    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, 'utf8', (readErr, data) => {
            if (readErr) {
                console.log("readErr: ", readErr);
                res.status(500).send("Internal Server Error");
                return;
            }

            let datasArr = JSON.parse(data);

            // Find and update the data based on your application's logic
            // For example, you might use an identifier like an ID to find the specific data to edit
            // Replace the logic below with your own data editing logic

            const indexToEdit = datasArr.findIndex(item => item.id === editedData.id);

            if (indexToEdit !== -1) {
                datasArr[indexToEdit] = { ...datasArr[indexToEdit], ...editedData };

                fs.writeFile(filePath, JSON.stringify(datasArr), (writeErr) => {
                    if (writeErr) {
                        console.log("writeErr: ", writeErr);
                        res.status(500).send("Internal Server Error");
                    } else {
                        console.log("success");
                        res.status(200).json({ message: "Data successfully edited" });
                    }
                });
            } else {
                res.status(404).send("Data not found for editing");
            }
        });
    } else {
        res.status(404).send("Data not found for editing");
    }
});

//delete data

app.delete('/deleteData', (req, res) => {
    const dataToDelete = req.body;

    if (!dataToDelete || Object.keys(dataToDelete).length === 0) {
        return res.status(400).send("Invalid data for deletion");
    }

    let folderPath = "./datas";
    let fileName = "datas.json";
    let filePath = path.join(folderPath, fileName);

    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, 'utf8', (readErr, data) => {
            if (readErr) {
                console.log("readErr: ", readErr);
                res.status(500).send("Internal Server Error");
                return;
            }

            let datasArr = JSON.parse(data);

            // Find and remove the data based on your application's logic
            // For example, you might use an identifier like an ID to find the specific data to delete
            // Replace the logic below with your own data deletion logic

            const indexToDelete = datasArr.findIndex(item => item.id === dataToDelete.id);

            if (indexToDelete !== -1) {
                datasArr.splice(indexToDelete, 1);

                fs.writeFile(filePath, JSON.stringify(datasArr), (writeErr) => {
                    if (writeErr) {
                        console.log("writeErr: ", writeErr);
                        res.status(500).send("Internal Server Error");
                    } else {
                        console.log("success");
                        res.status(200).json({ message: "Data successfully deleted" });
                    }
                });
            } else {
                res.status(404).send("Data not found for deletion");
            }
        });
    } else {
        res.status(404).send("Data not found for deletion");
    }
});



app.listen(PORT,()=>{
    console.log(`Server runnung at http://localhost:${PORT}`);
})