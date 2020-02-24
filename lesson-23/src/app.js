import validate from 'jquery-validation';
import "../node_modules/jquery-ui/themes/base/all.css";
import "../node_modules/jquery-ui/themes/base/theme.css";
import 'jquery-ui/ui/widgets/accordion';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/ui/widgets/menu';
import 'jquery-ui/ui/widgets/dialog';
import 'jquery-ui/ui/widgets/button';

const opt = {
  submitHandler: (form, event) => {
    console.log('Form is valid')
  },
  invalidHandler: () => {
    console.log('form is invalid');
  },
  ignore: '.ignore',
  rules: {
    name: {
      required: true,
      minlength: 5,
    },
    email: {
      required: true,
      email: true
    },
    url: {
      url: true
    },
    comment: {
      required: true,
      minlength: 10,
    },
    contact: {
      required: true,
      email: {
        depends: function (element) {
          console.log(element);
          return $("#emailcheck").is(":checked");
        }
      }
    },
  },
  messages: {
    name: "Введи свое имя, очень прошу....",
    contact: {
      required: "Очень надо",
      email: "Только емаил",
    }
  },
  errorClass: 'alert alert-danger',
  errorElement: 'div'
};

// const validator = $('#commentForm').validate(opt);
// console.log('Name', validator.element("#cname"));
// setTimeout(() => {
//   console.log(validator.form());
//
// }, 7000)

$('#accordion').accordion();
$('#datepicker').datepicker();
$('#menu').menu();
$('#dialog').dialog({modal: true, autoOpen: false,});
$('#button').button();
$('#button').click(() => {
  $('#dialog').dialog('open');
});
