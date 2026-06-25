import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
getFirestore,
collection,
getDocs,
query,
where,
updateDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {
apiKey: "AIzaSyCfsaoePqf5xWewNTBV6PmF5cNXWNUy-mk",
authDomain: "vacaciones-empleados.firebaseapp.com",
projectId: "vacaciones-empleados",
storageBucket: "vacaciones-empleados.firebasestorage.app",
messagingSenderId: "977710909114",
appId: "1:977710909114:web:9d2a0c63d67e2a0e60e483",
measurementId: "G-TNKLJR8W12"
};


const snapshot = await getDocs(q);

console.log("Usuarios pendientes:", snapshot.size);

snapshot.forEach((doc)=>{
    console.log(doc.id, doc.data());
});


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



async function cargarPendientes() {

console.log("Cargando pendientes...");

const lista =
document.getElementById("listaPendientes");

console.log("Elemento lista:", lista);

if(!lista) return;

lista.innerHTML = "";

const q = query(
collection(db,"users"),
where("barId","==",null)
);

snapshot.forEach((userDoc)=>{
const data =
userDoc.data();

const li =
document.createElement("li");

li.innerHTML = `
<strong>${data.name}</strong>
<br>

${data.email}
<br><br>
<button onclick="asignarBar('${userDoc.id}','bar1')">
🍸 Centro
</button>

<button onclick="asignarBar('${userDoc.id}','bar2')">
🍹 Norte
</button>

<button onclick="asignarBar('${userDoc.id}','bar3')">
🌴 Playa
</button>

<button onclick="asignarBar('${userDoc.id}','bar4')">
🍺 Sur
</button>

<hr>

`;

lista.appendChild(li);

});

}


window.asignarBar =
async (uid,barId)=>{

await updateDoc(
doc(db,"users",uid),
{
barId:barId
}
);

alert("Empleado asignado");

cargarPendientes();

};


cargarPendientes();
