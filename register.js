// register.js
function registerUser(email, password, username) {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Save additional user data to Firestore
      return db.collection("users").doc(user.uid).set({
        uid: user.uid,
        email: user.email,
        username: username,
        createdAt: new Date()
      });
    })
    .then(() => {
      console.log("✅ Registration successful");
    })
    .catch((error) => {
      console.error("❌ Registration error:", error.message);
    });
}

// Example usage
registerUser("khalid@example.com", "StrongPassword123", "KhalidDev");