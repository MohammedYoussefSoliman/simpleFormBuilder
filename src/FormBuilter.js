import $ from "jquery";
import React, { Component, createRef } from "react";

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");
const formBuilder = require("formBuilder");

const formData = [
  {
    type: "header",
    subtype: "h1",
    label: "this is a test form builder",
  },
];

class FormBuilder extends Component {
  fb = createRef();
  componentDidMount() {
    $(this.fb.current).formBuilder({ formData });
  }

  getData() {
    const codeNode = document.getElementsByClassName("formData-json");
    if (codeNode && codeNode.length) {
      console.log(JSON.parse(codeNode[0].innerText));
    }
  }

  render() {
    return <div id="fb-editor" ref={this.fb} onClick={this.getData} />;
  }
}

export default FormBuilder;
