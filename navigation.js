async function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) {
        console.error('Sidebar container not found.');
        return;
    }

    try {
        const response = await fetch('navigation.html');
        if (!response.ok) {
            throw new Error(`Failed to fetch navigation: ${response.statusText}`);
        }
        const sidebarHTML = await response.text();
        sidebar.innerHTML = sidebarHTML;

        // Set the subtitle based on the page's title
        const subtitle = document.title.split('|')[1]?.trim() || 'Directory';
        const sidebarSubtitle = document.getElementById('sidebar-subtitle');
        if (sidebarSubtitle) {
            sidebarSubtitle.textContent = subtitle;
        }

        // Hide the navigation button for the current page
        const currentPage = window.location.pathname.split('/').pop();
        const mapPages = ['maps.html', 'mushroom-kingdom-maps.html', 'midlands-maps.html'];
        const navLinks = sidebar.querySelectorAll('.nav-button');

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage) {
                link.style.display = 'none';
            }
            // If we are on any map page, hide the main "Tactical Maps" link
            if (mapPages.includes(currentPage) && linkHref === 'maps.html') {
                link.style.display = 'none';
            }
        });

    } catch (error) {
        console.error('Failed to load sidebar navigation:', error);
        sidebar.innerHTML = '<p style="color: var(--negative-color);">Error: Could not load navigation.</p>';
    }
}

// Run the sidebar initialization when the script is loaded.
initializeSidebar();