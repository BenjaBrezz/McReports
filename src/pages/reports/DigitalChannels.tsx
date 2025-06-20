import React, { useState } from 'react';
import ReportLayout from '../../components/ReportLayout';
import CalculatorCard from '../../components/CalculatorCard';

const DigitalChannels: React.FC = () => {
  const [ccdd, setCcdd] = useState<number>(0);
  const [objective, setObjective] = useState<number>(0);

  const calculateCompliance = () => {
    if (objective === 0) return 0;
    return (ccdd / objective) * 100;
  };

  const inputs = [
    {
      id: 'ccdd',
      label: 'CC.DD (Canales Digitales)',
      value: ccdd,
      onChange: setCcdd,
      placeholder: 'Ventas a través de canales digitales'
    },
    {
      id: 'objective',
      label: 'Objetivo',
      value: objective,
      onChange: setObjective,
      placeholder: 'Objetivo de ventas digitales'
    }
  ];

  return (
    <ReportLayout
      title="Canales Digitales"
      description="Seguimiento del rendimiento de pedidos a través de canales digitales"
    >
      <CalculatorCard
        inputs={inputs}
        result={calculateCompliance()}
        resultLabel="Porcentaje de Cumplimiento Digital"
        formula="(CC.DD / Objetivo) × 100"
      />
    </ReportLayout>
  );
};

export default DigitalChannels;