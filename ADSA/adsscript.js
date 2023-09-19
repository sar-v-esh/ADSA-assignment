function showResult(assignmentNumber) {
    const resultElement = document.getElementById(`result${assignmentNumber}`);

    if (assignmentNumber === 1) {
        window.location.href = 'Ads1.html';
    } else if (assignmentNumber === 2) {
        window.location.href = 'Ads2.html';
    } else if (assignmentNumber === 3) {
        window.location.href = 'Ads3.html';
    }
}

function homepage(){
    window.location.href = 'Mainpage.html';
}
