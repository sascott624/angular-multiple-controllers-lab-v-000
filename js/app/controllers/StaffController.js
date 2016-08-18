function StaffController(){
  var vm = this;
  vm.name = "Carl";
  vm.email = "carl@email.com";
  vm.phone = "555-444-3333";
}

angular
  .module('app')
  .controller('StaffController', StaffController)
