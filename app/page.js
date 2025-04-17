import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  BarChart2,
  Book,
  Calendar,
  ChevronRight,
  FileText,
  Lock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import faqs from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: Book,
    title: "Rich Text Editor",
    description:
      "Express yourself with a powerful editor supporting markdown, formatting, and more.",
  },
  {
    icon: Sparkles,
    title: "Daily Inspiration",
    description:
      "Get inspired with daily prompts and mood-based imagery to spark your creativity.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "Your thoughts are safe with enterprise-grade security and privacy features.",
  },
];

export default function Home() {
  return (
    <div className="relative container mx-auto px-20 pt-16 pb-16">
      {/* Hero Section */}

      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 gradient-title">
          Your Space to Note. <br />
          Your Story to Tell.
        </h1>
        <p className="text-lg md:text-xl text-orange-800 mb-8">
          Capture your thoughts, track your moods, and reflect on your journey
          in a beautiful, secure space.
        </p>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-orange-50 via-transparent to-transparent pointer-events-none z-10" />
          <div className="bg-white rounded-2xl p-4 max-full mx-auto">
            <div className="border-b border-orange-100 pb-4 mb-4 flex items-cener justify-between">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5 text-orange-500" />
                <span className="text-orange-900 font-medium">
                  Today's Entry
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-orange-200"></div>
                <div className="h-3 w-3 rounded-full bg-orange-300"></div>
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              </div>
            </div>

            <div className="space-y-4 p-4">
              <h3 className="text-xl font-semibold text-orange-900">
                Daily Prompts
              </h3>

              <Skeleton className="h-4 bg-orange-100 rounded w-3/4" />
              <Skeleton className="h-4 bg-orange-100 rounded w-full" />
              <Skeleton className="h-4 bg-orange-100 rounded w-2/3" />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Link href="/dashboard">
            <Button
              variant="journal"
              size="md"
              className="py-6 px-8 rounded-full flex items-center "
            >
              Start Writing
              <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>

          <Link href="/#features">
            <Button
              variant="outline"
              className="px-8 py-6 rounded-full border-orange-600 text-orange-600 hover:bg-orange-100"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}

      <section
        id="features"
        className=" mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8 "
      >
        {features.map((feature, index) => (
          <Card key={index} className="shadow-lg">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mt-[-20]">
                <feature.icon className="h-6 w-6 text-orange-600" />
              </div>

              <h3 className="font-semibold text-xl text-orange-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-orange-700 mb-[-20]">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Preview Section */}

      <div className="space-y-20 mt-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="rounded-full h-12 w-12 bg-orange-100 flex items-center justify-center">
              <FileText className="text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-orange-800">
              Rich Text Editor
            </h3>
            <p className="text-lg  text-orange-700">
              Express yourself fully with our powerful editor featuring :
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-400" />{" "}
                <span>Format text with ease</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-400" />{" "}
                <span>Embed links</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 bg-white p-6 rounded-2xl shadow-xl border border-orange-100">
            <div className="flex gap-2 mb-6">
              <div className="h-8 w-8 rounded bg-orange-100" />
              <div className="h-8 w-8 rounded bg-orange-100" />
              <div className="h-8 w-8 rounded bg-orange-100" />
            </div>
            <div className="h-4 bg-orange-50 rounded w-3/4" />
            <div className="h-4 bg-orange-100 rounded w-full" />
            <div className="h-4 bg-orange-50 rounded w-2/3" />
            <div className="h-4 bg-orange-100 rounded w-1/3" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 bg-white p-6 rounded-2xl shadow-xl border border-orange-100">
            <div className="bg-gradient-to-b from-orange-50 to-orange-100 h-40 rounded-lg" />
            <div className="justify-between flex">
              <div className="bg-orange-100 h-4 w-16 rounded " />
              <div className="bg-orange-100 h-4 w-16 rounded " />
              <div className="bg-orange-100 h-4 w-16 rounded " />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-full h-12 w-12 bg-orange-100 flex items-center justify-center">
              <BarChart2 className="text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-orange-800">
              Mood Analytics
            </h3>
            <p className="text-lg  text-orange-700">
              Track your emotional journey with powerfull analytics :
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-400" />{" "}
                <span>Visual mood trends</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-400" />{" "}
                <span>Pattern recognition</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Frequently Asked Question */}

      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center text-red-900 mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full mx-auto">
          {faqs.map((faq, index) => {
            return (
              <AccordionItem key={faq.q} value={`item-${index}`}>
                <AccordionTrigger className="text-orange-900 text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-orange-700">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>



      {/* CTA sectiom */}

      <div className="mt-24">
        <Card className="bg-gradient-to-r from-orange-100 to-amber-100">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-center text-red-900 mb-6">
              Start Note-ing on your Journey Today{" "}
            </h2>
            <p className="text-lg text-orange-700 mb-8 max-w-2xl mx-auto">
              Join thousands of writers who have already discovered the power of
              digital journaling.
            </p>
            <Link href="/dashboard">
              <Button variant="journal" size="lg" className="animate-bounce">
                Get Started for Free <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
