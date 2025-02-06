document.getElementById("imageUpload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("previewImage").src = e.target.result;
            document.getElementById("previewImage").style.display = "block";
            localStorage.setItem("uploadedImage", e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

function generatePortfolio() {
    let userName = document.getElementById('name').value || 'Your Name';
    let userBio = document.getElementById('bio').value || 'A short bio about you...';
    let userSkills = document.getElementById('skills').value.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
    let userProjects = document.getElementById('projects').value.split(',').map(proj => proj.trim()).filter(proj => proj !== '');
    let projectOverviews = document.getElementById('project-overviews').value.split(',').map(overview => overview.trim()).filter(overview => overview !== '');
    let userEmail = document.getElementById('email').value || 'your.email@example.com';
    let userLinkedIn = document.getElementById('linkedin').value || 'linkedin.com/in/yourprofile';
    let userPhone = document.getElementById('phone').value || '+1 234 567 890';
    let userAddress = document.getElementById('address').value || '123 Pug Lane, Dogtown, USA';
    let uploadedImage = localStorage.getItem("uploadedImage") || "https://via.placeholder.com/150";

    let newPortfolio = `
        <header class="header">
            <div>
                <h1>Hi, I'm <span>${userName}</span></h1>
                <p>Welcome to my Portfolio</p>
            </div>
            <img src="${uploadedImage}" alt="Profile Picture">
        </header>

        <section class="default-portfolio">
            <h2>About Me</h2>
            <div class="about">
                <img src="${uploadedImage}" alt="Profile Picture">
                <p>${userBio}</p>
            </div>
        </section>

        <section class="skills">
            <h3>Skills</h3>
            <ul>${userSkills.map(skill => `<li>${skill}</li>`).join('')}</ul>
        </section>

        <section class="default-portfolio">
            <h2>Projects</h2>
            <div class="projects">
                ${userProjects.map((proj, index) => `
                    <div class="book">
                        <div class="cover">${proj}</div>
                        <p>${projectOverviews[index]}</p>
                    </div>
                `).join('')}
            </div>
        </section>

        <section class="contact-section">
            <h2>Contact</h2>
            <div class="contact-content">
                <div class="contact-details">
                    <p><strong>Email:</strong> ${userEmail}</p>
                    <p><strong>Phone:</strong> ${userPhone}</p>
                    <p><strong>Address:</strong> ${userAddress}</p>
                    <p><strong>LinkedIn:</strong> <a href="https://${userLinkedIn}" target="_blank">${userLinkedIn}</a></p>
                </div>
                <div class="contact-image">
                    <img src="${uploadedImage}" alt="Profile Picture">
                </div>
            </div>
        </section>
    `;

    document.getElementById('new-portfolio').innerHTML = newPortfolio;
}
