interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const PageHeader = ({ title, description, className }: PageHeaderProps) => {
  return (
    <div className={`mb-8 md:mb-12 text-center ${className}`}>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
