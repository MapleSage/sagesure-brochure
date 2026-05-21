import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, BarChart3, FileText } from "lucide-react";

/**
 * Design Philosophy: Modern Enterprise Minimalism
 * - Extreme whitespace and breathing room
 * - Geometric precision with subtle organic curves
 * - Monochromatic typography hierarchy with orange accents
 * - Asymmetric grid layouts creating visual tension and sophistication
 * 
 * Color Palette:
 * - Primary: Off-white (#fdfdfd) and light grays
 * - Text: Dark navy (#0f293c) for primary, slate blue (#4e6472) for secondary
 * - Accent: Orange (#fc6b03) for CTAs and key metrics
 * - Secondary: Lime green (#688f3e) for success states
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0f293c] to-[#4e6472] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-lg text-[#0f293c]">SageSure</span>
          </div>
          <div className="text-sm text-[#4e6472]">Insurance Workflow Automation</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-[#0f293c] leading-tight">
                  Insurance Workflow
                  <span className="block text-[#fc6b03]">Automation</span>
                </h1>
                <p className="text-xl text-[#4e6472] leading-relaxed">
                  Transform messy messages, documents, and manual handoffs into structured insurance workflows. For brokers, MGAs, insurers, claims, underwriting, and service teams.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  className="bg-[#fc6b03] hover:bg-[#e55a00] text-white px-8 py-6 text-lg rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  Start 30-Day Pilot <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-[#0f293c] text-[#0f293c] px-8 py-6 text-lg rounded-lg hover:bg-gray-50"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031680779/MJuJfVmdUK8yebWQP6e2N6/hero-workflow-W2upWz2xBm7hGfTKccCLPJ.webp"
                  alt="Insurance workflow automation dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#fc6b03]/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Wavy divider */}
        <svg className="absolute bottom-0 left-0 w-full h-20 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </section>

      {/* Capabilities Overview */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0f293c] mb-4">
              Core Capabilities
            </h2>
            <p className="text-lg text-[#4e6472] max-w-2xl mx-auto">
              SageSure AI transforms insurance operations across the entire workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Claims & FNOL */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#fc6b03] transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-[#fc6b03] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f293c] mb-3">Claims & FNOL</h3>
              <ul className="space-y-2 text-[#4e6472]">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#688f3e] flex-shrink-0 mt-0.5" />
                  <span>Capture FNOL details</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#688f3e] flex-shrink-0 mt-0.5" />
                  <span>Collect missing docs</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#688f3e] flex-shrink-0 mt-0.5" />
                  <span>Route claim summaries</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#688f3e] flex-shrink-0 mt-0.5" />
                  <span>Reduce status friction</span>
                </li>
              </ul>
            </div>

            {/* Underwriting */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#fc6b03] transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-[#fc6b03] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f293c] mb-3">Underwriting</h3>
              <ul className="space-y-2 text-[#4e6472]">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#688f3e] flex-shrink-0 mt-0.5" />
                  <span>Extract risk facts</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#688f3e] flex-shrink-0 mt-0.5" />
                  <span>Flag missing data</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#688f3e] flex-shrink-0 mt-0.5" />
                  <span>Draft UW memos</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#688f3e] flex-shrink-0 mt-0.5" />
                  <span>Route exceptions</span>
                </li>
              </ul>
            </div>

            {/* Broker/MGA Operations */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#fc6b03] transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-[#fc6b03] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f293c] mb-3">Broker/MGA Ops</h3>
              <ul className="space-y-2 text-[#4e6472]">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#688f3e] flex-shrink-0 mt-0.5" />
                  <span>Improve submission quality</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#688f3e] flex-shrink-0 mt-0.5" />
                  <span>Support quote-to-bind</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#688f3e] flex-shrink-0 mt-0.5" />
                  <span>Automate follow-up</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#688f3e] flex-shrink-0 mt-0.5" />
                  <span>Create cleaner CRM records</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Visualization */}
      <section className="bg-gray-50 py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0f293c] mb-4">
              Intelligent Workflow Processing
            </h2>
            <p className="text-lg text-[#4e6472]">
              From unstructured data to actionable intelligence
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031680779/MJuJfVmdUK8yebWQP6e2N6/claims-processing-hjjKh5Zht7K7Gxmig4woMP.webp"
              alt="Workflow processing pipeline"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fc6b03] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#0f293c] mb-2">Structured Intake</h3>
              <p className="text-[#4e6472]">Convert messy documents and messages into structured data</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fc6b03] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#0f293c] mb-2">Intelligent Processing</h3>
              <p className="text-[#4e6472]">AI extracts key facts and flags missing information</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fc6b03] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#0f293c] mb-2">Seamless Routing</h3>
              <p className="text-[#4e6472]">Route to appropriate teams with complete audit trail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031680779/MJuJfVmdUK8yebWQP6e2N6/automation-benefits-H9CiLUhDZcwXUdz2iw3DXr.webp"
                alt="Before and after automation"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-[#0f293c] mb-4">
                  Start with One Workflow
                </h2>
                <p className="text-lg text-[#4e6472] leading-relaxed">
                  Map the handoffs, missing data, and systems. Add controlled AI where it saves time without removing human oversight.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#688f3e] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f293c] text-lg mb-1">30-Day Pilot Options</h3>
                    <p className="text-[#4e6472]">Claims | Submissions | CRM Service | Renewals</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#688f3e] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f293c] text-lg mb-1">Measurable Impact</h3>
                    <p className="text-[#4e6472]">Track efficiency gains, error reduction, and team satisfaction</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#688f3e] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f293c] text-lg mb-1">Audit Trail</h3>
                    <p className="text-[#4e6472]">Complete transparency and compliance documentation</p>
                  </div>
                </div>
              </div>

              <Button 
                className="bg-[#fc6b03] hover:bg-[#e55a00] text-white px-8 py-6 text-lg rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 w-full"
              >
                Schedule a Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Underwriting Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-4xl font-bold text-[#0f293c] mb-4">
                  Underwriting Excellence
                </h2>
                <p className="text-lg text-[#4e6472] leading-relaxed">
                  Extract risk facts from submissions, flag missing data, draft underwriting memos, and route exceptions—all with complete audit trail.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-[#fc6b03] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-[#4e6472]"><span className="font-bold text-[#0f293c]">Faster turnarounds:</span> Reduce manual data entry and document chasing</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-[#fc6b03] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-[#4e6472]"><span className="font-bold text-[#0f293c]">Consistent quality:</span> AI ensures no critical risk factors are missed</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-[#fc6b03] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-[#4e6472]"><span className="font-bold text-[#0f293c]">Better decisions:</span> Underwriters focus on judgment, not data entry</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031680779/MJuJfVmdUK8yebWQP6e2N6/underwriting-tech-FtoGNcWXUxNAmDNYWch8iw.webp"
                alt="Underwriting dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0f293c] to-[#4e6472] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Insurance Workflows?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join leading insurance organizations automating their operations with SageSure AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#fc6b03] hover:bg-[#e55a00] text-white px-8 py-6 text-lg rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              Start Your Pilot <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg"
            >
              Contact Sales
            </Button>
          </div>

          <p className="text-gray-300 text-sm mt-8">
            info@sagesure.io | sagesure.io
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f293c] text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#fc6b03] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="font-bold text-white">SageSure</span>
              </div>
              <p className="text-sm">Insurance Workflow Automation</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 SageSure. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
