function goToEditPage(){
    document.getElementById('idpage1').style.display = 'none';
    document.getElementById('idpage2').style.display = 'block';

    document.getElementById('editName').value = document.getElementById('restaurantName').innerText.split(": ")[1];
    document.getElementById('editAddress').value = document.getElementById('restaurentAddress').innerText.split(": ")[1];
    document.getElementById('editContact').value = document.getElementById('restaurentContact').innerText.split(": ")[1];
    document.getElementById('editMail').value = document.getElementById('restaurantGmail').innerText.split(": ")[1];
}

function saveChange(){
    document.getElementById('restaurantName').innerText = "Restaurant Name : " + document.getElementById('editName').value;
    document.getElementById('restaurantAddress').innerText = "Address : " + document.getElementById('editAddress').value;
    document.getElementById('restaurantContact').innerText = "Contact Number : " + document.getElementById('editContact').value;
    document.getElementById('restaurantGmail').innerText = "Gmail : " + document.getElementById('editMail').value;

    document.getElementById('idpage1').style.display = 'block';
    document.getElementById('idpage2').style.display = 'none';
}

