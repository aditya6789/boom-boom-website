import Footer from "../components/footer/footer"
import Navbar from "../components/nav/navbar"

export default function PrivacyPolicyPage() {
    return (
      <div className="bg-background text-foreground">
        <Navbar/>
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 mt-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              At Boom Boom, we are committed to protecting the privacy and security of your personal information. This privacy policy explains how we collect, use, and safeguard your data while you connect with potential matches.
            </p>
            <div className="mt-8 space-y-8">
              <section>
                <h2 className="text-xl font-bold">Data Collection</h2>
                <p className="mt-2 text-muted-foreground">We collect the following information when you use our dating app:</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium">Personal Information:</span>
                    Your name, email address, phone number, and profile details.
                  </li>
                  <li>
                    <span className="font-medium">Location Data:</span> Your current location to provide you with nearby matches.
                  </li>
                  <li>
                    <span className="font-medium">Usage Data:</span> Information about your app usage, such as the profiles you view, messages you send, and your interactions.
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-bold">Data Usage</h2>
                <p className="mt-2 text-muted-foreground">We use the collected data for the following purposes:</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium">Providing Services:</span>
                    To enable you to connect with potential matches, chat, and receive support.
                  </li>
                  <li>
                    <span className="font-medium">Improving Our App:</span> To enhance the user experience, optimize our features, and develop new functionalities.
                  </li>
                  <li>
                    <span className="font-medium">Personalization:</span> To provide you with tailored recommendations and matches based on your preferences.
                  </li>
                  <li>
                    <span className="font-medium">Compliance:</span> To comply with legal and regulatory requirements.
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-bold">Data Sharing</h2>
                <p className="mt-2 text-muted-foreground">We may share your data with the following parties:</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium">Service Providers:</span> Third-party vendors and contractors who assist us in operating our app and providing our services.
                  </li>
                  <li>
                    <span className="font-medium">Law Enforcement:</span> Government authorities and law enforcement agencies, if required by law or to protect our rights and the safety of others.
                  </li>
                  <li>
                    <span className="font-medium">Business Transfers:</span> In the event of a merger, acquisition, or sale of our business, your data may be transferred to the new entity.
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-bold">Data Security</h2>
                <p className="mt-2 text-muted-foreground">We take the following measures to protect your data:</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium">Encryption:</span> We use industry-standard encryption techniques to secure your personal and financial information.
                  </li>
                  <li>
                    <span className="font-medium">Access Controls:</span> We limit access to your data to only those employees and service providers who need it to perform their duties.
                  </li>
                  <li>
                    <span className="font-medium">Monitoring:</span> We continuously monitor our systems for any unauthorized access or data breaches.
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-bold">Your Rights</h2>
                <p className="mt-2 text-muted-foreground">As a user of our app, you have the following rights:</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium">Access:</span> You can request a copy of the personal information we hold about you.
                  </li>
                  <li>
                    <span className="font-medium">Correction:</span> You can request that we correct any inaccurate or incomplete personal information we hold about you.
                  </li>
                  <li>
                    <span className="font-medium">Deletion:</span> You can request that we delete your personal information, subject to certain exceptions.
                  </li>
                  <li>
                    <span className="font-medium">Opt-Out:</span> You can opt-out of certain data processing activities, such as personalization and marketing.
                  </li>
                </ul>
              </section>
             
            </div>
          </div>
        </div>
        <Footer/>

      </div>
    )
  }