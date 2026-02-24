import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, phone, message })
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setStatus({ type: "success", text: "Message sent successfully!" });
      setName("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setStatus({
        type: "error",
        text: "Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="card">
      <h2>Send Me a Message</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="form-field">
          <span>Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </label>

        <label className="form-field">
          <span>Contact Number</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone number"
            required
          />
        </label>

        <label className="form-field">
          <span>Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            rows={4}
            required
          />
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className={`status status-${status.type}`}>{status.text}</p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;

