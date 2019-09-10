import HistoryList from './history-list';

class Main {
  constructor() {
    this.historyList = new HistoryList();
    const dataSource = [
      {repairDate: '2019/09/09', detail: 'xx xxx xxx', price: '100$', note: 'ASfdsfdasasfdasf'}
    ]
    this.historyList.showData();
  }
}

export default new Main();