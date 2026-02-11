import React from 'react';
import { Stat } from '../../../types';

interface StatsSectionProps {
  stats?: Stat[];
}

export const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  if (!stats || stats.length === 0) return null;

  return (
    <section id="stats" className="w-full py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-16" />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <div>
                <div className="text-3xl md:text-4xl font-light text-foreground mb-1 geist-font tracking-tight">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm inter-font font-normal">{stat.label}</div>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-input to-transparent" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

