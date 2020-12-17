    var config = {
        apiKey: "AIzaSyBUjUQ4Holp5xrV-85suiKg3TmnIg3JT1Y",
        authDomain: "covidproject-d4e90.firebaseapp.com",
        databaseURL: "https://covidproject-d4e90.firebaseio.com",
        projectId: "covidproject-d4e90",
        storageBucket: "covidproject-d4e90.appspot.com",
    };
    var curuser = ""
    firebase.initializeApp(config);
    
    function send(){
        var name=document.getElementById('name');
        var email=document.getElementById('email');
        var subject=document.getElementById('subject');
        var message=document.getElementById('message');
    }

    window.onload=function(){
        showData();
    }

    function showData(){
        var firebaseRef=firebase.database().ref("contact");
        firebase.once('value').then(function(dataSnapshot){
            console.log(dataSnapshot.val());
        });
    }

    function insertData(name,email,subject,message){
        
    }