document.addEventListener("DOMContentLoaded", () => {
    // 元素获取
    const landingView = document.getElementById('landing-view');
    const portfolioGridView = document.getElementById('portfolio-grid-view');
    const navLinks = document.querySelectorAll('.main-nav a');
    const gridContainer = document.getElementById('project-grid-container');
    const toggleHeaders = document.querySelectorAll('.nav-toggle'); 

    // 视图切换函数
    const switchView = (roleFilter = 'all', typeFilter = 'all') => {
        // 1. 切换视图：Landing View 消失，Grid View 出现
        if (landingView && portfolioGridView) {
            landingView.style.display = 'none';
            portfolioGridView.style.display = 'block';
        }

        // 2. 运行筛选
        if (gridContainer) {
            generateProjectGrid(gridContainer, roleFilter, typeFilter);
        }
    };

    // ⬇️ 核心功能：折叠菜单逻辑 ⬇️
    toggleHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const category = header.getAttribute('data-category');
            const submenu = document.querySelector(`.submenu[data-category="${category}"]`);
            
            if (submenu) {
                // 检查是否已展开
                if (submenu.style.height === '0px' || submenu.style.height === '') {
                    // 展开菜单：必须计算内容高度 (scrollHeight)
                    submenu.style.height = submenu.scrollHeight + 'px';
                } else {
                    // 折叠菜单：必须先设置到实际高度，再设为 0，以触发 CSS transition
                    submenu.style.height = submenu.scrollHeight + 'px'; // 确保浏览器知道当前高度
                    // 强制浏览器重绘（确保 transition 生效）
                    getComputedStyle(submenu).height; 
                    submenu.style.height = '0px'; 
                }
            }
        });
    });

    // ⬇️ 核心功能：筛选逻辑 ⬇️
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const singleFilter = e.target.getAttribute('data-filter'); // 用于 'all', 'showcase', 'branded'
            const roleFilter = e.target.getAttribute('data-role'); // 用于 'editing', 'color'
            const typeFilter = e.target.getAttribute('data-type'); // 用于 'narrative', 'commercial'

            // 激活链接 (必须在筛选前执行)
            navLinks.forEach(nav => nav.classList.remove('active'));
            e.target.classList.add('active');

            // 逻辑分支
            if (singleFilter === 'all' || singleFilter === 'showcase' || singleFilter === 'branded') {
                switchView(singleFilter); 
            } else if (roleFilter && typeFilter) {
                // 二级菜单筛选 (Role AND Type)
                switchView(roleFilter, typeFilter);
            }
        });
    });

    // 初始化时，让主页加载并确保子菜单是关闭的
    if (landingView) {
        landingView.style.display = 'flex';
        portfolioGridView.style.display = 'none';
        
        // 确保子菜单初始是关闭的 (防止页面刷新时闪烁)
        document.querySelectorAll('.submenu').forEach(sub => sub.style.height = '0px'); 

        // 确保 'All Projects' 按钮默认处于激活状态
        const allProjectsLink = document.getElementById('show-grid-link');
        if (allProjectsLink) allProjectsLink.classList.add('active');
    }
    
    // 确保 detail 页面功能不变
    const detailContainer = document.getElementById('project-detail-container');
    if (detailContainer) {
        generateProjectDetail(detailContainer);
    }
});

// **********************************************
// * 核心筛选函数 (请确保 app.js 中包含此部分代码) *
// **********************************************

function generateProjectGrid(container, roleFilter, typeFilter) {
    // ... (generateProjectGrid 函数的完整代码) ...
    container.innerHTML = ''; 

    const filteredProjects = projectsData.filter(project => {
        // 1. 'All Projects' 或 'Showcase' / 'Branded' 单标签筛选
        if (roleFilter === 'all' || roleFilter === 'showcase' || roleFilter === 'branded') {
            return roleFilter === 'all' || project.roles.includes(roleFilter);
        }
        
        // 2. 二级菜单 (Role AND Type) 筛选
        if (roleFilter && typeFilter) {
            // 必须同时满足 角色 (role) 和 类型 (type) 两个条件
            const roleMatch = project.roles.includes(roleFilter);
            const typeMatch = project.roles.includes(typeFilter);

            return roleMatch && typeMatch;
        }

        return true; 
    });

    // 渲染筛选后的项目
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
    const project = projectsData.find(p => p.id === projectId);

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
