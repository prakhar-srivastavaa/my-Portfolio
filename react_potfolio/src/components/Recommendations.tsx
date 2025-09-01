import React, { useState } from 'react';
import '../styles/Recommendations.css';

interface Recommendation {
  text: string;
  name?: string;
}

const Recommendations: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([
    {
      text: 'Prakhar is a fast learner with strong grasp of full-stack web development. He\'s proactive, asks the right questions, and works seamlessly within a team.'
    },
    {
      text: 'Working with Prakhar has been a great experience. He\'s technically sound, detail-oriented, and always ensures high-quality results.'
    },
    {
      text: 'Prakhar contributed significantly during the early stages of our project. His dedication and technical expertise make him a valuable asset to any team. He will be an asset for any organisation!'
    }
  ]);

  const [showPopup, setShowPopup] = useState(false);

  const addRecommendation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newRecommendationText = formData.get('message') as string;
    const name = formData.get('name') as string;
    
    if (newRecommendationText && newRecommendationText.trim() !== '') {
      setRecommendations([...recommendations, { 
        text: newRecommendationText,
        name: name && name.trim() !== '' ? name : undefined
      }]);
      setShowPopup(true);
      
      // Reset the form
      event.currentTarget.reset();
    }
  };

  return (
    <>
      <section id="recommendations">
        <h2>Recommendations</h2>
        <div style={{ clear: 'both' }}></div>
        <div className="all_recommendations" id="all_recommendations">
          {recommendations.map((recommendation, index) => (
            <div className="recommendation" key={index}>
              <span>&#8220;</span>
              {recommendation.text}
              <span>&#8221;</span>
              {recommendation.name && <div className="recommender-name">- {recommendation.name}</div>}
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="flex-center">
          <fieldset>
            <legend className="introduction">Leave a Recommendation</legend>
            <form onSubmit={addRecommendation}>
              <input type="text" name="name" placeholder="Name (Optional)" />
              <br />
              <textarea 
                name="message" 
                id="new_recommendation" 
                cols={50} 
                rows={10} 
                placeholder="Message"
                required
              ></textarea>
              <div className="flex-center">
                <button type="submit">Submit</button>
              </div>
            </form>
          </fieldset>
        </div>
      </section>

      {showPopup && (
        <div className="popup" id="popup">
          <img src="/images/checkmark--outline.svg" alt="Checkmark" />
          <h3>Thanks for Leaving recommendation &lt;3</h3>
          <button onClick={() => setShowPopup(false)}>Ok</button>
        </div>
      )}
    </>
  );
};

export default Recommendations;
