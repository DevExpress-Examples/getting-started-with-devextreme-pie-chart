<template>
    <div id="container">
        <DxPieChart
            :data-source="billionaires"
            type="doughnut"
            title="Top-5 Countries by Number of Billionaires"
            @point-click="onPointClick"
        >
            <DxSeries
                argument-field="country"
                value-field="amount"
            >
                <DxLabel
                    :visible="true"
                    position="columns"
                    :customize-text="customizeText"
                >
                    <DxConnector :visible="true"></DxConnector>
                </DxLabel>
            </DxSeries>
            <DxTooltip
                :enabled="true"
                :content-template="contentTemplate"
            >
            </DxTooltip>
        </DxPieChart>
    </div>
</template>

<script>
    import { DxPieChart, DxSeries, DxLabel, DxConnector, DxTooltip } from 'devextreme-vue/pie-chart';
    import { billionaires } from './data.js';

    export default {
        components: {
            DxPieChart,
            DxSeries,
            DxLabel,
            DxConnector,
            DxTooltip
        },
        data() {
            return {
                billionaires
            };
        },
        methods: {    
            customizeText (pointInfo) {
                return pointInfo.value + " billionaires";
            },
            contentTemplate (data) {
                return data.argumentText;
            },
            onPointClick (e) {
                const point = e.target;
                if (point.isSelected()) {
                    point.clearSelection();
                } else {
                    point.select();
                }
            }
        }
    }
</script>

<style>
    #container {
        width: 600px;
    }
</style>