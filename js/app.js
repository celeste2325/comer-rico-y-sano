$("#fecha").on("click", function(){
    $("#calendar").modal('show');
});

$(".miCalendar").datepicker({
    startDate: "today",
    format: "dd/mm/yyyy",
    language: 'es',
    orientation: "bottom auto",
    todayBtn: "linked",
    daysOfWeekDisabled: "2",
    autoclose: true,
    todayHighlight: true
}).on("changeDate", function(e) {
    let fecha =  e.date.getDate() + "/" + e.date.getMonth() + "/" + e.date.getUTCFullYear();
    $("#campoFecha").val(fecha);

 });

$(".miCalendar").datepicker