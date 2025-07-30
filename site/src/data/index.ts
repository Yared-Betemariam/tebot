import { Plan } from "@/types";

export const pricing_plans: Plan[] = [
  {
    id: 100000,
    name: "Free",
    desc: "Discover what Tebot can do for you",
    monthly_credit_limitations: 20,
    project_limitations: 5,
  },
  {
    id: 594075,
    variants: [
      {
        id: 925461,
        interval: "month",
        price: 20,
      },
      {
        id: 925463,
        interval: "year",
        price: 192,
      },
    ],
    name: "Pro",
    desc: "",
    monthly_credit_limitations: 100,
    yearly_discount: 20,
  },
  {
    id: 594077,
    variants: [
      {
        id: 925468,
        interval: "month",
        price: 40,
      },
      {
        id: 925469,
        interval: "year",
        price: 384,
      },
    ],
    name: "Business",
    desc: "",
    monthly_credit_limitations: 300,
    yearly_discount: 20,
  },
  {
    id: 999999,
    name: "Custom",
    type: "custom",
    desc: "Get access to custom plans tailored for your organization's unique requirements",
  },
];
