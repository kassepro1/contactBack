import express from 'express';
import routes from './src/route/crmRoute';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/crmdb',{
    useNewUrlParser:true
});
//CORS Middleware
app.use(function (req, res, next) {
//Enabling CORS
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
res.header("Access-Control-Allow-Headers",
 "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
next();
});
/*mongoose.connect('mongodb://mongo:27017/crmdb',{
    useNewUrlParser:true
});
*/
routes(app);

app.get('/',(req,res)=>
    res.send('express and node running on ${PORT}')
);


app.listen(PORT,()=>
console.log("le serveur est sur le port : ${PORT}")
);