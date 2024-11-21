function updateDateTime() {
    const datetime = new Date();
    document.getElementById('currentDatetime').textContent = datetime.toLocaleString();
}
setInterval(updateDateTime, 1000);

document.getElementById('phoneNumber').addEventListener('input', function() {
    const phoneInput = this.value;
    const phoneWarning = document.getElementById('phoneWarning');
    const phoneRegex = /^[6789]\d{9,11}$/;
    if (phoneRegex.test(phoneInput)) {
        phoneWarning.style.display = 'none';
    }
    else {
        phoneWarning.style.display = 'block';
    }
});

function handleFormSubmit(event) {
    event.preventDefault();
    const phoneInput = document.getElementById('phoneNumber').value;
    const phoneWarning = document.getElementById('phoneWarning');
    const phoneRegex = /^[789]\d{9,11}$/;
    if (!phoneRegex.test(phoneInput)) {
        phoneWarning.style.display = 'block';
        alert("Phone Number Is Invalid !");
        return false;
    }
    phoneWarning.style.display = 'none';
    goToNextPage('menuid');
    return true;
}

function goToNextPage(nextPageId) {
    document.getElementById(nextPageId).scrollIntoView({ behavior: 'smooth' });
}

function incrementQuantity(button){
    const quantitySpan = button.parentElement.querySelector('.quantity');
    quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
}

function decrementQuantity(button){
    const quantitySpan=button.parentElement.querySelector('.quantity');
    if (parseInt(quantitySpan.textContent) > 0) {
        quantitySpan.textContent=parseInt(quantitySpan.textContent) - 1;
    }
}

function toggleEdit(button){
    const productDiv=button.parentElement;
    const editContainer=productDiv.querySelector('.edit-container');
    editContainer.style.display=editContainer.style.display==='block'?'none':'block';
    if(editContainer.style.display==='block'){
        const productName=productDiv.querySelector('.productName').textContent;
        const productPrice=productDiv.querySelector('.productPrice').textContent;
        const editNameInput=editContainer.querySelector('.editName');
        const editPriceInput=editContainer.querySelector('.editPrice');
        editNameInput.value=productName;
        editPriceInput.value=productPrice.replace('$', '');
    }
}

function saveChanges(button) {
    const productDiv=button.parentElement.parentElement;
    const editContainer=productDiv.querySelector('.edit-container');
    const editNameInput=editContainer.querySelector('.editName');
    const editPriceInput=editContainer.querySelector('.editPrice');
    const editImageInput=editContainer.querySelector('.editImage');
    productDiv.querySelector('.productName').textContent=editNameInput.value;
    productDiv.querySelector('.productPrice').textContent=`${editPriceInput.value}`;
    if (editImageInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
            productDiv.querySelector('.productImage').src = e.target.result;
        }
        reader.readAsDataURL(editImageInput.files[0]);
    }
    editContainer.style.display = 'none';
}