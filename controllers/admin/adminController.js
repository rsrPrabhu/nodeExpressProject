const rootDir = require('../../utils/path');
const path = require('path');
const fs = require('fs');


exports.getAdmin = (req, res) => {
    res.send({ name: 'Prabhu' });
};

const getFileContent = (callBack) => {
    const dataPath = path.join(rootDir, 'dataContent', 'data.json');
    return [...jsonCont]; // callBack([...jsonCont]);
    fs.readFile(dataPath, (error, fileData) => {
        let data = [];
        console.log(fileData);
        if (!error) {
            return callBack(JSON.stringify(fileData));
        } else {
            return callBack([]);
        }
    })
}

exports.getAdminList = (req, res) => {
    // res.status(200).send({
    //     status: "success",
    //     msg: "Payload updated successfully",
    //     data: jsonCont
    // });

    res.send(getFileContent(req))
};

exports.getAdminListById = (req, res) => {
    let data = [];
    if (req.params) {
        if (req.params.id) {
            const ts = getFileContent(req);
            data = ts.find(e => e.id.toString() === req.params.id)
        }
    }
    res.send(data);
};

exports.deleteAdminById = (req, res) => {
    console.log(req.params);
    let data = [];
    if (req.params) {
        if (req.params.id) {
            console.log('ddddddddd');
            const ts = getFileContent(req);
            data = ts.find(e => e.id.toString() == req.params.id)
        }
    }
    res.send(data);
};

exports.editAdminListById = (req, res) => {
    console.log(req.body);
    let data = [];
    if (req.body) {
        if (req.body.id) {
            const ts = getFileContent(req);
            data = ts.find(e => e.id == req.body.id)
        }
    }
    res.send(data);
};

exports.getAdmin_Content = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'admin.html'));
    //res.write() 
};

exports.postAdmin = (req, res) => {
    console.log(req.body.test, 'bodycontent');
    res.send({ name: req.body.usename });
    res.redirect('/');
};

// module.exports = {
//     getAdmin,
//     getAdmin_Content,
//     postAdmin
// }

let jsonCont = [
    {
        "id": 1,
        "name": "Prabhu",
        "class": "ECE"
    },
    {
        "id": 1,
        "name": "Prabhu",
        "class": "ECE"
    },
    {
        "id": 2,
        "name": "Renuga",
        "class": "EEE"
    },
    {
        "id": 3,
        "name": "Sonya",
        "class": "Agri"
    },
    {
        "id": 4,
        "name": "Rajan",
        "class": "ECE"
    },
    {
        "id": 1,
        "name": "Aanya",
        "class": "ECE"
    }
]