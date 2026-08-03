
'use server';

/**
 * @fileOverview A flow for submitting a contact form.
 *
 * THIS FLOW IS DEPRECATED. The logic has been moved to the client-side
 * component in `src/components/shared/ContactForm.tsx` to resolve
 * server-side initialization issues.
 *
 * - submitContactForm - A function that handles the contact form submission.
 * - ContactFormInput - The input type for the submitContactForm function.
 * - ContactFormOutput - The return type for the submitContactForm function.
 */

import { z } from 'zod';

const ContactFormInputSchema = z.object({
  fullName: z.string().describe('The full name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person.'),
  subject: z.string().describe('The subject of the contact message.'),
  message: z.string().describe('The content of the contact message.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;


export async function submitContactForm(input: ContactFormInput): Promise<ContactFormOutput> {
  console.warn("DEPRECATED: submitContactForm flow was called, but logic has moved client-side.");
  // This is now handled client-side. This function is kept for type safety
  // but should not be called. It returns a success message to avoid breaking
  // any remaining client-side calls during transition.
  return {
    success: true,
    message: 'Form submission is now handled on the client.',
  };
}
