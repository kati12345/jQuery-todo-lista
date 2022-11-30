
//lisätään tehtäviä
$(document).on('click', '.lisaaTehtava', function () {
    var tehtava = $(this).siblings('input').val();
    var todos = `<li class="task"><div class="row-parent">
                    <div class="list-rivi">
                        <div class="list-data">`+ tehtava + `</div>
                        <div class="muokkaaTehtavaa">&#9998;</div>
                        <div class="poistaTehtava">&#x2715;</div>
                    </div>
                    <div class="list-error"></div>
                </div></li >`;

    if ($.trim(tehtava) == '') {
        $(this).parents('.wrapper').find('.error').text('Lisää tehtävä!!');
    }
    else {
        $(this).parents('.wrapper').find('.task-box').append(todos);

        $(this).parents('.wrapper').find('.error').empty();
    }
    $(this).siblings('input').val('')
});

// tehtävien lisäys Enterillä
$(document).keydown(function (event) {
    if (event.which == 13) {
        event.preventDefault();
        $('.lisaaTehtava').click();
    }
});

// poista tehtäviä
$(document).on('click', '.poistaTehtava', function () {
    $(this).parent('.row-parent .list-rivi').remove();
})

// muokkaa tehtäviä
$(document).on('click', '.muokkaaTehtavaa', function () {
    $(this).attr('class', 'muokattuTehtava');
    $(this).html('&#x2713;');
    var listText = $(this).parent('.list-rivi').find('.list-data').html();
    var listDataHeight = $(this).parent('.list-rivi').find('.list-data').innerHeight();
    $(this).parent('.list-rivi').find('.list-data').attr('class', 'update-data');

    if (listDataHeight > 50) {
        $(this).parent('.list-rivi').find('.update-data').html('<textarea style="height:' + listDataHeight + 'px">' + listText + '</textarea>');
    } else {
        $(this).parent('.list-rivi').find('.update-data').html('<textarea style="height:' + listDataHeight + 'px">' + listText + '</textarea>');
    }

});

//lisää muokattu tehtävä listaan
$(document).on('click', '.muokattuTehtava', function () {
    var uusiteht = $(this).parent('.list-rivi').find('textarea').val();
        $(this).attr('class', 'muokkaaTehtavaa');
        $(this).html('&#9998;');
        $(this).parent('.list-rivi').find('.update-data').attr('class', 'list-data');
        var uusiteht = $(this).parent('.list-rivi').find('.list-data').html(uusiteht);
});
