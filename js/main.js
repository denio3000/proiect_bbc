
var menuItems = [
		{
			title: 'home',
			color: '#007bc7',
		},		
		{
			title: 'news',
			color: '#003bc7',
		},		
		{
			title: 'sport',
			color: '#123bc7',
		},
		{
			title: 'weather',
			color: '#5dbc75',
		},				
		{
			title: 'shop',
			color: '#f9bc7f',
		},				
		{
			title: 'earth',
			color: '#d35c7a',
		},				
		{
			title: 'travel',
			color: '#ac3dc7',
		},
	];


for (var i = 0;  i < menuItems.length; i++) {
	console.log(menuItems[i].title);
	$('#main-menu').append('<li style="border-bottom:3px solid '+menuItems[i].color+'">'+menuItems[i].title+'</li>');
 
}












