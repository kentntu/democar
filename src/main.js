import HistoryList from './history-list';
import * as d3 from "d3";

class Main {
  constructor() {
    this.historyList = new HistoryList();
    this.initMap();
  }

  async initMap(){
    await this.loadSVG();
  }


  async loadSVG() {
    const xml = await d3.xml("/resources/Car-01.svg");
    $('#svgContent').append(xml.documentElement);
    this.svgSelection = d3.select('#Layer_1');
    const nodes = this.svgSelection.selectAll('path').nodes();

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (i === nodes.length - 1) {
        d3.select(node)
        .style("fill", "red")
        .attr('name','carBody')
        .on("mouseover", (d, i, nodes) => {
          d3.select(nodes[i]).classed('bodyHover', true);
        }) 
        .on("mouseout", (d, i, nodes) => {
          d3.select(nodes[i]).classed('bodyHover', false);
        })  
        .on('click', (d, i, nodes) =>{
          const dataSource = [
            { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
            { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
            { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
            { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
            { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
            { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
            { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
            { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
            { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
            { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
            { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
            { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
            { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
            { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
          ]
          this.historyList.showData(dataSource);
        })

      } else {
        d3.select(node)
        .style("fill", "#4a4747")
        .attr('name',`carWheels-${i + 1}`)
        .on("mouseover", (d, i, nodes) => {
          d3.select(nodes[i]).classed('wheelHover', true);
        })
        .on("mouseout", (d, i, nodes) => {
          d3.select(nodes[i]).classed('wheelHover', false);
        }) 
        .on('click', (d, i, nodes) =>{
          const selection = d3.select(nodes[i]);
          const name = selection.attr('name');
          if(name === 'carWheels-1'){
            const dataSource = [
              { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
              { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
              { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
              { repairDate: '2019/09/09', detail: 'Test detail', price: '100$', note: 'Test noted' },
            ]
            this.historyList.showData(dataSource);
          } else{
            this.historyList.showData();
          }
        });
      }
    }
  }
}

export default new Main();