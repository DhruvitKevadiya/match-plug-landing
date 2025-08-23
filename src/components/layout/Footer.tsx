import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <Link
    href={href}
    className="block text-white hover:opacity-80 transition-opacity"
  >
    {children}
  </Link>
);

const FooterSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div>
    <h3 className="text-2xl font-bold text-white mb-8">{title}</h3>
    {children}
  </div>
);

const PaymentIcon: React.FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
}> = ({ src, alt, width, height }) => (
  <div className="bg-white rounded flex items-center justify-center p-2">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="object-contain"
    />
  </div>
);

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <Link href={href} className="text-white hover:opacity-80 transition-opacity">
    {children}
  </Link>
);

const Footer: React.FC = () => {
  const quickLinks = [
    "News",
    "Livescores",
    "Predictions",
    "Match Previews",
    "NHL Experts Picks",
    "NFL Picks for Free",
    "Jackpot Bet Codes",
    "MLB Best Bets Today",
    "American Sports Picks",
  ];

  const categories = [
    "Fantasy",
    "MLS Predictions",
    "FA Cup Predictions",
    "American Sports News",
    "French Ligue Predictions",
    "Italian Serie A Predictions",
    "Europa League Predictions",
    "Spanish La Liga Predictions",
    "Premier League Predictions",
    "European League Predictions",
    "German Bundesliga Predictions",
    "Qatar World Cup 2022 Predictions",
  ];

  const informationLinks = [
    "About us",
    "Partners",
    "Disclaimers",
    "Join Matchplug",
    "How to subscribe",
    "Terms and Conditions",
  ];

  const paymentMethods = [
    { src: "/bitcoin.png", alt: "Bitcoin", width: 100, height: 55 },
    { src: "/mpesa.png", alt: "M-Pesa", width: 109, height: 65 },
    { src: "/smartmoney.jpg", alt: "Smart Money", width: 109, height: 65 },
    { src: "/paypal-payment.png", alt: "PayPal", width: 87, height: 42 },
    { src: "/skrill-payment.png", alt: "Skrill", width: 87, height: 43 },
    {
      src: "/mastercard-payment.png",
      alt: "Mastercard",
      width: 87,
      height: 59,
    },
    { src: "/mobilemoney.png", alt: "Mobile Money", width: 87, height: 59 },
  ];

  return (
    <footer className="bg-[#272727] text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Main Content Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Stop Playing and Start Winning With MatchPlug.
            </h2>
            <p className="text-base mb-8 max-w-sm">
              Matchplug offers Sure win Prediction today and we use analytics to
              create accurate football predictions which involves direct win
              prediction to help you win big.
            </p>

            {/* BeGambleAware Section */}
            <div className="mb-6">
              <div className="bg-white rounded mb-4 p-2 w-fit">
                <Image
                  src="/begambleaware.jpg"
                  alt="BeGambleAware"
                  width={287}
                  height={63}
                  className="object-contain"
                />
              </div>
              <p className="text-base max-w-sm">
                BeGambleAware.org aims to promote responsibility in gambling.
                They provide information to help you make informed decisions
                about your gambling.{" "}
                <span className="font-bold">
                  Call the National Gambling Helpline 0808 8020 133 8am to
                  midnight, 7 days a week.
                </span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <FooterLink key={index} href="#">
                  {link}
                </FooterLink>
              ))}
            </div>
          </FooterSection>

          {/* Categories */}
          <FooterSection title="Categories">
            <div className="space-y-4">
              {categories.map((category, index) => (
                <FooterLink key={index} href="#">
                  {category}
                </FooterLink>
              ))}
            </div>
          </FooterSection>

          {/* Information & Contact */}
          <div>
            <FooterSection title="Information">
              <div className="space-y-4 mb-8">
                {informationLinks.map((link, index) => (
                  <FooterLink key={index} href="#">
                    {link}
                  </FooterLink>
                ))}
              </div>
            </FooterSection>

            {/* Contact Section */}
            <FooterSection title="Contact us">
              <div className="text-base space-y-1">
                <p>WhatsApp : +1 (307) 218-5698</p>
                <p>Email : hello@matchplug.com</p>
                <p>Telegram : @matchplugvip</p>
              </div>
            </FooterSection>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {paymentMethods.map((method, index) => (
              <PaymentIcon key={index} {...method} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-white mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-lg">© Matchplug.com 2022. All rights reserved.</p>

          {/* Trust Badges */}
          <div className="flex items-center">
            <Image
              src="/trust-badges.png"
              alt="Trust Badges"
              width={429}
              height={62}
              className="object-contain"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <SocialIcon href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.890 2.746.099.120.112.225.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.750-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017-.001z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.070-4.85.070-3.204 0-3.584-.012-4.849-.070-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* MP Logo at bottom */}
        <div className="flex justify-center mt-8">
          <Image
            src="/MP.png"
            alt="MatchPlug Logo"
            width={1485}
            height={222}
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
