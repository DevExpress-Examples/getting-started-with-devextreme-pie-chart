$(function () {
    $("#pie-chart").dxPieChart({
        dataSource: billionaires,
        series: {
            argumentField: "country",
            valueField: "amount",
            label: {
                visible: true,
                connector: {
                    visible: true
                },
                position: "columns",
                customizeText: function (pointInfo) {
                    return pointInfo.value + " billionaires";
                }
            }
        },
        type: "doughnut",
        title: "Top-5 Countries by Number of Billionaires",
        tooltip: {
            enabled: true,
            contentTemplate: function (data) {
                return data.argumentText;
            }
        },
        onPointClick: function (e) {
            const point = e.target;
            if (point.isSelected()) {
                point.clearSelection();
            } else {
                point.select();
            }
        }
    });
});