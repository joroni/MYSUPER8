// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
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
          add_zip: '1068',
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
          add_zip: '1223',
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
          add_zip: '1223',
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



$(document).on('pageInit', '.page[data-page="catalogb"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
  alert('Customers page');
})





/*************************************** WEBSQL */

var db = openDatabase('super8', '1.0', 'Customers and Order processing', 100 * 1024);

//$$(document).ready(function () {

console.info("Initialize...");

init();

memberList();

selectCustomertoShop();
console.info("Carga Complete...");

////////////////////////////////////////////////////////////////////
////////////////////////////Funciones jquery///////////////////////
////////////////////////////////////////////////////////////////////

$('#submit').click(function () {
  var txtId = $('#txt-id');
  var txtFname = $('#fname');
  var txtLname = $('#lname');
  var txtPhone = $('#phone');
  var txtEmail = $('#email');

  var input = $('input');

  if (txtFname.val() === '' || txtLname.val() === ''  || txtPhone.val() === '' || txtEmail.val() === '') {
      alert("All fields are Required...");
      return;
  }

  var integrante = Object();

  integrante.fname = txtFname.val();
  integrante.lname = txtLname.val();
  integrante.phone = txtPhone.val();
  integrante.email = txtEmail.val();

  

  if (txtId.val() === '') { //Lo guarda
      integrante.id = new Date().getTime();
      saveMember(integrante);
  } else { //Lo actualiza
      integrante.id = parseInt(txtId.val());
      updateMember(integrante);
  }

  memberList();

  txtFname.val(null);
  txtLname.val(null);
  txtPhone.val(null);
  txtEmail.val(null);
  txtId.val(null);
});



$$('#customerList').on("click", ".btn-user-info", function () {
  var idMember = $$(this).data("id");
  selectMember(idMember);
  $$("label").addClass("active");
  //$$("#modal-Title").html("View Customer");
});


$$('#customerList').on("click", ".btn-editar", function () {
  var idMember = $$(this).data("id");
  selectMember(idMember);
  $$("label").addClass("active");
  $$("#modal-Title").html("Edit Customer");

});

$$('#customerList').on("click", ".btn-eliminar", function () {
  var idMember = $$(this).data("id");
  removeMember(idMember);
  memberList();
});



$$('#btnCustomers').on('click', function () {
  memberList();
});


//});

////////////////////////////////////////////////////////////////////
///////////////////////funciones para el CRUd///////////////////////
////////////////////////////////////////////////////////////////////
function init() {
  db.transaction(function (tx) {
    tx.executeSql('create table if not exists CUSTOMERS(ID, FNAMES, LNAMES,PHONE, EMAIL)');
    tx.executeSql('create table if not exists PURCHASEORDER(ID, FNAMES, LNAMES,PHONE, EMAIL)');
  }, error, exito);
}

function memberList() {
  db.readTransaction(function (t) {
    t.executeSql('SELECT rowid, ID, FNAMES, LNAMES, PHONE, EMAIL FROM CUSTOMERS', [], function (t, rs) {
      if (rs.rows.length > 0) {
        var lisHtml = "";

        for (var i = 0; i < rs.rows.length; i++) {
          var integrante = rs.rows.item(i);
          var id = integrante.ID;
          var fullname = integrante.FNAMES + ' ' + integrante.LNAMES;

          lisHtml += '<li><a href="/customerinfo/" onclick="selectMember(' + id + ')">' + fullname + '</a></li>';
          // $$('#ccompleteName').html(fullname);

        }

        localStorage.setItem("listHTML", lisHtml);

        // var permdata = localStorage.getItem("listHTML");
        // console.log(permdata);

        $$('#customerList').html(lisHtml);


        /* $$(function () {
             $$('.icon-btn').on('click', function () {
                 $$('.showData').toggle();
             });
         });*/


        $$('[data-toggle="class"]').click(function () {
          var $target = $$($$(this).data('target'));
          var classes = $$(this).data('classes');

          $target.toggleClass(classes);
          return false;
        });


        //$$("#btnNewContainer").html('<a href-="#" id="saveCustomer" onclick="saveCustomer();" type="submit" class="button form-to-data button button-raised button-fill">Submit</a>');

        /*  $$("#btnNew").click(function () {
              console.log("reset fields");
              $$('#dynamic-form')[0].reset();
              $$('#modalBody').html("")
              $$('#txt-id').val("");
              $$("#modal-Title").html("Add Customer");

          })*/



      }

    }, error);
  });
}





