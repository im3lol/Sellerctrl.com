"use client";

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const statsData = [
{ value: 25, suffix: "M", description: '12 Month Revenue Generated' },
{ value: 10, suffix: 'X', description: 'Average client ROAS' },
{ value: 39, suffix: '%', description: 'Average increase in sales' },
{ value: 32, suffix: '%', description: 'Average decrease in CPA' }];


interface Stat {
  value: number;
  suffix: string;
  description: string;
}

const StatCard: React.FC<{stat: Stat;inView: boolean;}> = ({ stat, inView }) =>
<div className="flex flex-col items-center">
    <h3 className="text-stats text-foreground !whitespace-pre-line">
      {inView ? <CountUp end={stat.value} duration={2.5} /> : '0'}
      {stat.suffix}
    </h3>
    <p className="mt-4 text-base text-muted-foreground">{stat.description}</p>
  </div>;


const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="sales" className="bg-background py-20 lg:py-28">
      <div ref={ref} className="container">
        <h2 className="sr-only">Sales Generated Numbers</h2>
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-8 text-center">
          {statsData.map((stat, index) =>
          <StatCard key={index} stat={stat} inView={inView} />
          )}
        </div>
      </div>
    </section>);

};

export default StatsSection;