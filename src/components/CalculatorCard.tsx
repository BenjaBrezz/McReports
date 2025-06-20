import React from 'react';

interface InputField {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
}

interface CalculatorCardProps {
  inputs: InputField[];
  result: number | string;
  resultLabel: string;
  formula?: string;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({ 
  inputs, 
  result, 
  resultLabel, 
  formula 
}) => {
  const formatResult = (value: number | string) => {
    if (typeof value === 'string') return value;
    if (value === Infinity || isNaN(value)) return 'N/A';
    return `${value.toFixed(2)}%`;
  };

  return (
    <div className="card p-6 md:p-8">
      {/* Formula Display */}
      {formula && (
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6 border-l-4 border-mcd-yellow dark:border-mcd-red">
          <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">Fórmula:</h3>
          <code className="text-sm text-gray-600 dark:text-gray-300 font-mono bg-white dark:bg-gray-900 px-2 py-1 rounded">
            {formula}
          </code>
        </div>
      )}

      {/* Input Fields */}
      <div className="space-y-6 mb-8">
        {inputs.map((input) => (
          <div key={input.id}>
            <label 
              htmlFor={input.id} 
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
            >
              {input.label}
            </label>
            <input
              type="number"
              id={input.id}
              value={input.value || ''}
              onChange={(e) => input.onChange(Number(e.target.value) || 0)}
              placeholder={input.placeholder || '0'}
              className="input-field"
              min="0"
              step="0.01"
            />
          </div>
        ))}
      </div>

      {/* Result Display */}
      <div className="border-t dark:border-gray-700 pt-6">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
          {resultLabel}
        </h3>
        <div className="result-display">
          {formatResult(result)}
        </div>
      </div>
    </div>
  );
};

export default CalculatorCard;