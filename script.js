class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return true;
        } else {
            alert("Ошибка: сумма должна быть больше 0");
            return false;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return true;
        } else {
            alert("Ошибка: недостаточно денег или неверная сумма");
            return false;
        }
    }
}

const account = new BankAccount(1000);

// Элементы
const balanceEl = document.getElementById("balance");
const depInput = document.getElementById("dep");
const withInput = document.getElementById("with");
const depBtn = document.getElementById("depBtn");
const withBtn = document.getElementById("withBtn");

function updateBalance() {
    balanceEl.innerText = account.getBalance();
}

// Пополнение
depBtn.addEventListener("click", () => {
    const amount = Number(depInput.value);
    if (account.deposit(amount)) updateBalance();
    depInput.value = "";
});

// Снятие
withBtn.addEventListener("click", () => {
    const amount = Number(withInput.value);
    if (account.withdraw(amount)) updateBalance();
    withInput.value = "";
});

// Инициализация
updateBalance();