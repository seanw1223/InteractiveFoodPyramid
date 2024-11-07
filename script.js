document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.inc').forEach(button => {
        button.addEventListener('click', function() {
            const countSpan = this.previousElementSibling;
            var count = parseInt(countSpan.innerText, 10);
            countSpan.innerText = ++count;
        });
    });

    document.querySelectorAll('.dec').forEach(button => {
        button.addEventListener('click', function() {
            const countSpan = this.nextElementSibling;
            var count = parseInt(countSpan.innerText, 10);
            if (count > 0) {
                countSpan.innerText = --count;
            }
        });
    });

   
    const editableTitle = document.getElementById('title');
    editableTitle.addEventListener('click', function() {
        const newName = prompt('Enter a new name:', this.innerText);
        if (newName) {
            this.innerText = newName;
        }
    });
});








