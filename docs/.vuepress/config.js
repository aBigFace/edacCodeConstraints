module.exports = {
    title: 'Work Doc · LuoRunfeng',
    description: '分享一些前端开发心得，前端最新技术栈，以及项目开发的约束',
    base: '/edacCodeConstraints/',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },

    themeConfig: {
        subSidebar: 'auto',
        nav: [
            { text: '首页', link: '/' },
            {
                text: ' MarkDown',
                items: [
                    { text: '在线编辑', link: 'https://markdown.com.cn/editor/' },
                    { text: '语法速查', link: 'https://markdown.com.cn/cheat-sheet.html' }
                ]
            }
        ],
        sidebar: [{
                title: 'Git配置',
                path: '/',
                collapsable: false, // 不折叠
                children: [{
                    title: "电脑SSH配置",
                    path: "/handbook/git/git-connect-ssh",
                }, ]
            },
            {
                title: "代码规范",
                collapsable: false, // 不折叠
                children: [
                    { title: "前端代码格式", 
                    path: "/handbook/shema/code/code-format" },
                    { title: "前端统一接口", path: "/handbook/shema/code/interface-shema" }
                ],
            },
            {
                title: "命名规范",
                collapsable: false, // 不折叠
                children: [
                    { title: "文件名命名", 
                    path: "/handbook/shema/name/file-name-schema" },
                    { title: "文件夹命名",
                     path: "/handbook/shema/name/dir-name-schema" }
                ],
            },
            {
                title: "性能优化",
                collapsable: false, // 不折叠
                children: [
                    { title: "组件库引入方式", 
                    path: "/handbook/shema/performance/component-import-method" },
                ],
            }
        ]
    }
}