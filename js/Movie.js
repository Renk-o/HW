class Movie {
  #data = {};
  #id = null;

  setData(data) {
    this.#data = data;
  }

  getData() {
    return this.#data;
  }

  getId() {
    return this.#id;
  }

  createButton(isDelete) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn');
    button.classList.add(`btn-${isDelete ? 'danger' : 'warning'}`);
    button.innerText = isDelete ? '🗑️' : '✏️';
    return button;
  }

  setNode() {
    const { city, name, email, checked } = this.getData();
    const tr = document.createElement('tr');
    const html = `
      <th scope="row">${city}</th>
      <td>${name}</td>
      <td>${email}</td>
      <td>${checked ? '💗' : ''}</td>
      <td>
        <div class="btn-group" role="group">
        </div>
      </td>
    `;

    tr.insertAdjacentHTML('beforeend',html);

    const btnGroup = tr.querySelector('.btn-group');
    const editButton = this.createButton(false);
    const deleteButton = this.createButton(true);

    btnGroup.append(editButton, deleteButton);

    this.node = tr;
    this.deleteBtn = deleteButton;
    this.editBtn = editButton;
  }

  constructor(data) {
    this.#id = Date.now();
    this.setData(data);
    this.setNode();
  }
}

export default Movie;

