import { FC } from 'react';

import SectionContainer from '@/components/SectionContainer';

const About: FC = () => {
  return (
    <section id="about" className="py-10">
      <SectionContainer>
        <h2 className="mb-5 text-center text-5xl">About us</h2>

        <h3 className="mb-3 text-3xl font-bold">Our mission</h3>
        <p className="mb-5 text-lg">
          Our mission is to enable millions of users around the world to freely,
          anonymously and, most importantly, securely exchange their crypto
          assets in any amount. The platform is fully automatic, where in a
          couple of clicks you can exchange 400 directions at the most favorable
          rate.
        </p>

        <h3 className="mb-3 text-3xl font-bold">Our advantages</h3>
        <p className="mb-5 text-lg">
          For several years of work, we have identified for ourselves the main
          points that determine the quality service of a cryptocurrency
          exchanger.
        </p>
        <ul className="flex list-disc flex-col gap-4 text-lg">
          <li>
            <strong>Security.</strong> We pay great attention to the security of
            our platform and promptly respond to all possible problems. We also
            conduct AML checks on all incoming funds, which ensures that your
            funds are not blocked by the exchange. Funds from us come from
            trusted liquidity providers, so we can guarantee their purity at
            100%.
          </li>
          <li>
            <strong>Support.</strong> Our technical support is ready to help you
            24/7. At the same time, the response time of the technical support
            operator with a regular load on the service is only 5 minutes.
          </li>
          <li>
            <strong>The number of cryptocurrency pairs.</strong> Today, there
            are a huge number of various directions that are popular with users.
            400 cryptocurrency pairs have been added to our platform, so you can
            find what you need and exchange at the best rate.
          </li>
          <li>
            <strong>Rate</strong>. The most important element is the rate, which
            provides an exchange service. Here you can find the best rates for
            all cryptocurrencies.
          </li>
          <li>
            <strong>Well-thought-out site</strong>. Our team has put a lot of
            work into our site to make your exchange experience even more
            enjoyable on our platform. Each step of the exchange has been
            improved in such a way that customers spend less time filling out an
            application.
          </li>
          <li>
            <strong>Anonymity</strong>. Registration is optional with us, and
            you can make exchanges absolutely anonymously.
          </li>
          <li>
            <strong>Commission</strong>. Our commission is only 0.3% per
            exchange, regardless of the volume you decide to exchange.
          </li>
        </ul>
      </SectionContainer>
    </section>
  );
};

export default About;
