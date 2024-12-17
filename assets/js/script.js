$(document).ready(function() { 
    
    var today = new Date();

    $('.hotel-date-start').datepicker({
        format: 'dd/mm/yyyy',
        startDate: today,
        autoclose: true,
        todayHighlight: true
    }).on('changeDate', function (e) {
        $('.hotel-date-end').datepicker('setStartDate', e.date);
    });

    $('.hotel-date-end').datepicker({
        format: 'dd/mm/yyyy',
        startDate: today, 
        autoclose: true,
        todayHighlight: true
    }).on('changeDate', function (e) {
        $('.hotel-date-start').datepicker('setEndDate', e.date);
    });

    $('.hotel-info-passenger').click(function(event) {  
        $('.box-input-item').addClass('open');  
        event.stopPropagation();  
    });  

    $('.type-minus, .type-plus').click(function(event) {  
        event.stopPropagation();  

        var change = $(this).data('type') === 'plus' ? 1 : -1;  

        adjustRoomCount(change);   
    });  

    $(document).click(function() {  
        $('.box-input-item').removeClass('open');   
    });  


    const minPrice = 0;
    const maxPrice = 6348000;

    $("#hotel-cat-slider-range").slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [0, maxPrice], 
        slide: function (event, ui) {
            $(".slider-box-show-price .from").text(ui.values[0].toLocaleString());
            $(".slider-box-show-price .to").text(ui.values[1].toLocaleString());
        }
    });

    $(".slider-box-show-price .from").text($("#hotel-cat-slider-range").slider("values", 0).toLocaleString());
    $(".slider-box-show-price .to").text($("#hotel-cat-slider-range").slider("values", 1).toLocaleString());

    var $contentWrapper = $('.content-introduce .content');
    var $toggleButton = $('.toggle-button');

    if ($contentWrapper[0].scrollHeight <= 570) {
        $toggleButton.hide();
    }

    $toggleButton.on('click', function () {
        if ($contentWrapper.hasClass('expanded')) {
            $contentWrapper.removeClass('expanded').css('max-height', '570px');
            $toggleButton.text('Xem thêm');
        } else {
            $contentWrapper.addClass('expanded').css('max-height', $contentWrapper[0].scrollHeight + 'px');
            $toggleButton.text('Thu gọn');
        }
    });
});  


function adjustRoomCount(change) {  
    var $currentElement = $(event.target).closest('td').find('.type-show');   
    var currentCount = parseInt($currentElement.text());  
    var minCount = parseInt($currentElement.attr('data-min'));  
    var maxCount = parseInt($currentElement.attr('data-max'));  

    var newCount = currentCount + change;  

    if (newCount >= minCount && newCount <= maxCount) {  
        $currentElement.text(newCount);  

        var $minusButton = $(event.target).closest('td').find('.type-minus');  
        var $plusButton = $(event.target).closest('td').find('.type-plus');  
        
        $minusButton.toggleClass('disabled', newCount <= minCount);  
        $plusButton.toggleClass('disabled', newCount >= maxCount);  

        // Cập nhật giá trị trong ô input  
        updatePassengerCount();  
    }  
}  

function updatePassengerCount() {  
    var roomCount = $('.type-room.type-show').text();  
    var adultCount = $('.type-adult.type-show').text();  
    var childCount = $('.type-child.type-show').text();  

    $('.hotel-info-passenger').val(roomCount + ' phòng, ' + (parseInt(adultCount) + parseInt(childCount)) + ' khách');  
}  

function scrollToTop() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
}