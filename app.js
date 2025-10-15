document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById('project-grid-container');
    const detailContainer = document.getElementById('project-detail-container');

    if (gridContainer) {
        generateProjectGrid(gridContainer);
    }
    if (detailContainer) {
        generateProjectDetail(detailContainer);
    }
});

function generateProjectGrid(container) {
    projectsData.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        
        // Link points to project.html?id=unique-id
        projectItem.innerHTML = `
            <a href="project.html?id=${project.id}">
                <img src="${project.coverImage}" alt="${project.title} Cover">
                <span class="title-overlay">${project.title}</span>
            </a>
        `;
        container.appendChild(projectItem);
    });
}

function generateProjectDetail(container) {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projectsData.find(p => p.id === projectId);

    if (project) {
        document.title = `${project.title} - Ryan Wang`;
        
        // Check if a YouTube ID exists to decide whether to show the video
        // Uses the video ID if the string is not blank and does not start with a full URL
        const videoHtml = project.youtubeId && project.youtubeId.startsWith('[') === false ? `
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/${project.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        ` : '';

        container.innerHTML = `
            ${videoHtml}
            
            <h1>${project.title}</h1>
            <div class="project-info-box">
                ${project.description}
            </div>
        `;
    } else {
        container.innerHTML = `<h1>Project Not Found</h1><p>The requested project could not be found. Please return to the <a href="index.html">Homepage</a>.</p>`;
    }
}
