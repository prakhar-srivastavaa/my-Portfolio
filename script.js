function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

function downloadResume() {
  // Replace this URL with your actual resume link (Google Drive, Dropbox, GitHub, etc.)
  const resumeUrl = 'https://drive.google.com/file/d/1egUGwRPE6XtbLNA-v4fl1E4hrx9l0Nyp/view?usp=drive_link';
  
  // Alternative: Direct link to resume file
  // const resumeUrl = 'https://your-website.com/path/to/resume.pdf';
  
  // Create temporary link and trigger download
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Prakhar_Srivastava_Resume.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  console.log('Resume download initiated');
}
