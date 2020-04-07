$(document).ready(function () {
    ymaps.ready(init);
    function init() {
        var map = new ymaps.Map("map", {
            center: [55.753215, 37.622504],
            zoom: 17,
        });
    }

    $("[data-modal-close]").click(function () {
        var id = $(this).attr("data-modal-close");
        $('[data-modal="' + id + '"]').hide();
    });

    $("[data-modal-show]").click(function () {
        var id = $(this).attr("data-modal-show");
        $('[data-modal="' + id + '"]').show();
    });

    $.validator.addMethod(
        "phone",
        function (value) {
            return value.replace(/\D+/g, "").length >= 11;
        },
        "Введите номер телефона полностью"
    );

    $("form[data-validate]").each(function (i, el) {
        $(el).validate({
            rules: {
                phone: "phone",
            },
            submitHandler: function (form) {
                //Отправляем AJAX
                $('[data-modal="2"]').show();
                //form.submit();
            },
        });
    });

    $(".modal__phone").mask("+7 (999) 999-9999");
});
