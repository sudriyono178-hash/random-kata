import {
  auth,
  db,
  provider,
  loginGoogle,
  logoutGoogle
} from "./firebase.js";

let data = {};
let babAktif = null;

// ===========================
// LOGIN
// ===========================

document.getElementById("loginGoogle").onclick = async () => {
    try{
        await loginGoogle();
    }catch(e){
        alert(e.message);
    }
};

document.getElementById("logoutBtn").onclick = async () => {
    await logoutGoogle();
};

auth.onAuthStateChanged(user=>{

    if(user){

        document.getElementById("namaUser").textContent=user.displayName;

        document.getElementById("userBox").classList.remove("hidden");

        document.getElementById("loginGoogle").classList.add("hidden");

    }else{

        document.getElementById("userBox").classList.add("hidden");

        document.getElementById("loginGoogle").classList.remove("hidden");

    }

});
// ===========================
// PINDAH HALAMAN
// ===========================

const home = document.getElementById("home");
const halamanBab = document.getElementById("halamanBab");
const halamanBelajar = document.getElementById("halamanBelajar");

document.getElementById("mulaiBelajar").onclick = () => {

    home.classList.add("hidden");
    halamanBab.classList.remove("hidden");

};

document.getElementById("kembaliHome").onclick = () => {

    halamanBab.classList.add("hidden");
    home.classList.remove("hidden");

};
