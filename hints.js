const revealHintBtn = document.getElementById('reveal-hint'),
    confirmModal = document.getElementById('confirm-modal'),
    confirmDesc = document.getElementById('confirm-desc'),
    cancelBtn = document.getElementById('cancel'),
    confirmBtn = document.getElementById('confirm'),
    hintText = document.getElementById('hint-content'),
    hintLocalStorageKey = 'hint-count',
    hintUsage = JSON.parse(localStorage.getItem(hintLocalStorageKey)) ?? [],
    hintsUsed = hintUsage.length,
    hintLimit = 2,
    modalDesc = hintsUsed > 1 ? 'This is your last hint' : 'You have 2 hints left.',
    pageName = window.location.pathname.split("/").pop().replace(".html", "");

// If you're reached the limit, prevent hint usage.
if (hintsUsed >= hintLimit) {
    revealHintBtn.disabled = true;
    revealHintBtn.innerHTML = 'All hints used :('
}

// Persist hint usage.
if (hintUsage.includes(pageName)) {
    hintText.hidden = false;
    revealHintBtn.disabled = true;
}

confirmDesc.innerHTML = modalDesc;

revealHintBtn.addEventListener('click', () => {
    confirmModal.showModal();
});

cancelBtn.addEventListener('click', () => {
    confirmModal.close()
});

confirmBtn.addEventListener('click', () => {
    hintUsage.push(pageName);
    localStorage.setItem(hintLocalStorageKey, JSON.stringify(hintUsage));
    confirmModal.close();
    revealHintBtn.disabled = true;
    hintText.hidden = false;
})