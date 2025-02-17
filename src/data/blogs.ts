import { Blog } from '../types/Blog';

export const blogs: Blog[] = [
  {
    id: '1',
    title: 'Test blog',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec fermentum est. Cras ac tincidunt sapien.',
    date: '2024-03-20',
    content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec fermentum est. Cras ac tincidunt sapien. Phasellus ut aliquam neque. Pellentesque sapien eros, luctus pulvinar vulputate in, convallis sed risus. Cras suscipit diam lacus. Curabitur vitae iaculis nulla. Nulla dictum metus eu volutpat finibus. Nulla laoreet tortor id massa blandit aliquam ac in nisi.

Quisque tempus dui at arcu rutrum, quis tincidunt dolor elementum. Duis egestas tortor at tristique egestas. Nullam lacus mauris, faucibus id erat ut, interdum laoreet purus. Suspendisse eget ligula at risus mattis euismod id quis magna. Donec porta vehicula tellus, sit amet scelerisque magna. Nunc id.
    `
  },
  // Add more blog posts here
]; 