import React, { useState } from 'react';
import ReportLayout from '../../components/ReportLayout';
import CalculatorCard from '../../components/CalculatorCard';

const AgrandaCombos: React.FC = () => {
  const [combosMedianos, setCombosMedianos] = useState<number>(0);
  const [combosGrandes, setCombosGrandes] = useState<number>(0);

  const calculateCompliance = () => {
    const total = combosMedianos + combosGrandes;
    if (total === 0) return 0;
    return (combosGrandes / total) * 100;
  };

  const inputs = [
    {
      id: 'combosMedianos',
      label: 'Combos Medianos',
      value: combosMedianos,
      onChange: setCombosMedianos,
      placeholder: 'Cantidad de combos medianos vendidos'
    },
    {
      id: 'combosGrandes',
      label: 'Combos Grandes',
      value: combosGrandes,
      onChange: setCombosGrandes,
      placeholder: 'Cantidad de combos grandes vendidos'
    }
  ];

  return (
    <ReportLayout
      title="Agranda Combos"
      description="Análisis de upselling - Porcentaje de combos grandes vs total de combos"
    >
      <div className="grid gap-6">
        <CalculatorCard
          inputs={inputs}
          result={calculateCompliance()}
          resultLabel="Porcentaje de Upselling"
          formula="(Combos Grandes / (Combos Medianos + Combos Grandes)) × 100"
        />
        
        {/* Additional Info Card */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Resumen de Ventas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg text-center border border-blue-200 dark:border-blue-700">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{combosMedianos}</div>
              <div className="text-sm text-blue-600 dark:text-blue-400">Combos Medianos</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg text-center border border-green-200 dark:border-green-700">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{combosGrandes}</div>
              <div className="text-sm text-green-600 dark:text-green-400">Combos Grandes</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-gray-600 dark:text-gray-300">{combosMedianos + combosGrandes}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Combos</div>
            </div>
          </div>
        </div>
      </div>
    </ReportLayout>
  );
};

export default AgrandaCombos;