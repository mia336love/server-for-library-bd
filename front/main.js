//----------------------------------------------------------------------------------------------------------- TABLE

document.getElementById('getMBbtn').addEventListener('click', async () => {
    const response = await fetch('http://localhost:4000/books/getMB');

    if (response.ok) {
        let container = document.getElementById('container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'container';
            document.body.appendChild(container);
        }

        const tableContainer = document.createElement('div');
        tableContainer.id = 'tableContainer';
        container.appendChild(tableContainer);

        const data = await response.json();
        console.log(data);

        if (tableContainer) {
            tableContainer.innerHTML = '';
        }

        const table = document.createElement('table');
        table.id = 'table';
        table.setAttribute('data-type', 'unsorted');

        const tableHeader = document.createElement('thead');
        const tableHeaderRow = document.createElement('tr');

        const headers = ['Книга', 'ФИО читателя', 'Дата взятия', 'Дата возврата'];

        headers.forEach(headerText => {
            const headerCell = document.createElement('th');
            headerCell.classList.add('tableHeader');
            headerCell.textContent = headerText;
            tableHeaderRow.appendChild(headerCell);
        });

        tableHeader.appendChild(tableHeaderRow);
        table.appendChild(tableHeader);

        const tableBody = document.createElement('tbody');

        data.forEach(rowData => {
            const row = document.createElement('tr');

            Object.values(rowData).forEach(cellData => {
                const cell = document.createElement('td');
                cell.textContent = cellData;
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });

        table.appendChild(tableBody);

        tableContainer.appendChild(table);
    }
});

//----------------------------------------------------------------------------------------------------------- GIVE

document.getElementById('giveBookBtn').addEventListener('click', () => {
    document.querySelector('.giveBookDiv').style.display = 'flex'
})

document.getElementById('submitGive').addEventListener('click', async () => {
    const data = {
        rName: document.getElementById('nameInpGive').value,
        rSurname: document.getElementById('surnameInpGive').value,
        rLastName: document.getElementById('lastnameInpGive').value,
        bName: document.getElementById('titleInpGive').value
    }

    try {
        console.log(data);
        const response = await fetch('http://localhost:4000/books/giveBook', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            console.log("Данные успешно отправлены!");

            document.getElementById('surnameInpGive').value = '';
            document.getElementById('nameInpGive').value = '';
            document.getElementById('lastnameInpGive').value = '';
            document.getElementById('titleInpGive').value = '';
        } else {
            console.error("Не удалось отправить данные.");
        }
    } catch (error) {
        console.error("Произошла ошибка:", error);
    }
});

document.getElementById('closeGive').addEventListener('click', () => {
    document.querySelector('.giveBookDiv').style.display = 'none'
})

//----------------------------------------------------------------------------------------------------------- RETURN

document.getElementById('returnBookBtn').addEventListener('click', () => {
    document.querySelector('.returnBookDiv').style.display = 'flex'
})

document.getElementById('submitReturn').addEventListener('click', async () => {
    const data = {
        rName: document.getElementById('nameInpReturn').value,
        rSurname: document.getElementById('surnameInpReturn').value,
        rLastName: document.getElementById('lastnameInpReturn').value,
        bName: document.getElementById('titleInpReturn').value
    }

    try {
        console.log(data);
        const response = await fetch('http://localhost:4000/books/returnBook', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            console.log("Данные успешно отправлены!");

            document.getElementById('surnameInpReturn').value = '';
            document.getElementById('nameInpReturn').value = '';
            document.getElementById('lastnameInpReturn').value = '';
            document.getElementById('titleInpReturn').value = '';
        } else {
            console.error("Не удалось отправить данные.");
        }
    } catch (error) {
        console.error("Произошла ошибка:", error);
    }
});

document.getElementById('closeReturn').addEventListener('click', () => {
    document.querySelector('.returnBookDiv').style.display = 'none'
})