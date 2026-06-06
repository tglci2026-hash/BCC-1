/* BABY CASH COIN - script.js
   Fichier JavaScript complet a envoyer sur GitHub avec ce nom exact : script.js
   Si GitHub Pages ne charge pas ce fichier, verifier que le nom est bien en minuscules.
*/
window.BCC_SCRIPT_LOADED = true;
console.info("BCC script charge : script.js est bien lie a index.html");

const STORAGE_KEY = "bccAppStateV1";

const REMEMBER_KEY = "bccRememberLogin";
const APP_SETTINGS_KEY = "bccAppSettings";
const OTP_DEMO_CODE = "123456";
const currencyRates = {
XOF:{label:"FCFA BCEAO",rate:1,symbol:"FCFA"},
XAF:{label:"FCFA CEMAC",rate:1,symbol:"FCFA"},
EUR:{label:"Euro",rate:0.00152,symbol:"EUR"},
USD:{label:"Dollar US",rate:0.00165,symbol:"USD"},
GBP:{label:"Livre sterling",rate:0.0013,symbol:"GBP"},
CAD:{label:"Dollar canadien",rate:0.00225,symbol:"CAD"},
NGN:{label:"Naira",rate:2.48,symbol:"NGN"},
GHS:{label:"Cedi",rate:0.019,symbol:"GHS"},
MAD:{label:"Dirham marocain",rate:0.0165,symbol:"MAD"}
};
const languages = [
["fr","Francais"],["en","English"],["es","Espanol"],["ar","Arabe"],["pt","Portugues"],
["de","Deutsch"],["it","Italiano"],["zh","Chinois"],["hi","Hindi"],["tr","Turc"]
];

const i18n = {
fr:{
"Bienvenue sur BCC":"Bienvenue sur BCC","Connexion securisee":"Connexion securisee","Connexion":"Connexion","Inscription":"Inscription","Adresse email":"Adresse email","Mot de passe":"Mot de passe","Memoriser mes infos":"Memoriser mes infos","Se connecter":"Se connecter","Mot de passe oublie ?":"Mot de passe oublie ?","Choisir langue":"Choisir langue","Langue":"Langue","Prenom":"Prenom","Nom":"Nom","Adresse mail":"Adresse mail","Confirmer adresse mail":"Confirmer adresse mail","Confirmer mot de passe":"Confirmer mot de passe","PIN 6 chiffres":"PIN 6 chiffres","Numero Mobile Money pour les retraits":"Numero Mobile Money pour les retraits","Code OTP recu par SMS":"Code OTP recu par SMS","Choisir devise":"Choisir devise","Autoriser ma position":"Autoriser ma position","Position obligatoire pour finaliser l'inscription.":"Position obligatoire pour finaliser l'inscription.","Regles et confidentialite":"Regles et confidentialite","J'accepte les regles et la confidentialite BABY CASH COIN.":"J'accepte les regles et la confidentialite BABY CASH COIN.","Valider mon inscription":"Valider mon inscription","Solde principal":"Solde principal","Envoyer":"Envoyer","Recevoir":"Recevoir","Scanner":"Scanner","Convertir":"Convertir","Historique":"Historique","Aucune transaction":"Aucune transaction","Les activites apparaitront ici":"Les activites apparaitront ici","Recompenses BCC":"Recompenses BCC","Envoyer mes recompenses":"Envoyer mes recompenses","Carte cadeau BCC":"Carte cadeau BCC","GRATTER MA CARTE":"GRATTER MA CARTE","MISSIONS":"MISSIONS","SOLDE & PLAFOND":"SOLDE & PLAFOND","KYC":"KYC","SECURITE":"SECURITE","MISSIONS":"MISSIONS","PARRAINAGE":"PARRAINAGE","ASSISTANCE EN LIGNE":"ASSISTANCE EN LIGNE","COMPTE":"COMPTE","Accueil":"Accueil","Recompense":"Recompense","MISSION DU JOUR":"MISSION DU JOUR","Missions":"Missions","Parametres":"Parametres","Deconnecter":"Deconnecter"},
en:{"Bienvenue sur BCC":"Welcome to BCC","Connexion securisee":"Secure login","Connexion":"Login","Inscription":"Register","Adresse email":"Email address","Mot de passe":"Password","Memoriser mes infos":"Remember my info","Se connecter":"Sign in","Mot de passe oublie ?":"Forgot password?","Choisir langue":"Choose language","Langue":"Language","Prenom":"First name","Nom":"Last name","Adresse mail":"Email address","Confirmer adresse mail":"Confirm email address","Confirmer mot de passe":"Confirm password","PIN 6 chiffres":"6 digit PIN","Numero Mobile Money pour les retraits":"Mobile Money number for withdrawals","Code OTP recu par SMS":"OTP code received by SMS","Choisir devise":"Choose currency","Autoriser ma position":"Allow my location","Position obligatoire pour finaliser l'inscription.":"Location is required to complete registration.","Regles et confidentialite":"Rules and privacy","J'accepte les regles et la confidentialite BABY CASH COIN.":"I accept BABY CASH COIN rules and privacy.","Valider mon inscription":"Confirm my registration","Solde principal":"Main balance","Envoyer":"Send","Recevoir":"Receive","Scanner":"Scan","Convertir":"Convert","Historique":"History","Aucune transaction":"No transaction","Les activites apparaitront ici":"Activities will appear here","Recompenses BCC":"BCC rewards","Envoyer mes recompenses":"Send my rewards","Carte cadeau BCC":"BCC gift card","GRATTER MA CARTE":"SCRATCH MY CARD","MISSIONS":"MISSIONS","SOLDE & PLAFOND":"BALANCE & LIMIT","KYC":"KYC","SECURITE":"SECURITY","PARRAINAGE":"REFERRAL","ASSISTANCE EN LIGNE":"ONLINE SUPPORT","COMPTE":"ACCOUNT","Accueil":"Home","Recompense":"Reward","MISSION DU JOUR":"DAILY MISSION","Missions":"Missions","Parametres":"Settings","Deconnecter":"Logout"},
es:{"Bienvenue sur BCC":"Bienvenido a BCC","Connexion securisee":"Conexion segura","Connexion":"Iniciar sesion","Inscription":"Registro","Adresse email":"Correo electronico","Mot de passe":"Contrasena","Memoriser mes infos":"Recordar mis datos","Se connecter":"Entrar","Mot de passe oublie ?":"Olvido su contrasena?","Choisir langue":"Elegir idioma","Langue":"Idioma","Prenom":"Nombre","Nom":"Apellido","Adresse mail":"Correo electronico","Confirmer adresse mail":"Confirmar correo","Confirmer mot de passe":"Confirmar contrasena","PIN 6 chiffres":"PIN de 6 digitos","Numero Mobile Money pour les retraits":"Numero Mobile Money para retiros","Code OTP recu par SMS":"Codigo OTP recibido por SMS","Choisir devise":"Elegir moneda","Autoriser ma position":"Autorizar mi ubicacion","Position obligatoire pour finaliser l'inscription.":"La ubicacion es obligatoria para finalizar el registro.","Regles et confidentialite":"Reglas y privacidad","J'accepte les regles et la confidentialite BABY CASH COIN.":"Acepto las reglas y la privacidad de BABY CASH COIN.","Valider mon inscription":"Validar mi registro","Solde principal":"Saldo principal","Envoyer":"Enviar","Recevoir":"Recibir","Scanner":"Escanear","Convertir":"Convertir","Historique":"Historial","Aucune transaction":"Sin transacciones","Les activites apparaitront ici":"Las actividades apareceran aqui","Recompenses BCC":"Recompensas BCC","Envoyer mes recompenses":"Enviar mis recompensas","Carte cadeau BCC":"Tarjeta regalo BCC","GRATTER MA CARTE":"RASPAR MI TARJETA","MISSIONS":"MISIONES","SOLDE & PLAFOND":"SALDO Y LIMITE","KYC":"KYC","SECURITE":"SEGURIDAD","PARRAINAGE":"REFERIDOS","ASSISTANCE EN LIGNE":"SOPORTE EN LINEA","COMPTE":"CUENTA","Accueil":"Inicio","Recompense":"Recompensa","MISSION DU JOUR":"MISION DEL DIA","Missions":"Misiones","Parametres":"Ajustes","Deconnecter":"Cerrar sesion"},
pt:{},de:{},it:{},ar:{},zh:{},hi:{},tr:{}
};
["pt","de","it","ar","zh","hi","tr"].forEach(code=>{ i18n[code] = {...i18n.en,...i18n[code]}; });

let adminAccounts = [
{
id:"ADM-PRINCIPAL",
role:"main_admin",
email:"admin@babycashcoin.com",
password:"Admin@2026",
name:"Admin Principal",
permissions:["all"]
},
{
id:"ADM-MISSIONS",
role:"admin_missions",
email:"admin.missions@babycashcoin.com",
password:"Missions@2026",
name:"Admin Missions",
permissions:["missions"]
},
{
id:"ADM-KYC",
role:"admin_kyc",
email:"admin.kyc@babycashcoin.com",
password:"Kyc@2026",
name:"Admin KYC",
permissions:["kyc","missions"]
},
{
id:"ADM-REWARDS",
role:"admin_rewards",
email:"admin.rewards@babycashcoin.com",
password:"Rewards@2026",
name:"Admin Recompenses",
permissions:["rewards"]
},
{
id:"ADM-SUPPORT",
role:"admin_support",
email:"admin.support@babycashcoin.com",
password:"Support@2026",
name:"Admin Support",
permissions:["users","support","notifications"]
},
{
id:"ADM-FINANCE",
role:"admin_finance",
email:"admin.finance@babycashcoin.com",
password:"Finance@2026",
name:"Admin Finance",
permissions:["finance","transactions"]
}
];

const defaultMissions = [
{id:"MIS-CPALEAD",title:"CPALEAD Offerwall",link:"",gain:0,duration:"0 min",conditions:"Mission admin a remplir",status:"active"},
{id:"MIS-OFFERTORO",title:"OFFERTORO Sondages",link:"",gain:0,duration:"0 min",conditions:"Mission admin a remplir",status:"active"},
{id:"MIS-LOOTABLY",title:"LOOTABLY Videos",link:"",gain:0,duration:"0 min",conditions:"Mission admin a remplir",status:"active"},
{id:"MIS-SOCIAL",title:"Reseaux sociaux",link:"",gain:0,duration:"0 min",conditions:"Mission admin a remplir",status:"active"}
];

const supabaseReadySchema = {
users:"id,email,first_name,last_name,birth_date,role,pin_hash,created_at",
wallets:"user_id,main_balance,reward_balance,monthly_used,monthly_limit",
transactions:"id,user_id,type,amount,fees,status,created_at",
missions:"id,title,link,gain,duration,conditions,status",
mission_submissions:"id,user_id,mission_id,status,gain,created_at",
kyc:"id,user_id,status,files,created_at",
rewards:"id,user_id,gain,next_scratch_at",
admin_logs:"id,admin_id,action,target,created_at"
,
notifications:"id,user_id,title,message,type,read,created_at",
support_requests:"id,user_id,email,message,status,reply,created_at"
};

let appSettings = JSON.parse(localStorage.getItem(APP_SETTINGS_KEY) || '{"language":"fr","languageName":"Francais"}');
let state = loadState();
prepareState();
let session = JSON.parse(localStorage.getItem("bccSession") || "null");
let currentUser = null;
let visibleBalance = true;
let historyExpanded = false;
let currentStream = null;
let pendingLocation = null;
let scratchReady = false;
let scratchCompleted = false;
let isScratching = false;
let globalMaintenanceShown = false;
let adminActivitiesExpanded = false;

const splashScreen = document.getElementById("splashScreen");
const authWall = document.getElementById("authWall");
const userDashboard = document.getElementById("userDashboard");
const adminDashboard = document.getElementById("adminDashboard");
const modal = document.getElementById("mainModal");
const modalContent = document.getElementById("modalContent");

function loadState(){
const saved = localStorage.getItem(STORAGE_KEY);
if(saved){
return JSON.parse(saved);
}

return {
users:[],
adminAccounts:adminAccounts.map(admin=>({...admin,permissions:[...admin.permissions]})),
missions:defaultMissions,
transactions:[],
activities:[],
kycRequests:[],
missionProofs:[],
notifications:[],
supportRequests:[],
rewardSettings:{
gains:["0","X2",50,100,200,300,500],
pool:5000,
dailyText:"Mission du jour bientot disponible",
dailyImage:""
},
settings:{
missionMaintenance:false,
feesBalance:0,
feeWithdrawals:[],
withdrawals:[],
schema:supabaseReadySchema
}
};
}

function createTestUser(){
return {
id:"BCCUSER-TEST-001",
role:"user",
firstName:"Test",
lastName:"User",
email:"user@testbcc.com",
password:"User@2026",
pin:"123456",
birthDate:"2000-01-01",
mobileMoney:"+000000000",
currency:"XOF",
language:"fr",
otpVerified:true,
location:{lat:0,lng:0,accuracy:0},
acceptedRules:true,
banned:false,
kycStatus:"",
kycFiles:[],
kycImages:[],
mainBalance:1000,
rewardBalance:0,
monthlyUsed:0,
verified:false,
transactions:[],
missionStats:{validated:0,pending:0,rejected:0,earned:0},
referrals:0,
xp:0,
missionSubmissions:[],
nextScratchAt:0,
nextSpinAt:0,
createdAt:nowText()
};
}

