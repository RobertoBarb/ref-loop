import emailjs from '@emailjs/browser';

// EmailJS configuration - will be initialized dynamically
let isInitialized = false;

export interface EmailData {
  to_email: string;
  to_name: string;
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  form_type: string;
  // Form fields
  firstName?: string;
  lastName?: string;
  role?: string;
  organization?: string;
  country?: string;
  organizationSize?: string;
  request?: string;
  challenges?: string;
  resumeLink?: string;
  joinType?: string;
  challengeDescription?: string;
  contributionDescription?: string;
}

export async function sendEmailJS(
  emailData: EmailData, 
  destinationEmail?: string,
  config?: { 
    serviceId: string; 
    templateId: string; 
    publicKey: string 
  },
  formType?: 'contact' | 'bookDemo' | 'careers'
): Promise<boolean> {
  try {
    // Initialize EmailJS if not already done or if config is provided
    if (!isInitialized || config) {
      const publicKey = config?.publicKey || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '_IsGcqR5qSufMNDdM';
      emailjs.init(publicKey);
      isInitialized = true;
    }

    const serviceId = config?.serviceId || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_halss8z';
    
    // Use single template ID for all forms with conditional rendering
    const templateId = config?.templateId || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_gzgxcwp';

    const templateParams = {
      to_email: destinationEmail || emailData.to_email,
      to_name: emailData.to_name,
      from_name: emailData.from_name,
      from_email: emailData.from_email,
      subject: emailData.subject,
      message: emailData.message,
      form_type: emailData.form_type,
      // Always include all possible fields, even if empty
      firstName: emailData.firstName || '',
      lastName: emailData.lastName || '',
      email: emailData.from_email,
      role: emailData.role || '',
      organization: emailData.organization || '',
      country: emailData.country || '',
      organizationSize: emailData.organizationSize || '',
      request: emailData.request || '',
      challenges: emailData.challenges || '',
      resumeLink: emailData.resumeLink || '',
      joinType: emailData.joinType || '',
      challengeDescription: emailData.challengeDescription || '',
      contributionDescription: emailData.contributionDescription || '',
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams
    );

    console.log('EmailJS sent successfully:', response);
    return true;
  } catch (error) {
    console.error('EmailJS error:', error);
    return false;
  }
}

export function formatFormDataAsMessage(formData: Record<string, any>, formType: string): string {
  const fields = Object.entries(formData)
    .filter(([key, value]) => value && value.toString().trim() !== '')
    .map(([key, value]) => {
      const label = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .trim();
      return `${label}: ${value}`;
    })
    .join('\n');

  return `New ${formType} Form Submission\n\n${fields}\n\nThis email was sent from the Loop AI Group website.`;
}

