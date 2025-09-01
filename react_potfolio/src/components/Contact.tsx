import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="flex-center">
        <fieldset>
          <legend className="introduction">Leave a Recommendation</legend>
          <input type="text" placeholder="Name (Optional)" /> <br />
          <textarea id="new_recommendation" cols={500} rows={10} placeholder="Message"></textarea>
          <div className="flex-center">
            <button id="recommend_btn">Submit</button>
          </div>
        </fieldset>
      </div>
    </section>
  );
};

export default Contact;
