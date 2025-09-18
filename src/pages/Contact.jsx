export default function Contact() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-navy mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Your message" className="w-full p-2 border rounded" rows="4" />
        <button type="submit" className="bg-navy text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </div>
  );
}
