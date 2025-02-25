import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { Check } from "lucide-react";

export default async function PricingPage() {
  const { userId } = auth();

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4">Flexible Pricing for Every Organization</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Choose the plan that best fits your risk assessment needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Free Plan */}
        <PricingCard
          title="Starter"
          price="$0"
          description="Perfect for individuals and small teams getting started with risk assessment"
          features={[
            "Basic risk assessment tools",
            "Up to 3 risk categories",
            "Limited dashboard access",
            "Email support",
            "7-day data history"
          ]}
          buttonText="Start for Free"
          buttonLink="/signup"
          userId={userId}
          popular={false}
        />

        {/* Monthly Plan */}
        <PricingCard
          title="Professional"
          price="$49"
          period="/month"
          description="Ideal for growing organizations with moderate risk management needs"
          features={[
            "Advanced risk assessment tools",
            "Unlimited risk categories",
            "Full dashboard access",
            "Priority email support",
            "30-day data history",
            "Custom reporting",
            "Team collaboration tools"
          ]}
          buttonText="Subscribe Monthly"
          buttonLink={process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_MONTHLY || "#"}
          userId={userId}
          popular={true}
        />

        {/* Yearly Plan */}
        <PricingCard
          title="Enterprise"
          price="$399"
          period="/month"
          description="For large organizations with complex risk management requirements"
          features={[
            "Everything in Professional",
            "Dedicated account manager",
            "24/7 phone support",
            "Advanced API access",
            "Unlimited data history",
            "Custom integration services",
            "On-premise deployment option",
            "Compliance certification"
          ]}
          buttonText="Contact Sales"
          buttonLink="/contact"
          userId={userId}
          popular={false}
        />
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left">
            <h3 className="font-semibold mb-2">Can I change plans later?</h3>
            <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
          </div>
          <div className="text-left">
            <h3 className="font-semibold mb-2">Do you offer custom pricing?</h3>
            <p className="text-muted-foreground">Yes, for organizations with special requirements, we offer custom pricing. Contact our sales team for details.</p>
          </div>
          <div className="text-left">
            <h3 className="font-semibold mb-2">Is there a free trial?</h3>
            <p className="text-muted-foreground">We offer a 14-day free trial on all paid plans. No credit card required to start.</p>
          </div>
          <div className="text-left">
            <h3 className="font-semibold mb-2">How does billing work?</h3>
            <p className="text-muted-foreground">We charge at the start of each billing cycle. You can pay with all major credit cards and PayPal.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  userId: string | null;
  popular: boolean;
}

function PricingCard({ 
  title, 
  price, 
  period = "", 
  description, 
  features, 
  buttonText, 
  buttonLink, 
  userId,
  popular 
}: PricingCardProps) {
  const finalButtonLink = userId && buttonLink.includes("stripe") 
    ? `${buttonLink}?client_reference_id=${userId}` 
    : buttonLink;

  return (
    <Card className={cn(
      "flex flex-col h-full relative", 
      popular && "border-primary shadow-lg shadow-primary/10"
    )}>
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">{period}</span>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={cn(
            "w-full", 
            popular ? "bg-primary hover:bg-primary/90" : ""
          )}
          variant={popular ? "default" : "outline"}
          asChild
        >
          <a
            href={finalButtonLink}
            className={cn(
              "inline-flex items-center justify-center", 
              finalButtonLink === "#" && "pointer-events-none opacity-50"
            )}
          >
            {buttonText}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
