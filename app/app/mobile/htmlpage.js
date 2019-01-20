// This function is called when the app navigates to this view (using a link)
function init() {
    // initialize any data here that should be available when the view is shown
    
}

// This function is called when the user returns to this view from another view
function resume(from) {
    // from.back       (true/false) if true, the user pressed the "Back" button to return to this view
    // from.dismissed  (true/false) if true, the app dismissed to return to this view
    // from.path       contains the path of the view that the user returned from

    // if any data needs to be refreshed when the user returns to this view, you can do that here:
    
}

component.html().on('initBridge', function() {
    return 'OK';
});

component.html().on('getData', function() {
    //use hard coded dates
    var samples = DB.sample.where('captured_at > ?', new Date(new Date(1542667388000) - 5*24*60*60*1000))
    
    var data = [];
    samples.forEach(function (sample) {
        data.push({x: sample.captured_at.toISOString(), y: sample.temperature});
    })
    
    return data;
});