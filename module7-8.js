/**
 * Created by Evgeniy Chaika on 05.04.2016.
 */
$(document).ready(function () {
    var $inputfield = $('.input-field');

    $inputfield.on('mouseenter', function () {
        showTooltip($(this));
    });
    $inputfield.on('mouseleave', function () {
        hideTooltip($(this));
    });
});

function showTooltip($el) {
    var tooltipText = $el.attr('data-title');
    $el.after('<div class="tooltip">' + tooltipText + '</div>')
        .next('.tooltip')
        .fadeIn(300);
}

function hideTooltip($el) {
    $el.next().fadeOut(300, removeToolTip);
    function removeToolTip() {
        $(this).remove();
    }
}