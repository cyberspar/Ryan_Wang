document.addEventListener("DOMContentLoaded", () => {
    // 元素获取
    const landingView = document.getElementById('landing-view');
    const portfolioGridView = document.getElementById('portfolio-grid-view');
    const navLinks = document.querySelectorAll('.main-nav a');
    const gridContainer = document.getElementById('project-grid-container');

    // 确保 Landing View 是默认状态
    if (landingView && portfolioGridView) {
        landingView.style.display = 'flex';
        portfolioGridView.style.display = 'none';
    }

    // 切换视图并激活筛选的函数
    const switchView = (roleFilter = null, typeFilter = null) => {
        // 1. 切换视图
        landingView.style.display = 'none';
        portfolioGridView.style.display = 'block';

        // 2. 激活正确的链接
        navLinks.forEach(nav => nav.classList.remove('active'));
        
        // 3. 运行筛选
        if (gridContainer) {
            generateProjectGrid(gridContainer, roleFilter, typeFilter);
        }
    };
    
    // 监听导航栏的所有点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const singleFilter = e.target.getAttribute('data-filter'); // 用于 'all', 'showcase', 'branded'
            const roleFilter = e.target.getAttribute('data-role'); // 用于 'editing', 'color'
            const typeFilter = e.target.getAttribute('data-type'); // 用于 'narrative', 'commercial'

            // 激活链接
            navLinks.forEach(nav => nav.classList.remove('active'));
            e.target.classList.add('active');

            // 逻辑分支
            if (singleFilter === 'all') {
                switchView('all', 'all'); // 'All Projects' 按钮
            } else if (singleFilter) {
                // 'showcase' 或 'branded' 按钮
                switchView(singleFilter);
            } else if (roleFilter && typeFilter) {
                // 二级菜单筛选 (Editing/Color + Narrative/Commercial)
                switchView(roleFilter, typeFilter);
            }
        });
    });

    // 确保 detail 页面功能不变 (省略了 app.js 后面部分，请确保保留你完整的 app.js)
    
    // ... 确保 generateProjectGrid 和 generateProjectDetail 包含在 app.js 中 ...
});

// **********************************************
// * 核心筛选函数 (请确保在 app.js 中包含此函数) *
// **********************************************

function generateProjectGrid(container, roleFilter, typeFilter) {
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

        return true; // 默认返回 true，以防出现意外情况
    });

    // 渲染筛选后的项目 (代码与之前一致)
    filteredProjects.forEach(project => {
        // ... (渲染代码) ...
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
