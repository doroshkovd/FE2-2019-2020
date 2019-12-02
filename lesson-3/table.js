/**
 *
 * @returns {Array}
 */
function createMultiplyTableData() {
  const result = [];
  let chunkData = '';
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      chunkData += `<div style="padding: 5px">${i} * ${j} = ${i * j}</div>`;
    }
    result.push(chunkData);
    chunkData = '';
  }
  return result;
}

/**
 *
 * @param data
 * array of strings
 */
function renderMultiplyTable(data) {
  const { body } = document;
  const table = document.createElement('table');
  let tr; let td;

  table.style.width = '100%';
  table.setAttribute('border', '1');

  for (let i = 0; i < data.length; i++) {
    td = document.createElement('td');
    if (i === 0 || i === 5) {
      tr = document.createElement('tr');
    }
    td.innerHTML = data[i];
    tr.append(td);

    if (i === 4 || i === 9) {
      table.append(tr);
    }
  }

  body.append(table);
}

function outputTable() {
  const table = createMultiplyTableData();
  renderMultiplyTable(table);
}

// outputTable();
