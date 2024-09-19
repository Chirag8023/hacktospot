// script.js

const dataCache = {};

window.onload = function() {
    loadData('projects'); // Load default data initially
    setupTabs();
};

function setupTabs() {
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.addEventListener('click', async function() {
            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            this.classList.add('active');
            
            // Load corresponding data
            const type = this.getAttribute('data-type');
            if (dataCache[type]) {
                displayTable(dataCache[type], type);
            } else {
                await loadData(type);
            }
        });
    });

    // Set default active button
    const defaultButton = document.querySelector('.tab-button[data-type="projects"]');
    if (defaultButton) {
        defaultButton.classList.add('active');
    }
}

async function loadData(type) {
    console.log(`Loading data for: ${type}`); // Debugging log
    let url = '';
    switch (type) {
        case 'projects':
            url = 'projects.json';
            break;
        case 'events':
            url = 'events.json';
            break;
        case 'challenges':
            url = 'challenges.json';
            break;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dataCache[type] = data; // Cache the data
        displayTable(data, type);
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

function displayTable(data, type) {
    const tableContent = document.getElementById('data-table');
    tableContent.innerHTML = ''; // Clear previous content
    tableContent.style.display = 'block'; // Make the table content visible

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table headers
    const headers = ['Organization', 'Description', 'Link'];
    if (type !== 'projects') {
        headers.splice(2, 0, 'Date'); // Add 'Date' header for events and challenges
    }

    const tr = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        tr.appendChild(th);
    });
    thead.appendChild(tr);

    // Create table rows
    data.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <img src="${item.logo}" alt="${item.organization} logo" width="50">
                <div>${item.organization}</div>
            </td>
            <td>${item.description}</td>
            ${type !== 'projects' ? `<td>${item.date}</td>` : ''}
            <td><a href="${item.link}" target="_blank">Link</a></td>
        `;
        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    tableContent.appendChild(table);
}
