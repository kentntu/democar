class HistoryList {
  constructor(props) {
    this.htmlId = $("#gridView");
  }

  showData(dataSource) {
    const html = this.render(dataSource);
    this.htmlId.append(html);
  }

  clearData() {}

  generateRow(dataSource) {
    const htmlStr = '';
    for (const row in dataSource) {
      htmlStr += `
         <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
      `
    }
    return htmlStr;
  }

  render(dataSource) {
    const template = `
      <table>
          <tr>
            <th>Repair Date</th>
            <th>Detail</th>
            <th>Price</th>
            <th>Note</th>
          </tr>
          ${this.generateRow(dataSource)}
        </table>
    `;

    return template;
  }
}

export default HistoryList;