export function generateEmailTemplate(formData: Record<string, any>, formType: string): string {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Contact': return '📋';
      case 'Book Demo': return '🎯';
      case 'Career Application': return '💼';
      default: return '📧';
    }
  };

  const getFormSpecificContent = (type: string, data: Record<string, any>) => {
    switch (type) {
      case 'Contact':
        return `
          <!-- Personal Information -->
          <div style="margin-bottom: 15px; padding: 10px; background-color: #e8f4f8; border-radius: 5px;">
            <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 8px;">👤 Personal Information</div>
            <div style="color: #2c3e50; font-size: 13px; line-height: 1.4;">
              <strong>Name:</strong> ${data.firstName} ${data.lastName}<br>
              <strong>Email:</strong> ${data.email}
            </div>
          </div>

          <!-- Professional Information -->
          <div style="margin-bottom: 15px; padding: 10px; background-color: #f0f8e8; border-radius: 5px;">
            <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 8px;">💼 Professional Information</div>
            <div style="color: #2c3e50; font-size: 13px; line-height: 1.4;">
              <strong>Role:</strong> ${data.role || 'Not specified'}<br>
              <strong>Organization:</strong> ${data.organization || 'Not specified'}<br>
              <strong>Country:</strong> ${data.country || 'Not specified'}<br>
              <strong>Organization Size:</strong> ${data.organizationSize || 'Not specified'}
            </div>
          </div>

          <!-- Request Details -->
          <div style="margin-bottom: 15px; padding: 10px; background-color: #fff8e8; border-radius: 5px;">
            <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 8px;">📝 Request Details</div>
            <div style="color: #2c3e50; font-size: 13px; line-height: 1.4; white-space: pre-line;">${data.request || 'No request details provided'}</div>
          </div>
        `;

      case 'Book Demo':
        return `
          <!-- Contact Information -->
          <div style="margin-bottom: 15px; padding: 10px; background-color: #e8f4f8; border-radius: 5px;">
            <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 8px;">👤 Contact Information</div>
            <div style="color: #2c3e50; font-size: 13px; line-height: 1.4;">
              <strong>Name:</strong> ${data.firstName} ${data.lastName}<br>
              <strong>Email:</strong> ${data.email}
            </div>
          </div>

          <!-- Professional Details -->
          <div style="margin-bottom: 15px; padding: 10px; background-color: #f0f8e8; border-radius: 5px;">
            <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 8px;">💼 Professional Details</div>
            <div style="color: #2c3e50; font-size: 13px; line-height: 1.4;">
              <strong>Role:</strong> ${data.role || 'Not specified'}<br>
              <strong>Organization:</strong> ${data.organization || 'Not specified'}<br>
              <strong>Country:</strong> ${data.country || 'Not specified'}<br>
              <strong>Organization Size:</strong> ${data.organizationSize || 'Not specified'}
            </div>
          </div>

          <!-- Demo Requirements -->
          <div style="margin-bottom: 15px; padding: 10px; background-color: #fff8e8; border-radius: 5px;">
            <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 8px;">🚀 Demo Requirements & Challenges</div>
            <div style="color: #2c3e50; font-size: 13px; line-height: 1.4; white-space: pre-line;">${data.challenges || 'No specific challenges mentioned'}</div>
          </div>
        `;

      case 'Career Application':
        return `
          <!-- Personal Information -->
          <div style="margin-bottom: 15px; padding: 10px; background-color: #e8f4f8; border-radius: 5px;">
            <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 8px;">👤 Personal Information</div>
            <div style="color: #2c3e50; font-size: 13px; line-height: 1.4;">
              <strong>Name:</strong> ${data.firstName} ${data.lastName}<br>
              <strong>Email:</strong> ${data.email}
            </div>
          </div>

          <!-- Application Details -->
          <div style="margin-bottom: 15px; padding: 10px; background-color: #f0f8e8; border-radius: 5px;">
            <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 8px;">📋 Application Details</div>
            <div style="color: #2c3e50; font-size: 13px; line-height: 1.4;">
              <strong>Join Type:</strong> ${data.joinType || 'Not specified'}<br>
              <strong>Resume Link:</strong> ${data.resumeLink ? `<a href="${data.resumeLink}" style="color: #3498db;">View Resume</a>` : 'Not provided'}
            </div>
          </div>

          <!-- Challenge Description -->
          <div style="margin-bottom: 15px; padding: 10px; background-color: #fff8e8; border-radius: 5px;">
            <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 8px;">🎯 Challenge Description</div>
            <div style="color: #2c3e50; font-size: 13px; line-height: 1.4; white-space: pre-line;">${data.challengeDescription || 'No challenge description provided'}</div>
          </div>

          <!-- Contribution Description -->
          <div style="margin-bottom: 15px; padding: 10px; background-color: #f8e8ff; border-radius: 5px;">
            <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 8px;">💡 Contribution to Mission</div>
            <div style="color: #2c3e50; font-size: 13px; line-height: 1.4; white-space: pre-line;">${data.contributionDescription || 'No contribution description provided'}</div>
          </div>
        `;

      default:
        return `<div style="color: #2c3e50; font-size: 13px; line-height: 1.4; white-space: pre-line;">${JSON.stringify(data, null, 2)}</div>`;
    }
  };

  const getActionSection = (type: string) => {
    switch (type) {
      case 'Contact':
        return `
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 8px; border-left: 4px solid #3498db;">
            <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 5px;">
              📧 Next Steps
            </div>
            <div style="color: #2c3e50; font-size: 13px;">
              Please respond to: <strong>${formData.email}</strong><br>
              <em>This contact form was submitted through the Loop AI Group website.</em>
            </div>
          </div>
        `;

      case 'Book Demo':
        return `
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 8px; border-left: 4px solid #3498db;">
            <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 5px;">
              📅 Demo Scheduling
            </div>
            <div style="color: #2c3e50; font-size: 13px;">
              <strong>Contact:</strong> ${formData.email}<br>
              <strong>Priority:</strong> High - Demo Request<br>
              <em>Please schedule a personalized demo of Loop AI Agents Orchestra based on their specific requirements.</em>
            </div>
          </div>
        `;

      case 'Career Application':
        return `
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 8px; border-left: 4px solid #3498db;">
            <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 5px;">
              👥 HR Review
            </div>
            <div style="color: #2c3e50; font-size: 13px;">
              <strong>Contact:</strong> ${formData.email}<br>
              <strong>Application Type:</strong> ${formData.joinType || 'Not specified'}<br>
              <em>Please review this career application and follow up with the candidate.</em>
            </div>
          </div>
        `;

      default:
        return '';
    }
  };

  return `
    <div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
      <div style="color: #2c3e50; font-size: 18px; font-weight: bold; margin-bottom: 20px;">
        New ${formType} Form Submission - Loop AI Group
      </div>
      
      <div style="margin-bottom: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
        <div style="color: #2c3e50; font-size: 16px; margin-bottom: 10px;">
          <strong>From:</strong> ${formData.firstName} ${formData.lastName} (${formData.email})
        </div>
        <div style="color: #2c3e50; font-size: 16px; margin-bottom: 10px;">
          <strong>Form Type:</strong> ${formType}
        </div>
        <div style="color: #2c3e50; font-size: 16px;">
          <strong>Submitted:</strong> ${new Date().toLocaleString()}
        </div>
      </div>

      <div
        style="
          margin-top: 20px;
          padding: 15px 0;
          border-width: 1px 0;
          border-style: dashed;
          border-color: lightgrey;
        "
      >
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="vertical-align: top; width: 60px;">
              <div
                style="
                  padding: 6px 10px;
                  margin: 0 10px;
                  background-color: aliceblue;
                  border-radius: 5px;
                  font-size: 26px;
                  text-align: center;
                "
                role="img"
              >
                ${getIcon(formType)}
              </div>
            </td>
            <td style="vertical-align: top;">
              <div style="color: #2c3e50; font-size: 16px; margin-bottom: 15px;">
                <strong>${formType} Details:</strong>
              </div>
              ${getFormSpecificContent(formType, formData)}
            </td>
          </tr>
        </table>
      </div>

      ${getActionSection(formType)}

      <div style="margin-top: 20px; padding: 10px; text-align: center; color: #7f8c8d; font-size: 11px; border-top: 1px solid #ecf0f1;">
        This email was sent from the Loop AI Group website ${formType.toLowerCase()} form.
      </div>
    </div>
  `;
}
