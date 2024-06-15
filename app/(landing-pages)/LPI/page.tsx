import HeroLPI from "@/app/(landing-pages)/LPI/(components)/hero";
import FeatureILPI from "@/app/(landing-pages)/LPI/(components)/featureILPI";
import BenefitsILPI from "@/app/(landing-pages)/LPI/(components)/benefitsILPI";
import CompetitionComparison from "@/app/(landing-pages)/LPI/(components)/competitionComparison";
import SmartAlgoExplainILPI from "@/app/(landing-pages)/LPI/(components)/smartAlgoExplainILPI";
import PricingILPI from "@/app/(landing-pages)/LPI/(components)/pricingILPI";

export default function Page(){
    return(
        <div>
           <HeroLPI />
            <BenefitsILPI />
            <CompetitionComparison />
            <PricingILPI />
            <FeatureILPI />
            <SmartAlgoExplainILPI />
        </div>
    )
}