if(ServiceWorker   in navigator){
    navigator.serviceWorker.register("/serviceworker.js");


}
else{
    console.log("SW is not supported");
}