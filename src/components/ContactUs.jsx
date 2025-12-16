import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-[#1a2456] mb-3">Contact Us</h1>
          <div className="w-20 h-1 bg-[#00c853]"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Email Contacts */}
          <div>
            <h2 className="text-2xl font-bold text-[#1a2456] mb-8">Get in Touch</h2>

            <div className="space-y-8">
              {/* General Inquiries */}
              <div className="border-l-4 border-[#00c853] pl-6">
                <h3 className="text-lg font-bold text-[#1a2456] mb-2">General Inquiries</h3>
                <a
                  href="mailto:info@giamakeni.com"
                  className="text-gray-700 hover:text-[#00c853] text-lg"
                >
                  info@giamakeni.com
                </a>
                <p className="text-gray-600 text-sm mt-1">
                  For general questions and information
                </p>
              </div>

              {/* Admissions */}
              <div className="border-l-4 border-[#1a2456] pl-6">
                <h3 className="text-lg font-bold text-[#1a2456] mb-2">Admissions</h3>
                <a
                  href="mailto:admission@giamakeni.com"
                  className="text-gray-700 hover:text-[#00c853] text-lg"
                >
                  admission@giamakeni.com
                </a>
                <p className="text-gray-600 text-sm mt-1">
                  For admission inquiries and applications
                </p>
              </div>

              {/* Finance */}
              <div className="border-l-4 border-[#00c853] pl-6">
                <h3 className="text-lg font-bold text-[#1a2456] mb-2">Finance & Fees</h3>
                <a
                  href="mailto:finance@giamakeni.com"
                  className="text-gray-700 hover:text-[#00c853] text-lg"
                >
                  finance@giamakeni.com
                </a>
                <p className="text-gray-600 text-sm mt-1">
                  For fee payments and financial support
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Phone & Location */}
          <div>
            <h2 className="text-2xl font-bold text-[#1a2456] mb-8">Contact Information</h2>

            {/* Phone Numbers */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-[#1a2456] mb-4">Phone</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-semibold text-[#1a2456]">Main Office</p>
                  <p>+001-215-941-0594</p>
                  <p>+232-34-819-794</p>
                  <a href="mailto:proprietor.giamakeni.sl@gmail.com" className="text-sm text-[#00c853] hover:underline">
                    proprietor.giamakeni.sl@gmail.com
                  </a>
                </div>

                <div className="pt-3 mt-3 border-t border-gray-200">
                  <p className="font-semibold text-[#1a2456] mb-2">Additional Contacts</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p>+232-79-485-638</p>
                      <a href="mailto:josephskabia88@gmail.com" className="text-[#00c853] hover:underline">
                        josephskabia88@gmail.com
                      </a>
                    </div>
                    <div>
                      <p>+232-77-580-136</p>
                      <a href="mailto:karankaykoroma9534@gmail.com" className="text-[#00c853] hover:underline">
                        karankaykoroma9534@gmail.com
                      </a>
                    </div>
                    <div>
                      <p>+232-32-459-300 (Financial Officer)</p>
                      <a href="mailto:mariamagia2008@gmail.com" className="text-[#00c853] hover:underline">
                        mariamagia2008@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-lg font-bold text-[#1a2456] mb-4">Address</h3>
              <div className="text-gray-700">
                <p className="font-semibold text-[#1a2456] text-lg">
                  Gbonkolenken International Academy
                </p>
                <p>Makeni</p>
                <p>Sierra Leone</p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Hours Section */}
        <div className="border-t-2 border-[#1a2456] pt-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1a2456] mb-6">Office Hours</h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-700">
              <div>
                <p className="font-bold text-[#1a2456] mb-2">Monday - Friday</p>
                <p className="text-lg">8:00 AM - 4:00 PM</p>
              </div>
              <div>
                <p className="font-bold text-[#1a2456] mb-2">Saturday</p>
                <p className="text-lg">9:00 AM - 1:00 PM</p>
              </div>
              <div>
                <p className="font-bold text-[#1a2456] mb-2">Sunday</p>
                <p className="text-lg">Closed</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              We are closed on public holidays
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gray-50 py-8 px-6">
          <p className="text-gray-700 mb-4">
            Have questions? We'd love to hear from you.
          </p>
          <a
            href="mailto:info@giamakeni.com"
            className="inline-block bg-[#1a2456] text-white py-3 px-8 font-semibold hover:bg-[#00c853] transition-colors"
          >
            Send us an Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
