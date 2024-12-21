import React from "react";
import { Collapse } from "antd";
import "./FAQSection.css";

const { Panel } = Collapse;

const FAQSection = () => (
  <div className="faq-section">
    <h2 className="text-blue-500">Frequently Asked Questions</h2>
    <Collapse accordion bordered={false} className="faq-collapse">
      <Panel header="What is dropshipping?" key="1">
        <p>
          Dropshipping is a retail method where a store doesn't keep products in
          stock.
        </p>
      </Panel>
      <Panel header="How do I start?" key="2">
        <p>Our beginner courses guide you through every step to get started.</p>
      </Panel>
      <Panel header="What payment methods are accepted?" key="3">
        <p>We accept all major credit cards and online payments.</p>
      </Panel>
    </Collapse>
  </div>
);

export default FAQSection;
