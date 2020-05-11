import   {
    addNewContact ,
     getContact ,
     getContactById ,
     updateContact ,
     deleteContact} from '../controller/crmController';

const routes = (app) =>{
     app.route('/contact')
     .get((req,res,next)=>{
         console.log(req.originalUrl)
         console.log(req.method)
         next();
     },getContact)
     .post(addNewContact);

     app.route('/contact/:contactId')
     .get(getContactById)
     .put(updateContact)
     .delete(deleteContact);
}

export default routes;