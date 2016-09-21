$(function() {

    var msgIndex;
    var loadedIndex;
    var msgsArray = []; // Array to save elements
    var oneMsgElement;
    
    //TODO: Create array from json file instead load here
    //10 messages loaded into array
    for(var indx=0; indx<10 ;indx++) {
        oneMsgElement = '<li id=message_'+indx+'>' +
            '<img src="http://www.gravatar.com/avatar/7483?s=48&d=identicon" />'+
            '<h2>Accus nossimo </h2>'+
            '<p>blandae des esti to es etur, occum quaerumquos am, nonsequos' +
            'quis illest eos ma core nus, comnis eatiissitex</p>' +
            '<p class="ago">'+ indx +' hours ago</p>' +
            '</li>';
        msgsArray.push(oneMsgElement);
        msgIndex = indx;
    }

    //first 3 items loaded immediately
    for(var loadIndx=0; loadIndx< 3;loadIndx++) {
        oneMsgElement = msgsArray[loadIndx];
        $( oneMsgElement ).prependTo( "#ticker" );
        loadedIndex = loadIndx;
    }
    //increase loadedIndex to show next element in array
    loadedIndex = loadedIndex + 1;

    
    //Add message Event happened
    $( "#addMessage" ).click(function() {
        msgIndex = msgIndex + 1;
        oneMsgElement = '<li id=message_'+ msgIndex+ '>'+
            '<img src="http://www.gravatar.com/avatar/7483?s=48&d=identicon" />'+
            '<h2>Accus nossimo </h2>'+
            '<p>blandae des esti to es etur, occum quaerumquos am, nonsequos' +
            'quis illest eos ma core nus, comnis eatiissitex</p>' +
            '<p class="ago">'+msgIndex+' hours ago</p>' +
            '</li>';
        
        //New message pushed into array of elements
        msgsArray.push(oneMsgElement);
    });

    //Setting ticker plugin here
    // var i = 0;
    $("#ticker").ticker({
        initialTimeout: 500,
        mouseOnTimeout: 3000,
        mouseOffTimeout: 2000,
        scrollTime: 1200,
        fadeTime: 1000,
        fixContainer: true,
        next: function(lastItem, nextItem) {
            //Here the magic happens
            if(loadedIndex < msgsArray.length) { //Still have messages in array
                nextItem($(msgsArray[loadedIndex]));
                loadedIndex = loadedIndex + 1;
            } else { //If reached last item start from zero index
                nextItem($(msgsArray[0]));
                loadedIndex = 1;
            }
        }
    });

});