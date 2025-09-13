class TanonGraph {
    constructor(id) {
        this.id = id;
        this.title = "";
        this.subtitle = "";
        this.yTitle = "";
        this.yMinValue = 0;
        this.height = 0;
        this.width = 0;
        this.columns = [];
        this.rows = [];
    }
    initialize($options) {
        this.title = $options.title;
        this.subtitle = $options.subtitle;
        this.yTitle = $options.yTitle;
        this.yMinValue = $options.yMinValue;
        this.height = $options.height;
        this.width = $options.width;
    }
    setData($data) {
        this.columns = $data.columns;
        this.rows = $data.rows;
    }
    getDataTable() {
        var newDataTable = new google.visualization.DataTable();
        this.columns.forEach(element => {
            newDataTable.addColumn(element.type, element.name)
        });
        newDataTable.addRows(this.rows);
        return newDataTable;
    }
    getGraphOptions() {
        var options = {
            chart: {
                title: this.title,
                subtitle: this.subtitle,
            },
            width: this.width,
            height: this.height,
            vAxis: {
                title: this.yTitle,
                viewWindow: {
                    min: this.yMinValue,
                },
            }
        };
        return options;
    }
    display($containerName) {
        const newGraph = document.createElement("div");
        newGraph.setAttribute('id', $containerName);
        const graphContainer = document.getElementById($containerName);
        //graphContainer.append(newGraph);
        graphContainer.replaceWith(newGraph);
        var chart = new google.charts.Line(newGraph);
        chart.draw(this.getDataTable(), google.charts.Line.convertOptions(this.getGraphOptions()));
    }
}