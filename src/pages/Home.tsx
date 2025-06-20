import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, Clock, BarChart3 } from 'lucide-react';

const Home: React.FC = () => {
  const reportCards = [
    {
      title: 'Extra Salsa',
      description: 'Reporte de cumplimiento de toppings vs helados',
      path: '/extra-salsa',
      color: 'from-red-500 to-red-600 dark:from-red-600 dark:to-red-700',
    },
    {
      title: 'Promoción EggMuffin',
      description: 'Seguimiento de objetivos EggMuffin',
      path: '/egg-muffin',
      color: 'from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700',
    },
    {
      title: 'CDP',
      description: 'Control de Gestión de Rendimiento',
      path: '/cdp',
      color: 'from-green-500 to-green-600 dark:from-green-600 dark:to-green-700',
    },
    {
      title: 'Agranda Combos',
      description: 'Análisis de upselling de combos',
      path: '/agranda-combos',
      color: 'from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700',
    },
    {
      title: 'Canales Digitales',
      description: 'Rendimiento de pedidos digitales',
      path: '/digital-channels',
      color: 'from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700',
    },
    {
      title: 'McxMenos',
      description: 'Reporte integral McxMenos y acompañamientos',
      path: '/mcxmenos',
      color: 'from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header Section */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Reportes Operacionales
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Plataforma centralizada para la generación y visualización de reportes de cumplimiento
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="card p-6 text-center animate-slide-up">
          <Calculator className="w-8 h-8 text-mcd-red dark:text-mcd-yellow mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800 dark:text-white">6</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Calculadoras</div>
        </div>
        <div className="card p-6 text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
          <TrendingUp className="w-8 h-8 text-mcd-yellow dark:text-mcd-red mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800 dark:text-white">100%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Precisión</div>
        </div>
        <div className="card p-6 text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
          <Clock className="w-8 h-8 text-green-500 dark:text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800 dark:text-white">Real-time</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Cálculos</div>
        </div>
        <div className="card p-6 text-center animate-slide-up" style={{animationDelay: '0.3s'}}>
          <BarChart3 className="w-8 h-8 text-blue-500 dark:text-blue-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800 dark:text-white">24/7</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Disponible</div>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportCards.map((report, index) => (
          <Link
            key={report.path}
            to={report.path}
            className="group block animate-slide-up"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="card p-6 h-full hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${report.color} mb-4 flex items-center justify-center shadow-lg`}>
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-mcd-red dark:group-hover:text-mcd-yellow transition-colors">
                {report.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {report.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;