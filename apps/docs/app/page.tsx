import { NewsletterSignup } from '@/components/common/newsletter-signup'
import { CTASection } from '@/components/marketing/cta-section'
import { DetailsSection } from '@/components/marketing/details-section'
import { FeaturesSection } from '@/components/marketing/features-section'
import { HeroSection } from '@/components/marketing/hero-section'
import { InstallationSection } from '@/components/marketing/installation-section'
import { PricingSection } from '@/components/marketing/pricing-section'

export default function Page() {
	return (
		<>
			<HeroSection />
			{/* <LogoSection /> */}
			<FeaturesSection />
			<DetailsSection />
			<InstallationSection />
			{/* <CustomizationSection /> */}
			{/* <CaseStudiesSection /> */}
			<PricingSection />
			{/* <TestimonialsSection /> */}
			{/* <FAQSection /> */}
			<div className="flex flex-col items-center justify-center gap-4">
				<CTASection />
			</div>
			<div className="pb-24">
				<NewsletterSignup bg={false} hideAfterSubmit={false} />
			</div>
		</>
	)
}
