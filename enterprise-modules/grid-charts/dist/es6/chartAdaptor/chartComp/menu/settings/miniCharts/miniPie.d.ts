import { ChartType } from "@ag-grid-community/grid-core";
import { MiniDoughnut } from "./miniDoughnut";
export declare class MiniPie extends MiniDoughnut {
    static chartType: ChartType;
    constructor(parent: HTMLElement, fills: string[], strokes: string[]);
}
