import React from 'react';
import SectionTitle from '../../component/SectionTitle';

const FAQ = () => {
  return (
    <div>
      <SectionTitle
      heading={'FAQ-Frequently Asked Question'}
      subHeading={'All the features every great theme has.'}
      ></SectionTitle>
      <div className='py-10'>
      <div className="collapse collapse-arrow shadow-xl mb-5">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-bold">What is Regular License?</div>
  <div className="collapse-content">
    <p>In simple terms, Regular License means your end product is distributed for free</p>
  </div>
</div>
<div className="collapse collapse-arrow shadow-xl mb-5">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-bold">What is Extended License?</div>
  <div className="collapse-content">
    <p>In simple terms, Extended License means your end product may be sold or otherwise limited to paying customers.</p>
  </div>
</div>
<div className="collapse collapse-arrow shadow-xl mb-5">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-bold">What will you get?</div>
  <div className="collapse-content">
    <p>All HTML files, All Angular files, All Materialize CSS files, CSS Files, SCSS Files, JS Files, Documentation, Reliable Technical Support System, Lifetime Template Updates, Template Documentation</p>
  </div>
</div>
      </div>
    </div>
  );
};

export default FAQ;