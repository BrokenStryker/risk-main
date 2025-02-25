export default function HomePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Cockpit</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your all-in-one platform for risk assessment and management solutions.
        </p>
      </section>

      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Simplify Your Risk Management</h2>
            <p className="text-lg mb-6">
              Our platform provides powerful tools to identify, assess, and mitigate risks across your organization.
              With intuitive dashboards and real-time analytics, you'll always stay one step ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/signup" className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 inline-block text-center">
                Get Started
              </a>
              <a href="/pricing" className="border border-input px-6 py-3 rounded-md font-medium hover:bg-accent hover:text-accent-foreground inline-block text-center">
                View Pricing
              </a>
            </div>
          </div>
          <div className="bg-muted p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary p-1 rounded mr-3">✓</span>
                <span>Comprehensive risk assessment tools</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary p-1 rounded mr-3">✓</span>
                <span>Real-time risk monitoring dashboards</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary p-1 rounded mr-3">✓</span>
                <span>Automated compliance reporting</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary p-1 rounded mr-3">✓</span>
                <span>Customizable risk mitigation strategies</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary p-1 rounded mr-3">✓</span>
                <span>Integration with your existing tools</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Built With Modern Technology</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
            <div className="text-4xl mb-2">⚛️</div>
            <h3 className="font-semibold mb-1">Next.js</h3>
            <p className="text-sm text-center text-muted-foreground">React framework for production</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
            <div className="text-4xl mb-2">🎨</div>
            <h3 className="font-semibold mb-1">Tailwind CSS</h3>
            <p className="text-sm text-center text-muted-foreground">Utility-first CSS framework</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
            <div className="text-4xl mb-2">🔒</div>
            <h3 className="font-semibold mb-1">Clerk</h3>
            <p className="text-sm text-center text-muted-foreground">Authentication & user management</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
            <div className="text-4xl mb-2">💰</div>
            <h3 className="font-semibold mb-1">Stripe</h3>
            <p className="text-sm text-center text-muted-foreground">Secure payment processing</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
            <div className="text-4xl mb-2">📊</div>
            <h3 className="font-semibold mb-1">Supabase</h3>
            <p className="text-sm text-center text-muted-foreground">Open source Firebase alternative</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
            <div className="text-4xl mb-2">🔄</div>
            <h3 className="font-semibold mb-1">Drizzle ORM</h3>
            <p className="text-sm text-center text-muted-foreground">TypeScript ORM for SQL databases</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
            <div className="text-4xl mb-2">🔧</div>
            <h3 className="font-semibold mb-1">Server Actions</h3>
            <p className="text-sm text-center text-muted-foreground">Next.js data mutation</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="font-semibold mb-1">Framer Motion</h3>
            <p className="text-sm text-center text-muted-foreground">Animation library for React</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of organizations that trust Cockpit to manage their risk assessment needs.
        </p>
        <a href="/signup" className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium hover:bg-primary/90 inline-block text-center">
          Start Your Free Trial
        </a>
      </section>
    </div>
  );
}
