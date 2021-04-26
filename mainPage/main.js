
    var options = {
        offset  : '20%',
        moveX   : '50px',
        moveY   : '200px',
      }

      var changes1 = {
        offset  : '15%',
        rotateX: '90deg',
        transition: '1s',
      }

      var changes2 = {
        offset  : '15%',
        rotateX: '90deg',
        transition: '2s',
      }

      var changes3 = {
        offset  : '15%',
        rotateX: '90deg',
        transition: '3s',
      }

    $('.featurette').smoove(options);

    $('.shpunk1').smoove(changes1);
    $('.shpunk2').smoove(changes2);
    $('.shpunk3').smoove(changes3);

    $("#searchN").click(() => {
      if ($("#Search").val().length > 0) {
          location = "/roulettePage/index.html?" + $("#Search").val();
      } else {
          window.location.reload();
      }
    })

