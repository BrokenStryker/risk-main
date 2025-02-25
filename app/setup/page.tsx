"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function SetupGuidePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-12">Application Setup Guide</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Account Setup */}
        <Card className="h-full flex flex-col">
          <CardHeader className="bg-primary/5 rounded-t-lg">
            <CardTitle className="flex items-center">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-2">1</div>
              Account Setup
            </CardTitle>
            <CardDescription>Create and configure your account</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow pt-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Create an account</h3>
                  <p className="text-sm text-muted-foreground">Sign up with your email or use social authentication</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Complete your profile</h3>
                  <p className="text-sm text-muted-foreground">Add your organization details and preferences</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Choose a subscription plan</h3>
                  <p className="text-sm text-muted-foreground">Select the plan that fits your needs</p>
                </div>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/signup">Create Account</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Column 2: Configuration */}
        <Card className="h-full flex flex-col">
          <CardHeader className="bg-primary/5 rounded-t-lg">
            <CardTitle className="flex items-center">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-2">2</div>
              Configuration
            </CardTitle>
            <CardDescription>Set up your risk assessment parameters</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow pt-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Define risk categories</h3>
                  <p className="text-sm text-muted-foreground">Set up the risk categories specific to your organization</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Configure assessment criteria</h3>
                  <p className="text-sm text-muted-foreground">Customize the criteria used to evaluate risks</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Set up notification rules</h3>
                  <p className="text-sm text-muted-foreground">Define when and how you want to be notified</p>
                </div>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/docs/configuration">View Configuration Guide</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Column 3: Integration */}
        <Card className="h-full flex flex-col">
          <CardHeader className="bg-primary/5 rounded-t-lg">
            <CardTitle className="flex items-center">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-2">3</div>
              Integration
            </CardTitle>
            <CardDescription>Connect with your existing systems</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow pt-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">API integration</h3>
                  <p className="text-sm text-muted-foreground">Connect using our RESTful API endpoints</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Data import</h3>
                  <p className="text-sm text-muted-foreground">Import existing risk data from CSV or other sources</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Third-party connections</h3>
                  <p className="text-sm text-muted-foreground">Set up integrations with popular tools and services</p>
                </div>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/docs/api">View API Documentation</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Need Help with Setup?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Our team is ready to assist you with every step of the setup process. Book a call with our implementation specialists for personalized guidance.
        </p>
        <Button asChild>
          <Link href="/contact">Schedule a Setup Call</Link>
        </Button>
      </div>
    </div>
  );
} 