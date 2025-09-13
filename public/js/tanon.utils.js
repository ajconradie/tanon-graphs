    class TanonUtils {
        joinArrays(indexColumn, array1, array2) {
            var newArray = [];
            var done = false;
            var array1Index = 0;
            var array2Index = 0;

            while (!done) {
                if (array1Index >= array1.length) {
                    newArray.push([array2[array2Index][0]].concat(Array(array1[0].length - 1).fill(0), array2[array2Index].slice(1)));
                    array2Index++;
                }
                else {
                    if (array2Index >= array2.length) {
                        newArray.push(array1[array1Index].concat(Array(array2[0].length - 1).fill(0)));
                        array1Index++;
                    }
                    else {
                        if (array1[array1Index][indexColumn] == array2[array2Index][indexColumn]) {
                            newArray.push(array1[array1Index].concat(array2[array2Index].slice(1)));
                            array1Index++;
                            array2Index++;
                        }
                        else {
                            if (array1[array1Index][indexColumn] < array2[array2Index][indexColumn]) {
                                newArray.push(array1[array1Index].concat(Array(array2[0].length - 1).fill(0)));
                                array1Index++;
                            }
                            else {
                                newArray.push([array2[array2Index][0]].concat(Array(array1[0].length - 1).fill(0), array2[array2Index].slice(1)));
                                array2Index++;
                            }
                        }
                    }
                }
                done = array1Index >= array1.length && array2Index >= array2.length;
            }
            return newArray;
        }
        joinArraysWithFill(indexColumn, array1, array2, fillValue) {
            var newArray = [];
            var done = false;
            var array1Index = 0;
            var array2Index = 0;

            while (!done) {
                if (array1Index >= array1.length) {
                    newArray.push([array2[array2Index][0]].concat(Array(array1[0].length - 1).fill(fillValue), array2[array2Index].slice(1)));
                    array2Index++;
                }
                else {
                    if (array2Index >= array2.length) {
                        newArray.push(array1[array1Index].concat(Array(array2[0].length - 1).fill(fillValue)));
                        array1Index++;
                    }
                    else {
                        if (array1[array1Index][indexColumn] == array2[array2Index][indexColumn]) {
                            newArray.push(array1[array1Index].concat(array2[array2Index].slice(1)));
                            array1Index++;
                            array2Index++;
                        }
                        else {
                            if (array1[array1Index][indexColumn] < array2[array2Index][indexColumn]) {
                                newArray.push(array1[array1Index].concat(Array(array2[0].length - 1).fill(fillValue)));
                                array1Index++;
                            }
                            else {
                                newArray.push([array2[array2Index][0]].concat(Array(array1[0].length - 1).fill(fillValue), array2[array2Index].slice(1)));
                                array2Index++;
                            }
                        }
                    }
                }
                done = array1Index >= array1.length && array2Index >= array2.length;
            }
            return newArray;
        }
        createArrayOfMonths(type, start, end) {
            var rows = [];
            switch (type) {
                case "monthly-begin":
                    var increment = 1;
                    var enddate = new Date(end);
                    enddate.setDate(1);
                    var tempDate = new Date(start);
                    tempDate.setDate(1);
                    while (tempDate <= enddate) {
                        rows.push([new Date(tempDate)]);
                        tempDate.setMonth(tempDate.getMonth() + increment);
                    }
                    break;
                case "monthly-end":
                    var increment = 1;
                    var endDate = new Date(end);
                    endDate.setDate(1);
                    var tempDate = new Date(start);
                    tempDate.setDate(1);
                    while (tempDate <= endDate) {
                        var xDate = new Date(tempDate);
                        xDate.setDate(1);
                        xDate.setMonth(xDate.getMonth() + 1);
                        xDate.setDate(xDate.getDate() - 1);
                        rows.push([new Date(xDate)]);
                        tempDate.setMonth(tempDate.getMonth() + increment);
                    }
                    break;
            }
            return rows;
        }
        createArrayOfDays(start, end) {
            var increment = 1;
            var rows = [];
            var tempDate = new Date(start);
            var enddate = new Date(end)
            while (tempDate <= enddate) {
                rows.push([new Date(tempDate)]);
                tempDate.setDate(tempDate.getDate() + increment);
            }
            return rows;
        }
        createArrayOfNumbers(start, end, increment) {
            var rows = [];
            for (var x = start; x <= end; x += increment) {
                rows.push([x]);
            }
            return rows;
        }
        createDataConstant(indexArray, amount) {
            var newData = [];
            for (var i = 0; i < indexArray.length; ++i) {
                newData.push([indexArray[i][0], amount]);
            }
            return newData;
        }
        createDataConstantIncrement(indexArray, amount, rate, periods) {
            var newData = [];
            var calcedValue = amount;
            for (var i = 0; i < indexArray.length; ++i) {
                newData.push([indexArray[i][0], calcedValue]);
                calcedValue = amount + i * amount * (rate / periods);
            }
            return newData;
        }
        createDataCompoundInterest(indexArray, amount, rate, periods) {
            var newData = [];
            var calcedValue = amount;
            for (var i = 0; i < indexArray.length; ++i) {
                newData.push([indexArray[i][0], calcedValue]);
                calcedValue += calcedValue * (rate / periods);
            }
            return newData;
        }
    }