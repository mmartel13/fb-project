
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const customers = require('./customers.json');
const credentials = require('./credentials.json');

initializeApp ({
    credential: cert(credentials)
})

const db = getFirestore();

const custRef = db.collection('customers')


custRef.doc('IGmkedlJ2L73CfcV4bA0').get() 
.then(doc => {
    console.log(doc.id, '=>', doc.data());
})
.catch(err => console.error(err));


custRef.get() 
.then(snapshot => {
    snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
})
})
.catch(console.error);


custRef.doc('dYNpzFFstNdntXQ11rmm').update({email:'megan@gmail.com'})

