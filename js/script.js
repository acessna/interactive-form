let nameInput = document.getElementById('name');
let otherJobRoleInput = document.getElementById('other-title');
const jobRoleOptions = document.getElementById('title');

nameInput.focus();

//otherJobRoleInput.setAttribute('hidden', true);

for (let i = 0; i < jobRoleOptions.length; i++) {
    jobRoleOptions.addEventListener('change', (e) =>{
    console.log(e.target[i]);

});
}


