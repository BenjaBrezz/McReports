import React, { useState } from 'react';
import ReportLayout from '../../components/ReportLayout';
import CalculatorCard from '../../components/CalculatorCard';

const McxMenos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'main' | 'accompaniments'>('main');
  
  // Main McxMenos inputs
  const [carne, setCarne] = useState<number>(0);
  const [pollo, setPollo] = useState<number>(0);
  const [objective, setObjective] = useState<number>(0);

  // Accompaniments inputs
  const [empanadas, setEmpanadas] = useState<number>(0);
  const [nuggets, setNuggets] = useState<number>(0);
  const [sundae, setSundae] = useState<number>(0);

  const calculateMainCompliance = () => {
    if (objective === 0) return 0;
    return ((carne + pollo) / objective) * 100;
  };

  const calculateAccompanimentsCompliance = () => {
    if (objective === 0) return 0;
    return ((empanadas + nuggets + sundae) / objective) * 100;
  };

  const mainInputs = [
    {
      id: 'carne',
      label: 'Carne',
      value: carne,
      onChange: setCarne,
      placeholder: 'Productos con carne vendidos'
    },
    {
      id: 'pollo',
      label: 'Pollo',
      value: pollo,
      onChange: setPollo,
      placeholder: 'Productos con pollo vendidos'
    },
    {
      id: 'objective',
      label: 'Objetivo',
      value: objective,
      onChange: setObjective,
      placeholder: 'Objetivo total McxMenos'
    }
  ];

  const accompanimentsInputs = [
    {
      id: 'empanadas',
      label: 'Empanadas',
      value: empanadas,
      onChange: setEmpanadas,
      placeholder: 'Empanadas vendidas'
    },
    {
      id: 'nuggets',
      label: 'Nuggets',
      value: nuggets,
      onChange: setNuggets,
      placeholder: 'Nuggets vendidos'
    },
    {
      id: 'sundae',
      label: 'Sundae',
      value: sundae,
      onChange: setSundae,
      placeholder: 'Sundae vendidos'
    }
  ];

  return (
    <ReportLayout
      title="McxMenos - Reporte Integral"
      description="Análisis completo de productos McxMenos principales y acompañamientos"
    >
      <div className="space-y-6">
        {/* Tab Navigation */}
        <div className="card p-1">
          <div className="flex rounded-lg bg-gray-100 dark:bg-gray-800">
            <button
              onClick={() => setActiveTab('main')}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                activeTab === 'main'
                  ? 'bg-mcd-red dark:bg-mcd-yellow text-white dark:text-gray-900 shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
              }`}
            >
              Productos Principales
            </button>
            <button
              onClick={() => setActiveTab('accompaniments')}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                activeTab === 'accompaniments'
                  ? 'bg-mcd-red dark:bg-mcd-yellow text-white dark:text-gray-900 shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
              }`}
            >
              Acompañamientos
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'main' ? (
          <CalculatorCard
            inputs={mainInputs}
            result={calculateMainCompliance()}
            resultLabel="Cumplimiento McxMenos Principal"
            formula="((Carne + Pollo) / Objetivo) × 100"
          />
        ) : (
          <CalculatorCard
            inputs={accompanimentsInputs}
            result={calculateAccompanimentsCompliance()}
            resultLabel="Cumplimiento Acompañamientos"
            formula="((Empanadas + Nuggets + Sundae) / Objetivo McxMenos) × 100"
          />
        )}

        {/* Summary Card */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Resumen McxMenos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-gray-600 dark:text-gray-300">Productos Principales</h4>
              <div className="bg-mcd-red/10 dark:bg-mcd-red/20 p-4 rounded-lg border border-mcd-red/20 dark:border-mcd-red/30">
                <div className="text-2xl font-bold text-mcd-red dark:text-mcd-yellow">
                  {calculateMainCompliance().toFixed(2)}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {carne + pollo} / {objective} unidades
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-gray-600 dark:text-gray-300">Acompañamientos</h4>
              <div className="bg-mcd-yellow/20 dark:bg-mcd-yellow/30 p-4 rounded-lg border border-mcd-yellow/30 dark:border-mcd-yellow/40">
                <div className="text-2xl font-bold text-mcd-yellow-dark dark:text-mcd-red">
                  {calculateAccompanimentsCompliance().toFixed(2)}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {empanadas + nuggets + sundae} / {objective} unidades
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReportLayout>
  );
};

export default McxMenos;