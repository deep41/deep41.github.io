import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
type ContactType = {};

const Contact = (props: ContactType) => {
  const {} = props;

  return (
    <>
      <div className="px-6 py-4">
        <div className="text-2xl font-bold">Connect with me</div>
        <Input type="email" placeholder="Email" max={2} className="my-2" />
        <Textarea placeholder="Message" className="my-2" />
      </div>
    </>
  );
};

export default Contact;
