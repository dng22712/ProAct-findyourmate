import { BaseKey } from "@refinedev/core";

export interface FormFieldProp {
    title: string;
    labelName: string;
}

export interface FormValues {
    title: string;
    description: string;
    activityType: string;
    location: string;
    date:string;
    points: number | undefined;
}

export interface ActivityCardProps {
    id?: BaseKey | undefined;
    title: string;
    location: string;
    points: string;
    week:String;
    photo: string;
}
