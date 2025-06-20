import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ReportLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ReportLayout: React.FC<ReportLayoutProps> = ({ title, description, children }) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-mcd-red dark:text-mcd-yellow hover:text-mcd-red-dark dark:hover:text-mcd-yellow-dark transition-colors mb-4"
        >
          <ArrowLeft size={20} className="mr-2" />
          Volver al inicio
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          {description}
        </p>
      </div>

      {/* Content */}
      <div className="animate-fade-in">
        {children}
      </div>
    </div>
  );
};

export default ReportLayout;