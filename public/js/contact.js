     var firebaseConfig = {
            apiKey: "AIzaSyBUjUQ4Holp5xrV-85suiKg3TmnIg3JT1Y",
            authDomain: "covidproject-d4e90.firebaseapp.com",
            databaseURL: "https://covidproject-d4e90.firebaseio.com",
            projectId: "covidproject-d4e90",
            storageBucket: "covidproject-d4e90.appspot.com",
        };
    
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();
    
        const contact = db.collection('contact');
        const doc = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const subject = document.getElementById('subject');
        const addBtn = document.getElementById('send');    
    
        contact.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
            });
        });
    
    
    //add
    addBtn.addEventListener('click', e => {
        e.preventDefault();
        const ID = contact.doc(doc.value).set({
                email: email.value,
                message: message.value,
                name: doc.value,
                subject: subject.value,
                
            })
            .then(() => {
                console.log('Data has been saved successfully !')
                alert('เราได้รับข้อความของคุณแล้วและจะรีบตอบกลับให้เร็วที่สุด');
            })
            .catch(error => {
                console.error(error)
            });
    });