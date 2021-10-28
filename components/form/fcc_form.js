const inputs = document.querySelectorAll('.required-fields');

inputs.forEach((input) => {
    input.addEventListener('blur', (e) => {
        let errMsg = e.target.nextElementSibling;
        if (!e.target.value) {
            errMsg.classList.remove('hide')
        }else{
            errMsg.classList.add('hide')
        }
    })
});