// src/pages/TermsAndPrivacy.js
import React from 'react';
import './Css/TermsAndPrivacy.css';  // Import your CSS file for styling

const TermsAndPrivacy = () => {
  return (
    <div className="terms-container">
      <h1>Terms & Conditions / Privacy Policy</h1>

      <section className="terms-section">
        <h2>Terms & Conditions</h2>
        <p>
          Welcome to Auction House. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Auction House's relationship with you.
        </p>
        <h3>1. Bidding Rules</h3>
        <p>
          All bids placed on our platform are considered binding. Once a bid is placed, the user agrees to purchase the item at the final price if they are the highest bidder when the auction closes.
        </p>

        <h3>2. Auction Process</h3>
        <p>
          Auction House reserves the right to modify, cancel, or postpone auctions at any time. We also reserve the right to reject bids at our discretion.
        </p>

        <h3>3. User Accounts</h3>
        <p>
          Users must provide accurate information when creating an account. Auction House reserves the right to suspend or terminate accounts if any user violates the terms or provides false information.
        </p>

        <h3>4. Payment & Fees</h3>
        <p>
          Buyers must complete payment within the timeframe specified after winning an auction. Failure to complete payment may result in account suspension and being barred from future auctions.
        </p>

        <h3>5. Disputes</h3>
        <p>
          In case of a dispute regarding an auction, Auction House will act as a mediator, but the final decision will rest with Auction House.
        </p>

        <h3>6. Limitation of Liability</h3>
        <p>
          Auction House is not responsible for the accuracy of item descriptions or any issues arising from transactions between buyers and sellers. Our platform serves as a marketplace, and users interact at their own risk.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Privacy Policy</h2>
        <p>
          Auction House respects your privacy and is committed to protecting your personal data. This privacy policy outlines how we collect, use, and store your personal information when you use our platform.
        </p>

        <h3>1. Information We Collect</h3>
        <p>
          We collect information from you when you register on our site, place a bid, or complete a transaction. This may include your name, email address, phone number, billing information, and other data necessary for the transaction.
        </p>

        <h3>2. How We Use Your Information</h3>
        <p>
          Your personal data is used to facilitate auctions, process payments, and improve our platform. We may also use your contact information to send you updates about auctions or promotions.
        </p>

        <h3>3. Data Protection</h3>
        <p>
          We take reasonable steps to protect your personal information, including encryption and secure server connections. However, no system is 100% secure, and we cannot guarantee the complete protection of your data.
        </p>

        <h3>4. Sharing Information</h3>
        <p>
          We do not sell, trade, or otherwise transfer your personal data to outside parties without your consent, except to trusted third parties who assist in operating our website and conducting our business, so long as those parties agree to keep this information confidential.
        </p>

        <h3>5. Cookies</h3>
        <p>
          We use cookies to enhance your experience on our platform. You can choose to disable cookies in your browser settings, but this may limit some functionality of the site.
        </p>

        <h3>6. Third-Party Links</h3>
        <p>
          Occasionally, we may include links to third-party websites. These sites have separate and independent privacy policies. We have no responsibility or liability for the content and activities of these linked sites.
        </p>

        <h3>7. Your Consent</h3>
        <p>
          By using our platform, you consent to our privacy policy and agree to the collection and use of your personal information as outlined here.
        </p>

        <h3>8. Changes to the Privacy Policy</h3>
        <p>
          We may update this privacy policy from time to time. You are encouraged to review it periodically to stay informed of any changes.
        </p>
      </section>
    </div>
  );
};

export default TermsAndPrivacy;
