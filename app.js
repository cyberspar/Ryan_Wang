document.addEventListener("DOMContentLoaded", () => {
    // 元素获取
    const landingView = document.getElementById('landing-view');
    const portfolioGridView = document.getElementById('portfolio-grid-view');
    const navLinks = document.querySelectorAll('.main-nav a');
    const gridContainer = document.getElementById('project-grid-container');
    const siteTitle = document.querySelector('.site-title'); 

    // 视图切换函数 (切换到网格视图并筛选)
    const switchView = (roleFilter, typeFilter, activeLink) => {
        // 1. 切换视图
        if (landingView && portfolioGridView) {
            landingView.style.display = 'none';
            portfolioGridView.style.display = 'block';
        }

        // 2. 激活链接
        navLinks.forEach(nav => nav.classList.remove('active'));
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // 3. 运行筛选
        if (gridContainer) {
            generateProjectGrid(gridContainer, roleFilter, typeFilter);
        }
    };
    
    // 视图切换函数 (切换回主页图片视图)
    const switchToLanding = () => {
        if (landingView && portfolioGridView) {
            landingView.style.display = 'flex';
            portfolioGridView.style.display = 'none';
        }
        navLinks.forEach(nav => nav.classList.remove('active'));
    };

    // 筛选逻辑 - 点击链接时，切换到网格视图
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const roleFilter = e.target.getAttribute('data-role');
                const typeFilter = e.target.getAttribute('data-type');

                if (roleFilter && typeFilter) {
                    switchView(roleFilter, typeFilter, e.target);
                }
            });
        });
    }

    // 点击左上角标题，回到图片主页
    siteTitle.addEventListener('click', (e) => {
        e.preventDefault(); 
        switchToLanding();
    });

    // 初始状态设置
    if (window.location.search === "") {
         switchToLanding();
    }
    
    // 确保 detail 页面功能不变
    const detailContainer = document.getElementById('project-detail-container');
    if (detailContainer) {
        generateProjectDetail(detailContainer);
        landingView.style.display = 'none';
        portfolioGridView.style.display = 'none';
    }
});


// **********************************************
// * 核心筛选函数 (保持不变) *
// **********************************************

function generateProjectGrid(container, roleFilter, typeFilter) {
    container.innerHTML = ''; 

    const filteredProjects = window.projectsData.filter(project => {
        const roleMatch = project.roles.includes(roleFilter);
        const typeMatch = project.roles.includes(typeFilter);
        return roleMatch && typeMatch;
    });

    filteredProjects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        
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
    const project = window.projectsData.find(p => p.id === projectId); 

    if (project) {
        document.title = `${project.title} - Ryan Wang`;
        
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
