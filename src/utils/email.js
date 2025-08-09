// Email service stub - logs to console for demo purposes
export const sendEmail = async (emailData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 500));
  
  console.log('📧 Email sent successfully:', {
    timestamp: new Date().toISOString(),
    ...emailData
  });
  
  // Simulate success/failure (95% success rate)
  const success = Math.random() > 0.05;
  
  if (!success) {
    throw new Error('Failed to send email. Please try again.');
  }
  
  return {
    success: true,
    messageId: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    message: 'Email sent successfully!'
  };
};

export const sendContactForm = async (formData) => {
  return sendEmail({
    type: 'contact',
    subject: 'New Contact Form Submission',
    from: formData.email,
    to: 'contact@apexsportsclub.com',
    data: formData
  });
};

export const sendRegistrationForm = async (formData) => {
  return sendEmail({
    type: 'registration',
    subject: 'New Member Registration',
    from: formData.email,
    to: 'registrations@apexsportsclub.com',
    data: formData
  });
};
