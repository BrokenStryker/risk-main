export default function ChangelogPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Changelog</h1>
      
      <div className="space-y-12">
        <ChangelogEntry 
          version="v1.2.0" 
          date="June 15, 2024"
          title="Advanced Risk Assessment Tools"
          description="We've added new features to help you assess risks more effectively."
          changes={[
            "Added multi-factor risk scoring",
            "Improved dashboard visualization options",
            "New export formats for reports",
            "Enhanced user permission system"
          ]}
        />
        
        <ChangelogEntry 
          version="v1.1.0" 
          date="May 2, 2024"
          title="Performance Improvements"
          description="This release focuses on performance and stability."
          changes={[
            "50% faster dashboard loading times",
            "Reduced memory usage across all operations",
            "Fixed multiple edge cases in risk calculations",
            "Improved error handling and user feedback"
          ]}
        />
        
        <ChangelogEntry 
          version="v1.0.0" 
          date="April 1, 2024"
          title="Initial Release"
          description="The first official release of Cockpit."
          changes={[
            "Core risk assessment functionality",
            "Basic reporting and analytics",
            "User and team management",
            "Integration with common business tools"
          ]}
        />
      </div>
    </div>
  );
}

interface ChangelogEntryProps {
  version: string;
  date: string;
  title: string;
  description: string;
  changes: string[];
}

function ChangelogEntry({ version, date, title, description, changes }: ChangelogEntryProps) {
  return (
    <div className="border-b border-border pb-10">
      <div className="flex items-center mb-2">
        <span className="bg-primary/10 text-primary text-sm font-medium px-2.5 py-0.5 rounded mr-2">
          {version}
        </span>
        <span className="text-muted-foreground text-sm">{date}</span>
      </div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-1 list-disc list-inside">
        {changes.map((change, index) => (
          <li key={index}>{change}</li>
        ))}
      </ul>
    </div>
  );
} 