var menu_app = new Vue({
    el: '.menu_app',
    data: {
        menuList: [
            { title: "Main", access: "", controller: "main_section"},
            { title: "Workspace", access: "", controller: "workspace_section"},
            { title: "Projects", access: "", controller: "projects_section"},
            { title: "Statistics", access: "", controller: "statistics_section"},
            { title: "Team", access: "", controller: "team_section"},
            { title: "Apps", access: "", controller: "apps_section"},
            { title: "Admin Panel", access: "", controller: "admin_section"},
            { title: "Blog", access: "", controller: "blog_section"},
            { title: "Settings", access: "", controller: "settings_section"},
            { title: "Log Out", access: "", controller: ""} ],
        show_list: false,
        page: "Main"
    },
    methods: {
        menuTrigger(action) {
            if (action) {
                this.$refs.menu.style.width = "250px";
                this.$refs.openMenuButton.style.marginLeft = "250px";
                this.show_list = true;
                document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            } else {
                this.$refs.menu.style.width = "0";
                this.$refs.openMenuButton.style.marginLeft = "0";
                this.show_list = false;
                document.body.style.backgroundColor = "white";
            }
        },

        onMenuBtnClick(section) {
            //alert(section);
            page_app.$data.currentSection = section;
            this.menuTrigger(false);
        }
    }
});


// Page Controller //

var page_app = new Vue({
    el: '.page_app',
    data: {
        currentSection: 'main_section'
    },
    methods: {
        
    }
});





// Comments //

/*
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    
   //router
*/

/* function getTemplateData(templateName) {
    console.log("in");
    var div = document.createElement('div');
    $div.load('1.txt');
    $
    alert(data.html());
    return '<div>Yeha</div>';
}; */

/*

const Main = new Vue({
    template: "#main"
})

const Workspace = new Vue({
    template: "#workspace"
})
*/

/*
const routes = [
    { path: '/Main', component: Main },
    { path: '/Workspace', component: Workspace },
    { path: '/Workspace', component: Projects }
];

const router = new VueRouter({
  routes 
});*/