function selectCustomertoShop() {
  db.readTransaction(function (t) {
    t.executeSql('SELECT ID, FNAMES, LNAMES, PHONE, EMAIL FROM CUSTOMERS', [], function (t, rs) {
      if (rs.rows.length > 0) {
        var lisHtml = '';

        for (var i = 0; i < rs.rows.length; i++) {
          var integrante = rs.rows.item(i);
          var id = integrante.ID;



          /*    lisHtml += '<div class="list-group-item customer-list list-group-item-action">'+
                                '<div class="media"><i class="material-icons"></i>' +
                                    '<a href="#" onclick="viewidMember('+ id +')"><img src="img/user.svg" class="mr-3 btn-user-info img-circle" width="48" alt=' + integrante.FNAMES + ' ' + integrante.LNAMES +" /></a>" +
                                    '<div class="media-body"><h5 class="mt-0 customer-name">' + integrante.FNAMES + ' ' + integrante.LNAMES + '</h5><p> ' + integrante.PHONE + '</p></div>'+
                                '</div>'+
                            '</div>';
*/

          lisHtml += '<li><a href="#" onclick="viewidMember(' + id + ')">' + integrante.FNAMES + ' ' + integrante.LNAMES + '</li>'

        }


        $$('#customerList').html(lisHtml);



        $$('[data-toggle="class"]').click(function () {
          var $target = $$($$(this).data('target'));
          var classes = $$(this).data('classes');

          $target.toggleClass(classes);
          return false;
        });







      }

    }, error);
  });
}




function saveMember(integrante) {
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO CUSTOMERS(ID, FNAMES, LNAMES, PHONE, EMAIL) VALUES(?, ?, ?,?,?)', [
            integrante.id, integrante.fname, integrante.lname, integrante.phone, integrante.email
        ]);
    }, error, function () {
        alert("Item Saved.");
        // $$(".close, .pop-up").trigger();
        $$(".popup-backdrop").removeClass("backdrop-in");

    });
}



function selectMember(idMember) {
  // localStorage.setItem("customer-name",idMember);
  db.readTransaction(function (t) {
    t.executeSql('SELECT ID, FNAMES, LNAMES , PHONE, EMAIL FROM CUSTOMERS WHERE ID = ?', [idMember],
      function (t, rs) {
        if (rs.rows.length > 0) {
          var lisHtml = '';
          var integrante = new Object();
          integrante.fname = rs.rows.item(0).FNAMES;
          integrante.lname = rs.rows.item(0).LNAMES;
          integrante.phone = rs.rows.item(0).PHONE;
          integrante.email = rs.rows.item(0).EMAIL;
          /* $$('#txt-id').val(rs.rows.item(0).ID);
           $$('#fname').val(rs.rows.item(0).FNAMES);
           $$('#lname').val(rs.rows.item(0).LNAMES);
           $$('#phone').val(rs.rows.item(0).PHONE);
           $$('#email').val(rs.rows.item(0).EMAIL);*/
          $$('#customerInfo').html('<li>' +
            '<div class="item-content">' +
            '<div class="item-media"><i class="material-icons icon-f7">person</i></div>' +
            '<div class="item-inner">' +
            '<div class="item-title">' + rs.rows.item(0).FNAMES + ' ' + rs.rows.item(0).LNAMES + '</div>' +
            '<div class="item-after"></div>' +
            '</div>' +
            '</div>' +
            '</li>' +
            '<li>' +
            '<div class="item-content">' +
            '<div class="item-media"><i class="material-icons icon-f7">phone</i></div>' +
            '<div class="item-inner">' +
            '<div class="item-title"> ' + rs.rows.item(0).PHONE + '</div>' +
            '<div class="item-after"></div>' +
            '</div>' +
            '</div>' +
            '</li>' +
            '<li>' +
            '<div class="item-content">' +
            '<div class="item-media"><i class="material-icons icon-f7">mail</i></div>' +
            '<div class="item-inner">' +
            '<div class="item-title">' + rs.rows.item(0).EMAIL + '</div>' +
            '<div class="item-after"></div>' +
            '</div>' +
            '</div>' +
            '</li>')


        }
      }, error);
  });
}



