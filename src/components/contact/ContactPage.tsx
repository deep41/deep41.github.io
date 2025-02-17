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

const ContactPage = () => {
  return (
    <div className="container mx-auto min-h-screen px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
          <p className="text-muted-foreground">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>

        <Card className="bg-white shadow-xl transition dark:bg-black dark:text-white">
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription className="dark:text-gray-400">
              Fill out the form below and I'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              action="https://formspree.io/f/xdkapeoy"
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="dark:border-zinc-700 dark:bg-zinc-900"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="dark:border-zinc-700 dark:bg-zinc-900"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  className="dark:border-zinc-700 dark:bg-zinc-900"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-4 text-center">
          <div>
            <h2 className="font-semibold">Email</h2>
            <p className="text-muted-foreground dark:text-gray-400">
              deepak.rajendran123@gmail.com
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Location</h2>
            <p className="text-muted-foreground dark:text-gray-400">
              Raleigh, NC, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
