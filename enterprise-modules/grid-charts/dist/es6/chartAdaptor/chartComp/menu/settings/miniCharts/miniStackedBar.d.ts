import { ChartType } from "@ag-grid-community/grid-core";
import { MiniChartWithAxes } from "./miniChartWithAxes";
export declare class MiniStackedBar extends MiniChartWithAxes {
    static chartType: ChartType;
    static data: number[][];
    private readonly bars;
    constructor(parent: HTMLElement, fills: string[], strokes: string[], data?: number[][], xScaleDomain?: number[], tooltipName?: string);
    updateColors(fills: string[], strokes: string[]): void;
}
