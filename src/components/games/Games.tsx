import { Button } from '@/components/ui/button';
import { Gamepad } from 'lucide-react';

const Games = () => {
  return (
    <div className="container mx-auto h-[calc(100vh-68px)] px-4 py-16 max-w-[1000px]">
      <h1 className="mb-8 text-3xl font-bold">Games</h1>
      <div className="grid gap-4">
        <Button variant="ghost" className="w-fit" asChild>
          <a href="/tetris" className="flex items-center">
            <Gamepad className="mr-2 h-5 w-5" />
            Tetris
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Games; 