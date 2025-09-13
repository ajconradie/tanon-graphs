    class TanonData {
        tanonUtils = new TanonUtils();
        constructor() {
            this.columns = [];
            this.rows = [];
        }
        createX(name, type, rows) {
            this.columns.push({ 'name': name, 'type': type });
            this.rows = rows;
        }
        addData(name, type, newData) {
            this.columns.push({ 'name': name, 'type': type });
            var newArray = this.tanonUtils.joinArrays(0, this.rows, newData);
            this.rows = newArray;
        }
        setGData() {
            var startdate = "2004/10/01";
            //var enddate = "2024/10/31";
            var x_label = "X";

            var years = 20;
            var periods = 1;

            var initialAmount = 1000000;
            var annualRate = 5.5;
            var rateAsPercentage = annualRate / 100;

            x_label = "Days as numbers";
            years = 20;
            periods = 365.25;

            var xData = this.tanonUtils.createArrayOfNumbers(0, years * periods, 1);
            this.createX(x_label, "number", xData);
            /*
            */
            var data_01 = this.tanonUtils.createDataConstant(xData, initialAmount);
            this.addData("Initial Investment", "number", data_01);

            var data_02 = this.tanonUtils.createDataConstantIncrement(xData, initialAmount, rateAsPercentage, periods);
            this.addData("Investment with " + annualRate + " % - constant", "number", data_02);

            var data_03 = this.tanonUtils.createDataCompoundInterest(xData, initialAmount, rateAsPercentage, periods);
            this.addData("Investment with " + annualRate + " % - accrual", "number", data_03);
        }
    }