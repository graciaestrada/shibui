// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	panel:{
		swipe:true
	},
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Diseño Web II',
	dialog: {
		title: 'Diseño Web II',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/register/',
    	url: 'register.html',
    	name: 'register',
  		},
		{
		path: '/Perfil/',
    	url: 'Perfil.html',
    	name: 'Perfil',
  		},
		{
		path: '/products/',
    	url: 'products.html',
    	name: 'products',
  		},
		{
		path: '/cart/',
    	url: 'cart.html',
    	name: 'cart',
  		},
		{
		path: '/addtocartboots/',
    	url: "addtocartboots.html",
    	name: 'addtocartboots',
  		},
		{
		path: '/addtocartcrop/',
    	url: "addtocartcrop.html",
    	name: 'addtocartcrop',
  		},
		{
		path: '/addtocartskirts/',
    	url: "addtocartskirts.html",
    	name: 'addtocartskirts',
  		},
		{
		path: '/addtocartjeans/',
    	url: "addtocartjeans.html",
    	name: 'addtocartjeans',
  		},
	]
});

// Export selectors engine
var $$ = Dom7;

$$('#btnComprar').on('click', function () {
  app.dialog.alert('!Your Order was placed!!');
});

$$('#btnConfirmar').on('click', function () {
  app.dialog.confirm('¿Desea procesar su compra?', function () {
    app.dialog.alert('!Your order was completed successfully!');
  });
});
$$('#btnLogin2').on('click', function () {
	app.loginScreen.close(".modal-login");
});

$$('#btnLogin').on('click', function () {
	var Usuario = $$('#user').val();
	var Password = $$('#password').val();
	
  	if(Usuario == "jframos" && Password == "123"){
		app.loginScreen.close(".modal-login");
		
	}else{
		app.dialog.alert('We are sorry, your data is incorrect');
	}
	
	
});



 

