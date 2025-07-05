import { Button } from "@/components/ui/button";

export default function KPIMonitoringSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
              <span className="text-blue-600">KPI Dashboard Mockup</span>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="section-title">
              Löpande monitorering av dina KPI:er
            </h2>
            <p className="paragraph-body text-gray-600">
              För ett lyckat resultat bedömer vi systematiskt hur väl våra
              kunders nyckeltal presterar i relation till de mål och strategier
              som satts upp.
            </p>
            <Button className="bg-brand-black text-white hover:bg-gray-800">
              Vår metod
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
