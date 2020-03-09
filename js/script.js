let nameInput = document.getElementById('name');
let otherJobRoleInput = document.getElementById('other-title');
const jobRoleOptions = document.getElementById('title');
const colorOptions = document.getElementById('color');
const designOptions = document.getElementById('design');
const selectDesignFirstOption = document.createElement('option');
const activityList = document.querySelectorAll(".activities input");
let activitiesTotalCost = 0;
let displayTotal = document.createElement('p');
const activities = document.querySelector('.activities');
const paymentOptions = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const form = document.querySelector('form');
let mailInput = document.getElementById('mail');
const activitySection = document.querySelector('.activities');
const activityErrorMessage = document.createElement('p');
let creditCardInput = document.getElementById('cc-num');
let zipInput = document.getElementById('zip');
let cvvInput = document.getElementById('cvv');
const ccErrorMessage = document.createElement('p');



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

/* The showJsPuns function loops through the colorOptions and shows only the JS Pun shirt colors when that theme is selected */

const showJsPuns = () => {
    for (let i = 0; i < colorOptions.length; i++) {
        if(i < 3){
        colorOptions[i].style.display = 'block';
        } else {
            colorOptions[i].style.display = 'none';
        }
    }

    colorOptions.selectedIndex = '0';
    selectDesignFirstOption.style.display = 'none'
}

/* The showHeartJs function loops through the colorOptions and shows only the Heart JS colors when that theme is selected */

const showHeartJs = () => {
       
    for (let i = 0; i < colorOptions.length; i++) {
       if(i >= 3){
        colorOptions[i].style.display = 'block';
       } else{
        colorOptions[i].style.display = 'none';
       }
    }
    
    colorOptions.selectedIndex = '3';
    selectDesignFirstOption.style.display = 'none'
}

/* The showThemeOptions function shows the appropriate colorOptions based on which Theme option is selected */

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

/* 
showActivies loops through the activity checkboxes.
When one is selected, it deactivates any conflicting activities.
*/
const showActivities = () => {
    document.querySelector('.activities').addEventListener('change', (e) =>{
        let checkedBox = e.target;
        let checkedBoxTime = checkedBox.getAttribute('data-day-and-time');

        for (let i = 0; i < activityList.length; i++) {
        let boxTime = activityList[i].getAttribute('data-day-and-time');

        if(boxTime === checkedBoxTime && checkedBox !== activityList[i]){
                if(checkedBox.checked === true){
                    activityList[i].disabled = true;
                } else if(checkedBox.checked === false) {
                    activityList[i].disabled = false;
                }
            }

        }  
    });

}
showActivities();

/* activitiesSum adds up the total cost of the activites based on
what activity boxes are selected */
const activitiesSum = () => {
    document.querySelector('.activities').addEventListener('change', (e) =>{
        let checkedBox = e.target;
        let eventCost = parseInt(checkedBox.getAttribute('data-cost'));

            if(checkedBox.checked === true){
                activitiesTotalCost += eventCost;
            } else if(checkedBox.checked === false) {
                activitiesTotalCost -= eventCost;
            }      
            displayTotal.innerHTML = 'Total: $' + activitiesTotalCost;

    });

    activities.appendChild(displayTotal);
}

activitiesSum();

/* showPaymentMethod shows the proper information/input fields for 
the payment option that is selected */
const showPaymentMethod = () => {
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';

    paymentOptions.addEventListener('change', (e) => {
        if(e.target.value === 'credit card'){
            creditCard.style.display = 'block';
            paypal.style.display = 'none';
            bitcoin.style.display = 'none';
        } else if(e.target.value === 'bitcoin'){
            creditCard.style.display = 'none';
            paypal.style.display = 'none';
            bitcoin.style.display = 'block';
        } else if(e.target.value === 'paypal'){
            creditCard.style.display = 'none';
            paypal.style.display = 'block';
            bitcoin.style.display = 'none';
        } else if(e.target.value === 'select method'){
            creditCard.style.display = 'none';
            paypal.style.display = 'none';
            bitcoin.style.display = 'none';
        }

    });

    paymentOptions.selectedIndex = '1';

    
}

showPaymentMethod();

/* The four functions below verify that the information input from
the users is valid */

const nameVerification = () => {
    let nameValue = nameInput.value;

    if(nameValue.length > 0){
        nameInput.style.border = '#FFFFFF';
        return true;
    } else{
        nameInput.style.border = 'thick solid #F93106';
        nameInput.placeholder = '**Please enter valid name**'
        return false;
    }
}

const emailVerification = () => {
    let emailValue = mailInput.value;
    let atLocation = emailValue.indexOf('@');
    let periodLoc = emailValue.lastIndexOf('.');

    if((atLocation > 1) && (periodLoc > atLocation +1)){
        mailInput.style.border = 'white';
        return true;
    } else{
        mailInput.style.border = 'thick solid #F93106';
        mailInput.placeholder = '**Please enter valid email**';
    }

}

const activityVerification = () => {
    for(let i = 0; i < activityList.length; i++){
        if(activityList[i].checked){
            activitySection.style.border = 'white';
            return true;
        }
    }
    activitySection.style.color = '#F93106';
    activityErrorMessage.innerHTML = '**Please select at least one activity**'
    activitySection.appendChild(activityErrorMessage);
    return false;
}

const creditCardVerification = () => {
    let creditCardValue = creditCardInput.value;
    let zipValue = zipInput.value;
    let cvvValue = cvvInput.value;
    ccErrorMessage.innerHTML = '**Credit Card information is not valid**'

    let ccRegex = /^\d{13,16}$/;
    let zipRegex = /^\d{5}$/;
    let cvvRegex = /^\d{3}$/;

    if(paymentOptions.value === 'credit card'){
            if(ccRegex.test(creditCardValue) === false){
                creditCardInput.style.border = 'solid #F93106';
                creditCard.appendChild(ccErrorMessage);
                ccErrorMessage.style.color = '#F93106'; 
            } else{
                return true;
            }
            if(zipRegex.test(zipValue) === false){
                zipInput.style.border = 'solid #F93106';
                creditCard.appendChild(ccErrorMessage);
                ccErrorMessage.style.color = '#F93106';
            } else{
                return true;
            }
            if(cvvRegex.test(cvvValue) === false){
                cvvInput.style.border = 'solid #F93106';
                creditCard.appendChild(ccErrorMessage);
                ccErrorMessage.style.color = '#F93106';
            } else{
                return true;
            }

    }

}

/* The event listener below runs the verification functions when the user submits the form */

form.addEventListener('submit', (e) => {
nameVerification();
if(!nameVerification()){
    e.preventDefault();
}

emailVerification();
if(!emailVerification()){
    e.preventDefault();
}

activityVerification();
if(!activityVerification()){
    e.preventDefault();
}

creditCardVerification();
if(!creditCardVerification()){
    e.preventDefault();
}

});



