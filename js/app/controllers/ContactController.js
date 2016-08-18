function ContactController() {
  var vm = this;
  vm.name = "Bill";
  vm.email = "bill@email.com";
  vm.phone = "555-666-7777";

  this.changeName = function () {
    vm.name = 'William';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
