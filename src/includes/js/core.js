//Mobile Side nav
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M
      .Sidenav
      .init(elems, {
          edge: "right",
          draggable: !0
      });
});

//Tooltips
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M
      .Tooltip
      .init(elems, {});
});
