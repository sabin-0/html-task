document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const passwordDisplay = document.getElementById('passwordDisplay');
    const passwordList = document.getElementById('passwordList');
  
    generateBtn.addEventListener('click', () => {
      generatePassword();
    });
  
    // Function to generate a random password
    function generatePassword() {
      fetch('/generate-password')
        .then(response => response.json())
        .then(data => {
          passwordDisplay.textContent = `Generated Password: ${data.password}`;
          fetchPasswords();
        })
        .catch(error => console.error('Error generating password:', error));
    }
  
    // Function to fetch all saved passwords
    function fetchPasswords() {
      fetch('/get-passwords')
        .then(response => response.json())
        .then(data => {
          renderPasswordList(data);
        })
        .catch(error => console.error('Error fetching passwords:', error));
    }
  
    // Function to render the password list
    function renderPasswordList(passwords) {
      passwordList.innerHTML = '';
      passwords.forEach(password => {
        const listItem = document.createElement('li');
        listItem.textContent = `Purpose: ${password.purpose}, Password: ${password.password}, Created: ${new Date(password.creationDate)}`;
        passwordList.appendChild(listItem);
      });
    }
  
    // Initial fetch of passwords when the page loads
    fetchPasswords();
  });
  