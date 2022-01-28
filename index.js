
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const customers = require('./customers.json');
const credentials = require('./credentials.json');

initializeApp ({
    credential: cert(credentials)
})

const db = getFirestore();

const custRef = db.collection('customers')

// added each customer then commented out for the rest of the code 
// custRef.add(customers[])
// .then(doc => {
//     console.log('Added customer', doc.id);
// })
// .catch(err => {
//     console.error(err)
// });

custRef.doc('IGmkedlJ2L73CfcV4bA0').get() //this pulls one doc
.then(doc => {
    console.log(doc.id, '=>', doc.data());
})
.catch(err => console.error(err));

custRef.get() //this pulls all docs in collection
.then(snapshot => {
    snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
})
})
.catch(console.error);

//update a document 
custRef.doc('dYNpzFFstNdntXQ11rmm').update({email:'megan@gmail.com'})

