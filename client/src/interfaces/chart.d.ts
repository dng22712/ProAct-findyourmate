import { BaseKey } from "@refinedev/core";

export interface ChartProp {
    // id?: BaseKey | undefined;
    // name: string;
    
    // email: string;
    // avatar: string;
    // noOfProperties: number;
    points:number;
    creator: string
}

export interface InfoChartProps {
    icon: ReactNode;
    name: string;
}
