// Replace these with your actual IDs
export const initEmailJS = () => {
  emailjs.init("1OaiLaS3MqB0AIjFL"); // From API Keys
};

export const sendContactEmail = (formData) => {
  const templateParams = {
    // ... existing code
  };

  return emailjs.send(
    'service_ty8rfw9', // From Email Services
    'template_51ublnk', // From Email Templates
    templateParams
  );
};