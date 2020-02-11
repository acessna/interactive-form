let nameInput = document.getElementById('name');
let otherJobRoleInput = document.getElementById('other-title');
const jobRoleOptions = document.getElementById('title');
const colorOptions = document.getElementById('color');
const designOptions = document.getElementById('design');
const selectDesignFirstOption = document.createElement('option');



nameInput.focus();

/* The showOtherJobInput method displays the otherJobRoleInput when
the 'other' option is selected in the Job Role selector */

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

/* The hideColors function hides the shirt color options and tells the user to first select a shirt them */

const hideColors = () => {
    selectDesignFirstOption.innerHTML = 'Please Select a Theme';
    for (let i = 0; i < colorOptions.length; i++) {
        colorOptions[i].style.display = 'none';
    }
    colorOptions.appendChild(selectDesignFirstOption);
    selectDesignFirstOption.style.display = 'block';
    colorOptions.selectedIndex = '6';
}

hideColors();

const showJsPuns = () => {
    for (let i = 0; i < 3; i++) {
        colorOptions[i].style.display = 'block';
    }
    
    for (let i = 0; i > 3; i++) {
        colorOptions[i].style.display = 'none';
    }
    colorOptions.selectedIndex = '0';
    selectDesignFirstOption.style.display = 'none'
}

const showHeartJs = () => {
       
    for (let i = 0; i < 3; i++) {
        colorOptions[i].style.display = 'none';
    }
    for (let i = 0; i > 3; i++) {
        colorOptions[i].style.display = 'block';
    }
    

    selectDesignFirstOption.style.display = 'none'
}

const showThemeOptions = () => {
    let selectThemeOption = designOptions[0];
    selectThemeOption.value = 'select theme';

    designOptions.addEventListener('input', (e) => {
        if(e.target.value === 'js puns'){
            showJsPuns();
        } else if(e.target.value === 'heart js'){
            showHeartJs();
        } else if(e.target.value === 'select theme'){
            hideColors();
        }
    });

}
showThemeOptions();