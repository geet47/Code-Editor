let isLocked = false;

function copyCode() {
    const codeTextarea = document.getElementById('code');
    codeTextarea.select();
    document.execCommand('copy');
}

function saveCode() {
    const codeTextarea = document.getElementById('code');
    const code = codeTextarea.value;
    // Here You can save the code to your desired location or server .
    console.log('Code saved:', code);
}

function toggleLock() {
    const codeTextarea = document.getElementById('code');
    isLocked = !isLocked;
    codeTextarea.readOnly = isLocked;
}