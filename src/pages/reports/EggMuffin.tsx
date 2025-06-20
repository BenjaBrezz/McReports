import React, { useState } from 'react';
import ReportLayout from '../../components/ReportLayout';
import CalculatorCard from '../../components/CalculatorCard';

const EggMuffin: React.FC = () => {
  const [eggMuffin, setEggMuffin] = useState<number>(0);
  const [objective, setObjective] = useState<number>(0);

  const calculateCompliance = () => {
    if (objective === 0) return 0;
    return (eggMuffin / objective) * 100;
  };

  const inputs = [
    {
      id: 'eggMuffin',
      label: 'Egg Muffin Vendidos',
      value: eggMuffin,
      onChange: setEggMuffin,
      placeholder: 'Cantidad de Egg Muffin vendidos'
    },
    {
      id: 'objective',
      label: 'Objetivo',
      value: objective,
      onChange: setObjective,
      placeholder: 'Objetivo de ventas'
    }
  ];

  return (
    <ReportLayout
      title="Promoción EggMuffin"
      description="Seguimiento del cumplimiento de objetivos para la promoción EggMuffin"
    >
      <CalculatorCard
        inputs={inputs}
        result={calculateCompliance()}
        resultLabel="Porcentaje de Cumplimiento vs Objetivo"
        formula="(Egg-Muffin / Objetivo) × 100"
      />
    </ReportLayout>
  );
};

export default EggMuffin;