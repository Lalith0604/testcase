const faqs = document.querySelectorAll('.faq');

        faqs.forEach(faq => {
            const button = faq.querySelector('.anotation');
            button.addEventListener('click', () => {
                faq.classList.toggle('active');
                // Close other active FAQs if needed
                faqs.forEach(otherFaq => {
                    if (otherFaq !== faq && otherFaq.classList.contains('active')) {
                        otherFaq.classList.remove('active');
                    }
                });
            });
        });
//menu bar
let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}
//form appointment
// Form Submission
document.getElementById('detailsForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Client-side validation
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert('Invalid name. Please use letters and spaces only.');
        return;
    }
    if (!/^\d{10}$/.test(phone)) {
        alert('Invalid phone number. Must be 10 digits.');
        return;
    }

    try {
        const response = await fetch('/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, phone })
        });

        if (response.ok) {
            alert('Details submitted successfully!\n We will contact you soon..');
        } else {
            const { message } = await response.json();
            alert(`Error: ${message || 'Submission failed.'}`);
        }
    } catch (error) {
        alert('Network error. Please try again later.');
    }
});




  