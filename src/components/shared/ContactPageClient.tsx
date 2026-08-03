
'use client';

import { companyInfo } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Building } from 'lucide-react';
import ContactForm from '@/components/shared/ContactForm';

export default function ContactPageClient() {
  const hqAddress = `${companyInfo.hqAddressLine1}, ${companyInfo.hqAddressLine2}`;
  const encodedHqAddress = encodeURIComponent(hqAddress);
  const hqMapSrc = `https://maps.google.com/maps?q=${encodedHqAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
      <div className="grid md:grid-cols-2 gap-12">
        <ContactForm />

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Our Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Building className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{companyInfo.hqLabel || 'Headquarters'}</h3>
                  <p className="text-muted-foreground">{companyInfo.hqAddressLine1}</p>
                  <p className="text-muted-foreground">{companyInfo.hqAddressLine2}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href={`tel:${companyInfo.phone}`} className="text-muted-foreground hover:text-primary">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href={`mailto:${companyInfo.email}`} className="text-muted-foreground hover:text-primary">
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg overflow-hidden">
             <CardHeader>
              <CardTitle className="text-2xl">Our Location</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div>
                <div className="aspect-video bg-muted">
                  <iframe
                    src={hqMapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${companyInfo.hqLabel || 'Headquarters'} Location Map`}
                    aria-hidden="false"
                    tabIndex={0}
                  ></iframe>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
