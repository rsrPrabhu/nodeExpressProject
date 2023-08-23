const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const homeRoutes = require('./routes/home');
const adminRoutes = require('./routes/admin');
const fileRootDir = require('./utils/path');

// app.use(bodyParser.urlencoded({ extended: false }));  // deprecated
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(fileRootDir, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use(express.static(path.join(fileRootDir, 'css')));

app.set('view engine', 'ejs');
// app.set('views' , 'views');  // folder assign

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    // if we use any req to the path it invokes  app.use('/')
    // console.log('middleware section 1');
    next(); // to call the next middleware
}); /// splitted in route folder

app.use('/admin', adminRoutes);
app.use(homeRoutes);
// splitted in route folder

// Handling Invalid request type 1
// app.use((req, res, next) => {
//     res.json({
//         error: {
//             'name': 'Error',
//             'status': 404,
//             'message': 'Invalid Request',
//             'statusCode': 404,
//             'stack': port
//         },
//         message: 'Testing!'
//     });
// });

//Handling Invalid request type 2
app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(fileRootDir, 'views', '404.html'));
    const dataCont = {
        title: 'Page not found ejs...'
    };
    res.status(404).render('404', dataCont); 
});


app.listen(port, () => {
    console.log(`server started at port  ${port} ...`);
});