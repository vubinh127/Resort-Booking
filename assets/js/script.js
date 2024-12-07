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