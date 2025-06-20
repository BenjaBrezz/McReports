import React, { useState } from 'react';
import ReportLayout from '../../components/ReportLayout';
import CalculatorCard from '../../components/CalculatorCard';

const ExtraSalsa: React.FC = () => {
  const [mcflurry, setMcflurry] = useState<number>(0);
  const [sundae, setSundae] = useState<number>(0);
  const [toppings, setToppings] = useState<number>(0);

  const calculateCompliance = () => {
    const total = mcflurry + sundae;
    if (total === 0) return 0;
    return (toppings / total) * 100;
  };

  const inputs = [
    {
      id: 'mcflurry',
      label: 'McFlurry',
      value: mcflurry,
      onChange: setMcflurry,
      placeholder: 'Cantidad de McFlurry vendidos'
    },
    {
      id: 'sundae',
      label: 'Sundae',
      value: sundae,
      onChange: setSundae,
      placeholder: 'Cantidad de Sundae vendidos'
    },
    {
      id: 'toppings',
      label: 'Toppings',
      value: toppings,
      onChange: setToppings,
      placeholder: 'Cantidad de toppings vendidos'
    }
  ];

  return (
    <ReportLayout
      title="Reporte Extra Salsa"
      description="Calcula el porcentaje de cumplimiento de toppings respecto a helados vendidos"
    >
      <CalculatorCard
        inputs={inputs}
        result={calculateCompliance()}
        resultLabel="Porcentaje de Cumplimiento"
        formula="(Toppings / (McFlurry + Sundae)) × 100"
      />
    </ReportLayout>
  );
};

export default ExtraSalsa;