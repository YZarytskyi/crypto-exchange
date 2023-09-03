import React, { FC } from 'react';

import SectionContainer from '@/components/SectionContainer';

const Support: FC = () => {
  return (
    <section id="support" className="py-10">
      <SectionContainer>
        <h2 className="mb-10 text-center text-5xl">Support</h2>
        <p className="mb-3 text-3xl">How can we help you?</p>
        <p className="mb-10 text-lg">
          Contact us via email{' '}
          <a href="mailto:support@exchange.com">support@exchange.com</a> or fill
          in the feedback form and we will contact you as soon as possible.
        </p>
        <label className="mb-7 flex flex-col gap-2">
          Your email address
          <input
            type="text"
            className="focus:shadow-inputFocus border-input max-w-[800px] flex-grow rounded-md border-[1px] bg-transparent px-4 py-3 outline-none"
          />
        </label>
        <label className="mb-8 flex flex-col gap-2">
          Description of the problem
          <textarea className="focus:shadow-inputFocus border-input max-w-[800px] flex-grow resize-none rounded-md border-[1px] bg-transparent px-4 py-2 outline-none" />
        </label>
        <button className="block w-full max-w-[250px] rounded-md bg-green-500 py-4 font-bold uppercase text-black transition-colors hover:bg-green-400">
          Send
        </button>
      </SectionContainer>
    </section>
  );
};

export default Support;
