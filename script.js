// Navigation to other pages
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const page = item.getAttribute('data-page');

        // Simple page routing logic
        switch (page) {
            case 'index':
                window.location.href = 'index.html';
                break;
                case 'resume':
                window.location.href = 'resume.html';
                break;
            case 'about':
                window.location.href = 'about.html';
                break;
            case 'portfolio':
                window.location.href = 'portfolio.html';
                break;
            case 'blog':
                window.location.href = 'blog.html';
                break;
            case 'contact':
                window.location.href = 'contact.html';
                break;
            default:
                alert("Page not found!");
        }
    });
});

// Navigation to other pages
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const page = item.getAttribute('data-page'); // Get page name from data attribute

            // Redirect to the selected page
            window.location.href = `${page}.html`;
        });
    });
});
