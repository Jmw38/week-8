document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('dataForm');
    const tableBody = document.querySelector('#dataTable tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get the value
        const ID = document.getElementById('ID').value;
        const name = document.getElementById('name').value;
        const phonenumber = document.getElementById('phonenumber').value;
        const email = document.getElementById('email').value;
        

        // makes the td functional
        const newRow = `
            <tr>
                <td>${ID}</td>
                <td>${name}</td>
                <td>${phonenumber}</td>
                <td>${email}</td>
            </tr>
        `;

        // Append the new row to the table
        tableBody.insertAdjacentHTML('beforeend', newRow);

        // Reset form fields
        form.reset();
    });
});