export default {
    state: {
        sidebar: {
            title: "Menu",
            menu: [
                {
                    link: '/',
                    text: 'home',
                    src: 'iconHome',
                },
                {
                    link: '/about',
                    text: 'about us',
                    src: 'iconAbout',
                },
                {
                    link: '/products',
                    text: 'products',
                    src: 'iconProduct',
                },
                {
                    link: '/team',
                    text: 'our team',
                    src: 'iconTeam',
                },
                {
                    link: '/blog',
                    text: 'blog',
                    src: 'iconBlog',
                },
                {
                    link: '/contact',
                    text: 'contact',
                    src: 'iconContact',
                },
            ],
            login: "Log in",
            sign: "Sign up",
        },
    },
    getters: {
        sidebar(state) {
            return state.sidebar;
        },
    },
    mutations: {
        sidebarUnlock(state, payload) {
            const sidebar = document.getElementById('sidebar');
            const page = document.getElementById('page')
            if (!sidebar.classList.contains("sidebar--active")) {
                sidebar.classList.add('sidebar--active')
                page.classList.add('page--close')
                document.querySelector('body').classList.add("hidden")
            } else {
                sidebar.classList.remove('sidebar--active')
                page.classList.remove('page--close')
                document.querySelector('body').classList.remove("hidden")
            }
        },
        sidebarRem() {
            if (window.innerWidth >= 1360) {
                const sidebar = document.getElementById('sidebar');
                const page = document.getElementById('page')

                sidebar.classList.remove('sidebar--active')
                page.classList.remove('page--close')
                document.querySelector('body').classList.remove("hidden")
            }
        },
        btnLogAnim(_, e) {
            const x = e.pageX - e.target.offsetLeft
            const y = e.pageY - e.target.offsetTop

            e.target.style.setProperty('--xLeftForm', `${x}px`)
            e.target.style.setProperty('--yTopForm', `${y}px`)
        },
    },
    actions: {
        sidebar({ commit, state }, products) {
            console.log(commit.sidebar);
        }
    }
}