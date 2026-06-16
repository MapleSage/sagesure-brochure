import { useState } from 'react';

export default function Brochure() {
  const [isMGAVersion, setIsMGAVersion] = useState(false);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Version Toggle */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="text-sm font-semibold text-[#0f293c]">Brochure Version:</div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMGAVersion(false)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              !isMGAVersion
                ? 'bg-[#fc6b03] text-white'
                : 'bg-gray-100 text-[#4e6472] hover:bg-gray-200'
            }`}
          >
            General
          </button>
          <button
            onClick={() => setIsMGAVersion(true)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              isMGAVersion
                ? 'bg-[#fc6b03] text-white'
                : 'bg-gray-100 text-[#4e6472] hover:bg-gray-200'
            }`}
          >
            MGA-Specific
          </button>
        </div>
      </div>

      {!isMGAVersion ? (
        <>
          {/* GENERAL VERSION */}
          {/* Page 1: Front Cover + Inside Panels */}
          <div className="page-break" style={{ pageBreakAfter: 'always', width: '100%', height: '11in', display: 'flex' }}>
            {/* Front Cover (Right Panel) */}
            <div className="w-1/3 bg-gradient-to-br from-[#0f293c] to-[#1a3a52] text-white p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#fc6b03] opacity-5 rounded-full -mr-48 -mt-48"></div>
              
              <div className="relative z-10">
                <img src="/manus-storage/sagesure-logo_01dcab62.png" alt="SageSure" className="h-16 w-auto mb-12" />
                
                <div className="space-y-6">
                  <h1 className="text-5xl font-bold leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    AI You Can Be Sure
                  </h1>
                  <p className="text-xl text-gray-200">Insurance Workflow Automation</p>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="text-sm bg-white/20 px-3 py-1 rounded">Claims</span>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded">Underwriting</span>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded">Broker Ops</span>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded">Service</span>
                  </div>
                </div>
              </div>

              {/* Hero visual placeholder */}
              <div className="relative z-10 mt-8">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031680779/MJuJfVmdUK8yebWQP6e2N6/brochure-hero-workflow-iP9DJenwtRdqqjniqFtkSS.webp"
                  alt="Insurance Workflow"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Inside Left Panel - Claims & FNOL */}
            <div className="w-1/3 bg-white p-10 border-l border-r border-gray-200 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#0f293c] mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  CLAIMS & FNOL
                </h2>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">FNOL Intake</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Document Collection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Claim Summarization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Missing Information Detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Workflow Routing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Status Updates</span>
                  </li>
                </ul>

                <p className="text-sm text-[#0f293c] font-semibold">
                  Reduce manual intake and accelerate claims processing.
                </p>
              </div>

              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031680779/MJuJfVmdUK8yebWQP6e2N6/brochure-claims-fnol-DAdGDjWEJjNn5UFHhSAEHD.webp"
                alt="Claims Processing"
                className="w-full h-32 object-cover rounded-lg mt-6"
              />
            </div>

            {/* Inside Center Panel - Underwriting */}
            <div className="w-1/3 bg-gray-50 p-10 border-r border-gray-200 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#0f293c] mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  UNDERWRITING
                </h2>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#688f3e] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Risk Fact Extraction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#688f3e] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Submission Analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#688f3e] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Missing Data Identification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#688f3e] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Underwriting Memo Drafting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#688f3e] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Exception Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#688f3e] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Audit Trails</span>
                  </li>
                </ul>

                <p className="text-sm text-[#0f293c] font-semibold">
                  Help underwriters focus on decisions, not data entry.
                </p>
              </div>

              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031680779/MJuJfVmdUK8yebWQP6e2N6/brochure-underwriting-UDsfkjSeLvfCEYJeuYR52i.webp"
                alt="Underwriting"
                className="w-full h-32 object-cover rounded-lg mt-6"
              />
            </div>
          </div>

          {/* Page 2: Back Panels */}
          <div className="page-break" style={{ pageBreakAfter: 'always', width: '100%', height: '11in', display: 'flex' }}>
            {/* Back Left Panel - Broker & MGA Operations */}
            <div className="w-1/3 bg-white p-10 border-r border-gray-200 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#0f293c] mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  BROKER & MGA<br/>OPERATIONS
                </h2>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Submission Quality Improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Quote-to-Bind Support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">CRM Updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Follow-Up Automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Renewal Preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Workflow Visibility</span>
                  </li>
                </ul>

                <p className="text-sm text-[#0f293c] font-semibold">
                  Create cleaner submissions and faster turnaround times.
                </p>
              </div>
            </div>

            {/* Back Center Panel - Accountable AI */}
            <div className="w-1/3 bg-gradient-to-br from-[#0f293c] to-[#1a3a52] text-white p-10 border-r border-gray-200 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  ACCOUNTABLE<br/>AI
                </h2>
                
                <p className="text-sm text-gray-200 mb-6">
                  Every Decision. Every Action. Fully Accountable.
                </p>

                <p className="text-xs text-gray-300 mb-6 font-semibold">
                  SageSure provides:
                </p>

                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-[#fc6b03] font-bold">✓</span>
                    <span className="text-xs text-gray-200">Complete Audit Trails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#fc6b03] font-bold">✓</span>
                    <span className="text-xs text-gray-200">Human Oversight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#fc6b03] font-bold">✓</span>
                    <span className="text-xs text-gray-200">Workflow Transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#fc6b03] font-bold">✓</span>
                    <span className="text-xs text-gray-200">Source Attribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#fc6b03] font-bold">✓</span>
                    <span className="text-xs text-gray-200">Compliance Readiness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#fc6b03] font-bold">✓</span>
                    <span className="text-xs text-gray-200">Enterprise Governance</span>
                  </li>
                </ul>

                <p className="text-lg font-bold text-[#fc6b03]">
                  AI You Can Be Sure.
                </p>
              </div>
            </div>

            {/* Back Right Panel - Company Overview */}
            <div className="w-1/3 bg-gray-50 p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#0f293c] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  INTELLIGENT WORKFLOW PROCESSING
                </h2>

                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-[#fc6b03] text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                      <h3 className="font-bold text-[#0f293c]">Structured Intake</h3>
                    </div>
                    <p className="text-xs text-[#4e6472] ml-11">Convert emails, documents, forms, and messages into structured insurance data.</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-[#688f3e] text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                      <h3 className="font-bold text-[#0f293c]">Intelligent Processing</h3>
                    </div>
                    <p className="text-xs text-[#4e6472] ml-11">Extract facts, identify missing information, and generate recommendations.</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-[#4e6472] text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                      <h3 className="font-bold text-[#0f293c]">Seamless Routing</h3>
                    </div>
                    <p className="text-xs text-[#4e6472] ml-11">Deliver work to the right teams with complete visibility and accountability.</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-6">
                <h3 className="text-sm font-bold text-[#0f293c] mb-3">30-DAY PILOT OPTIONS</h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#4e6472] mb-6">
                  <div>• Claims</div>
                  <div>• FNOL</div>
                  <div>• Underwriting</div>
                  <div>• Broker Ops</div>
                  <div>• CRM Service</div>
                  <div>• Renewals</div>
                </div>

                <div className="space-y-2 text-xs">
                  <div><span className="font-bold text-[#0f293c]">Website:</span> <span className="text-[#4e6472]">sagesure.io</span></div>
                  <div><span className="font-bold text-[#0f293c]">Email:</span> <span className="text-[#4e6472]">info@sagesure.io</span></div>
                  <div><span className="font-bold text-[#0f293c]">Meetings:</span> <span className="text-[#4e6472]">sagesure.io/connect-with-us</span></div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* MGA-SPECIFIC VERSION */}
          {/* Page 1: Front Cover + Inside Panels */}
          <div className="page-break" style={{ pageBreakAfter: 'always', width: '100%', height: '11in', display: 'flex' }}>
            {/* Front Cover (Right Panel) - MGA */}
            <div className="w-1/3 bg-gradient-to-br from-[#0f293c] to-[#1a3a52] text-white p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#fc6b03] opacity-5 rounded-full -mr-48 -mt-48"></div>
              
              <div className="relative z-10">
                <img src="/manus-storage/sagesure-logo_01dcab62.png" alt="SageSure" className="h-16 w-auto mb-12" />
                
                <div className="space-y-6">
                  <h1 className="text-5xl font-bold leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    MGA Operations<br/>Reimagined
                  </h1>
                  <p className="text-xl text-gray-200">Workflow Automation for MGAs</p>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="text-sm bg-white/20 px-3 py-1 rounded">Submissions</span>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded">Renewals</span>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded">Underwriting</span>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded">Compliance</span>
                  </div>
                </div>
              </div>

              {/* Hero visual placeholder */}
              <div className="relative z-10 mt-8">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031680779/MJuJfVmdUK8yebWQP6e2N6/brochure-hero-workflow-iP9DJenwtRdqqjniqFtkSS.webp"
                  alt="Insurance Workflow"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Inside Left Panel - Submission Quality */}
            <div className="w-1/3 bg-white p-10 border-l border-r border-gray-200 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#0f293c] mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  SUBMISSION EXCELLENCE
                </h2>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Submission Intake & Validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Missing Information Detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Automated Data Extraction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Carrier Routing Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Quote-to-Bind Acceleration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Compliance Verification</span>
                  </li>
                </ul>

                <p className="text-sm text-[#0f293c] font-semibold">
                  Reduce submission turnaround and improve placement rates.
                </p>
              </div>

              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031680779/MJuJfVmdUK8yebWQP6e2N6/brochure-claims-fnol-DAdGDjWEJjNn5UFHhSAEHD.webp"
                alt="Submission Processing"
                className="w-full h-32 object-cover rounded-lg mt-6"
              />
            </div>

            {/* Inside Center Panel - Renewal & Service */}
            <div className="w-1/3 bg-gray-50 p-10 border-r border-gray-200 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#0f293c] mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  RENEWAL & SERVICE
                </h2>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#688f3e] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Renewal Preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#688f3e] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Policy Change Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#688f3e] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Claims Coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#688f3e] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Broker Communication Automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#688f3e] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Portfolio Analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#688f3e] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Audit Trail & Compliance</span>
                  </li>
                </ul>

                <p className="text-sm text-[#0f293c] font-semibold">
                  Streamline renewals and strengthen broker relationships.
                </p>
              </div>

              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031680779/MJuJfVmdUK8yebWQP6e2N6/brochure-underwriting-UDsfkjSeLvfCEYJeuYR52i.webp"
                alt="Renewal Management"
                className="w-full h-32 object-cover rounded-lg mt-6"
              />
            </div>
          </div>

          {/* Page 2: Back Panels - MGA */}
          <div className="page-break" style={{ pageBreakAfter: 'always', width: '100%', height: '11in', display: 'flex' }}>
            {/* Back Left Panel - MGA-Specific Benefits */}
            <div className="w-1/3 bg-white p-10 border-r border-gray-200 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#0f293c] mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  FOR MGAs
                </h2>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Increase Placement Velocity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Reduce Submission Errors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Improve Broker Satisfaction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Scale Operations Efficiently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Maintain Compliance Standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fc6b03] font-bold mt-1">•</span>
                    <span className="text-sm text-[#4e6472]">Enable Data-Driven Decisions</span>
                  </li>
                </ul>

                <p className="text-sm text-[#0f293c] font-semibold">
                  Automate workflows without losing the human touch.
                </p>
              </div>
            </div>

            {/* Back Center Panel - MGA Workflow */}
            <div className="w-1/3 bg-gradient-to-br from-[#0f293c] to-[#1a3a52] text-white p-10 border-r border-gray-200 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  MGA WORKFLOW<br/>AUTOMATION
                </h2>
                
                <p className="text-sm text-gray-200 mb-6">
                  From Submission to Renewal.
                </p>

                <p className="text-xs text-gray-300 mb-6 font-semibold">
                  SageSure enables:
                </p>

                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-[#fc6b03] font-bold">✓</span>
                    <span className="text-xs text-gray-200">Broker Portal Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#fc6b03] font-bold">✓</span>
                    <span className="text-xs text-gray-200">Carrier API Connectivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#fc6b03] font-bold">✓</span>
                    <span className="text-xs text-gray-200">Real-Time Status Updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#fc6b03] font-bold">✓</span>
                    <span className="text-xs text-gray-200">Document Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#fc6b03] font-bold">✓</span>
                    <span className="text-xs text-gray-200">Regulatory Compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#fc6b03] font-bold">✓</span>
                    <span className="text-xs text-gray-200">Performance Analytics</span>
                  </li>
                </ul>

                <p className="text-lg font-bold text-[#fc6b03]">
                  Built for MGA Success.
                </p>
              </div>
            </div>

            {/* Back Right Panel - MGA Company Overview */}
            <div className="w-1/3 bg-gray-50 p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#0f293c] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  WHY SAGESURE FOR MGAs
                </h2>

                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-[#fc6b03] text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                      <h3 className="font-bold text-[#0f293c]">Broker-Centric</h3>
                    </div>
                    <p className="text-xs text-[#4e6472] ml-11">Streamline broker submissions and improve communication.</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-[#688f3e] text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                      <h3 className="font-bold text-[#0f293c]">Carrier Integration</h3>
                    </div>
                    <p className="text-xs text-[#4e6472] ml-11">Connect seamlessly with carrier systems and APIs.</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-[#4e6472] text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                      <h3 className="font-bold text-[#0f293c]">Compliance Ready</h3>
                    </div>
                    <p className="text-xs text-[#4e6472] ml-11">Meet regulatory requirements with full audit trails.</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-6">
                <h3 className="text-sm font-bold text-[#0f293c] mb-3">GET STARTED TODAY</h3>
                <div className="space-y-2 text-xs">
                  <div><span className="font-bold text-[#0f293c]">Website:</span> <span className="text-[#4e6472]">sagesure.io</span></div>
                  <div><span className="font-bold text-[#0f293c]">Email:</span> <span className="text-[#4e6472]">info@sagesure.io</span></div>
                  <div><span className="font-bold text-[#0f293c]">Schedule Demo:</span> <span className="text-[#4e6472]">sagesure.io/connect-with-us</span></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
