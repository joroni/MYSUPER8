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
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.',
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
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.',
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
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.',
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
                    sku: 'A0000001',
                    title: 'Denim Shirt',
                    cat: 'Sports Wear',
                    state: 'New',
                    statecolor: 'red',
                    size: '',
                    img: 'img/products/12.jpg',
                    oldprice: '',
                    price: 299.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 4,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: '2',
                    sku: 'A0000002',
                    title: 'Drypers Mega Pack',
                    cat: 'Baby',
                    state: 'Sale',
                    statecolor: 'green',
                    size: 'Large x 62 pcs',
                    img: 'img/products/baby.jpg',
                    oldprice: 630.00,
                    price: 503.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 2,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: '3',
                    sku: 'A0000003',
                    title: 'Cool Shirt',
                    cat: 'Out Wear',
                    state: '',
                    statecolor: '',
                    size: '',
                    img: 'img/products/14.jpg',
                    oldprice: '',
                    price: 99.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 1,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: '4',
                    sku: 'A0000004',
                    title: '137 Degrees Iced Coffee Latte with Almond Milk Drink',
                    cat: 'Coffee',
                    state: '',
                    statecolor: '',
                    size: '3 pcs x 180 ml',
                    img: 'img/products/coffee.jpg',
                    oldprice: '',
                    price: 80.00,
                    desc: 'Perfect iced coffee latte with almond milk',
                    stock: 50,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: '5',
                    sku: 'A0000005',
                    title: 'Gingen Strong Ginger Formula Tea',
                    cat: 'Tea',
                    state: 'Best Seller',
                    size: '',
                    statecolor: 'blue',
                    img: 'img/products/tea.jpg',
                    oldprice: '',
                    price: 440.00,
                    desc: 'Hot drink with slightly sweet and strong taste from aged quality ginger',
                    stock: 20,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: '6',
                    sku: 'A0000006',
                    title: 'Cool Shirt',
                    cat: 'Out Wear',
                    state: '',
                    statecolor: '',
                    size: '3 pcs x 180 ml',
                    img: 'img/products/15.jpg',
                    oldprice: '',
                    price: 80.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 8,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                }
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


