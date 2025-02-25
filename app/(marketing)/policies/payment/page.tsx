export default function PaymentPolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Payment Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Payment Methods</h2>
          <p>
            Cockpit accepts payments through the following methods:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Major credit cards (Visa, MasterCard, American Express, Discover)</li>
            <li>PayPal</li>
            <li>Bank transfers (for annual Enterprise plans only)</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Billing Cycles</h2>
          <p>
            Subscription fees are charged at the beginning of each billing cycle, which may be monthly or annually depending on your selected plan.
          </p>
          <p className="mt-2">
            For monthly plans, you will be billed on the same date each month. For annual plans, you will be billed on the anniversary of your subscription start date.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Free Trial</h2>
          <p>
            New customers may be eligible for a 14-day free trial of our Premium or Enterprise plans. No payment information is required to start a free trial.
          </p>
          <p className="mt-2">
            At the end of the trial period, you will need to select a paid plan to continue using Cockpit's services. If you choose not to subscribe to a paid plan, your account will be automatically downgraded to our Free plan with limited features.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Refunds</h2>
          <p>
            Cockpit offers a 30-day money-back guarantee for new customers. If you are not satisfied with our service within the first 30 days after payment, you may request a full refund.
          </p>
          <p className="mt-2">
            To request a refund, please contact our customer support team at support@Cockpit.com with your account details and reason for the refund request.
          </p>
          <p className="mt-2">
            After the initial 30-day period, refunds are generally not provided for subscription payments. However, we evaluate refund requests on a case-by-case basis for exceptional circumstances.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cancellations</h2>
          <p>
            You may cancel your subscription at any time through your account settings or by contacting customer support. Upon cancellation:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>You will retain access to paid features until the end of your current billing cycle.</li>
            <li>Your account will automatically downgrade to the Free plan at the end of your paid period.</li>
            <li>No partial refunds are provided for unused portions of your subscription period.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Price Changes</h2>
          <p>
            Cockpit reserves the right to modify subscription prices at any time. If we change pricing for your current subscription plan, we will notify you at least 30 days before the change takes effect.
          </p>
          <p className="mt-2">
            Price changes will apply at the start of your next billing cycle after the notification period.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Taxes</h2>
          <p>
            All prices displayed are exclusive of applicable taxes unless otherwise stated. Depending on your location, sales tax, VAT, or other transaction taxes may be added to your subscription fee.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
          <p>
            If you have any questions about our payment policy, please contact our billing department:
          </p>
          <p className="mt-2">
            Email: billing@Cockpit.com<br />
            Phone: +1 (555) 123-4567<br />
            Hours: Monday-Friday, 9:00 AM - 5:00 PM EST
          </p>
        </section>
      </div>
      
      <div className="mt-12 text-sm text-muted-foreground">
        <p>Last updated: June 15, 2024</p>
      </div>
    </div>
  );
} 