// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
     // productbs: [customers],
     productbs: [{
          id: '1',
          title: 'John',
          fname: 'Dough',
          phone: '0995475142',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.',
          birth_month: '11',
          birth_day: '12',
          birth_yr: '1982',
          add_street: 'Taylo Street',
          add_unit: 'Unit 1 Dough Apartments',
          add_city: 'Quezon City',
          add_area: 'Brgy. Gumamela',
          add_zip:'1068',
          add_landmark: 'Near EastWest',
          timestamp: '150495687901'
        },
        {
          id: '2',
          title: 'Anne',
          fname: 'Hattaway',
          phone: '0995475142',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.',
          birth_month: '12',
          birth_day: '20',
          birth_yr: '1978',
          add_street: 'Melon Street',
          add_unit: 'The Heights Subd',
          add_city: 'Quezon City',
          add_area: 'Brgy. 6',
          add_zip:'1223',
          add_landmark: 'Near EastWest',
          timestamp: '150495687978'
        },
        {
          id: '3',
          title: 'Rafael',
          fname: 'Domingo',
          phone: '0995475143',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.',
          birth_month: '12',
          birth_day: '20',
          birth_yr: '1978',
          add_street: 'Melon Street',
          add_unit: 'The Heights Subd',
          add_city: 'Quezon City',
          add_area: 'Brgy. 6',
          add_zip:'1223',
          add_landmark: 'Near EastWest',
          timestamp: '150495687975'
        }
      ],
      products: [{
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]

    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

/*
// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});

*/
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});

var customersView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});



$(document).on('pageInit', '.page[data-name="catalogb"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
  app.dialog.alert('Customers');
})
