const form = document.myForm;

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    alert(form.decision)
})