
function toggleMenu() {
    const hiddenOptions = document.getElementById('ocult-technologies');
    const toggleBtn = document.querySelector('.button-projects');
    
    if (hiddenOptions.classList.contains('show')) {
    hiddenOptions.classList.remove('show');
    setTimeout(() => {
        hiddenOptions.style.display = 'none';
    }, 400); 
    toggleBtn.textContent = 'All Tools';
    } else {
    hiddenOptions.style.display = 'flex';
    hiddenOptions.style.flexDirection = 'column';
    setTimeout(() => {
        hiddenOptions.classList.add('show');
    }, 10); 
    toggleBtn.textContent = 'Hide Tools';
    }
}

function copyClipboard() {
    navigator.clipboard.writeText("enmanuelnunezmatias@gmail.com").then(() => {
        const message = document.createElement('div');
        message.className = 'copy-message show';
        message.textContent = 'Email copied to clipboard';
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.classList.add('hidden');
            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 300); 
        }, 3000);
    })
}