function prepareState(){
let changed = false;

if(!Array.isArray(state.users)){
state.users = [];
changed = true;
}

if(!Array.isArray(state.missions)){
state.missions = defaultMissions;
changed = true;
}

if(!Array.isArray(state.transactions)){
state.transactions = [];
changed = true;
}

if(!Array.isArray(state.activities)){
state.activities = [];
changed = true;
}

if(!Array.isArray(state.kycRequests)){
state.kycRequests = [];
changed = true;
}

if(!Array.isArray(state.missionProofs)){
state.missionProofs = [];
changed = true;
}

if(!Array.isArray(state.notifications)){
state.notifications = [];
changed = true;
}

if(!Array.isArray(state.supportRequests)){
state.supportRequests = [];
changed = true;
}

if(!state.rewardSettings){
state.rewardSettings = {gains:["0","X2",50,100,200,300,500],pool:5000,dailyText:"Mission du jour bientot disponible",dailyImage:"",media:[],mediaDirection:"forward"};
changed = true;
}

if(typeof state.rewardSettings.pool === "undefined"){
state.rewardSettings.pool = 5000;
changed = true;
}

if(!Array.isArray(state.rewardSettings.media)){
state.rewardSettings.media = state.rewardSettings.dailyImage ? [{type:"image",src:state.rewardSettings.dailyImage,name:"Image actuelle"}] : [];
changed = true;
}

if(!state.rewardSettings.mediaDirection){
state.rewardSettings.mediaDirection = "forward";
changed = true;
}

if(!Array.isArray(state.adminAccounts)){
state.adminAccounts = adminAccounts.map(admin=>({...admin,permissions:[...admin.permissions]}));
changed = true;
}
adminAccounts = state.adminAccounts;

if(!state.settings){
state.settings = {missionMaintenance:false,feesBalance:0,feeWithdrawals:[],withdrawals:[],schema:supabaseReadySchema};
changed = true;
}

if(typeof state.settings.feesBalance === "undefined"){ state.settings.feesBalance = 0; changed = true; }
if(!Array.isArray(state.settings.feeWithdrawals)){ state.settings.feeWithdrawals = []; changed = true; }
if(!Array.isArray(state.settings.withdrawals)){ state.settings.withdrawals = []; changed = true; }
if(typeof state.settings.maintenanceMessage === "undefined"){ state.settings.maintenanceMessage = "La section mission est temporairement en maintenance."; changed = true; }
if(typeof state.settings.globalMaintenance === "undefined"){ state.settings.globalMaintenance = false; changed = true; }
if(!Array.isArray(state.settings.passwordRequests)){ state.settings.passwordRequests = []; changed = true; }
if(!Array.isArray(state.settings.referrals)){ state.settings.referrals = []; changed = true; }
if(!Array.isArray(state.settings.savedReports)){ state.settings.savedReports = []; changed = true; }

state.users = state.users.map(user=>{
let nextUser = {...user};
if(!Array.isArray(nextUser.transactions)){ nextUser.transactions = []; changed = true; }
if(!Array.isArray(nextUser.missionSubmissions)){ nextUser.missionSubmissions = []; changed = true; }
if(!nextUser.missionStats){ nextUser.missionStats = {validated:0,pending:0,rejected:0,earned:0}; changed = true; }
if(typeof nextUser.mainBalance === "undefined"){ nextUser.mainBalance = 0; changed = true; }
if(typeof nextUser.rewardBalance === "undefined"){ nextUser.rewardBalance = 0; changed = true; }
if(typeof nextUser.monthlyUsed === "undefined"){ nextUser.monthlyUsed = 0; changed = true; }
if(typeof nextUser.nextScratchAt === "undefined"){ nextUser.nextScratchAt = 0; changed = true; }
if(typeof nextUser.nextSpinAt === "undefined"){ nextUser.nextSpinAt = nextUser.nextScratchAt || 0; changed = true; }
if(typeof nextUser.kycStatus === "undefined"){ nextUser.kycStatus = ""; changed = true; }
if(!Array.isArray(nextUser.kycFiles)){ nextUser.kycFiles = []; changed = true; }
if(!Array.isArray(nextUser.kycImages)){ nextUser.kycImages = []; changed = true; }
if(typeof nextUser.mobileMoney === "undefined"){ nextUser.mobileMoney = ""; changed = true; }
if(typeof nextUser.currency === "undefined"){ nextUser.currency = "XOF"; changed = true; }
if(typeof nextUser.language === "undefined"){ nextUser.language = appSettings.language || "fr"; changed = true; }
if(typeof nextUser.otpVerified === "undefined"){ nextUser.otpVerified = true; changed = true; }
if(typeof nextUser.referrals === "undefined"){ nextUser.referrals = 0; changed = true; }
if(typeof nextUser.referredBy === "undefined"){ nextUser.referredBy = ""; changed = true; }
if(typeof nextUser.xp === "undefined"){ nextUser.xp = calculateUserXp(nextUser); changed = true; }
if(typeof nextUser.banned === "undefined"){ nextUser.banned = false; changed = true; }
if(typeof nextUser.adminBlocked === "undefined"){ nextUser.adminBlocked = false; changed = true; }
if(typeof nextUser.lastSeen === "undefined"){ nextUser.lastSeen = 0; changed = true; }
if(!Array.isArray(nextUser.notifications)){ nextUser.notifications = []; changed = true; }
return nextUser;
});

state.missions = state.missions.map(mission=>{
let nextMission = {...mission};
if(typeof nextMission.link === "undefined"){
nextMission.link = "";
changed = true;
}
if(typeof nextMission.validation === "undefined"){ nextMission.validation = "manual"; changed = true; }
if(typeof nextMission.expiresAt === "undefined"){ nextMission.expiresAt = getMissionExpiry(nextMission.duration); changed = true; }
if(typeof nextMission.image === "undefined"){ nextMission.image = ""; changed = true; }
return nextMission;
});

if(!state.users.some(user=>user.email === "user@testbcc.com")){
state.users.push(createTestUser());
changed = true;
}

if(changed){
saveState();
}
}

function saveState(){
localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
}

function setSession(value){
session = value;
localStorage.setItem("bccSession",JSON.stringify(value));
}

function uid(prefix){
return `${prefix}-${Date.now()}-${Math.floor(Math.random()*9999)}`;
}

function nowText(){
return new Date().toLocaleString("fr-FR");
}

function calculateUserXp(user){
const missions = Number(user.missionStats?.validated || 0);
const referrals = Number(user.referrals || 0);
return Math.min(100,(missions * 0.5) + (referrals * 0.5));
}

function getLevelInfo(user){
const xp = calculateUserXp(user);
const level = Math.max(1,Math.min(65,Math.floor(xp) + 1));
if(level >= 65){ return {level,xp,name:"Super Pro",badge:"SUPER PRO"}; }
if(level >= 51){ return {level,xp,name:"Pro",badge:"PRO"}; }
if(level >= 46){ return {level,xp,name:"Premium",badge:"PREMIUM"}; }
if(level >= 31){ return {level,xp,name:"Gold",badge:"GOLD"}; }
if(level >= 16){ return {level,xp,name:"Silver",badge:"SILVER"}; }
return {level,xp,name:"Bronze",badge:"BRONZE"};
}

function formatCurrencyFromBcc(amount,user){
const currency = user?.currency || "XOF";
const info = currencyRates[currency] || currencyRates.XOF;
return `${(Number(amount || 0) * info.rate).toLocaleString("fr-FR",{maximumFractionDigits:2})} ${info.symbol}`;
}

function normalizePhone(value){
return value.replace(/\s+/g,"").replace(/[^\d+]/g,"");
}

function getMonthlyLimit(user){
return user?.verified || user?.kycStatus === "validated" ? 1500000 : 600000;
}

function canUseMonthlyLimit(user,amount){
return Number(user.monthlyUsed || 0) + Number(amount || 0) <= getMonthlyLimit(user);
}

function getWeeklyRewardTimestamp(){
const next = new Date();
next.setDate(next.getDate() + 7);
next.setHours(0,0,0,0);
return next.getTime();
}

function getMissionExpiry(duration){
const text = String(duration || "").toLowerCase();
const number = parseFloat(text.replace(",","."));
if(!number || number <= 0){
return 0;
}
let multiplier = 60000;
if(text.includes("h") || text.includes("heure")){
multiplier = 3600000;
}
if(text.includes("jour") || text.includes("j")){
multiplier = 86400000;
}
return Date.now() + number * multiplier;
}

function recycleExpiredMissions(){
const now = Date.now();
let changed = false;
state.missions.forEach(mission=>{
if(mission.status === "active" && mission.expiresAt && mission.expiresAt <= now){
mission.status = "expired";
changed = true;
}
});

const activeCount = state.missions.filter(mission=>mission.status === "active").length;
if(activeCount === 0){
const nextMission = state.missions.find(mission=>mission.status === "queue");
if(nextMission){
nextMission.status = "active";
nextMission.expiresAt = getMissionExpiry(nextMission.duration);
changed = true;
addActivity("mission_queue",`Mission file d'attente publiee : ${nextMission.title}`);
}
}

if(changed){
saveState();
}
}

function addActivity(type,message,userId){
state.activities.unshift({
id:uid("ACT"),
type,
message,
userId:userId || (currentUser ? currentUser.id : ""),
date:nowText()
});
state.activities = state.activities.slice(0,80);
saveState();
}

function notifyUser(user,title,message,type){
if(!user){
return;
}
const notification = {
id:uid("NOTIF"),
userId:user.id,
title,
message,
type:type || "info",
read:false,
date:nowText()
};
user.notifications.unshift(notification);
state.notifications.unshift(notification);
state.notifications = state.notifications.slice(0,200);
}

function notifyAdmins(title,message,type){
state.notifications.unshift({
id:uid("ADM-NOTIF"),
userId:"admins",
title,
message,
type:type || "admin",
read:false,
date:nowText()
});
}

function notifyAllUsers(title,message,type){
state.users.forEach(user=>notifyUser(user,title,message,type));
}

function markSensitiveTransaction(user,title,message){
notifyUser(user,title,message,"sensitive");
notifyAdmins(title,`${user.email} : ${message}`,"sensitive");
}

function missionStatusLabel(status){
const labels = {
unused:"Non utilise",
pending:"En verification",
validated:"Mission valide",
rejected:"Mission refuse",
active:"Active",
queue:"En file",
expired:"Expiree"
};
return labels[status] || status || "Non utilise";
}
function findCurrentUser(){
if(!session){
return null;
}

if(session.type === "admin"){
return adminAccounts.find(admin=>admin.id === session.id) || null;
}

return state.users.find(user=>user.id === session.id) || null;
}

function hasPermission(permission){
if(!currentUser || session.type !== "admin"){
return false;
}

return currentUser.permissions.includes("all") || currentUser.permissions.includes(permission);
}

function openModal(content){
modal.style.display = "flex";
modalContent.innerHTML = content;
}

function closeModal(){
modal.style.display = "none";
stopCamera();
}

window.closeModal = closeModal;

window.addEventListener("click",(event)=>{
if(event.target === modal){
closeModal();
}
});

function showOnly(view){
splashScreen.classList.add("hidden");
authWall.classList.add("hidden");
userDashboard.classList.add("hidden");
adminDashboard.classList.add("hidden");
view.classList.remove("hidden");
}

setTimeout(()=>{
currentUser = findCurrentUser();

if(currentUser && session.type === "admin"){
showAdmin();
return;
}

if(currentUser && session.type === "user"){
showUser();
return;
}

showOnly(authWall);
},2000);

document.getElementById("showLoginBtn").addEventListener("click",()=>{
document.getElementById("showLoginBtn").classList.add("active");
document.getElementById("showRegisterBtn").classList.remove("active");
document.getElementById("loginForm").classList.remove("hidden");
document.getElementById("registerForm").classList.add("hidden");
});

document.getElementById("showRegisterBtn").addEventListener("click",()=>{
document.getElementById("showRegisterBtn").classList.add("active");
document.getElementById("showLoginBtn").classList.remove("active");
document.getElementById("registerForm").classList.remove("hidden");
document.getElementById("loginForm").classList.add("hidden");
});

function saveAppSettings(){
localStorage.setItem(APP_SETTINGS_KEY,JSON.stringify(appSettings));
document.documentElement.lang = appSettings.language || "fr";
const text = document.getElementById("selectedLanguageText");
if(text){
text.innerText = `Langue : ${appSettings.languageName || "Francais"}`;
}
applyLanguage();
}

saveAppSettings();

function translateText(value){
const dict = i18n[appSettings.language] || i18n.fr;
return dict[value] || i18n.fr[value] || value;
}

function applyLanguage(){
const dict = i18n[appSettings.language] || i18n.fr;
document.querySelectorAll("h1,h2,h3,p,span,button,a,label,strong,option,div,input,textarea").forEach(element=>{
if(element.children.length === 0){
const value = element.innerText?.trim();
if(value && dict[value]){
element.innerText = dict[value];
}
}
if(element.placeholder && dict[element.placeholder]){
element.placeholder = dict[element.placeholder];
}
});
const text = document.getElementById("selectedLanguageText");
if(text){
text.innerText = `${translateText("Langue")} : ${appSettings.languageName || "Francais"}`;
}
}

const rememberedLogin = JSON.parse(localStorage.getItem(REMEMBER_KEY) || "null");
if(rememberedLogin){
document.getElementById("loginEmail").value = rememberedLogin.email || "";
document.getElementById("loginPassword").value = rememberedLogin.password || "";
document.getElementById("rememberLogin").checked = true;
}

