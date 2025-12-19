import HeroSection from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import statsData, { featuresData } from "@/data/landing";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {item.value}
                </div>
                <div className="text-gray-700">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div>
            <h2>
              Everything you need to manage your finances in one place.
            </h2>
            <div>
              {featuresData.map((feature, index) => (
                <Card>
                  <CardContent>
                    {feature.icon}
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}
