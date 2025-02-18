import ContactForm from "@/components/contact-form"

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h1>
        <ContactForm />
      </div>
    </main>
  )
}

