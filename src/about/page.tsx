import * as React from "react";

import { AppleIcon, Link, SmartphoneIcon } from 'lucide-react';
import Navbar from '../components/nav/navbar';
import Footer from "../components/footer/footer";


export default function AboutPage() {
  return (
    <div className='w-full'>
      <main className='w-full'>
        <Navbar/>
        <section className="container mx-auto w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-12">
              <div className="flex flex-col justify-center space-y-4 md:w-1/2">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    About Our Boom Boom
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our dating app is designed to help you find meaningful connections. With just a few taps, you can create a profile and start meeting potential matches.
                  </p>
                </div>
              </div>
              <div className="mt-8 md:mt-0 md:w-1/2">
                <img
                  src="/images/couple_image.jpg"
                  width={550}
                  height={550}
                  alt="About"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full  py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <HeartIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Smart Matching</h3>
                <p className="text-muted-foreground">
                  Our AI-powered algorithm helps you find your perfect match based on your preferences and interests.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <MessageCircleIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Secure Messaging</h3>
                <p className="text-muted-foreground">
                  Chat safely with potential matches in our secure environment, ensuring your privacy and comfort.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <VerifiedIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Verified Profiles</h3>
                <p className="text-muted-foreground">
                  All profiles are verified to ensure authentic connections and a safe dating experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 container mx-auto md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Download Our App</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Get our dating app on your iOS or Android device and start your journey to meaningful connections today.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  to="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  <AppleIcon className="mr-2 h-5 w-5" />
                  iOS App
                </Link>
                <Link
                  to="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  <SmartphoneIcon className="mr-2 h-5 w-5" />
                  Android App
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </main>
    </div>
  );
}

// Define specific types for SVG icons
function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H5l-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function VerifiedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l3 7h7l-5 5 2 8-7-4-7 4 2-8-5-5h7z" />
    </svg>
  );
}