function memberProfile(idMember) {
  db.readTransaction(function (t) {
    t.executeSql('SELECT ID, FNAMES, LNAMES , PHONE, EMAIL FROM CUSTOMERS WHERE ID = ?', [idMember],
      function (t, rs) {
        if (rs.rows.length > 0) {

          var lisHtml = '';

          for (var i = 0; i < rs.rows.length; i++) {
            var integrante = rs.rows.item(i);
            var id = integrante.ID;
            var fname = integrante.FNAMES;
            var lname = integrante.LNAMES;
            var phone = integrante.PHONE;
            var email = integrante.EMAIL;


            lisHtml += '<li>'
            '<div class="item-content">'
            '<div class="item-media"><i class="material-icons icon-f7">person</i></div>'
            '<div class="item-inner">'
            '<div class="item-title">' + fname + ' ' + lname + '</div>'
            '<div class="item-after"></div>'
            '</div>'
            '</div>'
            '</li>'
            '<li>'
            '<div class="item-content">'
            '<div class="item-media"><i class="material-icons icon-f7">phone</i></div>'
            '<div class="item-inner">'
            '<div class="item-title">' + phone + '</div>'
            '<div class="item-after"></div>'
            '</div>'
            '</div>'
            '</li>'
            '<li>'
            '<div class="item-content">'
            '<div class="item-media"><i class="material-icons icon-f7">mail</i></div>'
            '<div class="item-inner">'
            '<div class="item-title">' + email + '</div>'
            '<div class="item-after"></div>'
            '</div>'
            '</div>'
            '</li>'


          }


          $$('#customerInfo').html(lisHtml);





        }

      }, error);
  });
}



function viewidMember(idMember) {
  localStorage.setItem("idMember", idMember);
  console.log(idMember);
  // viewidMember(idMembre);
  db.readTransaction(function (t) {
    t.executeSql('SELECT ID, FNAMES, LNAMES , PHONE, EMAIL FROM CUSTOMERS WHERE ID = ?', [idMember],
      function (t, rs) {
        if (rs.rows.length > 0) {
          var integrante = new Object();
          integrante.fname = rs.rows.item(0).FNAMES;
          integrante.lname = rs.rows.item(0).LNAMES;
          integrante.phone = rs.rows.item(0).PHONE;
          integrante.email = rs.rows.item(0).EMAIL;
          $$('#txt-id').val(rs.rows.item(0).ID);
          $$('#fname').html(rs.rows.item(0).FNAMES);
          $$('#lname').html(rs.rows.item(0).LNAMES);
          $$('#phone').html(rs.rows.item(0).PHONE);
          $$('#email').html(rs.rows.item(0).EMAIL);
          //console.log($$(this).attr([id]));
        }
      }, error);
  });
}

function updateMember(integrante) {
  db.transaction(function (tx) {
    tx.executeSql('UPDATE CUSTOMERS SET FNAMES = ?, LNAMES = ?, PHONE = ?, EMAIL = ?, WHERE ID = ?', [
      integrante.phone, integrante.fname, integrante.lname, integrante.id
    ]);
  }, error, function () {
    alert("The member has been updated successfully");
  });
}

function removeMember(idMember) {


  var retVal = confirm("This will delete the selected record? Do you want to continue ?");
  if (retVal == true) {
    db.transaction(function (tx) {
      tx.executeSql('DELETE FROM CUSTOMERS WHERE ID = ?', [idMember]);
    }, error, function () {
      alert("The member has been removed successfully");
    })
    return true;
  } else {

    return false;
  }



  /*  db.transaction(function (tx) {
        tx.executeSql('DELETE FROM CUSTOMERS WHERE ID = ?', [idMember]);
    }, error, function () {
        alert("The member has been rem successfully");
    });*/
}
/*
function savePO(integrante) {
  db.transaction(function (tx) {
    tx.executeSql('INSERT INTO CUSTOMERS(ID, FNAMES, LNAMES, PHONE, EMAIL) VALUES(?, ?, ?,?,?)', [
      integrante.id, integrante.fname, integrante.lname, integrante.phone, integrante.email
    ]);
  }, error, function () {
    alert("Item Saved.");
    $$(".close").trigger();
  });
}
*/

////////////////////////////////////////////////////////////////////
////////////////////////Funciones de logueo////////////////////
////////////////////////////////////////////////////////////////////
var error = function (err) {
  console.error(err);
};

var exito = function () {
  console.info("Table created...");
};
/*************************************** WEBSQL */