document.getElementById("languageBtn").addEventListener("click",()=>{
openModal(`
<h2>Choisir langue</h2>
<div class="language-list">
${languages.map(([code,name])=>`<button class="outline-btn language-choice" data-lang="${code}" data-name="${name}" type="button">${name}</button>`).join("")}
</div>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);
setTimeout(()=>{
document.querySelectorAll(".language-choice").forEach(button=>{
button.addEventListener("click",()=>{
appSettings.language = button.dataset.lang;
appSettings.languageName = button.dataset.name;
saveAppSettings();
if(currentUser && session?.type === "user"){
currentUser.language = appSettings.language;
saveState();
}
closeModal();
});
});
},50);
});

document.getElementById("rulesToggleBtn").addEventListener("click",()=>{
document.getElementById("rulesText").classList.toggle("hidden");
});

document.getElementById("requestLocationBtn").addEventListener("click",()=>{
if(!navigator.geolocation){
alert("Geolocalisation non disponible");
return;
}

navigator.geolocation.getCurrentPosition(position=>{
pendingLocation = {
lat:position.coords.latitude,
lng:position.coords.longitude,
accuracy:position.coords.accuracy
};
document.getElementById("locationStatus").innerText = "Position validee.";
},()=>{
pendingLocation = null;
document.getElementById("locationStatus").innerText = "Position refusee. Inscription annulee.";
alert("La position est obligatoire pour creer un compte.");
});
});

document.getElementById("registerForm").addEventListener("submit",(event)=>{
event.preventDefault();

const firstName = document.getElementById("regFirstName").value.trim();
const lastName = document.getElementById("regLastName").value.trim();
const email = document.getElementById("regEmail").value.trim().toLowerCase();
const emailConfirm = document.getElementById("regEmailConfirm").value.trim().toLowerCase();
const password = document.getElementById("regPassword").value;
const passwordConfirm = document.getElementById("regPasswordConfirm").value;
const pin = document.getElementById("regPin").value.trim();
const mobileMoney = normalizePhone(document.getElementById("regMobileMoney").value.trim());
const otp = document.getElementById("regOtp").value.trim();
const currency = document.getElementById("regCurrency").value;
const birthDate = document.getElementById("regBirthDate").value;
const acceptRules = document.getElementById("acceptRules").checked;
const referredBy = new URLSearchParams(window.location.search).get("ref") || "";

if(email !== emailConfirm){
alert("Les emails ne correspondent pas.");
return;
}

if(password !== passwordConfirm){
alert("Les mots de passe ne correspondent pas.");
return;
}

if(password.length < 6){
alert("Mot de passe trop court.");
return;
}

if(!/^\d{6}$/.test(pin)){
alert("Le PIN doit contenir exactement 6 chiffres.");
return;
}

if(mobileMoney.length < 8){
alert("Numero Mobile Money invalide.");
return;
}

if(otp !== OTP_DEMO_CODE){
alert("Code OTP invalide. Code test actuel : 123456.");
return;
}

if(!currencyRates[currency]){
alert("Choisissez une devise reconnue.");
return;
}

if(!pendingLocation){
alert("La localisation est obligatoire.");
return;
}

if(!acceptRules){
alert("Vous devez accepter les regles et la confidentialite.");
return;
}

if(state.users.some(user=>user.email === email) || adminAccounts.some(admin=>admin.email === email)){
alert("Cet email existe deja.");
return;
}

if(state.users.some(user=>normalizePhone(user.mobileMoney || "") === mobileMoney)){
alert("Ce numero Mobile Money existe deja. Un meme numero ne peut creer qu'un compte.");
return;
}

const user = {
id:uid("BCCUSER"),
role:"user",
firstName,
lastName,
email,
password,
pin,
birthDate,
mobileMoney,
currency,
language:appSettings.language || "fr",
otpVerified:true,
location:pendingLocation,
acceptedRules:true,
banned:false,
kycStatus:"",
kycFiles:[],
kycImages:[],
mainBalance:0,
rewardBalance:0,
monthlyUsed:0,
verified:false,
transactions:[],
missionStats:{validated:0,pending:0,rejected:0,earned:0},
referrals:0,
referredBy,
xp:0,
missionSubmissions:[],
nextScratchAt:0,
nextSpinAt:0,
createdAt:nowText()
};

state.users.push(user);
if(referredBy){
const sponsor = state.users.find(item=>item.id === referredBy);
if(sponsor){
sponsor.referrals += 1;
state.settings.referrals.unshift({
id:uid("REF"),
sponsorId:sponsor.id,
sponsorName:`${sponsor.firstName} ${sponsor.lastName}`,
joinedId:user.id,
joinedName:`${user.firstName} ${user.lastName}`,
date:nowText()
});
notifyUser(sponsor,"Nouveau parrainage",`${user.firstName} ${user.lastName} a rejoint avec votre lien.`,"referral");
notifyAdmins("Invitation par lien",`${sponsor.firstName} ${sponsor.lastName} (${sponsor.id}) a invite ${user.firstName} ${user.lastName} (${user.id}).`,"referral");
}
}
saveState();
addActivity("register",`${firstName} ${lastName} a cree un compte`,user.id);
setSession({type:"user",id:user.id});
currentUser = user;
showWelcomeNewShareholder();
});

document.getElementById("loginForm").addEventListener("submit",(event)=>{
event.preventDefault();

const email = document.getElementById("loginEmail").value.trim().toLowerCase();
const password = document.getElementById("loginPassword").value;
const remember = document.getElementById("rememberLogin").checked;
const admin = adminAccounts.find(item=>item.email === email && item.password === password);

if(admin){
if(admin.adminBlocked){
alert("Ce sous-admin est bloque par l'admin principal.");
return;
}
if(remember){
localStorage.setItem(REMEMBER_KEY,JSON.stringify({email,password}));
}else{
localStorage.removeItem(REMEMBER_KEY);
}
setSession({type:"admin",id:admin.id});
currentUser = admin;
showAdmin();
return;
}

const user = state.users.find(item=>item.email === email && item.password === password);

if(user){
if(user.banned){
alert("Compte banni. Contactez le support.");
return;
}
if(remember){
localStorage.setItem(REMEMBER_KEY,JSON.stringify({email,password}));
}else{
localStorage.removeItem(REMEMBER_KEY);
}
setSession({type:"user",id:user.id});
currentUser = user;
showUser();
return;
}

alert("Identifiants incorrects.");
});

document.getElementById("forgotPasswordBtn").addEventListener("click",()=>{
openModal(`
<h2>Mot de passe oublie</h2>
<input id="forgotEmail" type="email" placeholder="Votre adresse email">
<input id="forgotMobile" type="tel" placeholder="Numero Mobile Money du compte">
<input id="forgotOtp" inputmode="numeric" maxlength="6" placeholder="Code OTP recu par email/SMS">
<button class="main-btn" id="confirmForgotBtn" style="width:100%;margin-top:16px">Envoyer la requete admin</button>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);

setTimeout(()=>{
document.getElementById("confirmForgotBtn").addEventListener("click",()=>{
const email = document.getElementById("forgotEmail").value.trim().toLowerCase();
const mobile = normalizePhone(document.getElementById("forgotMobile").value.trim());
const otp = document.getElementById("forgotOtp").value.trim();
const user = state.users.find(item=>item.email === email && normalizePhone(item.mobileMoney || "") === mobile);
if(!user){
alert("Aucun compte ne correspond a cet email et ce numero.");
return;
}
if(!/^\d{6}$/.test(otp)){
alert("OTP invalide. Entrez le code a 6 chiffres.");
return;
}
state.settings.passwordRequests.unshift({
id:uid("PWD"),
userId:user.id,
email:user.email,
mobile:user.mobileMoney,
otp,
status:"pending",
date:nowText()
});
notifyAdmins("Requete mot de passe oublie",`${user.email} demande une assistance avec OTP ${otp}.`,"security");
saveState();
addActivity("support",`${email} a envoye une requete mot de passe oublie`,user.id);
alert("Requete envoyee a l'administration. Vous recevrez une assistance.");
closeModal();
});
},100);
});

function showUser(){
showOnly(userDashboard);
renderUserDashboard();
}

function showWelcomeNewShareholder(){
showOnly(authWall);
authWall.innerHTML = `
<div class="welcome-shareholder">
<div class="welcome-bcc">BCC</div>
<h1>BIENVENU NOUVEAU ACTIONNAIRE DE BCC</h1>
<h2>BABY CASH COIN</h2>
</div>
`;
setTimeout(showUser,2800);
}

function getUserRef(){
return state.users.find(user=>user.id === currentUser.id);
}

function syncCurrentUser(){
if(session && session.type === "user"){
currentUser = getUserRef();
if(currentUser){
currentUser.lastSeen = Date.now();
saveState();
}
}
}

function renderUserDashboard(){
syncCurrentUser();
if(state.settings.globalMaintenance && !globalMaintenanceShown){
globalMaintenanceShown = true;
openModal(`
<h2>Maintenance BABY CASH COIN</h2>
<p style="margin-top:12px">${state.settings.maintenanceMessage || "Une maintenance est en cours sur les blocs du site."}</p>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);
}
if(currentUser.language){
appSettings.language = currentUser.language;
appSettings.languageName = languages.find(item=>item[0] === currentUser.language)?.[1] || appSettings.languageName || "Francais";
saveAppSettings();
}
document.getElementById("userWelcome").innerText = `Bonjour ${currentUser.firstName}`;
document.getElementById("userUniqueId").innerText = currentUser.id;
document.getElementById("settingsEmail").innerText = currentUser.email;
const referralInput = document.getElementById("referralLinkInput");
if(referralInput){
referralInput.value = `${window.location.origin}${window.location.pathname}?ref=${currentUser.id}`;
}
updateBalance();
renderTransactions();
renderMissionStats();
renderMissions();
renderKyc();
renderSupportRequests();
updateNotificationBadge();
updateRewardCountdown();
applyLanguage();
}

document.querySelectorAll(".nav-item").forEach(btn=>{
btn.addEventListener("click",()=>{
document.querySelectorAll(".page").forEach(page=>page.classList.remove("active-page"));
document.querySelectorAll(".nav-item").forEach(nav=>nav.classList.remove("active-nav"));
document.getElementById(btn.dataset.page).classList.add("active-page");
btn.classList.add("active-nav");
renderUserDashboard();
});
});

function updateBalance(){
syncCurrentUser();
const balanceText = document.getElementById("balanceText");
const cfaText = document.getElementById("cfaText");
const level = getLevelInfo(currentUser);
currentUser.xp = level.xp;

if(visibleBalance){
balanceText.innerText = currentUser.mainBalance;
cfaText.innerText = `1 BCC = 1 FCFA | ${formatCurrencyFromBcc(currentUser.mainBalance,currentUser)}`;
}else{
balanceText.innerText = "****";
cfaText.innerText = "****";
}

document.getElementById("rewardBalance").innerText = `${currentUser.rewardBalance} BCC`;
document.getElementById("settingsMainBalance").innerText = currentUser.mainBalance;
document.getElementById("settingsRewardBalance").innerText = currentUser.rewardBalance;
document.getElementById("settingsUsedBalance").innerText = currentUser.monthlyUsed;
document.getElementById("levelBadge").innerText = `${level.badge}`;
document.getElementById("levelName").innerText = `Niveau ${level.level} - ${level.name}`;
document.getElementById("levelPercent").innerText = `${level.xp.toFixed(1)}%`;
document.getElementById("xpFill").style.width = `${level.xp}%`;
}

document.getElementById("toggleBalance").addEventListener("click",()=>{
visibleBalance = !visibleBalance;
document.getElementById("toggleBalance").innerHTML = visibleBalance
? '<i class="fa-regular fa-eye"></i>'
: '<i class="fa-regular fa-eye-slash"></i>';
updateBalance();
});

document.getElementById("themeToggle").addEventListener("click",()=>{
document.body.classList.toggle("dark");
document.getElementById("themeToggle").innerHTML = document.body.classList.contains("dark")
? '<i class="fa-solid fa-sun"></i>'
: '<i class="fa-solid fa-moon"></i>';
});

function renderTransactions(){
syncCurrentUser();
const list = document.getElementById("transactionHistory");
const title = document.getElementById("historyTitle");
const emptyText = document.getElementById("historyEmptyText");
const moreBtn = document.getElementById("historyMoreBtn");
const searchInput = document.getElementById("historySearchInput");
const search = (searchInput?.value || "").toLowerCase();

if(currentUser.transactions.length === 0){
title.innerText = "Aucune transaction";
emptyText.classList.remove("hidden");
list.innerHTML = "";
moreBtn.classList.add("hidden");
searchInput?.classList.add("hidden");
return;
}

title.innerText = "Historique des transactions";
emptyText.classList.add("hidden");
searchInput?.classList.remove("hidden");
const filteredTransactions = currentUser.transactions.filter(item=>`${item.name} ${item.amount} ${item.fees} ${item.status} ${item.date}`.toLowerCase().includes(search));
const visibleTransactions = historyExpanded ? filteredTransactions : filteredTransactions.slice(0,5);
list.innerHTML = visibleTransactions.map(item=>`
<div class="history-item">
<strong>${item.name}</strong>
<span class="${item.type === "mission_gain" ? "gain-green" : ""}">Montant : ${item.type === "mission_gain" ? "+" : ""}${item.amount} BCC</span>
<span>Frais : ${item.fees} BCC</span>
<span>Status : ${item.status || "valide"}</span>
<span>${item.date}</span>
</div>
`).join("");
moreBtn.classList.toggle("hidden",filteredTransactions.length <= 5);
moreBtn.innerText = historyExpanded ? "Voir moins" : "Voir plus";
}

document.getElementById("historySearchInput")?.addEventListener("input",()=>{
historyExpanded = false;
renderTransactions();
});

document.getElementById("historyMoreBtn").addEventListener("click",()=>{
historyExpanded = !historyExpanded;
renderTransactions();
});

function askPin(actionName,onSuccess){
openModal(`
<h2>Verification PIN</h2>
<p style="margin-top:12px">${actionName}</p>
<input id="pinCheckInput" type="password" maxlength="6" placeholder="Votre PIN 6 chiffres">
<button class="main-btn" id="confirmPinBtn" style="width:100%;margin-top:16px">Valider</button>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);

setTimeout(()=>{
document.getElementById("confirmPinBtn").addEventListener("click",()=>{
const pin = document.getElementById("pinCheckInput").value.trim();
syncCurrentUser();
if(pin !== currentUser.pin){
alert("PIN incorrect.");
return;
}
closeModal();
onSuccess();
});
},100);
}
document.getElementById("sendBtn").addEventListener("click",()=>{
askPin("Action sensible : envoyer des BCC",openSendModal);
});

function openSendModal(){
openModal(`
<h2>Envoyer BCC</h2>
<input id="sendName" placeholder="Nom du destinataire">
<input id="sendId" placeholder="ID BCC destinataire">
<input id="sendAmount" type="number" placeholder="Montant BCC">
<p style="margin-top:15px">Frais d'envoi : 0.5%</p>
<button class="main-btn" id="confirmSendBtn" style="width:100%;margin-top:20px">Confirmer</button>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);

setTimeout(()=>{
document.getElementById("confirmSendBtn").addEventListener("click",()=>{
const amount = parseFloat(document.getElementById("sendAmount").value);
const recipientName = document.getElementById("sendName").value.trim() || "Destinataire";
const fees = amount * 0.005;

syncCurrentUser();
if(!amount || amount <= 0){
alert("Montant invalide");
return;
}

if(amount + fees > currentUser.mainBalance){
alert("Solde insuffisant");
return;
}

if(!canUseMonthlyLimit(currentUser,amount)){
alert("Plafond mensuel atteint. Faites valider votre KYC pour augmenter votre plafond.");
return;
}

currentUser.mainBalance -= amount + fees;
currentUser.monthlyUsed += amount;
state.settings.feesBalance += fees;

const transaction = {
id:uid("TX"),
name:recipientName,
amount:amount.toFixed(2),
fees:fees.toFixed(2),
date:nowText(),
type:"send",
status:"valide"
};

currentUser.transactions.unshift(transaction);
state.transactions.unshift({...transaction,userId:currentUser.id});
markSensitiveTransaction(currentUser,"Transaction sensible","Envoi BCC effectue. Si ce n'est pas vous, contactez le support.");
saveState();
addActivity("transaction",`${currentUser.email} a envoye ${amount} BCC`,currentUser.id);
renderUserDashboard();

openModal(`
<h2>Transfert effectue</h2>
<p style="margin-top:15px">Montant envoye : ${amount} BCC</p>
<p style="margin-top:10px">Frais : ${fees.toFixed(2)} BCC</p>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);
});
},100);
}

