import { auth, db } from "../firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {
  setDoc,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

window.registerUser = async function (e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const password = form.querySelector("input[type='password']").value;
  const role = form.querySelector("select").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      role,
      createdAt: new Date()
    });

    alert("Account created successfully!");
    window.location.href = "../dashboard/" + role + ".html";
  } catch (error) {
    alert("Error: " + error.message);
  }
};

window.loginUser = async function (e) {
  e.preventDefault();
  const form = e.target;
  const email = form.querySelector("input[type='email']").value;
  const password = form.querySelector("input[type='password']").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userDoc = await getDoc(doc(db, "users", user.uid));
    const role = userDoc.exists() ? userDoc.data().role : "buyer";

    alert("Login successful!");
    window.location.href = "../dashboard/" + role + ".html";
  } catch (error) {
    alert("Login failed: " + error.message);
  }
};