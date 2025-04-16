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

// Full component code here (truncated for clarity)
export default function HomePage() {
  // code...
}
