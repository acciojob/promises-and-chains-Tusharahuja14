document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();

    // Validation
    if (name === "" || age === "") {
        alert("Please enter valid details.");
        return;
    }

    const ageNumber = parseInt(age);

    // Promise to check voting eligibility
    const checkEligibility = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageNumber > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    // Handling the promise
    checkEligibility
        .then((message) => {
            alert(message);
        })
        .catch((error) => {
            alert(error);
        });
});
