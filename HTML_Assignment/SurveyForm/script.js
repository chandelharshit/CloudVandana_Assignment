const surveyForm = document.getElementById('surveyForm');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

const popupElements = {
    firstName: document.getElementById('popupFirstName'),
    lastName: document.getElementById('popupLastName'),
    dob: document.getElementById('popupDob'),
    country: document.getElementById('popupCountry'),
    gender: document.getElementById('popupGender'),
    profession: document.getElementById('popupProfession'),
    email: document.getElementById('popupEmail'),
    mobile: document.getElementById('popupMobile'),
};

const resetBtn = document.getElementById('resetBtn');
const submitBtn = document.getElementById('submitBtn');

resetBtn.addEventListener('click', () => {
    surveyForm.reset();
});

submitBtn.addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;


    popupElements.firstName.textContent = firstName;
    popupElements.lastName.textContent = lastName;
    popupElements.dob.textContent = dob;
    popupElements.country.textContent = country;
    popupElements.gender.textContent = [...genderCheckboxes].map(cb => cb.value).join(', ');
    popupElements.profession.textContent = profession;
    popupElements.email.textContent = email;
    popupElements.mobile.textContent = mobile;

    popup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    surveyForm.reset();
});
