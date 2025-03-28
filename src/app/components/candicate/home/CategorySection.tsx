import {
  Code2Icon,
  BarChartIcon,
  PencilIcon,
  ShoppingCartIcon,
  HeartPulseIcon,
  TruckIcon,
  BriefcaseIcon,
  BuildingIcon,
} from "lucide-react";
import { CategoryCard } from "./CategoryCard";
const categories = [
  {
    id: 1,
    name: "Technology",
    icon: <Code2Icon className="h-6 w-6" />,
    jobCount: 1204,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    name: "Business",
    icon: <BriefcaseIcon className="h-6 w-6" />,
    jobCount: 854,
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 3,
    name: "Finance",
    icon: <BarChartIcon className="h-6 w-6" />,
    jobCount: 623,
    color: "bg-green-100 text-green-700",
  },
  {
    id: 4,
    name: "Design",
    icon: <PencilIcon className="h-6 w-6" />,
    jobCount: 412,
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: 5,
    name: "Marketing",
    icon: <ShoppingCartIcon className="h-6 w-6" />,
    jobCount: 325,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 6,
    name: "Healthcare",
    icon: <HeartPulseIcon className="h-6 w-6" />,
    jobCount: 568,
    color: "bg-red-100 text-red-700",
  },
  {
    id: 7,
    name: "Real Estate",
    icon: <BuildingIcon className="h-6 w-6" />,
    jobCount: 245,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    id: 8,
    name: "Transportation",
    icon: <TruckIcon className="h-6 w-6" />,
    jobCount: 157,
    color: "bg-cyan-100 text-cyan-700",
  },
];

export default function CategorySection() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore job opportunities by industry or role to find the perfect
            position that matches your skills and interests.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              name={category.name}
              color={category.color}
              jobCount={870}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
