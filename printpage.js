function printPage() {
    let printContents = document.getElementById("mainPage").innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this page',
            text: 'Here is a page I wanted to share with you!',
            url: window.location.href
        }).catch(error => console.log('Error sharing', error));
    } else {
        alert('Share not supported in this browser');
    }
}