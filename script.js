// ------------------
// Data Handling
// ------------------

let currentUser = null;
let currentProjectId = null;

const getUsers = () => JSON.parse(localStorage.getItem('users')) || {};
const saveUsers = (users) => localStorage.setItem('users', JSON.stringify(users));

const 

