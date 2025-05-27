import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { Mail, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch('https://formspree.io/f/xdkapeoy', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
          variant: "default",
        })
        form.reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto min-h-[calc(100vh-80px)] px-4 py-16 max-w-[1000px]">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-highlight">Get in Touch</h1>
          <p className="text-gray-300 text-lg">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>

        <Card className="glass-card border-white/20 shadow-xl interactive-hover">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Contact Form</CardTitle>
            <CardDescription className="text-gray-300">
              Fill out the form below and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400/50 focus:ring-blue-400/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400/50 focus:ring-purple-400/20"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400/50 focus:ring-cyan-400/20 resize-none"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full highlight-gradient hover:bg-blue-500/20 text-white font-medium py-3 interactive-hover" 
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="glass-card border-white/20 p-6 text-center interactive-hover">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full highlight-blue flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h2 className="font-semibold text-white text-lg mb-2">Email</h2>
            <p className="text-gray-300">
              deepak.rajendran123@gmail.com
            </p>
          </div>
          <div className="glass-card border-white/20 p-6 text-center interactive-hover">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full highlight-purple flex items-center justify-center">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h2 className="font-semibold text-white text-lg mb-2">Location</h2>
            <p className="text-gray-300">
              Raleigh, NC, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
