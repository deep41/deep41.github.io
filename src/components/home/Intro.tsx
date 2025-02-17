import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import { Link } from "react-router"

export default function Intro() {
  return (
    <div className="mx-auto max-w-[1000px] py-16 px-4">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hey, I'm Deepak 👋
        </h1>
        <p className="text-lg text-muted-foreground">
          I'm a software engineer passionate about building innovative solutions. 
          I write about software development, tech, and my experiences.
        </p>
        <div className="flex gap-4">
          <Button asChild variant="outline" className="bg-stone-300 dark:bg-stone-700">
            <a href="https://github.com/deep41" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" className="bg-stone-300 dark:bg-stone-700">
            <a href="https://linkedin.com/in/deep41" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button asChild className="bg-stone-700 dark:bg-stone-300">
            <Link to="/portfolio">
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 