document.getElementById("receiveBtn").addEventListener("click",()=>{
syncCurrentUser();
openModal(`
<h2>Recevoir</h2>
<div class="receive-id-box">${currentUser.id}</div>
<button class="main-btn" id="copyIdBtn" style="width:100%;margin-top:20px">Copier ID</button>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);

setTimeout(()=>{
document.getElementById("copyIdBtn").addEventListener("click",()=>{
navigator.clipboard.writeText(currentUser.id);
alert("ID copie");
});
},100);
});

document.getElementById("convertBtn").addEventListener("click",()=>{
askPin("Action sensible : convertir des BCC",()=>{
openModal(`
<h2>Convertir</h2>
<select id="withdrawOperator">
<option>🔵 Wave</option>
<option>🟠 Orange Money</option>
<option>🟡 MTN Money</option>
<option>🟢 Moov Money</option>
</select>
<input id="withdrawNumber" placeholder="Numero mobile money">
<input id="withdrawAmount" type="number" placeholder="Montant minimum 5000 BCC">
<div class="fee-estimate">
<p>Minimum : 5000 BCC = <strong>${formatCurrencyFromBcc(5000,currentUser)}</strong></p>
<p id="withdrawCurrencyPreview">Montant choisi : 0 BCC = ${formatCurrencyFromBcc(0,currentUser)}</p>
<p id="operatorFeePreview">Frais operateur 1% : 0 BCC = ${formatCurrencyFromBcc(0,currentUser)}</p>
<p id="bccFeePreview">Frais BCC 0.75% : 0 BCC = ${formatCurrencyFromBcc(0,currentUser)}</p>
</div>
<button class="main-btn" id="confirmWithdrawBtn" style="width:100%;margin-top:20px">Valider</button>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);

setTimeout(()=>{
const amountInput = document.getElementById("withdrawAmount");
const refreshWithdrawPreview = ()=>{
const value = Number(amountInput.value || "0");
const operatorFees = value * 0.01;
const bccFees = value * 0.0075;
document.getElementById("withdrawCurrencyPreview").innerText = `Montant choisi : ${value.toFixed(2)} BCC = ${formatCurrencyFromBcc(value,currentUser)}`;
document.getElementById("operatorFeePreview").innerText = `Frais operateur 1% : ${operatorFees.toFixed(2)} BCC = ${formatCurrencyFromBcc(operatorFees,currentUser)}`;
document.getElementById("bccFeePreview").innerText = `Frais BCC 0.75% : ${bccFees.toFixed(2)} BCC = ${formatCurrencyFromBcc(bccFees,currentUser)}`;
};
amountInput.addEventListener("input",refreshWithdrawPreview);
refreshWithdrawPreview();
document.getElementById("confirmWithdrawBtn").addEventListener("click",()=>{
syncCurrentUser();
const operator = document.getElementById("withdrawOperator").value;
const number = normalizePhone(document.getElementById("withdrawNumber").value.trim());
const amount = Number(document.getElementById("withdrawAmount").value || "0");
if(number !== normalizePhone(currentUser.mobileMoney || "")){
alert("Retrait refuse : utilisez le numero Mobile Money inscrit sur votre compte.");
return;
}
if(amount < 5000){
alert("Le retrait minimum est 5000 BCC.");
return;
}
if(amount > currentUser.mainBalance){
alert("Solde insuffisant.");
return;
}
const bccFees = amount * 0.0075;
const operatorFees = amount * 0.01;
if(amount + bccFees > currentUser.mainBalance){
alert("Solde insuffisant avec les frais BCC de conversion.");
return;
}
if(!canUseMonthlyLimit(currentUser,amount)){
alert("Plafond mensuel atteint. Faites valider votre KYC pour augmenter votre plafond.");
return;
}
currentUser.mainBalance -= amount + bccFees;
currentUser.monthlyUsed += amount;
state.settings.feesBalance += bccFees;
const withdrawal = {
id:uid("WDR"),
userId:currentUser.id,
email:currentUser.email,
operator,
number,
amount,
amountCurrency:formatCurrencyFromBcc(amount,currentUser),
operatorFees,
operatorFeesCurrency:formatCurrencyFromBcc(operatorFees,currentUser),
bccFees,
bccFeesCurrency:formatCurrencyFromBcc(bccFees,currentUser),
status:"pending",
date:nowText()
};
state.settings.withdrawals.unshift(withdrawal);
currentUser.transactions.unshift({
id:withdrawal.id,
name:"Retrait en attente",
amount:amount.toFixed(2),
fees:bccFees.toFixed(2),
date:withdrawal.date,
type:"withdrawal",
status:"en attente"
});
state.transactions.unshift({...withdrawal,type:"withdrawal",name:"Retrait Mobile Money",fees:bccFees.toFixed(2)});
markSensitiveTransaction(currentUser,"Conversion en verification",`Demande de conversion/retrait de ${amount} BCC en attente admin.`);
saveState();
addActivity("withdrawal",`${currentUser.email} demande un retrait de ${amount} BCC`,currentUser.id);
renderUserDashboard();
openModal(`
<h2>Retrait envoye</h2>
<p style="margin-top:15px">Votre demande est en attente de validation admin.</p>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);
});
},100);
});
});

document.getElementById("scanBtn").addEventListener("click",async()=>{
try{
const stream = await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});
currentStream = stream;
openModal(`
<h2>Scanner QR</h2>
<video id="scannerVideo" autoplay playsinline style="width:100%;height:260px;border-radius:20px;margin-top:20px;background:black;object-fit:cover;"></video>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);
document.getElementById("scannerVideo").srcObject = stream;
}catch(error){
alert("Acces camera refuse");
}
});

function stopCamera(){
if(currentStream){
currentStream.getTracks().forEach(track=>track.stop());
currentStream = null;
}
}

function updateNotificationBadge(){
const badge = document.getElementById("notifCountBadge");
if(!badge || !currentUser || session?.type !== "user"){
return;
}
const count = (currentUser.notifications || []).filter(item=>!item.read).length;
badge.innerText = count > 99 ? "99+" : String(count);
badge.classList.toggle("hidden",count === 0);
}

document.querySelector(".notif-btn").addEventListener("click",()=>{
syncCurrentUser();
const notifications = currentUser.notifications || [];
openModal(`
<h2>Notifications</h2>
<div style="margin-top:15px;display:grid;gap:10px">
${notifications.length ? notifications.map(item=>`
<div class="notification-item">
<strong>${item.title}</strong>
<span>${item.message}</span>
<small>${item.date}</small>
</div>
`).join("") : `<p>Aucune notification</p>`}
</div>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);
notifications.forEach(item=>item.read = true);
saveState();
updateNotificationBadge();
});

document.getElementById("dailyMissionBtn").addEventListener("click",()=>{
const media = Array.isArray(state.rewardSettings.media) ? state.rewardSettings.media : [];
openModal(`
<h2>Mission du jour</h2>
<div class="daily-media-feed">
${media.map(item=>item.type === "video"
? `<video class="daily-media-item" src="${item.src}" controls playsinline></video>`
: `<img class="daily-media-item" src="${item.src}" alt="${item.name || "Contenu admin"}">`
).join("") || `<div class="list-row">Aucun media pour le moment</div>`}
</div>
<p style="margin-top:15px">${state.rewardSettings.dailyText}</p>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);
});

function renderMissions(){
recycleExpiredMissions();
const list = document.getElementById("missionList");
const badge = document.getElementById("missionMaintenanceBadge");
const message = document.getElementById("missionMaintenanceMessage");

if(state.settings.missionMaintenance){
badge.classList.remove("hidden");
message.classList.remove("hidden");
message.innerText = state.settings.maintenanceMessage || "La section mission est temporairement en maintenance.";
list.innerHTML = "";
return;
}

badge.classList.add("hidden");
message.classList.add("hidden");
list.innerHTML = state.missions.filter(mission=>mission.status === "active").map(mission=>`
<div class="mission-group">
${mission.image ? `<img class="mission-cover" src="${mission.image}" alt="${mission.title}">` : ""}
<h3>${mission.title}</h3>
${mission.link ? `<p>Lien : <a href="${mission.link}" target="_blank" rel="noopener">Ouvrir la mission</a></p>` : ""}
<p>Gain : <span class="gain-green">+${mission.gain} BCC</span></p>
<p>Duree : ${mission.duration}</p>
<p>Conditions : ${mission.conditions}</p>
<p>Statut : <span class="status-pill ${currentUser.missionSubmissions.find(item=>item.missionId === mission.id)?.status || "unused"}">${missionStatusLabel(currentUser.missionSubmissions.find(item=>item.missionId === mission.id)?.status || "unused")}</span></p>
${mission.validation === "manual" ? `<input type="file" accept="image/*" class="mission-proof-input" data-proof-input="${mission.id}">` : ""}
<button class="mission-btn" data-mission-id="${mission.id}">COMMENCER</button>
</div>
`).join("");

document.querySelectorAll("[data-mission-id]").forEach(button=>{
button.addEventListener("click",()=>{
const mission = state.missions.find(item=>item.id === button.dataset.missionId);
askPin("Action sensible : faire une mission",()=>{
if(!canUseMonthlyLimit(currentUser,Number(mission.gain || 0))){
alert("Votre plafond mensuel est atteint. Validez votre KYC pour continuer les missions.");
return;
}
if(mission.link){
window.open(mission.link,"_blank");
}
syncCurrentUser();
const existingSubmission = currentUser.missionSubmissions.find(item=>item.missionId === mission.id && ["pending","validated"].includes(item.status));
if(existingSubmission){
alert(`Mission deja envoyee. Statut : ${missionStatusLabel(existingSubmission.status)}.`);
return;
}
if(mission.validation === "auto"){
currentUser.mainBalance += mission.gain;
currentUser.missionStats.validated += 1;
currentUser.missionStats.earned += mission.gain;
currentUser.xp = calculateUserXp(currentUser);
const transaction = {
id:uid("TX"),
name:`Gain mission : ${mission.title}`,
amount:Number(mission.gain).toFixed(2),
fees:"0.00",
date:nowText(),
type:"mission_gain",
status:"reussi"
};
currentUser.transactions.unshift(transaction);
state.transactions.unshift({...transaction,userId:currentUser.id});
notifyUser(currentUser,"Mission valide",`La mission ${mission.title} est validee automatiquement. +${mission.gain} BCC`,"mission");
saveState();
addActivity("mission",`${currentUser.email} a reussi automatiquement ${mission.title}`,currentUser.id);
renderUserDashboard();
openModal(`
<h2>Mission reussie</h2>
<p class="gain-green" style="margin-top:15px">+${mission.gain} BCC</p>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);
return;
}

const proofInput = document.querySelector(`[data-proof-input="${mission.id}"]`);
const proofFile = proofInput && proofInput.files[0];
if(!proofFile){
alert("Ajoutez une capture preuve avant d'envoyer la mission.");
return;
}

fileToDataUrl(proofFile).then(proofImage=>{
currentUser.missionStats.pending += 1;
const submission = {
id:uid("SUB"),
missionId:mission.id,
title:mission.title,
gain:mission.gain,
status:"pending",
proofName:proofFile.name,
proofImage,
date:nowText()
};
currentUser.missionSubmissions.unshift(submission);
state.missionProofs.unshift({...submission,userId:currentUser.id,email:currentUser.email});
notifyUser(currentUser,"Mission en verification",`Votre mission ${mission.title} est en verification.`,"mission");
notifyAdmins("Mission en verification",`${currentUser.email} a envoye une preuve pour ${mission.title}`,"mission");
saveState();
addActivity("mission",`${currentUser.email} a envoye une mission en attente`,currentUser.id);
renderUserDashboard();
openModal(`
<h2>Mission envoyee</h2>
<p style="margin-top:15px">Votre mission est maintenant en attente de validation.</p>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);
});
});
});
});
}

function renderMissionStats(){
syncCurrentUser();
document.getElementById("missionValidated").innerText = currentUser.missionStats.validated;
document.getElementById("missionPending").innerText = currentUser.missionStats.pending;
document.getElementById("missionRejected").innerText = currentUser.missionStats.rejected;
document.getElementById("missionEarned").innerText = currentUser.missionStats.earned;
}

document.getElementById("startKycBtn").addEventListener("click",()=>{
document.getElementById("kycUpload").click();
});

document.getElementById("kycUpload").addEventListener("change",(event)=>{
syncCurrentUser();
if(event.target.files.length === 0){
return;
}

Promise.all(Array.from(event.target.files).map(async file=>({
name:file.name,
data:await fileToDataUrl(file)
}))).then(files=>{
currentUser.kycStatus = "pending";
currentUser.kycFiles = files.map(file=>file.name);
currentUser.kycImages = files;
state.kycRequests.unshift({
id:uid("KYC"),
userId:currentUser.id,
email:currentUser.email,
files:currentUser.kycFiles,
images:files,
status:"pending",
date:nowText()
});
saveState();
addActivity("kyc",`${currentUser.email} a envoye ses fichiers KYC`,currentUser.id);
renderKyc();
});
});

function renderKyc(){
syncCurrentUser();
const status = document.getElementById("kycStatus");

if(!currentUser.kycStatus){
status.classList.add("hidden");
status.innerText = "";
return;
}

status.classList.remove("hidden");
status.innerText = currentUser.kycStatus === "pending"
? "En attente"
: currentUser.kycStatus === "validated"
? "Identite validee"
: "Identite refusee";
}

function renderSupportRequests(){
syncCurrentUser();
const list = document.getElementById("supportRequestList");
if(!list){
return;
}
const requests = state.supportRequests.filter(item=>item.userId === currentUser.id);
list.innerHTML = requests.length ? requests.map(item=>`
<div class="support-request-item">
<strong>${item.status}</strong>
<span>${item.message}</span>
${item.reply ? `<span>Reponse : ${item.reply}</span>` : ""}
<small>${item.date}</small>
</div>
`).join("") : "";
}

document.getElementById("sendSupportRequestBtn").addEventListener("click",()=>{
syncCurrentUser();
const input = document.getElementById("supportRequestText");
const message = input.value.trim();
if(!message){
alert("Ecrivez votre requete.");
return;
}
state.supportRequests.unshift({
id:uid("SUP"),
userId:currentUser.id,
email:currentUser.email,
message,
status:"en attente",
reply:"",
date:nowText()
});
notifyAdmins("Nouvelle requete assistance",`${currentUser.email} : ${message}`,"support");
saveState();
addActivity("support",`${currentUser.email} a envoye une requete assistance`,currentUser.id);
input.value = "";
renderSupportRequests();
alert("Requete envoyee au service assistance.");
});

document.getElementById("copyReferralBtn")?.addEventListener("click",()=>{
const input = document.getElementById("referralLinkInput");
if(!input || !input.value){
return;
}
navigator.clipboard.writeText(input.value);
alert("Lien de parrainage copie.");
});

function changeSensitive(type){
const titles = {
pin:"Modifier PIN",
email:"Modifier Email",
password:"Changer Mot de Passe"
};

const oldLabel = type === "email" ? "Ancien email" : type === "pin" ? "Ancien PIN" : "Ancien mot de passe";
const newLabel = type === "email" ? "Nouvel email" : type === "pin" ? "Nouveau PIN 6 chiffres" : "Nouveau mot de passe";

openModal(`
<h2>${titles[type]}</h2>
<input id="oldSensitiveValue" type="${type === "email" ? "email" : "password"}" placeholder="${oldLabel}">
<input id="newSensitiveValue" type="${type === "email" ? "email" : "password"}" placeholder="${newLabel}">
<button class="main-btn" id="saveSensitiveBtn" style="width:100%;margin-top:16px">Enregistrer</button>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);

setTimeout(()=>{
document.getElementById("saveSensitiveBtn").addEventListener("click",()=>{
syncCurrentUser();
const oldValue = document.getElementById("oldSensitiveValue").value.trim();
const newValue = document.getElementById("newSensitiveValue").value.trim();

if(type === "pin" && oldValue !== currentUser.pin){
alert("Ancien PIN incorrect.");
return;
}

if(type === "email" && oldValue.toLowerCase() !== currentUser.email){
alert("Ancien email incorrect.");
return;
}

if(type === "password" && oldValue !== currentUser.password){
alert("Ancien mot de passe incorrect.");
return;
}

if(type === "pin" && !/^\d{6}$/.test(newValue)){
alert("Le nouveau PIN doit contenir 6 chiffres.");
return;
}

if(type === "email" && !newValue.includes("@")){
alert("Email invalide.");
return;
}

if(type === "password" && newValue.length < 6){
alert("Mot de passe trop court.");
return;
}

currentUser[type] = type === "email" ? newValue.toLowerCase() : newValue;
saveState();
addActivity("security",`${currentUser.email} a modifie ${type}`,currentUser.id);
renderUserDashboard();
alert("Modification effectuee.");
closeModal();
});
},100);
}

document.getElementById("changePinBtn").addEventListener("click",()=>changeSensitive("pin"));
document.getElementById("changeEmailBtn").addEventListener("click",()=>changeSensitive("email"));
document.getElementById("changePasswordBtn").addEventListener("click",()=>changeSensitive("password"));

function getTomorrowTimestamp(){
const tomorrow = new Date();
tomorrow.setHours(24,0,0,0);
return tomorrow.getTime();
}

function normalizeRewardSegments(){
const segments = Array.isArray(state.rewardSettings.gains) && state.rewardSettings.gains.length
? state.rewardSettings.gains
: ["0","X2",50,100,200,300,500];
return segments.map(item=>String(item).trim().toUpperCase()).filter(Boolean);
}

function getRewardMediaMarkup(){
const media = Array.isArray(state.rewardSettings.media) ? state.rewardSettings.media : [];
if(media.length === 0){
return "";
}
const direction = state.rewardSettings.mediaDirection === "backward" ? "backward" : "forward";
const layer = direction === "forward" ? "forward" : "";
return `
<div class="reward-media-stage ${layer}">
<div class="reward-media-track ${direction}">
${media.map(item=>item.type === "video"
? `<video src="${item.src}" controls autoplay loop playsinline></video>`
: `<img src="${item.src}" alt="${item.name || "Carte cadeau"}">`
).join("")}
</div>
</div>
`;
}

function renderSpinWheelReady(){
const card = document.getElementById("spinWheelCard");
if(!card){
return;
}
card.classList.remove("scratched");
card.innerHTML = `
${getRewardMediaMarkup()}
<button class="gift-card-button" id="spinWheelBtn" type="button">
<i class="fa-solid fa-gift"></i>
<span>GRATTER MA CARTE</span>
</button>
`;
document.getElementById("spinWheelBtn").addEventListener("click",claimSpinReward);
scratchReady = true;
scratchCompleted = false;
}

function updateRewardCountdown(){
syncCurrentUser();
if(!currentUser || session.type !== "user"){
return;
}

const card = document.getElementById("spinWheelCard");
const nextAt = currentUser.nextSpinAt || currentUser.nextScratchAt || 0;
const remaining = nextAt - Date.now();

if(remaining <= 0){
document.getElementById("rewardCountdown").innerText = "";
if(!scratchReady && !scratchCompleted){
renderSpinWheelReady();
}
return;
}

const hours = Math.floor(remaining / 3600000);
const minutes = Math.floor((remaining % 3600000) / 60000);
const seconds = Math.floor((remaining % 60000) / 1000);
document.getElementById("rewardCountdown").innerText = `Reviens la semaine prochaine - ${hours}h ${minutes}m ${seconds}s`;
scratchReady = false;
if(card){
card.classList.add("scratched");
card.innerHTML = `
${getRewardMediaMarkup()}
<div class="gift-result-face">
<span class="gift-label">BABY CASH COIN</span>
<strong>Carte cadeau deja grattee</strong>
<small>Reviens la semaine prochaine</small>
</div>
`;
}
}

function rewardValue(segment){
if(segment === "X2"){
return Math.max(0,Number(currentUser.rewardBalance || 0));
}
return Number(segment || 0);
}

function claimSpinReward(){
syncCurrentUser();
if(!scratchReady || scratchCompleted){
return;
}
if((currentUser.nextSpinAt || currentUser.nextScratchAt || 0) > Date.now()){
updateRewardCountdown();
return;
}

const segments = normalizeRewardSegments();
const index = Math.floor(Math.random() * segments.length);
const segment = segments[index];
let gain = rewardValue(segment);

if(gain > 0 && state.rewardSettings.pool <= 0){
alert("La recompense globale est terminee.");
return;
}

gain = Math.min(gain,Number(state.rewardSettings.pool || 0));
const button = document.getElementById("spinWheelBtn");

scratchCompleted = true;
scratchReady = false;
button.disabled = true;
button.innerHTML = `<i class="fa-solid fa-gift"></i><span>OUVERTURE...</span>`;

setTimeout(()=>{
state.rewardSettings.pool = Math.max(0,Number(state.rewardSettings.pool || 0) - gain);
currentUser.rewardBalance += gain;
currentUser.nextSpinAt = getWeeklyRewardTimestamp();
currentUser.nextScratchAt = currentUser.nextSpinAt;
saveState();
addActivity("reward",`${currentUser.email} a gagne ${gain} BCC avec la carte cadeau`,currentUser.id);
renderUserDashboard();
document.getElementById("spinWheelCard").innerHTML = `
${getRewardMediaMarkup()}
<div class="gift-result-face">
<span class="gift-label">BABY CASH COIN</span>
<strong>${segment === "X2" ? "X2 ACTIVE" : segment}</strong>
<small>${gain > 0 ? `+${gain} BCC gagnes` : "Pas de gain cette fois"}</small>
</div>
`;
},1200);
}
document.getElementById("transferRewardBtn").addEventListener("click",()=>{
syncCurrentUser();
if(currentUser.rewardBalance <= 0){
alert("Aucune recompense");
return;
}

const amountToTransfer = Number(currentUser.rewardBalance || 0);
currentUser.mainBalance += amountToTransfer;
currentUser.rewardBalance = 0;
const transaction = {
id:uid("TX"),
name:"Transfert recompenses vers solde principal",
amount:Number(amountToTransfer).toFixed(2),
fees:"0.00",
date:nowText(),
type:"reward_transfer",
status:"reussi"
};
currentUser.transactions.unshift(transaction);
state.transactions.unshift({...transaction,userId:currentUser.id});
notifyUser(currentUser,"Recompenses transferees",`${amountToTransfer} BCC ont ete ajoutes au solde principal.`,"reward");
saveState();
addActivity("reward_transfer",`${currentUser.email} a transfere ses recompenses`,currentUser.id);
renderUserDashboard();
openModal(`
<h2>Recompenses transferees</h2>
<p style="margin-top:15px">Le solde principal a ete mis a jour.</p>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);
});

document.getElementById("logoutBtn").addEventListener("click",()=>{
confirmLogout();
});

function confirmLogout(){
openModal(`
<h2>Deconnecter</h2>
<p style="margin-top:15px">Voulez-vous vraiment vous deconnecter ?</p>
<div class="confirm-row">
<button class="main-btn" id="confirmLogoutBtn">Oui</button>
<button class="close-btn" onclick="closeModal()">Non</button>
</div>
`);

setTimeout(()=>{
document.getElementById("confirmLogoutBtn").addEventListener("click",()=>{
localStorage.removeItem("bccSession");
session = null;
currentUser = null;
closeModal();
showOnly(authWall);
});
},100);
}

document.getElementById("levelBadge").addEventListener("click",()=>{
openModal(`
<h2>Niveaux BCC</h2>
<div style="margin-top:20px;display:flex;flex-direction:column;gap:12px;">
<div class="badge">ðŸ¥‰ Niveau 1 a 15 : BRONZE</div>
<div class="badge">ðŸ¥ˆ Niveau 16 a 30 : SILVER</div>
<div class="badge">ðŸ¥‡ Niveau 31 a 45 : GOLD</div>
<div class="badge">ðŸ… Niveau 46 a 50 : PREMIUM</div>
<div class="badge">ðŸŽ– Niveau 51 a 60 : PRO</div>
<div class="badge">ðŸ† Niveau 65+ : SUPER PRO</div>
</div>
<button class="close-btn" onclick="closeModal()">Fermer</button>
`);
});

function showAdmin(){
showOnly(adminDashboard);
document.getElementById("adminRoleText").innerText = currentUser.name;
applyAdminPermissions();
activateFirstAllowedAdminPage();
renderAdmin();
}

function applyAdminPermissions(){
document.querySelectorAll(".admin-nav").forEach(button=>{
const page = button.dataset.adminPage;
const permissionMap = {
adminOverview:"all",
adminMissions:"missions",
adminRewards:"rewards",
adminKyc:"kyc",
adminUsers:"users",
adminPasswordRequests:"support",
adminFinance:"finance",
adminNotifications:"notifications",
adminSupport:"support",
adminSettings:"maintenance"
};
const permission = permissionMap[page];
button.classList.toggle("hidden",!hasPermission(permission) && !hasPermission("all"));
});
}

function activateFirstAllowedAdminPage(){
const visibleNavs = Array.from(document.querySelectorAll(".admin-nav")).filter(button=>!button.classList.contains("hidden"));

document.querySelectorAll(".admin-nav").forEach(nav=>nav.classList.remove("active"));
document.querySelectorAll(".admin-page").forEach(page=>page.classList.remove("active-admin-page"));

if(visibleNavs.length > 0){
visibleNavs[0].classList.add("active");
document.getElementById(visibleNavs[0].dataset.adminPage).classList.add("active-admin-page");
}
}

document.querySelectorAll(".admin-nav").forEach(button=>{
button.addEventListener("click",()=>{
document.querySelectorAll(".admin-nav").forEach(nav=>nav.classList.remove("active"));
document.querySelectorAll(".admin-page").forEach(page=>page.classList.remove("active-admin-page"));
button.classList.add("active");
document.getElementById(button.dataset.adminPage).classList.add("active-admin-page");
renderAdmin();
});
});

document.getElementById("adminLogoutBtn").addEventListener("click",confirmLogout);

["adminMissionSearch","adminKycSearch","adminUserSearch","adminFinanceSearch","adminSupportSearch","adminActivitySearch","adminPasswordSearch"].forEach(id=>{
const input = document.getElementById(id);
if(input){
input.addEventListener("input",renderAdmin);
}
});

document.getElementById("adminWithdrawFeesBtn").addEventListener("click",()=>{
if(currentUser.role !== "main_admin"){
alert("Reserve a l'admin principal.");
return;
}
const number = normalizePhone(document.getElementById("adminFeeWithdrawNumber").value.trim());
const amount = Number(document.getElementById("adminFeeWithdrawAmount").value || "0");
if(number.length < 8){
alert("Numero Mobile Money invalide.");
return;
}
if(amount <= 0 || amount > state.settings.feesBalance){
alert("Montant invalide.");
return;
}
state.settings.feesBalance -= amount;
state.settings.feeWithdrawals.unshift({
id:uid("FEE"),
number,
amount,
date:nowText(),
status:"retire"
});
saveState();
addActivity("fees",`Admin principal a retire ${amount} BCC de frais appli`);
document.getElementById("adminFeeWithdrawAmount").value = "";
renderAdmin();
});

function renderAdmin(){
document.getElementById("adminUserCount").innerText = state.users.length;
document.getElementById("adminOnlineCount").innerText = countOnlineUsers();
document.getElementById("adminIncomingBcc").innerText = getBccFlow("incoming").toFixed(2);
document.getElementById("adminOutgoingBcc").innerText = getBccFlow("outgoing").toFixed(2);
document.getElementById("adminTransactionCount").innerText = state.transactions.length;
document.getElementById("adminPendingMissionCount").innerText = countPendingMissions();
document.getElementById("adminAcceptedMissionCount").innerText = countMissionsByStatus("validated");
document.getElementById("adminRejectedMissionCount").innerText = countMissionsByStatus("rejected");
document.getElementById("adminPendingKycCount").innerText = state.kycRequests.filter(item=>item.status === "pending").length;
document.getElementById("adminOpenSupportCount").innerText = state.supportRequests.filter(item=>item.status !== "cloturee").length;
document.getElementById("adminClosedSupportCount").innerText = state.supportRequests.filter(item=>item.status === "cloturee").length;
document.getElementById("adminFeesBalance").innerText = Number(state.settings.feesBalance || 0).toFixed(2);
document.getElementById("adminRewardPoolView").innerText = Number(state.rewardSettings.pool || 0).toFixed(2);
const globalToggle = document.getElementById("globalMaintenanceToggle");
if(globalToggle){ globalToggle.checked = !!state.settings.globalMaintenance; }
document.querySelectorAll(".main-admin-only").forEach(item=>{
item.classList.toggle("hidden",currentUser.role !== "main_admin");
});
renderAdminActivities();
renderAdminMissions();
renderRewardSettings();
renderAdminKyc();
renderAdminUsers();
renderAdminPasswordRequests();
renderAdminFinance();
renderAdminNotifications();
renderAdminSupport();
renderSubAdmins();
document.getElementById("missionMaintenanceToggle").checked = state.settings.missionMaintenance;
document.getElementById("maintenanceMessageInput").value = state.settings.maintenanceMessage || "";
}

function countOnlineUsers(){
const onlineLimit = Date.now() - 5 * 60 * 1000;
return state.users.filter(user=>Number(user.lastSeen || 0) >= onlineLimit).length;
}

function getBccFlow(direction){
return state.transactions.reduce((total,item)=>{
const amount = Number(item.amount || 0);
if(direction === "incoming" && (item.type === "receive" || item.type === "mission_gain" || item.type === "reward_transfer")){
return total + amount;
}
if(direction === "outgoing" && (item.type === "send" || item.type === "withdrawal")){
return total + amount;
}
return total;
},0);
}

function countPendingMissions(){
return state.users.reduce((total,user)=>total + user.missionSubmissions.filter(item=>item.status === "pending").length,0);
}

function countMissionsByStatus(status){
return state.users.reduce((total,user)=>total + user.missionSubmissions.filter(item=>item.status === status).length,0);
}

function renderAdminActivities(){
const search = (document.getElementById("adminActivitySearch")?.value || "").toLowerCase();
const passwordItems = (state.settings.passwordRequests || []).filter(item=>`${item.email} ${item.mobile} ${item.otp} ${item.status}`.toLowerCase().includes(search));
const referralItems = (state.settings.referrals || []).filter(item=>`${item.sponsorName} ${item.sponsorId} ${item.joinedName} ${item.joinedId}`.toLowerCase().includes(search));
const activityItems = state.activities.filter(item=>`${item.type} ${item.message} ${item.userId} ${item.date}`.toLowerCase().includes(search));
const limit = adminActivitiesExpanded ? 500 : 10;
const passwordRows = passwordItems.slice(0,limit).map(item=>`
<div class="list-row">
<strong>Requete mot de passe oublie</strong>
<span>Email : ${item.email}</span>
<span>Mobile : ${item.mobile}</span>
<span>OTP : ${item.otp}</span>
<span>Status : ${item.status}</span>
<small>${item.date}</small>
</div>
`);
const referralRows = referralItems.slice(0,limit).map(item=>`
<div class="list-row">
<strong>Invitation par lien</strong>
<span>Invite par : ${item.sponsorName} (${item.sponsorId})</span>
<span>A rejoint : ${item.joinedName} (${item.joinedId})</span>
<small>${item.date}</small>
</div>
`);
const activityRows = activityItems.slice(0,limit).map(item=>`
<div class="list-row">
<strong>${item.type}</strong>
<span>${item.message}</span>
<small>${item.date}</small>
</div>
`);
document.getElementById("adminActivityList").innerHTML = [...passwordRows,...referralRows,...activityRows].join("") || `<div class="list-row">Aucune activite</div>`;
const toggle = document.getElementById("toggleAdminActivitiesBtn");
if(toggle){
toggle.innerText = adminActivitiesExpanded ? "Plier les activites" : "Voir toutes les activites";
}
}

document.getElementById("toggleAdminActivitiesBtn")?.addEventListener("click",()=>{
adminActivitiesExpanded = !adminActivitiesExpanded;
renderAdminActivities();
});

document.getElementById("exportAdminOverviewPdfBtn")?.addEventListener("click",()=>{
window.print();
});

document.getElementById("resetAdminOverviewBtn")?.addEventListener("click",()=>{
if(currentUser.role !== "main_admin"){
alert("Reserve a l'admin principal.");
return;
}
state.settings.savedReports = state.settings.savedReports || [];
state.settings.savedReports.unshift({
id:uid("RPT"),
date:nowText(),
activities:[...state.activities],
transactions:[...state.transactions],
withdrawals:[...(state.settings.withdrawals || [])],
supportRequests:[...state.supportRequests],
passwordRequests:[...(state.settings.passwordRequests || [])]
});
state.activities = [];
state.transactions = [];
state.settings.withdrawals = [];
state.supportRequests = [];
state.settings.passwordRequests = [];
state.kycRequests = [];
state.missionProofs = [];
saveState();
renderAdmin();
alert("Donnees enregistrees a part et compteurs remis a zero.");
});

function renderAdminMissions(){
const search = (document.getElementById("adminMissionSearch")?.value || "").toLowerCase();
const proofs = state.missionProofs.filter(proof=>`${proof.email} ${proof.title} ${proof.status}`.toLowerCase().includes(search));
const missions = state.missions.filter(mission=>`${mission.title} ${mission.link} ${mission.status} ${mission.conditions}`.toLowerCase().includes(search));

document.getElementById("adminMissionList").innerHTML = [
...missions.map(mission=>`
<div class="list-row">
<strong>${mission.title}</strong>
${mission.image ? `<img class="proof-preview" src="${mission.image}" alt="${mission.title}">` : ""}
<span class="status-pill ${mission.status}">${missionStatusLabel(mission.status)}</span>
<span>Lien : ${mission.link || "Aucun lien"}</span>
<span>Gain : <span class="gain-green">+${mission.gain} BCC</span></span>
<span>Duree : ${mission.duration}</span>
<span>Validation : ${mission.validation === "auto" ? "directe" : "manuelle"}</span>
<span>Conditions : ${mission.conditions}</span>
<div class="row-actions">
<button class="small-btn danger-btn" data-delete-mission="${mission.id}">Supprimer puis enregistrer</button>
</div>
</div>
`),
...proofs.map(proof=>`
<div class="list-row">
<strong>Preuve mission : ${proof.title}</strong>
<span>Email : ${proof.email}</span>
<span>Gain : <span class="gain-green">+${proof.gain} BCC</span></span>
<span class="status-pill ${proof.status}">${missionStatusLabel(proof.status)}</span>
<small>${proof.date}</small>
${proof.proofImage ? `<img class="proof-preview" src="${proof.proofImage}" alt="Preuve mission">` : ""}
<div class="row-actions">
<button class="small-btn" data-mission-valid="${proof.id}">Accepter et enregistrer</button>
<button class="small-btn danger-btn" data-mission-reject="${proof.id}">Refuser et enregistrer</button>
</div>
</div>
`)
].join("") || `<div class="list-row">Aucune mission ou preuve</div>`;

document.querySelectorAll("[data-delete-mission]").forEach(button=>{
button.addEventListener("click",()=>{
state.missions = state.missions.filter(mission=>mission.id !== button.dataset.deleteMission);
saveState();
addActivity("admin",`${currentUser.email} a supprime une mission`);
renderAdmin();
});
});

document.querySelectorAll("[data-mission-valid]").forEach(button=>{
button.addEventListener("click",()=>updateMissionProof(button.dataset.missionValid,"validated"));
});

document.querySelectorAll("[data-mission-reject]").forEach(button=>{
button.addEventListener("click",()=>updateMissionProof(button.dataset.missionReject,"rejected"));
});
}

document.getElementById("saveMissionBtn").addEventListener("click",async()=>{
if(!hasPermission("missions") && !hasPermission("all")){
alert("Permission refusee.");
return;
}

const title = document.getElementById("adminMissionTitle").value.trim();
const linkText = document.getElementById("adminMissionLink").value.trim();
const gain = Number(document.getElementById("adminMissionGain").value || "0");
const duration = document.getElementById("adminMissionDuration").value.trim();
const validation = document.getElementById("adminMissionValidation").value;
const queueTarget = document.getElementById("adminMissionQueueTarget").value;
const conditions = document.getElementById("adminMissionConditions").value.trim();
const imageFile = document.getElementById("adminMissionImage").files[0];

if(!title){
alert("Titre obligatoire.");
return;
}

const image = imageFile ? await fileToDataUrl(imageFile) : "";
const links = linkText.split(/\r?\n/).map(item=>item.trim()).filter(Boolean);
const missionLinks = links.length ? links : [""];
const missions = missionLinks.map((missionLink,index)=>({
id:uid("MIS"),
title:missionLinks.length > 1 ? `${title} ${index + 1}` : title,
link:missionLink,
gain,
duration:duration || "0 min",
conditions:conditions || "Conditions admin",
validation,
image,
expiresAt:(queueTarget === "timer" && index === 0) || queueTarget === "active" ? getMissionExpiry(duration || "0 min") : 0,
status:queueTarget === "timer" ? (index === 0 ? "active" : "queue") : queueTarget
}));
state.missions.unshift(...missions);
saveState();
addActivity("admin",`${currentUser.email} a ajoute ${missions.length} mission(s) depuis ${title}`);
document.getElementById("adminMissionTitle").value = "";
document.getElementById("adminMissionLink").value = "";
document.getElementById("adminMissionGain").value = "";
document.getElementById("adminMissionDuration").value = "";
document.getElementById("adminMissionConditions").value = "";
document.getElementById("adminMissionImage").value = "";
renderAdmin();
});

function updateMissionProof(id,status){
if(!hasPermission("missions") && !hasPermission("finance") && !hasPermission("kyc") && !hasPermission("all")){
alert("Permission refusee.");
return;
}

const proof = state.missionProofs.find(item=>item.id === id);
if(!proof || proof.status !== "pending"){
return;
}

const user = state.users.find(item=>item.id === proof.userId);
const userSubmission = user.missionSubmissions.find(item=>item.id === id);
proof.status = status;
if(userSubmission){
userSubmission.status = status;
}
user.missionStats.pending = Math.max(0,user.missionStats.pending - 1);

if(status === "validated"){
user.mainBalance += Number(proof.gain);
user.missionStats.validated += 1;
user.missionStats.earned += Number(proof.gain);
user.xp = calculateUserXp(user);
const transaction = {
id:uid("TX"),
name:`Gain mission : ${proof.title}`,
amount:Number(proof.gain).toFixed(2),
fees:"0.00",
date:nowText(),
type:"mission_gain",
status:"reussi"
};
user.transactions.unshift(transaction);
state.transactions.unshift({...transaction,userId:user.id});
notifyUser(user,"Mission valide",`Votre mission ${proof.title} est acceptee. +${proof.gain} BCC`,"mission");
}else{
user.missionStats.rejected += 1;
notifyUser(user,"Mission refusee",`Votre mission ${proof.title} est refusee.`,"mission");
}

saveState();
addActivity("admin",`${currentUser.email} a ${status === "validated" ? "accepte" : "refuse"} et enregistre la mission de ${user.email}`);
renderAdmin();
}

function renderRewardSettings(){
document.getElementById("adminRewardGains").value = state.rewardSettings.gains.join(",");
document.getElementById("adminRewardPool").value = state.rewardSettings.pool;
document.getElementById("adminDailyText").value = state.rewardSettings.dailyText;
document.getElementById("adminDailyImage").value = state.rewardSettings.dailyImage;
document.getElementById("adminDailyMediaDirection").value = state.rewardSettings.mediaDirection || "forward";
const preview = document.getElementById("adminRewardMediaPreview");
const media = Array.isArray(state.rewardSettings.media) ? state.rewardSettings.media : [];
preview.innerHTML = media.map(item=>item.type === "video"
? `<video src="${item.src}" controls></video>`
: `<img src="${item.src}" alt="${item.name || "Media carte cadeau"}">`
).join("");
}

function fileToDataUrl(file){
return new Promise((resolve,reject)=>{
const reader = new FileReader();
reader.onload = () => resolve(reader.result);
reader.onerror = reject;
reader.readAsDataURL(file);
});
}

function getVideoDuration(file){
return new Promise(resolve=>{
const video = document.createElement("video");
video.preload = "metadata";
video.onloadedmetadata = ()=>{
URL.revokeObjectURL(video.src);
resolve(video.duration || 0);
};
video.onerror = ()=>resolve(0);
video.src = URL.createObjectURL(file);
});
}

document.getElementById("saveRewardSettingsBtn").addEventListener("click",async()=>{
if(!hasPermission("rewards") && !hasPermission("all")){
alert("Permission refusee.");
return;
}

const mediaFiles = Array.from(document.getElementById("adminDailyMediaFiles").files || []);
for(const file of mediaFiles){
if(file.type.startsWith("video/")){
const duration = await getVideoDuration(file);
if(duration && duration < 30){
alert(`La video ${file.name} dure moins de 30 secondes.`);
return;
}
}
}
const mediaFromFiles = await Promise.all(mediaFiles.map(async file=>({
type:file.type.startsWith("video/") ? "video" : "image",
src:await fileToDataUrl(file),
name:file.name
})));
const linkedImage = document.getElementById("adminDailyImage").value.trim();

state.rewardSettings.gains = document.getElementById("adminRewardGains").value
.split(",")
.map(item=>Number(item.trim()))
.filter(item=>item > 0);
const requestedPool = Number(document.getElementById("adminRewardPool").value || state.rewardSettings.pool || 0);
const currentPool = Number(state.rewardSettings.pool || 0);
const poolIncrease = requestedPool - currentPool;
if(poolIncrease > 0){
if(Number(state.settings.feesBalance || 0) < poolIncrease){
alert("Frais BCC appli insuffisants pour alimenter ce pool.");
return;
}
state.settings.feesBalance -= poolIncrease;
}
if(poolIncrease < 0){
state.settings.feesBalance += Math.abs(poolIncrease);
}
state.rewardSettings.pool = requestedPool;
state.rewardSettings.dailyText = document.getElementById("adminDailyText").value.trim() || "Mission du jour bientot disponible";
state.rewardSettings.dailyImage = linkedImage || (mediaFromFiles[0]?.src || state.rewardSettings.dailyImage || "");
state.rewardSettings.mediaDirection = document.getElementById("adminDailyMediaDirection").value;
state.rewardSettings.media = mediaFromFiles.length
? mediaFromFiles
: (linkedImage ? [{type:"image",src:linkedImage,name:"Lien image"}] : state.rewardSettings.media);
saveState();
addActivity("admin",`${currentUser.email} a modifie la carte cadeau`);
alert("Carte cadeau mise a jour.");
scratchReady = false;
scratchCompleted = false;
renderRewardSettings();
});

function renderAdminKyc(){
const list = document.getElementById("adminKycList");
const search = (document.getElementById("adminKycSearch")?.value || "").toLowerCase();
const requests = state.kycRequests.filter(item=>`${item.email} ${item.status} ${(item.files || []).join(" ")}`.toLowerCase().includes(search));
const proofs = state.missionProofs.filter(proof=>`${proof.email} ${proof.title} ${proof.status}`.toLowerCase().includes(search));
list.innerHTML = [
...requests.map(item=>`
<div class="list-row">
<strong>${item.email}</strong>
<span>Status : ${item.status}</span>
<span>Fichiers : ${item.files.join(", ")}</span>
<small>${item.date}</small>
${(item.images || []).map(image=>`<img class="proof-preview" src="${image.data}" alt="${image.name}">`).join("")}
<div class="row-actions">
<button class="small-btn" data-kyc-valid="${item.id}">Valider</button>
<button class="small-btn danger-btn" data-kyc-reject="${item.id}">Refuser</button>
</div>
</div>
`),
...proofs.map(proof=>`
<div class="list-row">
<strong>Preuve mission : ${proof.title}</strong>
<span>Email : ${proof.email}</span>
<span class="status-pill ${proof.status}">${missionStatusLabel(proof.status)}</span>
${proof.proofImage ? `<img class="proof-preview" src="${proof.proofImage}" alt="Preuve mission">` : ""}
<div class="row-actions">
<button class="small-btn" data-mission-valid="${proof.id}">Accepter preuve</button>
<button class="small-btn danger-btn" data-mission-reject="${proof.id}">Refuser preuve</button>
</div>
</div>
`)
].join("") || `<div class="list-row">Aucun KYC ou preuve mission</div>`;

document.querySelectorAll("[data-kyc-valid]").forEach(button=>{
button.addEventListener("click",()=>updateKyc(button.dataset.kycValid,"validated"));
});

document.querySelectorAll("[data-kyc-reject]").forEach(button=>{
button.addEventListener("click",()=>updateKyc(button.dataset.kycReject,"rejected"));
});

document.querySelectorAll("[data-mission-valid]").forEach(button=>{
button.addEventListener("click",()=>updateMissionProof(button.dataset.missionValid,"validated"));
});

document.querySelectorAll("[data-mission-reject]").forEach(button=>{
button.addEventListener("click",()=>updateMissionProof(button.dataset.missionReject,"rejected"));
});
}

function updateKyc(id,status){
if(!hasPermission("kyc") && !hasPermission("all")){
alert("Permission refusee.");
return;
}

const request = state.kycRequests.find(item=>item.id === id);
const user = state.users.find(item=>item.id === request.userId);
request.status = status;
user.kycStatus = status;
user.verified = status === "validated";
saveState();
addActivity("admin",`${currentUser.email} a ${status} le KYC de ${user.email}`);
renderAdmin();
}

function renderAdminUsers(){
const search = (document.getElementById("adminUserSearch")?.value || "").toLowerCase();
const users = state.users.filter(user=>`${user.firstName} ${user.lastName} ${user.email} ${user.id} ${user.mobileMoney} ${user.location?.lat} ${user.location?.lng}`.toLowerCase().includes(search));
document.getElementById("adminUserList").innerHTML = users.length
? users.map(user=>`
<div class="list-row">
<strong>${user.firstName} ${user.lastName}</strong>
<span>${user.email}</span>
<span>ID : ${user.id}</span>
<span>Mobile Money : ${user.mobileMoney || "-"}</span>
<span>Position : ${user.location ? `${user.location.lat}, ${user.location.lng} (precision ${Math.round(user.location.accuracy || 0)}m)` : "-"}</span>
<span>Solde : ${user.mainBalance} BCC | Recompense : ${user.rewardBalance} BCC</span>
<span>Niveau : ${getLevelInfo(user).badge} (${getLevelInfo(user).xp.toFixed(1)}% XP)</span>
<span>Devise : ${user.currency || "XOF"} | Langue : ${languages.find(item=>item[0] === user.language)?.[1] || "Francais"}</span>
<span>KYC : ${user.kycStatus || "non envoye"}</span>
<span>Transactions : ${user.transactions.length}</span>
<span class="status-pill ${user.banned ? "banned" : "active"}">${user.banned ? "banni" : "actif"}</span>
<div class="row-actions">
<button class="small-btn ${user.banned ? "" : "danger-btn"}" data-ban-user="${user.id}">${user.banned ? "Restaurer le compte" : "Bannir"}</button>
<button class="small-btn" data-reset-code="${user.id}">Envoyer code verification</button>
<button class="small-btn" data-reward-user="${user.id}">Recompenser niveau</button>
</div>
</div>
`).join("")
: `<div class="list-row">Aucun utilisateur</div>`;

document.querySelectorAll("[data-ban-user]").forEach(button=>{
button.addEventListener("click",()=>toggleUserBan(button.dataset.banUser));
});

document.querySelectorAll("[data-reset-code]").forEach(button=>{
button.addEventListener("click",()=>sendVerificationCode(button.dataset.resetCode));
});

document.querySelectorAll("[data-reward-user]").forEach(button=>{
button.addEventListener("click",()=>rewardUserLevel(button.dataset.rewardUser));
});
}

function toggleUserBan(userId){
if(!hasPermission("users") && !hasPermission("all")){
alert("Permission refusee.");
return;
}
const user = state.users.find(item=>item.id === userId);
user.banned = !user.banned;
saveState();
addActivity("admin",`${currentUser.email} a ${user.banned ? "banni" : "reactive"} ${user.email}`);
renderAdmin();
}

function renderAdminPasswordRequests(){
const list = document.getElementById("adminPasswordList");
if(!list){
return;
}
const search = (document.getElementById("adminPasswordSearch")?.value || "").toLowerCase();
const requests = (state.settings.passwordRequests || []).filter(item=>`${item.email} ${item.userId} ${item.mobile} ${item.otp} ${item.status}`.toLowerCase().includes(search));
list.innerHTML = requests.length ? requests.map(item=>`
<div class="list-row">
<strong>${item.email}</strong>
<span>ID BCC : ${item.userId}</span>
<span>Mobile : ${item.mobile}</span>
<span>OTP user : ${item.otp}</span>
<span>Code admin : ${item.adminCode || "-"}</span>
<span class="status-pill ${item.status}">${item.status}</span>
<small>${item.date}</small>
<div class="row-actions">
<button class="small-btn" data-password-code="${item.id}">Envoyer code par mail</button>
<button class="small-btn" data-password-done="${item.id}">Marquer traite</button>
</div>
</div>
`).join("") : `<div class="list-row">Aucune requete mot de passe oublie</div>`;

document.querySelectorAll("[data-password-code]").forEach(button=>{
button.addEventListener("click",()=>sendPasswordRequestCode(button.dataset.passwordCode));
});
document.querySelectorAll("[data-password-done]").forEach(button=>{
button.addEventListener("click",()=>{
const request = state.settings.passwordRequests.find(item=>item.id === button.dataset.passwordDone);
if(request){
request.status = "traite";
saveState();
renderAdmin();
}
});
});
}

function sendPasswordRequestCode(requestId){
if(!hasPermission("support") && !hasPermission("users") && !hasPermission("all")){
alert("Permission refusee.");
return;
}
const request = state.settings.passwordRequests.find(item=>item.id === requestId);
if(!request){
return;
}
const user = state.users.find(item=>item.id === request.userId);
sendVerificationCode(user?.id,request.email,request);
}

function sendVerificationCode(userId,emailOverride,passwordRequest){
if(!hasPermission("users") && !hasPermission("support") && !hasPermission("all")){
alert("Permission refusee.");
return;
}
const user = state.users.find(item=>item.id === userId);
if(!user){
alert("Utilisateur introuvable.");
return;
}
const email = (emailOverride || prompt("Adresse email ou envoyer le code :",user.email) || "").trim().toLowerCase();
if(!email || !email.includes("@")){
alert("Email invalide.");
return;
}
const code = String(Math.floor(100000 + Math.random() * 900000));
user.resetCode = code;
notifyUser(user,"Code de verification",`Votre code de verification est ${code}. Utilisez-le pour recuperer votre compte.`,"security");
if(passwordRequest){
passwordRequest.adminCode = code;
passwordRequest.status = "code_envoye";
}
saveState();
addActivity("support",`${currentUser.email} a prepare un code de verification pour ${email}`);
const subject = encodeURIComponent("Code de verification BABY CASH COIN");
const body = encodeURIComponent(`Bonjour,\n\nVotre code de verification BABY CASH COIN est : ${code}\n\nID BCC : ${user.id}\n\nNe partagez pas ce code.`);
window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
alert(`Code prepare pour ${email} : ${code}. Votre application mail va s'ouvrir.`);
renderAdmin();
}

function rewardUserLevel(userId){
if(currentUser.role !== "main_admin"){
alert("Reserve a l'admin principal.");
return;
}
const user = state.users.find(item=>item.id === userId);
if(!user){
return;
}
const targetId = prompt("ID BCC a recompenser :",user.id);
const targetUser = state.users.find(item=>item.id === (targetId || "").trim());
if(!targetUser){
alert("ID BCC introuvable.");
return;
}
const userToReward = targetUser;
const level = getLevelInfo(userToReward);
const amountText = prompt("Montant BCC a envoyer pour cette recompense de niveau :",String(Math.max(10,Math.round(level.level * 5))));
const bonus = Number(amountText || "0");
if(!bonus || bonus <= 0){
alert("Montant invalide.");
return;
}
const scope = confirm("OK = recompense personnelle. Annuler = recompense publique avec notification a tous.");
userToReward.rewardBalance += bonus;
notifyUser(userToReward,"Bonus niveau",`Admin principal vous a recompense pour votre niveau ${level.badge}. +${bonus} BCC recompense.`,"reward");
if(!scope){
notifyAllUsers("Recompense niveau publique",`${userToReward.firstName} ${userToReward.lastName} a recu ${bonus} BCC pour son niveau ${level.badge}.`,"reward");
}
saveState();
addActivity("level_reward",`Bonus niveau ${level.badge} de ${bonus} BCC envoye a ${userToReward.email} (${scope ? "personnel" : "public"})`);
alert(`${bonus} BCC recompense envoyes a ${userToReward.email}.`);
renderAdmin();
}

function renderAdminFinance(){
const list = document.getElementById("adminFinanceList");
if(!list){
return;
}

const search = (document.getElementById("adminFinanceSearch")?.value || "").toLowerCase();
const withdrawals = state.settings.withdrawals.filter(item=>`${item.email} ${item.userId} ${item.number} ${item.status} ${item.amount}`.toLowerCase().includes(search));
const transactions = state.transactions.filter(item=>`${item.userId} ${item.name} ${item.type} ${item.status} ${item.amount}`.toLowerCase().includes(search));
const proofs = state.missionProofs.filter(proof=>`${proof.email} ${proof.title} ${proof.status} ${proof.gain}`.toLowerCase().includes(search));

list.innerHTML = [
...withdrawals.map(item=>`
<div class="list-row">
<strong>Retrait Mobile Money</strong>
<span>Email : ${item.email}</span>
<span>User ID : ${item.userId}</span>
<span>Numero : ${item.number}</span>
<span>Operateur : ${item.operator}</span>
<span>Montant : ${item.amount} BCC</span>
<span class="status-pill ${item.status}">${missionStatusLabel(item.status)}</span>
<small>${item.date}</small>
<div class="row-actions">
<button class="small-btn" data-withdraw-valid="${item.id}">Approuver et enregistrer</button>
<button class="small-btn danger-btn" data-withdraw-reject="${item.id}">Refuser et enregistrer</button>
</div>
</div>
`),
...proofs.map(proof=>`
<div class="list-row">
<strong>Capture mission a verifier</strong>
<span>Email : ${proof.email}</span>
<span>Mission : ${proof.title}</span>
<span>Gain : <span class="gain-green">+${proof.gain} BCC</span></span>
<span class="status-pill ${proof.status}">${missionStatusLabel(proof.status)}</span>
${proof.proofImage ? `<img class="proof-preview" src="${proof.proofImage}" alt="Preuve mission">` : ""}
<div class="row-actions">
<button class="small-btn" data-mission-valid="${proof.id}">Valider mission et enregistrer</button>
<button class="small-btn danger-btn" data-mission-reject="${proof.id}">Refuser mission et enregistrer</button>
</div>
</div>
`),
...transactions.map(item=>`
<div class="list-row">
<strong>${item.type}</strong>
<span>User ID : ${item.userId}</span>
<span>Nom : ${item.name}</span>
<span>Montant : ${item.amount} BCC</span>
<span>Frais : ${item.fees} BCC</span>
<span>Status : ${item.status || "valide"}</span>
<small>${item.date}</small>
</div>
`)
].join("") || `<div class="list-row">Aucune transaction</div>`;

document.querySelectorAll("[data-withdraw-valid]").forEach(button=>{
button.addEventListener("click",()=>updateWithdrawal(button.dataset.withdrawValid,"validated"));
});

document.querySelectorAll("[data-withdraw-reject]").forEach(button=>{
button.addEventListener("click",()=>updateWithdrawal(button.dataset.withdrawReject,"rejected"));
});

document.querySelectorAll("[data-mission-valid]").forEach(button=>{
button.addEventListener("click",()=>updateMissionProof(button.dataset.missionValid,"validated"));
});

document.querySelectorAll("[data-mission-reject]").forEach(button=>{
button.addEventListener("click",()=>updateMissionProof(button.dataset.missionReject,"rejected"));
});
}

function updateWithdrawal(id,status){
if(!hasPermission("finance") && !hasPermission("all")){
alert("Permission refusee.");
return;
}
const withdrawal = state.settings.withdrawals.find(item=>item.id === id);
if(!withdrawal || withdrawal.status !== "pending"){
return;
}
const user = state.users.find(item=>item.id === withdrawal.userId);
withdrawal.status = status;
const userTx = user.transactions.find(item=>item.id === id);
if(userTx){
userTx.status = status === "validated" ? "approuve" : "refuse";
userTx.name = status === "validated" ? "Retrait approuve" : "Retrait refuse";
}
if(status === "rejected"){
user.mainBalance += Number(withdrawal.amount);
}
notifyUser(user,status === "validated" ? "Retrait approuve" : "Retrait refuse",`Votre demande de conversion/retrait de ${withdrawal.amount} BCC est ${status === "validated" ? "approuvee" : "refusee"}.`,"finance");
saveState();
addActivity("finance",`${currentUser.email} a ${status === "validated" ? "approuve" : "refuse"} et enregistre le retrait de ${withdrawal.email}`);
renderAdmin();
}

function renderAdminNotifications(){
const list = document.getElementById("adminNotificationList");
if(!list){
return;
}
list.innerHTML = state.notifications.length ? state.notifications.slice(0,80).map(item=>`
<div class="list-row">
<strong>${item.title}</strong>
<span>${item.message}</span>
<span>Type : ${item.type}</span>
<small>${item.date}</small>
</div>
`).join("") : `<div class="list-row">Aucune notification</div>`;
}

document.getElementById("sendAdminNotificationBtn").addEventListener("click",()=>{
if(!hasPermission("notifications") && !hasPermission("all")){
alert("Permission refusee.");
return;
}
const title = document.getElementById("adminNotificationTitle").value.trim() || "Notification BCC";
const message = document.getElementById("adminNotificationMessage").value.trim();
const target = document.getElementById("adminNotificationTarget").value;
const personalId = document.getElementById("adminNotificationUserId").value.trim();
if(!message){
alert("Message obligatoire.");
return;
}
if(target === "personal"){
const user = state.users.find(item=>item.id === personalId);
if(!user){
alert("ID BCC utilisateur introuvable.");
return;
}
notifyUser(user,title,message,"personal");
}else if(target === "sensitive"){
state.users.filter(user=>(user.notifications || []).some(item=>item.type === "sensitive")).forEach(user=>notifyUser(user,title,message,"admin"));
}else{
notifyAllUsers(title,message,"admin");
}
saveState();
addActivity("notification",`${currentUser.email} a envoye une notification ${target}`);
document.getElementById("adminNotificationTitle").value = "";
document.getElementById("adminNotificationMessage").value = "";
document.getElementById("adminNotificationUserId").value = "";
alert("Notification envoyee.");
renderAdmin();
});

function renderAdminSupport(){
const list = document.getElementById("adminSupportList");
if(!list){
return;
}
const search = (document.getElementById("adminSupportSearch")?.value || "").toLowerCase();
const requests = state.supportRequests.filter(item=>`${item.email} ${item.message} ${item.status}`.toLowerCase().includes(search));
list.innerHTML = requests.length ? requests.map(item=>`
<div class="list-row">
<strong>${item.email}</strong>
<span>Requete : ${item.message}</span>
<span>Status : ${item.status}</span>
${item.reply ? `<span>Reponse : ${item.reply}</span>` : ""}
<small>${item.date}</small>
<textarea data-support-reply="${item.id}" placeholder="Reponse admin">${item.reply || ""}</textarea>
<div class="row-actions">
<button class="small-btn" data-support-save="${item.id}">Repondre et enregistrer</button>
<button class="small-btn danger-btn" data-support-close="${item.id}">Cloturer</button>
</div>
</div>
`).join("") : `<div class="list-row">Aucune requete assistance</div>`;

document.querySelectorAll("[data-support-save]").forEach(button=>{
button.addEventListener("click",()=>replySupportRequest(button.dataset.supportSave,false));
});
document.querySelectorAll("[data-support-close]").forEach(button=>{
button.addEventListener("click",()=>replySupportRequest(button.dataset.supportClose,true));
});
}

function replySupportRequest(id,closeRequest){
if(!hasPermission("support") && !hasPermission("all")){
alert("Permission refusee.");
return;
}
const request = state.supportRequests.find(item=>item.id === id);
const user = state.users.find(item=>item.id === request.userId);
const reply = document.querySelector(`[data-support-reply="${id}"]`).value.trim();
request.reply = reply;
request.status = closeRequest ? "cloturee" : "repondu";
notifyUser(user,"Reponse assistance",reply || "Votre requete assistance a ete mise a jour.","support");
saveState();
addActivity("support",`${currentUser.email} a repondu a ${request.email}`);
renderAdmin();
}

document.getElementById("missionMaintenanceToggle").addEventListener("change",(event)=>{
if(!hasPermission("maintenance") && !hasPermission("all")){
alert("Permission refusee.");
event.target.checked = state.settings.missionMaintenance;
return;
}

state.settings.missionMaintenance = event.target.checked;
saveState();
addActivity("admin",`${currentUser.email} a mis maintenance missions : ${event.target.checked ? "ON" : "OFF"}`);
renderAdmin();
});

document.getElementById("globalMaintenanceToggle")?.addEventListener("change",(event)=>{
if(!hasPermission("maintenance") && !hasPermission("all")){
alert("Permission refusee.");
event.target.checked = state.settings.globalMaintenance;
return;
}
state.settings.globalMaintenance = event.target.checked;
saveState();
addActivity("admin",`${currentUser.email} a mis maintenance globale : ${event.target.checked ? "ON" : "OFF"}`);
renderAdmin();
});

document.getElementById("saveMaintenanceMessageBtn").addEventListener("click",()=>{
if(!hasPermission("maintenance") && !hasPermission("all")){
alert("Permission refusee.");
return;
}
state.settings.maintenanceMessage = document.getElementById("maintenanceMessageInput").value.trim() || "La section mission est temporairement en maintenance.";
saveState();
addActivity("admin",`${currentUser.email} a enregistre le message de maintenance`);
alert("Maintenance enregistree.");
renderAdmin();
});

function getRolePermissions(role){
const map = {
admin_missions:["missions"],
admin_rewards:["rewards"],
admin_kyc:["kyc","missions"],
admin_support:["users","support","notifications"],
admin_finance:["finance","transactions"],
custom_admin:[]
};
return map[role] || [];
}

document.getElementById("changeAdminPasswordBtn")?.addEventListener("click",()=>{
if(session.type !== "admin"){
return;
}
const oldPassword = document.getElementById("adminOldPassword").value;
const newPassword = document.getElementById("adminNewPassword").value;
if(oldPassword !== currentUser.password){
alert("Ancien mot de passe admin incorrect.");
return;
}
if(newPassword.length < 6){
alert("Nouveau mot de passe trop court.");
return;
}
currentUser.password = newPassword;
const storedAdmin = state.adminAccounts.find(admin=>admin.id === currentUser.id);
if(storedAdmin){
storedAdmin.password = newPassword;
}
adminAccounts = state.adminAccounts;
saveState();
addActivity("admin",`${currentUser.email} a change son mot de passe admin`);
document.getElementById("adminOldPassword").value = "";
document.getElementById("adminNewPassword").value = "";
alert("Mot de passe admin modifie.");
renderAdmin();
});

document.getElementById("createAdminBtn")?.addEventListener("click",()=>{
if(currentUser.role !== "main_admin"){
alert("Reserve a l'admin principal.");
return;
}
const name = document.getElementById("newAdminName").value.trim();
const email = document.getElementById("newAdminEmail").value.trim().toLowerCase();
const password = document.getElementById("newAdminPassword").value;
const role = document.getElementById("newAdminRole").value;
const checkedPermissions = Array.from(document.querySelectorAll(".new-admin-permission:checked")).map(item=>item.value);
const permissions = checkedPermissions.length ? checkedPermissions : getRolePermissions(role);
if(!name || !email || !password){
alert("Nom, email et mot de passe obligatoires.");
return;
}
if(!email.includes("@") || password.length < 6){
alert("Email invalide ou mot de passe trop court.");
return;
}
if(state.users.some(user=>user.email === email) || adminAccounts.some(admin=>admin.email === email)){
alert("Cet email existe deja.");
return;
}
if(permissions.length === 0){
alert("Choisissez au moins un role ou une permission.");
return;
}
const admin = {
id:uid("ADM"),
role,
email,
password,
name,
permissions
};
state.adminAccounts.push(admin);
adminAccounts = state.adminAccounts;
saveState();
addActivity("admin",`${currentUser.email} a cree l'admin ${email}`);
document.getElementById("newAdminName").value = "";
document.getElementById("newAdminEmail").value = "";
document.getElementById("newAdminPassword").value = "";
document.querySelectorAll(".new-admin-permission").forEach(item=>item.checked = false);
alert("Admin cree et enregistre.");
renderAdmin();
});
function renderSubAdmins(){
document.getElementById("subAdminList").innerHTML = adminAccounts.filter(admin=>admin.role !== "main_admin").map(admin=>`
<div class="list-row">
<strong>${admin.name}</strong>
<span>Email : ${admin.email}</span>
<span>Mot de passe : ${admin.password}</span>
<span>Taches : ${admin.permissions.join(", ")}</span>
<span class="status-pill ${admin.adminBlocked ? "banned" : "active"}">${admin.adminBlocked ? "bloque" : "actif"}</span>
${currentUser.role === "main_admin" ? `<button class="small-btn ${admin.adminBlocked ? "" : "danger-btn"}" data-toggle-admin="${admin.id}">${admin.adminBlocked ? "Debloquer" : "Bloquer"}</button>` : ""}
</div>
`).join("");
document.querySelectorAll("[data-toggle-admin]").forEach(button=>{
button.addEventListener("click",()=>{
const admin = state.adminAccounts.find(item=>item.id === button.dataset.toggleAdmin);
if(admin){
admin.adminBlocked = !admin.adminBlocked;
adminAccounts = state.adminAccounts;
saveState();
addActivity("admin",`${currentUser.email} a ${admin.adminBlocked ? "bloque" : "debloque"} ${admin.email}`);
renderAdmin();
}
});
});
}

setInterval(updateRewardCountdown,1000);
setInterval(()=>{
recycleExpiredMissions();
if(session?.type === "user"){
renderMissions();
}
},30000);






