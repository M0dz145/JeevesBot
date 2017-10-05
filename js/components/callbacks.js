annyang.addCallback('soundstart', function() {
    $('#preloader').fadeIn();
});

annyang.addCallback('result', function() {
    $('#preloader').fadeOut();
});

annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
    var $li = $('#app').find('li').last();
    $li.append('<div class="card-panel panel-2"></div>');
    var $row = $li.find('.panel-2');

    $row.append(userSaid + '<br>');
    phrases.forEach(function(phrase) {
        $row.append('<div class="chip">' + phrase + '</div>');
    });
});

annyang.addCallback('resultNoMatch', function(phrases) {
    var $li = $('#app').find('li').last();
    $li.append('<div class="card-panel panel-3 materialize-red">No match found<br></div>');
    var $row = $li.find('.panel-3');


    phrases.forEach(function(phrase) {
        $row.append('<div class="chip">' + phrase + '</div>');
    });
});

annyang.addCallback('error', function(error) {
    console.error(error);
});

annyang.addCallback('errorNetwork', function(errorNetwork) {
    console.error(errorNetwork);
});

var on = false;
$('#onOff').on('click', function(){
    on = !on;
    if(on) {
        $('#onOff').text('is off');
        annyang.abort();
    } else {
        $('#onOff').text('is on');
        annyang.start({ autoRestart: false });
    }
});