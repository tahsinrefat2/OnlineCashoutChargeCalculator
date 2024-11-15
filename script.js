
function redirectToPayment(paymentMethod) {
    // Replace the URL below with the actual paths to your payment method pages
    switch (paymentMethod) {
        case 'bkash':
            window.location.href = 'bkash.html';
            break;
        case 'nagad':
            window.location.href = 'nagad.html';
            break;
        case 'rocket':
            window.location.href = 'rocket.html';
            break;
        case 'upay':
            window.location.href = 'upay.html';
            break;
        case 'surecash':
            window.location.href = 'surecash.html';
            break;
        default:
            console.error('Invalid payment method');
    }
}
function calculateWithdraw(paymentMethod) {
    const currentBalance = parseFloat(document.getElementById('currentBalance').value);

    if (isNaN(currentBalance)) {
        alert('Please enter a valid number for the current balance.');
        return;
    }

    const cashoutMethod = document.getElementById('cashoutMethod').value;

    let withdrawalChargePercentage;

    // Add logic for different withdrawal charges based on paymentMethod and cashoutMethod
    switch (paymentMethod) {

        case 'bkash':
            switch (cashoutMethod) {
                case 'normal':
                    withdrawalChargePercentage = 1.85;
                    break;
                case 'favorite':
                    withdrawalChargePercentage = 1.49;
                    break;
                case 'atm':
                    withdrawalChargePercentage = 1.49;
                    break;
                case 'ussd':
                    withdrawalChargePercentage = 1.85;
                    break;
                default:
                    alert('Invalid agent type.');
                    return;
            }
            break;

        case 'nagad':
            switch (cashoutMethod) {
                case 'regularApp':
                    withdrawalChargePercentage = 1.25;
                    break;
                case 'islamicApp':
                    withdrawalChargePercentage = 1.50;
                    break;
                case 'ussd':
                    withdrawalChargePercentage = 1.50;
                    break;
                default:
                    alert('Invalid agent type.');
                    return;
            }
            break;

        case 'rocket':
            switch (cashoutMethod) {
                case 'agent':
                    withdrawalChargePercentage = 1.67;
                    break;
                case 'atm':
                    withdrawalChargePercentage = 0.9;
                    break;
                case 'ussd':
                    withdrawalChargePercentage = 1.67;
                    break;
                default:
                    alert('Invalid agent type.');
                    return;
            }
            break;

        case 'surecash':
            switch (cashoutMethod) {
                case 'agent':
                    withdrawalChargePercentage = 1.8;
                    break;
                default:
                    alert('Invalid agent type.');
                    return;
            }
            break;

        case 'upay':
            switch (cashoutMethod) {
                case 'primaryWallet':
                    withdrawalChargePercentage = 1.4;
                    break;
                case 'disbursementWallet':
                    withdrawalChargePercentage = 0.7;
                    break;
                case 'salaryWallet':
                    withdrawalChargePercentage = 1;
                    break;
                case 'remittanceWallet':
                    withdrawalChargePercentage = 1;
                    break;
                case 'atm':
                    withdrawalChargePercentage = 0.8;
                    break;
                default:
                    alert('Invalid agent type.');
                    return;
            }
            break;
        // Add cases for other payment methods as needed
        default:
            alert('Invalid payment method.');
            return;
    }

    const maxWithdraw = currentBalance / (1 + withdrawalChargePercentage / 100);
    const withdrawalCharge = currentBalance - maxWithdraw;

    const resultMessage = `Maximum you can withdraw: BDT ${maxWithdraw.toFixed(2)}<br>Withdrawal charge: BDT ${withdrawalCharge.toFixed(2)}<br>Withdrawal Rate: ${withdrawalChargePercentage.toFixed(2)}%`;

    // Display the result in a modal
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'modal';

    const resultText = document.createElement('p');
    resultText.innerHTML = resultMessage;

    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.addEventListener('click', function () {
        modalOverlay.style.display = 'none';
    });

    modal.appendChild(resultText);
    modal.appendChild(closeButton);
    document.body.appendChild(modalOverlay);
    modalOverlay.appendChild(modal);

    modalOverlay.style.display = 'flex';
}


function toggleMenu() {
    var button = document.getElementById("menuButton");
    var menu = document.getElementById("menuList");

    button.classList.toggle("open");
    menu.classList.toggle("open");

    // Get all list items in the menu
    var menuItems = menu.querySelectorAll('li');

    // Toggle the "open" class on each list item with a delay for the transition effect
    menuItems.forEach(function (item, index) {
        setTimeout(function () {
            item.classList.toggle("open");
        }, index * 50); // Adjust the delay as needed
    });
}