$$('a.category').on('click', function () {
    var selectedCat = $$(this).html();
    // Alert username and password
    app.dialog.alert(selectedCat);
});
/*
$$(document).on('pageInit', '.page[data-page="catalogb"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
 alert('Customers page');
})
*/








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
$$('#submit').click(function () {
    var txtId = $$('#txt-id');
    var txtFname = $$('#fname');
    var txtLname = $$('#lname');
    var txtPhone = $$('#phone');
    var txtEmail = $$('#email');

    var input = $$('input');

    if (txtFname.val() === '' || txtLname.val() === '' || txtPhone.val() === '' || txtEmail.val() ===
        '' /*|| input === ""*/ ) {
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


$$('#btnStore').on('click', function () {
    loadStore();
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




                $$("#btnNew").click(function () {
                    console.log("reset fields");
                    $$('#dynamic-form')[0].reset();
                    $$('#modalBody').html("")
                    $$('#txt-id').val("");
                    $$("#modal-Title").html("Add Customer");

                })



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




                $$("#btnNew").click(function () {
                    console.log("reset fields");
                    $$('#dynamic-form')[0].reset();
                    $$('#modalBody').html("")
                    $$('#txt-id').val("");
                    $$("#modal-Title").html("Add Customer");

                })



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





/**************************************** CART */

function loadStore() {
    var	business_paypal = '', // aquí va tu correo electrónico de paypal
	currency_icon = '₱';
	mockIdSalesMngr = '1111111111111';
	localStorage.setItem("myCurrency", currency_icon);
	localStorage.setItem("idSalesMngr", mockIdSalesMngr);
    'use strict';

    //no coflict con underscores

    app.init = function () {
        console.log("initializing...");
        //totalItems totalAmount
        var total = 0,
            items = 0

        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
            items: []
        };

        if (undefined != cart.items && cart.items != null && cart.items != '' && cart.items.length > 0) {
            _.forEach(cart.items, function (n, key) {
                items = (items + n.cant)
                total = total + (n.cant * n.price)
            });

        }

        var total_Items = $('#totalItems');
        total_Items.text(items);
        //alert(items);
        if (items == 0) {
            $(total_Items).hide();
        } else {
            $(total_Items).show();
        }
        $('.totalAmount').text(currency_icon + ' ' + total + ' USD');

    }


    app.createProducts = function () {
        console.log("create products");

        var products = [{
                    id: 1,
                    sku: 'A0000001',
                    name: 'Denim Shirt',
                    cat: 'Sports Wear',
                    state: 'New',
                    statecolor: 'red',
                    size: '',
                    img: 'img/products/12.jpg',
                    oldprice: '',
                    price: 299.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 4,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: 2,
                    sku: 'A0000002',
                    name: 'Drypers Mega Pack',
                    cat: 'Baby',
                    state: 'Sale',
                    statecolor: 'green',
                    size: 'Large x 62 pcs',
                    img: 'img/products/baby.jpg',
                    oldprice: 630.00,
                    price: 503.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 2,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: 3,
                    sku: 'A0000003',
                    name: 'Cool Shirt',
                    cat: 'Out Wear',
                    state: '',
                    statecolor: '',
                    size: '',
                    img: 'img/products/14.jpg',
                    oldprice: '',
                    price: 99.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 1,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: 4,
                    sku: 'A0000004',
                    name: '137 Degrees Iced Coffee Latte with Almond Milk Drink',
                    cat: 'Coffee',
                    state: '',
                    statecolor: '',
                    size: '3 pcs x 180 ml',
                    img: 'img/products/coffee.jpg',
                    oldprice: '',
                    price: 80.00,
                    desc: 'Perfect iced coffee latte with almond milk',
                    stock: 50,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: 5,
                    sku: 'A0000005',
                    name: 'Gingen Strong Ginger Formula Tea',
                    cat: 'Tea',
                    state: 'Best Seller',
                    size: '',
                    statecolor: 'blue',
                    img: 'img/products/tea.jpg',
                    oldprice: '',
                    price: 440.00,
                    desc: 'Hot drink with slightly sweet and strong taste from aged quality ginger',
                    stock: 20,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: 6,
                    sku: 'A0000006',
                    name: 'Cool Shirt',
                    cat: 'Out Wear',
                    state: '',
                    statecolor: '',
                    size: '3 pcs x 180 ml',
                    img: 'img/products/15.jpg',
                    oldprice: '',
                    price: 80.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 8,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                }
            ],
            wrapper = $('#productosWrapper'),
            content = '',
            oldpricing = ''
        for (var i = 0; i < products.length; i++) {

            if (products[i].stock > 0) {

                if (products[i].oldprice != 0 || products[i].oldprice != '') {
                    oldpricing = currency_icon + '' + products[i].oldprice.toFixed(2)
                } else {
                    oldpricing = '';
                }

                content += '<div class="col-4 col-sm-4 no-gutter">'
                content += '<div class="cards productsonsale" id="prod_click' + products[i].id + '">'
                content += '<div class="view">'
                content += '<img src="' + products[i].img + '"class="card-img-top"  alt="' + products[i].name + '">'
                content += '<a href="product-page.html" onclick=getSKU("' + products[i].sku + '") data-sku="' + products[i].sku + '">'
                content += '<div class="mask rgba-white-slight"></div>'
                content += '</a>'
                content += '</div>'
                content += '<div class="card-body text-center parent">'
                content += '<a href="#" class="grey-text truncate">'
                content += '<h5 class="category">' + products[i].cat + '</h5>'
                content += '</a>'
                content += '<div class="truncate">'
                content += '<h5>'
                content += '<a href="" class="dark-grey-text"> ' + products[i].name + '</a>'
                content += '</h5>'
                content += '<p class="badge statebadge badge-pill ' + products[i].statecolor + '">' + products[i].state + '</p>'
                content += '</div>'
                content += '<h4 class=" blue-text">'
                content += '<del>' + oldpricing + ' </del>'
                content += '<span>' + currency_icon + '' + products[i].price.toFixed(2) + ' </span>'
                content += '</h4>'
                content += '<h3 class="hidden">We have: <span class="stock">' + products[i].stock + '</span></h3>'
                content += '<div class="input-group qtty-center">'
                content += '<span class="input-group-btn">'
                content += '<button type="button" class="btn manage-qtty  btn-number waves-effect waves-light  grey-border" onclick="app.updateItem(' + products[i].id + ',' + products[i].stock + ')"  data-type="minus">'
                content += '<img src="icons/noun_Remove_1807498-rounded-green.svg">'
                content += '</button>'
                content += '</span>'
                content += '<input type="number" id="prod_' + products[i].id + '" readonly name="quant[' + products[i].id + ']" class="form-control input-number quantity manage-qtty"  value="0" min="0" max="100">'
                content += '<span class="input-group-btn">'
                content += '<button type="button" class="btn btn-number waves-effect  submit ladda-button waves-light grey-border prod-' + products[i].id + '"  data-type="plus" data-style="slide-right" onclick="app.addtoCart(' + products[i].id + ');">'
                content += '<img src="icons/noun_Plus_1807498-rounded-green.svg">'
                content += '</button>'
                content += '</span>'
                content += '</div></div>'
                content += '</div>'
                content += '</div>'
                content += '</div>'


            }

        }

        wrapper.html(content);

        //wrapper2.html(content2);

        localStorage.setItem('products', JSON.stringify(products))
    }

    app.addtoCart = function (id) {
        //function checkHasUer(){

        if (!localStorage.getItem("idMember")) {

            alert("Please select a customer.");
            window.location.href = "customer-select.html";
            return false;
        } else {
            console.log("continue shopping");




            //console.log("add to cart");
            var l = Ladda.create(document.querySelector('.prod-' + id));

            l.start();
            var products = JSON.parse(localStorage.getItem('products')),
                producto = _.find(products, {
                    'id': id
                }),
                cant = 1;
            $$('body').css('opacity', '0.5');
            if (cant <= producto.stock) {
                if (undefined != producto) {
                    if (cant > 0) {
                        setTimeout(function () {
                            var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
                                items: []
                            };
                            app.searchProd(cart,
                                producto.id,
                                producto.sku,
                                parseInt(cant),
                                producto.name,
                                producto.price,
                                producto.img,
                                producto.stock,
                                producto.oldprice,

                                producto.notes,

                                producto.cname = localStorage.getItem("idMember"),
                                producto.check = "notsync",
                                producto.select,
                                producto.email,
                                producto.smname = localStorage.getItem("idSalesMngr"),
                                producto.timestamp,
                                producto.ponumber,
                                producto.total = localStorage.getItem("grndTotal")
                            )

                            l.stop();
                            console.log(parseInt(cant))
                            $('body').css('opacity', '1');
                        }, 100)

                    } else {
                        alert('Only larger quantities are allowed to zero');
                    }
                } else {
                    alert('Oops! Something we wrong, try again later')
                }
            } else {
                alert('You can not add more of this product');
            }

        }
    }

    app.searchProd = function (cart, id, sku, cant, name, price, img, available, oldprice, cname, smname, check, select, notes, email, timestamp, total, ponumber) {
        //si le pasamos un valor negativo a la cantidad, se descuenta del carrito
        var curProd = _.find(cart.items, {
            'id': id
        })
        console.log("search products");
        if (undefined != curProd && curProd != null) {
            //ya existe el producto, aÃ±adimos uno mÃ¡s a su cantidad
            if (curProd.cant < available) {
                curProd.cant = parseInt(curProd.cant + cant)
            } else {
                alert('This product is currently out of stock')
            }
            $('#prod_' + curProd.id).val(curProd.cant);
        } else {
            //sino existe lo agregamos al carrito
            var prod = {
                id: id,
                sku: sku,
                cant: cant,
                name: name,
                price: price,
                img: img,
                available: available,
                oldprice: oldprice,
                cname: cname,
                smname: smname,
                check: check,
                select: select,
                notes: notes,
                email: email,
                timestamp: timestamp,
                total: localStorage.getItem("grndTotal"),
                ponumber: ponumber,
            }
            cart.items.push(prod)

        }
        localStorage.setItem('cart', JSON.stringify(cart));
        app.init();
        app.getProducts();
        app.updatePayForm();

    }

    app.getProducts = function () {
        console.log("get products");
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
                items: []
            },
            msg = '',
            wrapper = $('.cart'),
            total = 0
        wrapper.html('')

        if (undefined == cart || null == cart || cart == '' || cart.items.length == 0) {
            wrapper.html('<div>Your cart is empty</div>');
            $('.cart').css('left', '-400%')
        } else {
            var items = '';
            _.forEach(cart.items, function (n, key) {
                var oldpricing = '';
                if (n.oldprice != 0 || n.oldprice != '') {
                    var oldpricing = currency_icon + '' + n.oldprice.toFixed(2)
                } else {
                    var oldpricing = '';
                }


                total = total + (n.cant * n.price);
                items += '<tr>'
                //items += '<td><img src="'+n.img+'" /></td>'
                items += '<td><span class="qant">' + n.cant + '</span></td>'
                items += '<td><h3 class="title">' + n.name + '</h3></td>'
                items += '<td colspan="2"><p class="right"><del>' + oldpricing + '</del></p>'
                items += '<p class="price right">' + currency_icon + '' + n.price.toFixed(2) + '</p></td>'
                items += '</tr>';
                $('#prod_' + n.id).val(n.cant);
            });

            //agregar el total al carrito
            items += '<tr class="total-row"><td colspan="2" > </td><td id="total" class="total right" colspan="3">' + currency_icon + '' + total.toFixed(2) + ' </td></tr>'
            items += '<tr><td colspan="5" class="total"></td></tr>'
            items += '<tr><td colspan="5"> <div id="submitForm"></div></td></tr>'
            wrapper.html(items);
            localStorage.setItem("grndTotal", total.toFixed(2));
            $('.cart').css('left', '0')
        }
    }


    app.updateItem = function (id, available) {
        //resta uno a la cantidad del carrito de compras
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
                items: []
            },
            curProd = _.find(cart.items, {
                'id': id
            })
        //actualizar el carrito
        curProd.cant = curProd.cant - 1;
        //validar que la cantidad no sea menor a 0
        if (curProd.cant > 0) {
            localStorage.setItem('cart', JSON.stringify(cart))
            app.init()
            app.getProducts()
            app.updatePayForm()
        } else {
            app.deleteProd(id, true)
        }
    }

    app.delete = function (id) {
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
            items: []
        };
        var curProd = _.find(cart.items, {
            'id': id
        })
        $('#prod_' + id + '').val('0');
        _.remove(cart.items, curProd);
        localStorage.setItem('cart', JSON.stringify(cart));
        app.init();
        app.getProducts();
        app.updatePayForm();
    }

    app.deleteProd = function (id, remove) {
        if (undefined != id && id > 0) {

            if (remove == true) {
                app.delete(id)
            } else {
                var conf = confirm('Remove this product?')
                if (conf) {
                    app.delete(id)
                }
            }

        }
    }

    app.updatePayForm = function () {
        //eso va a generar un formulario dinamico para paypal
        //con los products y sus precios
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
            items: []
        };

        localStorage.setItem("purchaseorder", JSON.stringify(cart));
        var grandtotal = localStorage.getItem("grndTotal");
        //var statics = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_cart"><input type="hidden" name="upload" value="1"><input type="hidden" name="currency_code" value="USD" /><input type="hidden" name="business" value="' + business_paypal + '">',
        var statics = '<form action="/" method="post"><input type="hidden" name="cmd" value="_cart"><input type="hidden" name="upload" value="1"><input type="hidden" name="currency_code" value="PHP" /><input type="hidden" name="business" value="SUPER 8"><input type="hidden" name="grandtotal" id="grandtotal" value="' + grandtotal + '">',
            dinamic = '',
            wrapper = $('#submitForm')

        wrapper.html('')

        if (undefined != cart && null != cart && cart != '') {
            var i = 1;
            _.forEach(cart.items, function (prod, key) {
                dinamic += '<input type="hidden" name="item_name_' + i + '" value="' + prod.name + '">'
                dinamic += '<input type="hidden" name="amount_' + i + '" value="' + prod.price + '">'
                dinamic += '<input type="hidden" name="iuem_sku_' + i + '" value="' + prod.sku + '">'
                dinamic += '<input type="hidden" name="item_number_' + i + '" value="' + prod.id + '" />'
                dinamic += '<input type="hidden" name="quantity_' + i + '" value="' + prod.cant + '" />'
                dinamic += '<input type="hidden" id="grndTotal" name="total_' + i + '" value="' + grandtotal + '" />' // added by jrn
                i++;
            })

            statics += dinamic + '<button type="submit" class="pay btn btn-success">Submit<i class="ion-chevron-right"></i></button></form>'

            wrapper.html(statics)
        }


    }

   /***************************** */
   

 app.showOrders = function() {
    // alert("orders");
    var myObj, i, item = "";
    var po = JSON.parse(localStorage.getItem("purchaseorder"));
    //  var po = localStorage.getItem("purchaseorder");
    console.log(po);
    myObj = po;
    for (i in myObj.items) {

        item += '<a href="product-page.html" onclick=getSKU("' + myObj.items[i].sku + '") data-sku="' +  myObj.items[i].sku + '" class="list-group-item list-group-item-action flex-column align-items-start">'
        item += '<div class="d-flex w-100 justify-content-between">'
        item += '<h5 class="mb-2 h5">' + myObj.items[i].notes + '</h5>'
        item += '<small class="order-status">Not Synced</small>'
        item += '</div>'
        item += '<p class="mb-2">' + myObj.items[i].cname + '</p>'
        item += '</a>';
        //  items += '<li class="nav-item"><a class="nav-link waves-effect" href="' + myObj.menuitems[i].url + '">' + myObj.menuitems[i].notes + '</li>';
        /* for (j in myObj.menuitems[i].models) {
             items += myObj.menuitems[i].models[j] + "<li class='hidden'>";
         }*/
    }

    $("#mainOrders").html(item);


}


 app.showMenu = function() {
    // alert("orders");
    var myObj, i, j, items = "";
    myObj = {
        "name": "John",
        "age": 30,
        "menuitems": [{
                "name": "Home",
                "url": "index.html"
            },
            {
                "name": "Acount",
                "url": "user.html"
            },
            {
                "name": "Customers",
                "url": "customer-list.html"
            },
            {
                "name": "Orders",
                "url": "orders.html"
            },
            {
                "name": "Store",
                "url": "storegroup.html"
            }
        ]
    }
    for (i in myObj.menuitems) {
        items += '<li class="nav-item"><a class="nav-link waves-effect" href="' + myObj.menuitems[i].url + '">' + myObj.menuitems[i].name + '</li>';
        /* for (j in myObj.menuitems[i].models) {
             items += myObj.menuitems[i].models[j] + "<li class='hidden'>";
         }*/
    }

    $("#mainMenu").html(items);


}
/************************************* */

 app.getSKU = function(ThisSKU){
    sessionStorage.setItem("skuItem", ThisSKU);
}

 app.productsPage = function() {

    var activeSKU = sessionStorage.getItem("skuItem");
    console.log(activeSKU);
    //var ThisSKU = $(this).attr("data-sku");
    //var activeSKU = sessionStorage.getItem("ThisSKU");

    var skusList = localStorage.getItem("products");
    skus = JSON.parse(skusList);
    console.log(skus);

    var SearchTag = function (sku) {
        var i = null;
        for (i = 0; skus.length > i; i += 1) {
            if (skus[i].sku === sku) {
                return skus[i];
            }
        }

        return null;
    };

    var product = SearchTag(activeSKU);
    oldpricing = '';
    if (product) {
        var oldprice = product.oldprice;
        if (oldprice != 0 || oldprice != '') {
            oldpricing = currency + '' + oldprice;
        } else {
            oldpricing = '';
        }

        var cat = product.cat;
        var desc = product.desc;
        var id = product.id;
        var img = product.img;
        var name = product.name;
        var price = product.price;
        var size = product.size;
        var sku = product.sku;
        var state = product.state;
        var statecolor = product.statecolor;
        var stock = product.stock;

        // var currency = localStorage.getItem("myCurrency");

        // console.log(cat+"|"+desc+"|"+id+"|"+img+"|"+name+"|"+price+"|"+size);
        $("#thisName").html(name);
        $("#prodImg").html('<img src="' + img + '" class="img-fluid prod-page-image" alt="' + name + '">');
        $("#thisBadges").html('<a href="">' +
            '<span class="badge ' + statecolor + ' mr-1">' + state + '</span>' +
            '</a>');
        $("#thisStock").html("In Stock: " + stock);
        $("#thisLead").html('<span class="mr-1">' +
            '<del>' + oldpricing + '</del>' +
            '</span>' +
            '<span>' + currency + '' + price + '</span>')
        $("#thisDesc").html(desc);
        /* $("#thisAddCart").html('<input type="number" value="1" id="prod_'+id +'" readonly name="quant['+id+']"  aria-label="Search" class="form-control" style="width: 100px">'+
         '<button class="btn btn-primary btn-md my-0 btn-number waves-effect  submit ladda-button waves-light" type="button"  onclick="app.addtoCart(' +id + ');">Add to cart'+
           '<i class="fa fa-shopping-cart ml-1"></i>'+
        '</button>');*/

        $("#footerBtns").html('<div class="row"><div class="btn-group" role="group" aria-label="Basic">' +
            '<button type="button" class="btn btn-success manage-qtty btn-number h-40 waves-effect waves-light" onclick="app.updateItem(' + id + ',' + stock + ')" data-type="minus"><i class="material-icons">remove</i></button>' +
            '<input type="number"id="prod_' + id + '" readonly="" name="quant[' + id + ']" class="form-control input-number quantity manage-qtty h-40" value="0" min="0" max="100" style="height:40px; width:80px;">' +
            '<button type="button" class="btn btn-success btn-number waves-effect h-40 submit ladda-button waves-light prod-' + id + '" data-type="plus" data-style="slide-right" onclick="app.addtoCart(' + id + ');"><i class="material-icons">add</i></button>' +
            //'<button type="button" class="btn btn-number waves-effect  submit ladda-button waves-light grey-borders btn-success prod-'+id+'" data-type="plus" data-style="slide-right" onclick="app.addtoCart('+id+');">Add to Cart</button>');
            '<a class="btn btn-info waves-effect waves-light h-40 pl-4 pr-4" href="#" role="button" data-toggle="modal" data-target="#modalCart">View Cart</a></div></div>');

    }

}

/***************************** */
    $(document).ready(function () {
        app.init();

        app.updatePayForm();
        app.createProducts();
        app.getProducts();

        $(".btn-checkout").click(function () {
            app.updatePayForm();
        })


        /******************* */

         // showQuantity();
    app.showMenu();
    //addCustomer();
    app.showOrders();
    currency_icon = '₱';
    localStorage.setItem("myCurrency", currency_icon);


        /******************* */

    })

}
/**************************************** CART */