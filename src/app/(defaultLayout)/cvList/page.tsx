"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LayoutTemplateIcon, EyeIcon, CheckIcon } from "lucide-react";
import Image from "next/image";
import PreviewModal from "@/app/components/PreviewModal";
const templates = [
  {
    id: "modern-1",
    name: "Modern Professional",
    category: "Professional",
    thumbnail:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    description: "Clean and modern design perfect for tech professionals",
  },
  {
    id: "creative-1",
    name: "Creative Portfolio",
    category: "Creative",
    thumbnail:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    description: "Stand out with this creative and bold layout",
  },
  {
    id: "minimal-1",
    name: "Minimal Classic",
    category: "Simple",
    thumbnail:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    description: "Traditional and elegant design for all professionals",
  },
  // Add more templates...
].concat(
  Array.from(
    {
      length: 6,
    },
    (_, i) => ({
      id: `template-${i + 4}`,
      name: `Template ${i + 4}`,
      category: ["Professional", "Creative", "Simple"][
        Math.floor(Math.random() * 3)
      ],
      thumbnail: `https://images.unsplash.com/photo-1626544827763-d516dce335e${
        i + 5
      }?auto=format&fit=crop&w=300&q=80`,
      description: "Professional template for your next career move",
    })
  )
);
const categories = ["All", "Professional", "Creative", "Simple"];
export default function CVTemplatesPage() {
  const router = useRouter();
  const [selectedTemplate, setSelectedTemplate] = useState<
    (typeof templates)[0] | null
  >(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showPreview, setShowPreview] = useState(false);
  const filteredTemplates = templates.filter(
    (template) =>
      selectedCategory === "All" || template.category === selectedCategory
  );
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LayoutTemplateIcon className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">CV Templates</h1>
            </div>
            <div className="text-sm text-gray-600">
              {filteredTemplates.length} templates available
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium 
                  ${
                    selectedCategory === category
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-w-4 aspect-h-3 rounded-t-lg overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={template.thumbnail}
                      alt={template.name}
                      fill
                      className=" object-cover"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {template.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {template.description}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {template.category}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedTemplate(template);
                          setShowPreview(true);
                        }}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <EyeIcon size={16} className="mr-2" />
                        Preview
                      </button>
                      <button
                        onClick={() => router.push(`/my-cv/${template.id}`)}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                      >
                        <CheckIcon size={16} className="mr-2" />
                        Use this
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      {/* Preview Modal */}
      {showPreview && selectedTemplate && (
        <PreviewModal
          template={selectedTemplate}
          onClose={() => {
            setShowPreview(false);
            setSelectedTemplate(null);
          }}
          onUse={() => router.push(`/my-cv/${selectedTemplate.id}`)}
        />
      )}
    </div>
  );
}
