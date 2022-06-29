window.onload = habilitarBotonReserva();

function addModal() {
  $("#calendar").modal("show");
}
function addModalIngresarInformacion() {
  $("#ingresarInformacion").modal("show");
}

$(".miCalendar")
  .datepicker({
    startDate: "today",
    format: "dd/mm/yyyy",
    language: "es",
    orientation: "bottom auto",
    todayBtn: "linked",
    daysOfWeekDisabled: "2",
    autoclose: true,
    todayHighlight: true,
  })
  .on("changeDate", function (e) {
    let fecha =
      e.date.getDate() +
      "/" +
      e.date.getMonth() +
      "/" +
      e.date.getUTCFullYear();
    $("#campoFecha").val(fecha);

    cargarDesplegableHorario(e);
    validarCamposFormulario();
    habilitarDesplegableHorarios();
  });

function cargarDesplegableHorario(e) {
  if (e.date.getDay() == 1 || e.date.getDay() == 3) {
    agregarElemento(lu_mier);
  } else if (e.date.getDay() == 4 || e.date.getDay() == 7) {
    agregarElemento(jue_dom);
  } else {
    agregarElemento(vier_sab);
  }
}
function agregarElemento(horarios) {
  horarios.forEach((h) => {
    var hora = h;
    var elemento = document.createElement("option");
    elemento.textContent = hora;
    elemento.value = hora;
    $("#horario").append(elemento);
  });
}

function camposForm() {
  let fecha = $("#campoFecha").val();
  let hora = $("#horario").val();
  let cantPersonas = $("#personas").val();
  let datos = { fecha, hora, cantPersonas };
  return datos;
}
//Reservar
function detalle() {
  let fecha = $("#campoFecha").val();
  let hora = $("#horario").val();
  let cantPersonas = $("#personas").val();
  $("#detalleReserva").append(
    "<p>" + fecha + ", " + hora + "hs, " + cantPersonas + "<p>"
  );
}
function habilitarBotonReserva() {
  let datos = camposForm();
  if (datos.fecha != "" && datos.hora != null && datos.cantPersonas != null) {
    $("#reservar").prop("disabled", false);
  } else {
    $("#reservar").prop("disabled", true);
  }
}
function habilitarBotonReserveAhora() {
  if (
    $("#nombreForm").val() != "" &&
    $("#apellido").val() != "" &&
    $("#email").val() != ""
  ) {
    $("#btnReservarAhora").prop("disabled", false);
  } else {
    $("#btnReservarAhora").prop("disabled", true);
  }
}
function validarCamposFormularioReserveAhora() {
  if ($("#nombreForm").val() != "") {
    $("#nombreForm").removeClass("is-invalid");
    $("#obligatorioNombreForm").css("display", "none");
  } else {
    $("#nombreForm").addClass("is-invalid");
    $("#obligatorioNombreForm").css("display", "block");
  }
  if ($("#apellido").val() != "") {
    $("#apellido").removeClass("is-invalid");
    $("#obligatorioApellido").css("display", "none");
  } else {
    $("#apellido").addClass("is-invalid");
    $("#obligatorioApellido").css("display", "block");
  }
  if ($("#email").val() != "") {
    $("#email").removeClass("is-invalid");
    $("#obligatorioEmail").css("display", "none");
  } else {
    $("#email").addClass("is-invalid");
    $("#obligatorioEmail").css("display", "block");
  }
}
function resetForm() {
  $("#ReservarForm").trigger("reset");
  $("#reservaRealizada").empty();
  $("#detalleReserva p").empty();
  $("#detalleReserva p").empty();
  $("#datosReservaForm").trigger("reset");

  habilitarBotonReserva();
  validarCamposFormulario();

  validarCamposFormularioReserveAhora();
  habilitarBotonReserveAhora();
}

function habilitarDesplegableHorarios() {
  $("#horario").prop("disabled", false);
  $("#obligatorio").css("display", "block");
  $("#validationCampoHorario").css("display", "none");
}

function validarCamposFormulario() {
  let datos = camposForm();
  if (datos.fecha != "") {
    $("#campoFecha").removeClass("is-invalid");
    $("#validationServerUsernameFeedback").css("display", "none");
  } else {
    $("#campoFecha").addClass("is-invalid");
    $("#validationServerUsernameFeedback").css("display", "block");
  }
  if (datos.hora != null) {
    $("#horario").removeClass("is-invalid");
    $("#obligatorio").css("display", "none");
  } else {
    $("#horario").addClass("is-invalid");
    $("#obligatorio").css("display", "block");
  }
  if (datos.cantPersonas != null) {
    $("#personas").removeClass("is-invalid");
    $("#validationCampoPersona").css("display", "none");
  } else {
    $("#personas").addClass("is-invalid");
    $("#validationCampoPersona").css("display", "block");
  }
}

function detalle() {
  let fecha = $("#campoFecha").val();
  let hora = $("#horario").val();
  let cantPersonas = $("#personas").val();
  $("#detalleReserva").append(
    "<p>" + fecha + ", " + hora + "hs, " + cantPersonas + "<p>"
  );
}

function ReservaRecibida() {
  $("#reservaRealizada").append(
    "<h2> Muchas Gracias<br>" + $("#nombreForm").val() + "<h2>"
  );
  $("#reservaRealizada").append(
    "<p> Hemos recibido tu reserva y te enviaremos un email de confirmación a la siguiente dirección<p>"
  );
  $("#reservaRealizada").append("<p>" + $("#email").val() + "<p>");
}

function habilitarModalRealizadaLaReserva() {
  $("#ingresarInformacion").modal("hide");
  $("#realizadaLaReserva").modal("show");
}

const lu_mier = ["10:00", "11:30", "13:00", "14:30", "16:00"];
const jue_dom = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00"];

const vier_sab = [
  "10:00",
  "11:30",
  "13:00",
  "14:30",
  "16:00",
  "17:30",
  "19:00",
  "20:30",
  "22:00",
];
