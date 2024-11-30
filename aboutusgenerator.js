function generateAboutUs() {
            const WebsiteName = document.getElementById('WebsiteName').value;
            const WebsiteType = document.getElementById('WebsiteType').value;
            const WebsiteSpeciality = document.getElementById('WebsiteSpeciality').value;
            const founder = document.getElementById('founder').value;
            const yearFounded = document.getElementById('yearFounded').value;
            const thumbnailUrl = document.getElementById('thumbnail').value;
            const description = document.getElementById('description').value;

           


            const aboutUsContent = `
      <h2>About ${WebsiteName}</h2>
      <h3 style="text-align: center;">Welcome To <span id="W_Name1">${WebsiteName}</span></h3>
      ${thumbnailUrl ? `<img src="${thumbnailUrl}" alt="${WebsiteName} Thumbnail">` : ''}
    <p><span id="W_Name2">${WebsiteName}</span> is a Professional <span id="W_Type1">${WebsiteType}</span> Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of <span id="W_Type2">${WebsiteType}</span>, with a focus on dependability and <span id="W_Spec">${WebsiteSpeciality}</span>. We're working to turn our passion for <span id="W_Type3">${WebsiteType}</span> into a booming <a href="https://www.hightechsgyan.tech/about-us-page-generator-tool/" rel="do-follow" style="color: inherit; text-decoration: none;">online website</a>. We hope you enjoy our <span id="W_Type4">${WebsiteType}</span> as much as we enjoy offering them to you.</p>
    <p>${description}</p>
    <p><span id="W_Name2">${WebsiteName}</span>! Established in the year <span id="W_Name2">${yearFounded}</span> by <span id="W_Name2">${founder}</span>, we are dedicated to providing high-quality products/services and creating a positive impact in the industry. With a history spanning over two decades, our team led by <span id="W_Name2">${founder}</span> has consistently pursued excellence and innovation.</p>
    <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
  <p style="font-weight: bold; text-align: center;">Thanks For Visiting Our Site<br /><br />
  <span style="color: blue; font-size: 16px; font-weight: bold; text-align: center;">Have a nice day!</span></p>
      
        
      `;
      
      
      const outputTextarea = document.getElementById('output');
  outputTextarea.value = aboutUsContent;

  const thumbnailSection = document.getElementById('thumbnailSection');
  thumbnailSection.innerHTML = thumbnailUrl ? `<img src="${thumbnailUrl}" alt="${WebsiteName} Thumbnail">` : '';

  const resultSection = document.getElementById('result');
  resultSection.innerHTML = aboutUsContent;

  const outputSection = document.getElementById('outputSection');
  outputSection.style.display = 'block';}

        function copyToClipboard() {
  const outputTextarea = document.getElementById('output');
  outputTextarea.select();
  document.execCommand('copy');
  
  const copyMessage = document.getElementById('copyMessage');
  copyMessage.innerHTML = 'Copied!';
  
  // Reset the message after a short delay (e.g., 3 seconds)
  setTimeout(() => {
    copyMessage.innerHTML = '';
  }, 3000);
}

        function downloadHTML() {
            const aboutUsContent = document.getElementById('output').value;
            const blob = new Blob([aboutUsContent], { type: 'text/html' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'about-us-page.html';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        // Display sample content by default
generateAboutUs();
    
