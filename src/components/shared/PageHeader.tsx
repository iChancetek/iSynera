interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const PageHeader = ({ title, description, className }: PageHeaderProps) => {
  return (
    <div className={`mb-8 md:mb-12 text-center ${className}`}>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-3">
        {title}
      </h1>
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
