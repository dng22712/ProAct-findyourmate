import { BaseKey } from "@refinedev/core";

export interface ColleagueCardProp {
    id?: BaseKey | undefined;
    name: string;
    email: string;
    avatar: string;
    noOfActivities: number;
    week:String;
}

export interface InfoBarProps {
    icon: ReactNode;
    name: string;
}
