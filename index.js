const express=require('express');
const companyDetails=require('./src/routes/companyDetails');

const app=express();
app.use(express.json());

const port=8090;
app.use('/api/save',companyDetails);
app.listen(port,()=>
{
  console.log(`Server is running on port ${port}`);
});
