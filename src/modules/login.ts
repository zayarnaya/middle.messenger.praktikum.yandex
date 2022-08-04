//import Handlebars from "handlebars";
//import Handlebars = require("handlebars");
import { data } from "../data";

import { layout_narrowForm } from "../layouts/narrow-form/narrow-form.js";
import { getData } from "../utils/form-actions/get-data";
import formLogin from "./../components/forms/form-login/form-login.hbs";
//import formLogin = require("./../components/forms/form-login/form-login.hbs");
//import buttonSubmit from "../components/buttons/button-submit/index";
//import input from "../components/input/index";
//import inputRow = require("../components/input/input-field.hbs");
//import inputRow from "../components/input/input-field.hbs";

//import inputRow from "../components/input/index";
//import { InputField } from "../components/input/input-field"
import "./../components/forms/form-login/form-login.scss";
//import { Button } from "../components/buttons/button-submit/button";
//import { Block } from "../utils/block";
//import { EventBus } from "../utils/event-bus";


//это работает, но классов-то нет!


export function loginPage() {
  layout_narrowForm();
  //console.log(typeof Handlebars);
  //console.log(typeof formLogin, '111');
  //console.log(typeof inputRow, '222');
  //console.log(typeof buttonSubmit, '333');
  document.querySelector(".form-wrapper").innerHTML = formLogin(data);

  /*
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("uh-oh");
  });
  */
}
