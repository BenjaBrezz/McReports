import React, { useState } from 'react';
import ReportLayout from '../../components/ReportLayout';
import CalculatorCard from '../../components/CalculatorCard';

const CDP: React.FC = () => {
  const [gdr, setGdr] = useState<number>(0);
  const [objective, setObjective] = useState<number>(0);

  const calculateCompliance = () => {
    if (objective === 0) return 0;
    return (gdr / objective) * 100;
  };

  const inputs = [
    {
      id: 'gdr',
      label: 'GDR (Gestión de Rendimiento)',
      value: gdr,
      onChange: setGdr,
      placeholder: 'Valor actual de GDR'
    },
    {
      id: 'objective',
      label: 'Objetivo',
      value: objective,
      onChange: setObjective,
      placeholder: 'Objetivo establecido'
    }
  ];

  return (
    <ReportLayout
      title="Reporte CDP"
      description="Control de Gestión de Rendimiento - Seguimiento de objetivos GDR"
    >
      <CalculatorCard
        inputs={inputs}
        result={calculateCompliance()}
        resultLabel="Porcentaje de Cumplimiento GDR"
        formula="(GDR / Objetivo) × 100"
      />
    </ReportLayout>
  );
};

export default CDP;