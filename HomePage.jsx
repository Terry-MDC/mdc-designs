import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Printer } from "lucide-react";

const plans = [
  {
    id: 1,
    name: "The Ridgeview",
    sqft: "2,100",
    beds: 3,
    baths: 2,
    description: "A spacious open-concept design perfect for families.",
    image: "/images/placeholder-home.jpg",
    basePrice: 320000,
    options: [
      { name: "Premium Kitchen Package", cost: 15000 },
      { name: "Extended Patio", cost: 8000 },
      { name: "Upgraded Exterior Finish", cost: 12000 },
    ],
  },
];

export default function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const totalCost = selectedPlan
    ? selectedPlan.basePrice +
      selectedOptions.reduce((sum, opt) => sum + opt.cost, 0)
    : 0;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 to-white text-gray-800">
      <section className="text-center py-20 bg-[url('/images/mountains.jpg')] bg-cover bg-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to MDC Designs</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Semi-Custom Homes Built with Quality and Integrity in Chattanooga, TN
        </p>
      </section>

      {!selectedPlan ? (
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Explore Our Home Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card key={plan.id} className="rounded-2xl shadow-md">
                <CardContent className="p-4">
                  <img
                    src={plan.image}
                    alt={`Home Plan ${plan.name}`}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-2">{plan.sqft} sqft · {plan.beds} Bed, {plan.baths} Bath</p>
                  <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                  <div className="flex justify-between">
                    <Button variant="outline">View Details</Button>
                    <Button onClick={() => setSelectedPlan(plan)}>Customize Plan</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ) : (
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Customize: {selectedPlan.name}
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Choose Your Upgrades:</h3>
            <ul className="space-y-4 mb-6">
              {selectedPlan.options.map((option, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(option)}
                      onChange={() => toggleOption(option)}
                      className="mr-2"
                    />
                    {option.name}
                  </label>
                  <span className="text-sm text-gray-600">${option.cost.toLocaleString()}</span>
                </li>
              ))}
            </ul>
            <div className="text-xl font-semibold text-right mb-6">
              Total: ${totalCost.toLocaleString()}
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => {
                setSelectedPlan(null);
                setSelectedOptions([]);
              }}>
                Back to Plans
              </Button>
              <div className="flex gap-4">
                <Button variant="outline">
                  <Printer className="mr-2 h-4 w-4" /> Print Summary
                </Button>
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> Email PDF to Terry
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
