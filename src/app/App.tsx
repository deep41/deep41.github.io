import { Button } from "@/components/ui/button";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="bg-grey">Hello World</div>
      <div className=" p-10">
        <Button variant={"default"}>Click Me!</Button>
        <Button variant={"destructive"}>Click Me!</Button>
        <Button variant={"ghost"}>Click Me!</Button>
        <Button variant={"link"}>Click Me!</Button>
        <Button variant={"outline"}>Click Me!</Button>
        <Button variant={"secondary"}>Click Me!</Button>
      </div>
      <Footer />
    </>
  );
}

export default App;
