import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Allen" />
          </div>

          <div>
            <label>email </label>
            <input type="text" required placeholder="abc@gmail.com" />
          </div>

          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your queries"
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
