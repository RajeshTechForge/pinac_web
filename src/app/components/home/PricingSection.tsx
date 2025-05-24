"use client";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
  maxUsers: number;
  maxVisits: string;
  supportLevel: string;
}

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: PricingPlan[] = [
    {
      name: "Basic",
      description:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
      monthlyPrice: 99,
      yearlyPrice: 990,
      icon: (
        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-indigo-600"></div>
        </div>
      ),
      features: [
        "All analytics features",
        "Up to 250,000 tracked visits",
        "Normal support",
        "Up to 3 team members",
      ],
      maxUsers: 3,
      maxVisits: "250,000",
      supportLevel: "Normal support",
    },
    {
      name: "Pro",
      description:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      icon: (
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-white bg-indigo-600 rounded"></div>
        </div>
      ),
      popular: true,
      features: [
        "All analytics features",
        "Up to 1,000,000 tracked visits",
        "Premium support",
        "Up to 10 team members",
      ],
      maxUsers: 10,
      maxVisits: "1,000,000",
      supportLevel: "Premium support",
    },
    {
      name: "Enterprise",
      description:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
      monthlyPrice: 399,
      yearlyPrice: 3990,
      icon: (
        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-indigo-600 rotate-45 transform origin-center"></div>
        </div>
      ),
      features: [
        "All analytics features",
        "Up to 5,000,000 tracked visits",
        "Dedicated support",
        "Up to 50 team members",
      ],
      maxUsers: 50,
      maxVisits: "5,000,000",
      supportLevel: "Dedicated support",
    },
  ];

  return (
    <section className="bg-primary max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-light sm:text-4xl lg:text-5xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-xl text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
          vel venenatis eu sit massa volutpat.
        </p>
      </div>

      {/* Pricing Toggle */}
      <div className="relative mt-12 flex justify-center items-center">
        <span className="text-zinc-400 mr-3">Monthly</span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none ${
            isAnnual ? "bg-indigo-600" : "bg-gray-400"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${
              isAnnual ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
        <span className="text-zinc-400 ml-3">Annually</span>
      </div>

      {/* Pricing Cards */}
      <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl ${
              plan.popular
                ? "bg-indigo-600 text-white shadow-xl scale-105 z-10"
                : "bg-white text-gray-900 shadow-lg hover:scale-105 transition-transform duration-300"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 -mr-1 -mt-4 px-4 py-1 bg-indigo-200 text-indigo-700 rounded-full text-sm font-medium">
                Popular
              </div>
            )}

            <div className="p-8">
              <div className="flex items-center">
                {plan.icon}
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p
                    className={`mt-1 text-sm ${
                      plan.popular ? "text-indigo-200" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>
              </div>

              <p className="mt-8">
                <span className="text-4xl font-bold">
                  ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span
                  className={`text-sm ${
                    plan.popular ? "text-indigo-200" : "text-gray-500"
                  }`}
                >
                  /{isAnnual ? "yearly" : "monthly"}
                </span>
              </p>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <IoCheckmark
                      size={20}
                      className={
                        plan.popular ? "text-indigo-200" : "text-indigo-600"
                      }
                    />
                    <span className="ml-3 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-8 w-full rounded-lg py-3 px-4 text-center text-sm font-semibold transition-colors duration-300 ${
                  plan.popular
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                Get started
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
