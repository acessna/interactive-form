let nameInput = document.getElementById('name');
let otherJobRoleInput = document.getElementById('other-title');
const jobRoleOptions = document.getElementById('title');
const otherOption = document.querySelector('option[value="other"]');

nameInput.focus();

const showOtherJobInput = () => {
    otherJobRoleInput.style.display = 'none';

    jobRoleOptions.addEventListener('input', (e) => {
        if(e.target.value !== 'other'){
            otherJobRoleInput.style.display = 'none';
        } else if(e.target.value === 'other'){
            otherJobRoleInput.style.display = '';
        }
    }); 
}

showOtherJobInput();