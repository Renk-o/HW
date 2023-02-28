class Form {
  clear() {
    this.node[0].value = '';
    this.node[1].value = '';
    this.node[2].value = '';
    this.node[3].checked = false;
  }

  getData() {
    const city = this.node[0].value;

    if (!city) {
      throw new Error(`You can't add without city!`);
    }

    return {
      city: this.node[0].value,
      name: this.node[1].value,
      email: this.node[2].value,
      checked: this.node[3].checked,
    };
  }

  constructor() {
    this.node = document.getElementById('form');
  }
}

export default Form;
