$(document).ready(function () {
  ymaps.ready(init);
  var map;
  function init() {
    map = new ymaps.Map("map", {
      center: [55.67325, 37.502283],
      zoom: 17,
    });
    var myPlacemark_106 = new ymaps.Placemark([55.67325, 37.502283], {
      balloonContentHeader: "", //3718                  balloonContentBody: '', //Описание объекта
      balloonContentFooter: "",
      hintContent: "", //Кликните для более подробной информации
    });

    //Показываем все метки на карте
    map.geoObjects.add(myPlacemark_106);
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
        var name = $(".modal__name").val();
        var phone = $(".modal__phone").val();
        $.ajax({
          url: "https://khasenov.ru/maski/telegram.php",
          type: "post",
          data: { name: name, phone: phone },
          dataType: "json",
          success: function () {
            $('[data-modal="2"]').show();
          },
        });

        //form.submit();
      },
    });
  });

  $(".modal__phone").mask("+7 (999) 999-9999");
});
