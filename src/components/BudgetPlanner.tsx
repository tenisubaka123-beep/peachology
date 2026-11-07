import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle, 
  Sparkles, 
  Clock, 
  ArrowRight,
  TrendingDown
} from 'lucide-react';

export const BudgetPlanner: React.FC = () => {
  const [leaseDeposit, setLeaseDeposit] = useState<number>(15000);
  const [equipmentFitout, setEquipmentFitout] = useState<number>(14000);
  const [legalAndBranding, setLegalAndBranding] = useState<number>(4000);

  const [monthlyRent, setMonthlyRent] = useState<number>(2400);
  const [monthlySupplies, setMonthlySupplies] = useState<number>(1600);
  const [softwareAndInsurance, setSoftwareAndInsurance] = useState<number>(450);

  const [includeFirstHire, setIncludeFirstHire] = useState<boolean>(true);
  const [firstHireRole, setFirstHireRole] = useState<string>('Part-Time Student Barista');
  const [hireGrossWage, setHireGrossWage] = useState<number>(1150);
  const [youthTaxCreditActive, setYouthTaxCreditActive] = useState<boolean>(true);

  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(5500);
  const [founderSavings, setFounderSavings] = useState<number>(10000);
  const [securedFunding, setSecuredFunding] = useState<number>(35000);

  const totalCapex = leaseDeposit + equipmentFitout + legalAndBranding;
  
  const employerTaxRate = youthTaxCreditActive ? 0.22 : 0.40;
  const hireTotalMonthlyCost = includeFirstHire 
    ? Math.round(hireGrossWage * (1 + employerTaxRate))
    : 0;

  const totalMonthlyOpex = monthlyRent + monthlySupplies + softwareAndInsurance + hireTotalMonthlyCost;
  const netMonthlyBurn = totalMonthlyOpex - monthlyRevenue;

  const totalStartingCapital = founderSavings + securedFunding;
  const remainingCapitalAfterCapex = Math.max(0, totalStartingCapital - totalCapex);

  const runwayMonths = netMonthlyBurn > 0 
    ? (remainingCapitalAfterCapex / netMonthlyBurn).toFixed(1)
    : 'Profitable / Infinite';

  const isHealthyRunway = typeof runwayMonths === 'string' && (runwayMonths === 'Profitable / Infinite' || parseFloat(runwayMonths) >= 6);

  const loadParisCafeDefaults = () => {
    setLeaseDeposit(15000);
    setEquipmentFitout(14000);
    setLegalAndBranding(4000);
    setMonthlyRent(2400);
    setMonthlySupplies(1600);
    setSoftwareAndInsurance(450);
    setIncludeFirstHire(true);
    setFirstHireRole('Part-Time Student Barista');
    setHireGrossWage(1150);
    setYouthTaxCreditActive(true);
    setMonthlyRevenue(5500);
    setFounderSavings(10000);
    setSecuredFunding(35000);
  };

  return (
    <section id="runway-planner" className="py-20 sm:py-24 bg-[#fffaf7] border-b border-[#f1dfd5]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-peach-100 text-peach-700 text-xs font-semibold">
              <Calculator className="w-3.5 h-3.5 text-peach-600" />
              <span>Launch Planning Tool</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#2b1a14] tracking-tight leading-[1.15]">
              First-Year Budget, Cash Flow & First Hire Planner
            </h2>
            <p className="text-base sm:text-lg text-[#6b554b]">
              Estimate setup outlays, forecast net monthly cash burn, and model your first employee with French & European youth payroll incentives.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={loadParisCafeDefaults}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-white hover:bg-peach-50 text-peach-700 border border-peach-300 font-semibold text-xs shadow-xs transition-all"
            >
              <Sparkles className="w-4 h-4 text-peach-600" />
              <span>Reset to Paris Café Baseline</span>
            </button>
          </div>
        </div>

        {/* Planner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Box 1: Capex */}
            <div className="bg-white rounded-[22px] p-6 sm:p-7 border border-[#f1dfd5] shadow-soft space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#f1dfd5]">
                <h3 className="font-serif font-bold text-base text-[#2b1a14] flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-md bg-peach-100 text-peach-700 flex items-center justify-center text-xs font-bold">1</span>
                  <span>Initial Setup Outlays (Capex)</span>
                </h3>
                <span className="font-serif font-bold text-sm text-peach-700">
                  Total: €{totalCapex.toLocaleString()}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="space-y-1">
                  <label className="text-[#6b554b] font-medium block">Lease Deposit & Guarantee</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-[#988177]">€</span>
                    <input
                      type="number"
                      step={500}
                      value={leaseDeposit}
                      onChange={(e) => setLeaseDeposit(Number(e.target.value) || 0)}
                      className="w-full pl-7 pr-3 py-1.5 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] font-semibold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[#6b554b] font-medium block">Equipment & Interior Fitout</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-[#988177]">€</span>
                    <input
                      type="number"
                      step={500}
                      value={equipmentFitout}
                      onChange={(e) => setEquipmentFitout(Number(e.target.value) || 0)}
                      className="w-full pl-7 pr-3 py-1.5 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] font-semibold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[#6b554b] font-medium block">Legal, Licenses & POS</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-[#988177]">€</span>
                    <input
                      type="number"
                      step={200}
                      value={legalAndBranding}
                      onChange={(e) => setLegalAndBranding(Number(e.target.value) || 0)}
                      className="w-full pl-7 pr-3 py-1.5 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] font-semibold"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2: Monthly Overhead */}
            <div className="bg-white rounded-[22px] p-6 sm:p-7 border border-[#f1dfd5] shadow-soft space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#f1dfd5]">
                <h3 className="font-serif font-bold text-base text-[#2b1a14] flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-md bg-peach-100 text-peach-700 flex items-center justify-center text-xs font-bold">2</span>
                  <span>Monthly Overhead (Before Staff)</span>
                </h3>
                <span className="font-serif font-bold text-sm text-[#2b1a14]">
                  €{(monthlyRent + monthlySupplies + softwareAndInsurance).toLocaleString()} / mo
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="space-y-1">
                  <label className="text-[#6b554b] font-medium block">Monthly Rent & Utilities</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-[#988177]">€</span>
                    <input
                      type="number"
                      step={100}
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(Number(e.target.value) || 0)}
                      className="w-full pl-7 pr-3 py-1.5 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] font-semibold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[#6b554b] font-medium block">Cost of Goods / Supplies</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-[#988177]">€</span>
                    <input
                      type="number"
                      step={100}
                      value={monthlySupplies}
                      onChange={(e) => setMonthlySupplies(Number(e.target.value) || 0)}
                      className="w-full pl-7 pr-3 py-1.5 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] font-semibold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[#6b554b] font-medium block">Insurance, Software & Misc</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-[#988177]">€</span>
                    <input
                      type="number"
                      step={50}
                      value={softwareAndInsurance}
                      onChange={(e) => setSoftwareAndInsurance(Number(e.target.value) || 0)}
                      className="w-full pl-7 pr-3 py-1.5 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] font-semibold"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3: First Hire Simulator */}
            <div className="bg-white rounded-[22px] p-6 sm:p-7 border border-[#f1dfd5] shadow-soft space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#f1dfd5]">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-md bg-peach-100 text-peach-700 flex items-center justify-center text-xs font-bold">3</span>
                  <h3 className="font-serif font-bold text-base text-[#2b1a14]">
                    First Hire Planning (Staffing & Payroll)
                  </h3>
                </div>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeFirstHire}
                    onChange={(e) => setIncludeFirstHire(e.target.checked)}
                    className="rounded text-peach-600 focus:ring-peach-500 h-4 w-4"
                  />
                  <span className="text-xs font-semibold text-[#2b1a14]">Include Year 1 Hire</span>
                </label>
              </div>

              {includeFirstHire ? (
                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[#6b554b] font-medium block">Target Role</label>
                      <input
                        type="text"
                        value={firstHireRole}
                        onChange={(e) => setFirstHireRole(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] font-semibold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[#6b554b] font-medium block">Monthly Gross Salary (€)</label>
                      <div className="relative">
                        <span className="absolute left-3 top-2 text-[#988177]">€</span>
                        <input
                          type="number"
                          step={50}
                          value={hireGrossWage}
                          onChange={(e) => setHireGrossWage(Number(e.target.value) || 0)}
                          className="w-full pl-7 pr-3 py-1.5 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] font-semibold"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-peach-50 rounded-xl border border-peach-200 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="font-bold text-[#2b1a14] block">
                        Youth Employment & Student Contract Relief
                      </span>
                      <p className="text-[11px] text-[#6b554b]">
                        Applies reduced French social charges (22% vs typical 40% employer burden).
                      </p>
                    </div>
                    <label className="flex items-center space-x-1.5 cursor-pointer ml-3 flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={youthTaxCreditActive}
                        onChange={(e) => setYouthTaxCreditActive(e.target.checked)}
                        className="rounded text-peach-600 focus:ring-peach-500 h-4 w-4"
                      />
                      <span className="text-xs font-bold text-peach-700">Applied</span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#6b554b] pt-1">
                    <span>Gross: €{hireGrossWage} + Social Charges: €{Math.round(hireGrossWage * employerTaxRate)}</span>
                    <span className="font-bold text-[#2b1a14]">
                      Total Monthly Payroll Cost: €{hireTotalMonthlyCost.toLocaleString()} / mo
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-[#6b554b] italic py-2">
                  Solo founder model active. Check the box above to add your first barista, assistant, or technical intern.
                </p>
              )}
            </div>

            {/* Box 4: Revenue & Available Capital */}
            <div className="bg-white rounded-[22px] p-6 sm:p-7 border border-[#f1dfd5] shadow-soft space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#f1dfd5]">
                <h3 className="font-serif font-bold text-base text-[#2b1a14] flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-md bg-peach-100 text-peach-700 flex items-center justify-center text-xs font-bold">4</span>
                  <span>Starting Capital & Expected Inflows</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="space-y-1">
                  <label className="text-[#6b554b] font-medium block">Founder Equity / Savings</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-[#988177]">€</span>
                    <input
                      type="number"
                      step={1000}
                      value={founderSavings}
                      onChange={(e) => setFounderSavings(Number(e.target.value) || 0)}
                      className="w-full pl-7 pr-3 py-1.5 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] font-semibold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[#6b554b] font-medium block">Funding Matches (Grants/Loans)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-[#988177]">€</span>
                    <input
                      type="number"
                      step={1000}
                      value={securedFunding}
                      onChange={(e) => setSecuredFunding(Number(e.target.value) || 0)}
                      className="w-full pl-7 pr-3 py-1.5 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] font-semibold text-peach-700"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[#6b554b] font-medium block">Target Monthly Sales</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-[#988177]">€</span>
                    <input
                      type="number"
                      step={500}
                      value={monthlyRevenue}
                      onChange={(e) => setMonthlyRevenue(Number(e.target.value) || 0)}
                      className="w-full pl-7 pr-3 py-1.5 rounded-xl border border-[#f1dfd5] text-sm text-[#2b1a14] font-semibold text-leaf"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Real-Time Runway Dashboard (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-white rounded-[26px] p-6 sm:p-7 border-2 border-peach-300 shadow-card space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#f1dfd5]">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-xl bg-peach-500 text-white">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-peach-600">
                      Dynamic Financial Health
                    </span>
                    <h4 className="font-serif font-bold text-lg text-[#2b1a14]">
                      Cash Runway Forecast
                    </h4>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                  isHealthyRunway ? 'bg-emerald-100 text-emerald-900' : 'bg-amber-100 text-amber-900'
                }`}>
                  {isHealthyRunway ? 'Healthy Buffer' : 'Tight Runway'}
                </span>
              </div>

              {/* Runway Metric */}
              <div className="bg-[#fffaf7] rounded-2xl p-5 border border-peach-200 text-center space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6b554b] block">
                  Estimated Operating Runway
                </span>
                <div className="font-serif font-extrabold text-4xl sm:text-5xl text-peach-600">
                  {runwayMonths} <span className="text-xl sm:text-2xl font-sans font-bold text-[#2b1a14]">months</span>
                </div>
                <p className="text-xs text-[#6b554b] pt-1">
                  {netMonthlyBurn > 0 
                    ? `With a net monthly cash burn of €${netMonthlyBurn.toLocaleString()}/mo.`
                    : 'Monthly revenue fully covers operating expenses!'}
                </p>
              </div>

              {/* Breakdown Details */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#f1dfd5]">
                  <span className="text-[#6b554b] font-medium">Total Capital Available:</span>
                  <span className="font-bold text-[#2b1a14]">€{totalStartingCapital.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#f1dfd5]">
                  <span className="text-[#6b554b] font-medium">Initial Launch Outlays (Capex):</span>
                  <span className="font-bold text-red-600">-€{totalCapex.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#f1dfd5]">
                  <span className="text-[#6b554b] font-medium">Remaining Cash Buffer for Year 1:</span>
                  <span className="font-bold text-peach-700">€{remainingCapitalAfterCapex.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#f1dfd5]">
                  <span className="text-[#6b554b] font-medium">Monthly Operating Expenses (Opex):</span>
                  <span className="font-semibold text-[#2b1a14]">€{totalMonthlyOpex.toLocaleString()} / mo</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#6b554b] font-medium">Monthly Revenue Inflow:</span>
                  <span className="font-semibold text-leaf">+€{monthlyRevenue.toLocaleString()} / mo</span>
                </div>
              </div>

              {/* Strategic Tip */}
              <div className="p-4 rounded-2xl bg-peach-50 border border-peach-200 text-xs space-y-1.5">
                <div className="flex items-center space-x-1.5 font-bold text-peach-700">
                  <CheckCircle className="w-4 h-4 text-leaf flex-shrink-0" />
                  <span>Peachology Advisory Recommendation:</span>
                </div>
                <p className="text-[#6b554b] text-[11px] leading-relaxed">
                  Student founders should secure at least <strong>6 months of operating cash buffer</strong> prior to opening. Combining the <strong>Paris Tremplin Grant (€15k)</strong> with the <strong>Zero-Interest Honor Loan (€20k)</strong> protects your personal savings and covers initial lease guarantees.
                </p>
              </div>

              <a
                href="#fund-check"
                className="w-full btn-peach-primary py-3.5 text-xs uppercase tracking-wider"
              >
                <span>Re-check Funding Matches</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
