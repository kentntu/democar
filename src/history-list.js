import Modal from './modal';

class HistoryList {
  constructor(props) {
    this.modal = new Modal();
    this.htmlId = $("#gridView");
  }

  showData(dataSource) {
    const html = this.render(dataSource);
    this.htmlId.html(html);

    $(".rowAction").click(e=>{
      this.modal.open();
    });
  }

  clearData() {}

  generateRow(dataSource) {
    let htmlStr = '';
    for (const row of dataSource) {
      htmlStr += `
      <tr>
        <td><a href="javascript:;" class='rowAction'>${row.repairDate}</a></td>
        <td>${row.detail}</td>
        <td>${row.price}</td>
        <td>${row.note}</td>
      </tr>
      `
    }
    return htmlStr;
  }

  render(dataSource) {
    if(!dataSource){
      return "";
    }

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