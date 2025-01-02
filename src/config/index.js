const environmentUrls = new Map();

environmentUrls.set('localhost','http://localhost:8080');
environmentUrls.set('book-store-web-d8c8362782af.herokuapp.com','https://book-demo-store1-1c18ca138b3c.herokuapp.com');

export default environmentUrls.get(window.location.hostname);