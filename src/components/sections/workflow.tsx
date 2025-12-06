import React from 'react';

interface WorkflowStep {
  number: number;
  title: string;
  description: string;
  position: string;
  align: 'left' | 'right' | 'center';
}

const workflowSteps: WorkflowStep[] = [
  {
    number: 1,
    title: "Account Deep Dive",
    description: "We analyze your current Seller Central performance, identify opportunities, and provide actionable recommendations with an Amazon account audit at no cost.",
    position: "top-[2%] right-[5%]",
    align: "right",
  },
  {
    number: 2,
    title: "Strategic Alignment",
    description: "Sign the service agreement and collaborate with our team to establish SOPs tailored to your business needs.",
    position: "top-[28%] left-[5%]",
    align: "left",
  },
  {
    number: 3,
    title: "Team Deployment",
    description: "We assign a dedicated team of Amazon specialists and a dedicated project manager to oversee your account.",
    position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    align: "center",
  },
  {
    number: 4,
    title: "Implementation Phase",
    description: "Begin comprehensive Seller Central account management with strategic optimizations across inventory, listings, and advertising campaigns.",
    position: "top-[65%] right-[5%]",
    align: "right",
  },
  {
    number: 5,
    title: "Continuous Optimization",
    description: "Regular performance reviews, strategy adjustments, and ongoing optimization based on data analysis and your business feedback.",
    position: "top-[90%] left-[10%]",
    align: "left",
  },
];

const SmileArrow = () => (
  <img 
    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/arrw-1764963446283.png?width=8000&height=8000&resize=contain"
    alt="Amazon smile arrow"
    className="mx-auto mt-3 sm:mt-4 h-8 sm:h-10 w-auto object-contain"
  />
);
  
const WorkflowPath = () => (
    <svg
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
      viewBox="0 0 1000 850"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="workflow-gradient" x1="950" y1="50" x2="50" y2="800" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-chart-4)" />
          <stop offset="1" stopColor="var(--color-accent)" />
        </linearGradient>
      </defs>
      <path
        d="M950 85C700 85 403.5 178 200 300C-3.5 422 249.5 457 500 500C750.5 543 850 565 850 675C850 785 450 815 150 815"
        stroke="url(#workflow-gradient)"
        strokeWidth="6"
        strokeDasharray="15 15"
      />
    </svg>
);

const DesktopStepItem: React.FC<{ step: WorkflowStep }> = ({ step }) => {
    const alignmentClasses = {
      left: 'items-start text-left',
      right: 'items-end text-right',
      center: 'items-center text-center',
    };
  
    return (
      <div className={`absolute ${step.position} w-[300px]`}>
        <div className={`flex flex-col ${alignmentClasses[step.align]}`}>
          <div className="flex items-center justify-center w-14 h-14 bg-accent rounded-full text-accent-foreground text-2xl font-bold shadow-lg ring-8 ring-background">
            {step.number}
          </div>
          <h3 className="mt-4 text-xl font-semibold text-text-dark">
            {step.title}
          </h3>
          <p className="mt-2 text-base text-muted-foreground">
            {step.description}
          </p>
        </div>
      </div>
    );
};

const MobileStepItem: React.FC<{ step: Omit<WorkflowStep, 'position' | 'align'> }> = ({ step }) => (
    <div className="flex flex-col items-center text-center max-w-sm px-4">
        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-accent rounded-full text-accent-foreground text-xl sm:text-2xl font-bold shadow-lg">
        {step.number}
        </div>
        <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-text-dark">
        {step.title}
        </h3>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">
        {step.description}
        </p>
    </div>
);


const WorkflowSection = () => {
    return (
        <section id="workflow" className="bg-background py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight px-2">
                        Our Amazon Seller Central Management Workflow
                    </h2>
                    <SmileArrow />
                </div>

                {/* Desktop View */}
                <div className="hidden lg:block relative mt-24 h-[900px]">
                    <WorkflowPath />
                    {workflowSteps.map((step) => (
                        <DesktopStepItem key={step.number} step={step} />
                    ))}
                </div>

                {/* Mobile View */}
                <div className="lg:hidden mt-10 sm:mt-12 md:mt-16 flex flex-col items-center space-y-10 sm:space-y-12">
                    {workflowSteps.map((step) => (
                        <MobileStepItem key={step.number} step={step} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkflowSection;