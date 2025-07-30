type ISODateString = string;

export interface CleanSession {
  user: {
    id: string;
    email: string;
    name?: string | null;
    image?: string | null;
  };
  expires: ISODateString;
}

export type PlanVariantInterval = "month" | "year";

export interface PlanVariant {
  id: number;
  interval: PlanVariantInterval;
  price: number;
}

export interface BasePlan {
  id: number;
  name: string;
  desc: string;
}

export interface FreePlan extends BasePlan {
  monthly_credit_limitations: number;
  project_limitations: number;
}

export interface PaidPlan extends BasePlan {
  variants: PlanVariant[];
  monthly_credit_limitations: number;
  yearly_discount: number;
}

export interface CustomPlan extends BasePlan {
  type: "custom";
}

export type Plan = FreePlan | PaidPlan | CustomPlan;
