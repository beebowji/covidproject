
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
    const password = document.getElementById('password');



    contact.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
        });
    });
    
    $("#login").click(function() {
            var email = $("#emaillogin").val().trim();;
            var password = $("#passwordlogin").val().trim();
            var user = firebase.auth().currentUser;
            //sign in
            if(!user){
                firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                 
                    //user detail
                    if (user) {
                        user.providerData.forEach(function(profile) {
                            console.log("Sign-in provider: " + profile.providerId);
                            console.log("  Provider-specific UID: " + profile.uid);
                            console.log("  Name: " + profile.displayName);
                            console.log("  Email: " + profile.email);
                            console.log("  Photo URL: " + profile.photoURL);
                        });
                    }
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode + errorMessage)
                });
               
            }
            else{
                location.reload();
                window.location="/";
            }
           
        });





        $("#register").click(function() {
            var name = $("#name").val().trim();;
            var email = $("#email").val().trim();;
            var password = $("#password").val().trim();;
          
            //register
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    //update name
                    var user = firebase.auth().currentUser;
                    user.updateProfile({
                        displayName: name,
                    }).then(function() {
                        console.log("Sign up Successful")
                            //signin
                        firebase.auth().signInWithEmailAndPassword(email, password)
                            .then((user) => {
                                console.log("Sign in Successful")
                             
                                    //user detail
                                    
                                var user = firebase.auth().currentUser;
                                if (user) {
                                    user.providerData.forEach(function(profile) {
                                        console.log("Sign-in provider: " + profile.providerId);
                                        console.log("  Provider-specific UID: " + profile.uid);
                                        console.log("  Name: " + profile.displayName);
                                        console.log("  Email: " + profile.email);
                                        console.log("  Photo URL: " + profile.photoURL);
                                      
                                    });
                                   
                                }
                            })
                            .catch((error) => {
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                console.log(errorCode + errorMessage)
                            });
                    }).catch(function(error) {
                        console.log(error)
                    });
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode + errorMessage)
                }); 
        });


        
        $("#logoutbtn").click(function() {
        firebase.auth().signOut().then(function() {
            console.log("Sign out Succesful")
        }).catch(function(error) {
            console.log(error)
        });
    });



    
        firebase.auth().onAuthStateChanged((user) => {
            var user = firebase.auth().currentUser;
            
        if (user) {
           
            curuser = user.displayName;
            console.log("logged as " + user.displayName)
            $("#loginbtn").hide()
            $("#logoutbtn").show()
            
      
          

            // $("#navprofile").html("Hi " + user.displayName)
            // $("#navsignout").show()
        }
        else {
            $("#loginbtn").show()
            $("#logoutbtn").hide()
            // $("#navsignin").show()
            // $("#navprofile").hide()
            // $("#navsignout").hide()
        }
    });


  
   // 